'use client';
// Home-scherm.
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@ds/core/Button';
import { Badge } from '@ds/core/Badge';
import { UnitCard } from '@ds/cards/UnitCard';
import * as I from './icons';
import { Hero } from './Hero';
import { UNITS, USPS, STEPS } from '@/lib/units';
import type { Unit } from '@/lib/units';

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-700)' }}>
      <span style={{ width: 24, height: 2, background: 'var(--gold-500)' }} />{children}
    </div>
  );
}

export function HomeScreen() {
  const router = useRouter();

  const specsOf = (u: Unit) => [
    { icon: <I.Ruler size={17} />, label: u.area },
    { icon: <I.Bed size={17} />, value: u.bedrooms, label: 'slaapk.' },
    { icon: <I.Users size={17} />, value: u.persons, label: 'pers.' },
  ];

  return (
    <div>
      {/* HERO (animatieniveau via variants.css) */}
      <Hero />

      {/* USP'S */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {USPS.map((u, i) => {
            const Ico = I.Icons[u.icon as I.IconName];
            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--gold-50)', color: 'var(--gold-700)' }}>{Ico ? <Ico size={24} /> : null}</span>
                <h3 style={{ margin: '4px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--text-strong)' }}>{u.title}</h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-muted)' }}>{u.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* UITGELICHTE UNITS */}
      <section style={{ background: 'var(--surface-page)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32, gap: 24, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Eyebrow>Ons aanbod</Eyebrow>
              <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 38, letterSpacing: '-0.01em', color: 'var(--text-strong)' }}>Kies uw woonunit</h2>
            </div>
            <Button variant="ghost" iconRight={<I.Arrow size={17} />} onClick={() => router.push('/aanbod')}>Bekijk alle units</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {UNITS.map((u) => (
              <UnitCard key={u.id} image={u.image} title={u.title} subtitle={u.subtitle} badge={u.badge} specs={specsOf(u)} price={u.price} pricePeriod={u.period} onClick={() => router.push('/aanbod/' + u.id)} />
            ))}
          </div>
        </div>
      </section>

      {/* STAPPEN */}
      <section id="werkwijze" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '80px 24px', scrollMarginTop: 90 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40, alignItems: 'center', textAlign: 'center' }}>
          <Eyebrow>Zo werkt het</Eyebrow>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 38, letterSpacing: '-0.01em', color: 'var(--text-strong)' }}>In vier stappen geregeld</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ position: 'relative', padding: '28px 22px', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 34, color: 'var(--gold-300)', lineHeight: 1 }}>{s.n}</div>
              <h3 style={{ margin: '14px 0 8px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--text-strong)' }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-muted)' }}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA-BAND */}
      <section style={{ background: 'var(--gold-500)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, letterSpacing: '-0.01em', color: 'var(--ink-900)' }}>Klaar voor uw tijdelijke woning?</h2>
            <p style={{ margin: 0, fontSize: 17, color: 'rgba(20,20,19,0.72)' }}>Vraag vrijblijvend een offerte aan. Wij reageren binnen één werkdag.</p>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button variant="secondary" size="lg" iconLeft={<I.Phone size={18} />} as="a" href="tel:+31859026800">Bel direct</Button>
            <Button variant="outline" size="lg" onClick={() => router.push('/contact')} style={{ borderColor: 'var(--ink-800)', color: 'var(--ink-900)' }}>Offerte aanvragen</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
