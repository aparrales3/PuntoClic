// =============================================================================
// PUNTOCLICK — Institución Profile Page
// Server Component — reads session from headers and fetches from Neon DB
// =============================================================================

import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { db } from '@/infrastructure/db/client';
import { institutionProfiles, users } from '@/infrastructure/db/schema';
import { eq } from 'drizzle-orm';
import { ProfileAvatar } from '@/components/design-system';

export const metadata: Metadata = {
  title: 'Perfil Institucional — PUNTOCLICK',
  description: 'Información institucional y programas educativos en PuntoClic Nicaragua.',
};

const DEMO_INSTITUTION = {
  institutionName: 'Universidad Nacional de Ingeniería (UNI)',
  type: 'universidad',
  description:
    'Líder en formación tecnológica, ingeniería e innovación en Nicaragua. Impulsamos el desarrollo de profesionales de vanguardia y la vinculación directa con el sector productivo y tecnológico.',
  logoUrl: null as string | null,
  website: 'https://uni.edu.ni',
  location: 'Managua, Nicaragua',
  verified: true,
};

export default async function InstitucionPerfilPage() {
  const headersList = await headers();
  const userId = headersList.get('x-user-id');

  let profile = DEMO_INSTITUTION;
  let isRealUser = false;

  if (userId) {
    try {
      const [profileRow] = await db
        .select()
        .from(institutionProfiles)
        .where(eq(institutionProfiles.userId, userId))
        .limit(1);

      if (profileRow) {
        profile = {
          institutionName: profileRow.institutionName || 'Institución Educativa',
          type: profileRow.type || 'universidad',
          description: profileRow.description || '',
          logoUrl: profileRow.logoUrl || null,
          website: profileRow.website || '',
          location: profileRow.location || 'Managua, Nicaragua',
          verified: profileRow.verified,
        };
        isRealUser = true;
      } else {
        const [firstInst] = await db.select().from(institutionProfiles).limit(1);
        if (firstInst) {
          profile = {
            institutionName: firstInst.institutionName,
            type: firstInst.type || 'universidad',
            description: firstInst.description || '',
            logoUrl: firstInst.logoUrl,
            website: firstInst.website || '',
            location: firstInst.location || 'Nicaragua',
            verified: firstInst.verified,
          };
        }
      }
    } catch {
      // Fallback to demo institution
    }
  } else {
    try {
      const [firstInst] = await db.select().from(institutionProfiles).limit(1);
      if (firstInst) {
        profile = {
          institutionName: firstInst.institutionName,
          type: firstInst.type || 'universidad',
          description: firstInst.description || '',
          logoUrl: firstInst.logoUrl,
          website: firstInst.website || '',
          location: firstInst.location || 'Nicaragua',
          verified: firstInst.verified,
        };
      }
    } catch {
      // Keep DEMO_INSTITUTION
    }
  }

  const typeLabels: Record<string, string> = {
    universidad: 'Universidad',
    ong: 'Organización No Gubernamental',
    gobierno: 'Entidad Gubernamental',
    otro: 'Centro Educativo',
  };

  return (
    <div className="bg-background text-on-background min-h-screen pb-24 font-body-md">
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-lg py-md md:py-lg flex flex-col gap-xl">
        {/* Header / Identity Section */}
        <section className="bg-surface-container-low rounded-2xl p-lg border border-surface-variant/40 shadow-ambient flex flex-col md:flex-row items-center md:items-start gap-md md:gap-lg relative">
          {/* Profile Avatar with Generic Template Fallback */}
          <ProfileAvatar
            src={profile.logoUrl}
            name={profile.institutionName}
            type="institution"
            size="2xl"
            rounded="2xl"
            verified={profile.verified}
          />

          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
            <div className="flex items-center gap-2 mb-xs">
              <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold">
                {profile.institutionName}
              </h1>
              {profile.verified && (
                <span className="material-symbols-outlined text-primary text-2xl" title="Institución Verificada">
                  verified
                </span>
              )}
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant mb-sm max-w-2xl">
              {profile.description ? profile.description.slice(0, 160) + '...' : 'Vinculación de talento académico con el sector productivo.'}
            </p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-md">
              <span className="bg-secondary-container text-on-secondary-container font-label-md text-label-md px-3 py-1 rounded-full font-medium">
                {typeLabels[profile.type] || 'Educación'}
              </span>
              {profile.location && (
                <span className="bg-secondary-container text-on-secondary-container font-label-md text-label-md px-3 py-1 rounded-full font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  {profile.location}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-sm">
              <Link
                href="/institucion/dashboard"
                className="bg-primary text-on-primary font-label-md text-label-md px-5 py-2.5 rounded-lg shadow-xs hover:opacity-90 transition-all flex items-center gap-2 font-bold"
              >
                <span className="material-symbols-outlined text-[18px]">dashboard</span>
                Panel Institucional
              </Link>
              <Link
                href="/institucion/programas"
                className="bg-surface-container text-on-surface font-label-md text-label-md px-4 py-2.5 rounded-lg hover:bg-surface-container-high transition-all flex items-center gap-2 font-semibold"
              >
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
                Ver Programas
              </Link>
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-md">
          <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-md md:p-lg border border-surface-container-high shadow-ambient flex flex-col justify-between">
            <div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-sm flex items-center gap-2 font-bold">
                <span className="material-symbols-outlined text-primary">school</span>
                Sobre la Institución
              </h2>
              {profile.description ? (
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                  {profile.description}
                </p>
              ) : (
                <div className="p-4 rounded-lg bg-surface-container/60 border border-dashed border-outline-variant/60 text-center my-4">
                  <p className="font-body-md text-body-md text-on-surface-variant mb-2">
                    Aún no se ha añadido una descripción institucional.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-md pt-md border-t border-surface-container-high flex flex-wrap gap-md">
              <div>
                <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Tipo de Entidad</span>
                <p className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  {typeLabels[profile.type] || 'Educación Superior'}
                </p>
              </div>
              <div className="border-l border-surface-container-high pl-md">
                <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Estado de Verificación</span>
                <p className="font-headline-sm text-headline-sm text-primary font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  Verificado Oficial
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-md">
            {/* Sitio Web */}
            <div className="bg-surface-container-low rounded-xl p-md border border-surface-container-high shadow-xs flex items-center gap-md">
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                <span className="material-symbols-outlined">language</span>
              </div>
              <div className="min-w-0">
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs font-semibold">
                  Portal Oficial
                </p>
                {profile.website ? (
                  <a
                    href={profile.website.startsWith('http') ? profile.website : `https://${profile.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-headline-md text-headline-md text-primary hover:underline text-sm truncate block"
                  >
                    {profile.website.replace(/^https?:\/\//, '')}
                  </a>
                ) : (
                  <span className="text-sm text-on-surface-variant">No registrado</span>
                )}
              </div>
            </div>

            {/* Sede */}
            <div className="bg-surface-container-low rounded-xl p-md border border-surface-container-high shadow-xs flex items-center gap-md">
              <div className="w-12 h-12 rounded-xl bg-primary-container/40 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs font-semibold">
                  Campus / Sede
                </p>
                <p className="font-headline-md text-headline-md text-on-background font-bold">
                  {profile.location || 'Nicaragua'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
