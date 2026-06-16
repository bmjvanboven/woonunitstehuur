import React from 'react';

/**
 * Icon + label spec line, used inside unit cards and detail pages.
 * Pass an icon node plus a short label (e.g. "2 slaapkamers").
 */
export function SpecItem({ icon, label, value, direction = 'row', style = {} }) {
  const isCol = direction === 'column';
  return (
    <div style={{
      display: 'flex',
      flexDirection: isCol ? 'column' : 'row',
      alignItems: isCol ? 'flex-start' : 'center',
      gap: isCol ? 6 : 9,
      fontFamily: 'var(--font-body)',
      ...style,
    }}>
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 34, height: 34, flex: 'none',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--gold-50)', color: 'var(--gold-700)',
      }}>{icon}</span>
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.3 }}>
        {value != null && <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-strong)' }}>{value}</span>}
        <span style={{ fontSize: value != null ? 12.5 : 14, color: value != null ? 'var(--text-muted)' : 'var(--text-body)', fontWeight: value != null ? 500 : 600 }}>{label}</span>
      </span>
    </div>
  );
}
