import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { UnitDetailScreen } from '@/components/site/UnitDetailScreen';
import { UNITS, getUnit } from '@/lib/units';

export function generateStaticParams() {
  return UNITS.map((u) => ({ slug: u.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const unit = getUnit(slug);
  if (!unit) return { title: 'Unit niet gevonden' };
  return { title: unit.title, description: unit.subtitle };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const unit = getUnit(slug);
  if (!unit) notFound();
  return <UnitDetailScreen unit={unit} />;
}
