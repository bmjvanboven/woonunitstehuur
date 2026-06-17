// Site-content (fase 1: statisch in code; in de CMS-stap verhuist dit naar Payload).
export type BadgeTone = 'success' | 'gold' | 'warning' | 'info' | 'danger' | 'neutral';

export type Unit = {
  id: string;
  kicker: string;
  image: string;
  title: string;
  subtitle: string;
  badge: { tone: BadgeTone; label: string };
  area: string;
  bedrooms: string;
  persons: string;
  baths: string;
  price: string;
  period: string;
};

export const UNITS: Unit[] = [
  {
    id: 'comfort-30',
    kicker: 'Comfortunit',
    image: '/assets/unit-comfort.jpg',
    title: 'Comfort Unit 30',
    subtitle: 'Compacte luxe voor 1–2 personen',
    badge: { tone: 'success', label: 'Direct beschikbaar' },
    area: 'ca. 30 m²', bedrooms: '1', persons: '2', baths: '1',
    price: '€ 595', period: 'p/mnd',
  },
  {
    id: 'gezin-42',
    kicker: 'Gezinsunit',
    image: '/assets/unit-gezin.jpg',
    title: 'Gezins Unit 42',
    subtitle: 'Ruimte voor het hele gezin tijdens de verbouwing',
    badge: { tone: 'gold', label: 'Populair' },
    area: 'ca. 42 m²', bedrooms: '2', persons: '4', baths: '1',
    price: '€ 745', period: 'p/mnd',
  },
  {
    id: 'familie-xl',
    kicker: 'Familie-unit',
    image: '/assets/unit-familie.jpg',
    title: 'Familie Unit XL',
    subtitle: 'Onze ruimste unit met drie slaapkamers',
    badge: { tone: 'warning', label: 'Op aanvraag' },
    area: 'ca. 55 m²', bedrooms: '3', persons: '5', baths: '2',
    price: '€ 895', period: 'p/mnd',
  },
];

export function getUnit(id: string): Unit | undefined {
  return UNITS.find((u) => u.id === id);
}

export type Usp = { icon: string; title: string; text: string };
export const USPS: Usp[] = [
  { icon: 'Truck', title: 'Binnen 1–2 dagen geplaatst', text: 'Met onze kraanwagen plaatsen wij de unit op uw eigen terrein of bouwkavel.' },
  { icon: 'Home', title: 'Volledig ingericht', text: 'Woonkamer, keuken met inbouwapparatuur, badkamer en gescheiden slaapkamers.' },
  { icon: 'Snowflake', title: 'Airco & PIR-isolatie', text: 'Een aangenaam binnenklimaat, het hele jaar door, zomer én winter.' },
  { icon: 'Shield', title: 'Flexibele huurtermijn', text: 'Huur per maand, voor korte én langere periodes. Zonder gedoe.' },
];

export type Step = { n: string; title: string; text: string };
export const STEPS: Step[] = [
  { n: '01', title: 'Vraag aan', text: 'Vertel ons over uw situatie en gewenste periode via het formulier of telefonisch.' },
  { n: '02', title: 'Advies & offerte', text: 'Wij adviseren de best passende unit en sturen u een heldere offerte op maat.' },
  { n: '03', title: 'Plaatsing', text: 'Wij bezorgen en plaatsen de unit op uw terrein. Direct klaar voor gebruik.' },
  { n: '04', title: 'Comfortabel wonen', text: 'U blijft dicht bij huis wonen, met al het comfort van een vaste woning.' },
];
