import React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helper?: string;
  error?: string;
  /** Options as strings or {value,label}. */
  options?: Array<string | SelectOption>;
  /** Disabled first option shown when nothing is chosen. */
  placeholder?: string;
  fullWidth?: boolean;
}

export function Select(props: SelectProps): JSX.Element;
