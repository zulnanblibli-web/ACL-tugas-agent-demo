// Menyalin tools/rilis/rilis.mjs ke prototypes/zuno-studio-v2.html (blok <script type="text/plain" id="zuno-rilis-mjs">),
// supaya paket rilis dari Agent Builder (artifact maupun Zuno Web) selalu membawa skrip rilis yang sama.
// Jalankan setelah rilis.mjs berubah: node tools/rilis/sisip.mjs, lalu node web/build.mjs.
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const src = readFileSync(join(root, 'tools/rilis/rilis.mjs'), 'utf8');
if (/<\/?script|<!--/i.test(src)) throw new Error('rilis.mjs tidak boleh memuat "<script", "</script" atau "<!--" (merusak blok HTML)');
const P = join(root, 'prototypes/zuno-studio-v2.html');
let h = readFileSync(P, 'utf8');
const blok = '<script type="text/plain" id="zuno-rilis-mjs">\n' + src + '</script>';
const re = /<script type="text\/plain" id="zuno-rilis-mjs">\n[\s\S]*?<\/script>/;
if (re.test(h)) h = h.replace(re, () => blok);
else { const i = h.lastIndexOf('</body>'); if (i < 0) throw new Error('</body> tidak ditemukan'); h = h.slice(0, i) + blok + '\n' + h.slice(i); }
writeFileSync(P, h);
console.log('rilis.mjs disisipkan ke prototipe (' + src.length + ' karakter)');
