import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const navLinks: [string, string][] = [
  ['How it Works', 'how-it-works'],
  ['The App', 'app'],
  ['Sports', 'sports'],
]

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(navRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' })

    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

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
        background: scrolled ? 'rgba(0,0,0,0.72)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
      }}>
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#f5f5f7', fontFamily: 'var(--font)',
          fontSize: '17px', fontWeight: 700, letterSpacing: '-0.02em',
        }}>
          NetShot
        </button>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {navLinks.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'rgba(245,245,247,0.7)', fontFamily: 'var(--font)',
              fontSize: '13px', fontWeight: 400,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f5f5f7')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,245,247,0.7)')}>
              {label}
            </button>
          ))}
          <button onClick={() => scrollTo('preorder')} style={{
            background: '#0071e3', border: 'none', cursor: 'pointer',
            color: '#fff', fontFamily: 'var(--font)',
            fontSize: '13px', fontWeight: 500,
            padding: '7px 16px', borderRadius: '980px',
            transition: 'background 0.2s, transform 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#0077ed'; e.currentTarget.style.transform = 'scale(1.03)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#0071e3'; e.currentTarget.style.transform = 'scale(1)' }}>
            Pre-order
          </button>
        </div>

        {/* Mobile controls */}
        <div className="nav-mobile" style={{ display: 'none', alignItems: 'center', gap: '10px' }}>
          <button onClick={() => scrollTo('preorder')} style={{
            background: '#0071e3', border: 'none', cursor: 'pointer',
            color: '#fff', fontFamily: 'var(--font)',
            fontSize: '13px', fontWeight: 500,
            padding: '7px 14px', borderRadius: '980px',
          }}>
            Pre-order
          </button>
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '8px', cursor: 'pointer',
              color: '#f5f5f7', width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 0,
            }}
          >
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2l12 12M14 2L2 14" stroke="#f5f5f7" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12M2 8h12M2 12h12" stroke="#f5f5f7" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '52px', left: 0, right: 0,
          zIndex: 999,
          background: 'rgba(0,0,0,0.96)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '8px 24px 20px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {navLinks.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: 'none', border: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              cursor: 'pointer',
              color: 'rgba(245,245,247,0.8)', fontFamily: 'var(--font)',
              fontSize: '17px', fontWeight: 400,
              padding: '16px 0',
              textAlign: 'left',
            }}>
              {label}
            </button>
          ))}
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
