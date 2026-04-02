import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const phrases = [
  { label: 'Mount it.', sub: 'Clips to any net in seconds.' },
  { label: 'Record it.', sub: 'Automatically captures every rally.' },
  { label: 'Own it.', sub: 'Review, highlight, and share your game.' },
]

export default function Tagline() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardsRef.current) return
    const cards = cardsRef.current.children
    gsap.fromTo(cards,
      { opacity: 0, y: 60, filter: 'blur(6px)' },
      {
        opacity: 1, y: 0, filter: 'blur(0px)',
        duration: 0.9, stagger: 0.2, ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} style={{
      background: '#000',
      padding: 'clamp(80px, 12vw, 140px) 24px',
      textAlign: 'center',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{ position: 'absolute', left: '-80px', top: '50%', transform: 'translateY(-50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(0,113,227,0.2)', filter: 'blur(130px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: '-80px', top: '50%', transform: 'translateY(-50%)', width: '480px', height: '480px', borderRadius: '50%', background: 'rgba(0,113,227,0.18)', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <p style={{
        fontSize: 'clamp(11px, 1.2vw, 13px)',
        color: 'var(--text-tertiary)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: '56px',
        fontWeight: 500,
      }}>
        Three steps. Zero friction.
      </p>

      <div ref={cardsRef} style={{
        display: 'flex',
        gap: 'clamp(16px, 3vw, 40px)',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {phrases.map((p, i) => (
          <div key={i} style={{
            flex: '1 1 220px',
            maxWidth: '260px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px',
            padding: 'clamp(28px, 4vw, 40px) clamp(20px, 3vw, 32px)',
            cursor: 'default',
            transition: 'border-color 0.3s, background 0.3s, transform 0.3s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(0,113,227,0.4)'
            e.currentTarget.style.background = 'rgba(0,113,227,0.05)'
            e.currentTarget.style.transform = 'translateY(-6px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
            e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}>
            <div style={{
              fontSize: 'clamp(11px, 1.2vw, 13px)',
              color: '#0071e3',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <div style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: '#f5f5f7',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              marginBottom: '14px',
            }}>
              {p.label}
            </div>
            <div style={{
              fontSize: 'clamp(13px, 1.4vw, 15px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.55,
              fontWeight: 400,
            }}>
              {p.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
