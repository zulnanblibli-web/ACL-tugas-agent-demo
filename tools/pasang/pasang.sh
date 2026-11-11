#!/usr/bin/env bash
# Pemasang satu perintah untuk macOS, Linux (Ubuntu/Debian), WSL, dan VPS.
#   bash pasang.sh            tanya dulu untuk paket opsional (video, YouTube, Blender, alat dokumen)
#   bash pasang.sh --inti     hanya paket inti, tanpa pertanyaan
#   bash pasang.sh --semua    inti + semua paket opsional, tanpa pertanyaan
#   bash pasang.sh --coba     hanya menampilkan langkah, tidak memasang apa pun
# Tidak meminta dan tidak menyimpan API key. Key diisi sendiri di file .env.local.
# Panduan lengkap: docs/panduan-pasang-lokal.md (repo Zuno) atau PANDUAN-LOKAL.md (repo jasa).
set -u
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT" || exit 1
MODE="tanya"
for a in "$@"; do case "$a" in --inti) MODE="inti";; --semua) MODE="semua";; --coba) MODE="coba";; esac; done
COBA=0; [ "$MODE" = "coba" ] && COBA=1

if [ -f "$ROOT/web/dev-server.mjs" ]; then WEB="$ROOT/web"; SERVER="node web/dev-server.mjs --buka"
elif [ -f "$ROOT/server.mjs" ]; then WEB="$ROOT"; SERVER="node server.mjs --buka"
else echo "[GAGAL] Jalankan dari folder repo (ada web/dev-server.mjs atau server.mjs)."; exit 1; fi

OS="$(uname -s)"; PM=""
if [ "$OS" = "Darwin" ]; then PM="brew"; elif command -v apt-get >/dev/null 2>&1; then PM="apt"; fi
SUDO=""; if [ "$(id -u)" != "0" ] && command -v sudo >/dev/null 2>&1; then SUDO="sudo"; fi
export PATH="$HOME/.local/bin:$PATH"
GAGAL=()

langkah() { echo; echo "==> $*"; }
jalan() { echo "    \$ $*"; [ $COBA = 1 ] && return 0; bash -c "$*"; local r=$?; [ $r != 0 ] && GAGAL+=("$*"); return $r; }
ada() { command -v "$1" >/dev/null 2>&1; }
mayor() { "$1" --version 2>/dev/null | grep -oE '[0-9]+' | head -1; }
tanya() { [ "$MODE" = "semua" ] && return 0; [ "$MODE" != "tanya" ] && return 1; read -r -p "    $1 (y/n): " j; [ "$j" = "y" ] || [ "$j" = "Y" ]; }
APT_SIAP=0
pasang_pm() { # pasang_pm <nama-brew> <nama-apt>
  if [ "$PM" = "brew" ]; then jalan "brew install $1"
  elif [ "$PM" = "apt" ]; then [ $APT_SIAP = 0 ] && { jalan "$SUDO apt-get update -y"; APT_SIAP=1; }; jalan "$SUDO apt-get install -y $2"
  else echo "    [LEWAT] Pasang $1 sendiri (pengelola paket tidak dikenali)."; GAGAL+=("pasang $1 sendiri"); fi
}

echo "============================================================"
echo " Pasang lokal: web + Claude Code + skill ($OS, mode $MODE)"
echo " Folder: $ROOT"
echo "============================================================"
if [ "$PM" = "brew" ] && ! ada brew; then
  echo "[GAGAL] Homebrew belum ada. Pasang dulu dari https://brew.sh lalu jalankan lagi."; exit 1; fi

langkah "1/7 Alat dasar: git, curl, Python 3, ffmpeg"
ada git || pasang_pm git git
ada curl || pasang_pm curl "curl ca-certificates"
ada python3 || pasang_pm python "python3 python3-venv python3-pip"
ada ffmpeg || pasang_pm ffmpeg ffmpeg

langkah "2/7 Node.js 22 atau lebih baru"
if ada node && [ "$(mayor node)" -ge 22 ]; then echo "    Node $(node -v) sudah ada."
elif [ "$PM" = "brew" ]; then jalan "brew install node@22 && brew link --overwrite --force node@22"
elif [ "$PM" = "apt" ]; then jalan "curl -fsSL https://deb.nodesource.com/setup_22.x | $SUDO -E bash - && $SUDO apt-get install -y nodejs"
else echo "    [LEWAT] Pasang Node.js 22+ dari https://nodejs.org"; GAGAL+=("Node.js 22+"); fi

