// =============================================================================
// PUNTOCLICK — Talento Profile Page
// Server Component — reads session from request headers (injected by middleware)
// =============================================================================

import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { db } from '@/infrastructure/db/client';
import { talentProfiles, users } from '@/infrastructure/db/schema';
import { eq } from 'drizzle-orm';

export const metadata: Metadata = {
  title: 'Mi Perfil — Talento PUNTOCLICK',
  description: 'Tu perfil profesional en PuntoClic Nicaragua',
};

// Fallback demo profile for when no session/DB data is available
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

export default async function TalentoPerfilPage() {
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
  }

  const displayName = userName || `${profile.firstName} ${profile.lastName}`.trim();
  const initials = `${profile.firstName?.[0] || ''}${profile.lastName?.[0] || ''}`.toUpperCase() || 'TL';

  const contractLabels: Record<string, string> = {
    tiempo_completo: 'Tiempo Completo',
    freelance: 'Freelance',
    practicas: 'Prácticas',
    medio_tiempo: 'Medio Tiempo',
  };

  const workModeLabels: Record<string, string> = {
    remoto: 'Remoto',
    presencial: 'Presencial',
    hibrido: 'Híbrido',
  };

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-xl mt-md pb-xl">
      {/* Profile Header */}
      <section className="mb-lg animate-fade-in-up">
        <div className="bg-surface-container-low rounded-2xl p-lg border border-surface-variant/40 shadow-ambient">
          <div className="flex flex-col md:flex-row gap-lg items-start">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              {profile.photoUrl ? (
                <img
                  src={profile.photoUrl}
                  alt={`Foto de perfil de ${displayName}`}
                  className="w-28 h-28 rounded-full object-cover shadow-md border-4 border-surface"
                />
              ) : (
                <div className="w-28 h-28 rounded-full bg-primary-container flex items-center justify-center shadow-md border-4 border-surface">
                  <span className="font-headline-xl-mobile text-headline-xl-mobile text-on-primary-container font-bold">
                    {initials}
                  </span>
                </div>
              )}
              {isRealUser && (
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-surface">
                  <span className="material-symbols-outlined text-white text-[14px]">verified</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-grow">
              <div className="flex flex-wrap items-start justify-between gap-sm mb-sm">
                <div>
                  <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-on-background font-bold mb-xs">
                    {displayName}
                  </h1>
                  {profile.currentJobTitle && (
                    <p className="font-body-lg text-body-lg text-on-surface-variant">
                      {profile.currentJobTitle}
                      {profile.currentlyWorking && (
                        <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                          Activo
                        </span>
                      )}
                    </p>
                  )}
                </div>
                <Link
                  href="/auth/register/talento?step=1"
                  className="flex items-center gap-1 text-primary font-label-md text-label-md hover:underline transition-colors px-3 py-1.5 bg-primary-container/30 rounded-lg"
                >
                  <span className="material-symbols-outlined text-[16px]">edit</span>
                  Editar perfil
                </Link>
              </div>

              <div className="flex flex-wrap gap-sm text-on-surface-variant font-body-sm text-body-sm mb-md">
                {profile.location && (
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    {profile.location}
                  </span>
                )}
                {profile.email && (
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">mail</span>
                    {profile.email}
                  </span>
                )}
                {profile.educationLevel && (
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">school</span>
                    {profile.educationLevel}
                  </span>
                )}
              </div>

              {/* Profile Completion */}
              <div className="mb-sm">
                <div className="flex justify-between items-center mb-xs">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Perfil completado</span>
                  <span className="font-label-sm text-label-sm font-bold text-primary">{profile.completionPct}%</span>
                </div>
                <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden max-w-xs">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700"
                    style={{ width: `${profile.completionPct}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {/* Left Column */}
        <div className="md:col-span-2 flex flex-col gap-md">
          {/* Bio */}
          {profile.bio && (
            <section className="bg-surface-container-low rounded-xl p-md border border-surface-variant/40 shadow-ambient">
              <h2 className="font-headline-sm text-headline-sm-mobile text-on-surface mb-sm font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">person</span>
                Sobre mí
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {profile.bio}
              </p>
            </section>
          )}

          {/* Skills */}
          {profile.skills && profile.skills.length > 0 && (
            <section className="bg-surface-container-low rounded-xl p-md border border-surface-variant/40 shadow-ambient">
              <h2 className="font-headline-sm text-headline-sm-mobile text-on-surface mb-md font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">psychology</span>
                Habilidades
              </h2>
              <div className="flex flex-wrap gap-sm">
                {(profile.skills as string[]).map((skill: string) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary-container text-on-secondary-container rounded-full font-label-md text-label-md font-medium hover:bg-primary-container hover:text-on-primary-container transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* CV Section */}
          <section className="bg-surface-container-low rounded-xl p-md border border-surface-variant/40 shadow-ambient">
            <h2 className="font-headline-sm text-headline-sm-mobile text-on-surface mb-md font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">description</span>
              Curriculum Vitae
            </h2>
            {profile.cvUrl ? (
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-sm p-sm bg-primary-container/30 rounded-xl border border-primary/20 hover:bg-primary-container/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-on-primary text-[18px]">description</span>
                </div>
                <div className="min-w-0 flex-grow">
                  <p className="font-label-md text-label-md text-on-surface font-medium">Mi CV</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">Ver documento</p>
                </div>
                <span className="material-symbols-outlined text-primary text-[18px]">open_in_new</span>
              </a>
            ) : (
              <Link
                href="/auth/register/talento?step=9"
                className="flex items-center gap-sm p-sm bg-surface-container border border-dashed border-outline-variant rounded-xl hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-on-surface-variant">upload_file</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Subir tu CV</span>
              </Link>
            )}
          </section>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-md">
          {/* Work Preferences */}
          <section className="bg-surface-container-low rounded-xl p-md border border-surface-variant/40 shadow-ambient">
            <h2 className="font-headline-sm text-headline-sm-mobile text-on-surface mb-md font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">work</span>
              Preferencias
            </h2>

            {profile.contractTypes && profile.contractTypes.length > 0 && (
              <div className="mb-sm">
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide mb-xs">Tipo de contrato</p>
                <div className="flex flex-wrap gap-xs">
                  {(profile.contractTypes as string[]).map((ct: string) => (
                    <span key={ct} className="px-2 py-1 bg-surface-container text-on-surface font-label-sm text-label-sm rounded-full text-xs">
                      {contractLabels[ct] || ct}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {profile.workModes && profile.workModes.length > 0 && (
              <div>
                <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wide mb-xs">Modalidad</p>
                <div className="flex flex-wrap gap-xs">
                  {(profile.workModes as string[]).map((wm: string) => (
                    <span key={wm} className="px-2 py-1 bg-secondary-container/60 text-on-secondary-container font-label-sm text-label-sm rounded-full text-xs">
                      {workModeLabels[wm] || wm}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Quick Actions */}
          <section className="bg-surface-container-low rounded-xl p-md border border-surface-variant/40 shadow-ambient">
            <h2 className="font-headline-sm text-headline-sm-mobile text-on-surface mb-md font-bold">Acciones Rápidas</h2>
            <div className="flex flex-col gap-sm">
              <Link
                href="/match-center"
                className="flex items-center gap-sm p-sm rounded-xl bg-primary text-on-primary hover:opacity-90 transition-opacity font-label-md text-label-md font-bold"
              >
                <span className="material-symbols-outlined">handshake</span>
                Ver Mis Matches
              </Link>
              <Link
                href="/auth/register/talento?step=1"
                className="flex items-center gap-sm p-sm rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md"
              >
                <span className="material-symbols-outlined">edit</span>
                Editar Datos
              </Link>
              <Link
                href="/configuracion/permisos"
                className="flex items-center gap-sm p-sm rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md"
              >
                <span className="material-symbols-outlined">settings</span>
                Configuración
              </Link>
            </div>
          </section>

          {/* Data source badge */}
          <div className="text-center text-[11px] text-on-surface-variant flex items-center justify-center gap-1">
            {isRealUser ? (
              <>
                <span className="material-symbols-outlined text-[12px] text-green-600">database</span>
                <span>Datos desde <strong>Neon Postgres</strong></span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[12px]">info</span>
                <span>Perfil de demostración</span>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
