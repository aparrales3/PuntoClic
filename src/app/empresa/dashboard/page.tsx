// =============================================================================
// PUNTOCLICK — Company Dashboard
// Reproduced from dashboard_empresa_puntoclick/code.html
// =============================================================================

import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/design-system';

export const metadata: Metadata = {
  title: 'Dashboard Empresa',
  description: 'Resumen general de actividad y rendimiento de tu empresa en PUNTOCLICK.',
};

const mockStats = [
  { label: 'Vacantes Activas', value: '12', icon: 'work', trend: '+2%', positive: true, iconBg: 'bg-[--color-primary-fixed]', iconColor: 'text-[--color-primary]' },
  { label: 'Candidatos Nuevos', value: '48', icon: 'group', trend: '+15%', positive: true, iconBg: 'bg-[--color-secondary-container]', iconColor: 'text-[--color-secondary]' },
  { label: 'Matches Exitosos', value: '8', icon: 'handshake', trend: '0%', positive: true, iconBg: 'bg-[--color-tertiary-container]', iconColor: 'text-[--color-tertiary]' },
  { label: 'Problemas Reportados', value: '3', icon: 'warning', trend: '+1', positive: false, iconBg: 'bg-[--color-error-container]', iconColor: 'text-[--color-error]' },
];

const recentActivity = [
  { name: 'Ana Silva', action: 'aplicó a', target: 'Desarrollador Frontend', time: 'Hace 2 horas' },
  { name: 'Carlos Méndez', action: 'fue visto en', target: 'UX Designer', time: 'Hace 3 horas' },
  { name: 'María López', action: 'conectó con', target: 'Data Analyst', time: 'Hace 5 horas' },
];

const chartData = [40, 65, 90, 50, 75]; // Mon-Fri percentages
const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'];

export default function EmpresaDashboardPage() {
  return (
    <main className="px-[--spacing-gutter-mobile] md:px-[--spacing-xl] py-[--spacing-md] md:py-[--spacing-lg] max-w-[--spacing-container-max] mx-auto pb-24 md:pb-[--spacing-lg] flex flex-col gap-[--spacing-lg]">

      {/* Header */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[--spacing-sm]">
        <div>
          <h1 className="text-headline-lg-mobile md:text-headline-lg text-[--color-on-background]">
            Dashboard Empresa
          </h1>
          <p className="text-body-md text-[--color-on-surface-variant] mt-[--spacing-xs]">
            Resumen general de actividad y rendimiento.
          </p>
        </div>
        <Link
          href="/empresa/vacantes/nueva"
          className="inline-flex items-center gap-[--spacing-xs] bg-[--color-primary-container] text-[--color-on-primary-container] text-label-md font-semibold px-[--spacing-md] py-[--spacing-sm] rounded-[--radius-lg] hover:opacity-90 active:scale-95 transition-all shadow-sm"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
          Nueva Vacante
        </Link>
      </section>

      {/* KPI Bento Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-[--spacing-sm] md:gap-[--spacing-md]">
        {mockStats.map((stat) => (
          <Card key={stat.label} className="flex flex-col justify-between">
            <div className="flex justify-between items-start mb-[--spacing-sm]">
              <span
                className={`material-symbols-outlined ${stat.iconColor} ${stat.iconBg} p-2 rounded-[--radius-lg]`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {stat.icon}
              </span>
              <span className={`text-label-sm flex items-center ${stat.positive ? 'text-[--color-secondary]' : 'text-[--color-error]'}`}>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                  {stat.positive ? 'trending_up' : 'trending_up'}
                </span>
                {stat.trend}
              </span>
            </div>
            <div>
              <h2 className="text-headline-xl-mobile text-[--color-on-surface]">{stat.value}</h2>
              <p className="text-label-sm text-[--color-on-surface-variant] mt-[--spacing-xs]">{stat.label}</p>
            </div>
          </Card>
        ))}
      </section>

      {/* Chart + Activity */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-[--spacing-md]">

        {/* Recruitment Chart */}
        <Card className="lg:col-span-2 flex flex-col">
          <div className="flex justify-between items-center mb-[--spacing-md]">
            <h2 className="text-headline-md text-[--color-on-surface]">Estadísticas de Reclutamiento</h2>
            <button className="text-[--color-on-surface-variant] hover:text-[--color-primary] transition-colors">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
          {/* Simple CSS bar chart */}
          <div className="flex-grow flex items-end justify-between gap-2 md:gap-[--spacing-sm] h-48 md:h-64 mt-[--spacing-sm] border-b border-[--color-surface-container-high] pb-[--spacing-xs] relative">
            {chartData.map((pct, i) => (
              <div
                key={i}
                className={`w-full rounded-t-sm relative group transition-colors ${i === 2 ? 'bg-[--color-primary-container] shadow-sm' : 'bg-[--color-surface-variant] hover:bg-[--color-primary-container]'}`}
                style={{ height: `${pct}%` }}
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-label-sm text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-[--color-inverse-surface] text-[--color-inverse-on-surface] px-2 py-1 rounded whitespace-nowrap">
                  {Math.round(pct * 0.5)}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-[--spacing-xs] px-2 text-[--color-on-surface-variant] text-xs opacity-70">
            {days.map((d) => <span key={d}>{d}</span>)}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="flex flex-col">
          <div className="flex justify-between items-center mb-[--spacing-md]">
            <h2 className="text-headline-md text-[--color-on-surface]">Actividad Reciente</h2>
            <Link href="/empresa/actividad" className="text-label-sm text-[--color-primary] hover:underline">Ver todo</Link>
          </div>
          <div className="flex flex-col gap-[--spacing-sm]">
            {recentActivity.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-[--spacing-sm] pb-[--spacing-sm] border-b border-[--color-surface-dim] last:border-0 last:pb-0"
              >
                <div className="w-10 h-10 rounded-full bg-[--color-tertiary-container] flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <span className="material-symbols-outlined text-[--color-on-tertiary-container]" style={{ fontSize: '18px' }}>person</span>
                </div>
                <div>
                  <p className="text-body-md text-sm text-[--color-on-surface]">
                    <span className="font-semibold">{item.name}</span>{' '}
                    {item.action}{' '}
                    <span className="text-[--color-primary] font-medium">{item.target}</span>
                  </p>
                  <p className="text-label-sm text-xs text-[--color-on-surface-variant] mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </main>
  );
}
