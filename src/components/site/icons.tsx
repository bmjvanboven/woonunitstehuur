// Lucide-stijl lijn-iconen (2px stroke) — geport uit ui_kits/website/icons.jsx.
import React from 'react';

export type IconProps = { size?: number; style?: React.CSSProperties };

const make = (paths: string[], w = 20) =>
  function Icon({ size, style }: IconProps) {
    const s = size || w;
    return (
      <svg
        width={s}
        height={s}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={style}
      >
        {paths.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
    );
  };

export const Ruler = make(['M3 8h18v8H3z', 'M7 8v3', 'M11 8v4', 'M15 8v3', 'M19 8v4']);
export const Bed = make(['M3 18v-6h18v6', 'M3 12V7a1 1 0 0 1 1-1h6v6', 'M21 12V9a2 2 0 0 0-2-2h-7']);
export const Users = make(['M16 19a4 4 0 0 0-8 0', 'M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6', 'M20 19a3 3 0 0 0-4-2.8', 'M4 19a3 3 0 0 1 4-2.8']);
export const Bath = make(['M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z', 'M6 12V6a2 2 0 0 1 2-2 2 2 0 0 1 2 2', 'M6 19l-1 2', 'M19 19l1 2']);
export const Phone = make(['M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z']);
export const Mail = make(['M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z', 'm3 7 9 6 9-6']);
export const Arrow = make(['M5 12h14', 'M13 6l6 6-6 6']);
export const ArrowDown = make(['M12 5v14', 'M6 13l6 6 6-6']);
export const Check = make(['M20 6 9 17l-5-5']);
export const Clock = make(['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', 'M12 7v5l3 2']);
export const Truck = make(['M3 6h11v9H3z', 'M14 9h4l3 3v3h-7z', 'M7 18a2 2 0 1 0 0 .01', 'M18 18a2 2 0 1 0 0 .01']);
export const Shield = make(['M12 3l8 3v6c0 4-3.5 7.5-8 9-4.5-1.5-8-5-8-9V6z', 'M9 12l2 2 4-4']);
export const Snowflake = make(['M12 3v18', 'M3 12h18', 'm6 6 12 12', 'm18 6-12 12']);
export const MapPin = make(['M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z', 'M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6']);
export const Menu = make(['M3 6h18', 'M3 12h18', 'M3 18h18']);
export const Star = make(['M12 3.5l2.6 5.5 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z']);
export const Home = make(['M3 11l9-8 9 8', 'M5 10v10h14V10']);

export const Icons = {
  Ruler, Bed, Users, Bath, Phone, Mail, Arrow, ArrowDown, Check, Clock,
  Truck, Shield, Snowflake, MapPin, Menu, Star, Home,
};
export type IconName = keyof typeof Icons;
