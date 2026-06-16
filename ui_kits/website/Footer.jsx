// Site footer — dark, reversed logo, columns, contact. Exports window.WUFooter
function WUFooter({ onNav }) {
  const I = window.WUIcons;
  const col = (title, items) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-400)' }}>{title}</div>
      {items.map((it, i) => (
        <a key={i} onClick={it.k ? () => onNav(it.k) : undefined} style={{ fontSize: 15, color: 'rgba(255,255,255,0.72)', textDecoration: 'none', cursor: it.k ? 'pointer' : 'default' }}>{it.t}</a>
      ))}
    </div>
  );
  return (
    <footer style={{ background: 'var(--ink-800)', color: '#fff' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 24px 40px', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr', gap: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 320 }}>
          <img src="../../assets/logo-horizontal-white.png" alt="Woonunitstehuur.nl" style={{ height: 44, width: 'auto', alignSelf: 'flex-start' }} />
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.66)' }}>
            Dé oplossing voor comfortabel tijdelijk wonen tijdens uw verbouwing of nieuwbouw. Volledig ingericht en op eigen terrein.
          </p>
        </div>
        {col('Units', [{ t: 'Comfort Unit 30', k: 'aanbod' }, { t: 'Gezins Unit 42', k: 'aanbod' }, { t: 'Familie Unit XL', k: 'aanbod' }, { t: 'Volledig aanbod', k: 'aanbod' }])}
        {col('Bedrijf', [{ t: 'Over ons' }, { t: 'Werkwijze', k: 'werkwijze' }, { t: 'Veelgestelde vragen' }, { t: 'Contact', k: 'contact' }])}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-400)' }}>Contact</div>
          <a href="tel:+31859026800" style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'rgba(255,255,255,0.82)', textDecoration: 'none' }}><I.Phone size={17} style={{ color: 'var(--gold-400)' }} /> 085 — 902 6800</a>
          <a href="mailto:info@woonunitstehuur.nl" style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'rgba(255,255,255,0.82)', textDecoration: 'none' }}><I.Mail size={17} style={{ color: 'var(--gold-400)' }} /> info@woonunitstehuur.nl</a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'rgba(255,255,255,0.82)' }}><I.MapPin size={17} style={{ color: 'var(--gold-400)' }} /> Heel Nederland</div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 13.5, color: 'rgba(255,255,255,0.5)' }}>
          <span>© 2026 Woonunitstehuur.nl — Comfortabel tijdelijk wonen</span>
          <span style={{ display: 'flex', gap: 20 }}><a style={{ color: 'inherit', textDecoration: 'none' }}>Privacybeleid</a><a style={{ color: 'inherit', textDecoration: 'none' }}>Cookiebeleid</a><a style={{ color: 'inherit', textDecoration: 'none' }}>Algemene voorwaarden</a></span>
        </div>
      </div>
    </footer>
  );
}
window.WUFooter = WUFooter;
