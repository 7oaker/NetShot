import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const headlineRef = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo(headlineRef.current?.children ?? [],
      { opacity: 0, y: 40, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1, stagger: 0.12, ease: 'power4.out' },
      '-=0.4'
    )
    .fromTo(subRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{
      minHeight: '100vh',
      background: '#000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 24px 40px',
    }}>
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          opacity: 0.45,
          filter: 'grayscale(20%) brightness(0.75)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <source src="/hero-tennis.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay — heavier at top and bottom so text pops */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.85) 100%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Subtle blue glow */}
      <div style={{
        position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(0,113,227,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />


      {/* Headline */}
      <div ref={headlineRef} style={{
        textAlign: 'center',
        zIndex: 2,
        position: 'relative',
        pointerEvents: 'none',
      }}>
        {['Play.', 'Capture.', 'Enjoy.'].map((word, i) => (
          <span key={i} style={{
            display: 'block',
            fontSize: 'clamp(56px, 10vw, 108px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            color: i === 1 ? '#0071e3' : '#f5f5f7',
            opacity: 0,
          }}>
            {word}
          </span>
        ))}
      </div>

      {/* Sub + CTA */}
      <div ref={subRef} style={{ textAlign: 'center', zIndex: 2, position: 'relative', opacity: 0, marginTop: '32px' }}>
        <p style={{
          fontSize: 'clamp(16px, 2vw, 19px)',
          color: 'var(--text-secondary)',
          fontWeight: 400,
          lineHeight: 1.5,
          maxWidth: '480px',
          margin: '0 auto',
        }}>
          Your game. Captured effortlessly.
          <br />
          The premium aluminium mount built for the net.
        </p>
      </div>

      <div ref={ctaRef} style={{ display: 'flex', gap: '12px', marginTop: '36px', zIndex: 2, position: 'relative', opacity: 0, flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={() => scrollTo('preorder')}
          style={{
            background: '#0071e3', border: 'none', cursor: 'pointer',
            color: '#fff', fontFamily: 'var(--font)',
            fontSize: '17px', fontWeight: 500,
            padding: '14px 32px', borderRadius: '980px',
            transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 0 40px rgba(0,113,227,0.35)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#0077ed'; e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(0,113,227,0.5)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#0071e3'; e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(0,113,227,0.35)' }}>
          Pre-order Now
        </button>
        <button
          onClick={() => scrollTo('how-it-works')}
          style={{
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', cursor: 'pointer',
            color: '#f5f5f7', fontFamily: 'var(--font)',
            fontSize: '17px', fontWeight: 500,
            padding: '14px 32px', borderRadius: '980px',
            transition: 'background 0.2s, transform 0.2s',
            backdropFilter: 'blur(8px)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.transform = 'scale(1.04)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'scale(1)' }}>
          See How It Works
        </button>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        zIndex: 2,
      }}>
        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }} />
        <style>{`
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.3; transform: scaleY(1); }
            50% { opacity: 1; transform: scaleY(1.2); }
          }
        `}</style>
      </div>
    </section>
  )
}
