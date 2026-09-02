// =============================================================================
// PUNTOCLICK — Selección de tipo de usuario para registro
// Server Component — si el usuario ya tiene sesión, redirige a su dashboard
// =============================================================================

import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getSession } from '@/infrastructure/auth/session';

export const metadata: Metadata = {
  title: 'Elige tu camino - PUNTOCLICK',
  description: 'Únete a PuntoClic Nicaragua: el ecosistema que conecta talento con empresas e instituciones líderes.',
};

const DASHBOARD_MAP: Record<string, string> = {
  talento: '/talento/dashboard',
  empresa: '/empresa/dashboard',
  institucion: '/institucion/dashboard',
  admin: '/admin/dashboard',
};

export default async function SelectUserTypePage() {
  // If user is already authenticated, redirect to their dashboard
  const session = await getSession();
  if (session) {
    redirect(DASHBOARD_MAP[session.role] || '/talento/dashboard');
  }

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      {/* TopAppBar */}
      <header className="bg-background flex justify-between items-center w-full px-margin-mobile py-sm top-0 z-50">
        <Link
          href="/"
          className="text-primary hover:opacity-80 transition-opacity active:scale-95 duration-100 flex items-center justify-center p-2 rounded-full"
          aria-label="Volver a inicio"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </Link>
        <h1 className="font-headline-md text-headline-md-mobile text-primary tracking-wider md:text-headline-md uppercase text-center flex-1">
          PUNTOCLICK
        </h1>
        <div className="w-10" aria-hidden="true" />
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col items-center justify-center px-margin-mobile py-xl md:px-lg max-w-container-max mx-auto w-full">
        <div className="text-center mb-xl w-full max-w-2xl">
          <h2 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary mb-sm">
            Selecciona tu Camino
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Únete a la plataforma que está transformando el empleo y la educación en Nicaragua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md md:gap-lg w-full max-w-5xl">
          {/* TALENTO Card */}
          <Link
            href="/auth/register/talento"
            className="group relative flex flex-col items-center p-lg bg-surface-container-low rounded-xl border border-surface-variant shadow-[0_4px_20px_rgba(32,27,18,0.05)] hover:shadow-[0_8px_30px_rgba(120,90,0,0.1)] hover:border-primary transition-all duration-300 text-left w-full h-full"
          >
            <div className="w-20 h-20 mb-md rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors duration-300">
              <span className="material-symbols-outlined text-4xl">person</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-sm w-full text-center">
              TALENTO
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-center flex-1">
              Crea tu perfil profesional, destaca tus habilidades y conecta con empresas nicaragüenses e internacionales que buscan tu talento.
            </p>
            <div className="mt-md px-md py-sm bg-surface rounded-full border border-outline-variant text-on-surface font-label-md text-label-md group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-colors duration-300">
              Unirme como Talento
            </div>
          </Link>

          {/* EMPRESA Card (Featured / Elevated) */}
          <Link
            href="/auth/register/empresa/tipo"
            className="group relative flex flex-col items-center p-lg bg-surface-container-low rounded-xl border border-surface-variant shadow-[0_4px_20px_rgba(32,27,18,0.05)] hover:shadow-[0_8px_30px_rgba(120,90,0,0.1)] hover:border-primary transition-all duration-300 text-left w-full h-full md:-translate-y-4"
          >
            <div className="w-20 h-20 mb-md rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors duration-300">
              <span className="material-symbols-outlined text-4xl">business</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-sm w-full text-center">
              EMPRESA
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-center flex-1">
              Accede al mejor talento tech de Nicaragua, publica vacantes y gestiona tus procesos de atracción con afinidad inteligente.
            </p>
            <div className="mt-md px-md py-sm bg-surface rounded-full border border-outline-variant text-on-surface font-label-md text-label-md group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-colors duration-300">
              Unirme como Empresa
            </div>
          </Link>

          {/* INSTITUCIÓN Card */}
          <Link
            href="/auth/register/institucion/tipo"
            className="group relative flex flex-col items-center p-lg bg-surface-container-low rounded-xl border border-surface-variant shadow-[0_4px_20px_rgba(32,27,18,0.05)] hover:shadow-[0_8px_30px_rgba(120,90,0,0.1)] hover:border-primary transition-all duration-300 text-left w-full h-full"
          >
            <div className="w-20 h-20 mb-md rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors duration-300">
              <span className="material-symbols-outlined text-4xl">account_balance</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-sm w-full text-center">
              INSTITUCIÓN
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-center flex-1">
              Universidades, institutos técnicos y entidades del Estado: alíate al ecosistema y conecta a tus egresados con la industria.
            </p>
            <div className="mt-md px-md py-sm bg-surface rounded-full border border-outline-variant text-on-surface font-label-md text-label-md group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-colors duration-300">
              Unirme como Institución
            </div>
          </Link>
        </div>

        {/* Login link */}
        <p className="mt-xl text-body-md text-on-surface-variant text-center">
          ¿Ya tienes una cuenta?{' '}
          <Link
            href="/auth/login"
            className="font-label-md text-label-md text-primary hover:text-primary-fixed-dim transition-colors ml-1"
          >
            Iniciar sesión
          </Link>
        </p>
      </main>
    </div>
  );
}
