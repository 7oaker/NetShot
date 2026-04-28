import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const distDir = join(rootDir, 'dist')
const siteUrl = 'https://netshot.store'

const pages = {
  en: {
    path: '/en/',
    title: 'NetShot — Tennis Net Phone Mount for Recording Matches',
    description:
      'NetShot is a premium aircraft-grade aluminium tennis net phone mount for recording matches, training sessions, and rallies from the perfect court angle. Clips on in seconds and pairs with the upcoming AI tennis highlights app.',
    ogLocale: 'en_US',
    label: 'English',
    nav: ['How it works', 'The App', 'Sports', 'Launch updates'],
    hero: {
      headline: ['Play.', 'Capture.', 'Enjoy.'],
      sub1: 'Your game. Captured effortlessly.',
      sub2: 'The premium aluminium mount built for the net.',
    },
    sections: [
      {
        heading: 'Tennis net phone mount for match recording',
        body: 'NetShot mounts to a standard tennis net post and positions your smartphone for a stable court-level angle. It is built for players who want to record tennis matches, training sessions, rallies, and highlights without a tripod or complicated setup.',
      },
      {
        heading: 'Built from aircraft-grade aluminium',
        body: 'The mount is machined from 6061 aluminium, weighs 238g, clips on in under five seconds, and fits smartphones up to 75mm wide and 12mm thick.',
      },
      {
        heading: 'AI tennis highlights app coming soon',
        body: 'The upcoming NetShot app will help detect rallies, clip highlights, review training footage, and organize sessions for players and coaches.',
      },
    ],
    faq: [
      ['How does NetShot attach to a tennis net?', 'NetShot uses a precision-machined aluminium clamp that slides onto a standard tennis net post or top rail in under 5 seconds. No tools required.'],
      ['What phones does NetShot support?', 'The universal spring-loaded cradle holds smartphones up to 75mm wide and 12mm thick, covering major iPhone and Android models.'],
      ['How do I record my tennis match with NetShot?', 'Mount NetShot on the net post, clip in your phone, press record, and review your tennis footage after the session.'],
      ['Is there an AI highlights app for tennis?', 'Yes. The NetShot companion app is coming soon for iOS and Android and will help detect rallies, clip highlights, and organize sessions.'],
    ],
  },
  de: {
    path: '/de/',
    title: 'NetShot — Tennisnetz-Handyhalterung für Match-Aufnahmen',
    description:
      'NetShot ist eine Premium-Handyhalterung aus Luftfahrt-Aluminium für Tennisnetzpfosten. Nimm Matches, Trainings und Ballwechsel aus dem perfekten Winkel auf. In Sekunden montiert und vorbereitet für die kommende KI-Tennis-Highlights-App.',
    ogLocale: 'de_DE',
    label: 'Deutsch',
    nav: ['So funktioniert es', 'Die App', 'Sportarten', 'Updates erhalten'],
    hero: {
      headline: ['Spielen.', 'Aufnehmen.', 'Genießen.'],
      sub1: 'Dein Spiel. Mühelos festgehalten.',
      sub2: 'Die premium Aluminiumhalterung fürs Netz.',
    },
    sections: [
      {
        heading: 'Tennisnetz-Handyhalterung für Match-Aufnahmen',
        body: 'NetShot wird am Tennisnetzpfosten befestigt und positioniert dein Smartphone für einen stabilen Winkel direkt vom Court. Ideal, um Tennismatches, Trainings, Ballwechsel und Highlights ohne Stativ oder kompliziertes Setup aufzunehmen.',
      },
      {
        heading: 'Aus Luftfahrt-Aluminium gefertigt',
        body: 'Die Halterung wird aus 6061 Aluminium gefräst, wiegt 238g, ist in unter fünf Sekunden montiert und passt für Smartphones bis 75mm Breite und 12mm Dicke.',
      },
      {
        heading: 'KI-Tennis-Highlights-App in Entwicklung',
        body: 'Die kommende NetShot-App hilft dabei, Ballwechsel zu erkennen, Highlights zu schneiden, Trainingsvideos zu prüfen und Sessions für Spieler und Coaches zu organisieren.',
      },
    ],
    faq: [
      ['Wie befestigt sich NetShot am Tennisnetz?', 'NetShot nutzt eine präzisionsgefräste Aluminiumklemme, die in unter 5 Sekunden auf einen Standard-Tennisnetpfosten oder Netzstab geschoben wird. Kein Werkzeug erforderlich.'],
      ['Welche Handys unterstützt NetShot?', 'Die universelle Federhalterung hält Smartphones bis 75mm Breite und 12mm Dicke und deckt wichtige iPhone- und Android-Modelle ab.'],
      ['Wie nehme ich mein Tennismatch mit NetShot auf?', 'NetShot am Netzpfosten montieren, Handy einclipsen, Aufnahme starten und das Tennismaterial nach der Session ansehen.'],
      ['Gibt es eine KI-Highlights-App für Tennis?', 'Ja. Die NetShot-App kommt für iOS und Android und wird dabei helfen, Ballwechsel zu erkennen, Highlights zu schneiden und Sessions zu organisieren.'],
    ],
  },
}

