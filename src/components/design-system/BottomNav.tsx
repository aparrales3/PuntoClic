// =============================================================================
// PUNTOCLICK — Design System: Bottom Navigation (Mobile)
// Fixed at bottom, rounded-t-xl, 5 items, from Stitch design
// =============================================================================

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavItem {
  href: string;
  icon: string;
  label: string;
  badge?: number;
}

interface BottomNavProps {
  items: NavItem[];
}

export function BottomNav({ items }: BottomNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={[
        'fixed bottom-0 left-0 w-full',
        'flex justify-around items-center',
        'h-20 pb-safe px-[--spacing-base]',
        'bg-[--color-surface]',
        'shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)]',
        'rounded-t-[--radius-xl]',
        'z-50',
        'md:hidden',
      ].join(' ')}
      aria-label="Navegación principal"
    >
      {items.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

        return (
          <Link
            key={item.href}
            href={item.href}
            className={[
              'flex flex-col items-center justify-center',
              'px-4 py-1',
              'active:scale-90 transition-transform duration-150',
              'relative',
              isActive
                ? 'bg-[--color-primary-container] text-[--color-on-primary-container] rounded-[--radius-full]'
                : 'text-[--color-on-surface-variant] hover:text-[--color-primary]',
            ].join(' ')}
            aria-label={item.label}
            aria-current={isActive ? 'page' : undefined}
          >
            <span
              className="material-symbols-outlined"
              style={{
                fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              {item.icon}
            </span>
            {item.badge !== undefined && item.badge > 0 && (
              <span
                className="absolute top-1 right-3 w-2.5 h-2.5 bg-[--color-error] rounded-full border-2 border-[--color-surface]"
                aria-label={`${item.badge} notificaciones`}
              />
            )}
            <span className="text-label-sm mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

/* --- Preset nav items for each portal --- */

export const talentNavItems: NavItem[] = [
  { href: '/talento/dashboard', icon: 'home', label: 'Inicio' },
  { href: '/talento/oportunidades', icon: 'search', label: 'Explorar' },
  { href: '/talento/matches', icon: 'handshake', label: 'Matches' },
  { href: '/talento/mensajes', icon: 'chat_bubble', label: 'Mensajes' },
  { href: '/talento/perfil', icon: 'person', label: 'Perfil' },
];

export const companyNavItems: NavItem[] = [
  { href: '/empresa/dashboard', icon: 'home', label: 'Inicio' },
  { href: '/empresa/candidatos', icon: 'group', label: 'Candidatos' },
  { href: '/empresa/matches', icon: 'handshake', label: 'Matches' },
  { href: '/empresa/vacantes', icon: 'work', label: 'Vacantes' },
  { href: '/empresa/perfil', icon: 'business', label: 'Perfil' },
];

export const institutionNavItems: NavItem[] = [
  { href: '/institucion/dashboard', icon: 'home', label: 'Inicio' },
  { href: '/institucion/programas', icon: 'school', label: 'Programas' },
  { href: '/institucion/estudiantes', icon: 'group', label: 'Estudiantes' },
  { href: '/institucion/perfil', icon: 'account_balance', label: 'Perfil' },
];
