'use client';
// Ontwerpvariant-store + zwevende switcher + scroll-reveal.
// Het basisontwerp blijft gelijk; varianten leggen alleen motion erop
// (zie ui_kits/website/variants.css). De actieve variant staat als
// data-wu-variant op <html>.
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const VARIANTS = [
  { key: 'base', name: 'Basis', tag: 'Statisch', desc: 'Het originele ontwerp, zonder extra animatie.' },
  { key: 'subtle', name: 'Subtiel', tag: 'Rustig', desc: 'Zachte fade-ins bij het scrollen en soepele hover op knoppen, links en de pijl.' },
  { key: 'elegant', name: 'Elegant', tag: 'Verfijnd', desc: 'Subtiel plus gespreide reveals, een langzame Ken Burns-zoom op de hero-foto en een driftende goudgloed.' },
  { key: 'lively', name: 'Levendig', tag: 'Energiek', desc: 'Elegant plus knoppen met goudgloed, iets meer beweging en een glinstering over de goud-band.' },
] as const;

const KEYS = VARIANTS.map((v) => v.key) as readonly string[];
const STORE_KEY = 'wu-variant';
const DEFAULT_VARIANT = 'lively';
const DEFAULT_VERSION = '2026-06-lively';
const DV_KEY = 'wu-variant-default';

function readVariant(): string {
  try {
    if (localStorage.getItem(DV_KEY) !== DEFAULT_VERSION) {
      localStorage.setItem(DV_KEY, DEFAULT_VERSION);
      localStorage.setItem(STORE_KEY, DEFAULT_VARIANT);
      return DEFAULT_VARIANT;
    }
    const v = localStorage.getItem(STORE_KEY);
    return v && KEYS.includes(v) ? v : DEFAULT_VARIANT;
  } catch {
    return DEFAULT_VARIANT;
  }
}

export function VariantSwitcher() {
  const pathname = usePathname();
  const [active, setActive] = useState<string>(DEFAULT_VARIANT);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Begininstelling uit localStorage + attribuut zetten.
  useEffect(() => {
    const v = readVariant();
    setActive(v);
    document.documentElement.setAttribute('data-wu-variant', v);
  }, []);

  // Scroll-reveal: onthul secties binnen ~90% van de viewport. Re-run bij
  // route-wissel (nieuwe #screen-inhoud), scroll, resize en met enkele timers.
  useEffect(() => {
    const revealNow = () => {
      const sections = document.querySelectorAll('#screen > div > section');
      const h = window.innerHeight || document.documentElement.clientHeight || 800;
      sections.forEach((s) => {
        if (s.classList.contains('wu-in')) return;
        if (s.getBoundingClientRect().top < h * 0.9) s.classList.add('wu-in');
      });
    };
    const root = document.getElementById('screen');
    const mo = root ? new MutationObserver(revealNow) : undefined;
    mo?.observe(root as Node, { childList: true, subtree: true });
    window.addEventListener('scroll', revealNow, { passive: true });
    window.addEventListener('resize', revealNow);
    revealNow();
    const timers = [80, 250, 600, 1200].map((t) => window.setTimeout(revealNow, t));
    return () => {
      mo?.disconnect();
      window.removeEventListener('scroll', revealNow);
      window.removeEventListener('resize', revealNow);
      timers.forEach((t) => clearTimeout(t));
    };
  }, [pathname]);

  // Sluiten bij klik buiten / Escape.
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onEsc);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onEsc); };
  }, [open]);

  const choose = (v: string) => {
    if (!KEYS.includes(v) || v === active) { setOpen(false); return; }
    try { localStorage.setItem(STORE_KEY, v); } catch { /* noop */ }
    // Herlaad zodat de gekozen variant vanuit een schone staat toegepast wordt.
    location.reload();
  };

  const activeName = VARIANTS.find((v) => v.key === active)?.name ?? 'Levendig';

  return (
    <div className="wu-switch" ref={ref}>
      {open && (
        <div className="wu-switch__panel" role="dialog" aria-label="Kies een ontwerpvariant">
          <div className="wu-switch__title">Ontwerpvariant</div>
          {VARIANTS.map((v) => (
            <button key={v.key} className="wu-switch__opt" aria-pressed={active === v.key} onClick={() => choose(v.key)}>
              <span className={'wu-switch__swatch wu-sw-' + v.key} aria-hidden="true" />
              <span className="wu-switch__meta">
                <span className="wu-switch__name">{v.name} <span className="wu-switch__tag">{v.tag}</span></span>
                <span className="wu-switch__desc">{v.desc}</span>
              </span>
            </button>
          ))}
        </div>
      )}
      <button className="wu-switch__fab" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Wissel van ontwerpvariant">
        <span className="wu-dot" />
        <span className="wu-fab-label">{activeName}</span>
      </button>
    </div>
  );
}
