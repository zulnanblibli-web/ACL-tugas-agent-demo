import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {build} from 'esbuild';
import {agents} from '../office/data.js';
import {themes} from '../office/themes.js';
const assets={};
for(const a of agents)for(const ext of ['png','glb']){const path=`/assets/agents/${a.id}.${ext}`;const bytes=await readFile('.'+path);assets[path]=`data:${ext==='png'?'image/png':'model/gltf-binary'};base64,${bytes.toString('base64')}`;}
for(const theme of themes){const path=`/assets/themes/${theme.id}.png`;assets[path]=`data:image/png;base64,${(await readFile('.'+path)).toString('base64')}`;}
const css=await readFile('office/office.css','utf8');
const result=await build({entryPoints:['office/app.js'],bundle:true,format:'iife',minify:true,write:false});
let gallery=await readFile('office/karakter.html','utf8');
for(const [path,data]of Object.entries(assets))gallery=gallery.replaceAll(path,data);
gallery=gallery.replace('<a href="/kantor.html">← Kembali ke kantor</a>','<span>Galeri karakter ZUNO</span>');
let html=await readFile('kantor.html','utf8');
html=html.replace('<link rel="stylesheet" href="/office/office.css">',()=>`<style>${css}\n#character-dialog{width:min(1200px,95vw);height:90dvh;border:1px solid #d7dfce;border-radius:12px;padding:0;background:#f5f5ed}#character-dialog::backdrop{background:#273b3280}#character-dialog iframe{border:0;width:100%;height:calc(100% - 45px)}#character-dialog>button{display:block;margin:8px 14px 8px auto;padding:4px 12px;background:#f5f5ed;color:#293e36;border:1px solid #d7dfce;border-radius:5px}</style>`);
html=html.replace('href="/" aria-label="Kembali ke Zuno Studio"','href="#" aria-label="Zuno Preview"').replace('<a href="/#ruangKerja">Buka Studio ↗</a>','<span class="preview">HTML mandiri · offline</span>');
html=html.replace('href="/office/karakter.html"','href="#karakter" id="open-gallery"');
const escapeAttr=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const safeScript=s=>s.replace(/<\/script/gi,'<\\/script');
const dialog=`<dialog id="character-dialog"><button id="close-gallery">Tutup galeri ×</button><iframe title="Galeri 18 karakter ZUNO" srcdoc="${escapeAttr(gallery)}"></iframe></dialog>`;
const config=`globalThis.ZUNO_OFFLINE_ASSETS=${JSON.stringify(assets)};`;
const setup=`document.getElementById('open-gallery').addEventListener('click',e=>{e.preventDefault();document.getElementById('character-dialog').showModal();});document.getElementById('close-gallery').addEventListener('click',()=>document.getElementById('character-dialog').close());`;
html=html.replace('<script type="module" src="/office/office.bundle.js"></script>',()=>`${dialog}<script>${safeScript(config)}</script><script>${safeScript(result.outputFiles[0].text)}</script><script>${setup}</script>`);
await mkdir('preview',{recursive:true});await writeFile('preview/zuno-kantor-preview.html',html);
console.log(`HTML mandiri: preview/zuno-kantor-preview.html (${(Buffer.byteLength(html)/1024/1024).toFixed(2)} MB). Seluruh GLB, thumbnail, galeri, JS dan CSS tertanam.`);
