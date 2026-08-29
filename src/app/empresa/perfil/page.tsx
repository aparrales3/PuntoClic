import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Perfil de Empresa - PUNTOCLICK',
  description: 'Información institucional y perfil de TechHive Solutions en PuntoClic.',
};

export default function EmpresaPerfilPage() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-xl py-md md:py-lg flex flex-col gap-xl">
      {/* Header / Identity Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-md md:gap-lg relative">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-surface-container bg-surface-variant flex-shrink-0 relative shadow-sm overflow-hidden flex items-center justify-center">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="TechHive Solutions Logo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCczrlSaaKQtx7ADXZEi_VsUy7GCQKoGMITr-qdm4LOW_D34ZJS7_pZZIygmhjNC69T5orjJq8b_g6y8sViMNHVY_3jGUYGUX8P0hkM5pJLsB7948faEoAeEZYXrUVaojqaqtF41DuHq8mvESYrmDYxDF3Z9JJywlc8N04_opBf0CL-OXKpFYLLFVh9EWetIS45Mt10dJ7vlLWUNDv3RwXAEtew0v4-PSWrMwHFdiShzakemFYkwzEa"
          />
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
          <div className="flex items-center gap-2 mb-xs">
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background">
              TechHive Solutions
            </h1>
            <span className="material-symbols-outlined text-primary text-2xl" title="Verificada">
              verified
            </span>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-sm max-w-2xl">
            Innovando ecosistemas digitales con talento y conexión humana.
          </p>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-md">
            <span className="bg-secondary-container text-on-secondary-container font-label-md text-label-md px-3 py-1 rounded-full">
              Tecnología
            </span>
            <span className="bg-secondary-container text-on-secondary-container font-label-md text-label-md px-3 py-1 rounded-full">
              B2B SaaS
            </span>
            <span className="bg-secondary-container text-on-secondary-container font-label-md text-label-md px-3 py-1 rounded-full">
              Managua, NI
            </span>
          </div>
          <button className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-3 rounded-lg shadow-sm hover:shadow-md hover:bg-primary-fixed-dim transition-all flex items-center gap-2 active:scale-95">
            <span className="material-symbols-outlined text-xl">edit</span>
            Editar Perfil
          </button>
        </div>
      </section>

      {/* Bento Grid Content */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-md">
        {/* Sobre Nosotros */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-md md:p-lg border border-surface-container-high shadow-ambient relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-container/10 rounded-full blur-2xl"></div>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">info</span>
            Sobre nosotros
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
            En TechHive Solutions, creemos en el poder de la conexión. Somos un ecosistema vibrante donde el talento tecnológico se encuentra con oportunidades disruptivas. Nuestra misión es construir herramientas que no solo optimicen procesos, sino que fomenten el crecimiento colaborativo y la innovación constante.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Fundada en 2018, hemos crecido de un pequeño panal de desarrolladores a una colmena global de mentes creativas, siempre manteniendo nuestro enfoque en soluciones centradas en el ser humano y un ambiente de trabajo cálido y dinámico.
          </p>
        </div>

        {/* Stats / Info */}
        <div className="md:col-span-4 flex flex-col gap-md">
          <div className="bg-surface-container-low rounded-xl p-md border border-surface-container-high shadow-sm flex items-center gap-md">
            <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
              <span className="material-symbols-outlined">group</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">
                Tamaño del Equipo
              </p>
              <p className="font-headline-md text-headline-md text-on-background">
                50 - 150 Empleados
              </p>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-xl p-md border border-surface-container-high shadow-sm flex items-center gap-md">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
              <span className="material-symbols-outlined">language</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs">
                Sitio Web
              </p>
              <a
                href="https://techhivesolutions.com"
                target="_blank"
                rel="noreferrer"
                className="font-headline-md text-headline-md text-primary hover:underline text-base truncate block max-w-[200px]"
              >
                techhivesolutions.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
