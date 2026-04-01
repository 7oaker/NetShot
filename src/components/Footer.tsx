export default function Footer() {
  return (
    <footer style={{
      background: '#000',
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
          <div style={{ fontSize: '18px', fontWeight: 700, color: '#f5f5f7', letterSpacing: '-0.02em', marginBottom: '4px' }}>
            NetShot
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
            Capture your game.
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
          {['Tennis', 'Padel', 'Volleyball', 'The App', 'Contact'].map((link) => (
            <a key={link} href="#" style={{
              fontSize: '13px',
              color: 'var(--text-tertiary)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#f5f5f7'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-tertiary)'}>
              {link}
            </a>
          ))}
        </div>

        {/* Legal */}
        <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
          © {new Date().getFullYear()} NetShot. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
