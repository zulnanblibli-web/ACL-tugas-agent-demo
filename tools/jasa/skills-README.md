# Skill terpasang (dibaca otomatis oleh Claude Code)

Semua skill di folder ini adalah salinan dari sumber terbuka (MIT atau Apache-2.0); file LICENSE asli ada di tiap folder. Cara memasang alat yang dibutuhkan skill dan urutannya: `PANDUAN-LOKAL.md` di folder utama repo. Cek apa yang sudah siap: `node tools/pasang/cek-kesiapan.mjs`.

Aturan pakai ada di `CLAUDE.md`: referensi ditampilkan dulu dan pemilik memilih; layanan berbayar tidak dipakai tanpa izin; deploy setelah preview disetujui.

| Kelompok | Skill | Gunanya | Sumber |
|---|---|---|---|
| Desain web | `hallmark` | Halaman baru yang tidak terlihat buatan AI + pemeriksa `sloplint.mjs` | nutlope/hallmark (MIT) |
| | `frontend-design` | Arah visual, tipografi, menghindari tampilan template | anthropics/skills (Apache-2.0) |
| | `impeccable` | 24 perintah: shape, critique, audit, polish, typeset, layout, animate, harden, dll. | pbakaus/impeccable (Apache-2.0) |
| | `ui-ux-pro-max`, `design-system` | Database gaya/palet/font/UX + token dan komponen | nextlevelbuilder/ui-ux-pro-max-skill (MIT) |
| | `design`, `banner-design`, `slides`, `brand` | Logo/ikon (butuh key gambar), banner, presentasi, konsistensi brand | idem |
| | `hue` | Membuat skill bahasa desain untuk satu brand | dominikmartn/hue (MIT) |
| | `awwwards`, `jury` | Situs kelas Awwwards; menilai situs seperti juri | juliobsz/skills (MIT) |
| 3D / game | `blender-director` + 93 skill Blender | Modeling, material, UV, LOD, ekspor GLTF/Unity/Unreal/Godot lewat blender-mcp | arjun988/blender-skills (MIT) |
| Video | `lemo-opuscar` | Film/explainer yang digambar kode, 66 gaya | lemomo-ai/lemo-opuscar (MIT) |
| | `ffmpeg-skill` | Potong, gabung, caption, ekspor per platform, cek file | kajisho5/ffmpeg-skill (MIT) |
| YouTube | `youtube` | Audit channel, SEO, naskah, hook, thumbnail brief, kalender, Shorts | AgriciDaniel/claude-youtube (MIT) |
| Marketing | `social`, `content-strategy`, `copywriting`, `copy-editing`, `marketing-psychology`, `customer-research`, `ad-creative`, `ads`, `analytics` | Konten, copy, strategi, iklan | coreyhaines31/marketingskills (MIT) |
| Engineering | `grilling`, `writing-plans`, `executing-plans`, `subagent-driven-development`, `test-driven-development`, `systematic-debugging`, `requesting-code-review`, `using-git-worktrees`, `finishing-a-development-branch`, `writing-skills`, `prove-it-ran`, `review-my-diff`, `break-ui`, `mobile-native`, `vibe-security` | Rencana, tes, debug, tinjauan, keamanan | obra/superpowers, mattpocock/skills, agentkitco, emilkowalski/skills, raroque/vibe-security-skill (MIT) |
| Dokumen | `docling`, `graphify` | PDF/DOCX jadi Markdown; peta kode | docling-project (MIT), Graphify-Labs (Apache-2.0) |

**Tidak ikut paket, disarankan dipasang sendiri** (lihat `PANDUAN-LOKAL.md` bagian 6): `taste-skill` (website premium; foto contohnya berlisensi campuran) dan `ui-styling` (shadcn/ui + Tailwind; file lisensinya belum diisi pemiliknya).
