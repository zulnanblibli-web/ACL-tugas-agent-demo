@echo off
rem Zuno Web lokal untuk Windows: klik dua kali berkas ini.
chcp 65001 >nul
cd /d "%~dp0web"

where node >nul 2>nul
if errorlevel 1 goto nonode

if exist node_modules goto sudahpaket
echo Memasang paket, cukup sekali. Tunggu sebentar...
call npm install
if errorlevel 1 goto gagalnpm
:sudahpaket

if exist .env.local goto sudahenv
copy .env.local.example .env.local >nul
echo.
echo Berkas pengaturan dibuat: web\.env.local
echo Isi ZUNO_ACCESS_KEY dan key penyedia AI di berkas yang terbuka, simpan, lalu jalankan berkas ini lagi.
echo.
notepad .env.local
pause
exit /b
:sudahenv

start "" cmd /c "timeout /t 3 >nul & start http://localhost:3000"
node dev-server.mjs
pause
exit /b

:nonode
echo Node.js belum terpasang. Pasang dulu dari https://nodejs.org lalu jalankan lagi.
pause
exit /b

:gagalnpm
echo Gagal memasang paket. Cek koneksi internet lalu jalankan lagi.
pause
exit /b
