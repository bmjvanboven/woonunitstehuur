import React from 'react';

/**
 * Status badge — compact, for availability and state labels.
 * tone: neutral | gold | success | info | warning | danger
 */
export function Badge({ tone = 'neutral', solid = false, dot = false, children, style = {}, ...rest }) {
  const map = {
    neutral: { soft: { bg: 'var(--sand-100)', fg: 'var(--sand-700)' }, solid: { bg: 'var(--sand-700)', fg: '#fff' }, dotc: 'var(--sand-500)' },
    gold:    { soft: { bg: 'var(--gold-100)', fg: 'var(--gold-700)' }, solid: { bg: 'var(--gold-500)', fg: 'var(--ink-900)' }, dotc: 'var(--gold-500)' },
    success: { soft: { bg: 'var(--success-100)', fg: '#3a5c36' }, solid: { bg: 'var(--success-500)', fg: '#fff' }, dotc: 'var(--success-500)' },
    info:    { soft: { bg: 'var(--info-100)', fg: '#2c5570' }, solid: { bg: 'var(--info-500)', fg: '#fff' }, dotc: 'var(--info-500)' },
    warning: { soft: { bg: 'var(--warning-100)', fg: '#8a6320' }, solid: { bg: 'var(--warning-500)', fg: '#fff' }, dotc: 'var(--warning-500)' },
    danger:  { soft: { bg: 'var(--danger-100)', fg: '#8a352c' }, solid: { bg: 'var(--danger-500)', fg: '#fff' }, dotc: 'var(--danger-500)' },
  };
  const t = map[tone] || map.neutral;
  const c = solid ? t.solid : t.soft;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 12.5,
        lineHeight: 1,
        letterSpacing: '0.01em',
        padding: '6px 11px',
        borderRadius: 'var(--radius-pill)',
        background: c.bg,
        color: c.fg,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 7, height: 7, borderRadius: '50%', background: solid ? 'currentColor' : t.dotc }} />}
      {children}
    </span>
  );
}
