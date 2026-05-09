import { useEffect, useRef, type CSSProperties } from 'react'
import { gsap } from 'gsap'
import amazonBlackIcon from '../assets/logo/amazon/black/icons8-amazon-100.png'
import Model3D from './Model3D'
import { useLang } from '../i18n/LanguageContext'
import { AMAZON_URL, HAS_AMAZON_URL, APP_STORE_URL } from '../constants'

const statsValues = ['6061', '238g', '<5s', '∞']
const featureColors = ['#0071e3', '#30d158', '#ff9f0a']

export default function Preorder() {
  const { t } = useLang()
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
    )
  }, [])

  const { getYoursCard, appCard } = t.preorder
  const amazonButtonStyle: CSSProperties = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '9px',
    background: HAS_AMAZON_URL ? '#ff9900' : 'var(--overlay-light)',
    border: HAS_AMAZON_URL ? 'none' : '1px solid var(--border-medium)',
    borderRadius: '980px',
    padding: '13px 24px',
    color: HAS_AMAZON_URL ? '#000' : 'var(--text-secondary)', fontFamily: 'var(--font)',
    fontSize: '15px', fontWeight: 600,
    textDecoration: 'none',
    transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
    boxShadow: HAS_AMAZON_URL ? '0 0 24px rgba(255,153,0,0.3)' : 'none',
    whiteSpace: 'nowrap',
    cursor: HAS_AMAZON_URL ? 'pointer' : 'default',
  }

  return (
    <section id="order" ref={sectionRef} style={{
      background: 'var(--bg)',
      minHeight: '100vh',
      padding: 'clamp(72px, 10vw, 120px) clamp(24px, 6vw, 80px)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '600px',
        background: 'radial-gradient(ellipse, rgba(0,113,227,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
        pointerEvents: 'none',
      }} />

      <div ref={contentRef} style={{ position: 'relative', zIndex: 1, opacity: 0 }}>
        {/* Headline */}
        <h2 style={{
          fontSize: 'clamp(38px, 6vw, 72px)',
          fontWeight: 800,
          color: 'var(--text)',
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
          marginBottom: '16px',
        }}>
          {t.preorder.headline}<br />
          <span style={{ color: '#0071e3' }}>{t.preorder.subheadline}</span>
        </h2>
        <p style={{
          fontSize: 'clamp(15px, 1.6vw, 18px)',
          color: 'var(--text-secondary)',
          maxWidth: '480px',
          margin: '0 auto clamp(36px, 6vw, 56px)',
          lineHeight: 1.6,
        }}>
          {t.preorder.description}
        </p>

        {/* Two CTA cards */}
        <div className="preorder-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: 'clamp(16px, 3vw, 28px)',
          maxWidth: '900px',
          margin: '0 auto',
          alignItems: 'stretch',
          textAlign: 'left',
        }}>

          {/* ── Get Yours ── */}
          <div style={{
            background: 'var(--overlay-subtle)',
            border: '1px solid var(--border)',
            borderRadius: '24px',
            padding: 'clamp(24px, 3vw, 36px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            overflow: 'hidden',
          }}>
            <div>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: 'rgba(255,153,0,0.12)',
                border: '1px solid rgba(255,153,0,0.25)',
                borderRadius: '980px', padding: '4px 12px',
                fontSize: '11px', fontWeight: 600, color: '#ff9900',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                marginBottom: '14px',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#ff9900', display: 'inline-block' }} />
                {getYoursCard.badge}
              </span>
              <div style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: '8px' }}>
                {getYoursCard.title}
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {getYoursCard.description}
              </div>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
            }}>
              {statsValues.map((value, i) => (
                <div key={i} style={{
                  background: 'var(--overlay-faint)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '12px 8px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em' }}>
                    {value}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '3px' }}>
                    {getYoursCard.statsLabels[i]}
                  </div>
                </div>
              ))}
            </div>

            {/* 3D model */}
            <div className="model-container" style={{
              flex: 1,
              minHeight: '220px',
              borderRadius: '16px',
              overflow: 'hidden',
              background: 'radial-gradient(ellipse at center, rgba(255,153,0,0.05) 0%, transparent 70%)',
            }}>
              <Model3D autoRotate={true} enableOrbit={false} height="100%" />
            </div>

            {/* Amazon CTA */}
            {HAS_AMAZON_URL ? (
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="amazon-btn"
                style={amazonButtonStyle}
                onMouseEnter={e => { e.currentTarget.style.background = '#ffaa1a'; e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(255,153,0,0.45)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#ff9900'; e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(255,153,0,0.3)' }}
              >
                <img src={amazonBlackIcon} alt="Amazon" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                {getYoursCard.cta}
              </a>
            ) : (
              <span className="amazon-btn" aria-label={getYoursCard.comingSoonCta} style={amazonButtonStyle}>
                {getYoursCard.comingSoonCta}
              </span>
            )}
          </div>

          {/* ── App Waitlist ── */}
          <div style={{
            background: 'var(--overlay-subtle)',
            border: '1px solid rgba(0,113,227,0.15)',
            borderRadius: '24px',
            padding: 'clamp(24px, 3vw, 36px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            overflow: 'hidden',
          }}>
            <div>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: 'rgba(0,113,227,0.12)',
                border: '1px solid rgba(0,113,227,0.25)',
                borderRadius: '980px', padding: '4px 12px',
                fontSize: '11px', fontWeight: 600, color: '#0071e3',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                marginBottom: '14px',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#0071e3', display: 'inline-block', boxShadow: '0 0 8px #0071e3' }} />
                {appCard.badge}
              </span>
              <div style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: '12px' }}>
                {appCard.title}
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                {appCard.description}
              </p>
            </div>

            {/* Feature list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {appCard.features.map((f, i) => (
                <div key={f.label} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '10px',
                  padding: '12px 14px',
                  background: 'var(--overlay-subtle)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: featureColors[i], flexShrink: 0, marginTop: '5px', boxShadow: `0 0 8px ${featureColors[i]}80` }} />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>{f.label}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Store buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '9px',
                  background: '#000', border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '980px', padding: '13px 24px',
                  color: '#fff', fontFamily: 'var(--font)',
                  fontSize: '15px', fontWeight: 600,
                  textDecoration: 'none', whiteSpace: 'nowrap',
                  transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 0 24px rgba(0,113,227,0.25)',
                  width: '100%', boxSizing: 'border-box',
                } as CSSProperties}
                onMouseEnter={e => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.transform = 'scale(1.03)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.transform = 'scale(1)' }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                {appCard.appStoreCta}
              </a>
              <div style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                background: 'var(--overlay-faint)',
                border: '1px solid var(--border)',
                borderRadius: '980px', padding: '10px 20px',
                fontSize: '13px', color: 'var(--text-tertiary)',
                width: '100%', boxSizing: 'border-box',
              } as CSSProperties}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--text-tertiary)', display: 'inline-block', opacity: 0.5 }} />
                {appCard.playStoreSoon}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .preorder-grid {
            grid-template-columns: 1fr !important;
          }
          .amazon-btn {
            justify-content: center;
            width: 100%;
            box-sizing: border-box;
          }
          .model-container {
            min-height: 280px !important;
          }
        }
      `}</style>
    </section>
  )
}
