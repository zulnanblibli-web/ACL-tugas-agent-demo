# Nexa Studio — The Grotto

A new single-floor, widened interactive Three.js environment based on the user's cave workspace reference. It is independent of the previous office scene. `/nexa.html` is its preview entry point. `/kantor.html` hosts the three-theme picker, and the main Studio page links there. The Grotto is the third choice.

All fifteen reference zones are represented, with the original numbering: reception, central command, research, script/storyboard, visual design, editing/Remotion, Flow production, engineering, QA/security, meeting, game room, pantry, owner lounge, pool, and quiet/prayer room. Side wings are spread across a connected 66 × 78 world-unit footprint. Rear and side cave ledges are cut away to keep the complete layout visible. Room descriptions and 3D labels support navigation.

The scene includes a curved command desk, seven monitor stations, specialized room screens, keyboards/mice, chairs, shelving/books, an eight-seat meeting table, espresso machine/cups/bar stools, game lounge/console, reception desk and rock entry arch, prayer mats/mihrab/shoe storage/ablution tap, owner lounge/laptop, organic pool basin, waterfall, loungers, skylight frame, foliage and perimeter lights. Stone, wood and tile textures are generated locally. PBR materials, environment lighting and directional shadow maps are used. Water animates when the pool is selected; reduced-motion users receive a still scene. Orbit, pan, zoom, room focus, close view, daylight toggle, labels, low-detail mode and PNG capture are available.

## Characters

The uploaded `ZUNO_18_Agent_FullBody_PNG.zip` supplied the 18 individual character references. Optimized WebP portraits are under `assets/nexa/team/`. The actual figures in the scene are rounded volumetric meshes with outfit colors, hairstyles, glasses/headphones/caps/beanies informed by these references. Portraits appear in the team gallery. They are not used as flat character stand-ins in the scene. Owner Zulnan is a separate nineteenth occupant, not an operational agent.

These are programmatic stylized 3D interpretations, not artist-sculpted replicas of the supplied character renders. The environment is an interactive architectural interpretation of the reference, not a photographic reconstruction or a pixel-identical reproduction. Screens and agent placements are visual; they do not claim live job status or invoke provider APIs.

## Development

Node >=20. Run `npm ci`, `npm run build:nexa`, and `node server.mjs`. Open the `/nexa.html` route on the local development server. The checked-in bundle and local assets support the existing static/Vercel hosting setup without CDN runtime dependencies. Application API routes and their credentials remain separate.

Run `CHROMIUM_PATH=/usr/bin/chromium npm run test:nexa` with the Node server running on port 3000. Override `NEXA_TEST_BASE` and `NEXA_TEST_OUTPUT` when needed. Tests exercise all fifteen zones, nineteen figures, all eighteen portrait files, gallery navigation, camera/quality/lighting controls, mobile layout, legacy URL and WebGL fallback. Screenshots default to `/tmp/nexa-test`.

## Publication

Push the tested commit to the repository's `main` branch. If the existing Vercel project is connected to this branch, its Git integration can trigger the production deployment. A Git push alone is not proof the deployment completed. Verify the new `/nexa.html` page on `zuno-studio-dusky.vercel.app` and confirm the production deployment before reporting it live. Direct CLI deployment additionally requires authorized Vercel access; no credentials are stored in this repository.

## Third theme, 360° envelope and agent activity

The shared theme catalog now lists Menara Senja, Griya Langit and **The Grotto** in that order. `/kantor.html` retains the original theme host. Selecting the third card opens `/nexa.html?theme=grotto`; the new scene's theme menu links back to the first two choices. The selected theme is remembered when browser storage is available. Separate scene entry points preserve the different floor plans and existing theme behaviors.

The vault is a continuous irregular surface with front/rear elevations and a skylight aperture. **Atap** toggles the complete external envelope and hides labels for rooms occluded by it. **Tur** orbits through 360 degrees; manual OrbitControls are unrestricted in azimuth. The cutaway remains the default so all fifteen areas can be inspected. Wood and garden materials use local source textures; the HDR environment, SSAO contact shading and restrained bloom are enabled in Sinematik mode. Ringan bypasses postprocessing and shadow maps. No claim is made that this is a path-traced photographic reconstruction: fine character likeness, cave geology and vegetation remain stylized approximations.

