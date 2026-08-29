// =============================================================================
// PUNTOCLICK — User Type Selection Page
// Reproduced from seleccionar_tipo_de_usuario/code.html
// =============================================================================

import type { Metadata } from 'next';
import Link from 'next/link';
import { TopAppBar } from '@/components/design-system';

export const metadata: Metadata = {
  title: 'Elige tu rol',
  description: 'Únete al ecosistema PuntoClic como Talento, Empresa o Institución.',
};

const roles = [
  {
    id: 'talento',
    title: 'TALENTO',
    description:
      'Crea tu portafolio vivo, muestra tus habilidades y conecta con empresas e instituciones que buscan tu expertise.',
    icon: 'person',
    href: '/auth/register/talento',
    cta: 'Unirme como Talento',
    featured: false,
  },
  {
    id: 'empresa',
    title: 'EMPRESA',
    description:
      'Describe tus "dolores" y necesidades — sin saber qué profesional necesitas. El sistema encuentra el talento correcto para ti.',
    icon: 'business',
    href: '/auth/register/empresa',
    cta: 'Unirme como Empresa',
    featured: true, // elevated card in the middle
  },
  {
    id: 'institucion',
    title: 'INSTITUCIÓN',
    description:
      'Conecta tu institución con el ecosistema, valida habilidades y abre puertas entre el talento y la industria.',
    icon: 'account_balance',
    href: '/auth/register/institucion',
    cta: 'Unirme como Institución',
    featured: false,
  },
];

export default function SelectUserTypePage() {
  return (
    <div className="bg-[--color-background] min-h-screen flex flex-col">
      <TopAppBar showBack />

      <main className="flex-grow flex flex-col items-center justify-center px-[--spacing-margin-mobile] py-[--spacing-xl] pt-24">
        {/* Header */}
        <div className="text-center mb-[--spacing-xl] w-full max-w-2xl animate-fade-in">
          <h1 className="text-headline-xl-mobile md:text-headline-xl text-[--color-primary] mb-[--spacing-sm]">
            Elige tu camino
          </h1>
          <p className="text-body-lg text-[--color-on-surface-variant]">
            Elige cómo quieres unirte al ecosistema PuntoClic para comenzar.
          </p>
        </div>

        {/* Role cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[--spacing-md] md:gap-[--spacing-lg] w-full max-w-5xl animate-fade-in">
          {roles.map((role) => (
            <Link
              key={role.id}
              href={role.href}
              className={[
                'group relative flex flex-col items-center p-[--spacing-lg]',
                'bg-[--color-surface-container-low] rounded-[--radius-xl]',
                'border border-[--color-surface-variant]',
                'shadow-ambient',
                'hover:shadow-[0_8px_30px_rgba(120,90,0,0.1)] hover:border-[--color-primary]',
                'transition-all duration-300',
                'text-center w-full h-full',
                role.featured ? 'md:-translate-y-4' : '',
              ].join(' ')}
            >
              {/* Icon */}
              <div
                className={[
                  'w-20 h-20 mb-[--spacing-md] rounded-full flex items-center justify-center',
                  'bg-[--color-secondary-container] text-[--color-on-secondary-container]',
                  'group-hover:bg-[--color-primary-container] group-hover:text-[--color-on-primary-container]',
                  'transition-colors duration-300',
                ].join(' ')}
              >
                <span className="material-symbols-outlined text-4xl">{role.icon}</span>
              </div>

              {/* Title */}
              <h2 className="text-headline-lg-mobile md:text-headline-lg text-[--color-primary] mb-[--spacing-sm] w-full">
                {role.title}
              </h2>

              {/* Description */}
              <p className="text-body-md text-[--color-on-surface-variant] flex-1">
                {role.description}
              </p>

              {/* CTA pill */}
              <div
                className={[
                  'mt-[--spacing-md] px-[--spacing-md] py-[--spacing-sm]',
                  'bg-[--color-surface] rounded-[--radius-full]',
                  'border border-[--color-outline-variant]',
                  'text-[--color-on-surface] text-label-md',
                  'group-hover:bg-[--color-primary] group-hover:text-[--color-on-primary] group-hover:border-[--color-primary]',
                  'transition-colors duration-300',
                ].join(' ')}
              >
                {role.cta}
              </div>
            </Link>
          ))}
        </div>

        {/* Login link */}
        <p className="mt-[--spacing-xl] text-body-md text-[--color-on-surface-variant] animate-fade-in">
          ¿Ya tienes cuenta?{' '}
          <Link
            href="/auth/login"
            className="text-label-md text-[--color-primary] hover:underline"
          >
            Iniciar sesión
          </Link>
        </p>
      </main>
    </div>
  );
}
