'use client';
// Site-header — logo, nav, telefoon + CTA. Klapt in tot hamburgermenu op mobiel.
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@ds/core/Button';
import { IconButton } from '@ds/core/IconButton';
import * as I from './icons';
import { useIsMobile } from './useIsMobile';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/aanbod', label: 'Aanbod' },
  { href: '/#werkwijze', label: 'Werkwijze' },
  { href: '/contact', label: 'Contact' },
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  if (href.startsWith('/#')) return false;
  return pathname === href || pathname.startsWith(href + '/');
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useIsMobile(860);
  const [open, setOpen] = useState(false);
  useEffect(() => { if (!isMobile) setOpen(false); }, [isMobile]);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,255,255,0.86)', backdropFilter: 'saturate(160%) blur(12px)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 20px', height: isMobile ? 64 : 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/assets/logo-horizontal.png" alt="Woonunitstehuur.nl" style={{ height: isMobile ? 32 : 40, width: 'auto', display: 'block' }} />
        </Link>

        {!isMobile && (
          <React.Fragment>
            <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {NAV.map((n) => {
                const act = isActive(pathname, n.href);
                return (
                  <Link key={n.href} href={n.href} style={{
                    textDecoration: 'none', padding: '8px 14px', borderRadius: 'var(--radius-pill)',
                    fontSize: 15, fontWeight: 600,
                    color: act ? 'var(--gold-700)' : 'var(--text-body)',
                    background: act ? 'var(--gold-50)' : 'transparent',
                  }}>{n.label}</Link>
                );
              })}
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <a href="tel:+31859026800" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 15, color: 'var(--text-strong)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                <I.Phone size={17} style={{ color: 'var(--gold-600)', flex: 'none' }} /> 085 — 902 6800
              </a>
              <Button variant="primary" size="sm" onClick={() => router.push('/contact')}>Vraag offerte aan</Button>
            </div>
          </React.Fragment>
        )}

        {isMobile && (
          <IconButton label={open ? 'Sluit menu' : 'Open menu'} variant="outline" onClick={() => setOpen((v) => !v)}>
            {open ? <I.Arrow size={20} style={{ transform: 'rotate(-90deg)' }} /> : <I.Menu size={20} />}
          </IconButton>
        )}
      </div>

      {/* Mobiel dropdown */}
      {isMobile && open && (
        <div style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-card)', boxShadow: 'var(--shadow-lg)' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', padding: '8px 16px 16px' }}>
            {NAV.map((n) => {
              const act = isActive(pathname, n.href);
              return (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)} style={{
                  padding: '14px 12px', borderRadius: 'var(--radius-md)', textDecoration: 'none',
                  fontSize: 17, fontWeight: 600, borderBottom: '1px solid var(--border-subtle)',
                  color: act ? 'var(--gold-700)' : 'var(--text-strong)',
                }}>{n.label}</Link>
              );
            })}
            <a href="tel:+31859026800" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 12px', fontWeight: 700, fontSize: 16, color: 'var(--text-strong)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              <I.Phone size={18} style={{ color: 'var(--gold-600)', flex: 'none' }} /> 085 — 902 6800
            </a>
            <div style={{ paddingTop: 6 }}>
              <Button variant="primary" size="lg" fullWidth onClick={() => { setOpen(false); router.push('/contact'); }}>Vraag offerte aan</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
