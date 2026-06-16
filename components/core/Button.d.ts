import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Primary action button for Woonunitstehuur. Pill-shaped, gold primary on ink text.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. Default 'primary'. */
  variant?: ButtonVariant;
  /** Control height & padding. Default 'md'. */
  size?: ButtonSize;
  /** Stretch to container width. */
  fullWidth?: boolean;
  disabled?: boolean;
  /** Element/icon rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Element/icon rendered after the label. */
  iconRight?: React.ReactNode;
  /** Render as 'a' for links, 'button' otherwise. Default 'button'. */
  as?: 'button' | 'a';
  href?: string;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
