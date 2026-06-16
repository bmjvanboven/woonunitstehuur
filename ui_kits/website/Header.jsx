// Site header — logo, nav, phone + CTA. Collapses to a hamburger menu on mobile. Exports window.WUHeader
function WUHeader({ onNav, current }) {
  const { Button, IconButton } = window.WoonunitstehuurDesignSystem_c98620;
  const I = window.WUIcons;
  const isMobile = window.useIsMobile(860);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { if (!isMobile) setOpen(false); }, [isMobile]);

  const nav = [
    { key: 'home', label: 'Home' },
    { key: 'aanbod', label: 'Aanbod' },
    { key: 'werkwijze', label: 'Werkwijze' },
    { key: 'contact', label: 'Contact' },
  ];
  const go = (k) => { setOpen(false); onNav(k); };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.86)', backdropFilter: 'saturate(160%) blur(12px)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 20px', height: isMobile ? 64 : 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <a onClick={() => go('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <img src="../../assets/logo-horizontal.png" alt="Woonunitstehuur.nl" style={{ height: isMobile ? 32 : 40, width: 'auto', display: 'block' }} />
        </a>

        {!isMobile && (
          <React.Fragment>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {nav.map((n) => (
                <a key={n.key} onClick={() => go(n.key)} style={{
                  cursor: 'pointer', padding: '8px 14px', borderRadius: 'var(--radius-pill)',
                  fontSize: 15, fontWeight: 600,
                  color: current === n.key ? 'var(--gold-700)' : 'var(--text-body)',
                  background: current === n.key ? 'var(--gold-50)' : 'transparent',
                }}>{n.label}</a>
              ))}
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <a href="tel:+31000000000" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 15, color: 'var(--text-strong)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                <I.Phone size={17} style={{ color: 'var(--gold-600)', flex: 'none' }} /> 085 — 902 6800
              </a>
              <Button variant="primary" size="sm" onClick={() => go('contact')}>Vraag offerte aan</Button>
            </div>
          </React.Fragment>
        )}

        {isMobile && (
          <IconButton label={open ? 'Sluit menu' : 'Open menu'} variant="outline" onClick={() => setOpen((v) => !v)}>
            {open ? <I.Arrow size={20} style={{ transform: 'rotate(-90deg)' }} /> : <I.Menu size={20} />}
          </IconButton>
        )}
      </div>

      {/* Mobile dropdown */}
      {isMobile && open && (
        <div style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-card)', boxShadow: 'var(--shadow-lg)' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', padding: '8px 16px 16px' }}>
            {nav.map((n) => (
              <a key={n.key} onClick={() => go(n.key)} style={{
                cursor: 'pointer', padding: '14px 12px', borderRadius: 'var(--radius-md)',
                fontSize: 17, fontWeight: 600, borderBottom: '1px solid var(--border-subtle)',
                color: current === n.key ? 'var(--gold-700)' : 'var(--text-strong)',
              }}>{n.label}</a>
            ))}
            <a href="tel:+31000000000" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 12px', fontWeight: 700, fontSize: 16, color: 'var(--text-strong)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              <I.Phone size={18} style={{ color: 'var(--gold-600)', flex: 'none' }} /> 085 — 902 6800
            </a>
            <div style={{ paddingTop: 6 }}>
              <Button variant="primary" size="lg" fullWidth onClick={() => go('contact')}>Vraag offerte aan</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
window.WUHeader = WUHeader;
