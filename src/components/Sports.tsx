import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Tennis images
import t1 from '../assets/tennis/pexels-bossistudio-7613507.jpg'
import t2 from '../assets/tennis/pexels-rdne-8224402.jpg'
import t3 from '../assets/tennis/pexels-roman-odintsov-8542725.jpg'
import t4 from '../assets/tennis/pexels-sebastian-angarita-188980555-11915638.jpg'
import t5 from '../assets/tennis/pexels-sebastian-angarita-188980555-16639179.jpg'
import t6 from '../assets/tennis/pexels-gasparzaldo-13464791.jpg'

// Padel images
import p1 from '../assets/padel/pexels-anhelina-vasylyk-734724285-35248393.jpg'
import p2 from '../assets/padel/pexels-cristian-camilo-estrada-2152272341-35261961.jpg'
import p3 from '../assets/padel/pexels-gun-gun-gunawan-2155120716-36227708.jpg'
import p4 from '../assets/padel/pexels-roger-aribau-gisbert-19420784-15612082.jpg'

const sports = [
  {
    id: 'tennis',
    name: 'Tennis',
    available: true,
    tagline: 'Every rally. Every ace. Captured.',
    description: 'NetShot mounts to the net post and captures your entire baseline game. Perfect angle. Perfect framing. Train smarter, win more.',
    stat1: { value: '180°', label: 'Coverage Arc' },
    stat2: { value: '4K', label: 'Max Recording' },
    stat3: { value: '< 5s', label: 'Setup Time' },
    emoji: '🎾',
    color: '#30d158',
    images: [t1, t2, t3, t4, t5, t6],
  },
  {
    id: 'padel',
    name: 'Padel',
    available: false,
    tagline: 'Coming to the glass court.',
    description: 'NetShot for Padel is in development. The unique glass-wall court makes for incredible footage — we\'re engineering the perfect mount for it.',
    stat1: { value: 'Coming', label: 'Soon' },
    stat2: { value: 'Padel', label: 'Optimised' },
    stat3: { value: '—', label: '' },
    emoji: '🏓',
    color: '#0071e3',
    images: [p1, p2, p3, p4],
  },
]

export default function Sports() {
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

  const sport = sports[active]

  return (
    <section id="sports" ref={sectionRef} style={{
      background: 'radial-gradient(ellipse 100% 120% at -10% 40%, rgba(0,113,227,0.18) 0%, transparent 55%), #0a0a0a',
      padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', bottom: '0%', right: '10%',
        width: '500px', height: '400px',
        background: 'radial-gradient(circle, rgba(0,113,227,0.16) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      {/* Header */}
      <div ref={headRef} style={{ textAlign: 'center', marginBottom: 'clamp(48px, 7vw, 64px)', opacity: 0 }}>
        <p style={{ fontSize: '13px', color: '#0071e3', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
          Sports
        </p>
        <h2 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          Built for the net.<br />
          <span style={{ color: 'var(--text-secondary)', fontWeight: 300 }}>Made for the moments.</span>
        </h2>
      </div>

      {/* Sport tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
        {sports.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              background: active === i ? 'rgba(255,255,255,0.08)' : 'transparent',
              border: `1px solid ${active === i ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)'}`,
              color: active === i ? '#f5f5f7' : 'var(--text-tertiary)',
              fontFamily: 'var(--font)', fontSize: '15px', fontWeight: 500,
              padding: '10px 22px', borderRadius: '980px', cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}>
            <span>{s.emoji}</span>
            {s.name}
            {!s.available && (
              <span style={{
                fontSize: '10px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
                background: 'rgba(255,159,10,0.2)', color: '#ff9f0a',
                padding: '2px 7px', borderRadius: '4px',
              }}>
                Soon
              </span>
            )}
          </button>
        ))}
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
          border: `1px solid ${sport.color}25`,
          borderRadius: '24px',
          padding: 'clamp(32px, 4vw, 48px)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.4s ease',
        }}>
          <div style={{
            position: 'absolute', top: '-40%', right: '-20%',
            width: '300px', height: '300px',
            background: `radial-gradient(circle, ${sport.color}10 0%, transparent 60%)`,
            pointerEvents: 'none',
            transition: 'background 0.5s ease',
          }} />

          {!sport.available && (
            <div style={{
              position: 'absolute', top: '20px', right: '20px',
              background: 'rgba(255,159,10,0.15)',
              border: '1px solid rgba(255,159,10,0.3)',
              color: '#ff9f0a',
              fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '5px 12px', borderRadius: '980px',
            }}>
              Coming Soon
            </div>
          )}

          <div style={{ fontSize: '40px', marginBottom: '16px' }}>{sport.emoji}</div>

          <h3 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em', marginBottom: '12px' }}>
            {sport.tagline}
          </h3>
          <p style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '32px' }}>
            {sport.description}
          </p>

          <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', marginBottom: sport.available ? '32px' : '0' }}>
            {[sport.stat1, sport.stat2].filter(s => s.value !== '—').map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 700, color: sport.available ? '#f5f5f7' : 'var(--text-tertiary)', letterSpacing: '-0.03em' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '3px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {sport.available && (
            <button
              onClick={() => document.getElementById('preorder')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: sport.color, border: 'none', cursor: 'pointer',
                color: '#fff', fontFamily: 'var(--font)',
                fontSize: '15px', fontWeight: 500,
                padding: '12px 26px', borderRadius: '980px',
                transition: 'transform 0.2s, opacity 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.opacity = '0.9' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1' }}>
              Pre-order Now →
            </button>
          )}
        </div>

        {/* Right: image grid */}
        <div ref={gridRef} className="sports-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(3, 180px)',
          gap: '8px',
        }}>
          {sport.images.map((src, i) => (
            <div key={i} style={{
              borderRadius: '14px',
              overflow: 'hidden',
              gridColumn: i === 0 ? 'span 2' : 'span 1',
              gridRow: i === 0 ? 'span 1' : 'span 1',
            }}>
              <img
                src={src}
                alt=""
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                  filter: !sport.available ? 'grayscale(60%) brightness(0.7)' : 'brightness(0.9)',
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
