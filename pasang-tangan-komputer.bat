@echo off
rem Pasang "tangan komputer" Zuno (khusus Divisi Engineering) di Windows: klik dua kali, cukup sekali.
rem Yang dipasang: agent-desktop (Vercel Labs, Apache-2.0), Claude Code bila belum ada,
rem CLI deploy Vercel / clasp / Firebase (opsional), Context7 (opsional).
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
echo   1. agent-desktop  : Claude bisa melihat dan mengklik aplikasi
echo   2. Claude Code    : bila belum terpasang
echo   3. Sambungan agent-desktop ke Claude Code, khusus folder ini
echo   4. CLI deploy     : Vercel, clasp (Apps Script), Firebase (ditanya dulu)
echo   5. Context7       : dokumentasi library untuk Engineering (ditanya dulu)
echo.
echo  Tidak ada key atau password yang diminta di sini.
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
call npm install -g agent-desktop@1.1.0 --no-audit --no-fund
if errorlevel 1 goto gagalnpm
call agent-desktop status
if errorlevel 1 echo [PERINGATAN] agent-desktop status tidak berhasil. Lanjut dulu; kirim tulisan di atas ke Claude bila nanti tidak jalan.

echo.
echo [2/5] Mengecek Claude Code...
where claude >nul 2>nul
if not errorlevel 1 goto adaclaude
echo Claude Code belum ada. Memasang...
call npm install -g @anthropic-ai/claude-code --no-audit --no-fund
if errorlevel 1 goto gagalnpm
:adaclaude
for /f "delims=" %%v in ('claude --version') do echo Claude Code %%v

echo.
echo [3/5] Menyambungkan agent-desktop ke Claude Code untuk folder ini...
call claude mcp remove agent-desktop -s local >nul 2>nul
call claude mcp add --scope local agent-desktop -- agent-desktop mcp
if errorlevel 1 echo [PERINGATAN] Gagal menyambungkan. Jalankan manual di folder ini: claude mcp add --scope local agent-desktop -- agent-desktop mcp

echo.
echo Mau Claude memakai tangan komputer tanpa minta izin di setiap klik?
echo  Y = jalan sendiri. Aturan larangan di CLAUDE.md tetap berlaku.
echo  N = Claude minta izin dulu tiap kali memakai agent-desktop.
choice /c YN /n /m "Pilih Y atau N: "
if errorlevel 2 goto lewatizin
if exist ".claude\settings.local.json" goto adasetting
> ".claude\settings.local.json" echo {"permissions":{"allow":["mcp__agent-desktop"]}}
echo Izin disimpan di .claude\settings.local.json (hanya di laptop ini, tidak ikut ke GitHub).
goto lewatizin
:adasetting
echo .claude\settings.local.json sudah ada, tidak ditimpa. Tambahkan sendiri "mcp__agent-desktop" ke permissions.allow, atau minta Claude.
:lewatizin

echo.
echo [4/5] CLI deploy untuk membawa web app sampai live.
choice /c YN /n /m "Pasang Vercel CLI (mesin Vercel + Supabase)? (Y/N): "
if errorlevel 2 goto lewatvercel
call npm install -g vercel --no-audit --no-fund
:lewatvercel
choice /c YN /n /m "Pasang clasp (mesin Apps Script)? (Y/N): "
if errorlevel 2 goto lewatclasp
call npm install -g @google/clasp --no-audit --no-fund
:lewatclasp
choice /c YN /n /m "Pasang Firebase CLI (mesin Firebase)? (Y/N): "
if errorlevel 2 goto lewatfirebase
call npm install -g firebase-tools --no-audit --no-fund
:lewatfirebase
echo Login CLI dilakukan sendiri sekali saja: vercel login / clasp login / firebase login

:ctx7
echo.
echo [5/5] Context7 (opsional): dokumentasi library terbaru untuk Divisi Engineering.
echo Browser akan terbuka untuk login Context7. Login dilakukan sendiri, jangan kirim key ke chat.
choice /c YN /n /m "Pasang Context7 sekarang? (Y/N): "
if errorlevel 2 goto selesai
call npx -y ctx7 setup --claude

:selesai
echo.
echo ============================================================
echo  Selesai. Cara pakai:
echo   1. Buka Command Prompt di folder ini, ketik: claude
echo   2. Unduh paket rilis dari tab Build App, lalu bilang:
echo      "rilis proyek nama-aplikasi"
echo   Claude membangun sampai live, lalu memberi link untuk kamu cek.
echo  Laptop harus menyala dan tidak terkunci selama Claude bekerja.
echo  CLI yang baru dipasang terbaca setelah jendela ini ditutup.
echo ============================================================
choice /c YN /n /m "Buka Claude Code sekarang? (Y/N): "
if errorlevel 2 goto akhir
claude
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
