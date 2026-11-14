// Video "Dari perintah sampai disetujui" untuk situs Nexaoffice. Warna sama dengan situs (palet The Grotto, web/src/site/tokens.css).
// Huruf: Gelasio (ukuran sama dengan Georgia di situs), Arimo (sama dengan Arial), JetBrains Mono. Karakter: potret tim The Grotto.
import '@fontsource/gelasio/700.css';
import '@fontsource/arimo/400.css';
import '@fontsource/arimo/700.css';
import '@fontsource/jetbrains-mono/400.css';
import {AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig, Easing} from 'remotion';

const C = {
  paper: '#14241f', paper2: '#132720', paper3: '#1f3229', heading: '#fbf0dc',
  ink: '#f1eadb', muted: '#c0bba9', rule: 'rgba(229, 203, 148, 0.19)',
  accent: '#d6b67b', accentInk: '#14241f', accentSoft: 'rgba(219, 195, 138, 0.13)', glow: 'rgba(214, 182, 123, 0.10)'
};
const F = {display: 'Gelasio, Georgia, serif', body: 'Arimo, Arial, sans-serif', mono: '"JetBrains Mono", monospace'};
const PERINTAH = 'Bikin carousel 5 slide: cara pemula pakai AI buat laporan kantor.';
const TIM = [
  {id: 'raka', nama: 'Raka', tugas: 'Riset tren'},
  {id: 'dika', nama: 'Dika', tugas: 'Naskah 5 slide'},
  {id: 'sari', nama: 'Sari', tugas: 'Desain carousel'},
  {id: 'tara', nama: 'Tara', tugas: 'Cek fakta'}
];
const ease = Easing.bezier(0.16, 1, 0.3, 1);
const fade = (f, a, b) => interpolate(f, [a, b], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});

function Langkah({no, judul, aktif}) {
  return (
    <div style={{display: 'flex', alignItems: 'baseline', gap: 14, opacity: aktif ? 1 : 0.4}}>
      <span style={{fontFamily: F.mono, fontSize: 20, color: aktif ? C.accent : C.muted}}>{no}</span>
      <span style={{fontFamily: F.display, fontSize: 27, color: C.heading, letterSpacing: '-0.01em', whiteSpace: 'nowrap'}}>{judul}</span>
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
    <AbsoluteFill style={{background: `radial-gradient(ellipse 70% 60% at 72% 30%, ${C.glow}, transparent 70%), ${C.paper}`, color: C.ink, fontFamily: F.body, opacity: keluar}}>
      <div style={{position: 'absolute', left: 64, top: 64, bottom: 64, width: 300, display: 'flex', flexDirection: 'column', gap: 26, borderRight: `1px solid ${C.rule}`}}>
        <span style={{fontFamily: F.display, fontSize: 28, color: C.heading}}>Nexaoffice</span>
        <div style={{display: 'flex', flexDirection: 'column', gap: 18, marginTop: 30}}>
          <Langkah no="01" judul="Perintah masuk" aktif={tahap >= 0} />
          <Langkah no="02" judul="Lead membagi" aktif={tahap >= 1} />
          <Langkah no="03" judul="Divisi bekerja" aktif={tahap >= 2} />
          <Langkah no="04" judul="Kamu menyetujui" aktif={tahap >= 3} />
        </div>
      </div>

      <div style={{position: 'absolute', left: 420, right: 64, top: 64}}>
        <div style={{fontSize: 20, color: C.muted, marginBottom: 12}}>Perintah untuk tim</div>
        <div style={{background: C.paper2, border: `1px solid ${C.rule}`, borderRadius: 12, padding: '20px 26px', fontFamily: F.mono, fontSize: 23, lineHeight: 1.45, minHeight: 100}}>
          {PERINTAH.slice(0, ketik)}
          <span style={{display: 'inline-block', width: 12, height: 26, marginLeft: 4, background: C.accent, verticalAlign: 'middle', opacity: ketik < PERINTAH.length || Math.floor(f / 15) % 2 ? 1 : 0}} />
        </div>
      </div>

      {tahap >= 1 && (
        <div style={{position: 'absolute', left: 420, right: 64, top: 236, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16}}>
          {TIM.map((a, i) => {
            const masuk = spring({frame: f - 100 - i * 8, fps, config: {damping: 200}});
            const isi = interpolate(f, [195 + i * 14, 255 + i * 6], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease});
            return (
              <div key={a.id} style={{background: C.paper2, border: `1px solid ${C.rule}`, borderRadius: 12, padding: '14px 18px 18px', opacity: masuk, transform: `translateY(${(1 - masuk) * 24}px)`}}>
                <div style={{height: 168, borderRadius: 8, background: `radial-gradient(ellipse 60% 55% at 50% 60%, ${C.accentSoft}, transparent 75%)`, display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
                  <Img src={staticFile(a.id + '.png')} style={{height: 162, width: 'auto', filter: 'drop-shadow(0 8px 10px rgba(7, 17, 13, 0.55))'}} />
                </div>
                <div style={{fontFamily: F.display, fontSize: 28, marginTop: 10, color: C.heading}}>{a.nama}</div>
                <div style={{fontSize: 18, color: C.muted}}>{a.tugas}</div>
                <div style={{height: 5, borderRadius: 3, background: C.paper3, marginTop: 12, overflow: 'hidden'}}>
                  <div style={{height: '100%', width: '100%', background: C.accent, transform: `scaleX(${isi})`, transformOrigin: 'left'}} />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tahap >= 3 && (
        <div style={{position: 'absolute', left: 420, right: 64, bottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: C.paper3, border: `1px solid ${C.rule}`, borderRadius: 12, padding: '18px 26px', opacity: fade(f, 278, 300), transform: `translateY(${(1 - fade(f, 278, 300)) * 16}px)`}}>
          <div>
            <div style={{fontFamily: F.display, fontSize: 28, color: C.heading}}>Carousel siap, menunggu persetujuanmu</div>
            <div style={{fontSize: 18, color: C.muted}}>Tidak ada yang terbit sebelum kamu setujui.</div>
          </div>
          <div style={{background: C.accent, color: C.accentInk, fontWeight: 700, fontSize: 22, padding: '14px 26px', borderRadius: 999, transform: `scale(${f > 315 && f < 325 ? 0.96 : 1})`}}>Setujui</div>
        </div>
      )}
    </AbsoluteFill>
  );
};
