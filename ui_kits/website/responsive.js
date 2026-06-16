// Tiny shared hook: is the viewport mobile-width? Exports window.useIsMobile
function useIsMobile(bp) {
  const limit = bp || 760;
  const [mobile, setMobile] = React.useState(() => (typeof window !== 'undefined' ? window.innerWidth <= limit : false));
  React.useEffect(() => {
    const onResize = () => setMobile(window.innerWidth <= limit);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [limit]);
  return mobile;
}
window.useIsMobile = useIsMobile;
