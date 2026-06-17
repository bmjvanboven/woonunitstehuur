// Site-footer — donker, reversed logo, kolommen, contact.
import React from 'react';
import Link from 'next/link';
import * as I from './icons';

type FooterLink = { t: string; href?: string };

function Column({ title, items }: { title: string; items: FooterLink[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-400)' }}>{title}</div>
      {items.map((it, i) =>
        it.href ? (
          <Link key={i} href={it.href} style={{ fontSize: 15, color: 'rgba(255,255,255,0.72)', textDecoration: 'none' }}>{it.t}</Link>
        ) : (
          <span key={i} style={{ fontSize: 15, color: 'rgba(255,255,255,0.72)' }}>{it.t}</span>
        )
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer style={{ background: 'var(--ink-800)', color: '#fff' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 24px 40px', display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr', gap: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 320 }}>
          <img src="/assets/logo-horizontal-white.png" alt="Woonunitstehuur.nl" style={{ height: 44, width: 'auto', alignSelf: 'flex-start' }} />
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.66)' }}>
            Dé oplossing voor comfortabel tijdelijk wonen tijdens uw verbouwing of nieuwbouw. Volledig ingericht en op eigen terrein.
          </p>
        </div>
        <Column title="Units" items={[{ t: 'Comfort Unit 30', href: '/aanbod/comfort-30' }, { t: 'Gezins Unit 42', href: '/aanbod/gezin-42' }, { t: 'Familie Unit XL', href: '/aanbod/familie-xl' }, { t: 'Volledig aanbod', href: '/aanbod' }]} />
        <Column title="Bedrijf" items={[{ t: 'Over ons' }, { t: 'Werkwijze', href: '/#werkwijze' }, { t: 'Veelgestelde vragen' }, { t: 'Contact', href: '/contact' }]} />
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
          <span style={{ display: 'flex', gap: 20 }}>
            <span style={{ color: 'inherit' }}>Privacybeleid</span>
            <span style={{ color: 'inherit' }}>Cookiebeleid</span>
            <span style={{ color: 'inherit' }}>Algemene voorwaarden</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
