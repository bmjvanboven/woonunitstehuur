import type { Metadata } from 'next';
import { AanbodScreen } from '@/components/site/AanbodScreen';

export const metadata: Metadata = {
  title: 'Aanbod',
  description: 'Bekijk onze woonunits — volledig ingericht, geïsoleerd en voorzien van airconditioning.',
};

export default function Page() {
  return <AanbodScreen />;
}
