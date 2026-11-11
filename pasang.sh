#!/usr/bin/env bash
# Pasang semua kebutuhan lokal (macOS, Linux, WSL, VPS) dengan satu perintah:  bash pasang.sh
# Pilihan: --inti (tanpa paket opsional), --semua (semua paket), --coba (lihat langkah saja).
exec bash "$(dirname "$0")/tools/pasang/pasang.sh" "$@"
