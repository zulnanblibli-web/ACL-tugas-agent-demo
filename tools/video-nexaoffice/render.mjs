// Render video alur Nexaoffice ke web/assets/nexaoffice-alur.mp4 (+ poster .webp diambil dari frame terakhir).
import {bundle} from '@remotion/bundler';
import {renderMedia, renderStill, selectComposition} from '@remotion/renderer';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, '..', '..', 'web', 'assets');
const browserExecutable = process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium';
const serveUrl = await bundle({entryPoint: join(here, 'src', 'index.jsx'), publicDir: join(here, 'public')});
const composition = await selectComposition({serveUrl, id: 'AlurNexa', browserExecutable, chromeMode: 'chrome-for-testing'});
await renderMedia({composition, serveUrl, codec: 'h264', crf: 26, outputLocation: join(out, 'nexaoffice-alur.mp4'), browserExecutable, chromeMode: 'chrome-for-testing', muted: true});
await renderStill({composition, serveUrl, frame: 320, output: join(out, 'nexaoffice-alur.png'), browserExecutable, chromeMode: 'chrome-for-testing'});
console.log('Selesai: web/assets/nexaoffice-alur.mp4 dan nexaoffice-alur.png');
