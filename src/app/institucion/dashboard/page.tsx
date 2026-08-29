'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InstitucionDashboardPage() {
  const [activeTab, setActiveTab] = useState<'impacto' | 'programas'>('impacto');

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-lg py-md md:py-xl space-y-lg pb-24 md:pb-12 selection:bg-primary-container selection:text-on-primary-container">
      {/* Welcome Section with Verified Badge & Tab Switcher */}
      <section className="flex flex-col md:flex-row gap-md items-start md:items-center justify-between">
        <div className="space-y-sm max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full font-label-sm text-label-sm font-bold shadow-xs">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            Institución Aprobada • ID: PC-INS-000127
          </div>
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-background font-bold">
            Hola, <span className="text-primary">Universidad Central</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {activeTab === 'impacto'
              ? 'Tu ecosistema de talento está en movimiento. Aquí tienes un resumen de tu impacto hoy.'
              : 'Gestión activa de programas académicos, convocatorias de pasantías y empresas aliadas.'}
          </p>
        </div>

        {/* View Switcher & Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="p-1 bg-surface-container rounded-xl flex items-center border border-outline-variant/40">
            <button
              type="button"
              onClick={() => setActiveTab('impacto')}
              className={`px-4 py-2 rounded-lg text-label-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'impacto'
                  ? 'bg-primary text-on-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-sm">groups</span>
              Impacto & Talento
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('programas')}
              className={`px-4 py-2 rounded-lg text-label-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'programas'
                  ? 'bg-primary text-on-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-sm">school</span>
              Programas Activos
            </button>
          </div>

          <Link
            href="/institucion/programas"
            className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2.5 rounded-xl hover:opacity-90 transition-all shadow-xs flex items-center gap-2 font-bold"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            Crear Programa
          </Link>
        </div>
      </section>

      {/* VIEW 1: IMPACTO Y ALCANCE (from dashboard_institucional_puntoclick) */}
      {activeTab === 'impacto' && (
        <div className="space-y-lg animate-fade-in">
          {/* Bento Grid Dashboard */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-md md:gap-lg">
            {/* Hero Metric: Talento Alcanzado */}
            <div className="md:col-span-8 bg-surface-container-lowest border border-surface-dim rounded-2xl p-md md:p-lg shadow-ambient flex flex-col justify-between relative overflow-hidden group hover:border-primary-container transition-colors">
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl group-hover:bg-primary-container/30 transition-all" />
              <div className="relative z-10 flex justify-between items-start mb-lg">
                <div>
                  <h2 className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2 uppercase tracking-wider font-bold">
                    <span className="material-symbols-outlined text-primary">groups</span>
                    Talento Alcanzado
                  </h2>
                </div>
                <div className="bg-surface-container px-3 py-1 rounded-full font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 font-bold">
                  <span className="material-symbols-outlined text-[14px] text-secondary">trending_up</span> +12% este mes
                </div>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="font-headline-xl-mobile text-headline-xl-mobile md:text-[56px] md:leading-[64px] font-bold text-on-background">
                    4,250
                  </span>
                  <p className="font-body-sm text-body-md text-on-surface-variant mt-1">
                    estudiantes interactuando con tus programas académicos
                  </p>
                </div>
                {/* Visual Connection Nodes */}
                <div className="flex space-x-[-8px]">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest border-2 border-surface-container-lowest flex items-center justify-center font-bold text-xs">
                    CS
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container border-2 border-surface-container-lowest flex items-center justify-center font-bold text-xs">
                    AM
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container border-2 border-surface-container-lowest flex items-center justify-center font-bold text-xs">
                    +4k
                  </div>
                </div>
              </div>
            </div>

            {/* Metric: Oportunidades */}
            <div className="md:col-span-4 bg-primary-container text-on-primary-container rounded-2xl p-md md:p-lg shadow-ambient flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <h3 className="font-label-md text-label-md font-bold flex items-center gap-2 opacity-90">
                  <span className="material-symbols-outlined">work_outline</span>
                  Oportunidades
                </h3>
                <Link
                  href="/match-center"
                  className="bg-on-primary-container/10 p-1.5 rounded-full hover:bg-on-primary-container/20 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
              <div className="mt-8">
                <span className="font-headline-xl text-headline-xl font-bold">24</span>
                <p className="font-body-md text-body-md opacity-90 mt-1">Activas y publicadas</p>
              </div>
            </div>

            {/* Metric: Programas Activos */}
            <div className="md:col-span-4 bg-surface-container-lowest border border-surface-dim rounded-2xl p-md md:p-lg shadow-ambient flex flex-col justify-between hover:border-secondary-fixed transition-colors">
              <div className="flex justify-between items-start mb-lg">
                <h3 className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2 font-bold">
                  <span className="material-symbols-outlined text-secondary">account_tree</span>
                  Programas en Curso
                </h3>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg font-bold text-on-background">
                    8
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant">en marcha</span>
                </div>
                <div className="mt-4 w-full bg-surface-container h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full" style={{ width: '75%' }} />
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-2 text-right">
                  75% de cupos cubiertos
                </p>
              </div>
            </div>

            {/* Metric: Convocatorias */}
            <div className="md:col-span-4 bg-surface-container-lowest border border-surface-dim rounded-2xl p-md md:p-lg shadow-ambient flex flex-col justify-between hover:border-tertiary-fixed transition-colors">
              <div className="flex justify-between items-start mb-lg">
                <h3 className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2 font-bold">
                  <span className="material-symbols-outlined text-tertiary">campaign</span>
                  Convocatorias Abiertas
                </h3>
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg font-bold text-on-background">
                    3
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant">activas</span>
                </div>
                <p className="font-label-sm text-label-sm text-primary mt-3 flex items-center gap-1 font-bold">
                  <span className="material-symbols-outlined text-[14px]">schedule</span> Cierran en 5 días
                </p>
              </div>
            </div>

            {/* Metric: Empresas Aliadas */}
            <div className="md:col-span-4 bg-surface-container-lowest border border-surface-dim rounded-2xl p-md md:p-lg shadow-ambient flex items-center justify-between hover:bg-surface-bright transition-colors cursor-pointer group">
              <div>
                <h3 className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2 mb-2 font-bold">
                  <span className="material-symbols-outlined">handshake</span>
                  Empresas Aliadas
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-background group-hover:text-primary transition-colors">
                    15
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary-container transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-primary-container">
                  arrow_forward
                </span>
              </div>
            </div>
          </section>

          {/* Quick Access Sections */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-md pt-md border-t border-surface-variant">
            {/* Direct Link 1 */}
            <Link
              href="/institucion/programas"
              className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-md shadow-ambient hover:shadow-ambient-md transition-all cursor-pointer relative overflow-hidden group"
            >
              <div className="w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  monitoring
                </span>
              </div>
              <div className="flex-grow">
                <h4 className="font-headline-md text-lg font-bold text-on-background mb-1 group-hover:text-secondary transition-colors">
                  Estadísticas Detalladas
                </h4>
                <p className="font-body-md text-sm text-on-surface-variant">
                  Analiza el rendimiento de tus programas y el engagement de estudiantes.
                </p>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-on-background transition-colors">
                chevron_right
              </span>
            </Link>

            {/* Direct Link 2 */}
            <Link
              href="/feria"
              className="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-md shadow-ambient hover:shadow-ambient-md transition-all cursor-pointer relative overflow-hidden group"
            >
              <div className="w-16 h-16 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  event_upcoming
                </span>
              </div>
              <div className="flex-grow">
                <h4 className="font-headline-md text-lg font-bold text-on-background mb-1 group-hover:text-tertiary transition-colors">
                  Gestión de Ferias y Eventos
                </h4>
                <p className="font-body-md text-sm text-on-surface-variant">
                  Planifica ferias de empleo, webinars y sesiones de mentoreo.
                </p>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-on-background transition-colors">
                chevron_right
              </span>
            </Link>
          </section>
        </div>
      )}

      {/* VIEW 2: GESTIÓN DE PROGRAMAS (from dashboard_institucional_puntoclick_conectado) */}
      {activeTab === 'programas' && (
        <div className="space-y-lg animate-fade-in">
          {/* Active Programs Cohorts */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {/* Program 1 */}
            <div className="bg-surface-container-lowest rounded-2xl p-md md:p-lg border border-surface-variant shadow-ambient">
              <div className="flex justify-between items-start mb-3">
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-bold">
                  Cohorte 2024-B
                </span>
                <span className="text-label-sm font-semibold text-emerald-700">En marcha</span>
              </div>
              <h3 className="font-headline-md text-lg font-bold text-on-background mb-1">
                Semillero de Inteligencia Artificial
              </h3>
              <p className="text-body-md text-sm text-on-surface-variant mb-4">
                Capacitación intensiva en Python, PyTorch y arquitecturas LLM para 60 estudiantes.
              </p>
              <div className="space-y-1 mb-4">
                <div className="flex justify-between text-label-sm text-on-surface-variant">
                  <span>Progreso del Módulo 3</span>
                  <span className="font-bold">68%</span>
                </div>
                <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '68%' }} />
                </div>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-surface-variant/30">
                <span className="text-label-sm text-on-surface-variant">54 Estudiantes Activos</span>
                <Link
                  href="/institucion/programas"
                  className="text-label-sm font-bold text-primary hover:underline"
                >
                  Gestionar →
                </Link>
              </div>
            </div>

            {/* Program 2 */}
            <div className="bg-surface-container-lowest rounded-2xl p-md md:p-lg border border-surface-variant shadow-ambient">
              <div className="flex justify-between items-start mb-3">
                <span className="px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-label-sm font-bold">
                  Pasantías 2024
                </span>
                <span className="text-label-sm font-semibold text-primary">Convocatoria</span>
              </div>
              <h3 className="font-headline-md text-lg font-bold text-on-background mb-1">
                Vinculación Laboral Directa
              </h3>
              <p className="text-body-md text-sm text-on-surface-variant mb-4">
                Alianza con 15 empresas tecnológicas para inserción de graduados de ingeniería.
              </p>
              <div className="space-y-1 mb-4">
                <div className="flex justify-between text-label-sm text-on-surface-variant">
                  <span>Plazas Asignadas</span>
                  <span className="font-bold">85%</span>
                </div>
                <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-surface-variant/30">
                <span className="text-label-sm text-on-surface-variant">38 Matches Concretados</span>
                <Link
                  href="/institucion/programas"
                  className="text-label-sm font-bold text-primary hover:underline"
                >
                  Gestionar →
                </Link>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
