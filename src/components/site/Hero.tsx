'use client';
// Hero-sectie — "kaart"-layout (helder, luchtig, afgeronde fotokaart).
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@ds/core/Button';
import { Badge } from '@ds/core/Badge';
import * as I from './icons';
import { useIsMobile } from './useIsMobile';

const HEADLINE = 'Comfortabel tijdelijk wonen';
const SUB = 'Of u nu bouwt of verbouwt, wij plaatsen een volledig ingerichte woonunit op uw eigen terrein. Zo blijft u dicht bij huis, met al het comfort van een vaste woning.';
const STATS: [string, string][] = [['1–2', 'werkdagen plaatsing'], ['100%', 'ingericht & klaar'], ['Heel', 'Nederland']];

export function Hero() {
  const router = useRouter();
  const isMobile = useIsMobile(760);

  return (
    <section style={{ position: 'relative', background: 'var(--surface-page)', overflow: 'hidden' }}>
      {/* zachte brand-wash rechtsboven */}
      <div style={{ position: 'absolute', top: -120, right: -120, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(188,149,91,0.16), rgba(188,149,91,0) 70%)' }} />
      <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: isMobile ? '44px 20px 56px' : '72px 24px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.92fr 1.08fr', gap: isMobile ? 40 : 56, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-700)' }}>
            <span style={{ width: 24, height: 2, background: 'var(--gold-500)' }} />Tijdelijk wonen op eigen terrein
          </div>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: isMobile ? 38 : 56, lineHeight: 1.04, letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'var(--text-strong)' }}>{HEADLINE}</h1>
          <p style={{ margin: 0, fontSize: isMobile ? 16.5 : 18, lineHeight: 1.65, color: 'var(--text-muted)', maxWidth: 480 }}>{SUB}</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
            <Button variant="primary" size="lg" fullWidth={isMobile} iconRight={<I.Arrow size={18} />} onClick={() => router.push('/aanbod')}>Bekijk het aanbod</Button>
            <Button variant="outline" size="lg" fullWidth={isMobile} onClick={() => router.push('/contact')}>Vraag offerte aan</Button>
          </div>
          <div style={{ display: 'flex', gap: 28, marginTop: 16, flexWrap: 'wrap' }}>
            {STATS.map(([a, b], i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--text-strong)' }}>{a}</span>
                <span style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', aspectRatio: '4 / 3.2' }}>
            <img src="/assets/interior-dining.jpg" alt="Comfortabel ingerichte woonunit — eethoek met uitzicht op de bouw" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          {/* overlappende beschikbaarheids- + prijskaart */}
          <div style={{ position: 'absolute', left: isMobile ? '50%' : -24, bottom: isMobile ? -28 : -24, transform: isMobile ? 'translateX(-50%)' : 'none', width: isMobile ? 'calc(100% - 28px)' : 'auto', justifyContent: isMobile ? 'center' : 'flex-start', background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: '18px 22px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: 16 }}>
            <Badge tone="success" dot>Direct beschikbaar</Badge>
            <div style={{ width: 1, height: 34, background: 'var(--border-subtle)' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--text-strong)' }}>vanaf € 595</span>
              <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>per maand, volledig ingericht</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
