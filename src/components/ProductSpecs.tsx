import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Model3D from './Model3D'
import { useLang } from '../i18n/LanguageContext'

const specIcons = ['◈', '◎', '◉', '◫', '◪']

export default function ProductSpecs() {
  const { t } = useLang()
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
      background: 'var(--bg)',
      paddingTop: 'clamp(120px, 16vw, 180px)',
      paddingBottom: 'clamp(40px, 6vw, 80px)',
      paddingLeft: 'clamp(24px, 6vw, 80px)',
      paddingRight: 'clamp(24px, 6vw, 80px)',
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
            {t.productSpecs.dragToRotate}
          </div>
        </div>

        {/* Specs */}
        <div ref={textRef} style={{ opacity: 0 }}>
          <p style={{ fontSize: '13px', color: '#0071e3', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
            {t.productSpecs.label}
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '16px' }}>
            {t.productSpecs.headline}<br />
            <span style={{ color: 'var(--text-secondary)', fontWeight: 300 }}>{t.productSpecs.subheadline}</span>
          </h2>
          <p style={{ fontSize: 'clamp(15px, 1.6vw, 17px)', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '40px', fontWeight: 400 }}>
            {t.productSpecs.description}
          </p>

          <div ref={specsRef} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {t.productSpecs.specs.map((spec, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                padding: '14px 0',
                borderBottom: i < t.productSpecs.specs.length - 1 ? '1px solid var(--border)' : 'none',
                opacity: 0,
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--text-tertiary)', fontWeight: 500, letterSpacing: '0.02em' }}>
                  <span style={{ color: '#0071e3', fontSize: '16px' }}>{specIcons[i]}</span>
                  {spec.label}
                </span>
                <span style={{ fontSize: '14px', color: 'var(--text)', fontWeight: 500, textAlign: 'right', maxWidth: '55%' }}>
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
