import React from 'react';

export interface SpecItemProps {
  /** Icon node (SVG). */
  icon: React.ReactNode;
  /** Short label, e.g. "2 slaapkamers". */
  label: string;
  /** Optional emphasized value shown above the label. */
  value?: string;
  /** Layout: icon beside text ('row') or stacked ('column'). */
  direction?: 'row' | 'column';
}

export function SpecItem(props: SpecItemProps): JSX.Element;