const alternates = [
  '<link rel="alternate" hreflang="en" href="https://netshot.store/en/" />',
  '<link rel="alternate" hreflang="de" href="https://netshot.store/de/" />',
  '<link rel="alternate" hreflang="x-default" href="https://netshot.store/" />',
].join('\n    ')

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function renderStaticContent(page) {
  const headline = page.hero.headline.map((line) => `<span>${escapeHtml(line)}</span>`).join(' ')
  const nav = page.nav.map((item) => `<li>${escapeHtml(item)}</li>`).join('')
  const sections = page.sections
    .map((section) => `<section><h2>${escapeHtml(section.heading)}</h2><p>${escapeHtml(section.body)}</p></section>`)
    .join('')
  const faq = page.faq
    .map(([question, answer]) => `<div><h3>${escapeHtml(question)}</h3><p>${escapeHtml(answer)}</p></div>`)
    .join('')

  return `<article class="seo-prerender" aria-label="NetShot SEO prerendered content">
      <nav aria-label="Primary navigation"><ul>${nav}</ul></nav>
      <header>
        <h1>${headline}</h1>
        <p>${escapeHtml(page.hero.sub1)} ${escapeHtml(page.hero.sub2)}</p>
      </header>
      ${sections}
      <section>
        <h2>FAQ</h2>
        ${faq}
      </section>
    </article>`
}

function updateJsonLd(html, page, canonicalUrl) {
  return html
    .replace(/"url": "https:\/\/netshot\.store\/"/g, `"url": "${canonicalUrl}"`)
    .replace(/"description": "Premium aircraft-grade 6061 aluminium tennis net phone mount[^"]+"/, `"description": ${JSON.stringify(page.description)}`)
}

function renderFaqJsonLd(page) {
  return JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faq.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer,
        },
      })),
    },
    null,
    2
  )
}

function localizeHtml(template, lang, page, canonicalPath) {
  const canonicalUrl = `${siteUrl}${canonicalPath}`
  let html = template
    .replace(/<html lang="[^"]*" data-lang="[^"]*">/, `<html lang="${lang}" data-lang="${lang}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(page.description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(page.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeHtml(page.description)}" />`)
    .replace(/<meta property="og:locale" content="[^"]*" \/>/, `<meta property="og:locale" content="${page.ogLocale}" />`)
    .replace(/<meta property="og:locale:alternate" content="[^"]*" \/>/, `<meta property="og:locale:alternate" content="${lang === 'en' ? 'de_DE' : 'en_US'}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonicalUrl}" />\n    ${alternates}`)
    .replace(/<div id="root"><\/div>/, `<div id="root">${renderStaticContent(page)}</div>`)

  html = updateJsonLd(html, page, canonicalUrl)
  html = html.replace(
    /<!-- ─── Structured Data: FAQPage ────────────────────────────────── -->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<!-- ─── Structured Data: FAQPage ────────────────────────────────── -->\n    <script type="application/ld+json">\n    ${renderFaqJsonLd(page)}\n    </script>`
  )
  return html
}

function renderSitemap() {
  const urls = [
    { loc: `${siteUrl}/de/`, priority: '1.0' },
    { loc: `${siteUrl}/en/`, priority: '1.0' },
  ]

  const alternatesXml = `      <xhtml:link rel="alternate" hreflang="de" href="${siteUrl}/de/" />
      <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en/" />
      <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/" />`

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    ({ loc, priority }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>2026-04-28</lastmod>
${alternatesXml}
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`
}

const template = await readFile(join(distDir, 'index.html'), 'utf8')

await writeFile(join(distDir, 'index.html'), localizeHtml(template, 'de', pages.de, '/de/'))

for (const [lang, page] of Object.entries(pages)) {
  const outDir = join(distDir, lang)
  await mkdir(outDir, { recursive: true })
  await writeFile(join(outDir, 'index.html'), localizeHtml(template, lang, page, page.path))
}

await writeFile(join(distDir, 'sitemap.xml'), renderSitemap())

console.log('Prerendered localized SEO pages: /de/ and /en/')
