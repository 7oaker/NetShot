import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useLang } from '../i18n/LanguageContext'
import placeDevice from '../assets/tennis/how_works/place_device.webp'
import inplaceDevice from '../assets/tennis/how_works/inplace_device.webp'
import appScreen from '../assets/tennis/how_works/app_screen.webp'
import seeImprove from '../assets/tennis/how_works/see_improve.webp'

const stepBg: Record<number, string> = {
  0: placeDevice,
  1: inplaceDevice,
  2: appScreen,
  3: seeImprove,
}

const stepIcons = [
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="14" width="20" height="4" rx="2" stroke="#0071e3" strokeWidth="1.5"/>
      <circle cx="16" cy="16" r="3" fill="#0071e3"/>
      <path d="M16 6v4M16 22v4M6 16H2M30 16h-4" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="10" y="4" width="12" height="20" rx="3" stroke="#0071e3" strokeWidth="1.5"/>
      <circle cx="16" cy="20" r="1.5" fill="#0071e3"/>
      <path d="M8 10h-2a2 2 0 00-2 2v8a2 2 0 002 2h2M24 10h2a2 2 0 012 2v8a2 2 0 01-2 2h-2" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="11" stroke="#0071e3" strokeWidth="1.5"/>
      <path d="M13 11.5l8 4.5-8 4.5V11.5z" fill="#0071e3"/>
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M4 8h24M4 16h16M4 24h20" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="26" cy="22" r="4" stroke="#0071e3" strokeWidth="1.5"/>
      <path d="M29 25l2.5 2.5" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
]

export default function HowItWorks() {
  const { t } = useLang()
  const sectionRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!headRef.current || !stepsRef.current) return

    gsap.fromTo(headRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power4.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 80%' } }
    )

    gsap.fromTo(stepsRef.current.children,
      { opacity: 0, y: 50, filter: 'blur(4px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)',
        duration: 0.8, stagger: 0.15, ease: 'power4.out',
        scrollTrigger: { trigger: stepsRef.current, start: 'top 75%' } }
    )
  }, [])

  return (
    <section id="how-it-works" aria-label="How NetShot works — mount, clip, play, review" ref={sectionRef} style={{
      background: 'var(--bg)',
      padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', left: '-80px', top: '50%', transform: 'translateY(-50%)', width: '520px', height: '520px', borderRadius: '50%', background: 'rgba(0,113,227,0.2)', filter: 'blur(130px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: '-80px', top: '30%', width: '480px', height: '480px', borderRadius: '50%', background: 'rgba(0,113,227,0.16)', filter: 'blur(120px)', pointerEvents: 'none' }} />

      {/* Header */}
      <div ref={headRef} style={{ textAlign: 'center', marginBottom: 'clamp(56px, 8vw, 80px)', opacity: 0 }}>
        {/* <p style={{ fontSize: '13px', color: '#0071e3', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
          {t.howItWorks.label}
        </p> */}
        <h2 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          {t.howItWorks.headline}<br />
          <span style={{ color: 'var(--text-secondary)', fontWeight: 300 }}>{t.howItWorks.subheadline}</span>
        </h2>
      </div>

      {/* Steps grid */}
      <div ref={stepsRef} className="how-steps" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2px',
        maxWidth: '1100px',
        margin: '0 auto',
        border: '1px solid var(--border)',
        borderRadius: '24px',
        overflow: 'hidden',
      }}>
        {t.howItWorks.steps.map((step, i) => (
          <div key={i} className={i < t.howItWorks.steps.length - 1 ? 'how-step how-step-sep' : 'how-step'} style={{
            padding: 'clamp(32px, 4vw, 48px) clamp(24px, 3vw, 36px)',
            background: 'var(--surface)',
            borderRight: i < t.howItWorks.steps.length - 1 ? '1px solid var(--border)' : 'none',
            cursor: 'default',
            transition: 'background 0.3s',
            position: 'relative',
            opacity: 0,
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-3)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--surface)'}
          >
            {stepBg[i] && (
              <>
                <div className="step-bg-img" style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `url(${stepBg[i]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.12,
                  transition: 'opacity 0.5s ease',
                  pointerEvents: 'none',
                }} />
                <div className="step-bg-overlay" style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, var(--surface) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 60%, var(--surface) 100%)',
                  transition: 'opacity 0.5s ease',
                  pointerEvents: 'none',
                }} />
              </>
            )}
            <div className="step-icon" style={{ marginBottom: '24px' }}>{stepIcons[i]}</div>
            <div className="step-header">
              <div style={{ fontSize: '11px', color: '#fff', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '10px' }}>
                {step.number}
              </div>
              <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: '10px' }}>
                {step.headline}
              </h3>
            </div>
            <p className="step-desc" style={{ fontSize: 'clamp(13px, 1.4vw, 15px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, transition: 'opacity 0.4s ease, max-height 0.4s ease' }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
      <style>{`
        .how-step:hover .step-bg-img { opacity: 0.55 !important; }
        .how-step:hover .step-bg-overlay { opacity: 0 !important; }
        .how-step:hover .step-desc { opacity: 0 !important; }
        .how-step:hover .step-icon { opacity: 0 !important; }
        .step-desc { transition: opacity 0.4s ease; }
        .step-icon { transition: opacity 0.4s ease; }
        @media (max-width: 640px) {
          .how-steps { grid-template-columns: 1fr !important; }
          .how-step-sep { border-right: none !important; border-bottom: 1px solid var(--border); }
        }
      `}</style>
    </section>
  )
}
