#!/bin/sh
# Build satu episode: gambar -> audio -> gabung. Hasil: ../final/<tanggal>_<judul>.mp4 + poster.jpg
set -e
HERE=$(cd "$(dirname "$0")" && pwd)
EP=$(dirname "$HERE"); NAMA=$(basename "$EP")
LIB=${LIB:-$HOME/lemo-opuscar}; export LIB
[ -f "$LIB/core/render/video.mjs" ] || { echo "set LIB ke folder lemo-opuscar"; exit 1; }
mkdir -p "$EP/final"
cd "$LIB"
node core/render/events.mjs "$HERE" --size 1080x1920
node core/render/video.mjs "$HERE" --fps 24 --workers ${WORKERS:-2} --size 1080x1920 --out "$HERE/out/video.mp4"
"$LIB/.venv/bin/python" "$HERE/mix.py"
sh core/render/mux.sh "$HERE/out/video.mp4" "$HERE/out/mix.wav" "$EP/final/$NAMA.mp4" 24
node core/render/still.mjs "$HERE" ${POSTER_T:-2} --size 1080x1920 --out "$HERE/stills" && cp "$HERE/stills/t_${POSTER_T:-2}.jpg" "$EP/final/poster.jpg"
