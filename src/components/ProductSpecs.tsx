import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Model3D from './Model3D'

const specs = [
  { label: 'Material', value: 'Aircraft-grade 6061 aluminium', icon: '◈' },
  { label: 'Weight', value: '238g: lighter than your phone', icon: '◎' },
  { label: 'Compatibility', value: 'Any net post or top rail', icon: '◉' },
  { label: 'Phone fit', value: 'Universal: up to 75mm wide, 12 mm thick', icon: '◫' },
  /*{ label: 'Adjustment', value: '360° rotation, ±45° tilt', icon: '◬' },*/
  { label: 'Finish', value: 'Sandblasted + anodised', icon: '◪' },
]

export default function ProductSpecs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const specsRef = useRef<HTMLDivElement>(null)
  const modelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current || !specsRef.current || !modelRef.current) return

    gsap.fromTo(modelRef.current,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 1.1, ease: 'power4.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
    )
    gsap.fromTo(textRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 1.1, ease: 'power4.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
    )
    gsap.fromTo(specsRef.current.children,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.7, stagger: 0.07, ease: 'power3.out',
        scrollTrigger: { trigger: specsRef.current, start: 'top 75%' } }
    )
  }, [])

  return (
    <section ref={sectionRef} style={{
      background: '#000',
      padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', right: '-80px', top: '50%', transform: 'translateY(-50%)', width: '520px', height: '520px', borderRadius: '50%', background: 'rgba(0,113,227,0.2)', filter: 'blur(130px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: '-80px', bottom: '20%', width: '480px', height: '480px', borderRadius: '50%', background: 'rgba(0,113,227,0.16)', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(40px, 6vw, 80px)',
        maxWidth: '1200px',
        margin: '0 auto',
        alignItems: 'center',
      }}>
        {/* 3D Model */}
        <div ref={modelRef} style={{ opacity: 0, height: 'clamp(380px, 50vw, 560px)', position: 'relative' }}>
          <Model3D autoRotate={true} height="100%" enableOrbit />
          <div style={{
            position: 'absolute', bottom: '-16px', left: '50%', transform: 'translateX(-50%)',
            fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
            Drag to rotate
          </div>
        </div>

        {/* Specs */}
        <div ref={textRef} style={{ opacity: 0 }}>
          <p style={{ fontSize: '13px', color: '#0071e3', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
            The Product
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '16px' }}>
            Built to last.<br />
            <span style={{ color: 'var(--text-secondary)', fontWeight: 300 }}>Made to impress.</span>
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.6vw, 17px)', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '40px', fontWeight: 400 }}>
            Every millimetre is machined from solid aluminium. No plastic. No flex. No compromise. NetShot is engineered like the sport it was made for.
          </p>

          <div ref={specsRef} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {specs.map((spec, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                padding: '14px 0',
                borderBottom: i < specs.length - 1 ? '1px solid var(--border)' : 'none',
                opacity: 0,
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-tertiary)', fontWeight: 500, letterSpacing: '0.02em' }}>
                  <span style={{ color: '#0071e3', fontSize: '16px' }}>{spec.icon}</span>
                  {spec.label}
                </span>
                <span style={{ fontSize: '14px', color: '#f5f5f7', fontWeight: 500, textAlign: 'right', maxWidth: '55%' }}>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
