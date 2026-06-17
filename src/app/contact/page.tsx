import type { Metadata } from 'next';
import { ContactScreen } from '@/components/site/ContactScreen';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Vraag vrijblijvend een offerte aan. Wij reageren meestal binnen één werkdag.',
};

export default function Page() {
  return <ContactScreen />;
}
