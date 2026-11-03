@echo off
rem Zuno Web lokal untuk Windows: klik dua kali berkas ini.
rem Bila gagal, kirim isi web\server-lokal.log (tanpa key) ke Claude Code.
chcp 65001 >nul
title Zuno Web lokal

rem Dijalankan langsung dari dalam ZIP? Windows menaruhnya di folder Temp, jadi folder web tidak ikut.
echo %~dp0 | find /i "\Temp\" >nul
if not errorlevel 1 goto darizip
if not exist "%~dp0web\dev-server.mjs" goto tanpaweb
cd /d "%~dp0web"

where node >nul 2>nul
if errorlevel 1 goto nonode
node -e "process.exit(+process.versions.node.split('.')[0]<20?1:0)"
if errorlevel 1 goto nodelama
for /f "delims=" %%v in ('node -v') do echo Node.js %%v terpasang.

if exist node_modules\@anthropic-ai\sdk goto sudahpaket
where npm >nul 2>nul
if errorlevel 1 goto nonpm
echo Memasang paket, cukup sekali. Tunggu sebentar...
call npm install --no-audit --no-fund
if errorlevel 1 goto gagalnpm
:sudahpaket

if exist .env.local goto sudahenv
copy .env.local.example .env.local >nul
echo.
echo Berkas pengaturan dibuat: web\.env.local
echo Isi ZUNO_ACCESS_KEY dan key penyedia AI di Notepad yang terbuka, simpan, tutup Notepad.
echo Server akan jalan setelah Notepad ditutup.
echo.
notepad .env.local
:sudahenv

echo Menyalakan server. Browser terbuka otomatis setelah server siap.
node dev-server.mjs --buka
echo.
echo Server berhenti. Bila tadi ada tulisan [GAGAL], baca sarannya atau kirim isi web\server-lokal.log ke Claude Code.
pause
exit /b

:darizip
echo Berkas ini dijalankan dari dalam ZIP. Klik kanan ZIP, pilih "Extract All", lalu jalankan jalankan-lokal.bat dari folder hasil ekstrak.
pause
exit /b

:tanpaweb
echo Folder "web" tidak ditemukan di samping berkas ini. Pastikan jalankan-lokal.bat ada di folder utama repo (sejajar dengan folder web).
pause
exit /b

:nonode
echo Node.js belum terpasang. Pasang versi LTS dari https://nodejs.org, tutup jendela ini, lalu jalankan lagi.
pause
exit /b

:nodelama
for /f "delims=" %%v in ('node -v') do echo Node.js %%v terlalu lama. Pasang versi 20 atau lebih baru dari https://nodejs.org.
pause
exit /b

:nonpm
echo npm tidak ditemukan. Pasang ulang Node.js dari https://nodejs.org (npm ikut terpasang).
pause
exit /b

:gagalnpm
echo Gagal memasang paket. Cek internet. Bila memakai VPN (mis. VeePN), matikan sebentar lalu jalankan lagi.
pause
exit /b
