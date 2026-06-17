import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { VariantSwitcher } from '@/components/site/VariantSwitcher';

export const metadata: Metadata = {
  title: {
    default: 'Woonunitstehuur.nl — Comfortabel tijdelijk wonen',
    template: '%s — Woonunitstehuur.nl',
  },
  description:
    'Volledig ingerichte woonunits op uw eigen terrein. Binnen 1–2 dagen geplaatst, flexibele huurtermijn — comfortabel tijdelijk wonen tijdens bouw of verbouwing.',
  icons: { icon: '/assets/favicon.png' },
};

// Zet de gekozen ontwerpvariant op <html> vóór paint (voorkomt flikkering).
const variantInit =
  "(function(){try{var K='wu-variant',DV='wu-variant-default',VER='2026-06-elegant',DEF='elegant',OK=['base','subtle','elegant','lively'],v;if(localStorage.getItem(DV)!==VER){localStorage.setItem(DV,VER);localStorage.setItem(K,DEF);v=DEF;}else{v=localStorage.getItem(K);if(OK.indexOf(v)<0)v=DEF;}document.documentElement.setAttribute('data-wu-variant',v);}catch(e){document.documentElement.setAttribute('data-wu-variant','elegant');}})();";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: variantInit }} />
        {/* Fallback zonder JS: secties altijd zichtbaar (reveal wordt anders door JS gedaan). */}
        <noscript>
          <style>{`#screen>div>section{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <div id="app">
          <Header />
          <main id="screen">{children}</main>
          <Footer />
        </div>
        <VariantSwitcher />
      </body>
    </html>
  );
}
