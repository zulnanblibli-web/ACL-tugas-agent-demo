"""Package the rendered preview for download without opening raw HTML in a code viewer."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--html', default='/tmp/nexa-studio-360.html')
parser.add_argument('--output', default='/tmp/Nexa-Studio-Preview.zip')
parser.add_argument('--media-dir')
args = parser.parse_args()
html = Path(args.html)
if not html.is_file() or not html.read_text(encoding='utf-8').lstrip().lower().startswith('<!doctype html>'):
    raise SystemExit('Build the standalone HTML preview before packaging.')
output = Path(args.output)
output.parent.mkdir(parents=True, exist_ok=True)
readme = '''NEXA STUDIO — PREVIEW VISUAL

1. Unduh dan ekstrak seluruh isi ZIP ini.
2. Untuk melihat langsung tanpa interaksi, putar VIDEO-PREVIEW.mp4 jika tersedia.
3. Untuk mencoba scene 3D, buka BUKA-PREVIEW.html memakai Google Chrome atau Microsoft Edge.
   Klik kanan file > Buka dengan > Google Chrome / Microsoft Edge.
   Jangan membukanya di editor kode atau penampil source file dalam chat.

Kontrol:
- Seret untuk memutar, scroll/cubit untuk zoom.
- Pilih zona, klik Atap, atau mulai Tur 360°.
- Agen mulai dalam pose duduk bekerja. Gerakkan agen, Jeda, Reset, dan pilihan kecepatan tersedia.
- Agen punya aktivitas dan jadwal berbeda: kerja, kopi, rapat, membaca, serta peregangan.
- Mode Ringan mengurangi beban grafis.

Scene, material dan karakter tertanam di file ini. Preview tidak memerlukan API key.
Dua tema lain tersedia melalui web utama. Preview lokal hanya menjalankan The Grotto.
Browser perlu mendukung WebGL. Perangkat atau browser yang dikelola perusahaan mungkin membatasi pembukaan file lokal.
'''
with ZipFile(output, 'w', ZIP_DEFLATED, compresslevel=6) as archive:
    archive.write(html, 'BUKA-PREVIEW.html')
    archive.writestr('MULAI-DI-SINI.txt', readme)
    if args.media_dir:
        media = Path(args.media_dir)
        for filename, destination in [('Nexa-Studio-Preview.mp4', 'VIDEO-PREVIEW.mp4'), ('Preview-Visual.png', 'GAMBAR-PREVIEW.png')]:
            source = media / filename
            if source.is_file():
                archive.write(source, destination)
with ZipFile(output) as archive:
    failure = archive.testzip()
    if failure:
        raise SystemExit('Archive verification failed: ' + failure)
print(f'Visual preview package: {output} ({output.stat().st_size / 1024 / 1024:.2f} MB)')
