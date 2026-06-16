import React from 'react';

/**
 * Native select styled to match Input.
 */
export function Select({ label, helper, error, id, options = [], placeholder, fullWidth = true, style = {}, ...rest }) {
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
        position: 'relative',
        border: `1px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        background: 'var(--surface-card)',
        height: 48,
        boxShadow: focus ? 'var(--ring-focus)' : 'none',
        transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      }}>
        <select
          id={fieldId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          defaultValue={placeholder ? '' : undefined}
          style={{
            appearance: 'none', WebkitAppearance: 'none',
            border: 'none', outline: 'none', background: 'transparent',
            width: '100%', height: '100%', padding: '0 40px 0 14px',
            fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-strong)',
            cursor: 'pointer', ...style,
          }}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lab = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lab}</option>;
          })}
        </select>
        <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-subtle)', display: 'flex' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        </span>
      </div>
      {(helper || error) && (
        <div style={{ fontSize: 13, marginTop: 6, color: error ? 'var(--danger-500)' : 'var(--text-muted)' }}>
          {error || helper}
        </div>
      )}
    </div>
  );
}
