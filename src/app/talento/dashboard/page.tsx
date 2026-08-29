// =============================================================================
// PUNTOCLICK — Talent Dashboard
// Reproduced from dashboard_talento_puntoclick_conectado/code.html
// =============================================================================

import type { Metadata } from 'next';
import Link from 'next/link';
import { StatCard, Card, Chip, MatchBadge } from '@/components/design-system';

export const metadata: Metadata = {
  title: 'Dashboard — Talento',
  description: 'Tu panel de control de talento en PUNTOCLICK.',
};

// Mock data — will be replaced by Server Actions + Neon DB queries
const mockStats = {
  completionPct: 85,
  matches: 3,
  views: 12,
  viewsTrend: '+2',
  opportunities: 5,
};

const mockMatches = [
  {
    id: '1',
    companyName: 'TechCorp Innova',
    sector: 'Software Development',
    sectorIcon: 'code',
    score: 92,
    skills: ['React', 'UX/UI'],
    workMode: 'Remoto',
  },
  {
    id: '2',
    companyName: 'Studio Creative',
    sector: 'Product Design',
    sectorIcon: 'palette',
    score: 88,
    skills: ['Figma', 'Design Systems'],
    workMode: 'Híbrido',
  },
];

export default function TalentoDashboardPage() {
  return (
    <main className="max-w-[--spacing-container-max] mx-auto px-[--spacing-margin-mobile] md:px-[--spacing-xl] mt-[--spacing-md]">

      {/* Greeting */}
      <section className="mb-[--spacing-lg] animate-fade-in-up">
        <h1 className="text-headline-xl-mobile md:text-headline-xl text-[--color-on-background] mb-[--spacing-xs]">
          Hola, Alejandro
        </h1>
        <p className="text-body-md text-[--color-on-surface-variant]">
          Tu próximo Match puede estar aquí.
        </p>
      </section>

      {/* Stats Bento Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-[--spacing-sm] md:gap-[--spacing-md] mb-[--spacing-xl]">

        {/* Profile completion — spans 2 cols */}
        <Link
          href="/talento/perfil"
          className="col-span-2 bg-[--color-surface-container-lowest] rounded-[--radius-xl] p-[--spacing-md] shadow-ambient border border-[--color-surface-variant]/40 flex flex-col justify-between hover:shadow-ambient-md transition-shadow relative overflow-hidden group"
        >
          <div className="flex justify-between items-start mb-[--spacing-sm] relative z-10">
            <h2 className="text-label-md text-[--color-on-surface-variant] uppercase tracking-wider">Perfil</h2>
            <span className="material-symbols-outlined text-[--color-secondary]" style={{ fontVariationSettings: "'FILL' 1" }}>
              person_check
            </span>
          </div>
          <div className="relative z-10">
            <div className="flex items-end gap-2 mb-2">
              <span className="text-headline-lg-mobile text-[--color-on-background]">
                {mockStats.completionPct}%
              </span>
              <span className="text-label-sm text-[--color-secondary] mb-1">Completado</span>
            </div>
            <div className="h-2 w-full bg-[--color-surface-container-high] rounded-full overflow-hidden">
              <div
                className="h-full bg-[--color-secondary] rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${mockStats.completionPct}%` }}
              />
            </div>
          </div>
          {/* Decorative glow */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[--color-secondary-container]/20 rounded-full blur-xl group-hover:bg-[--color-secondary-container]/30 transition-colors" />
        </Link>

        {/* Matches */}
        <StatCard
          label="Matches"
          value={mockStats.matches}
          icon="handshake"
          className="col-span-1"
        />

        {/* Views */}
        <Card className="col-span-1 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-[--spacing-sm]">
            <h2 className="text-label-md text-[--color-on-surface-variant] uppercase tracking-wider">Vistas</h2>
            <span className="material-symbols-outlined text-[--color-tertiary]">visibility</span>
          </div>
          <div className="mt-auto flex items-baseline gap-2">
            <span className="text-headline-lg-mobile text-[--color-on-background]">{mockStats.views}</span>
            <span className="text-label-sm text-[--color-secondary] bg-[--color-secondary-container]/50 px-2 py-0.5 rounded-full flex items-center">
              <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>trending_up</span>
              {mockStats.viewsTrend}
            </span>
          </div>
        </Card>

        {/* Opportunities highlight — full width */}
        <Link
          href="/talento/oportunidades"
          className="col-span-2 md:col-span-4 bg-[--color-primary-container] text-[--color-on-primary-container] rounded-[--radius-xl] p-[--spacing-md] shadow-ambient-md border border-[--color-primary-fixed-dim]/30 flex justify-between items-center hover:scale-[1.01] transition-transform cursor-pointer relative overflow-hidden group"
        >
          <div className="relative z-10 flex items-center gap-[--spacing-md]">
            <div className="w-12 h-12 bg-[--color-on-primary-container]/10 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined">work</span>
            </div>
            <div>
              <h2 className="text-label-md opacity-80 uppercase tracking-wider mb-1">Oportunidades</h2>
              <p className="text-headline-md leading-none">{mockStats.opportunities} Nuevas</p>
            </div>
          </div>
          <div className="relative z-10">
            <span className="material-symbols-outlined font-light group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
          {/* Shimmer on hover */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
        </Link>
      </section>

      {/* Recommended Matches */}
      <section>
        <div className="flex justify-between items-end mb-[--spacing-md]">
          <h2 className="text-headline-md text-[--color-on-background]">Matches Recomendados</h2>
          <Link
            href="/talento/matches"
            className="text-label-md text-[--color-primary] hover:underline"
          >
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[--spacing-sm] md:gap-[--spacing-lg]">
          {mockMatches.map((match) => (
            <Link
              key={match.id}
              href={`/talento/matches/${match.id}`}
              className="bg-[--color-surface-container-lowest] rounded-[--radius-xl] p-[--spacing-md] shadow-ambient border border-[--color-surface-variant]/40 flex flex-col gap-[--spacing-md] hover:shadow-ambient-md transition-shadow"
            >
              {/* Company info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-[--radius-xl] bg-[--color-surface-container-high] overflow-hidden shrink-0 border border-[--color-surface-variant] flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-4xl text-[--color-tertiary]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {match.sectorIcon}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-headline-md text-[--color-on-background] font-semibold" style={{ fontSize: '18px' }}>
                    {match.companyName}
                  </h3>
                  <p className="text-body-md text-[--color-on-surface-variant] flex items-center gap-1 mt-0.5" style={{ fontSize: '14px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>{match.sectorIcon}</span>
                    {match.sector}
                  </p>
                </div>
                <MatchBadge score={match.score} />
              </div>

              {/* Skills chips */}
              <div className="flex flex-wrap gap-2">
                {match.skills.map((skill) => (
                  <Chip key={skill} variant="skill">{skill}</Chip>
                ))}
                <Chip variant="location" icon="public">{match.workMode}</Chip>
              </div>

              {/* Action buttons */}
              <div className="flex gap-[--spacing-sm] mt-2">
                <button
                  className="flex-1 py-2 px-4 rounded-[--radius-lg] text-label-md border-2 border-[--color-outline] text-[--color-on-surface] hover:bg-[--color-surface-variant]/50 transition-colors focus:ring-2 focus:ring-[--color-primary] focus:outline-none"
                >
                  Ignorar
                </button>
                <button
                  className="flex-1 py-2 px-4 rounded-[--radius-lg] text-label-md bg-[--color-primary] text-[--color-on-primary] hover:opacity-90 transition-all shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-[--color-primary] focus:outline-none"
                >
                  Conectar
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
