import React from 'react';

/**
 * Woonunitstehuur primary action button.
 * Gold for primary CTAs, solid ink for secondary, outline & ghost for low emphasis.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  href,
  onClick,
  type = 'button',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { fontSize: 14, padding: '0 16px', height: 38, gap: 8 },
    md: { fontSize: 15, padding: '0 22px', height: 46, gap: 9 },
    lg: { fontSize: 17, padding: '0 30px', height: 56, gap: 11 },
  };
  const variants = {
    primary: {
      background: 'var(--gold-500)',
      color: 'var(--ink-900)',
      border: '1px solid var(--gold-500)',
      boxShadow: 'var(--shadow-sm)',
    },
    secondary: {
      background: 'var(--ink-800)',
      color: 'var(--white)',
      border: '1px solid var(--ink-800)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-800)',
      border: '1px solid var(--border-strong)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--gold-700)',
      border: '1px solid transparent',
    },
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;

  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const hoverStyle = !disabled && hover ? {
    primary: { background: 'var(--gold-600)', borderColor: 'var(--gold-600)' },
    secondary: { background: 'var(--ink-700)', borderColor: 'var(--ink-700)' },
    outline: { background: 'var(--sand-100)', borderColor: 'var(--ink-800)' },
    ghost: { background: 'var(--gold-50)' },
  }[variant] : {};

  const Tag = as === 'a' ? 'a' : 'button';

  return (
    <Tag
      href={as === 'a' ? href : undefined}
      type={as === 'button' ? type : undefined}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      disabled={as === 'button' ? disabled : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: s.fontSize,
        letterSpacing: '0.01em',
        lineHeight: 1,
        height: s.height,
        padding: s.padding,
        width: fullWidth ? '100%' : 'auto',
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
        transform: active && !disabled ? 'translateY(1px)' : 'none',
        ...v,
        ...hoverStyle,
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
