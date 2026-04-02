import { useEffect, useRef, useState } from 'react'
import amazonWhiteIcon from '../assets/logo/amazon/icons8-amazon-100.png'
import { gsap } from 'gsap'
import { useLang } from '../i18n/LanguageContext'
import { AMAZON_URL } from '../constants'

// Tennis images
import t1 from '../assets/tennis/pexels-bossistudio-7613507.webp'
import t2 from '../assets/tennis/pexels-rdne-8224402.webp'
import t3 from '../assets/tennis/pexels-roman-odintsov-8542725.webp'
import t4 from '../assets/tennis/pexels-sebastian-angarita-188980555-11915638.webp'
import t5 from '../assets/tennis/pexels-sebastian-angarita-188980555-16639179.webp'
import t6 from '../assets/tennis/pexels-gasparzaldo-13464791.webp'

// Padel images
import p1 from '../assets/padel/pexels-anhelina-vasylyk-734724285-35248393.webp'
import p2 from '../assets/padel/pexels-cristian-camilo-estrada-2152272341-35261961.webp'
import p3 from '../assets/padel/pexels-gun-gun-gunawan-2155120716-36227708.webp'
import p4 from '../assets/padel/pexels-roger-aribau-gisbert-19420784-15612082.webp'

const sportsMeta = [
  {
    id: 'tennis',
    available: true,
    emoji: '🎾',
    color: '#30d158',
    images: [
      { src: t1, alt: 'Tennis player at the baseline' },
      { src: t2, alt: 'Tennis doubles match in action' },
      { src: t3, alt: 'Tennis player serving' },
      { src: t4, alt: 'Tennis court from net level' },
      { src: t5, alt: 'Tennis training session' },
      { src: t6, alt: 'Tennis match on clay court' },
    ],
  },
  {
    id: 'padel',
    available: false,
    emoji: '🏓',
    color: '#ff9f0a',
    images: [
      { src: p1, alt: 'Padel court with glass walls' },
      { src: p2, alt: 'Padel players in a rally' },
      { src: p3, alt: 'Padel game action shot' },
      { src: p4, alt: 'Padel court overhead view' },
    ],
  },
]

export default function Sports() {
  const { t } = useLang()
  const sectionRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    gsap.fromTo(headRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 80%' } }
    )
  }, [])

  useEffect(() => {
    if (!gridRef.current) return
    gsap.fromTo(Array.from(gridRef.current.children),
      { opacity: 0, scale: 0.96, filter: 'blur(4px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.6, stagger: 0.07, ease: 'power3.out' }
    )
  }, [active])

  const meta = sportsMeta[active]
  const sportText = active === 0 ? t.sports.tennis : t.sports.padel
  const stat1 = sportText.stat1
  const stat2 = sportText.stat2

  return (
    <section id="sports" aria-label="Sports — NetShot for tennis and padel" ref={sectionRef} style={{
      background: 'var(--bg-2)',
      padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', left: '-80px', top: '50%', transform: 'translateY(-50%)', width: '500px', height: '500px', borderRadius: '50%', background: `${meta.color}33`, filter: 'blur(130px)', pointerEvents: 'none', transition: 'background 0.5s ease' }} />
      <div style={{ position: 'absolute', right: '-80px', top: '30%', width: '480px', height: '480px', borderRadius: '50%', background: `${meta.color}28`, filter: 'blur(120px)', pointerEvents: 'none', transition: 'background 0.5s ease' }} />

      {/* Header */}
      <div ref={headRef} style={{ textAlign: 'center', marginBottom: 'clamp(48px, 7vw, 64px)', opacity: 0 }}>
        <p style={{ fontSize: '13px', color: '#0071e3', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
          {t.sports.label}
        </p>
        <h2 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          {t.sports.headline}<br />
          <span style={{ color: 'var(--text-secondary)', fontWeight: 300 }}>{t.sports.subheadline}</span>
        </h2>
      </div>

      {/* Sport tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
        {sportsMeta.map((s, i) => {
          const name = i === 0 ? t.sports.tennis.name : t.sports.padel.name
          return (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: active === i ? 'var(--overlay-base)' : 'transparent',
                border: `1px solid ${active === i ? 'var(--overlay-bold)' : 'var(--border)'}`,
                color: active === i ? 'var(--text)' : 'var(--text-tertiary)',
                fontFamily: 'var(--font)', fontSize: '15px', fontWeight: 500,
                padding: '10px 22px', borderRadius: '980px', cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}>
              <span>{s.emoji}</span>
              {name}
              {!s.available && (
                <span style={{
                  fontSize: '10px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                  background: 'rgba(255,159,10,0.2)', color: '#ff9f0a',
                  padding: '2px 7px', borderRadius: '4px',
                }}>
                  {t.sports.soon}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Detail + image grid */}
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        alignItems: 'start',
      }}>
        {/* Left: detail card */}
        <div style={{
          background: 'var(--surface)',
          border: `1px solid ${meta.color}25`,
          borderRadius: '24px',
          padding: 'clamp(32px, 4vw, 48px)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.4s ease',
        }}>
          <div style={{
            position: 'absolute', top: '-40%', right: '-20%',
            width: '300px', height: '300px',
            background: `radial-gradient(circle, ${meta.color}10 0%, transparent 60%)`,
            pointerEvents: 'none',
            transition: 'background 0.5s ease',
          }} />

          {!meta.available && (
            <div style={{
              position: 'absolute', top: '20px', right: '20px',
              background: 'rgba(255,159,10,0.15)',
              border: '1px solid rgba(255,159,10,0.3)',
              color: '#ff9f0a',
              fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '5px 12px', borderRadius: '980px',
            }}>
              {t.sports.comingSoon}
            </div>
          )}

          <div style={{ fontSize: '40px', marginBottom: '16px' }}>{meta.emoji}</div>

          <h3 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: '12px' }}>
            {sportText.tagline}
          </h3>
          <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '32px' }}>
            {sportText.description}
          </p>

          <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', marginBottom: meta.available ? '32px' : '0' }}>
            {[stat1, stat2].filter(s => s.value !== '—').map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, color: meta.available ? 'var(--text)' : 'var(--text-tertiary)', letterSpacing: '-0.03em' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '3px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {meta.available && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '9px',
                  background: meta.color, borderRadius: '980px',
                  padding: '13px 26px',
                  color: '#fff', fontFamily: 'var(--font)',
                  fontSize: '15px', fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
                  boxShadow: `0 0 24px ${meta.color}50`,
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = `0 0 36px ${meta.color}80` }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = `0 0 24px ${meta.color}50` }}
              >
                <img src={amazonWhiteIcon} alt="Amazon" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                {t.sports.orderNow}
              </a>
            </div>
          )}
        </div>

        {/* Right: image grid */}
        <div ref={gridRef} className="sports-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(3, 180px)',
          gap: '8px',
        }}>
          {meta.images.map((img, i) => (
            <div key={i} style={{
              borderRadius: '14px',
              overflow: 'hidden',
              gridColumn: i === 0 ? 'span 2' : 'span 1',
              gridRow: i === 0 ? 'span 1' : 'span 1',
            }}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                  filter: !meta.available ? 'grayscale(60%) brightness(0.7)' : 'brightness(0.9)',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 640px) {
            .sports-grid { grid-template-rows: repeat(3, 140px) !important; }
          }
        `}</style>
      </div>
    </section>
  )
}
