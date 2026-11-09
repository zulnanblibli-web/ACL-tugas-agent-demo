// Menyusun agents/semua-agen.md dari agents/README.md + 18 profil (tanpa frontmatter).
// Jalankan setelah profil diubah:  node tools/agen/gabung-agen.mjs
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const dir = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'agents');
const files = readdirSync(dir).filter((f) => /^\d\d-.*\.md$/.test(f)).sort();
if (files.length !== 18) throw new Error('Harus 18 profil, ada ' + files.length);
const body = (f) => readFileSync(join(dir, f), 'utf8').replace(/^---\n[\s\S]*?\n---\n+/, '').trim();
const out = [readFileSync(join(dir, 'README.md'), 'utf8').trim(), ...files.map(body)].join('\n\n---\n\n') + '\n';
writeFileSync(join(dir, 'semua-agen.md'), out);
console.log('agents/semua-agen.md: README + ' + files.length + ' profil');
