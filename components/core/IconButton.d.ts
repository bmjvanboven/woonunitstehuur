import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Fully rounded instead of soft square. */
  round?: boolean;
  disabled?: boolean;
  /** Accessible label (also the tooltip). */
  label: string;
  /** The icon element. */
  children: React.ReactNode;
}

export function IconButton(props: IconButtonProps): JSX.Element;
