"""Audio @teknikdibedah #001: score sintetis (mallet, vibrafon, bass bulat, kick kecil) + foley dari window.EV.
Tanpa sampel unduhan; semua disintesis. Hasil: out/mix.wav (48 kHz stereo)."""
import json, os, sys
import numpy as np
import soundfile as sf
LIB = os.environ['LIB']; sys.path.insert(0, os.path.join(LIB, 'core', 'audio'))
from sfx import SR, t_, env_exp, bp, lp, hp, noise, brown, norm, click, clack, whoosh, creak, thump, ding, rumble, roar, compress, limit, add

HERE = os.path.dirname(os.path.abspath(__file__))
ev = json.load(open(os.path.join(HERE, 'events.json')))
DUR = ev['dur']; EV = ev['ev']
N = int(DUR * SR) + SR
mus = np.zeros((N, 2)); fol = np.zeros((N, 2)); amb = np.zeros((N, 2))
rng = np.random.default_rng(7)
BEAT = 60 / 96
mid = lambda m: 440 * 2 ** ((m - 69) / 12)

def mallet(f, d=1.2, v=1.0, bright=1.0):          # marimba-ish: fundamental + inharmonic partials, fast decay
    tt = t_(d)
    x = (np.sin(2*np.pi*f*tt) * env_exp(d, .45) + .35*bright*np.sin(2*np.pi*f*3.93*tt) * env_exp(d, .07)
         + .12*bright*np.sin(2*np.pi*f*9.2*tt) * env_exp(d, .02))
    a = np.minimum(1, tt / .002); return x * a * v * .5

def vibe(f, d=3.0, v=1.0):                          # vibraphone: pure + 4th partial, slow tremolo
    tt = t_(d)
    x = (np.sin(2*np.pi*f*tt) + .25*np.sin(2*np.pi*f*4*tt) * env_exp(d, .3)) * env_exp(d, 1.4)
    return x * (1 + .25*np.sin(2*np.pi*5.2*tt)) * np.minimum(1, tt/.004) * v * .35

def bass(f, d=1.0, v=1.0):                          # round bass with 2nd/3rd harmonics (speaks on phones)
    tt = t_(d)
    x = np.sin(2*np.pi*f*tt) + .45*np.sin(2*np.pi*2*f*tt) + .2*np.sin(2*np.pi*3*f*tt)
    return x * env_exp(d, .5) * np.minimum(1, tt/.01) * v * .4

def kick(v=1.0):
    d = .3; tt = t_(d); f = 52 + 90*np.exp(-tt/.03)
    return np.sin(2*np.pi*np.cumsum(f)/SR) * env_exp(d, .09) * v * .8

def drone(f, d, v=1.0):
    tt = t_(d); x = np.sin(2*np.pi*f*tt) + .3*np.sin(2*np.pi*2*f*tt+.4) + .15*np.sin(2*np.pi*3*f*tt+1.1)
    e = np.minimum(1, tt/1.2) * np.minimum(1, (d-tt)/1.2); return x * e * v * .25

AM = [57, 60, 62, 64, 67, 69, 72, 74, 76]            # A minor pentatonic
# --- A: drone + title hit
add(mus, drone(mid(45), 5.0), 0, .9); add(mus, drone(mid(52), 5.0), 0, .5)
for m, p in [(57, -.2), (64, .2), (69, 0)]: add(mus, mallet(mid(m), 2.0, .8), .3, .7, p)
# --- B: rising mallet arpeggio in eighths
k = 0; t = 4.8
while t < 9.0:
    m = AM[k % len(AM)] + (12 if k >= len(AM) else 0); add(mus, mallet(mid(m), .9, .55 + .03*k), t, .6, -.5 + (k % 5)*.25); k += 1; t += BEAT/2
# --- C: bass on bar downbeats, light kick, marimba pairs at labels
for b in np.arange(9.0, 20.0, BEAT*4):
    add(mus, bass(mid(45 if int((b-9)/(BEAT*4)) % 2 == 0 else 43), BEAT*3.5), b, .9); add(mus, kick(.7), b, .8)
    add(mus, kick(.45), b + BEAT*2, .8)
for e in EV:
    if e['type'] == 'tick' and e['t'] < 20:
        add(mus, mallet(mid(69), .8, .6), e['t'], .5, .3); add(mus, mallet(mid(76), .8, .5), e['t'] + BEAT/2, .45, .4)
# --- D: kick every beat, vibraphone chords, low metal at swings
for b in np.arange(20.5, 30.4, BEAT):
    add(mus, kick(.6 if int((b-20.5)/BEAT) % 4 == 0 else .35), b, .8)
