import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Preorder() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
    )
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setSubmitted(true)
  }

  return (
    <section id="preorder" ref={sectionRef} style={{
      background: '#000',
      padding: 'clamp(100px, 15vw, 160px) clamp(24px, 6vw, 80px)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(0,113,227,0.15) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Subtle noise texture overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
        pointerEvents: 'none',
      }} />

      <div ref={contentRef} style={{ position: 'relative', zIndex: 1, opacity: 0 }}>
        {/* Eyebrow */}
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(0,113,227,0.15)',
          border: '1px solid rgba(0,113,227,0.25)',
          borderRadius: '980px', padding: '6px 16px',
          fontSize: '12px', fontWeight: 600, color: '#0071e3',
          letterSpacing: '0.08em', textTransform: 'uppercase',
          marginBottom: '32px',
        }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#0071e3', display: 'inline-block', boxShadow: '0 0 8px #0071e3' }} />
          Limited Early Access
        </span>

        {/* Headline */}
        <h2 style={{
          fontSize: 'clamp(44px, 8vw, 88px)',
          fontWeight: 800,
          color: '#f5f5f7',
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
          marginBottom: '24px',
        }}>
          Your game.<br />
          <span style={{ color: '#0071e3' }}>Captured effortlessly.</span>
        </h2>

        {/* Sub */}
        <p style={{
          fontSize: 'clamp(16px, 1.8vw, 20px)',
          color: 'var(--text-secondary)',
          maxWidth: '520px',
          margin: '0 auto 48px',
          lineHeight: 1.6,
          fontWeight: 400,
        }}>
          Be among the first to get NetShot. Join the waitlist and we'll notify you the moment pre-orders open.
        </p>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} style={{
            display: 'flex', gap: '10px', justifyContent: 'center',
            flexWrap: 'wrap', maxWidth: '480px', margin: '0 auto',
          }}>
            <div style={{ flex: '1 1 260px', position: 'relative' }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                required
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.06)',
                  border: `1px solid ${focused ? 'rgba(0,113,227,0.6)' : 'rgba(255,255,255,0.12)'}`,
                  borderRadius: '980px',
                  padding: '14px 22px',
                  color: '#f5f5f7',
                  fontFamily: 'var(--font)',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                  boxShadow: focused ? '0 0 0 3px rgba(0,113,227,0.15)' : 'none',
                  backdropFilter: 'blur(8px)',
                }}
              />
            </div>
            <button type="submit" style={{
              background: '#0071e3', border: 'none', cursor: 'pointer',
              color: '#fff', fontFamily: 'var(--font)',
              fontSize: '16px', fontWeight: 500,
              padding: '14px 28px', borderRadius: '980px',
              whiteSpace: 'nowrap',
              transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 0 32px rgba(0,113,227,0.4)',
              animation: 'shimmer 3s ease-in-out infinite',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#0077ed'; e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 48px rgba(0,113,227,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#0071e3'; e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(0,113,227,0.4)' }}>
              Join the Waitlist
            </button>
          </form>
        ) : (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            background: 'rgba(48,209,88,0.1)',
            border: '1px solid rgba(48,209,88,0.25)',
            borderRadius: '980px', padding: '14px 28px',
            color: '#30d158', fontSize: '16px', fontWeight: 500,
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="9" stroke="#30d158" strokeWidth="1.5"/>
              <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#30d158" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            You're on the list. We'll be in touch.
          </div>
        )}

        {/* Trust note */}
        <p style={{ marginTop: '20px', fontSize: '13px', color: 'var(--text-tertiary)' }}>
          No spam. No sharing. Unsubscribe any time.
        </p>

        {/* Stats row */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 'clamp(32px, 6vw, 72px)',
          marginTop: 'clamp(56px, 8vw, 80px)', flexWrap: 'wrap',
        }}>
          {[
            { value: '6061', label: 'Aluminium grade' },
            { value: '142g', label: 'Total weight' },
            { value: '< 5s', label: 'Mount time' },
            { value: '∞', label: 'Potential' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em' }}>
                {s.value}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginTop: '4px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%, 100% { box-shadow: 0 0 32px rgba(0,113,227,0.4); }
          50% { box-shadow: 0 0 52px rgba(0,113,227,0.65); }
        }
      `}</style>
    </section>
  )
}
