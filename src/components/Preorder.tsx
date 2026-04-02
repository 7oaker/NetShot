import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import amazonBlackIcon from '../assets/logo/amazon/black/icons8-amazon-100.png'
import Model3D from './Model3D'

const stats = [
  { value: '6061', label: 'Aluminium' },
  { value: '238g', label: 'Weight' },
  { value: '<5s', label: 'Mount time' },
  { value: '∞', label: 'Potential' },
]

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
          color: '#f5f5f7',
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
          marginBottom: '16px',
        }}>
          Your game.<br />
          <span style={{ color: '#0071e3' }}>Captured effortlessly.</span>
        </h2>
        <p style={{
          fontSize: 'clamp(15px, 1.6vw, 18px)',
          color: 'var(--text-secondary)',
          maxWidth: '480px',
          margin: '0 auto clamp(36px, 6vw, 56px)',
          lineHeight: 1.6,
        }}>
          Get the mount now or join the waitlist for the NetShot app.
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
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            padding: 'clamp(24px, 3vw, 36px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            overflow: 'hidden',
          }}>
            {/* Badge + title + desc */}
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
                Available Now
              </span>
              <div style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em', marginBottom: '8px' }}>
                Get Yours
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Built from aerospace-grade aluminium. Mounts to any tennis net post in seconds.
              </div>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
            }}>
              {stats.map((s) => (
                <div key={s.label} style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  padding: '12px 8px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: 'clamp(16px, 2vw, 22px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '3px' }}>
                    {s.label}
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
            <a
              href="https://www.amazon.com/dp/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="amazon-btn"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '9px',
                background: '#ff9900',
                borderRadius: '980px',
                padding: '13px 24px',
                color: '#000', fontFamily: 'var(--font)',
                fontSize: '15px', fontWeight: 600,
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 0 24px rgba(255,153,0,0.3)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#ffaa1a'; e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 36px rgba(255,153,0,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#ff9900'; e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(255,153,0,0.3)' }}
            >
              <img src={amazonBlackIcon} alt="Amazon" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
              Buy on Amazon
            </a>
          </div>

          {/* ── App Waitlist ── */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
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
                Coming Soon
              </span>
              <div style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em', marginBottom: '12px' }}>
                The App
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                AI highlights, training review, and autopilot recording — all in one place. Join the waitlist and be first to know when it drops.
              </p>
            </div>

            {/* Feature list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'AI Highlights', desc: 'Auto-clipped rallies & winners', color: '#0071e3' },
                { label: 'Training Mode', desc: 'Frame-by-frame review & coach share', color: '#30d158' },
                { label: 'Autopilot', desc: 'Smart recording, saves battery', color: '#ff9f0a' },
              ].map(f => (
                <div key={f.label} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '10px',
                  padding: '12px 14px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '12px',
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: f.color, flexShrink: 0, marginTop: '5px', boxShadow: `0 0 8px ${f.color}80` }} />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#f5f5f7', marginBottom: '2px' }}>{f.label}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Email form */}
            {!submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <form onSubmit={handleSubmit} className="notify-form" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    required
                    style={{
                      flex: 1,
                      background: 'rgba(255,255,255,0.06)',
                      border: `1px solid ${focused ? 'rgba(0,113,227,0.6)' : 'rgba(255,255,255,0.12)'}`,
                      borderRadius: '980px',
                      padding: '12px 18px',
                      color: '#f5f5f7',
                      fontFamily: 'var(--font)',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.25s, box-shadow 0.25s',
                      boxShadow: focused ? '0 0 0 3px rgba(0,113,227,0.15)' : 'none',
                    }}
                  />
                  <button type="submit" style={{
                    background: '#0071e3', border: 'none', cursor: 'pointer',
                    color: '#fff', fontFamily: 'var(--font)',
                    fontSize: '14px', fontWeight: 500,
                    padding: '12px 20px', borderRadius: '980px',
                    whiteSpace: 'nowrap',
                    transition: 'background 0.2s, transform 0.2s',
                    boxShadow: '0 0 24px rgba(0,113,227,0.35)',
                    width: '100%',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#0077ed'; e.currentTarget.style.transform = 'scale(1.03)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#0071e3'; e.currentTarget.style.transform = 'scale(1)' }}>
                    Notify Me
                  </button>
                </form>
                <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-tertiary)', paddingLeft: '4px' }}>
                  No spam. Unsubscribe any time.
                </p>
              </div>
            ) : (
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                background: 'rgba(48,209,88,0.1)',
                border: '1px solid rgba(48,209,88,0.25)',
                borderRadius: '980px', padding: '12px 20px',
                color: '#30d158', fontSize: '14px', fontWeight: 500,
              }}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="#30d158" strokeWidth="1.5"/>
                  <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#30d158" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                You're on the list!
              </div>
            )}
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
