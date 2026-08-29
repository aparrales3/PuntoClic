// =============================================================================
// PUNTOCLICK — Design System: Top App Bar
// Fixed header with PUNTOCLICK brand & responsive desktop navigation
// =============================================================================

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface TopAppBarProps {
  /** Show back button */
  showBack?: boolean;
  /** Custom onBackClick handler */
  onBackClick?: () => void;
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
  onBackClick,
  right,
  avatarUrl,
  showMenu = false,
  onMenuClick,
}: TopAppBarProps) {
  const pathname = usePathname();

  // Determine portal links for desktop
  const isTalent = pathname.startsWith('/talento');
  const isEmpresa = pathname.startsWith('/empresa');
  const isInstitucion = pathname.startsWith('/institucion');
  const isAdmin = pathname.startsWith('/admin');

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md flex justify-between items-center px-margin-mobile md:px-lg h-16 transition-colors border-b border-surface-variant/40 shadow-xs">
      {/* Left: Brand & Back */}
      <div className="flex items-center gap-4">
        {showMenu ? (
          <button
            onClick={onMenuClick}
            aria-label="Abrir menú"
            className="md:hidden text-on-surface-variant hover:bg-surface-variant transition-colors p-2 rounded-full focus:outline-none cursor-pointer"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        ) : showBack ? (
          onBackClick ? (
            <button
              onClick={onBackClick}
              className="flex items-center justify-center p-2 text-primary hover:opacity-80 transition-opacity active:scale-95 duration-100 rounded-full hover:bg-surface-container cursor-pointer"
              aria-label="Volver"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          ) : (
            <Link
              href="/"
              className="flex items-center justify-center p-2 text-primary hover:opacity-80 transition-opacity active:scale-95 duration-100 rounded-full hover:bg-surface-container"
              aria-label="Volver"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
          )
        ) : null}

        <Link href="/" className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-primary text-2xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            hub
          </span>
          <span className="text-headline-md text-headline-md-mobile md:text-headline-md text-primary font-bold tracking-wider uppercase">
            PUNTOCLICK
          </span>
        </Link>
      </div>

      {/* Center: Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-6">
        {isTalent && (
          <>
            <Link
              href="/talento/dashboard"
              className={`font-label-md text-label-md transition-colors ${
                pathname === '/talento/dashboard'
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/match-center"
              className={`font-label-md text-label-md transition-colors ${
                pathname === '/match-center'
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Match Center
            </Link>
            <Link
              href="/feria"
              className={`font-label-md text-label-md transition-colors ${
                pathname.startsWith('/feria')
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Feria & Eventos
            </Link>
            <Link
              href="/mentores"
              className={`font-label-md text-label-md transition-colors ${
                pathname.startsWith('/mentores')
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Mentores
            </Link>
          </>
        )}

        {isEmpresa && (
          <>
            <Link
              href="/empresa/dashboard"
              className={`font-label-md text-label-md transition-colors ${
                pathname === '/empresa/dashboard'
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/match-talento"
              className={`font-label-md text-label-md transition-colors ${
                pathname === '/match-talento'
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Talentos Compatibles
            </Link>
            <Link
              href="/mapa-necesidades"
              className={`font-label-md text-label-md transition-colors ${
                pathname === '/mapa-necesidades'
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Mapa de Necesidades
            </Link>
            <Link
              href="/empresa/perfil"
              className={`font-label-md text-label-md transition-colors ${
                pathname === '/empresa/perfil'
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Perfil Corporativo
            </Link>
          </>
        )}

        {isInstitucion && (
          <>
            <Link
              href="/institucion/dashboard"
              className={`font-label-md text-label-md transition-colors ${
                pathname === '/institucion/dashboard'
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/institucion/programas"
              className={`font-label-md text-label-md transition-colors ${
                pathname === '/institucion/programas'
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Programas
            </Link>
            <Link
              href="/institucion/perfil"
              className={`font-label-md text-label-md transition-colors ${
                pathname === '/institucion/perfil'
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Directorio Institucional
            </Link>
            <Link
              href="/institucion/configuracion"
              className={`font-label-md text-label-md transition-colors ${
                pathname === '/institucion/configuracion'
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Configuración
            </Link>
          </>
        )}

        {isAdmin && (
          <>
            <Link
              href="/admin/dashboard"
              className={`font-label-md text-label-md transition-colors ${
                pathname === '/admin/dashboard'
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/admin/usuarios"
              className={`font-label-md text-label-md transition-colors ${
                pathname === '/admin/usuarios'
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Usuarios
            </Link>
            <Link
              href="/admin/solicitudes-institucionales"
              className={`font-label-md text-label-md transition-colors ${
                pathname === '/admin/solicitudes-institucionales'
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Solicitudes
            </Link>
          </>
        )}
      </nav>

      {/* Right: Actions & User Avatar */}
      <div className="flex items-center gap-3">
        {right ? (
          right
        ) : avatarUrl ? (
          <Link
            href={isEmpresa ? '/empresa/perfil' : isInstitucion ? '/institucion/perfil' : '/talento/dashboard'}
            aria-label="Perfil de usuario"
            className="hover:ring-2 hover:ring-primary transition-all active:scale-95 duration-200 rounded-full focus:outline-none relative w-10 h-10 overflow-hidden shadow-xs border border-outline-variant/50"
          >
            <img
              src={avatarUrl}
              alt="Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </Link>
        ) : (
          <Link
            href="/auth/login"
            className="text-label-sm font-bold text-primary hover:bg-primary-container/20 px-3 py-1.5 rounded-lg transition-colors"
          >
            Acceder
          </Link>
        )}
      </div>
    </header>
  );
}
