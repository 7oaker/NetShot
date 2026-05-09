import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useLang } from '../i18n/LanguageContext'
import { APP_STORE_URL } from '../constants'

import img1 from '../assets/tennis/pexels-payam-zolfagharian-512739374-20544298.webp'
import img2 from '../assets/tennis/pexels-rdne-8224402.webp'
import img3 from '../assets/tennis/pexels-sebastian-angarita-188980555-11915643.webp'

const featureColors = ['#0071e3', '#30d158', '#ff9f0a']
const featureBgs = [img1, img2, img3]

export default function AppSection() {
  const { t } = useLang()
  const sectionRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    gsap.fromTo(headRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 80%' } }
    )
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power4.out',
        scrollTrigger: { trigger: contentRef.current, start: 'top 80%' } }
    )
  }, [])

  const activeFeature = t.app.features[active]
  const activeColor = featureColors[active]
  const activeBg = featureBgs[active]

  return (
    <section id="app" aria-label="NetShot app — voice triggers, clip editing, highlight reel generation" ref={sectionRef} style={{
      background: 'var(--bg)',
      padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{ position: 'absolute', left: '-80px', top: '40%', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(0,113,227,0.2)', filter: 'blur(130px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: '-80px', bottom: '20%', width: '480px', height: '480px', borderRadius: '50%', background: 'rgba(0,113,227,0.18)', filter: 'blur(120px)', pointerEvents: 'none' }} />
      {/* Glow */}
      <div style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '400px',
        background: `radial-gradient(ellipse, ${activeColor}18 0%, transparent 70%)`,
        transition: 'background 0.6s ease',
        pointerEvents: 'none',
        marginTop: '-60px',
      }} />

      {/* Header */}
      <div ref={headRef} style={{ textAlign: 'center', marginBottom: 'clamp(56px, 8vw, 80px)', opacity: 0, position: 'relative' }}>
        <p style={{ fontSize: '13px', color: '#0071e3', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
          {t.app.label}
        </p>
        <h2 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          {t.app.headline}
        </h2>
        <p style={{ marginTop: '20px', fontSize: 'clamp(16px, 1.8vw, 19px)', color: 'var(--text-secondary)', maxWidth: '520px', margin: '20px auto 0', lineHeight: 1.6 }}>
          {t.app.description}
        </p>
      </div>

      {/* Feature selector + display */}
      <div ref={contentRef} style={{ maxWidth: '1000px', margin: '0 auto', opacity: 0, position: 'relative' }}>
        {/* Pill tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '48px', flexWrap: 'wrap' }}>
          {t.app.features.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setActive(i)}
              style={{
                background: active === i ? featureColors[i] : 'var(--overlay-light)',
                border: `1px solid ${active === i ? featureColors[i] : 'var(--border)'}`,
                color: active === i ? '#fff' : 'var(--text-secondary)',
                fontFamily: 'var(--font)',
                fontSize: '13px', fontWeight: 500,
                padding: '8px 20px', borderRadius: '980px', cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: active === i ? `0 0 20px ${featureColors[i]}40` : 'none',
              }}>
              {f.pill}
            </button>
          ))}
        </div>

        {/* Feature card */}
        <div className="app-feature-card" style={{
          position: 'relative',
          border: `1px solid ${activeColor}30`,
          borderRadius: '28px',
          padding: 'clamp(40px, 6vw, 64px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center',
          overflow: 'hidden',
          transition: 'border-color 0.4s ease',
        }}>
          {/* Background image */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${activeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'opacity 0.5s ease',
            zIndex: 0,
          }} />
          {/* Dark overlay so text stays readable */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.55) 100%)',
            zIndex: 1,
          }} />
          {/* Text */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{
              display: 'inline-block',
              background: `${activeColor}20`,
              color: activeColor,
              fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '5px 12px', borderRadius: '6px',
              marginBottom: '20px',
            }}>
              {activeFeature.pill}
            </span>
            <h3 style={{ fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '18px' }}>
              {activeFeature.title}
            </h3>
            <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {activeFeature.body}
            </p>
          </div>

          {/* App screen mockup */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
            <div style={{
              width: '200px',
              height: '380px',
              background: '#111',
              borderRadius: '36px',
              border: '8px solid #2c2c2e',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: `0 32px 64px rgba(0,0,0,0.6), 0 0 40px ${activeColor}20`,
            }}>
              {/* Notch */}
              <div style={{
                position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)',
                width: '60px', height: '6px',
                background: '#2c2c2e', borderRadius: '3px',
              }} />
              {/* Screen content */}
              <div style={{ padding: '36px 14px 14px', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ background: activeColor, borderRadius: '10px', height: '90px', opacity: 0.9 }} />
                <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '8px', height: '20px', width: '80%' }} />
                <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', height: '14px', width: '60%' }} />
                <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                  {[1,2,3].map(j => (
                    <div key={j} style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: '8px', height: '60px' }} />
                  ))}
                </div>
                <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', height: '14px', width: '70%' }} />
                <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', height: '14px', width: '45%' }} />
                <div style={{ flex: 1, background: `${activeColor}15`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: activeColor, opacity: 0.9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 0, height: 0, borderStyle: 'solid', borderWidth: '5px 0 5px 9px', borderColor: 'transparent transparent transparent white', marginLeft: '2px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .app-feature-card {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
              padding: 32px !important;
            }
          }
        `}</style>

        {/* Store buttons */}
        <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '9px',
              background: '#fff', border: 'none',
              borderRadius: '980px', padding: '13px 28px',
              color: '#000', fontFamily: 'var(--font)',
              fontSize: '15px', fontWeight: 600,
              textDecoration: 'none', whiteSpace: 'nowrap',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 0 32px rgba(255,255,255,0.15)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 48px rgba(255,255,255,0.25)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(255,255,255,0.15)' }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            {t.app.appStoreCta}
          </a>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            fontSize: '13px', color: 'var(--text-tertiary)',
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--text-tertiary)', display: 'inline-block', opacity: 0.4 }} />
            {t.app.comingSoon}
          </span>
        </div>
      </div>
    </section>
  )
}
