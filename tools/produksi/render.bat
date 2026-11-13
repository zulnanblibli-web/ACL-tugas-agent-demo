@echo off
rem Klik dua kali = render semua episode berstatus naskah-disetujui. Hasil masuk ke produksi\<akun>\<tanggal>_<judul>\final\
setlocal
set "GB=%ProgramFiles%\Git\bin\bash.exe"
if not exist "%GB%" set "GB=%LocalAppData%\Programs\Git\bin\bash.exe"
if not exist "%GB%" ( echo Git Bash tidak ditemukan. Jalankan pasang.bat dulu. & pause & exit /b 1 )
set "ARGS=%*"
if "%ARGS%"=="" set "ARGS=--semua"
"%GB%" -lc "cd \"$(cygpath -u '%~dp0')/../..\" && sh tools/produksi/render.sh %ARGS%"
echo.
pause
