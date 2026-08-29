// =============================================================================
// PUNTOCLICK — Design System: Logout Button
// Clean interactive button with loading state & smooth redirect
// =============================================================================

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface LogoutButtonProps {
  /** Visual variant */
  variant?: 'button' | 'icon' | 'menu-item' | 'chip';
  /** Custom label */
  label?: string;
  /** Additional CSS class names */
  className?: string;
}

export function LogoutButton({
  variant = 'button',
  label = 'Cerrar sesión',
  className = '',
}: LogoutButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (loading) return;

    setLoading(true);
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
    } catch (err) {
      console.error('[Logout Error]:', err);
    } finally {
      // Force hard redirect to login so state is fully reset
      window.location.href = '/auth/login';
    }
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={handleLogout}
        disabled={loading}
        title={label}
        aria-label={label}
        className={`p-2 rounded-full text-on-surface-variant hover:text-error hover:bg-error-container/20 transition-all active:scale-95 duration-150 flex items-center justify-center cursor-pointer disabled:opacity-50 ${className}`}
      >
        <span className="material-symbols-outlined text-[20px]">
          {loading ? 'progress_activity' : 'logout'}
        </span>
      </button>
    );
  }

  if (variant === 'chip') {
    return (
      <button
        onClick={handleLogout}
        disabled={loading}
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-error bg-error-container/20 hover:bg-error-container/40 transition-colors cursor-pointer disabled:opacity-50 ${className}`}
      >
        <span className="material-symbols-outlined text-[14px]">
          {loading ? 'progress_activity' : 'logout'}
        </span>
        <span>{loading ? 'Saliendo...' : label}</span>
      </button>
    );
  }

  if (variant === 'menu-item') {
    return (
      <button
        onClick={handleLogout}
        disabled={loading}
        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-error hover:bg-error-container/20 transition-colors text-left cursor-pointer rounded-lg disabled:opacity-50 ${className}`}
      >
        <span className="material-symbols-outlined text-[18px]">
          {loading ? 'progress_activity' : 'logout'}
        </span>
        <span>{loading ? 'Cerrando sesión...' : label}</span>
      </button>
    );
  }

  // Default 'button' variant
  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-label-md text-label-md font-semibold border border-outline-variant text-on-surface-variant hover:text-error hover:border-error/40 hover:bg-error-container/10 transition-all active:scale-95 duration-150 cursor-pointer disabled:opacity-50 ${className}`}
    >
      <span className="material-symbols-outlined text-[18px]">
        {loading ? 'progress_activity' : 'logout'}
      </span>
      <span>{loading ? 'Cerrando sesión...' : label}</span>
    </button>
  );
}
