// =============================================================================
// PUNTOCLICK — Design System: Top App Bar
// Fixed header with PUNTOCLICK brand, responsive navigation & User Menu / Logout
// =============================================================================

'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoutButton } from './LogoutButton';
import { ProfileAvatar } from './ProfileAvatar';

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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine portal links for desktop
  const isTalent = pathname.startsWith('/talento');
  const isEmpresa = pathname.startsWith('/empresa');
  const isInstitucion = pathname.startsWith('/institucion');
  const isAdmin = pathname.startsWith('/admin');
  const isAuthPortal = isTalent || isEmpresa || isInstitucion || isAdmin;

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const profileUrl = isEmpresa
    ? '/empresa/perfil'
    : isInstitucion
    ? '/institucion/perfil'
    : isTalent
    ? '/talento/perfil'
    : '/admin/dashboard';

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md flex justify-between items-center px-margin-mobile md:px-lg h-16 transition-colors border-b border-surface-variant/40 shadow-xs">
        {/* Left: Brand & Back */}
        <div className="flex items-center gap-3">
          {showMenu || isAuthPortal ? (
            <button
              onClick={onMenuClick || (() => setMobileDrawerOpen(true))}
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
                href="/talento/perfil"
                className={`font-label-md text-label-md transition-colors ${
                  pathname === '/talento/perfil'
                    ? 'text-primary font-bold border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Mi Perfil
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
                Directorio
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

        {/* Right: Actions & User Avatar / Logout */}
        <div className="flex items-center gap-2 md:gap-3">
          {right ? (
            right
          ) : isAuthPortal || avatarUrl ? (
            <div className="flex items-center gap-2" ref={dropdownRef}>
              {/* Quick Logout Button for Desktop */}
              <div className="hidden sm:block">
                <LogoutButton variant="icon" label="Cerrar sesión" />
              </div>

              {/* Avatar Dropdown Trigger */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-label="Menú de usuario"
                  aria-expanded={dropdownOpen}
                  className="hover:ring-2 hover:ring-primary transition-all active:scale-95 duration-200 rounded-full focus:outline-none cursor-pointer flex items-center justify-center shadow-xs"
                >
                  <ProfileAvatar
                    src={avatarUrl}
                    name={isEmpresa ? 'Empresa Aliada' : isInstitucion ? 'Institución Educativa' : 'Usuario'}
                    type={isEmpresa ? 'company' : isInstitucion ? 'institution' : 'talent'}
                    size="sm"
                  />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-surface-container-lowest rounded-2xl shadow-xl border border-surface-container-high py-2 z-50 animate-fade-in-up">
                    <div className="px-4 py-2 border-b border-surface-container-high">
                      <p className="text-xs font-medium text-on-surface-variant">Cuenta activa</p>
                      <p className="text-sm font-bold text-on-surface truncate">
                        {isTalent
                          ? 'Talento Profesional'
                          : isEmpresa
                          ? 'Empresa Aliada'
                          : isInstitucion
                          ? 'Institución Educativa'
                          : 'Administrador'}
                      </p>
                    </div>

                    <div className="py-1">
                      <Link
                        href={profileUrl}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-on-surface hover:bg-surface-container transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px] text-primary">person</span>
                        <span>Ver Perfil</span>
                      </Link>

                      <Link
                        href="/configuracion/permisos"
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-on-surface hover:bg-surface-container transition-colors"
                      >
                        <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                          settings
                        </span>
                        <span>Configuración</span>
                      </Link>
                    </div>

                    <div className="pt-1 border-t border-surface-container-high">
                      <LogoutButton variant="menu-item" />
                    </div>
                  </div>
                )}
              </div>
            </div>
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

      {/* Mobile Drawer (When hamburger menu is opened) */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed inset-y-0 left-0 w-4/5 max-w-xs bg-surface-container-lowest shadow-2xl flex flex-col justify-between p-6 z-10 border-r border-surface-container-high animate-slide-in-right">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-surface-container-high mb-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-2xl">hub</span>
                  <span className="font-bold text-primary tracking-wider uppercase">PUNTOCLICK</span>
                </div>
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container"
                  aria-label="Cerrar menú"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1">
                {isTalent && (
                  <>
                    <Link
                      href="/talento/dashboard"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-on-surface hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-primary">dashboard</span>
                      Inicio
                    </Link>
                    <Link
                      href="/talento/perfil"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-on-surface hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-primary">person</span>
                      Mi Perfil
                    </Link>
                    <Link
                      href="/match-center"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-on-surface hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-primary">handshake</span>
                      Match Center
                    </Link>
                    <Link
                      href="/feria"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-on-surface hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-primary">celebration</span>
                      Feria & Eventos
                    </Link>
                    <Link
                      href="/mentores"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-on-surface hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-primary">school</span>
                      Mentores
                    </Link>
                  </>
                )}

                {isEmpresa && (
                  <>
                    <Link
                      href="/empresa/dashboard"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-on-surface hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-primary">dashboard</span>
                      Dashboard
                    </Link>
                    <Link
                      href="/match-talento"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-on-surface hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-primary">group</span>
                      Talentos Compatibles
                    </Link>
                    <Link
                      href="/mapa-necesidades"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-on-surface hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-primary">explore</span>
                      Mapa de Necesidades
                    </Link>
                    <Link
                      href="/empresa/perfil"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-on-surface hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-primary">business</span>
                      Perfil Corporativo
                    </Link>
                  </>
                )}

                {isInstitucion && (
                  <>
                    <Link
                      href="/institucion/dashboard"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-on-surface hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-primary">dashboard</span>
                      Dashboard
                    </Link>
                    <Link
                      href="/institucion/programas"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-on-surface hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-primary">menu_book</span>
                      Programas
                    </Link>
                    <Link
                      href="/institucion/perfil"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm text-on-surface hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-primary">account_balance</span>
                      Directorio
                    </Link>
                  </>
                )}
              </nav>
            </div>

            {/* Drawer Footer with Logout */}
            <div className="pt-4 border-t border-surface-container-high">
              <LogoutButton variant="button" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
