import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const outputDir = path.join(root, 'app-store-assets', 'ios', '6.7-inch')
const WIDTH = 1290
const HEIGHT = 2796

const asset = (file) => path.join(root, file)

const colors = {
  bg: '#000000',
  text: '#f5f5f7',
  accent: '#0071e3',
  green: '#30d158',
  orange: '#ff9f0a',
}

/** One short headline per frame; store preview should read at a glance. */
const slides = [
  {
    file: '01-record-every-rally.png',
    title: 'Record every rally',
    bg: asset('src/assets/tennis/pexels-payam-zolfagharian-512739374-20544298.webp'),
    screen: asset('src/assets/tennis/how_works/app_screen.png'),
    accent: colors.accent,
    phoneScale: 1.38,
    phoneY: 358,
  },
  {
    file: '02-mount-clip-play.png',
    title: 'On the net in seconds',
    bg: asset('src/assets/tennis/how_works/place_device.webp'),
    screen: asset('src/assets/tennis/how_works/app_screen.png'),
    accent: colors.green,
    phoneScale: 1.34,
    phoneY: 372,
  },
  {
    file: '03-ai-highlights.png',
    title: 'Automatic highlights',
    bg: asset('src/assets/tennis/pexels-rdne-8224402.webp'),
    screen: asset('src/assets/tennis/how_works/see_improve.webp'),
    accent: colors.accent,
    phoneScale: 1.4,
    phoneY: 352,
  },
  {
    file: '04-train-smarter.png',
    title: 'Coach-level review',
    bg: asset('src/assets/tennis/pexels-sebastian-angarita-188980555-11915643.webp'),
    screen: asset('src/assets/tennis/how_works/app_screen.png'),
    accent: colors.orange,
    phoneScale: 1.36,
    phoneY: 364,
  },
  {
    file: '05-autopilot.png',
    title: 'Record. Then play.',
    bg: asset('src/assets/tennis/pexels-fireberrytech-12722255.webp'),
    screen: asset('src/assets/tennis/how_works/app_screen.png'),
    accent: colors.green,
    phoneScale: 1.36,
    phoneY: 364,
  },
  {
    file: '06-play-capture-enjoy.png',
    title: 'Play. Capture. Enjoy.',
    bg: asset('src/assets/tennis/pexels-shahin-mren-92379627-36231030.webp'),
    screen: asset('src/assets/tennis/how_works/see_improve.webp'),
    accent: colors.accent,
    phoneScale: 1.38,
    phoneY: 358,
  },
]

function escapeXml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function wrapText(text, maxChars) {
  const words = text.split(/\s+/)
  const lines = []
  let line = ''

  for (const word of words) {
    const next = line ? `${line} ${word}` : word
    if (next.length > maxChars && line) {
      lines.push(line)
      line = word
    } else {
      line = next
    }
  }

  if (line) lines.push(line)
  return lines
}

function textBlock({
  text,
  x,
  y,
  maxChars,
  size,
  weight = 700,
  color = colors.text,
  lineHeight = 1.04,
  anchor = 'start',
  letterSpacing = '-2',
}) {
  return wrapText(text, maxChars)
    .map((line, index) => {
      const dy = index === 0 ? 0 : size * lineHeight
      return `<text x="${x}" y="${y + dy}" text-anchor="${anchor}" font-family="Inter, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif" font-size="${size}" font-weight="${weight}" letter-spacing="${letterSpacing}" fill="${color}">${escapeXml(line)}</text>`
    })
    .join('')
}

function overlaySvg(slide) {
  const brandSize = 108
  const brandY = 128
  const titleY = brandY + 134
  const titleSize = 148
  return Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="topFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#000" stop-opacity="0.94"/>
          <stop offset="0.22" stop-color="#000" stop-opacity="0.72"/>
          <stop offset="0.45" stop-color="#000" stop-opacity="0.35"/>
          <stop offset="0.72" stop-color="#000" stop-opacity="0.28"/>
          <stop offset="1" stop-color="#000" stop-opacity="0.82"/>
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="30%" r="62%">
          <stop offset="0" stop-color="${slide.accent}" stop-opacity="0.38"/>
          <stop offset="0.45" stop-color="${slide.accent}" stop-opacity="0.12"/>
          <stop offset="1" stop-color="${slide.accent}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#topFade)"/>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>
      <path d="M-40 2160 C260 2030 430 2240 700 2120 C950 2010 1110 2050 1360 1910" stroke="${slide.accent}" stroke-width="2.5" stroke-opacity="0.22" fill="none"/>
      <path d="M-60 2250 C260 2110 456 2330 720 2210 C990 2085 1140 2150 1380 2010" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.10" fill="none"/>

      <text x="64" y="${brandY}" font-family="Inter, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif" font-size="${brandSize}" font-weight="800" letter-spacing="7" fill="#fff">NETSHOT</text>
      ${textBlock({
    text: slide.title,
    x: 64,
    y: titleY,
    maxChars: 22,
    size: titleSize,
    weight: 800,
    lineHeight: 1.04,
    letterSpacing: '-6',
  })}
    </svg>
  `)
}

function roundedRectMask(width, height, radius) {
  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" rx="${radius}" fill="#fff"/>
    </svg>
  `)
}

