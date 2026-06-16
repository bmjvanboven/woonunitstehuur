// Design-variant store + floating switcher + scroll-reveal wiring.
// Exposes: window.WUVariants (metadata), window.useWUVariant (hook),
// window.WUVariantSwitcher (control). The active variant lives in a
// data attribute on <html> so the CSS in variants.css can re-skin the
// whole site (see that file for the mechanism).

(function () {
  // Same base design throughout — these only layer on more motion.
  const VARIANTS = [
    { key: 'base',    name: 'Basis',    tag: 'Statisch', desc: 'Het originele ontwerp, zonder extra animatie.' },
    { key: 'subtle',  name: 'Subtiel',  tag: 'Rustig',   desc: 'Zachte fade-ins bij het scrollen en soepele hover op knoppen, links en de pijl.' },
    { key: 'elegant', name: 'Elegant',  tag: 'Verfijnd', desc: 'Subtiel plus gespreide reveals, een langzame Ken Burns-zoom op de hero-foto en een driftende goudgloed.' },
    { key: 'lively',  name: 'Levendig', tag: 'Energiek', desc: 'Elegant plus knoppen met goudgloed, iets meer beweging en een glinstering over de goud-band.' },
  ];
  const KEYS = VARIANTS.map((v) => v.key);
  const STORE_KEY = 'wu-variant';
  const DEFAULT_VARIANT = 'elegant';
  // Bump DEFAULT_VERSION whenever you change DEFAULT_VARIANT — it re-applies
  // the new default ONCE, even for visitors who already stored an older choice.
  // After that one-time reset their own switches persist normally.
  const DEFAULT_VERSION = '2026-06-elegant';
  const DV_KEY = 'wu-variant-default';

  let current = (function () {
    try {
      if (localStorage.getItem(DV_KEY) !== DEFAULT_VERSION) {
        localStorage.setItem(DV_KEY, DEFAULT_VERSION);
        localStorage.setItem(STORE_KEY, DEFAULT_VARIANT);
        return DEFAULT_VARIANT;
      }
      const v = localStorage.getItem(STORE_KEY);
      return KEYS.indexOf(v) >= 0 ? v : DEFAULT_VARIANT;
    } catch (e) { return DEFAULT_VARIANT; }
  })();

  const listeners = new Set();

  function apply(v) {
    document.documentElement.setAttribute('data-wu-variant', v);
  }
  function getVariant() { return current; }
  function setVariant(v) {
    if (KEYS.indexOf(v) < 0 || v === current) return;
    try { localStorage.setItem(STORE_KEY, v); } catch (e) {}
    // Refresh so the chosen variant applies from a clean state.
    location.reload();
  }
  function useWUVariant() {
    const [v, setV] = React.useState(current);
    React.useEffect(() => {
      const fn = (nv) => setV(nv);
      listeners.add(fn);
      return () => listeners.delete(fn);
    }, []);
    return v;
  }

  // ---- scroll reveal -------------------------------------------------
  // Rect-based (not IntersectionObserver) so it's reliable everywhere:
  // reveals whatever is within ~88% of the viewport, on load + scroll.
  function revealNow() {
    const sections = document.querySelectorAll('#screen > div > section');
    const h = window.innerHeight || document.documentElement.clientHeight || 800;
    sections.forEach((s) => {
      if (s.classList.contains('wu-in')) return;
      if (s.getBoundingClientRect().top < h * 0.9) s.classList.add('wu-in');
    });
  }
  // watch for screen swaps (client-side nav) so new sections reveal too
  function watchScreen() {
    const root = document.getElementById('screen');
    if (!root) { setTimeout(watchScreen, 60); return; }
    new MutationObserver(revealNow).observe(root, { childList: true, subtree: true });
    window.addEventListener('scroll', revealNow, { passive: true });
    window.addEventListener('resize', revealNow);
    revealNow();
    // belt-and-suspenders for late-rendered content / paused rAF
    [80, 250, 600, 1200].forEach((t) => setTimeout(revealNow, t));
  }

  apply(current);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', watchScreen);
  } else { watchScreen(); }

  // ---- the floating switcher ----------------------------------------
  function WUVariantSwitcher() {
    const active = useWUVariant();
    const [open, setOpen] = React.useState(false);
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (!open) return;
      const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
      const onEsc = (e) => { if (e.key === 'Escape') setOpen(false); };
      document.addEventListener('mousedown', onDoc);
      document.addEventListener('keydown', onEsc);
      return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onEsc); };
    }, [open]);

    return (
      <div className="wu-switch" ref={ref}>
        {open && (
          <div className="wu-switch__panel" role="dialog" aria-label="Kies een ontwerpvariant">
            <div className="wu-switch__title">Ontwerpvariant</div>
            {VARIANTS.map((v) => (
              <button
                key={v.key}
                className="wu-switch__opt"
                aria-pressed={active === v.key}
                onClick={() => { setVariant(v.key); }}
              >
                <span className={'wu-switch__swatch wu-sw-' + v.key} aria-hidden="true" />
                <span className="wu-switch__meta">
                  <span className="wu-switch__name">{v.name} <span className="wu-switch__tag">{v.tag}</span></span>
                  <span className="wu-switch__desc">{v.desc}</span>
                </span>
              </button>
            ))}
          </div>
        )}
        <button
          className="wu-switch__fab"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Wissel van ontwerpvariant"
        >
          <span className="wu-dot" />
          <span className="wu-fab-label">{VARIANTS.find((v) => v.key === active).name}</span>
        </button>
      </div>
    );
  }

  window.WUVariants = VARIANTS;
  window.useWUVariant = useWUVariant;
  window.getWUVariant = getVariant;
  window.setWUVariant = setVariant;
  window.WUVariantSwitcher = WUVariantSwitcher;
})();
