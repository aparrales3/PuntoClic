// =============================================================================
// PUNTOCLICK — Empresa Profile Page
// Server Component — reads session from headers and fetches from Neon DB
// =============================================================================

import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { db } from '@/infrastructure/db/client';
import { companyProfiles, users } from '@/infrastructure/db/schema';
import { eq } from 'drizzle-orm';
import { ProfileAvatar } from '@/components/design-system';

export const metadata: Metadata = {
  title: 'Perfil de Empresa — PUNTOCLICK',
  description: 'Información corporativa y perfil de empresa en PuntoClic Nicaragua.',
};

const DEMO_COMPANY = {
  companyName: 'TechHive Nicaragua',
  legalName: 'TechHive Solutions S.A.',
  sector: 'Tecnología & Software',
  description:
    'En TechHive Solutions creemos en el poder de la conexión y el talento local. Diseñamos e implementamos soluciones digitales empresariales, desarrollo web y móvil de alto impacto para Centroamérica.',
  logoUrl: null as string | null,
  website: 'https://techhivenicaragua.com',
  painPoints: [
    'Búsqueda de desarrolladores Full Stack semi-senior',
    'Especialistas en UI/UX y Design Systems',
    'Ingenieros Cloud & DevOps con experiencia en AWS y Docker',
  ],
  location: 'Managua, Nicaragua',
  employeeCount: '25 - 50 Empleados',
  verified: true,
};

