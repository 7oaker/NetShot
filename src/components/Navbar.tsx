import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import logoIcon from '../assets/logo/favicon/favicon-96x96.png'
import { useLang } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/translations'

export default function Navbar() {
  const { lang, t, setLang } = useLang()
  const navRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks: [string, string][] = [
    [t.nav.howItWorks, 'how-it-works'],
    [t.nav.theApp, 'app'],
    [t.nav.sports, 'sports'],
  ]

  useEffect(() => {
    gsap.fromTo(navRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' })

    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Focus first item when menu opens
  useEffect(() => {
    if (menuOpen && menuRef.current) {
      const first = menuRef.current.querySelector<HTMLElement>('button, a')
      first?.focus()
    }
  }, [menuOpen])

  // Focus trap for mobile menu
  const handleMenuKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!menuRef.current) return
    if (e.key === 'Escape') {
      setMenuOpen(false)
      menuBtnRef.current?.focus()
      return
    }
    if (e.key !== 'Tab') return
    const focusable = Array.from(
      menuRef.current.querySelectorAll<HTMLElement>('button, a, [tabindex]:not([tabindex="-1"])')
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  // When not scrolled the nav is over the dark hero video — always use light/white colors.
  // When scrolled the nav has a themed background — use theme-adaptive vars.
  const textColor = scrolled ? 'var(--text)' : '#f5f5f7'
  const textMuted = scrolled ? 'var(--text-muted)' : 'rgba(245,245,247,0.7)'
  const iconStroke = scrolled ? 'var(--text)' : '#f5f5f7'
  const menuBtnBorder = scrolled ? 'var(--overlay-strong)' : 'rgba(255,255,255,0.2)'

  return (
    <>
      <nav ref={navRef} style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: '0 24px',
        height: '52px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
      }}>
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: textColor, fontFamily: 'var(--font)',
          fontSize: '17px', fontWeight: 700, letterSpacing: '-0.02em',
          display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: '26px', height: '26px', borderRadius: '6px',
            background: '#fff', flexShrink: 0,
          }}>
            <img src={logoIcon} alt="NetShot" style={{ width: '18px', height: '18px' }} />
          </span>
          NetShot
        </button>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {navLinks.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: textMuted, fontFamily: 'var(--font)',
              fontSize: '13px', fontWeight: 400,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = textColor)}
            onMouseLeave={e => (e.currentTarget.style.color = textMuted)}>
              {label}
            </button>
          ))}

          {/* Language toggle */}
          <LangToggle lang={lang} setLang={setLang} light={!scrolled} />

          <button onClick={() => scrollTo('order')} style={{
            background: '#0071e3', border: 'none', cursor: 'pointer',
            color: '#fff', fontFamily: 'var(--font)',
            fontSize: '13px', fontWeight: 500,
            padding: '7px 16px', borderRadius: '980px',
            transition: 'background 0.2s, transform 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#0077ed'; e.currentTarget.style.transform = 'scale(1.03)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#0071e3'; e.currentTarget.style.transform = 'scale(1)' }}>
            {t.nav.getYours}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="nav-mobile" style={{ display: 'none', alignItems: 'center', gap: '10px' }}>
          <button onClick={() => scrollTo('order')} style={{
            background: '#0071e3', border: 'none', cursor: 'pointer',
            color: '#fff', fontFamily: 'var(--font)',
            fontSize: '13px', fontWeight: 500,
            padding: '7px 14px', borderRadius: '980px',
          }}>
            {t.nav.getYours}
          </button>
          <button
            ref={menuBtnRef}
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            style={{
              background: 'none',
              border: `1px solid ${menuBtnBorder}`,
              borderRadius: '8px', cursor: 'pointer',
              color: textColor, width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 0,
            }}
          >
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2l12 12M14 2L2 14" stroke={iconStroke} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12M2 8h12M2 12h12" stroke={iconStroke} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown — always has its own themed background */}
      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-label="Navigation menu"
          onKeyDown={handleMenuKeyDown}
          style={{
            position: 'fixed',
            top: '52px', left: 0, right: 0,
            zIndex: 999,
            background: 'var(--menu-bg)',
            backdropFilter: 'saturate(180%) blur(20px)',
            WebkitBackdropFilter: 'saturate(180%) blur(20px)',
            borderBottom: '1px solid var(--border)',
            padding: '8px 24px 20px',
            display: 'flex',
            flexDirection: 'column',
          }}>
          {navLinks.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: 'none', border: 'none',
              borderBottom: '1px solid var(--border-subtle)',
              cursor: 'pointer',
              color: 'var(--text-faint)', fontFamily: 'var(--font)',
              fontSize: '17px', fontWeight: 400,
              padding: '16px 0',
              textAlign: 'left',
            }}>
              {label}
            </button>
          ))}
          <div style={{ paddingTop: '12px' }}>
            <LangToggle lang={lang} setLang={setLang} light={false} />
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}

function LangToggle({ lang, setLang, light }: { lang: Lang; setLang: (l: Lang) => void; light: boolean }) {
  // light=true: on transparent/dark background, always use white tones
  // light=false: on themed background, use CSS variable tokens
  const bgOuter = light ? 'rgba(255,255,255,0.12)' : 'var(--overlay-light)'
  const borderOuter = light ? '1px solid rgba(255,255,255,0.2)' : '1px solid var(--border)'
  const bgActive = light ? 'rgba(255,255,255,0.22)' : 'var(--overlay-strong)'
  const colorActive = light ? '#f5f5f7' : 'var(--text)'
  const colorInactive = light ? 'rgba(255,255,255,0.5)' : 'var(--text-ghost)'

  return (
    <div style={{
      display: 'flex', alignItems: 'center',
      background: bgOuter,
      border: borderOuter,
      borderRadius: '980px',
      padding: '3px',
      gap: '2px',
    }}>
      {(['en', 'de'] as Lang[]).map(l => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            background: lang === l ? bgActive : 'none',
            border: 'none', cursor: 'pointer',
            color: lang === l ? colorActive : colorInactive,
            fontFamily: 'var(--font)',
            fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.04em',
            padding: '3px 8px', borderRadius: '980px',
            transition: 'background 0.2s, color 0.2s',
            textTransform: 'uppercase',
          }}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
