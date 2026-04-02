import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const features = [
  {
    title: 'Premium Aluminium',
    body: 'Machined from 6061 aircraft-grade aluminium. Built for courts, built to last. No plastic. No compromises.',
    accent: '#a1a1a6',
    size: 'large',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="url(#alum)" strokeWidth="1.5" fill="none"/>
        <path d="M20 4V36M4 12l16 8 16-8" stroke="url(#alum)" strokeWidth="1" strokeOpacity="0.5"/>
        <defs>
          <linearGradient id="alum" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#d1d1d6"/>
            <stop offset="1" stopColor="#636366"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: 'Universal Fit',
    body: 'Any net post. Any phone. Instantly secure.',
    accent: '#0071e3',
    size: 'small',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="14" stroke="#0071e3" strokeWidth="1.5"/>
        <path d="M9 18h18M18 9v18" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="4" fill="#0071e3" fillOpacity="0.3" stroke="#0071e3" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'App Connected',
    body: 'iOS & Android. Automatic sync. Everything in one place.',
    accent: '#30d158',
    size: 'small',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="10" y="4" width="16" height="28" rx="4" stroke="#30d158" strokeWidth="1.5"/>
        <circle cx="18" cy="27" r="1.5" fill="#30d158"/>
        <path d="M14 10h8M14 14h5" stroke="#30d158" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Auto Highlights',
    body: 'AI detects your best moments and clips them automatically. No editing. No hassle. Just great footage.',
    accent: '#ff9f0a',
    size: 'large',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M8 20L32 20M20 8L32 20L20 32" stroke="#ff9f0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="20" r="14" stroke="#ff9f0a" strokeWidth="1.5" strokeOpacity="0.3"/>
        <circle cx="20" cy="20" r="6" fill="#ff9f0a" fillOpacity="0.2"/>
      </svg>
    ),
  },
  {
    title: 'Setup in Seconds',
    body: 'Under 5 seconds from bag to recording. No tools required.',
    accent: '#64d2ff',
    size: 'small',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="13" stroke="#64d2ff" strokeWidth="1.5"/>
        <path d="M18 10v8l5 3" stroke="#64d2ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const MOBILE_PREVIEW = 2

export default function FeatureGrid() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [expanded, setExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)')
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    gsap.fromTo(headRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 80%' } }
    )

    const initialCards = isMobile
      ? cardRefs.current.slice(0, MOBILE_PREVIEW).filter(Boolean)
      : cardRefs.current.filter(Boolean)

    gsap.fromTo(initialCards,
      { opacity: 0, y: 40, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.75, stagger: 0.08, ease: 'power4.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 75%' } }
    )
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleExpand = () => {
    setExpanded(true)
    requestAnimationFrame(() => {
      const newCards = cardRefs.current.slice(MOBILE_PREVIEW).filter(Boolean)
      gsap.fromTo(newCards,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: 'power3.out' }
      )
    })
  }

  return (
    <section ref={sectionRef} style={{
      background: '#000',
      padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', right: '-80px', top: '50%', transform: 'translateY(-50%)', width: '520px', height: '520px', borderRadius: '50%', background: 'rgba(0,113,227,0.2)', filter: 'blur(130px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: '-80px', bottom: '25%', width: '480px', height: '480px', borderRadius: '50%', background: 'rgba(0,113,227,0.18)', filter: 'blur(120px)', pointerEvents: 'none' }} />
      {/* Header */}
      <div ref={headRef} style={{ textAlign: 'center', marginBottom: 'clamp(56px, 8vw, 72px)', opacity: 0 }}>
        <p style={{ fontSize: '13px', color: '#0071e3', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Why NetShot
        </p>
        <h2 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          Everything considered.
        </h2>
      </div>

      {/* Bento grid */}
      <div ref={gridRef} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {features.map((f, i) => {
          const isLarge = f.size === 'large'
          const isHidden = isMobile && !expanded && i >= MOBILE_PREVIEW
          return (
            <div
              key={i}
              ref={el => { cardRefs.current[i] = el }}
              className={isLarge ? 'feature-card-large' : undefined}
              style={{
                gridColumn: isLarge ? 'span 2' : 'span 1',
                display: isHidden ? 'none' : undefined,
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '24px',
                padding: isLarge ? 'clamp(36px, 4vw, 52px)' : 'clamp(28px, 3vw, 40px)',
                cursor: 'default',
                transition: 'border-color 0.3s, background 0.3s, transform 0.3s',
                opacity: 0,
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${f.accent}40`
                e.currentTarget.style.background = `color-mix(in srgb, ${f.accent} 4%, var(--surface))`
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'var(--surface)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '200px', height: '200px',
                background: `radial-gradient(circle at top right, ${f.accent}08, transparent 60%)`,
                pointerEvents: 'none',
              }} />
              <div style={{ marginBottom: '20px' }}>{f.icon}</div>
              <h3 style={{
                fontSize: isLarge ? 'clamp(22px, 2.5vw, 30px)' : 'clamp(18px, 2vw, 22px)',
                fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.025em', marginBottom: '10px'
              }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 'clamp(13px, 1.4vw, 15px)', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {f.body}
              </p>
            </div>
          )
        })}
      </div>

      {/* Mobile expand button */}
      {isMobile && !expanded && (
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <button
            onClick={handleExpand}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '980px',
              color: '#f5f5f7',
              fontFamily: 'var(--font)',
              fontSize: '14px',
              fontWeight: 500,
              padding: '12px 28px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            Show all {features.length} features
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 5l5 5 5-5" stroke="#f5f5f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .feature-card-large { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}
