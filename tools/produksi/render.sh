#!/bin/sh
# Render satu atau beberapa episode di laptop; hasil langsung masuk ke folder episode:
#   produksi/<akun>/<tanggal>_<judul>/final/<tanggal>_<judul>.mp4  (+ poster.jpg)
# Pakai (Git Bash di Windows, atau sh di macOS/Linux), dari folder repo:
#   sh tools/produksi/render.sh produksi/teknikdibedah/2026-11-13_kenapa-gedung-tinggi-nggak-roboh-kena-angin
#   sh tools/produksi/render.sh --semua        (semua episode berstatus naskah-disetujui)
set -e
REPO=$(cd "$(dirname "$0")/../.." && pwd)
cd "$REPO"
for a in git node npm ffmpeg; do command -v $a >/dev/null 2>&1 || { echo "[KURANG] $a: jalankan pasang.bat dulu"; exit 1; }; done
LIB=${LIB:-$HOME/lemo-opuscar}; export LIB
if [ ! -f "$LIB/AGENTS.md" ]; then git clone --depth 1 https://github.com/lemomo-ai/lemo-opuscar.git "$LIB"; fi
(cd "$LIB" && sh plugin/skills/lemo-opuscar/scripts/setup.sh deps >/dev/null)
[ -f "$LIB/core/assets/polyhaven/photo_studio_loft_hall_2k.hdr" ] || (cd "$LIB" && sh tools/fetch.sh hdri)
if [ "$1" = "--semua" ]; then
  set -- $(for f in produksi/*/*/episode.json; do grep -q '"status": "naskah-disetujui"' "$f" && dirname "$f"; done)
  [ $# -gt 0 ] || { echo "Tidak ada episode berstatus naskah-disetujui."; exit 0; }
fi
for EP in "$@"; do
  EP=$(cd "$EP" && pwd); NAMA=$(basename "$EP")
  echo "== Render $NAMA (mulai $(date +%T))"
  node tools/produksi/status.mjs "$EP" render "render di laptop dimulai"
  sh "$EP/proyek/build.sh"
  node tools/produksi/status.mjs "$EP" ditinjau "render selesai: final/$NAMA.mp4"
  echo "== Selesai: $EP/final/$NAMA.mp4 ($(date +%T))"
done
node tools/produksi/rekap.mjs
