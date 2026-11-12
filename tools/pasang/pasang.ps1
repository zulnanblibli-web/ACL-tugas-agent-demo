# Pemasang satu perintah untuk Windows 10/11. Dipanggil oleh pasang.bat (klik dua kali) atau:
#   powershell -NoProfile -ExecutionPolicy Bypass -File tools\pasang\pasang.ps1 [-Inti] [-Semua] [-Coba]
#   -Inti   hanya paket inti, tanpa pertanyaan
#   -Semua  inti + semua paket opsional, tanpa pertanyaan
#   -Coba   hanya menampilkan langkah, tidak memasang apa pun
# Memakai winget (bawaan Windows 10/11) dan installer resmi Claude Code. Tidak meminta dan tidak menyimpan API key.
# Panduan lengkap: docs\panduan-pasang-lokal.md (repo Zuno) atau PANDUAN-LOKAL.md (repo jasa).
param([switch]$Inti, [switch]$Semua, [switch]$Coba)
$ErrorActionPreference = 'Continue'
try { [Console]::OutputEncoding = [System.Text.Encoding]::UTF8 } catch {}
$Root = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
Set-Location $Root
$Mode = if ($Coba) { 'coba' } elseif ($Semua) { 'semua' } elseif ($Inti) { 'inti' } else { 'tanya' }
$Gagal = New-Object System.Collections.ArrayList

if ($Root -match '\\Temp\\') { Write-Host '[GAGAL] Jangan jalankan dari dalam ZIP. Ekstrak dulu (klik kanan > Extract All), lalu jalankan pasang.bat dari folder hasil ekstrak.'; exit 1 }
if (Test-Path (Join-Path $Root 'web\dev-server.mjs')) { $Web = Join-Path $Root 'web'; $Server = 'jalankan-lokal.bat (atau: node web\dev-server.mjs --buka)' }
elseif (Test-Path (Join-Path $Root 'server.mjs')) { $Web = $Root; $Server = 'jalankan-lokal.bat (atau: node server.mjs --buka)' }
else { Write-Host '[GAGAL] Jalankan dari folder repo (ada web\dev-server.mjs atau server.mjs).'; exit 1 }

function Langkah($t) { Write-Host ''; Write-Host "==> $t" -ForegroundColor Cyan }
function Muat-Path {
  $env:Path = [Environment]::GetEnvironmentVariable('Path', 'Machine') + ';' + [Environment]::GetEnvironmentVariable('Path', 'User')
  $lb = Join-Path $env:USERPROFILE '.local\bin'; if ($env:Path -notlike "*$lb*") { $env:Path += ";$lb" }
}
function Ada($c) { [bool](Get-Command $c -ErrorAction SilentlyContinue) }
# Jalan "<label>" { perintah }: tampilkan, jalankan (kecuali -Coba), catat bila gagal.
function Jalan([string]$label, [scriptblock]$aksi) {
  Write-Host "    > $label"
  if ($Mode -eq 'coba') { return }
  $global:LASTEXITCODE = 0
  try { & $aksi } catch { $global:LASTEXITCODE = 1; Write-Host "    $($_.Exception.Message)" }
  if ($LASTEXITCODE -ne 0) { [void]$Gagal.Add($label); Write-Host "    [PERINGATAN] Gagal (kode $LASTEXITCODE). Lanjut ke langkah berikutnya." -ForegroundColor Yellow }
}
function Pasang-Winget([string]$id) {
  Jalan "winget install --id $id" { winget install --id $id -e --accept-source-agreements --accept-package-agreements --silent }
  Muat-Path
}
function Tanya([string]$t) {
  if ($Mode -eq 'semua') { return $true }
  if ($Mode -ne 'tanya') { return $false }
  $j = Read-Host "    $t (y/n)"; return ($j -eq 'y' -or $j -eq 'Y')
}
function Mayor([string]$v) { if ($v -match '(\d+)') { [int]$Matches[1] } else { 0 } }

Write-Host '============================================================'
Write-Host " Pasang lokal: web + Claude Code + skill (Windows, mode $Mode)"
Write-Host " Folder: $Root"
Write-Host '============================================================'
Muat-Path
if (-not (Ada 'winget')) { Write-Host '[GAGAL] winget tidak ditemukan. Pasang "App Installer" dari Microsoft Store, lalu jalankan lagi.'; exit 1 }

Langkah '1/7 Alat dasar: Git (dengan Git Bash), Python 3.12, ffmpeg'
if (Ada 'git') { Write-Host "    $(git --version) sudah ada." } else { Pasang-Winget 'Git.Git' }
if ((Ada 'python') -and ((python --version 2>&1) -match 'Python 3')) { Write-Host "    $(python --version 2>&1) sudah ada." } else { Pasang-Winget 'Python.Python.3.12' }
if (Ada 'ffmpeg') { Write-Host '    ffmpeg sudah ada.' } else { Pasang-Winget 'Gyan.FFmpeg' }

Langkah '2/7 Node.js 22 atau lebih baru'
if ((Ada 'node') -and ((Mayor (node -v)) -ge 22)) { Write-Host "    Node $(node -v) sudah ada." }
else { Pasang-Winget 'OpenJS.NodeJS.LTS' }

