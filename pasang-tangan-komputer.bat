@echo off
rem Pasang "tangan komputer" Zuno (khusus Divisi Engineering) di Windows: klik dua kali, cukup sekali.
rem Otak: Claude Desktop (Remote Control). Tangan: agent-desktop (Vercel Labs, Apache-2.0).
rem Yang dipasang: agent-desktop, CLI deploy clasp (Apps Script) / Firebase / Vercel, folder C:\zuno-proyek.
rem Panduan lengkap: docs\tangan-komputer.md
chcp 65001 >nul
title Pasang tangan komputer Zuno
cd /d "%~dp0"

echo %~dp0 | find /i "\Temp\" >nul
if not errorlevel 1 goto darizip
if not exist "%~dp0CLAUDE.md" goto bukanrepo

echo ============================================================
echo  Pasang tangan komputer Zuno (Divisi Engineering)
echo ============================================================
echo  Yang akan dipasang di laptop ini:
echo   1. agent-desktop : tangan Claude untuk melihat dan mengklik aplikasi
echo   2. CLI deploy    : clasp (Apps Script), Firebase, Vercel
echo   3. Folder kerja  : C:\zuno-proyek (unduhan + proyek)
echo   4. Sambungan agent-desktop ke Claude Desktop
echo   5. Login sekali  : clasp / firebase / vercel (kamu sendiri, di browser)
echo.
echo  Tidak ada key atau password yang diminta di jendela ini.
echo ============================================================
pause

where node >nul 2>nul
if errorlevel 1 goto nonode
node -e "process.exit(+process.versions.node.split('.')[0]<20?1:0)"
if errorlevel 1 goto nodelama
where npm >nul 2>nul
if errorlevel 1 goto nonpm

echo.
echo [1/5] Memasang agent-desktop...
call npm install -g agent-desktop@latest --no-audit --no-fund
if errorlevel 1 goto gagalnpm
call agent-desktop status
if errorlevel 1 echo [PERINGATAN] agent-desktop status tidak berhasil. Lanjut dulu; kirim tulisan di atas ke Claude bila nanti tidak jalan.

echo.
echo [2/5] Memasang CLI deploy (clasp, Firebase, Vercel)...
call npm install -g @google/clasp firebase-tools vercel --no-audit --no-fund
if errorlevel 1 echo [PERINGATAN] Sebagian CLI gagal dipasang. rilis.mjs akan mencoba memasangnya lagi saat dibutuhkan.

echo.
echo [3/5] Membuat folder kerja C:\zuno-proyek ...
if not exist "C:\zuno-proyek\unduhan" mkdir "C:\zuno-proyek\unduhan"
if not exist "C:\zuno-proyek\proyek" mkdir "C:\zuno-proyek\proyek"
> "C:\zuno-proyek\BACA-DULU.txt" echo Folder kerja rilis Zuno. unduhan\ = tempat paket *_rilis.zip dari Agent Builder. proyek\ = hasil ekstrak + rilis. Folder ini dibagikan ke Claude lewat Remote Control. Jangan taruh file pribadi di sini.

echo.
echo [4/5] Menyambungkan agent-desktop ke Claude Desktop...
call node "%~dp0tools\laptop\sambung-agent-desktop.mjs"

echo.
echo [5/5] Login sekali per alat (browser terbuka, pilih akun Google/Vercel milikmu, Izinkan).
choice /c YN /n /m "Login clasp sekarang (mesin Apps Script)? (Y/N): "
if errorlevel 2 goto lewatclasp
call clasp login
echo Nyalakan juga Google Apps Script API (sekali): halaman pengaturannya dibuka sekarang.
start "" "https://script.google.com/home/usersettings"
:lewatclasp
choice /c YN /n /m "Login Firebase sekarang (mesin Firebase)? (Y/N): "
if errorlevel 2 goto lewatfirebase
call firebase login
:lewatfirebase
choice /c YN /n /m "Login Vercel sekarang (mesin Vercel + Supabase)? (Y/N): "
if errorlevel 2 goto lewatvercel
call vercel login
:lewatvercel

echo.
echo ============================================================
echo  Hampir selesai. Tiga langkah sekali saja di aplikasi:
echo   1. Claude Desktop: Settings ^> Claude Code ^> Remote Control,
echo      tambahkan folder C:\zuno-proyek lalu nyalakan.
echo   2. Chrome: Setelan ^> Download ^> Lokasi = C:\zuno-proyek\unduhan
echo      (paket rilis dari Agent Builder langsung masuk ke sini).
echo   3. Tutup Claude Desktop (Quit dari tray) lalu buka lagi.
echo.
echo  Cara pakai setelah itu:
echo   Unduh paket rilis di tab Agent Builder, lalu bilang ke Claude
echo   (di HP atau laptop): "rilis proyek nama-aplikasi".
echo   Claude + agent-desktop membawanya sampai live dan mengirim link.
echo  Laptop harus menyala, tidak terkunci, dan Claude Desktop terbuka.
echo ============================================================
goto akhir

:darizip
echo [GAGAL] Berkas ini dijalankan dari dalam ZIP. Klik kanan ZIP, pilih Extract All, lalu jalankan dari folder hasil ekstrak.
goto akhir
:bukanrepo
echo [GAGAL] Berkas ini harus berada di folder repo Zuno (yang berisi CLAUDE.md).
goto akhir
:nonode
echo [GAGAL] Node.js belum terpasang. Pasang versi LTS dari https://nodejs.org lalu jalankan berkas ini lagi.
goto akhir
:nodelama
echo [GAGAL] Node.js terlalu lama. Pasang versi LTS terbaru dari https://nodejs.org lalu jalankan lagi.
goto akhir
:nonpm
echo [GAGAL] npm tidak ditemukan. Pasang ulang Node.js LTS dari https://nodejs.org.
goto akhir
:gagalnpm
echo [GAGAL] Pemasangan lewat npm gagal. Cek internet; bila memakai VPN, coba matikan atau nyalakan lalu ulangi.
goto akhir

:akhir
echo.
pause