async function coverImage(input, width, height) {
  return sharp(input)
    .resize(width, height, { fit: 'cover' })
    .modulate({ saturation: 1.05 })
    .png()
    .toBuffer()
}

async function phoneComposite(slide) {
  const phoneW = Math.round(620 * slide.phoneScale)
  const phoneH = Math.round(1344 * slide.phoneScale)
  const border = Math.round(22 * slide.phoneScale)
  const radius = Math.round(86 * slide.phoneScale)
  const screenRadius = Math.round(60 * slide.phoneScale)
  const screenW = phoneW - border * 2
  const screenH = phoneH - border * 2

  const screen = await sharp(slide.screen)
    .resize(screenW, screenH, { fit: 'cover' })
    .composite([{ input: roundedRectMask(screenW, screenH, screenRadius), blend: 'dest-in' }])
    .png()
    .toBuffer()

  const phoneSvg = Buffer.from(`
    <svg width="${phoneW}" height="${phoneH}" viewBox="0 0 ${phoneW} ${phoneH}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="frame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#3a3a3c"/>
          <stop offset="0.46" stop-color="#0f0f10"/>
          <stop offset="1" stop-color="#6b6b70"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="${phoneW}" height="${phoneH}" rx="${radius}" fill="url(#frame)"/>
      <rect x="${border}" y="${border}" width="${screenW}" height="${screenH}" rx="${screenRadius}" fill="#050505"/>
      <rect x="${phoneW * 0.36}" y="${border + 16}" width="${phoneW * 0.28}" height="${Math.max(12, 24 * slide.phoneScale)}" rx="${Math.max(6, 12 * slide.phoneScale)}" fill="#111113"/>
    </svg>
  `)

  return sharp({
    create: {
      width: phoneW + 120,
      height: phoneH + 120,
      channels: 4,
      background: '#00000000',
    },
  })
    .composite([
      {
        input: Buffer.from(`
          <svg width="${phoneW + 120}" height="${phoneH + 120}" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="${phoneW / 2 + 60}" cy="${phoneH + 44}" rx="${phoneW * 0.5}" ry="54" fill="#000" opacity="0.56"/>
            <rect x="34" y="28" width="${phoneW + 52}" height="${phoneH + 52}" rx="${radius}" fill="${slide.accent}" opacity="0.18" filter="blur(24px)"/>
          </svg>
        `),
        left: 0,
        top: 0,
      },
      { input: phoneSvg, left: 60, top: 42 },
      { input: screen, left: 60 + border, top: 42 + border },
    ])
    .png()
    .toBuffer()
}

async function renderSlide(slide) {
  const bg = await sharp(slide.bg)
    .resize(WIDTH, HEIGHT, { fit: 'cover' })
    .modulate({ brightness: 0.78, saturation: 0.92 })
    .blur(1.6)
    .png()
    .toBuffer()

  const foreground = await coverImage(slide.bg, WIDTH, HEIGHT)
  const phone = await phoneComposite(slide)

  const phoneMeta = await sharp(phone).metadata()
  const phoneX = Math.round((WIDTH - (phoneMeta.width ?? 0)) / 2)

  const composites = [
    { input: foreground, left: 0, top: 0, blend: 'overlay' },
    { input: overlaySvg(slide), left: 0, top: 0 },
    { input: phone, left: phoneX, top: slide.phoneY },
  ]

  await sharp(bg)
    .composite(composites)
    .png({ compressionLevel: 9, palette: false })
    .toFile(path.join(outputDir, slide.file))
}

await fs.mkdir(outputDir, { recursive: true })

for (const slide of slides) {
  await renderSlide(slide)
  console.log(`created ${path.relative(root, path.join(outputDir, slide.file))}`)
}
