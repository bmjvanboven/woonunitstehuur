// Demo content for the Woonunitstehuur website UI kit.
const UNITS = [
  {
    id: 'comfort-30',
    image: '../../assets/unit-comfort.jpg',
    title: 'Comfort Unit 30',
    subtitle: 'Compacte luxe voor 1–2 personen',
    badge: { tone: 'success', label: 'Direct beschikbaar' },
    area: 'ca. 30 m²', bedrooms: '1', persons: '2', baths: '1',
    price: '€ 595', period: 'p/mnd',
  },
  {
    id: 'gezin-42',
    image: '../../assets/unit-gezin.jpg',
    title: 'Gezins Unit 42',
    subtitle: 'Ruimte voor het hele gezin tijdens de verbouwing',
    badge: { tone: 'gold', label: 'Populair' },
    area: 'ca. 42 m²', bedrooms: '2', persons: '4', baths: '1',
    price: '€ 745', period: 'p/mnd',
  },
  {
    id: 'familie-xl',
    image: '../../assets/unit-familie.jpg',
    title: 'Familie Unit XL',
    subtitle: 'Onze ruimste unit met drie slaapkamers',
    badge: { tone: 'warning', label: 'Op aanvraag' },
    area: 'ca. 55 m²', bedrooms: '3', persons: '5', baths: '2',
    price: '€ 895', period: 'p/mnd',
  },
];

const USPS = [
  { icon: 'Truck', title: 'Binnen 1–2 dagen geplaatst', text: 'Met onze kraanwagen plaatsen wij de unit op uw eigen terrein of bouwkavel.' },
  { icon: 'Home', title: 'Volledig ingericht', text: 'Woonkamer, keuken met inbouwapparatuur, badkamer en gescheiden slaapkamers.' },
  { icon: 'Snowflake', title: 'Airco & PIR-isolatie', text: 'Een aangenaam binnenklimaat, het hele jaar door, zomer én winter.' },
  { icon: 'Shield', title: 'Flexibele huurtermijn', text: 'Huur per maand, voor korte én langere periodes. Zonder gedoe.' },
];

const STEPS = [
  { n: '01', title: 'Vraag aan', text: 'Vertel ons over uw situatie en gewenste periode via het formulier of telefonisch.' },
  { n: '02', title: 'Advies & offerte', text: 'Wij adviseren de best passende unit en sturen u een heldere offerte op maat.' },
  { n: '03', title: 'Plaatsing', text: 'Wij bezorgen en plaatsen de unit op uw terrein. Direct klaar voor gebruik.' },
  { n: '04', title: 'Comfortabel wonen', text: 'U blijft dicht bij huis wonen, met al het comfort van een vaste woning.' },
];

window.WUData = { UNITS, USPS, STEPS };
