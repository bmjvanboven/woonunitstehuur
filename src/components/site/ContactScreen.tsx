'use client';
// Contact — formulier + info-paneel, met successtatus.
// Fase 1: het formulier toont de successtatus maar verstuurt nog geen e-mail
// (echte aflevering volgt in de CMS/back-end-stap). Telefoon en e-mail werken wel.
import React, { useState } from 'react';
import { Button } from '@ds/core/Button';
import { Badge } from '@ds/core/Badge';
import { Input } from '@ds/forms/Input';
import { Select } from '@ds/forms/Select';
import { Textarea } from '@ds/forms/Textarea';
import * as I from './icons';

export function ContactScreen() {
  const [sent, setSent] = useState(false);

  return (
    <div style={{ background: 'var(--surface-page)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 24px 90px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40, maxWidth: 620 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-700)' }}>
            <span style={{ width: 24, height: 2, background: 'var(--gold-500)' }} />Contact
          </div>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>Vraag een offerte aan</h1>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'var(--text-muted)' }}>Vertel ons over uw situatie. Wij adviseren de best passende unit en sturen u vrijblijvend een offerte, meestal binnen één werkdag.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 40, alignItems: 'start' }}>
          {/* Formulierkaart */}
          <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 32, boxShadow: 'var(--shadow-sm)' }}>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, padding: '24px 0' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: '50%', background: 'var(--success-100)', color: 'var(--success-500)' }}><I.Check size={28} /></span>
                <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'var(--text-strong)' }}>Bedankt voor uw aanvraag!</h2>
                <p style={{ margin: 0, fontSize: 16, color: 'var(--text-muted)', maxWidth: 440 }}>Wij hebben uw bericht ontvangen en nemen binnen één werkdag contact met u op. Houd uw e-mail in de gaten.</p>
                <Button variant="outline" onClick={() => setSent(false)}>Nieuw bericht</Button>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}
              >
                <Input label="Voornaam" placeholder="Voornaam" required />
                <Input label="Achternaam" placeholder="Achternaam" required />
                <Input label="E-mailadres" type="email" placeholder="naam@voorbeeld.nl" iconLeft={<I.Mail size={17} />} required />
                <Input label="Telefoonnummer" type="tel" placeholder="06 — 12 34 56 78" iconLeft={<I.Phone size={17} />} />
                <Select label="Type woonunit" placeholder="Maak een keuze" options={['Comfort Unit 30', 'Gezins Unit 42', 'Familie Unit XL', 'Weet ik nog niet']} />
                <Select label="Gewenste periode" placeholder="Maak een keuze" options={['1–3 maanden', '3–6 maanden', '6–12 maanden', 'Langer dan een jaar']} />
                <div style={{ gridColumn: '1 / -1' }}>
                  <Input label="Plaatsingsadres (postcode + plaats)" placeholder="1234 AB, Plaatsnaam" iconLeft={<I.MapPin size={17} />} />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <Textarea label="Uw situatie" rows={4} placeholder="Vertel ons over uw verbouwing, gewenste startdatum en eventuele wensen…" />
                </div>
                <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: 'var(--text-muted)' }}><I.Shield size={16} style={{ color: 'var(--gold-600)' }} /> Uw gegevens worden vertrouwelijk behandeld.</span>
                  <Button variant="primary" size="lg" type="submit" iconRight={<I.Arrow size={18} />}>Verstuur aanvraag</Button>
                </div>
              </form>
            )}
          </div>

          {/* Info-paneel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: 'var(--ink-800)', color: '#fff', borderRadius: 'var(--radius-lg)', padding: 28, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20 }}>Liever direct contact?</h3>
              {([
                [<I.Phone size={18} />, '085 — 902 6800', 'Ma–vr 08:00–18:00'],
                [<I.Mail size={18} />, 'info@woonunitstehuur.nl', 'Reactie binnen één werkdag'],
                [<I.MapPin size={18} />, 'Heel Nederland', 'Plaatsing op locatie'],
              ] as [React.ReactNode, string, string][]).map((row, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 42, height: 42, borderRadius: 'var(--radius-md)', background: 'rgba(188,149,91,0.18)', color: 'var(--gold-400)', flex: 'none' }}>{row[0]}</span>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 700, fontSize: 16 }}>{row[1]}</span>
                    <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.6)' }}>{row[2]}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--gold-50)', border: '1px solid var(--gold-200)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <img src="/assets/placing.jpg" alt="Plaatsing van een woonunit met kraanwagen" style={{ width: '100%', height: 150, objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Badge tone="gold" solid>Goed om te weten</Badge>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--gold-900)' }}>Onze units worden met een kraanwagen op uw eigen tuin of bouwkavel geplaatst — meestal binnen 1 tot 2 werkdagen na akkoord.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