**Gerakkan agen** starts or pauses articulated leg/arm motion. Agents are assigned to the actual chair coordinates and start seated, facing their workstations. They stand up, exit beside their chair, follow corridor routes to reserved coffee/meeting/reading positions or a garden stretch, then return and sit at the same home chair. Work gestures and rest schedules differ by role and individual; most staff remain at work while a smaller group take staggered breaks. Seated transitions move out beside the furniture before walking, including stepping down from bar stools. Knees and elbows are articulated separately; resets restore seated work poses. Reset restores home poses. Speed supports 1×, 2× and 4×. Reduced-motion sessions start paused; hidden tabs do not accumulate catch-up travel. This is a visual simulation and does not execute AI jobs. It is not a general crowd avoidance/navmesh system and does not promise collision-free routing for arbitrary furniture changes.

Run `npm run build:themes` to rebuild both entry bundles, `npm run test:nexa-animation` for deterministic motion checks, and `npm run test:nexa` for the browser checks with the local Node server running. `node tools/capture-nexa.cjs` saves cardinal-view evidence and refreshes the actual third-theme render image. Set `NEXA_RECORD_VIDEO=1` when a Playwright-compatible FFmpeg is available to record the orbit and animation. Capture/test output stays outside the checkout by default. On this cloud machine, system FFmpeg can be selected through a workspace-owned Playwright browser cache; no verification is disabled.

A self-contained interactive preview can be produced with `npm run build:nexa-preview` (default `/tmp/nexa-studio-360.html`, or set `NEXA_PREVIEW_OUTPUT`). It embeds the renderer, all character portraits, local material textures, HDR environment and theme thumbnails. The third scene, controls and animation work without runtime external requests. The other two themes remain available in the hosted application. The preview was validated as inline HTML in Chromium; opening the downloaded file directly may depend on the browser's local-file policies.

## Viewing the preview instead of source code

A chat or repository file viewer may display `.html` as source rather than execute it. That is different from the hosted page: `node server.mjs` serves `/nexa.html` as `text/html; charset=utf-8`, and browser validation checks an actual WebGL canvas and visible zone UI. Do not present a raw HTML file link as an already rendered browser preview.

Use `npm run package:nexa-preview` for a downloadable ZIP containing `BUKA-PREVIEW.html` and plain-language opening instructions. Extract the ZIP and open the HTML in Chrome/Edge rather than a code editor. `tools/package-nexa-preview.py --html <file> --output <zip> --media-dir <directory>` can also include an existing MP4 and rendered PNG as immediately viewable alternatives. Browser local-file policy can still vary. Production verification remains separate from local render validation.

## Seated work regression

`nexa/seating.js` is the shared seat plan for furniture and actor placement. QA has four workstations for its four agents. `test:nexa-animation` validates 15 minutes of simulated independent activity, sit/stand transitions, unique occupied break seats, pause/reset, and frame displacement. `test:nexa-seating` compares actual scene chair coordinates and joint transforms with the seated agents, checks different real limb poses, and captures the engineering room. `tools/capture-nexa-activities.cjs` records the seated work and varied break cycle and refreshes the theme thumbnail. These are visual behaviors, not AI job status.

## Kendali per agen, label nama, gerak lebih lancar (2026-11-10, Claude Code)

- `createAgentAnimation(...).setWork(id|nama, sibuk)`: `true` agen kembali dan tetap di meja, `false` istirahat dan tetap santai (bila tempat favorit penuh, tempat istirahat lain yang kosong dipakai), `null` kembali ke jadwal simulasi. Dipakai Workspace situs Nexaoffice untuk menggerakkan agen sesuai tahap kerja. `status()` mengembalikan fase/kegiatan ringan untuk label.
- Label nama + kegiatan di atas tiap karakter (`.agent-tag`), ikut tombol Label dan Atap.
- Jalan 2,2-2,5 unit/detik, masa kerja lebih pendek, detik kerja pertama dipendekkan, waktu simulasi tidak melambat di fps rendah (dt per frame sampai 0,25 detik, tetap dipecah 0,05), batas fps 60 (Ringan) / 40 (Sinematik).
- API untuk halaman induk: `nexaStudio.view(pos,target,instant)`, `focusActor`, `follow(on)`, `followed()`, `setWork`, `agentLabels`, `tags`.
- Kamera ikut agen (2026-11-10): klik nama agen (atau `focusActor`) = kamera terbang ke agen itu lalu menempel selama ia berjalan; orbit dan zoom tetap bisa. Berhenti saat memilih zona, Overview, Tur, atau klik nama yang sama. `follow(false)` (centang "Kamera ikut agen" dilepas di Workspace) = klik nama hanya terbang sekali. Sebelumnya klik nama memindahkan kamera ke zona kerja agen.
- Tes: `npm run test:nexa-kendali`.
