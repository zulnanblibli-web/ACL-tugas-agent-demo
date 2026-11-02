// Zuno: status server untuk panel HUD. Tidak membocorkan kunci apa pun.
import { pickGemini } from './ai.js';
export async function GET() {
  const provider = (process.env.AI_PROVIDER || 'claude').toLowerCase();
  const keyEnv = { claude: 'ANTHROPIC_API_KEY', openai: 'OPENAI_API_KEY', gemini: 'GEMINI_API_KEY', openrouter: 'OPENROUTER_API_KEY' }[provider];
  let model = process.env.AI_MODEL || (provider === 'claude' ? 'claude-opus-5-5' : 'belum diisi');
  if (provider === 'gemini' && !process.env.AI_MODEL && process.env.GEMINI_API_KEY) { try { model = (await pickGemini('default')).name + ' (otomatis)'; } catch (e) { model = 'gagal memilih model: ' + String(e && e.message || e).slice(0, 80); } }
  return Response.json({
    online: true,
    provider,
    model,
    model_quick: process.env.AI_MODEL_QUICK || null,
    ai_key_set: !!(keyEnv && process.env[keyEnv]),
    access_set: !!process.env.ZUNO_ACCESS_KEY
  }, { headers: { 'cache-control': 'no-store' } });
}
