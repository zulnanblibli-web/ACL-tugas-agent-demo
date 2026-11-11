@echo off
rem Pasang semua kebutuhan lokal di Windows dengan satu klik (atau ketik: pasang.bat).
rem Pilihan: pasang.bat -Inti   (tanpa paket opsional)   pasang.bat -Semua   pasang.bat -Coba (lihat langkah saja)
rem Panduan: docs\panduan-pasang-lokal.md (repo Zuno) atau PANDUAN-LOKAL.md (repo jasa).
chcp 65001 >nul
title Pasang lokal
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0tools\pasang\pasang.ps1" %*
echo.
pause
