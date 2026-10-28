# Mediabarn site

The new Mediabarn site: one site, three pillars (Research, Design, Product), arranged as a loop: Understand → Shape → Run.
Same stack as `trustledgerai-microsite`: Astro 7 + Tailwind CSS 4, static output.

```sh
npm install
npm run dev            # http://localhost:4321
npm run build          # dist/
npm run export:static  # export/: the build with file-relative links, for previews outside a web server
```

## Pages

| Route | Notes |
|---|---|
| `/` | Home: the loop, with a sticky diagram that tracks the scroll |
| `/research/` | Content from mediabarnresearch.com, updated |
| `/design/`, `/federal/`, `/healthcare/` | Content from mediabarninc.com, updated |
| `/product/`, `/product/[slug]/` | New: Chirp, Edjit, CXAlign, Mediabarn Time |
| `/about/`, `/contact/` | Who we are, leadership; one routed contact form (`?topic=`) |

## Where things are

- `src/data/site.ts`: pillars (loop order, verbs, handoffs), products, contact info
- `src/data/productDetails.ts`: product page copy
- `src/styles/global.css`: brand tokens (from mediabarninc.com: red #FF1F26, paper #EAE4D7 / #F6F1E3, ink #2E1E1A), section tones (`.dark`, `.rust`), textures (`--grain`, `--fibers`), noisy glows (`.glow-*`)
- `src/components/site/Waves.astro`: the brand's wireframe waves, drawn as vector at build time (`seed` varies the shape)
- `src/components/site/Logo.astro`: the barn logo without the “Experience Design” line
- `src/components/site/Placeholder.astro`: noisy gradient blocks standing in for photography
- `src/components/site/Note.astro` + `ReviewToggle.astro`: review notes for the client (hidden until toggled). Remove both before launch

Fonts are self-hosted from npm (`@fontsource`): GFS Didot (headlines; Macs use the system Didot first), Inter, IBM Plex Mono (drafting labels).

## Deploying

Static output; Vercel detects Astro with no settings. Import the repo into Vercel and every push deploys.

Copy follows `mediabarn-voice-and-tone-standards.md`: no em dashes, acronyms defined on first use, one emphasized word per heading.

## mb-alt

Alternative home page, branched from `mb2.0` (79d5a8d) on 2026-10-28:

- **Hero** from Figma “MB UX Assets” › “Mediabarn alt” (node 2023:12997): `src/components/site/HeroAlt.astro`, with the client cards in `src/data/clientCards.ts`.
- **Silk background** (`src/components/site/SilkBackground.astro`): a WebGL2 shader in warm white, beige, sand and light brown that drifts and leans toward the pointer, with paper grain on top. Still frame under reduced motion; the Figma photo shows where WebGL2 isn’t available.
- **Figma assets**: run `sh scripts/fetch-hero-alt-assets.sh` from the project folder to download the hero’s logo, waves, menu icon, card photos and client logos into `public/images/hero-alt/`. The links expire 2026-11-04; after that, regenerate them from the Figma node.
