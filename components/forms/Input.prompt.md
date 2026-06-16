Labeled text input with focus ring, helper text, and error state. Used throughout contact & quote forms.

```jsx
<Input label="E-mailadres" type="email" placeholder="naam@voorbeeld.nl" helper="Wij reageren binnen één werkdag." />
<Input label="Postcode" error="Vul een geldige postcode in." />
```

Props: `label`, `helper`, `error`, `iconLeft`, `type`, `fullWidth` (default true), plus native input attrs.
