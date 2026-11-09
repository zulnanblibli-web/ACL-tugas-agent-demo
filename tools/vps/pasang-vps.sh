#!/usr/bin/env bash
# Nexaoffice: pasang server di VPS Ubuntu/Debian (Node 20 + layanan systemd + Caddy untuk HTTPS otomatis).
# Jalankan sebagai root di folder repo yang sudah di-clone (repo Zuno atau repo jasa), contoh:
#   git clone <repo> /opt/nexaoffice && cd /opt/nexaoffice
#   bash tools/vps/pasang-vps.sh --domain ai.domainmu.com --situs https://zuno-studio-dusky.vercel.app
# --domain  domain/subdomain yang A record-nya sudah mengarah ke IP VPS (wajib untuk HTTPS)
# --situs   alamat situs lain (mis. Vercel) yang boleh memakai server ini lewat menu Pengaturan AI (boleh lebih dari satu, pisahkan koma)
# --port    port internal (bawaan 3000)
# API key AI diminta di terminal (tidak tampil saat diketik) dan hanya disimpan di .env.local di VPS (izin 600).
# Jangan tempel API key atau kunci akses ke chat.
set -euo pipefail

DOMAIN=""; SITUS=""; PORT="3000"
while [ $# -gt 0 ]; do
  case "$1" in
    --domain) DOMAIN="${2:-}"; shift 2 ;;
    --situs) SITUS="${2:-}"; shift 2 ;;
    --port) PORT="${2:-3000}"; shift 2 ;;
    *) echo "Opsi tidak dikenal: $1"; exit 1 ;;
  esac
done
[ "$(id -u)" -eq 0 ] || { echo "Jalankan sebagai root (sudo bash tools/vps/pasang-vps.sh ...)"; exit 1; }
command -v apt-get >/dev/null || { echo "Skrip ini untuk Ubuntu/Debian (apt-get)."; exit 1; }

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
if [ -f "$ROOT/web/dev-server.mjs" ]; then APP="$ROOT/web"; ENTRY="dev-server.mjs"; else APP="$ROOT"; ENTRY="server.mjs"; fi
[ -f "$APP/$ENTRY" ] || { echo "Tidak menemukan $APP/$ENTRY. Jalankan dari repo Nexaoffice/Zuno."; exit 1; }
echo "== Folder aplikasi: $APP ($ENTRY)"

# 1. Node.js 20+
NODE_MAJOR=0; command -v node >/dev/null && NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
if [ "$NODE_MAJOR" -lt 20 ]; then
  echo "== Memasang Node.js 20"
  apt-get update -y && apt-get install -y ca-certificates curl gnupg
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi

# 2. Paket aplikasi
echo "== npm ci"
(cd "$APP" && npm ci --omit=dev)

# 3. Pengguna layanan
id nexaoffice >/dev/null 2>&1 || useradd --system --home-dir "$APP" --shell /usr/sbin/nologin nexaoffice

# 4. Pengaturan (.env.local)
ENVF="$APP/.env.local"
[ -f "$ENVF" ] || cp "$APP/.env.local.example" "$ENVF"
setenv() { node -e '
  const fs=require("fs"),[f,k,v]=process.argv.slice(1);
  let t=fs.readFileSync(f,"utf8"); const re=new RegExp("^"+k+"=.*$","m");
  t=re.test(t)?t.replace(re,()=>k+"="+v):t.replace(/\n?$/,"\n")+k+"="+v+"\n"; fs.writeFileSync(f,t);' "$ENVF" "$1" "$2"; }
getenv() { node -e 'const fs=require("fs");const m=fs.readFileSync(process.argv[1],"utf8").match(new RegExp("^"+process.argv[2]+"=(.*)$","m"));process.stdout.write(m?m[1].trim():"")' "$ENVF" "$1"; }
setenv NEXA_SERVER vps
setenv HOST 127.0.0.1
setenv PORT "$PORT"
[ -n "$SITUS" ] && setenv NEXA_CORS_ORIGIN "$SITUS"
if [ -z "$(getenv ZUNO_ACCESS_KEY)" ]; then
  setenv ZUNO_ACCESS_KEY "$(node -e 'process.stdout.write(require("crypto").randomBytes(24).toString("base64url"))')"
  echo "== Kunci akses baru dibuat di $ENVF (ZUNO_ACCESS_KEY). Lihat dengan: sudo grep ZUNO_ACCESS_KEY $ENVF"
fi
if [ -t 0 ]; then
  read -rp "Penyedia AI [gemini/claude/openai/openrouter/openai-compatible] (Enter = $(getenv AI_PROVIDER || true)): " PROV || true
  [ -n "${PROV:-}" ] && setenv AI_PROVIDER "$PROV"
  PROV="$(getenv AI_PROVIDER)"
  case "$PROV" in
    gemini) KEYVAR=GEMINI_API_KEY ;; claude) KEYVAR=ANTHROPIC_API_KEY ;; openai) KEYVAR=OPENAI_API_KEY ;;
    openrouter) KEYVAR=OPENROUTER_API_KEY ;; openai-compatible) KEYVAR=AI_API_KEY ;; *) KEYVAR="" ;;
  esac
  if [ -n "$KEYVAR" ]; then
    read -rsp "API key untuk $PROV ($KEYVAR), tidak tampil saat diketik. Enter = lewati: " AIKEY || true; echo
    [ -n "${AIKEY:-}" ] && setenv "$KEYVAR" "$AIKEY"
    unset AIKEY
  fi
fi
chown -R nexaoffice:nexaoffice "$ROOT"
chmod 600 "$ENVF"

# 5. Layanan systemd
sed -e "s#__APP__#$APP#g" -e "s#__ENTRY__#$ENTRY#g" "$ROOT/tools/vps/nexaoffice.service" > /etc/systemd/system/nexaoffice.service
systemctl daemon-reload
systemctl enable --now nexaoffice
systemctl restart nexaoffice

# 6. Caddy (HTTPS otomatis dari Let's Encrypt)
if [ -n "$DOMAIN" ]; then
  if ! command -v caddy >/dev/null; then
    echo "== Memasang Caddy"
    apt-get install -y debian-keyring debian-archive-keyring apt-transport-https curl gnupg
    curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor --yes -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
    curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' > /etc/apt/sources.list.d/caddy-stable.list
    apt-get update -y && apt-get install -y caddy
  fi
  sed -e "s#__DOMAIN__#$DOMAIN#g" -e "s#__PORT__#$PORT#g" "$ROOT/tools/vps/Caddyfile.contoh" > /etc/caddy/Caddyfile
  systemctl reload caddy || systemctl restart caddy
  if command -v ufw >/dev/null && ufw status | grep -q "Status: active"; then ufw allow 80/tcp; ufw allow 443/tcp; fi
fi

# 7. Cek
sleep 2
echo "== Status server:"
curl -fsS "http://127.0.0.1:$PORT/api/status" || { echo; echo "Server belum menjawab. Lihat: journalctl -u nexaoffice -n 50"; exit 1; }
echo
if [ -n "$DOMAIN" ]; then
  echo "Selesai. Buka https://$DOMAIN (halaman lengkap) atau isi https://$DOMAIN di menu Pengaturan AI > Server VPS."
else
  echo "Selesai tanpa domain: server hanya bisa dicapai dari VPS ini. Ulangi dengan --domain untuk HTTPS."
fi
