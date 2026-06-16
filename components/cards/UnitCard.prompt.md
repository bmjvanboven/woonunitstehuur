The signature product card — a rentable woonunit with photo, availability badge, spec row, price, and CTA. Lifts and zooms the image on hover.

```jsx
<UnitCard
  image="/assets/unit.jpg"
  title="Comfort Unit 30"
  subtitle="Ideaal voor 1–2 personen tijdens uw verbouwing"
  badge={{ tone: 'success', label: 'Direct beschikbaar' }}
  specs={[
    { icon: <RulerIcon/>, label: 'ca. 30 m²' },
    { icon: <BedIcon/>, value: '1', label: 'slaapkamer' },
    { icon: <UsersIcon/>, value: '2', label: 'personen' },
  ]}
  price="€ 595" pricePeriod="p/mnd"
  href="/units/comfort-30"
/>
```

Composes `Badge` and `SpecItem`. Props: `image`, `title`, `subtitle`, `badge`, `specs`, `price`, `pricePeriod`, `ctaLabel`, `href`/`onClick`.
