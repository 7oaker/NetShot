# Decisions Log

Format: date — decision — why. Append during build; never rewrite history.

A decision belongs here when someone could reasonably have chosen otherwise, and the
reason would not be obvious from reading the code six months later. Record the option
you rejected and why — that is the part that stops the question being reopened.

Status does **not** belong here. What is deployed, what is dirty, how many commits
exist: git, CI and the dashboards know that accurately and this file would not.

---

The entries below were reconstructed on 2026-08-26 from `CLAUDE.md`, `NETSHOT_BRAND.md`,
`vercel.json` and the build output, not from memory. Each names its source so it can be
checked. Nothing was inferred from commit messages alone — that is how a decisions log
fills up with plausible fiction.

- **2026-04-02 — Lenis owns smooth scrolling; CSS `scroll-behavior: smooth` is never used** — Lenis already handles it, and it is what feeds ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`. Turning the CSS property back on puts two scroll implementations in charge of the same gesture. (`CLAUDE.md`)
- **2026-04-02 — Four manual Vite vendor chunks: `vendor-react`, `vendor-three`, `vendor-gsap`, `vendor-lenis`** — heavy dependencies stay grouped so a change in one does not invalidate the cached bundle of the others. New heavy deps belong in one of these four, not in a fifth. (`CLAUDE.md`)
- **2026-04-02 — The GLB scene is `.clone(true)`-d so one model can render in several sections** — ProductSpecs and Preorder both show the mount; cloning avoids loading and preloading the asset twice. `enhanceMaterial` forces high metalness and low roughness to get the aluminium look, and must not be overridden when adding new models, or the product stops looking like the product. (`src/components/Model3D.tsx`, `CLAUDE.md`)
- **2026-04-02 — Translations are a typed nested object accessed only via `t.section.key` dot notation** — bracket string access compiles but defeats the point: with dot notation TypeScript catches a missing or renamed key at build time. (`src/i18n/translations.ts`, `CLAUDE.md`)
- **2026-04-28 — Language is chosen at the edge, not in the app** — `vercel.json` redirects `/` to `/de/` or `/en/` based on the `accept-language` header, and the build emits both `dist/de` and `dist/en`. The redirect is deliberately temporary (302), not permanent, because the root is language-neutral and a 301 would pin the first visitor's language into caches. Client-side preference is persisted separately in `localStorage` under `netshot-lang`. (`vercel.json`, `dist/`)

## Known gap, carried deliberately

`<html lang>` in `index.html` is hardcoded to `en`; JavaScript corrects it on first
render. Crawlers that do not execute JS see the wrong language attribute on the German
pages. Recorded in `CLAUDE.md` as a known gap rather than fixed, so it is a standing
trade-off and not a bug someone still has to find.

## Conventions without a recorded rationale

Enforced but never justified in writing: all component styles are inline React style
objects, with design tokens as CSS custom properties in `src/index.css` and no CSS
modules or utility classes anywhere; DOM targeting goes through refs, never through
classes or IDs added just for JavaScript.
