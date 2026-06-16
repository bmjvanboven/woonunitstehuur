// Unit detail screen — gallery, specs, inline request form. Exports window.WUUnit
function WUUnit({ onNav }) {
  const NS = window.WoonunitstehuurDesignSystem_c98620;
  const { Button, Badge, Input, Select, SpecItem } = NS;
  const I = window.WUIcons;
  const u = window.WUData.UNITS[1]; // Gezins Unit 42
  const gallery = ['../../assets/interior-dining.jpg', '../../assets/interior-bedroom.jpg', '../../assets/unit-gezin.jpg'];
  const [active, setActive] = React.useState(0);

  const features = [
    'Volledig ingerichte woonkamer', 'Keuken met inbouwapparatuur', 'Aparte badkamer met douche',
    'Twee gescheiden slaapkamers', 'Airconditioning & vloerverwarming', 'Hoogwaardige PIR-isolatie',
  ];

  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '32px 24px 80px' }}>
      <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 22 }}>
        <a onClick={() => onNav('home')} style={{ color: 'inherit', cursor: 'pointer' }}>Home</a> &nbsp;/&nbsp;
        <a onClick={() => onNav('aanbod')} style={{ color: 'inherit', cursor: 'pointer' }}> Aanbod</a> &nbsp;/&nbsp; {u.title}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'start' }}>
        {/* Gallery */}
        <div>
          <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4 / 3', boxShadow: 'var(--shadow-md)' }}>
            <img src={gallery[active]} alt={u.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: 16, left: 16 }}><Badge tone={u.badge.tone} solid dot>{u.badge.label}</Badge></div>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
            {gallery.map((g, i) => (
              <button key={i} onClick={() => setActive(i)} style={{ flex: 1, padding: 0, border: '2px solid ' + (active === i ? 'var(--gold-500)' : 'transparent'), borderRadius: 'var(--radius-md)', overflow: 'hidden', cursor: 'pointer', background: 'none', aspectRatio: '4 / 3' }}>
                <img src={g} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </button>
            ))}
          </div>

          <div style={{ marginTop: 36 }}>
            <h2 style={{ margin: '0 0 16px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.01em', color: 'var(--text-strong)' }}>Wat is inbegrepen</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px' }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15.5, color: 'var(--text-body)' }}>
                  <span style={{ display: 'inline-flex', color: 'var(--gold-600)' }}><I.Check size={18} /></span>{f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ position: 'sticky', top: 96, display: 'flex', flexDirection: 'column', gap: 20, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 26, boxShadow: 'var(--shadow-md)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--gold-700)', fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Gezinsunit</div>
            <h1 style={{ margin: '8px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, letterSpacing: '-0.01em', color: 'var(--text-strong)' }}>{u.title}</h1>
            <p style={{ margin: '8px 0 0', fontSize: 15, color: 'var(--text-muted)' }}>{u.subtitle}</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px 20px', padding: '18px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
            <SpecItem icon={<I.Ruler size={17} />} value={u.area.replace('ca. ', '')} label="oppervlak" direction="column" />
            <SpecItem icon={<I.Bed size={17} />} value={u.bedrooms} label="slaapkamers" direction="column" />
            <SpecItem icon={<I.Users size={17} />} value={u.persons} label="personen" direction="column" />
            <SpecItem icon={<I.Bath size={17} />} value={u.baths} label="badkamer" direction="column" />
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, color: 'var(--text-strong)' }}>{u.price}</span>
            <span style={{ fontSize: 15, color: 'var(--text-muted)' }}>{u.period} · excl. transport</span>
          </div>
          <Input label="Gewenste startdatum" type="date" />
          <Select label="Huurperiode" placeholder="Maak een keuze" options={['1–3 maanden', '3–6 maanden', '6–12 maanden', 'Langer dan een jaar']} />
          <Button variant="primary" size="lg" fullWidth iconRight={<I.Arrow size={18} />} onClick={() => onNav('contact')}>Vraag deze unit aan</Button>
          <Button variant="outline" size="md" fullWidth iconLeft={<I.Phone size={17} />} as="a" href="tel:+31859026800">085 — 902 6800</Button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: 'var(--text-muted)', justifyContent: 'center' }}><I.Clock size={15} /> Reactie binnen één werkdag</div>
        </div>
      </div>
    </div>
  );
}
window.WUUnit = WUUnit;