export default async function EmpresaPerfilPage() {
  const headersList = await headers();
  const userId = headersList.get('x-user-id');
  const userEmail = headersList.get('x-user-email');

  let profile = DEMO_COMPANY;
  let isRealUser = false;

  if (userId) {
    try {
      const [profileRow] = await db
        .select()
        .from(companyProfiles)
        .where(eq(companyProfiles.userId, userId))
        .limit(1);

      if (profileRow) {
        profile = {
          companyName: profileRow.companyName || 'Empresa Aliada',
          legalName: profileRow.legalName || '',
          sector: profileRow.sector || 'Sector Tecnológico',
          description: profileRow.description || '',
          logoUrl: profileRow.logoUrl || null,
          website: profileRow.website || '',
          painPoints: (profileRow.painPoints as string[]) || [],
          location: profileRow.location || 'Nicaragua',
          employeeCount: profileRow.employeeCount || '10 - 50 Empleados',
          verified: profileRow.verified,
        };
        isRealUser = true;
      } else {
        // Fetch first company profile from DB as fallback
        const [firstCompany] = await db.select().from(companyProfiles).limit(1);
        if (firstCompany) {
          profile = {
            companyName: firstCompany.companyName,
            legalName: firstCompany.legalName || '',
            sector: firstCompany.sector || 'Tecnología',
            description: firstCompany.description || '',
            logoUrl: firstCompany.logoUrl,
            website: firstCompany.website || '',
            painPoints: (firstCompany.painPoints as string[]) || [],
            location: firstCompany.location || 'Managua, Nicaragua',
            employeeCount: firstCompany.employeeCount || '20 - 50 Empleados',
            verified: firstCompany.verified,
          };
        }
      }
    } catch {
      // Fallback to demo profile on error
    }
  } else {
    // If viewing demo or unauthenticated, grab from DB if available
    try {
      const [firstCompany] = await db.select().from(companyProfiles).limit(1);
      if (firstCompany) {
        profile = {
          companyName: firstCompany.companyName,
          legalName: firstCompany.legalName || '',
          sector: firstCompany.sector || 'Tecnología',
          description: firstCompany.description || '',
          logoUrl: firstCompany.logoUrl,
          website: firstCompany.website || '',
          painPoints: (firstCompany.painPoints as string[]) || [],
          location: firstCompany.location || 'Managua, Nicaragua',
          employeeCount: firstCompany.employeeCount || '20 - 50 Empleados',
          verified: firstCompany.verified,
        };
      }
    } catch {
      // Keep DEMO_COMPANY
    }
  }

  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-xl py-md md:py-lg flex flex-col gap-xl">
      {/* Header / Identity Section */}
      <section className="bg-surface-container-low rounded-2xl p-lg border border-surface-variant/40 shadow-ambient flex flex-col md:flex-row items-center md:items-start gap-md md:gap-lg relative">
        {/* Profile Avatar with Generic Template Fallback */}
        <ProfileAvatar
          src={profile.logoUrl}
          name={profile.companyName}
          type="company"
          size="2xl"
          rounded="2xl"
          verified={profile.verified}
        />

        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
          <div className="flex items-center gap-2 mb-xs">
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold">
              {profile.companyName}
            </h1>
            {profile.verified && (
              <span className="material-symbols-outlined text-primary text-2xl" title="Empresa Verificada">
                verified
              </span>
            )}
          </div>

          {profile.legalName && (
            <p className="font-label-sm text-label-sm text-on-surface-variant/80 mb-xs">
              {profile.legalName}
            </p>
          )}

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-sm max-w-2xl">
            {profile.description ? profile.description.slice(0, 160) + '...' : 'Innovación y crecimiento con talento tecnológico verificado.'}
          </p>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-md">
            {profile.sector && (
              <span className="bg-secondary-container text-on-secondary-container font-label-md text-label-md px-3 py-1 rounded-full font-medium">
                {profile.sector}
              </span>
            )}
            {profile.location && (
              <span className="bg-secondary-container text-on-secondary-container font-label-md text-label-md px-3 py-1 rounded-full font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                {profile.location}
              </span>
            )}
            {profile.employeeCount && (
              <span className="bg-surface-container text-on-surface-variant font-label-md text-label-md px-3 py-1 rounded-full font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">group</span>
                {profile.employeeCount}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-sm">
            <Link
              href="/match-talento"
              className="bg-primary text-on-primary font-label-md text-label-md px-5 py-2.5 rounded-lg shadow-xs hover:opacity-90 transition-all flex items-center gap-2 font-bold cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">search</span>
              Buscar Talentos
            </Link>
            <Link
              href="/empresa/dashboard"
              className="bg-surface-container text-on-surface font-label-md text-label-md px-4 py-2.5 rounded-lg hover:bg-surface-container-high transition-all flex items-center gap-2 font-semibold"
            >
              <span className="material-symbols-outlined text-[18px]">dashboard</span>
              Mi Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid Content */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-md">
        {/* Sobre Nosotros */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-md md:p-lg border border-surface-container-high shadow-ambient relative overflow-hidden flex flex-col justify-between">
          <div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-sm flex items-center gap-2 font-bold">
              <span className="material-symbols-outlined text-primary">info</span>
              Sobre la empresa
            </h2>
            {profile.description ? (
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                {profile.description}
              </p>
            ) : (
              <div className="p-4 rounded-lg bg-surface-container/60 border border-dashed border-outline-variant/60 text-center my-4">
                <p className="font-body-md text-body-md text-on-surface-variant mb-2">
                  Aún no se ha añadido una descripción para esta empresa.
                </p>
                <p className="text-xs text-on-surface-variant/80">
                  Agrega una descripción para comunicar tu misión y cultura a los candidatos.
                </p>
              </div>
            )}
          </div>

          {/* Dolores y Necesidades Tecnológicas (Pain Points) */}
          <div className="mt-md pt-md border-t border-surface-container-high">
            <h3 className="font-headline-sm text-headline-sm-mobile text-on-background mb-sm font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">target</span>
              Necesidades y Retos Actuales
            </h3>
            {profile.painPoints && profile.painPoints.length > 0 ? (
              <div className="flex flex-col gap-2">
                {profile.painPoints.map((point: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-3 bg-surface-container-low rounded-lg border border-surface-container-high text-on-surface text-sm"
                  >
                    <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-3 bg-surface-container rounded-lg text-sm text-on-surface-variant">
                No hay necesidades publicadas actualmente.
              </div>
            )}
          </div>
        </div>

        {/* Stats & Metadata Column */}
        <div className="md:col-span-4 flex flex-col gap-md">
          {/* Equipo */}
          <div className="bg-surface-container-low rounded-xl p-md border border-surface-container-high shadow-xs flex items-center gap-md">
            <div className="w-12 h-12 rounded-xl bg-tertiary-container flex items-center justify-center text-on-tertiary-container shrink-0">
              <span className="material-symbols-outlined">group</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs font-semibold">
                Tamaño del Equipo
              </p>
              <p className="font-headline-md text-headline-md text-on-background font-bold">
                {profile.employeeCount || 'No especificado'}
              </p>
            </div>
          </div>

          {/* Sitio Web */}
          <div className="bg-surface-container-low rounded-xl p-md border border-surface-container-high shadow-xs flex items-center gap-md">
            <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
              <span className="material-symbols-outlined">language</span>
            </div>
            <div className="min-w-0">
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs font-semibold">
                Sitio Web
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

          {/* Ubicación */}
          <div className="bg-surface-container-low rounded-xl p-md border border-surface-container-high shadow-xs flex items-center gap-md">
            <div className="w-12 h-12 rounded-xl bg-primary-container/40 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-xs font-semibold">
                Sede Principal
              </p>
              <p className="font-headline-md text-headline-md text-on-background font-bold">
                {profile.location || 'Nicaragua'}
              </p>
            </div>
          </div>

          {/* Quick Call to Action Card */}
          <div className="bg-gradient-to-br from-primary-container/40 to-surface-container-low rounded-xl p-md border border-primary/20 flex flex-col gap-sm">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <span className="material-symbols-outlined text-[18px]">hub</span>
              <span>Conexiones Inteligentes</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Encuentra los perfiles con mayor afinidad técnica y cultural para tus vacantes activas.
            </p>
            <Link
              href="/match-talento"
              className="w-full text-center bg-primary text-on-primary py-2 rounded-lg text-label-sm font-bold shadow-xs hover:opacity-95 transition-opacity mt-1"
            >
              Explorar Talentos Compatibles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