Langkah '3/7 uv (pemasang alat Python) dan Claude Code'
if (-not (Ada 'uv')) { Pasang-Winget 'astral-sh.uv' }
if (Ada 'claude') { Write-Host "    Claude Code $(claude --version) sudah ada." }
else {
  Jalan 'irm https://claude.ai/install.ps1 | iex   (installer resmi Anthropic)' { Invoke-RestMethod https://claude.ai/install.ps1 | Invoke-Expression }
  Muat-Path
}

Langkah '4/7 Paket web (npm install) dan file pengaturan'
if (Test-Path (Join-Path $Web 'node_modules\@anthropic-ai\sdk')) { Write-Host '    Paket web sudah terpasang.' }
else { Jalan "npm install di $Web" { Push-Location $Web; try { npm.cmd install --no-audit --no-fund } finally { Pop-Location } } }
$EnvF = Join-Path $Web '.env.local'
if (Test-Path $EnvF) { Write-Host "    $EnvF sudah ada (tidak diubah)." }
else {
  Write-Host "    > salin .env.local.example menjadi .env.local"
  if ($Mode -ne 'coba') {
    Copy-Item (Join-Path $Web '.env.local.example') $EnvF
    Write-Host '    Notepad terbuka: isi ZUNO_ACCESS_KEY dan satu key AI, simpan, tutup Notepad.' -ForegroundColor Yellow
    Start-Process notepad.exe $EnvF -Wait
  }
}

Langkah '5/7 Browser untuk pemeriksa skill'
$edge = @(@("${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe", "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe", "$env:ProgramFiles\Google\Chrome\Application\chrome.exe", "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe") | Where-Object { Test-Path $_ })
if ($edge.Count -gt 0) { Write-Host "    Browser ada: $($edge[0])" } else { Jalan 'npx playwright install chromium' { npx.cmd -y playwright@latest install chromium } }

Langkah '6/7 Paket opsional'
if (Tanya 'Video lemo-opuscar (film dari kode; unduh sekitar 350 MB - 1 GB)?') {
  $bash = "$env:ProgramFiles\Git\bin\bash.exe"
  if (Test-Path $bash) {
    Jalan 'lemo-opuscar setup.sh (library)' { & $bash .claude/skills/lemo-opuscar/scripts/setup.sh }
    Jalan 'lemo-opuscar setup.sh deps (paket)' { & $bash .claude/skills/lemo-opuscar/scripts/setup.sh deps }
  }
  else { [void]$Gagal.Add('lemo-opuscar butuh Git Bash (Git for Windows)'); Write-Host '    [LEWAT] Git Bash belum ada. Tutup jendela, buka lagi, jalankan pasang.bat lagi.' }
}
if (Tanya 'YouTube (paket Python pembaca data channel + yt-dlp)?') {
  Jalan 'pip install google-api-python-client google-auth-oauthlib yt-dlp' { python -m pip install --user google-api-python-client google-auth-oauthlib yt-dlp }
}
if (Tanya 'Blender + blender-mcp (aset 3D/game)?') {
  if (-not (Test-Path "$env:ProgramFiles\Blender Foundation")) { Pasang-Winget 'BlenderFoundation.Blender' }
  if (Ada 'claude') { Jalan 'claude mcp add blender (uvx blender-mcp)' { claude mcp add -s user blender -e DISABLE_TELEMETRY=true -- uvx --python 3.11 blender-mcp } }
  Write-Host '    Langkah manual: pasang addon BlenderMCP di Blender (lihat panduan bagian Blender).' -ForegroundColor Yellow
}
if (Tanya 'Alat dokumen docling + peta kode graphify (docling cukup besar)?') {
  if (-not (Ada 'docling')) { Jalan 'uv tool install docling' { uv tool install docling } }
  if (-not (Ada 'graphify')) { Jalan 'uv tool install graphifyy' { uv tool install graphifyy } }
}

Langkah '7/7 Cek kesiapan'
if ($Mode -eq 'coba') { Write-Host '    > node tools\pasang\cek-kesiapan.mjs' } elseif (Ada 'node') { & node (Join-Path $Root 'tools\pasang\cek-kesiapan.mjs') }

Write-Host '============================================================'
if ($Gagal.Count -gt 0) { Write-Host ' Ada langkah yang gagal/terlewat:' -ForegroundColor Yellow; $Gagal | ForEach-Object { Write-Host "  - $_" }; Write-Host ' Baca pesannya, perbaiki, lalu jalankan pasang.bat lagi (yang sudah terpasang dilewati).' }
Write-Host ' Berikutnya:'
Write-Host "  1. Isi key di $EnvF (kalau belum)."
Write-Host '  2. Login Claude Code sekali: buka terminal baru di folder ini, ketik  claude  lalu ikuti /login (atau isi ANTHROPIC_API_KEY).'
Write-Host "  3. Nyalakan web: $Server. Browser terbuka sendiri ke alamat yang benar (biasanya http://localhost:3000)."
Write-Host "     Tampilan masih lama? Tutup dulu jendela server Zuno/Nexaoffice lama yang masih terbuka, lalu jalankan lagi."
Write-Host '  4. Kerja dengan skill: ketik  claude  di folder ini; skill di .claude\skills terbaca otomatis.'
Write-Host '  Catatan: bila perintah baru belum dikenali, tutup jendela ini dan buka terminal baru (PATH diperbarui).'
Write-Host '============================================================'
