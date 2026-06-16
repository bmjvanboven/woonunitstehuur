import React from 'react';

/**
 * Multi-line text area styled to match Input.
 */
export function Textarea({ label, helper, error, id, rows = 4, fullWidth = true, style = {}, ...rest }) {
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
      <textarea
        id={fieldId}
        rows={rows}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%', resize: 'vertical', boxSizing: 'border-box',
          border: `1px solid ${borderColor}`,
          borderRadius: 'var(--radius-md)',
          background: 'var(--surface-card)',
          padding: '12px 14px',
          fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.5,
          color: 'var(--text-strong)', outline: 'none',
          boxShadow: focus ? 'var(--ring-focus)' : 'none',
          transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
          ...style,
        }}
        {...rest}
      />
      {(helper || error) && (
        <div style={{ fontSize: 13, marginTop: 6, color: error ? 'var(--danger-500)' : 'var(--text-muted)' }}>
          {error || helper}
        </div>
      )}
    </div>
  );
}
