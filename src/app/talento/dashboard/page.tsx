import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { db } from '@/infrastructure/db/client';
import { talentProfiles, users } from '@/infrastructure/db/schema';
import { eq } from 'drizzle-orm';

export const metadata: Metadata = {
  title: 'Dashboard — Talento PUNTOCLICK',
  description: 'Tu próximo Match puede estar aquí.',
};

export default async function TalentoDashboardPage() {
  const DEMO_PROFILE = {
    firstName: 'Alejandro',
    lastName: 'Martinez',
    email: 'alejandro@talento.com',
    photoUrl: null as string | null,
    bio: 'Desarrollador Full Stack apasionado por crear soluciones innovadoras en Nicaragua.',
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Figma'],
    location: 'Managua, Nicaragua',
    educationLevel: 'Ingeniería en Sistemas',
    currentJobTitle: 'Desarrollador Full Stack',
    currentlyWorking: true,
    contractTypes: ['tiempo_completo', 'freelance'],
    workModes: ['remoto', 'hibrido'],
    completionPct: 85,
    cvUrl: null as string | null,
  };
  // Read session from headers (injected by middleware)
  const headersList = await headers();
  const userId = headersList.get('x-user-id');
  const userEmail = headersList.get('x-user-email');
  const userName = headersList.get('x-user-name');

  let profile = DEMO_PROFILE;
  let isRealUser = false;

  if (userId) {
    try {
      const [userRow] = await db
        .select({ email: users.email })
        .from(users)
        .where(eq(users.id, userId))
        .limit(1);

      const [profileRow] = await db
        .select()
        .from(talentProfiles)
        .where(eq(talentProfiles.userId, userId))
        .limit(1);

      if (profileRow) {
        profile = {
          firstName: profileRow.firstName,
          lastName: profileRow.lastName,
          email: userRow?.email || userEmail || '',
          photoUrl: profileRow.photoUrl,
          bio: profileRow.bio || '',
          skills: (profileRow.skills as string[]) || [],
          location: profileRow.location || 'Nicaragua',
          educationLevel: profileRow.educationLevel || '',
          currentJobTitle: profileRow.currentJobTitle || '',
          currentlyWorking: profileRow.currentlyWorking,
          contractTypes: (profileRow.contractTypes as string[]) || [],
          workModes: (profileRow.workModes as string[]) || [],
          completionPct: profileRow.completionPct,
          cvUrl: profileRow.cvUrl,
        };
        isRealUser = true;
      }
    } catch {
      // Fall back to demo profile if DB error
    }
    return (
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-xl mt-md">
        {/* Header Section */}
        <section className="mb-lg animate-fade-in-up">
          <h2 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-background mb-xs">
            Hola, {profile.firstName}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Tu próximo Match puede estar aquí.
          </p>
        </section>

        {/* Stats Bento Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-sm md:gap-md mb-xl">
          {/* Card 1: Perfil Completado */}
          <Link
            className="col-span-2 bg-surface-container-lowest rounded-xl p-md shadow-ambient border border-surface-variant/40 flex flex-col justify-between hover:shadow-ambient-md transition-shadow relative overflow-hidden group"
            href="/talento/perfil"
          >
            <div className="flex justify-between items-start mb-sm relative z-10">
              <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                Perfil
              </h3>
              <span className="material-symbols-outlined text-secondary font-light">
                person_check
              </span>
            </div>
            <div className="relative z-10">
              <div className="flex items-end gap-2 mb-2">
                <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-background">
                  {profile.completionPct}%
                </span>
                <span className="font-label-sm text-label-sm text-secondary mb-1">
                  Completado
                </span>
              </div>
              <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full w-[85%] transition-all duration-1000 ease-out"></div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary-container/20 rounded-full blur-xl group-hover:bg-secondary-container/30 transition-colors"></div>
          </Link>

          {/* Card 2: Matches */}
          <div className="col-span-1 bg-surface-container-lowest rounded-xl p-md shadow-ambient border border-surface-variant/40 flex flex-col justify-between hover:shadow-ambient-md transition-shadow">
            <div className="flex justify-between items-start mb-sm">
              <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                Matches
              </h3>
              <span className="material-symbols-outlined text-primary font-light">
                handshake
              </span>
            </div>
            <div className="mt-auto">
              <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-background">
                3
              </span>
            </div>
          </div>

          {/* Card 3: Vistas */}
          <div className="col-span-1 bg-surface-container-lowest rounded-xl p-md shadow-ambient border border-surface-variant/40 flex flex-col justify-between hover:shadow-ambient-md transition-shadow">
            <div className="flex justify-between items-start mb-sm">
              <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                Vistas
              </h3>
              <span className="material-symbols-outlined text-tertiary font-light">
                visibility
              </span>
            </div>
            <div className="mt-auto flex items-baseline gap-2">
              <span className="font-headline-lg-mobile text-headline-lg-mobile text-on-background">
                12
              </span>
              <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/50 px-2 py-0.5 rounded-full flex items-center">
                <span className="material-symbols-outlined text-[12px] mr-0.5">
                  trending_up
                </span>
                +2
              </span>
            </div>
          </div>

          {/* Card 4: Oportunidades (Highlighted) */}
          <Link
            className="col-span-2 md:col-span-4 bg-primary-container text-on-primary-container rounded-xl p-md shadow-ambient-md border border-primary-fixed-dim/30 flex justify-between items-center hover:scale-[1.01] transition-transform cursor-pointer relative overflow-hidden group"
            href="/talento/oportunidades"
          >
            <div className="relative z-10 flex items-center gap-md">
              <div className="w-12 h-12 bg-on-primary-container/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary-container">
                  work
                </span>
              </div>
              <div>
                <h3 className="font-label-md text-label-md opacity-80 uppercase tracking-wider mb-1">
                  Oportunidades
                </h3>
                <p className="font-headline-md text-headline-md leading-none">
                  5 Nuevas
                </p>
              </div>
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined font-light group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
          </Link>
        </section>

        {/* Matches Recomendados Section */}
        <section>
          <div className="flex justify-between items-end mb-md">
            <h2 className="font-headline-md text-headline-md text-on-background">
              Matches Recomendados
            </h2>
            <Link
              className="font-label-md text-label-md text-primary hover:underline"
              href="/match-center"
            >
              Ver todos
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-sm md:gap-lg">
            {/* Match Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-md shadow-ambient border border-surface-variant/40 flex flex-col gap-md hover:shadow-ambient-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-surface-container-high overflow-hidden shrink-0 border border-surface-variant flex items-center justify-center">
                  <img
                    alt="TechCorp Innova Logo"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK7HBBz5mTmre6XSf2opzt2E2Bpv3GYbiIwUcSckY-bI1h8v4VtLuE6LU21_3phJ7akLaeVXryIXxp5TSrRxSeFLOET694O-7QzC4tUQZj7TBaYjrNTzSQyNIeQKqU8CYaWn_AFO8NgdK0nF7_g2myIGoPfQPpR9Ok1wK81ZCz5CPDpXbu9sRNUEwKOyEIE5S8d0oO_07wyefRM-jTQTVfKmCRORT8bXaKcYW6D_NRBUEEDn4yrNJ0"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-headline-sm text-headline-sm text-on-background font-semibold">
                    TechCorp Innova
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">
                      code
                    </span>{' '}
                    Software Development
                  </p>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <span className="font-headline-md text-headline-md text-primary leading-none">
                    92%
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Match
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 font-label-sm border border-secondary/10">
                  React
                </span>
                <span className="bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 font-label-sm border border-secondary/10">
                  UX/UI
                </span>
                <span className="bg-surface-container-high text-on-surface rounded-full px-3 py-1 font-label-sm border border-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    public
                  </span>{' '}
                  Remoto
                </span>
              </div>
              <div className="flex gap-sm mt-2">
                <button className="flex-1 py-2 px-4 rounded-lg font-label-md text-label-md border-2 border-outline text-on-surface hover:bg-surface-variant/50 transition-colors focus:ring-2 focus:ring-primary focus:outline-none">
                  Ignorar
                </button>
                <button className="flex-1 py-2 px-4 rounded-lg font-label-md text-label-md bg-primary text-on-primary hover:bg-primary/90 transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary focus:outline-none">
                  Conectar
                </button>
              </div>
            </div>

            {/* Match Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-md shadow-ambient border border-surface-variant/40 flex flex-col gap-md hover:shadow-ambient-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-surface-container-high overflow-hidden shrink-0 border border-surface-variant flex items-center justify-center p-2">
                  <span className="material-symbols-outlined text-4xl text-tertiary">
                    design_services
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-headline-sm text-headline-sm text-on-background font-semibold">
                    Studio Creative
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">
                      palette
                    </span>{' '}
                    Product Design
                  </p>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <span className="font-headline-md text-headline-md text-secondary leading-none">
                    88%
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Match
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 font-label-sm border border-secondary/10">
                  Figma
                </span>
                <span className="bg-secondary-container text-on-secondary-container rounded-full px-3 py-1 font-label-sm border border-secondary/10">
                  Design Systems
                </span>
                <span className="bg-surface-container-high text-on-surface rounded-full px-3 py-1 font-label-sm border border-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    location_on
                  </span>{' '}
                  Híbrido
                </span>
              </div>
              <div className="flex gap-sm mt-2">
                <button className="flex-1 py-2 px-4 rounded-lg font-label-md text-label-md border-2 border-outline text-on-surface hover:bg-surface-variant/50 transition-colors focus:ring-2 focus:ring-primary focus:outline-none">
                  Ignorar
                </button>
                <button className="flex-1 py-2 px-4 rounded-lg font-label-md text-label-md bg-primary text-on-primary hover:bg-primary/90 transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary focus:outline-none">
                  Conectar
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

}