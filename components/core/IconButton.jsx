import React from 'react';

/**
 * Square/circular icon-only button. Use for compact actions (close, nav, call).
 */
export function IconButton({
  variant = 'outline',
  size = 'md',
  round = false,
  disabled = false,
  label,
  onClick,
  children,
  style = {},
  ...rest
}) {
  const dim = { sm: 36, md: 44, lg: 52 }[size] || 44;
  const variants = {
    primary: { background: 'var(--gold-500)', color: 'var(--ink-900)', border: '1px solid var(--gold-500)' },
    secondary: { background: 'var(--ink-800)', color: 'var(--white)', border: '1px solid var(--ink-800)' },
    outline: { background: 'var(--surface-card)', color: 'var(--ink-800)', border: '1px solid var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--ink-700)', border: '1px solid transparent' },
  };
  const [hover, setHover] = React.useState(false);
  const hoverBg = !disabled && hover ? {
    primary: { background: 'var(--gold-600)' },
    secondary: { background: 'var(--ink-700)' },
    outline: { background: 'var(--sand-100)' },
    ghost: { background: 'var(--sand-100)' },
  }[variant] : {};

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: dim,
        height: dim,
        borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-fast) var(--ease-out)',
        ...variants[variant],
        ...hoverBg,
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
