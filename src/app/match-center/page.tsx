import type { Metadata } from 'next';
import Link from 'next/link';
import { ProfileAvatar } from '@/components/design-system';

export const metadata: Metadata = {
  title: 'Match Center - PUNTOCLICK',
  description: 'Descubre tus conexiones ideales en el ecosistema PuntoClic.',
};

export default function MatchCenterPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      <main className="max-w-container-max mx-auto p-margin-mobile md:p-md lg:p-lg w-full flex-grow pb-24 md:pb-lg">
        {/* Header Section */}
        <div className="mb-xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              hub
            </span>
            <span className="text-label-sm font-bold text-primary tracking-wider uppercase">
              Ecosistema de Conexiones
            </span>
          </div>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-2 font-bold">
            Match Center
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Descubre tus conexiones ideales. Afinidad inteligente entre talento, empresas e instituciones.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
          {/* Empresa Card */}
          <div className="md:col-span-4 bg-surface-container-lowest rounded-2xl shadow-ambient border border-surface-container p-md flex flex-col items-center text-center relative overflow-hidden group hover:shadow-ambient-md transition-all">
            <div className="absolute top-0 left-0 w-full h-20 bg-secondary-container/40 z-0 rounded-t-2xl" />
            <div className="z-10 relative mb-4 mt-4">
              <ProfileAvatar
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=300&fit=crop&auto=format"
                name="TechHive Nicaragua"
                type="company"
                size="xl"
                rounded="2xl"
                verified={true}
              />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background z-10 font-bold">
              TechHive Nicaragua
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4 z-10">
              Desarrollo de Software & Soluciones Digitales
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4 z-10">
              <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full font-label-sm text-label-sm font-semibold">
                React / Node
              </span>
              <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full font-label-sm text-label-sm font-semibold">
                Innovación
              </span>
              <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 rounded-full font-label-sm text-label-sm font-semibold">
                Managua
              </span>
            </div>
            <Link
              href="/empresa/perfil"
              className="mt-auto w-full border-2 border-primary text-primary py-2.5 rounded-xl font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors z-10 font-bold text-center"
            >
              Ver Perfil Corporativo
            </Link>
          </div>

          {/* Match Score Card */}
          <div className="md:col-span-4 bg-primary-container rounded-2xl shadow-ambient p-md flex flex-col items-center justify-center text-center text-on-primary-container relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                backgroundSize: '16px 16px',
              }}
            />
            <span className="material-symbols-outlined text-4xl mb-2 relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>
              handshake
            </span>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-2 relative z-10 font-bold">
              Índice de Afinidad
            </h3>
            {/* Circular progress */}
            <div className="relative w-36 h-36 flex items-center justify-center mb-4 z-10">
              <svg className="w-full h-full transform -rotate-90 absolute inset-0" viewBox="0 0 100 100">
                <circle
                  className="opacity-20"
                  cx="50" cy="50" fill="none" r="42"
                  stroke="currentColor" strokeWidth="8"
                />
                <circle
                  cx="50" cy="50" fill="none" r="42"
                  stroke="currentColor"
                  strokeDasharray="264"
                  strokeDashoffset="26.4"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
              <div className="text-center">
                <span className="font-headline-xl text-headline-xl font-bold block leading-none">90%</span>
                <span className="text-label-sm font-semibold opacity-80">match</span>
              </div>
            </div>
            <p className="font-body-md text-body-md relative z-10 font-semibold">
              ¡Match Altamente Recomendado!
            </p>
            <button
              type="button"
              className="mt-4 relative z-10 bg-on-primary-container text-primary-container font-label-md text-label-md px-6 py-2.5 rounded-xl hover:opacity-90 transition-all font-bold cursor-pointer"
            >
              Conectar Ahora
            </button>
          </div>

          {/* Talento Card */}
          <div className="md:col-span-4 bg-surface-container-lowest rounded-2xl shadow-ambient border border-surface-container p-md flex flex-col items-center text-center relative overflow-hidden hover:shadow-ambient-md transition-all">
            <div className="absolute top-0 left-0 w-full h-20 bg-primary-container/30 z-0 rounded-t-2xl" />
            <div className="z-10 relative mb-4 mt-4">
              <ProfileAvatar
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face&auto=format"
                name="Alejandro Martínez"
                type="talent"
                size="xl"
                verified={true}
              />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background z-10 font-bold">
              Alejandro Martínez
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4 z-10">
              Desarrollador Full Stack Semi-Senior
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4 z-10">
              <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full font-label-sm text-label-sm font-semibold">
                React
              </span>
              <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full font-label-sm text-label-sm font-semibold">
                Next.js
              </span>
              <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full font-label-sm text-label-sm font-semibold">
                PostgreSQL
              </span>
            </div>
            <Link
              href="/talento/perfil"
              className="mt-auto w-full border-2 border-primary text-primary py-2.5 rounded-xl font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors z-10 font-bold text-center"
            >
              Ver Perfil de Talento
            </Link>
          </div>

          {/* Desafío Actual */}
          <div className="md:col-span-6 bg-surface-container-lowest rounded-2xl shadow-ambient border border-surface-container p-md">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-error-container text-on-error-container rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">warning</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-background font-bold">
                Desafío Actual del Match
              </h4>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Migración de infraestructura legada a arquitectura cloud nativa con tiempo de inactividad cero. Se requiere experiencia en Kubernetes, Terraform y DevOps avanzado.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-error-container text-on-error-container px-2.5 py-1 rounded-full font-semibold">
                Alta Prioridad
              </span>
              <span className="text-xs bg-surface-container-high text-on-surface px-2.5 py-1 rounded-full font-semibold">
                Kubernetes
              </span>
              <span className="text-xs bg-surface-container-high text-on-surface px-2.5 py-1 rounded-full font-semibold">
                Terraform
              </span>
              <span className="text-xs bg-surface-container-high text-on-surface px-2.5 py-1 rounded-full font-semibold">
                DevOps
              </span>
            </div>
          </div>

          {/* Mentor Sugerido */}
          <div className="md:col-span-6 bg-surface-container-low rounded-2xl shadow-ambient border border-surface-container p-md flex items-center gap-md relative overflow-hidden hover:shadow-ambient-md transition-all cursor-pointer group">
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary-container opacity-50 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="w-16 h-16 rounded-full bg-tertiary-container text-on-tertiary-container border-2 border-surface shadow-xs z-10 flex items-center justify-center font-bold text-xl shrink-0">
              ER
            </div>
            <div className="z-10 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  workspace_premium
                </span>
                <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
                  Mentor Sugerido
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-background font-bold">
                Dra. Elena Rios
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Especialista en Cloud Architecture & DevOps · 8 años de experiencia
              </p>
            </div>
            <Link
              href="/mentores"
              className="z-10 bg-surface-container text-on-surface p-2 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-colors group-hover:scale-110 duration-200"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </Link>
          </div>
        </div>

        {/* Additional Matches Section */}
        <section className="mt-xl">
          <div className="flex justify-between items-center mb-md">
            <h2 className="font-headline-md text-headline-md font-bold text-on-background">
              Otras Conexiones Recomendadas
            </h2>
            <Link href="/match-talento" className="text-label-sm font-bold text-primary hover:underline">
              Ver todas
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-md">
            {[
              { initials: 'AP', name: 'Ana Pérez', role: 'UX/UI Designer', match: 95, color: 'bg-secondary-container text-on-secondary-container' },
              { initials: 'JM', name: 'Juan Mora', role: 'Data Analyst', match: 88, color: 'bg-tertiary-container text-on-tertiary-container' },
              { initials: 'SL', name: 'Sofía López', role: 'Project Manager', match: 82, color: 'bg-primary-container text-on-primary-container' },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-surface-container-lowest rounded-2xl p-md border border-surface-container shadow-ambient flex items-center gap-md hover:shadow-ambient-md transition-all cursor-pointer group"
              >
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center font-bold text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-label-md text-label-md text-on-background font-bold truncate">{t.name}</p>
                  <p className="text-label-sm text-on-surface-variant truncate">{t.role}</p>
                </div>
                <span className="text-label-sm font-bold text-primary bg-primary-container/50 px-2.5 py-1 rounded-full shrink-0">
                  {t.match}%
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
