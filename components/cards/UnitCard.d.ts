import React from 'react';

export interface UnitBadge { tone?: 'success' | 'gold' | 'warning' | 'danger' | 'info' | 'neutral'; label: string; }
export interface UnitSpec { icon: React.ReactNode; label: string; value?: string; }

/**
 * Listing card for a rentable woonunit — image, availability, specs, price & CTA.
 */
export interface UnitCardProps {
  /** Photo URL (4:3 recommended). */
  image?: string;
  title: string;
  subtitle?: string;
  /** Availability pill shown over the image. */
  badge?: UnitBadge;
  /** Feature spec row. */
  specs?: UnitSpec[];
  /** Price string, e.g. "€ 595". */
  price?: string;
  /** Period suffix. Default "p/mnd". */
  pricePeriod?: string;
  ctaLabel?: string;
  onClick?: () => void;
  href?: string;
}

export function UnitCard(props: UnitCardProps): JSX.Element;
