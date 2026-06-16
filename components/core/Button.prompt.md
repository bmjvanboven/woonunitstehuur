Pill-shaped action button — gold `primary` for CTAs, solid ink `secondary`, plus `outline` and `ghost`. Use it for any primary or secondary call to action.

```jsx
<Button variant="primary" size="lg" iconRight={<ArrowRight />}>
  Vraag een offerte aan
</Button>
<Button variant="outline">Bekijk units</Button>
<Button variant="secondary" as="a" href="/contact">Neem contact op</Button>
```

Variants: `primary` (gold / ink text), `secondary` (ink / white), `outline`, `ghost`.
Sizes: `sm` · `md` · `lg`. Props: `fullWidth`, `disabled`, `iconLeft`, `iconRight`, `as` ('button' | 'a'), `href`.
