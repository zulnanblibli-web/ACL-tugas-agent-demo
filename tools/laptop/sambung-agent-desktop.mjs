// Menyambungkan agent-desktop ke Claude Desktop (Windows/macOS) sebagai server MCP "agent-desktop",
// supaya Claude Desktop punya "tangan" untuk mengklik dan mengetik di aplikasi laptop.
// Dipanggil oleh pasang-tangan-komputer.bat. Aman diulang: konfigurasi lain tidak diubah, cadangan dibuat dulu.
import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { homedir } from 'node:os';

const file = process.platform === 'win32'
  ? join(process.env.APPDATA || join(homedir(), 'AppData', 'Roaming'), 'Claude', 'claude_desktop_config.json')
  : join(homedir(), 'Library', 'Application Support', 'Claude', 'claude_desktop_config.json');
let cfg = {};
if (existsSync(file)) {
  try { cfg = JSON.parse(readFileSync(file, 'utf8') || '{}'); }
  catch (e) { console.error('[GAGAL] ' + file + ' bukan JSON yang valid; tidak diubah. Perbaiki dulu atau kirim pesan ini ke Claude.'); process.exit(1); }
  copyFileSync(file, file + '.cadangan-zuno');
}
cfg.mcpServers = cfg.mcpServers || {};
const sebelum = JSON.stringify(cfg.mcpServers['agent-desktop'] || null);
// Windows: perintah npm global berupa .cmd, jadi dijalankan lewat cmd /c.
cfg.mcpServers['agent-desktop'] = process.platform === 'win32' ? { command: 'cmd', args: ['/c', 'agent-desktop', 'mcp'] } : { command: 'agent-desktop', args: ['mcp'] };
mkdirSync(dirname(file), { recursive: true });
writeFileSync(file, JSON.stringify(cfg, null, 2) + '\n');
console.log((sebelum === JSON.stringify(cfg.mcpServers['agent-desktop']) ? 'agent-desktop sudah tersambung' : 'agent-desktop disambungkan') + ' ke Claude Desktop: ' + file);
console.log('Tutup Claude Desktop sepenuhnya (ikon di tray > Quit) lalu buka lagi supaya terbaca.');
