# NetShot — Claude Code Context

## What this is
Marketing landing page for **NetShot**, a premium aluminium phone mount that clips onto tennis net posts. The product is available on Amazon; a companion AI app is coming soon.

## Stack
- **React 18** + **TypeScript** + **Vite**
- **Three.js** via `@react-three/fiber` + `@react-three/drei` (3D product model)
- **GSAP** with ScrollTrigger (scroll animations)
- **Lenis** (smooth scroll)
- No backend, no routing — single-page static site

## Key files
| File | Purpose |
|---|---|
| `src/App.tsx` | Root layout, Lenis + GSAP setup, wraps everything in `LanguageProvider` |
| `src/constants.ts` | Shared constants — `AMAZON_URL` lives here |
| `src/i18n/translations.ts` | All EN + DE strings — edit here for copy changes |
| `src/i18n/LanguageContext.tsx` | `useLang()` hook — detects browser lang, persists to `localStorage`, syncs `<html lang>` |
| `src/components/Navbar.tsx` | Fixed nav with EN/DE language toggle |
| `src/components/Model3D.tsx` | Three.js 3D model viewer (Suspense already inside Canvas) |
| `public/Tennisnetz_Halterung_V1.glb` | 3D model used in ProductSpecs + Preorder |
| `index.html` | SEO meta, structured data (JSON-LD), hreflang, favicons |
| `NETSHOT_BRAND.md` | Brand brief — tone, values, taglines |
| `eslint.config.js` | ESLint flat config (ESLint 9) with TS + react-hooks rules |

## Dev commands
```bash
npm run dev         # start dev server
npm run build       # type-check + production build
npm run preview     # preview production build
npm run lint        # ESLint (0 warnings target)
npm run type-check  # TypeScript check without building
```

## i18n
- Translations live in `src/i18n/translations.ts` as typed nested objects
- `useLang()` returns `{ lang, t, setLang }` — `t` is the full translation object for the active language
- Language defaults to `de` if `navigator.language` starts with `de`, else `en`
- Saved to `localStorage` under key `netshot-lang`
- The `<html lang>` attribute is NOT dynamically updated yet (known gap)

## Known issues / TODOs
- Amazon URL is a placeholder — update `AMAZON_URL` in `src/constants.ts` when live
- `public/hero-poster.jpg` is missing — the hero `<video>` references it as a fallback poster image; add a still frame from the video
- `<html lang>` starts as `en` in the static HTML; it updates via JS on first render via `LanguageContext`

## Coding conventions
- All component styles are inline React style objects (no CSS modules)
- Animations: GSAP `fromTo` in `useEffect` with ScrollTrigger, triggered on mount
- Never add classes or IDs just for JS targeting — use `ref`s
- Keep translations typed — `t.section.key`, never `t['section']['key']` as string access
