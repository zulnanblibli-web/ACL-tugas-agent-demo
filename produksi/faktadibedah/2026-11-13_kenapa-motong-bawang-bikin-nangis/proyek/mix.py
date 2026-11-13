"""Audio @faktadibedah #001: score sintetis (mallet, vibrafon, bass bulat, kick kecil) + foley dari window.EV.
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

CM = [60, 62, 64, 67, 69, 72, 74, 76, 79]            # C major pentatonic (hangat, dapur)
def pluck(f, d=.9, v=1.0):                          # pluck lembut (Karplus-sederhana: harmonik meluruh)
    tt = t_(d); x = sum((1 / k) * np.sin(2*np.pi*f*k*tt) * env_exp(d, .5 / k) for k in range(1, 6))
    return x * np.minimum(1, tt/.003) * v * .45
# dapur: motif pluck + mallet saat judul
for i, m in enumerate([60, 64, 67, 72, 67, 64]): add(mus, pluck(mid(m), 1.0, .7), .2 + i * BEAT / 2, .6, -.3 + i * .12)
for b in np.arange(3.2, 8.8, BEAT): add(mus, pluck(mid(CM[int(b * 3) % 5]), .8, .5), b, .5, .2)
# sel: pad lembut + pulsa
def pad(f, d, v=1.0):
    tt = t_(d); x = sum(np.sin(2*np.pi*f*k*tt + k) / k for k in (1, 2, 3)) * (1 + .2*np.sin(2*np.pi*.3*tt))
    return x * np.minimum(1, tt/1.5) * np.minimum(1, (d-tt)/1.5) * v * .18
for c0, ch in [(8.8, [48, 55, 64]), (13.6, [45, 52, 60]), (18.4, [41, 48, 57])]:
    for m in ch: add(mus, pad(mid(m), 5.4, .9), c0, .7)
for b in np.arange(9.0, 22.9, BEAT): add(mus, kick(.35), b, .6); add(mus, mallet(mid(CM[int((b - 9) / BEAT) % 9] + 12), .35, .25), b + BEAT/2, .3, .4)
# mata: pad naik, nada tinggi tipis
for m in [52, 59, 67]: add(mus, pad(mid(m), 9.0, .9), 22.9, .7)
add(mus, vibe(mid(84), 3.0, .4), 24.2, .4, .3)
# tips + penutup: motif pembuka kembali, lalu akor
for i, m in enumerate([60, 64, 67, 72, 67, 64, 60, 67]): add(mus, pluck(mid(m), 1.0, .6), 31.8 + i * BEAT, .55, -.3 + i * .08)
for i, m in enumerate([64, 67, 72, 76]): add(mus, pluck(mid(m), 1.0, .6), 36.0 + i * BEAT, .55, .2)
for m, p in [(60, -.3), (64, 0), (67, .3), (72, 0)]: add(mus, vibe(mid(m), 4.5, .9), 40.0, .6, p)
add(mus, bass(mid(36), 3.5, 1), 40.0, .8)
# ambience
add(amb, norm(lp(brown(8.8), 500)) * .12, 0, 1); add(amb, norm(lp(brown(13.2), 500)) * .1, 31.8, 1)       # dapur
add(amb, norm(lp(brown(14.2), 140)) * .14, 8.8, 1)                                                          # dalam sel
add(amb, norm(lp(brown(DUR), 300)) * .02, 0, 1)
def water(d):
    tt = t_(d); return norm(bp(noise(d), 800, 6000) * (.7 + .3 * np.abs(np.sin(2*np.pi*7*tt))) + hp(noise(d), 3000) * .3) * np.minimum(1, tt/.3) * np.minimum(1, (d-tt)/.5)
# foley
for e in EV:
    t, ty, pan = e['t'], e['type'], e.get('pan', 0)
    if ty == 'chop': add(fol, thump(.9, 140), t, .7, .1); add(fol, clack(.7, .6), t, .5, .1); add(fol, bp(noise(.08), 2500, 7000) * env_exp(.08, .02), t - .03, .4, .1)
    elif ty == 'part': add(fol, whoosh(.4, .4), t, .35)
    elif ty == 'dive': add(fol, whoosh(.6, .7), t - .3, .6)
    elif ty == 'slice': add(fol, whoosh(.5, .8), t - .3, .6); add(fol, thump(.7, 90), t + .1, .6)
    elif ty == 'burst':
        for k in range(8): add(fol, click(.6 + k * .05, .5), t + k * .07, .35, -.6 + k * .17)
    elif ty == 'blip': add(fol, ding(.5)[:int(.25 * SR)] * env_exp(.25, .05)[:int(.25 * SR)], t, .25, pan)
    elif ty == 'blip2':
        d = ding(.5)[:int(.25 * SR)]; d = np.interp(np.arange(0, len(d), 1.5), np.arange(len(d)), d); add(fol, d * env_exp(len(d) / SR, .05)[:len(d)], t, .25, pan)
    elif ty == 'rise': add(fol, whoosh(3.0, .5), t, .4)
    elif ty == 'nerve':
        tt = t_(e['dur']); add(fol, np.sin(2*np.pi*3100*tt) * .05 * (np.sin(2*np.pi*9*tt) > 0) * np.minimum(1, tt/.3) * np.minimum(1, (e['dur']-tt)/.5), t, .5, .3)
    elif ty == 'drip': add(fol, ding(.4)[:int(.3 * SR)] * env_exp(.3, .04)[:int(.3 * SR)], t, .35, .4)
    elif ty == 'water': add(fol, water(e['dur']), t, .5, .2)
    elif ty == 'tick': add(fol, click(1.2, .4), t, .3, .4)
    elif ty == 'final': add(fol, thump(.7, 70), t, .6)
mus[:, 0] = compress(mus[:, 0], .3, 2.5); mus[:, 1] = compress(mus[:, 1], .3, 2.5)
mix = mus * .55 + fol * .8 + amb * .7
mix = mix[:int(DUR * SR)]
mix /= max(1e-9, np.abs(mix).max()) / .8
mix[:, 0] = limit(mix[:, 0], .9); mix[:, 1] = limit(mix[:, 1], .9)
os.makedirs(os.path.join(HERE, 'out'), exist_ok=True)
sf.write(os.path.join(HERE, 'out', 'mix.wav'), mix.astype(np.float32), SR)
print('mix.wav', round(DUR, 2), 's')
