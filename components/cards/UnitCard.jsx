import React from 'react';
import { SpecItem } from './SpecItem.jsx';
import { Badge } from '../core/Badge.jsx';

/**
 * Listing card for a rentable woonunit. Image, availability badge, title,
 * spec row, price, and CTA. Lifts on hover.
 */
export function UnitCard({
  image,
  title,
  subtitle,
  badge,            // { tone, label }
  specs = [],       // [{ icon, label, value }]
  price,            // e.g. "€ 595"
  pricePeriod = 'p/mnd',
  ctaLabel = 'Bekijk unit',
  onClick,
  href,
  style = {},
}) {
  const [hover, setHover] = React.useState(false);
  const Wrap = href ? 'a' : 'div';
  return (
    <Wrap
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        textDecoration: 'none',
        cursor: (href || onClick) ? 'pointer' : 'default',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-4px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        fontFamily: 'var(--font-body)',
        ...style,
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', background: 'var(--sand-100)' }}>
        {image && (
          <img src={image} alt={title} style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hover ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform var(--dur-slow) var(--ease-out)',
          }} />
        )}
        {badge && (
          <div style={{ position: 'absolute', top: 14, left: 14 }}>
            <Badge tone={badge.tone || 'success'} solid dot>{badge.label}</Badge>
          </div>
        )}
      </div>

      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
        <div>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 21, letterSpacing: '-0.01em', color: 'var(--text-strong)' }}>{title}</h3>
          {subtitle && <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--text-muted)' }}>{subtitle}</p>}
        </div>

        {specs.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 18px', paddingTop: 4, borderTop: '1px solid var(--border-subtle)' }}>
            {specs.map((sp, i) => <SpecItem key={i} icon={sp.icon} label={sp.label} value={sp.value} />)}
          </div>
        )}

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12 }}>
          {price && (
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'var(--text-strong)' }}>{price}</span>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{pricePeriod}</span>
            </div>
          )}
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            fontWeight: 600, fontSize: 14.5, color: 'var(--gold-700)',
          }}>
            {ctaLabel}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: hover ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-fast) var(--ease-out)' }}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </span>
        </div>
      </div>
    </Wrap>
  );
}
