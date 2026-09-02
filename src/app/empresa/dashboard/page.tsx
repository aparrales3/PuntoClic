'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ProfileAvatar } from '@/components/design-system';

export default function EmpresaDashboardPage() {
  const [activeTab, setActiveTab] = useState<'acciones' | 'rendimiento'>('acciones');

  return (
    <main className="flex-1 max-w-container-max mx-auto px-margin-mobile md:px-lg flex flex-col gap-md pb-24 md:pb-12 selection:bg-primary-container selection:text-on-primary-container">
      {/* Header Section */}
      <section className="mt-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-sm">
        <div>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold mb-xs">
            Dashboard Empresa
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {activeTab === 'acciones'
              ? 'Aquí está el resumen de tu ecosistema y acciones operativas de hoy.'
              : 'Métricas de reclutamiento, candidatos activos y rendimiento semanal.'}
          </p>
        </div>

        {/* View Switcher & Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="p-1 bg-surface-container rounded-xl flex items-center border border-outline-variant/40">
            <button
              type="button"
              onClick={() => setActiveTab('acciones')}
              className={`px-4 py-2 rounded-lg text-label-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'acciones'
                  ? 'bg-primary text-on-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-sm">hub</span>
              Acciones & Matches
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('rendimiento')}
              className={`px-4 py-2 rounded-lg text-label-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'rendimiento'
                  ? 'bg-primary text-on-primary shadow-xs'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-sm">bar_chart</span>
              Estadísticas
            </button>
          </div>

          <Link
            href="/match-talento"
            className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2.5 rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-xs flex items-center gap-xs font-bold"
          >
            <span className="material-symbols-outlined text-[18px]">person_search</span>
            Buscar Talentos
          </Link>
        </div>
      </section>

      {/* VIEW 1: ACCIONES DEL DÍA & MATCHES (from dashboard_empresa_puntoclick_conectado) */}
      {activeTab === 'acciones' && (
        <div className="flex flex-col gap-md animate-fade-in">
          {/* Highlight: ¿Qué necesitas resolver? */}
          <section className="bg-primary-container rounded-2xl p-md md:p-lg shadow-ambient relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-[30%] rotate-12 blur-xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-md">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-primary-container font-bold mb-xs">
                  ¿Qué necesitas resolver hoy?
                </h2>
                <p className="font-body-md text-body-md text-on-primary-container/90">
                  Conecta con el talento verificado ideal para tus retos y proyectos actuales.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-sm shrink-0">
                <Link
                  className="bg-surface text-primary font-label-md text-label-md py-sm px-md rounded-xl shadow-xs flex items-center justify-center gap-xs hover:bg-surface-container-lowest transition-colors active:scale-95 duration-150 font-bold"
                  href="/match-talento"
                >
                  <span className="material-symbols-outlined text-[20px]">person_search</span>
                  Buscar Talentos
                </Link>
                <Link
                  className="bg-transparent border-2 border-on-primary-container text-on-primary-container font-label-md text-label-md py-sm px-md rounded-xl flex items-center justify-center gap-xs hover:bg-white/10 transition-colors active:scale-95 duration-150 font-bold"
                  href="/match-center"
                >
                  <span className="material-symbols-outlined text-[20px]">handshake</span>
                  Mis Matches
                </Link>
              </div>
            </div>
          </section>

          {/* Bento Grid: Stats */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-sm md:gap-md">
            {/* Vacantes Card */}
            <div className="col-span-1 bg-surface-container-lowest rounded-2xl p-md shadow-ambient border border-surface-variant flex flex-col justify-between h-36 hover:shadow-ambient-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">
                  Vacantes
                </span>
                <span className="material-symbols-outlined text-tertiary">work</span>
              </div>
              <div>
                <span className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold">
                  12
                </span>
                <p className="font-label-sm text-label-sm text-secondary font-semibold">
                  Activas (+2%)
                </p>
              </div>
            </div>

            {/* Matches Card */}
            <div className="col-span-1 bg-surface-container-lowest rounded-2xl p-md shadow-ambient border border-surface-variant flex flex-col justify-between h-36 hover:shadow-ambient-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">
                  Matches
                </span>
                <span className="material-symbols-outlined text-primary">handshake</span>
              </div>
              <div>
                <span className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold">
                  48
                </span>
                <p className="font-label-sm text-label-sm text-secondary font-semibold">
                  Nuevos (+15%)
                </p>
              </div>
            </div>

            {/* Alertas */}
            <Link
              className="col-span-2 bg-error-container/30 rounded-2xl p-md shadow-ambient border border-error-container flex items-center gap-sm hover:bg-error-container/40 transition-colors"
              href="/match-center"
            >
              <div className="bg-error-container text-on-error-container w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-on-background font-bold mb-xs">
                  Atención Requerida
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                  2 vacantes expiran en menos de 48 horas. Revisa los candidatos recomendados.
                </p>
              </div>
            </Link>
          </section>

          {/* Talento Recomendado Grid */}
          <section className="mt-sm">
            <div className="flex items-center justify-between mb-sm">
              <h3 className="font-headline-md text-headline-md text-on-background font-bold">
                Talento Recomendado por Afinidad
              </h3>
              <Link
                href="/match-talento"
                className="font-label-md text-label-md text-primary font-bold hover:underline"
              >
                Ver todos
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-md">
              {/* Talent Card 1: Alejandro Martínez */}
              <Link
                href="/match-talento"
                className="bg-surface-container-lowest rounded-2xl p-md shadow-ambient border border-surface-variant flex flex-col items-center text-center hover:shadow-ambient-md hover:border-primary/40 transition-all group"
              >
                <ProfileAvatar
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face&auto=format"
                  name="Alejandro Martínez"
                  type="talent"
                  size="lg"
                  verified={true}
                  className="mb-sm"
                />
                <h4 className="font-label-md text-label-md text-on-background font-bold group-hover:text-primary transition-colors">
                  Alejandro Martínez
                </h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-xs">
                  Full Stack Semi-Senior • React, Node.js
                </p>
                <p className="text-[11px] text-on-surface-variant/80 mb-sm">
                  Managua, Nicaragua
                </p>
                <div className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-3 py-1 rounded-full w-full font-bold flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-xs">auto_awesome</span>
                  95% Match
                </div>
              </Link>

              {/* Talent Card 2: María José Silva */}
              <Link
                href="/match-talento"
                className="bg-surface-container-lowest rounded-2xl p-md shadow-ambient border border-surface-variant flex flex-col items-center text-center hover:shadow-ambient-md hover:border-primary/40 transition-all group"
              >
                <ProfileAvatar
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format"
                  name="María José Silva"
                  type="talent"
                  size="lg"
                  verified={true}
                  className="mb-sm"
                />
                <h4 className="font-label-md text-label-md text-on-background font-bold group-hover:text-primary transition-colors">
                  María José Silva
                </h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-xs">
                  Product Designer Lead • Figma, UX/UI
                </p>
                <p className="text-[11px] text-on-surface-variant/80 mb-sm">
                  León, Nicaragua
                </p>
                <div className="bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-3 py-1 rounded-full w-full font-bold flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-xs">auto_awesome</span>
                  92% Match
                </div>
              </Link>

              {/* Talent Card 3: Valeria Chamorro (Generic Template Avatar) */}
              <Link
                href="/match-talento"
                className="bg-surface-container-lowest rounded-2xl p-md shadow-ambient border border-surface-variant flex flex-col items-center text-center hover:shadow-ambient-md hover:border-primary/40 transition-all group"
              >
                <ProfileAvatar
                  src={null}
                  name="Valeria Chamorro"
                  type="talent"
                  size="lg"
                  verified={true}
                  className="mb-sm"
                />
                <h4 className="font-label-md text-label-md text-on-background font-bold group-hover:text-primary transition-colors">
                  Valeria Chamorro
                </h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-xs">
                  Data Scientist & BI • Python, ML, SQL
                </p>
                <p className="text-[11px] text-on-surface-variant/80 mb-sm">
                  Managua, Nicaragua
                </p>
                <div className="bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm px-3 py-1 rounded-full w-full font-bold flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-xs">auto_awesome</span>
                  91% Match
                </div>
              </Link>
            </div>
          </section>
        </div>
      )}

      {/* VIEW 2: ESTADÍSTICAS & RENDIMIENTO (from dashboard_empresa_puntoclick) */}
      {activeTab === 'rendimiento' && (
        <div className="flex flex-col gap-md animate-fade-in">
          {/* Bento Grid: Stats Summary */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-sm md:gap-md">
            {/* Card 1: Vacantes Activas */}
            <div className="bg-surface-container-lowest rounded-2xl p-md shadow-ambient border border-surface-container flex flex-col justify-between hover:shadow-ambient-md transition-shadow">
              <div className="flex justify-between items-start mb-sm">
                <span
                  className="material-symbols-outlined text-primary bg-primary-fixed p-2 rounded-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  work
                </span>
                <span className="font-label-sm text-label-sm text-secondary flex items-center font-bold">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>+2%
                </span>
              </div>
              <div>
                <h3 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-bold">
                  12
                </h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Vacantes Activas</p>
              </div>
            </div>

            {/* Card 2: Candidatos Nuevos */}
            <div className="bg-surface-container-lowest rounded-2xl p-md shadow-ambient border border-surface-container flex flex-col justify-between hover:shadow-ambient-md transition-shadow">
              <div className="flex justify-between items-start mb-sm">
                <span
                  className="material-symbols-outlined text-secondary bg-secondary-container p-2 rounded-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  group
                </span>
                <span className="font-label-sm text-label-sm text-secondary flex items-center font-bold">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>+15%
                </span>
              </div>
              <div>
                <h3 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-bold">
                  48
                </h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Candidatos Nuevos</p>
              </div>
            </div>

            {/* Card 3: Matches */}
            <div className="bg-surface-container-lowest rounded-2xl p-md shadow-ambient border border-surface-container flex flex-col justify-between hover:shadow-ambient-md transition-shadow">
              <div className="flex justify-between items-start mb-sm">
                <span
                  className="material-symbols-outlined text-tertiary bg-tertiary-container p-2 rounded-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  handshake
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center font-semibold">
                  <span className="material-symbols-outlined text-[14px]">trending_flat</span>0%
                </span>
              </div>
              <div>
                <h3 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-bold">
                  8
                </h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Matches Exitosos</p>
              </div>
            </div>

            {/* Card 4: Problemas */}
            <div className="bg-surface-container-lowest rounded-2xl p-md shadow-ambient border border-surface-container flex flex-col justify-between hover:shadow-ambient-md transition-shadow">
              <div className="flex justify-between items-start mb-sm">
                <span
                  className="material-symbols-outlined text-error bg-error-container p-2 rounded-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  warning
                </span>
                <span className="font-label-sm text-label-sm text-error flex items-center font-bold">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>+1
                </span>
              </div>
              <div>
                <h3 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-bold">
                  3
                </h3>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Problemas Reportados</p>
              </div>
            </div>
          </section>

          {/* Complex Layout Section: Chart & Activity */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-md">
            {/* Chart Area */}
            <div className="lg:col-span-2 bg-surface-container-lowest rounded-2xl p-md md:p-lg shadow-ambient border border-surface-container flex flex-col">
              <div className="flex justify-between items-center mb-md">
                <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface font-bold">
                  Estadísticas Semanales de Reclutamiento
                </h2>
                <span className="text-label-sm text-on-surface-variant font-medium">Últimos 7 días</span>
              </div>

              {/* CSS Bar Chart */}
              <div className="flex-grow flex items-end justify-between gap-3 h-48 md:h-64 mt-sm border-b border-surface-container-high pb-xs relative">
                <div className="w-full bg-surface-variant rounded-t-lg h-[40%] hover:bg-primary-container transition-colors relative group">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-sm text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface px-2 py-0.5 rounded">
                    20
                  </span>
                </div>
                <div className="w-full bg-surface-variant rounded-t-lg h-[65%] hover:bg-primary-container transition-colors relative group">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-sm text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface px-2 py-0.5 rounded">
                    32
                  </span>
                </div>
                <div className="w-full bg-primary-container rounded-t-lg h-[90%] shadow-sm relative group">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-sm text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface px-2 py-0.5 rounded">
                    45
                  </span>
                </div>
                <div className="w-full bg-surface-variant rounded-t-lg h-[50%] hover:bg-primary-container transition-colors relative group">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-sm text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface px-2 py-0.5 rounded">
                    25
                  </span>
                </div>
                <div className="w-full bg-surface-variant rounded-t-lg h-[75%] hover:bg-primary-container transition-colors relative group">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-label-sm text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface px-2 py-0.5 rounded">
                    38
                  </span>
                </div>
              </div>
              <div className="flex justify-between mt-2 px-2 text-on-surface-variant font-label-sm text-xs font-semibold">
                <span>Lun</span>
                <span>Mar</span>
                <span>Mié</span>
                <span>Jue</span>
                <span>Vie</span>
              </div>
            </div>

            {/* Recent Activity List */}
            <div className="bg-surface-container-lowest rounded-2xl p-md md:p-lg shadow-ambient border border-surface-container flex flex-col">
              <div className="flex justify-between items-center mb-md">
                <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface font-bold">
                  Actividad Reciente
                </h2>
                <Link className="font-label-sm text-label-sm text-primary hover:underline font-bold" href="/empresa/candidatos">
                  Ver todo
                </Link>
              </div>

              <div className="flex flex-col gap-sm">
                {/* Item 1 */}
                <div className="flex items-start gap-sm pb-sm border-b border-surface-variant/40 last:border-0 last:pb-0">
                  <div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container flex-shrink-0 flex items-center justify-center font-bold text-xs">
                    AS
                  </div>
                  <div>
                    <p className="font-body-md text-sm text-on-surface">
                      <span className="font-bold">Ana Silva</span> aplicó a{' '}
                      <span className="text-primary font-medium">Desarrollador Frontend</span>
                    </p>
                    <p className="font-label-sm text-xs text-on-surface-variant mt-0.5">Hace 2 horas</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-sm pb-sm border-b border-surface-variant/40 last:border-0 last:pb-0">
                  <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">handshake</span>
                  </div>
                  <div>
                    <p className="font-body-md text-sm text-on-surface">
                      Nuevo match generado para{' '}
                      <span className="font-bold text-primary">Diseñador UX/UI</span>
                    </p>
                    <p className="font-label-sm text-xs text-on-surface-variant mt-0.5">Hace 5 horas</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-sm pb-sm border-b border-surface-variant/40 last:border-0 last:pb-0">
                  <div className="w-9 h-9 rounded-full bg-secondary-fixed text-on-secondary-fixed flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                  </div>
                  <div>
                    <p className="font-body-md text-sm text-on-surface">
                      Entrevista completada con <span className="font-bold">Carlos Ruiz</span>
                    </p>
                    <p className="font-label-sm text-xs text-on-surface-variant mt-0.5">Ayer, 10:00</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
