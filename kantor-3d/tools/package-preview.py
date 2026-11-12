"""Package the standalone HTML for download instead of opening in a code panel."""
from pathlib import Path
import hashlib
import zipfile

root = Path(__file__).resolve().parents[1]
source = root / 'preview' / 'zuno-kantor-preview.html'
target = root / 'preview' / 'Nexa-Office-Preview.zip'
readme = '''NEXA OFFICE - PREVIEW INTERAKTIF

1. Unduh dan ekstrak ZIP ini.
2. Klik kanan BUKA-PREVIEW.html > Buka dengan / Open with > Google Chrome atau Microsoft Edge.
3. Klik Masuk Nexa Studio, Tema atau Demo aktivitas.

Jika muncul kode, file sedang dibuka melalui editor/panel kode. Gunakan browser seperti langkah 2.
Semua aset tertanam. Tidak membutuhkan npm, server, API key atau internet.
WebGL harus tersedia. Pilih kualitas Ringan bila gerakan terasa berat.
Aktivitas adalah simulasi visual, bukan job AI sungguhan.
'''
with zipfile.ZipFile(target, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
    archive.writestr('BUKA-PREVIEW.html', source.read_bytes())
    archive.writestr('BACA-DULU.txt', readme)
with zipfile.ZipFile(target) as archive:
    assert archive.testzip() is None
    assert hashlib.sha256(archive.read('BUKA-PREVIEW.html')).digest() == hashlib.sha256(source.read_bytes()).digest()
print(f'ZIP verified: {target.name} ({target.stat().st_size} bytes)')
