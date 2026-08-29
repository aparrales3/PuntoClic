import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PUNTOCLICK - Welcome',
  description: 'Conectamos talento, empresas e instituciones.',
};

export default function WelcomePage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md selection:bg-primary selection:text-on-primary">
      {/* Linear/Transactional Page - Navigation Shell Suppressed */}
      <main className="flex-grow flex flex-col md:flex-row relative overflow-hidden">
        {/* Decorative Ambient Blur */}
        <div className="absolute top-0 right-0 -mt-32 -mr-32 w-96 h-96 bg-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>

        {/* Content Canvas */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-margin-mobile md:p-xl z-10 relative">
          {/* Brand Logo (Standalone for Welcome Screen) */}
          <div className="mb-lg">
            <span className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary tracking-wider">
              PUNTOCLICK
            </span>
          </div>

          {/* Hero Text */}
          <div className="max-w-[448px]">
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-md">
              Conectamos talento, empresas e instituciones.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
              Descubre un ecosistema donde profesionales y organizaciones colaboran para impulsar el crecimiento mutuo en un entorno moderno y eficiente.
            </p>

            {/* Actions */}
            <div className="flex flex-col gap-sm">
              {/* Primary Button: Login */}
              <Link
                href="/auth/login"
                className="w-full bg-primary text-on-primary font-label-md text-label-md py-sm px-md rounded-lg shadow-sm hover:shadow-md hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-200 flex items-center justify-center gap-xs group"
              >
                <span>Iniciar Sesión</span>
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">login</span>
              </Link>

              {/* Secondary Button: Cómo funciona */}
              <Link
                href="/como-funciona"
                className="w-full bg-surface-container border border-outline-variant text-on-surface font-label-md text-label-md py-sm px-md rounded-lg hover:bg-surface-container-high transition-colors duration-200 flex items-center justify-center gap-xs"
              >
                <span className="material-symbols-outlined text-[20px]">help_outline</span>
                <span>Cómo funciona</span>
              </Link>
            </div>

            {/* Tertiary Link: Register */}
            <div className="mt-lg text-center">
              <span className="font-body-md text-body-md text-on-surface-variant">¿No tienes cuenta?</span>
              <Link
                href="/auth/register"
                className="font-label-md text-label-md text-primary hover:text-primary-container underline underline-offset-4 ml-xs transition-colors"
              >
                Seleccionar tipo de usuario
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image Canvas (Hidden on small mobile, present on md+) */}
        <div className="hidden md:block md:w-1/2 relative min-h-[500px] h-screen">
          <div className="absolute inset-0 bg-surface-container-high p-md">
            <div
              className="w-full h-full rounded-xl bg-cover bg-center shadow-lg border border-outline-variant relative overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuArXlNnGOIRY2qFvybxeHGtCdhHg9C_5SAXTCNQuz68y8kca-OUsbACGLsFB79V-8199Smfv1AZKcfW6bO5KL2SowfsxD-rGCn18B8dVgf6Y2FiMXOuJGhx0rsxXGaULB7q3oCugZP45zl4uF5Ej_Awd4fvPepJOXcwB6Z9LJxIfB6um3LNgMHdIplvPU8PjLtm4EB-tUYIxmeFUC60PlaeI0xaEsiE-afeAhGj3UpaDY_FCthJOiu6')",
              }}
            >
              {/* Subtle overlay to ensure image blends with theme */}
              <div className="absolute inset-0 bg-gradient-to-tr from-surface-bright/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

