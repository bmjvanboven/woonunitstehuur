import React from 'react';

/**
 * Text input with optional label, helper text, and error state.
 */
export function Input({
  label,
  helper,
  error,
  id,
  type = 'text',
  iconLeft = null,
  fullWidth = true,
  style = {},
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--danger-500)' : focus ? 'var(--gold-500)' : 'var(--border-default)';
  return (
    <div style={{ width: fullWidth ? '100%' : 'auto', fontFamily: 'var(--font-body)' }}>
      {label && (
        <label htmlFor={fieldId} style={{ display: 'block', fontSize: 14, fontWeight: 600, color: 'var(--text-strong)', marginBottom: 7 }}>
          {label}
        </label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 9,
        background: 'var(--surface-card)',
        border: `1px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        padding: '0 14px',
        height: 48,
        boxShadow: focus ? 'var(--ring-focus)' : 'none',
        transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      }}>
        {iconLeft && <span style={{ color: 'var(--text-subtle)', display: 'flex' }}>{iconLeft}</span>}
        <input
          id={fieldId}
          type={type}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-strong)',
            height: '100%', ...style,
          }}
          {...rest}
        />
      </div>
      {(helper || error) && (
        <div style={{ fontSize: 13, marginTop: 6, color: error ? 'var(--danger-500)' : 'var(--text-muted)' }}>
          {error || helper}
        </div>
      )}
    </div>
  );
}
