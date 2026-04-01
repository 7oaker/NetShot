import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Model3D from './Model3D'

export default function ProductHero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const modelRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(modelRef.current,
      { opacity: 0, y: 60, scale: 0.94 },
      { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: 'power4.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
    )
    gsap.fromTo(labelRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
    )
  }, [])

  return (
    <section ref={sectionRef} style={{
      background: '#000',
      padding: 'clamp(60px, 10vw, 100px) 24px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      {/* Label */}
      <div ref={labelRef} style={{ textAlign: 'center', marginBottom: '16px', opacity: 0 }}>
        <p style={{
          fontSize: '13px', color: '#0071e3', fontWeight: 600,
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>
          NetShot — Premium Aluminium Mount
        </p>
      </div>

      {/* Big centered model */}
      <div ref={modelRef} style={{
        width: 'min(720px, 92vw)',
        height: 'clamp(380px, 55vw, 600px)',
        opacity: 0,
        position: 'relative',
      }}>
        <Model3D autoRotate height="100%" enableOrbit />

      </div>
    </section>
  )
}