for c0, ch in [(20.5, [57, 64, 72]), (23.0, [55, 62, 71]), (25.5, [53, 60, 69]), (28.0, [57, 64, 72])]:
    for m in ch: add(mus, vibe(mid(m), 3.0, .8), c0, .55, (m % 3 - 1) * .3)
    add(mus, bass(mid(ch[0] - 12), 2.4, .9), c0, .8)
# --- E: descending glissando, then the pile thud (foley)
for i, m in enumerate(reversed(AM)): add(mus, mallet(mid(m), .6, .5), 30.4 + i*.07, .5, .4 - i*.1)
add(mus, drone(mid(40), 5.2, .9), 30.6, .7)
# --- F: closing chord landing with the last panel
for m, p in [(57, -.3), (64, 0), (69, .3), (76, 0)]: add(mus, vibe(mid(m), 4.5, .9), 38.0, .6, p)
add(mus, bass(mid(45), 3.5, 1), 38.0, .9)

# --- ambience: wind at height (hook + gust), inside hum, room tone
def wind(d, v):
    w = lp(brown(d), 900) * .6 + bp(noise(d), 400, 1600) * .25
    tt = t_(d); return norm(w) * (.6 + .4*np.sin(2*np.pi*.35*tt + 1)) * np.minimum(1, tt/.6) * np.minimum(1, (d-tt)/.8) * v
add(amb, wind(5.2, .5), 0, 1, -.2); add(amb, wind(6.0, .75), 20.4, 1, .2)
add(amb, norm(lp(brown(11.0), 160)) * .12, 9.0, 1)            # inside hum
add(amb, norm(lp(brown(DUR), 300)) * .02, 0, 1)               # room tone
# --- foley from events
for e in EV:
    t, ty, pan = e['t'], e['type'], e.get('pan', 0)
    if ty == 'lift': add(fol, whoosh(.32, .5), t, .45, pan); add(fol, click(1.6, .35), t + .05, .3, pan)
    elif ty == 'tick': add(fol, click(1.2, .4), t, .35, .4)
    elif ty == 'pen': add(fol, bp(noise(.5), 3000, 8000) * env_exp(.5, .25) * .25, t, .6, -.3)
    elif ty == 'dive': add(fol, whoosh(.7, .7), t, .6)
    elif ty == 'creak': add(fol, creak(.6), t, .5, .2); add(fol, creak(.5), t + .5, .4, .3)
    elif ty == 'gust': add(fol, roar(3.5, .5), t, .5, .1)
    elif ty == 'swing':
        r = ding(.6); r = lp(np.interp(np.arange(0, len(r), 2.3), np.arange(len(r)), r), 900)   # pitched down → heavy steel
        add(fol, r, t, .45, -.2); add(fol, creak(.5), t + .1, .35, .2)
    elif ty == 'drop': add(fol, whoosh(.8, .8), t, .6)
    elif ty == 'thud': add(fol, thump(1, 46), t, 1.0); add(fol, rumble(1.6, .6), t, .6)
    elif ty == 'land': add(fol, clack(.9, .5), t, .45, pan)
    elif ty == 'final': add(fol, thump(.8, 60), t, .7)

# --- near-silences: everything but room tone fades out
def hush(buf, a, b, floor=0.04):
    s, e = int(a*SR), int(b*SR); g = np.ones(len(buf))
    g[s:e] = floor; r = int(.08*SR); g[s-r:s] = np.linspace(1, floor, r); g[e:e+r] = np.linspace(floor, 1, r); buf *= g[:, None]
for e in EV:
    if e['type'] == 'hush': hush(mus, e['t'], e['t'] + e['dur']); hush(fol, e['t'], e['t'] + e['dur']); hush(amb, e['t'], e['t'] + e['dur'], .2)

mus[:, 0] = compress(mus[:, 0], .3, 2.5); mus[:, 1] = compress(mus[:, 1], .3, 2.5)
mix = mus * .55 + fol * .8 + amb * .7
mix = mix[:int(DUR * SR)]
mix /= max(1e-9, np.abs(mix).max()) / .8
mix[:, 0] = limit(mix[:, 0], .9); mix[:, 1] = limit(mix[:, 1], .9)
os.makedirs(os.path.join(HERE, 'out'), exist_ok=True)
sf.write(os.path.join(HERE, 'out', 'mix.wav'), mix.astype(np.float32), SR)
print('mix.wav', round(DUR, 2), 's')
