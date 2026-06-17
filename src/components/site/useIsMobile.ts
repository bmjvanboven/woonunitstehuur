'use client';
import { useEffect, useState } from 'react';

// Is de viewport mobiel-breed? Start op false (SSR-veilig, geen hydration-mismatch)
// en meet de echte breedte na mount.
export function useIsMobile(bp = 760) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth <= bp);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [bp]);
  return mobile;
}
