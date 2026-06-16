import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label shown above the control. */
  label?: string;
  /** Helper text under the field. */
  helper?: string;
  /** Error message — turns the field red and replaces helper. */
  error?: string;
  /** Leading icon inside the field. */
  iconLeft?: React.ReactNode;
  fullWidth?: boolean;
}

export function Input(props: InputProps): JSX.Element;
