'use client';
// Aanbod (units-overzicht) met filterchips.
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UnitCard } from '@ds/cards/UnitCard';
import { Select } from '@ds/forms/Select';
import * as I from './icons';
import { UNITS } from '@/lib/units';
import type { Unit } from '@/lib/units';

const CHIPS = ['Alle units', '1–2 personen', 'Gezin', 'XL familie'];

export function AanbodScreen() {
  const router = useRouter();
  const [filter, setFilter] = useState('Alle units');

  const specsOf = (u: Unit) => [
    { icon: <I.Ruler size={17} />, label: u.area },
    { icon: <I.Bed size={17} />, value: u.bedrooms, label: 'slaapk.' },
    { icon: <I.Bath size={17} />, value: u.baths, label: 'badk.' },
    { icon: <I.Users size={17} />, value: u.persons, label: 'pers.' },
  ];

  const list =
    filter === 'Alle units' ? UNITS
    : filter === '1–2 personen' ? UNITS.filter((u) => +u.persons <= 2)
    : filter === 'Gezin' ? UNITS.filter((u) => +u.persons > 2 && +u.persons <= 4)
    : UNITS.filter((u) => +u.persons >= 5);

  return (
    <div>
      <section style={{ background: 'var(--ink-800)', color: '#fff' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 24px' }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 14 }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> &nbsp;/&nbsp; Aanbod
          </div>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 48, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>Ons aanbod</h1>
          <p style={{ margin: '14px 0 0', fontSize: 18, color: 'rgba(255,255,255,0.78)', maxWidth: 620 }}>Al onze woonunits zijn volledig ingericht, geïsoleerd en voorzien van airconditioning. Kies de unit die past bij uw situatie.</p>
        </div>
      </section>

      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 24px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 32 }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {CHIPS.map((c) => (
              <button key={c} onClick={() => setFilter(c)} style={{
                cursor: 'pointer', padding: '9px 16px', borderRadius: 'var(--radius-pill)',
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14,
                border: '1px solid ' + (filter === c ? 'var(--ink-800)' : 'var(--border-default)'),
                background: filter === c ? 'var(--ink-800)' : 'transparent',
                color: filter === c ? '#fff' : 'var(--text-body)',
              }}>{c}</button>
            ))}
          </div>
          <div style={{ width: 220 }}>
            <Select options={['Sorteer: aanbevolen', 'Prijs: laag → hoog', 'Prijs: hoog → laag', 'Oppervlakte']} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {list.map((u) => (
            <UnitCard key={u.id} image={u.image} title={u.title} subtitle={u.subtitle} badge={u.badge} specs={specsOf(u)} price={u.price} pricePeriod={u.period} onClick={() => router.push('/aanbod/' + u.id)} />
          ))}
        </div>
        {list.length === 0 && <p style={{ color: 'var(--text-muted)', padding: '40px 0' }}>Geen units gevonden voor deze filter.</p>}
      </section>
    </div>
  );
}
