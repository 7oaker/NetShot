# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is
Marketing landing page for **NetShot**, a premium aluminium phone mount that clips onto tennis net posts. Product available on Amazon; a companion AI app is coming soon. Single-page static site — no backend, no routing.

## Stack
- **React 18** + **TypeScript** + **Vite**
- **Three.js** via `@react-three/fiber` + `@react-three/drei` (3D product model)
- **GSAP** with ScrollTrigger (scroll animations)
- **Lenis** (smooth scroll, integrated with GSAP ticker in `App.tsx`)
- `vite-plugin-image-optimizer` + `sharp` — images are compressed at build time

## Dev commands
```bash
npm run dev         # start dev server
npm run build       # tsc + vite build (type errors fail the build)
npm run preview     # preview production build
npm run lint        # ESLint — 0 warnings target
npm run type-check  # tsc --noEmit only
```

## Architecture

### Page structure
`App.tsx` is the root. It initialises Lenis + GSAP, wraps everything in `LanguageProvider`, and renders sections in this order:
```
Navbar → Hero → ProductSpecs → Tagline → HowItWorks → AppSection → Sports → FeatureGrid → Preorder → FAQ → Footer
```
Each section is a self-contained component in `src/components/`. No shared state between sections — each reads from `useLang()` for translations.

### 3D model (`Model3D.tsx`)
- `<Model3D>` wraps a `<Canvas>` with `<Suspense fallback={null}>` already inside it
- The `.glb` is preloaded via `useGLTF.preload('/Tennisnetz_Halterung_V1.glb')` at module level
- The scene is `.clone(true)`-d to allow the same model in multiple sections (ProductSpecs + Preorder)
- Auto-rotation pauses on drag; `enableOrbit`, `autoRotate`, and `height` are configurable props
- Material enhancement (`enhanceMaterial`) forces high metalness/low roughness for the aluminium look — don't override this when adding new models

### Scroll animations
- `gsap.registerPlugin(ScrollTrigger)` is called once at the top of `App.tsx`
- Each component creates its own ScrollTrigger inside a `useEffect` with `ref`s as targets
- Lenis feeds into ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`
- Never use CSS `scroll-behavior: smooth` — Lenis handles this

### i18n
- All copy lives in `src/i18n/translations.ts` as typed nested objects (EN + DE)
- `useLang()` → `{ lang, t, setLang }` — `t` is the full typed translation object
- Language defaults to `de` if `navigator.language` starts with `de`, else `en`; persisted to `localStorage` under `netshot-lang`
- Use `t.section.key` dot-notation only — never bracket string access
- Known gap: `<html lang>` in `index.html` is static `en`; JS updates it on first render

### Build chunking
Vite splits vendor output into four manual chunks: `vendor-react`, `vendor-three`, `vendor-gsap`, `vendor-lenis`. Keep heavy deps in these groups to preserve caching.

## Key files
| File | Purpose |
|---|---|
| `src/App.tsx` | Root layout, Lenis + GSAP init, section order |
| `src/constants.ts` | `AMAZON_URL` and other shared constants |
| `src/i18n/translations.ts` | All EN + DE strings |
| `src/i18n/LanguageContext.tsx` | `useLang()` hook + `LanguageProvider` |
| `src/components/Model3D.tsx` | Reusable 3D viewer (used in ProductSpecs + Preorder) |
| `public/Tennisnetz_Halterung_V1.glb` | 3D model file |
| `index.html` | SEO meta, JSON-LD structured data, hreflang, favicons |
| `src/index.css` | CSS custom properties (all design tokens) — no CSS modules anywhere |
| `NETSHOT_BRAND.md` | Brand brief — tone, values, taglines |

## Coding conventions
- All component styles are **inline React style objects** — no CSS modules, no utility classes
- Design tokens come from CSS custom properties defined in `src/index.css` (e.g. `var(--accent)`, `var(--surface)`)
- Use `ref`s for DOM targeting — never add classes/IDs just for JS
- Animations: GSAP `fromTo` in `useEffect` with ScrollTrigger, cleanup on return
- Translations are fully typed — TypeScript will catch missing keys

## Known TODOs
- `AMAZON_URL` in `src/constants.ts` is a placeholder — update when live
- `public/hero-poster.jpg` is missing — `<video>` in Hero references it as fallback poster