langkah "3/7 uv (pemasang alat Python) dan Claude Code"
ada uv || jalan "curl -LsSf https://astral.sh/uv/install.sh | sh"
if ada claude; then echo "    Claude Code $(claude --version 2>/dev/null) sudah ada."
else jalan "curl -fsSL https://claude.ai/install.sh | bash"; fi

langkah "4/7 Paket web (npm install) dan file pengaturan"
if [ -d "$WEB/node_modules/@anthropic-ai/sdk" ]; then echo "    Paket web sudah terpasang."
else jalan "cd '$WEB' && npm install --no-audit --no-fund"; fi
if [ -f "$WEB/.env.local" ]; then echo "    $WEB/.env.local sudah ada (tidak diubah)."
else jalan "cp '$WEB/.env.local.example' '$WEB/.env.local'"; echo "    Isi ZUNO_ACCESS_KEY dan satu key AI di $WEB/.env.local (buka dengan editor teks)."; fi

langkah "5/7 Browser untuk pemeriksa skill (Chrome/Edge/Chromium)"
if ada google-chrome || ada chromium || ada chromium-browser || ada microsoft-edge || [ -d "/Applications/Google Chrome.app" ] || [ -d "$HOME/.cache/ms-playwright" ] || [ -d /opt/pw-browsers ]; then echo "    Browser sudah ada."
else
  if [ "$PM" = "apt" ]; then jalan "npx -y playwright@latest install --with-deps chromium"; else jalan "npx -y playwright@latest install chromium"; fi
fi

langkah "6/7 Paket opsional"
if tanya "Video lemo-opuscar (film dari kode; unduh sekitar 350 MB - 1 GB)?"; then
  [ "$(ffmpeg -version 2>/dev/null | grep -oE 'version n?[0-9]+' | grep -oE '[0-9]+')" -ge 7 ] 2>/dev/null || echo "    [PERINGATAN] lemo-opuscar butuh ffmpeg 7+. Versi sekarang lebih lama; lihat panduan bagian Video."
  jalan "bash .claude/skills/lemo-opuscar/scripts/setup.sh && bash .claude/skills/lemo-opuscar/scripts/setup.sh deps"
fi
if tanya "YouTube (paket Python pembaca data channel + yt-dlp)?"; then
  jalan "uv tool install yt-dlp"
  jalan "python3 -m pip install --user google-api-python-client google-auth-oauthlib || { uv venv \"\$HOME/.zuno-py\" && uv pip install --python \"\$HOME/.zuno-py\" google-api-python-client google-auth-oauthlib; }"
fi
if tanya "Blender + blender-mcp (aset 3D/game; butuh layar, tidak untuk VPS)?"; then
  if ! ada blender; then
    if [ "$PM" = "brew" ]; then jalan "brew install --cask blender"; elif [ "$PM" = "apt" ]; then pasang_pm blender blender; fi
  fi
  if ada claude; then jalan "claude mcp add -s user blender -e DISABLE_TELEMETRY=true -- uvx --python 3.11 blender-mcp"; fi
  echo "    Langkah manual: pasang addon BlenderMCP di Blender (lihat panduan bagian Blender)."
fi
if tanya "Alat dokumen docling + peta kode graphify (docling cukup besar)?"; then
  ada docling || jalan "uv tool install docling"
  ada graphify || jalan "uv tool install graphifyy"
fi

langkah "7/7 Cek kesiapan"
if ada node; then [ $COBA = 1 ] && echo "    \$ node tools/pasang/cek-kesiapan.mjs" || node tools/pasang/cek-kesiapan.mjs; fi

echo "============================================================"
if [ ${#GAGAL[@]} -gt 0 ]; then echo " Ada langkah yang gagal/terlewat:"; for g in "${GAGAL[@]}"; do echo "  - $g"; done; echo " Baca pesannya, perbaiki, lalu jalankan lagi (yang sudah terpasang dilewati)."; fi
echo " Berikutnya:"
echo "  1. Isi key di $WEB/.env.local (kalau belum)."
echo "  2. Login Claude Code sekali: ketik  claude  di folder ini, lalu ikuti /login (atau isi ANTHROPIC_API_KEY)."
echo "  3. Nyalakan web:  $SERVER   lalu buka http://localhost:3000"
echo "  4. Kerja dengan skill: buka  claude  di folder ini; skill di .claude/skills terbaca otomatis."
echo "============================================================"
