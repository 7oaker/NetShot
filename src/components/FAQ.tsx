import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useLang } from '../i18n/LanguageContext'

export default function FAQ() {
  const { t } = useLang()
  const sectionRef = useRef<HTMLElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState<number | null>(null)

  useEffect(() => {
    gsap.fromTo(headRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 80%' } }
    )
    if (listRef.current) {
      gsap.fromTo(Array.from(listRef.current.children),
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: listRef.current, start: 'top 78%' } }
      )
    }
  }, [])

  return (
    <section
      id="faq"
      ref={sectionRef}
      aria-label="Frequently asked questions about NetShot tennis net phone mount"
      style={{
        background: 'var(--bg-2)',
        padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', left: '-80px', top: '50%', transform: 'translateY(-50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'rgba(0,113,227,0.18)', filter: 'blur(130px)', pointerEvents: 'none' }} />

      <div ref={headRef} style={{ textAlign: 'center', marginBottom: 'clamp(48px, 7vw, 72px)', opacity: 0 }}>
        <p style={{ fontSize: '13px', color: '#0071e3', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
          {t.faq.label}
        </p>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
          {t.faq.headline}
        </h2>
      </div>

      <div ref={listRef} style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0' }}>
        {t.faq.items.map((faq, i) => (
          <div
            key={i}
            style={{
              borderBottom: '1px solid var(--border)',
              opacity: 0,
            }}
          >
            <button
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                padding: 'clamp(18px, 2.5vw, 24px) 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font)',
                textAlign: 'left',
              }}
            >
              <h3 style={{
                fontSize: 'clamp(15px, 1.6vw, 17px)',
                fontWeight: 500,
                color: open === i ? 'var(--text)' : 'var(--text-faint)',
                letterSpacing: '-0.01em',
                margin: 0,
                lineHeight: 1.4,
              }}>
                {faq.q}
              </h3>
              <span style={{
                flexShrink: 0,
                width: '22px', height: '22px',
                borderRadius: '50%',
                border: '1px solid var(--border-medium)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                borderColor: open === i ? 'var(--accent)' : 'var(--border-medium)',
              }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 1v8M1 5h8" stroke={open === i ? 'var(--accent)' : 'var(--text)'} strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
            </button>
            {open === i && (
              <p style={{
                fontSize: 'clamp(14px, 1.5vw, 15px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                paddingBottom: 'clamp(16px, 2vw, 22px)',
                margin: 0,
              }}>
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
