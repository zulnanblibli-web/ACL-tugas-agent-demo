// Zuno / Nexaoffice: status server untuk panel status dan menu Pengaturan AI. Tidak membocorkan kunci apa pun.
import { pickGemini } from './ai.js';
import { setelan } from './riset.js';
export async function GET() {
  const provider = (process.env.AI_PROVIDER || 'claude').toLowerCase();
  const keyEnv = { claude: 'ANTHROPIC_API_KEY', openai: 'OPENAI_API_KEY', gemini: 'GEMINI_API_KEY', openrouter: 'OPENROUTER_API_KEY', 'openai-compatible': 'AI_BASE_URL' }[provider];
  let model = process.env.AI_MODEL || ({ claude: 'claude-opus-5-5', openrouter: 'openrouter/auto' }[provider] || 'belum diisi');
  if (provider === 'gemini' && !process.env.AI_MODEL && process.env.GEMINI_API_KEY) { try { model = (await pickGemini('default')).name + ' (otomatis)'; } catch (e) { model = 'gagal memilih model: ' + String(e && e.message || e).slice(0, 80); } }
  return Response.json({
    online: true,
    provider,
    model,
    model_quick: process.env.AI_MODEL_QUICK || null,
    ai_key_set: !!(keyEnv && process.env[keyEnv]),
    access_set: !!process.env.ZUNO_ACCESS_KEY,
    // Menu Pengaturan AI: apakah server menerima API key dari halaman (mode lokal), dan server ini jalan di mana.
    kunci_pengguna: process.env.NEXA_KUNCI_PENGGUNA !== 'off',
    server: process.env.NEXA_SERVER || (process.env.VERCEL ? 'vercel' : 'lokal'),
    riset: (() => { const c = setelan(); return { aktif: c.aktif, sumber: c.sumber, negara: c.negara, bahasa: c.bahasa, kata_kunci_tetap: c.kata_kunci }; })()
  }, { headers: { 'cache-control': 'no-store' } });
}
