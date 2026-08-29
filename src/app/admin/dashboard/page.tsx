'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'operaciones'>('general');

  return (
    <main className="flex-grow p-margin-mobile md:p-lg lg:p-xl max-w-container-max mx-auto w-full pb-32 md:pb-lg selection:bg-primary-container selection:text-on-primary-container">
      {/* Header with Title and Mode Switcher */}
      <header className="mb-lg flex flex-col md:flex-row justify-between items-start md:items-end gap-md">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              admin_panel_settings
            </span>
            <span className="text-label-sm font-bold text-primary tracking-wider uppercase">
              Consola de Administración
            </span>
          </div>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary font-bold">
            {activeTab === 'general' ? 'Resumen General del Ecosistema' : 'Panel Operativo Conectado'}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {activeTab === 'general'
              ? 'Métricas globales en tiempo real de talento, empresas, instituciones y mentores.'
              : 'Gestión de solicitudes, acciones inmediatas, convocatorias y reportes del sistema.'}
          </p>
        </div>

        {/* View Switcher & Action buttons */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="p-1 bg-surface-container rounded-xl flex items-center border border-outline-variant/40">
            <button
              type="button"
              onClick={() => setActiveTab('general')}
              className={`px-4 py-2 rounded-lg text-label-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'general'
                  ? 'bg-primary text-on-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-sm">analytics</span>
              Resumen General
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('operaciones')}
              className={`px-4 py-2 rounded-lg text-label-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'operaciones'
                  ? 'bg-primary text-on-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-sm">hub</span>
              Operaciones
            </button>
          </div>

          <button
            type="button"
            className="bg-surface-container text-on-surface-variant px-4 py-2.5 rounded-xl font-label-sm text-label-sm border border-outline-variant hover:bg-surface-container-high transition-colors flex items-center gap-2 font-semibold shadow-xs"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            Exportar
          </button>
        </div>
      </header>

      {/* VIEW 1: RESUMEN GENERAL (From admin_dashboard_puntoclick) */}
      {activeTab === 'general' && (
        <div className="space-y-xl animate-fade-in">
          {/* 8-KPI Bento Grid */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-md">
            {/* Card 1: Users */}
            <div className="bg-surface-container-lowest rounded-2xl p-md shadow-ambient border border-surface-container-high hover:shadow-ambient-md transition-all duration-200">
              <div className="flex items-center justify-between mb-sm">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  group
                </span>
                <span className="text-xs font-label-sm bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-bold">
                  +12%
                </span>
              </div>
              <h3 className="font-label-md text-label-md text-on-surface-variant mb-1 font-medium">
                Usuarios Totales
              </h3>
              <p className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-background">
                12,450
              </p>
            </div>

            {/* Card 2: Talent */}
            <div className="bg-surface-container-lowest rounded-2xl p-md shadow-ambient border border-surface-container-high hover:shadow-ambient-md transition-all duration-200">
              <div className="flex items-center justify-between mb-sm">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  person_search
                </span>
                <span className="text-xs font-label-sm bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-bold">
                  +5%
                </span>
              </div>
              <h3 className="font-label-md text-label-md text-on-surface-variant mb-1 font-medium">
                Talentos
              </h3>
              <p className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-background">
                8,320
              </p>
            </div>

            {/* Card 3: Companies */}
            <div className="bg-surface-container-lowest rounded-2xl p-md shadow-ambient border border-surface-container-high hover:shadow-ambient-md transition-all duration-200">
              <div className="flex items-center justify-between mb-sm">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  business
                </span>
                <span className="text-xs font-label-sm bg-primary-container text-on-primary-container px-2 py-0.5 rounded-full font-bold">
                  Activas
                </span>
              </div>
              <h3 className="font-label-md text-label-md text-on-surface-variant mb-1 font-medium">
                Empresas
              </h3>
              <p className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-background">
                1,142
              </p>
            </div>

            {/* Card 4: Institutions */}
            <div className="bg-surface-container-lowest rounded-2xl p-md shadow-ambient border border-surface-container-high hover:shadow-ambient-md transition-all duration-200">
              <div className="flex items-center justify-between mb-sm">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  account_balance
                </span>
                <span className="text-xs font-label-sm bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded-full font-bold">
                  Verificadas
                </span>
              </div>
              <h3 className="font-label-md text-label-md text-on-surface-variant mb-1 font-medium">
                Instituciones
              </h3>
              <p className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-background">
                84
              </p>
            </div>

            {/* Card 5: Mentors */}
            <div className="bg-surface-container-lowest rounded-2xl p-md shadow-ambient border border-surface-container-high hover:shadow-ambient-md transition-all duration-200">
              <div className="flex items-center justify-between mb-sm">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  school
                </span>
                <span className="text-xs font-label-sm bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-bold">
                  +18%
                </span>
              </div>
              <h3 className="font-label-md text-label-md text-on-surface-variant mb-1 font-medium">
                Mentores
              </h3>
              <p className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-background">
                450
              </p>
            </div>

            {/* Card 6: Matches */}
            <div className="bg-primary-container rounded-2xl p-md shadow-ambient border border-primary-fixed-dim hover:shadow-ambient-md transition-all duration-200">
              <div className="flex items-center justify-between mb-sm">
                <span className="material-symbols-outlined text-on-primary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  handshake
                </span>
                <span className="text-xs font-label-sm bg-on-primary-container text-primary-container px-2 py-0.5 rounded-full font-bold">
                  98% Éxito
                </span>
              </div>
              <h3 className="font-label-md text-label-md text-on-primary-container mb-1 font-medium">
                Matches Totales
              </h3>
              <p className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-primary-fixed">
                3,890
              </p>
            </div>

            {/* Card 7: Opportunities */}
            <div className="bg-surface-container-lowest rounded-2xl p-md shadow-ambient border border-surface-container-high hover:shadow-ambient-md transition-all duration-200">
              <div className="flex items-center justify-between mb-sm">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  work
                </span>
                <span className="text-xs font-label-sm bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full font-bold">
                  Abiertas
                </span>
              </div>
              <h3 className="font-label-md text-label-md text-on-surface-variant mb-1 font-medium">
                Oportunidades
              </h3>
              <p className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-background">
                524
              </p>
            </div>

            {/* Card 8: Events */}
            <div className="bg-surface-container-lowest rounded-2xl p-md shadow-ambient border border-surface-container-high hover:shadow-ambient-md transition-all duration-200">
              <div className="flex items-center justify-between mb-sm">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  event
                </span>
                <span className="text-xs font-label-sm bg-primary-container text-on-primary-container px-2 py-0.5 rounded-full font-bold">
                  Feria 2024
                </span>
              </div>
              <h3 className="font-label-md text-label-md text-on-surface-variant mb-1 font-medium">
                Eventos & Ferias
              </h3>
              <p className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-on-background">
                32
              </p>
            </div>
          </section>

          {/* Activity & Quick Operations Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
            {/* Recent Activity Timeline */}
            <section className="lg:col-span-2 bg-surface-container-low rounded-2xl p-md md:p-lg shadow-ambient border border-surface-container-highest">
              <h3 className="font-headline-md text-headline-md font-bold text-on-background mb-md">
                Actividad Reciente en el Ecosistema
              </h3>
              <div className="space-y-sm relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-tertiary-fixed-dim">
                {/* Item 1 */}
                <div className="relative flex items-start gap-4 pl-12">
                  <div className="absolute left-2.5 -translate-x-1/2 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed shadow-xs z-10">
                    <span className="material-symbols-outlined text-sm">new_releases</span>
                  </div>
                  <div className="w-full p-4 rounded-xl bg-surface-container-lowest shadow-ambient border border-outline-variant/40">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        Nueva Institución Registrada
                      </span>
                      <time className="font-label-sm text-label-sm text-on-surface-variant">Hace 10 min</time>
                    </div>
                    <p className="font-body-md text-body-md text-on-background">
                      Universidad Central completó su solicitud de validación de credenciales.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative flex items-start gap-4 pl-12">
                  <div className="absolute left-2.5 -translate-x-1/2 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-primary-container text-on-primary-container shadow-xs z-10">
                    <span className="material-symbols-outlined text-sm">handshake</span>
                  </div>
                  <div className="w-full p-4 rounded-xl bg-surface-container-lowest shadow-ambient border border-outline-variant/40">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        Match Confirmado
                      </span>
                      <time className="font-label-sm text-label-sm text-on-surface-variant">Hace 1 hora</time>
                    </div>
                    <p className="font-body-md text-body-md text-on-background">
                      Talento Alejandro P. fue vinculado a la vacante Frontend Senior en TechCorp.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative flex items-start gap-4 pl-12">
                  <div className="absolute left-2.5 -translate-x-1/2 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant shadow-xs z-10">
                    <span className="material-symbols-outlined text-sm">campaign</span>
                  </div>
                  <div className="w-full p-4 rounded-xl bg-surface-container-lowest shadow-ambient border border-outline-variant/40">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-label-sm text-label-sm text-emerald-700 font-bold">
                        Convocatoria Abierta
                      </span>
                      <time className="font-label-sm text-label-sm text-on-surface-variant">Hace 3 horas</time>
                    </div>
                    <p className="font-body-md text-body-md text-on-background">
                      Programa Semillero Tech 2024 abrió 150 nuevos cupos para estudiantes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Actions Panel */}
            <section className="bg-surface-container-low rounded-2xl p-md md:p-lg shadow-ambient border border-surface-container-highest flex flex-col justify-between">
              <div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-background mb-md">
                  Acciones Rápidas
                </h3>
                <div className="flex flex-col gap-sm">
                  <Link
                    href="/admin/solicitudes-institucionales"
                    className="w-full flex items-center justify-between bg-primary text-on-primary font-label-md text-label-md py-3 px-4 rounded-xl shadow-xs hover:opacity-90 transition-all font-bold"
                  >
                    <span>Verificar Solicitudes</span>
                    <span className="material-symbols-outlined text-lg">verified</span>
                  </Link>

                  <Link
                    href="/admin/usuarios"
                    className="w-full flex items-center justify-between bg-surface-container-lowest text-on-surface border border-outline-variant font-label-md text-label-md py-3 px-4 rounded-xl hover:bg-surface-container transition-all font-semibold"
                  >
                    <span>Gestionar Usuarios</span>
                    <span className="material-symbols-outlined text-lg">group</span>
                  </Link>

                  <Link
                    href="/feria"
                    className="w-full flex items-center justify-between bg-secondary-container text-on-secondary-container font-label-md text-label-md py-3 px-4 rounded-xl hover:bg-secondary-fixed transition-all font-semibold"
                  >
                    <span>Configurar Feria Virtual</span>
                    <span className="material-symbols-outlined text-lg">event</span>
                  </Link>
                </div>
              </div>

              <div className="mt-md pt-md border-t border-outline-variant/30">
                <p className="text-label-sm text-on-surface-variant text-center">
                  Último respaldo de seguridad: Hoy a las 04:00 AM
                </p>
              </div>
            </section>
          </div>
        </div>
      )}

      {/* VIEW 2: OPERACIONES CONECTADAS (From admin_dashboard_puntoclick_conectado) */}
      {activeTab === 'operaciones' && (
        <div className="space-y-xl animate-fade-in">
          {/* Bento Grid: Key Metrics & Quick Actions */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            {/* Metric Card 1: Usuarios Totales with bars */}
            <div className="bg-surface-container-lowest rounded-2xl p-md md:p-lg shadow-ambient border border-surface-container-high col-span-1 lg:col-span-2 flex flex-col justify-between hover:shadow-ambient-md transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-label-md text-label-md text-on-surface-variant flex items-center gap-2 font-bold">
                    <span className="material-symbols-outlined text-primary">groups</span>
                    Usuarios Totales Activos
                  </h3>
                  <span className="bg-secondary-container text-on-secondary-container px-2.5 py-1 rounded-full font-label-sm text-label-sm font-bold">
                    +12% este mes
                  </span>
                </div>
                <p className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-4 font-bold">
                  24,592
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <div className="flex flex-col flex-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">
                    Talentos (65%)
                  </span>
                  <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[65%]" />
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">
                    Empresas (25%)
                  </span>
                  <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[25%]" />
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <span className="font-label-sm text-label-sm text-on-surface-variant mb-1 font-medium">
                    Instituciones (10%)
                  </span>
                  <div className="h-2 w-full bg-surface-variant rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary w-[10%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Metric Card 2: Matches */}
            <div className="bg-surface-container-lowest rounded-2xl p-md md:p-lg shadow-ambient border border-surface-container-high hover:shadow-ambient-md transition-all">
              <h3 className="font-label-md text-label-md text-on-surface-variant mb-2 flex items-center gap-2 font-bold">
                <span className="material-symbols-outlined text-secondary">handshake</span>
                Matches Exitosos
              </h3>
              <p className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-2 font-bold">
                1,204
              </p>
              <p className="font-label-sm text-label-sm text-tertiary font-semibold">
                Promedio 40/día
              </p>
              <div className="mt-4 flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary-container border-2 border-surface-container-lowest flex items-center justify-center text-on-primary-container font-label-sm text-label-sm font-bold">
                  JD
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary-container border-2 border-surface-container-lowest flex items-center justify-center text-on-secondary-container font-label-sm text-label-sm font-bold">
                  AC
                </div>
                <div className="w-8 h-8 rounded-full bg-tertiary-container border-2 border-surface-container-lowest flex items-center justify-center text-on-tertiary-container font-label-sm text-label-sm font-bold">
                  MR
                </div>
                <div className="w-8 h-8 rounded-full bg-surface-variant border-2 border-surface-container-lowest flex items-center justify-center text-on-surface-variant font-label-sm text-label-sm font-bold">
                  +
                </div>
              </div>
            </div>

            {/* Quick Actions Column */}
            <div className="flex flex-col gap-sm">
              <Link
                className="bg-primary text-on-primary font-label-md text-label-md rounded-xl py-3 px-4 flex items-center justify-between hover:bg-on-primary-fixed-variant transition-colors shadow-xs font-bold"
                href="/admin/solicitudes-institucionales"
              >
                Verificar Instituciones
                <span className="material-symbols-outlined">verified</span>
              </Link>
              <Link
                className="bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-xl py-3 px-4 flex items-center justify-between hover:bg-secondary-fixed transition-colors shadow-xs font-bold"
                href="/mentores"
              >
                Gestionar Mentores
                <span className="material-symbols-outlined">manage_accounts</span>
              </Link>
              <Link
                className="bg-surface-container-lowest text-primary font-label-md text-label-md rounded-xl py-3 px-4 flex items-center justify-between border-2 border-primary-container hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-xs font-bold"
                href="/feria"
              >
                Nueva Convocatoria
                <span className="material-symbols-outlined">add_circle</span>
              </Link>
            </div>
          </section>

          {/* Detailed Modules Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
            {/* Active Opportunities List */}
            <div className="lg:col-span-2 bg-surface-container-lowest rounded-2xl p-md md:p-lg shadow-ambient border border-surface-container-high">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-headline-md text-headline-md text-on-background font-bold">
                  Oportunidades y Convocatorias Activas
                </h2>
                <Link
                  className="font-label-md text-label-md text-primary hover:underline font-bold"
                  href="/match-center"
                >
                  Ver todas
                </Link>
              </div>

              <div className="flex flex-col gap-4">
                {/* Job Item 1 */}
                <div className="flex flex-col md:flex-row justify-between md:items-center p-4 bg-surface rounded-xl border border-surface-container hover:border-primary-container transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center text-on-primary-container shadow-xs">
                      <span className="material-symbols-outlined">code</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-on-background font-bold group-hover:text-primary transition-colors">
                        Desarrollador Frontend Jr.
                      </h4>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        TechCorp Inc. • Remoto • Managua
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-xl font-label-sm text-label-sm font-bold">
                      45 Postulantes
                    </span>
                    <span className="material-symbols-outlined text-tertiary">chevron_right</span>
                  </div>
                </div>

                {/* Job Item 2 */}
                <div className="flex flex-col md:flex-row justify-between md:items-center p-4 bg-surface rounded-xl border border-surface-container hover:border-primary-container transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center text-on-primary-container shadow-xs">
                      <span className="material-symbols-outlined">palette</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-on-background font-bold group-hover:text-primary transition-colors">
                        UI/UX Product Designer
                      </h4>
                      <p className="font-label-sm text-label-sm text-on-surface-variant">
                        Studio Creative • Híbrido
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-xl font-label-sm text-label-sm font-bold">
                      28 Postulantes
                    </span>
                    <span className="material-symbols-outlined text-tertiary">chevron_right</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Distribution Chart Card */}
            <div className="bg-surface-container-lowest rounded-2xl p-md md:p-lg shadow-ambient border border-surface-container-high flex flex-col items-center justify-center text-center">
              <h3 className="font-headline-md text-headline-md text-on-background mb-6 w-full text-left font-bold">
                Distribución de Ecosistema
              </h3>
              <div className="relative w-48 h-48 rounded-full flex items-center justify-center mb-6 bg-gradient-to-tr from-primary via-secondary to-tertiary p-1">
                <div className="w-36 h-36 bg-surface-container-lowest rounded-full shadow-inner flex flex-col items-center justify-center">
                  <span className="font-headline-md text-headline-md text-on-background font-bold">
                    100%
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Nodos Conectados
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 w-full text-center text-xs">
                <div className="p-2 bg-surface rounded-lg">
                  <p className="font-bold text-primary">65%</p>
                  <p className="text-on-surface-variant">Talento</p>
                </div>
                <div className="p-2 bg-surface rounded-lg">
                  <p className="font-bold text-secondary">25%</p>
                  <p className="text-on-surface-variant">Empresas</p>
                </div>
                <div className="p-2 bg-surface rounded-lg">
                  <p className="font-bold text-tertiary">10%</p>
                  <p className="text-on-surface-variant">Institución</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
