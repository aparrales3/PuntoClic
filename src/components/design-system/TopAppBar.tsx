// =============================================================================
// PUNTOCLICK — Design System: Top App Bar
// Fixed header with PUNTOCLICK brand, from the Stitch design
// =============================================================================

'use client';

import Link from 'next/link';

interface TopAppBarProps {
  /** Show back button */
  showBack?: boolean;
  /** Custom right element */
  right?: React.ReactNode;
  /** User avatar URL (for logged-in state) */
  avatarUrl?: string;
  /** Show hamburger menu (admin/desktop) */
  showMenu?: boolean;
  onMenuClick?: () => void;
}

export function TopAppBar({
  showBack = false,
  right,
  avatarUrl,
  showMenu = false,
  onMenuClick,
}: TopAppBarProps) {
  return (
    <header
      className={[
        'fixed top-0 w-full z-50',
        'bg-[--color-surface]',
        'flex justify-between items-center',
        'px-[--spacing-margin-mobile] h-16',
        'transition-colors',
        'border-none',
        'md:px-[--spacing-xl]',
        'shadow-[0_1px_0_0_var(--color-outline-variant)]',
      ].join(' ')}
    >
      {/* Left: back or menu */}
      {showMenu ? (
        <button
          onClick={onMenuClick}
          aria-label="Abrir menú"
          className="text-[--color-on-surface-variant] hover:bg-[--color-surface-variant] transition-colors p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[--color-primary-fixed-dim]"
        >
          <span className="material-symbols-outlined">grid_view</span>
        </button>
      ) : showBack ? (
        <Link
          href="/"
          className="flex items-center justify-center p-2 text-[--color-primary] hover:opacity-80 transition-opacity active:scale-95 duration-100"
          aria-label="Volver"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
      ) : (
        <div className="w-10" aria-hidden="true" />
      )}

      {/* Center: brand */}
      <Link
        href="/"
        className="text-headline-lg-mobile text-[--color-primary] uppercase tracking-wider font-bold"
      >
        PUNTOCLICK
      </Link>

      {/* Right: avatar or custom element */}
      {right ?? (
        avatarUrl ? (
          <button
            aria-label="Perfil de usuario"
            className="hover:bg-[--color-surface-variant]/50 transition-colors active:scale-95 duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[--color-primary-fixed-dim] relative w-10 h-10 overflow-hidden"
          >
            <img
              src={avatarUrl}
              alt="Avatar"
              className="w-full h-full object-cover rounded-full border-2 border-[--color-surface-container-low]"
            />
          </button>
        ) : (
          <div className="w-10" aria-hidden="true" />
        )
      )}
    </header>
  );
}
