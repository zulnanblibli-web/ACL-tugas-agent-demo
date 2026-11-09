// Video "Dari perintah sampai disetujui" untuk situs Nexaoffice. Warna dan huruf sama dengan situs (web/src/site/tokens.css).
import '@fontsource/antonio/700.css';
import '@fontsource/onest/400.css';
import '@fontsource/onest/700.css';
import '@fontsource/jetbrains-mono/400.css';
import {AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig, Easing} from 'remotion';

const C = {
  paper: 'oklch(14% 0.02 250)', paper2: 'oklch(18% 0.025 250)', paper3: 'oklch(23% 0.03 250)',
  ink: 'oklch(95% 0.01 240)', muted: 'oklch(70% 0.03 245)', rule: 'oklch(32% 0.04 248)',
  accent: 'oklch(70% 0.16 238)', accentInk: 'oklch(16% 0.03 250)'
};
const F = {display: 'Antonio, sans-serif', body: 'Onest, sans-serif', mono: '"JetBrains Mono", monospace'};
const PERINTAH = 'Bikin carousel 5 slide: cara pemula pakai AI buat laporan kantor.';
const TIM = [
  {id: 'R.1', nama: 'Raka', tugas: 'Riset tren'},
  {id: 'P.1', nama: 'Dika', tugas: 'Naskah 5 slide'},
  {id: 'D.1', nama: 'Sari', tugas: 'Desain carousel'},
  {id: 'Q.1', nama: 'Tara', tugas: 'Cek fakta'}
];
const ease = Easing.bezier(0.16, 1, 0.3, 1);
const fade = (f, a, b) => interpolate(f, [a, b], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});

function Langkah({no, judul, aktif}) {
  return (
    <div style={{display: 'flex', alignItems: 'baseline', gap: 14, opacity: aktif ? 1 : 0.4}}>
      <span style={{fontFamily: F.mono, fontSize: 20, color: aktif ? C.accent : C.muted}}>{no}</span>
      <span style={{fontFamily: F.display, fontSize: 34, color: C.ink, letterSpacing: '-0.01em'}}>{judul}</span>
    </div>
  );
}

export const AlurNexa = () => {
  const f = useCurrentFrame();
  const {fps} = useVideoConfig();
  const ketik = Math.min(PERINTAH.length, Math.floor(interpolate(f, [10, 80], [0, PERINTAH.length], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})));
  const tahap = f < 95 ? 0 : f < 190 ? 1 : f < 275 ? 2 : 3;
  const keluar = interpolate(f, [340, 359], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{background: C.paper, color: C.ink, fontFamily: F.body, opacity: keluar}}>
      <div style={{position: 'absolute', left: 64, top: 64, bottom: 64, width: 300, display: 'flex', flexDirection: 'column', gap: 26, borderRight: `1px solid ${C.rule}`}}>
        <span style={{fontFamily: F.display, fontSize: 28, color: C.ink}}>Nexaoffice</span>
        <div style={{display: 'flex', flexDirection: 'column', gap: 18, marginTop: 30}}>
          <Langkah no="01" judul="Perintah masuk" aktif={tahap >= 0} />
          <Langkah no="02" judul="Lead membagi" aktif={tahap >= 1} />
          <Langkah no="03" judul="Divisi bekerja" aktif={tahap >= 2} />
          <Langkah no="04" judul="Kamu menyetujui" aktif={tahap >= 3} />
        </div>
      </div>

      <div style={{position: 'absolute', left: 420, right: 64, top: 64}}>
        <div style={{fontSize: 20, color: C.muted, marginBottom: 12}}>Perintah untuk tim</div>
        <div style={{background: C.paper2, border: `1px solid ${C.rule}`, borderRadius: 8, padding: '22px 26px', fontFamily: F.mono, fontSize: 24, lineHeight: 1.45, minHeight: 110}}>
          {PERINTAH.slice(0, ketik)}
          <span style={{display: 'inline-block', width: 12, height: 26, marginLeft: 4, background: C.accent, verticalAlign: 'middle', opacity: ketik < PERINTAH.length || Math.floor(f / 15) % 2 ? 1 : 0}} />
        </div>
      </div>

      {tahap >= 1 && (
        <div style={{position: 'absolute', left: 420, right: 64, top: 250, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16}}>
          {TIM.map((a, i) => {
            const masuk = spring({frame: f - 100 - i * 8, fps, config: {damping: 200}});
            const isi = interpolate(f, [195 + i * 14, 255 + i * 6], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});
            return (
              <div key={a.id} style={{background: C.paper2, border: `1px solid ${C.rule}`, borderRadius: 8, padding: 18, opacity: masuk, transform: `translateY(${(1 - masuk) * 24}px)`}}>
                <Img src={staticFile(a.id + '.png')} style={{width: '100%', height: 120, objectFit: 'contain'}} />
                <div style={{fontFamily: F.display, fontSize: 30, marginTop: 10}}>{a.nama}</div>
                <div style={{fontSize: 18, color: C.muted}}>{a.tugas}</div>
                <div style={{height: 6, borderRadius: 3, background: C.paper3, marginTop: 12, overflow: 'hidden'}}>
                  <div style={{height: '100%', width: '100%', background: C.accent, transform: `scaleX(${isi})`, transformOrigin: 'left'}} />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tahap >= 3 && (
        <div style={{position: 'absolute', left: 420, right: 64, bottom: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: C.paper3, borderRadius: 8, padding: '20px 26px', opacity: fade(f, 278, 300), transform: `translateY(${(1 - fade(f, 278, 300)) * 16}px)`}}>
          <div>
            <div style={{fontFamily: F.display, fontSize: 32}}>Carousel siap, menunggu persetujuanmu</div>
            <div style={{fontSize: 18, color: C.muted}}>Tidak ada yang terbit sebelum kamu setujui.</div>
          </div>
          <div style={{background: C.accent, color: C.accentInk, fontWeight: 700, fontSize: 22, padding: '14px 26px', borderRadius: 999, transform: `scale(${f > 315 && f < 325 ? 0.96 : 1})`}}>Setujui</div>
        </div>
      )}
    </AbsoluteFill>
  );
};
