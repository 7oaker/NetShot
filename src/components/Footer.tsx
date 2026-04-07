import { useLang } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '40px clamp(24px, 6vw, 80px)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
      }}>
        {/* Logo */}
        <div>
          <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: '4px' }}>
            NetShot
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
            {t.footer.tagline}
          </div>
        </div>

        {/* Links */}
        <nav aria-label="Footer navigation">
          <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
            {t.footer.links.map(({ label, href }) => (
              <a key={label} href={href} style={{
                fontSize: '13px',
                color: 'var(--text-tertiary)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-tertiary)'}>
                {label}
              </a>
            ))}
          </div>
        </nav>

        {/* Legal */}
        <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span>{t.footer.rights(new Date().getFullYear())}</span>
          <a
            href="/impressum.html"
            style={{
              color: 'var(--text-tertiary)',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-tertiary)'}
          >
            Impressum
          </a>
          <a
            href="/datenschutz.html"
            style={{
              color: 'var(--text-tertiary)',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-tertiary)'}
          >
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  )
}
