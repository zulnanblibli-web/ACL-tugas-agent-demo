// Zuno: status server untuk panel HUD. Tidak membocorkan kunci apa pun.
export function GET() {
  const provider = (process.env.AI_PROVIDER || 'claude').toLowerCase();
  const keyEnv = { claude: 'ANTHROPIC_API_KEY', openai: 'OPENAI_API_KEY', gemini: 'GEMINI_API_KEY', openrouter: 'OPENROUTER_API_KEY' }[provider];
  return Response.json({
    online: true,
    provider,
    model: process.env.AI_MODEL || (provider === 'claude' ? 'claude-opus-5-5' : 'belum diisi'),
    model_quick: process.env.AI_MODEL_QUICK || null,
    ai_key_set: !!(keyEnv && process.env[keyEnv]),
    access_set: !!process.env.ZUNO_ACCESS_KEY
  }, { headers: { 'cache-control': 'no-store' } });
}
