import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const steps = [
  {
    number: '01',
    title: 'Mount',
    headline: 'On the net in seconds.',
    description: 'The precision-machined aluminium clamp slides onto any standard net post or top rail. No tools. No setup hassle.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="14" width="20" height="4" rx="2" stroke="#0071e3" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="3" fill="#0071e3"/>
        <path d="M16 6v4M16 22v4M6 16H2M30 16h-4" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Clip',
    headline: 'Your phone. Perfectly positioned.',
    description: 'The universal spring-loaded cradle holds any smartphone up to 90mm wide. Portrait or landscape — your call.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="10" y="4" width="12" height="20" rx="3" stroke="#0071e3" strokeWidth="1.5"/>
        <circle cx="16" cy="20" r="1.5" fill="#0071e3"/>
        <path d="M8 10h-2a2 2 0 00-2 2v8a2 2 0 002 2h2M24 10h2a2 2 0 012 2v8a2 2 0 01-2 2h-2" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Play',
    headline: 'The app takes over.',
    description: 'Open the NetShot app, start recording. AI detects rallies, highlights, and key moments — automatically.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="#0071e3" strokeWidth="1.5"/>
        <path d="M13 11.5l8 4.5-8 4.5V11.5z" fill="#0071e3"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Review',
    headline: 'Watch yourself improve.',
    description: 'Every session. Every rally. Automatically organised, clipped and ready to watch. Share with your coach or keep it for yourself.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 8h24M4 16h16M4 24h20" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="26" cy="22" r="4" stroke="#0071e3" strokeWidth="1.5"/>
        <path d="M29 25l2.5 2.5" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
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
    <section id="how-it-works" ref={sectionRef} style={{
      background: 'radial-gradient(ellipse 100% 120% at 110% 50%, rgba(0,113,227,0.18) 0%, transparent 55%), #0a0a0a',
      padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '10%', left: '-10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,113,227,0.16) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      {/* Header */}
      <div ref={headRef} style={{ textAlign: 'center', marginBottom: 'clamp(56px, 8vw, 80px)', opacity: 0 }}>
        <p style={{ fontSize: '13px', color: '#0071e3', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
          How It Works
        </p>
        <h2 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          Simple by design.<br />
          <span style={{ color: 'var(--text-secondary)', fontWeight: 300 }}>Powerful by nature.</span>
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
        {steps.map((step, i) => (
          <div key={i} className={i < steps.length - 1 ? 'how-step how-step-sep' : 'how-step'} style={{
            padding: 'clamp(32px, 4vw, 48px) clamp(24px, 3vw, 36px)',
            background: 'var(--surface)',
            borderRight: i < steps.length - 1 ? '1px solid var(--border)' : 'none',
            cursor: 'default',
            transition: 'background 0.3s',
            position: 'relative',
            opacity: 0,
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#232325'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--surface)'}
          >
            <div style={{ marginBottom: '24px' }}>{step.icon}</div>
            <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '10px' }}>
              {step.number}
            </div>
            <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.02em', marginBottom: '10px' }}>
              {step.headline}
            </h3>
            <p style={{ fontSize: 'clamp(13px, 1.4vw, 15px)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
      <style>{`
        @media (max-width: 640px) {
          .how-steps { grid-template-columns: 1fr !important; }
          .how-step-sep { border-right: none !important; border-bottom: 1px solid var(--border); }
        }
      `}</style>
    </section>
  )
}
