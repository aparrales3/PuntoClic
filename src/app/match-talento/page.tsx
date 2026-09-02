'use client';

// =============================================================================
// PUNTOCLICK — Buscador de Talento & Match para Empresas
// Permite a las empresas buscar, filtrar y conectar con talentos en Neon DB
// =============================================================================

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { ProfileAvatar } from '@/components/design-system';

interface Talent {
  id: string;
  userId: string;
  name: string;
  firstName: string;
  lastName: string;
  currentJobTitle: string;
  bio: string;
  photoUrl: string | null;
  skills: string[];
  location: string;
  workModes: string[];
  contractTypes: string[];
  completionPct: number;
  educationLevel: string;
  currentlyWorking: boolean;
  affinityScore: number;
  matchStatus: string;
}

const SKILL_FILTERS = [
  'Todos',
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'UI/UX',
  'Figma',
  'DevOps',
  'AWS',
  'Cybersecurity',
  'Flutter',
  'PostgreSQL',
];

const WORK_MODE_FILTERS = [
  { id: 'todas', label: 'Todas las modalidades' },
  { id: 'remoto', label: 'Remoto' },
  { id: 'hibrido', label: 'Híbrido' },
  { id: 'presencial', label: 'Presencial' },
];

export default function MatchTalentoPage() {
  const [talents, setTalents] = useState<Talent[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('Todos');
  const [selectedWorkMode, setSelectedWorkMode] = useState('todas');
  const [selectedTalentModal, setSelectedTalentModal] = useState<Talent | null>(null);
  const [connectingMap, setConnectingMap] = useState<Record<string, boolean>>({});
  const [connectedMap, setConnectedMap] = useState<Record<string, boolean>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Fetch talents from API
  useEffect(() => {
    async function fetchTalents() {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams();
        if (searchQuery) queryParams.set('q', searchQuery);
        if (selectedSkill !== 'Todos') queryParams.set('skill', selectedSkill);
        if (selectedWorkMode !== 'todas') queryParams.set('workMode', selectedWorkMode);

        const res = await fetch(`/api/talentos?${queryParams.toString()}`);
        if (res.ok) {
          const data = await res.json();
          setTalents(data.talentos || []);
        }
      } catch (err) {
        console.error('[Error fetching talents]:', err);
      } finally {
        setLoading(false);
      }
    }

    const timer = setTimeout(() => {
      fetchTalents();
    }, 250);

    return () => clearTimeout(timer);
  }, [searchQuery, selectedSkill, selectedWorkMode]);

  // Handle Match / Connect
  const handleConnect = async (talent: Talent) => {
    setConnectingMap((prev) => ({ ...prev, [talent.id]: true }));
    try {
      const res = await fetch('/api/matches', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ talentId: talent.id }),
      });

      if (res.ok) {
        setConnectedMap((prev) => ({ ...prev, [talent.id]: true }));
        setToastMessage(`¡Solicitud de match enviada a ${talent.name}!`);
      } else {
        const data = await res.json();
        setToastMessage(data.error || 'No se pudo enviar la solicitud.');
      }
    } catch {
      setToastMessage('Error de conexión. Intenta de nuevo.');
    } finally {
      setConnectingMap((prev) => ({ ...prev, [talent.id]: false }));
      setTimeout(() => setToastMessage(null), 4000);
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedSkill('Todos');
    setSelectedWorkMode('todas');
  };

  return (
    <div className="bg-background text-on-background min-h-screen font-body-md flex flex-col pb-24 selection:bg-primary-container selection:text-on-primary-container">
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-fade-in-up font-medium text-sm border border-primary-fixed-dim">
          <span className="material-symbols-outlined text-base">check_circle</span>
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 text-on-primary/80 hover:text-on-primary"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-30 bg-surface/90 backdrop-blur-md border-b border-surface-variant/40 shadow-xs">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-lg h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/empresa/dashboard"
              className="flex items-center justify-center p-2 text-primary hover:bg-surface-container rounded-full transition-colors"
              aria-label="Volver al Dashboard"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <div>
              <h1 className="font-headline-md text-headline-md-mobile md:text-headline-md font-bold text-primary tracking-wide">
                BUSCADOR DE TALENTO
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-secondary-container/60 text-on-secondary-container rounded-full text-xs font-semibold">
              <span className="material-symbols-outlined text-sm">database</span>
              <span>Talentos Verificados · Neon DB</span>
            </div>
            <Link
              href="/empresa/dashboard"
              className="text-xs font-bold text-primary hover:bg-primary-container/30 px-3 py-1.5 rounded-lg transition-colors"
            >
              Mi Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Search & Filters Section */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-lg w-full flex-grow py-md md:py-lg space-y-md">
        {/* Search Bar Hero */}
        <section className="bg-surface-container-low rounded-2xl p-md md:p-lg border border-surface-variant/40 shadow-ambient">
          <div className="max-w-3xl">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background font-bold mb-xs">
              Encuentra al candidato ideal para tu empresa
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-md">
              Filtra por habilidades, nombre o modalidad de trabajo y conecta directamente mediante afinidad algorítmica.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full max-w-2xl mb-md">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-[22px] pointer-events-none">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por cargo (Frontend, UX, DevOps...), nombre o ciudad..."
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl pl-11 pr-10 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface p-1 rounded-full cursor-pointer"
                title="Limpiar búsqueda"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            )}
          </div>

          {/* Work Mode Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-sm">
            <span className="text-xs font-semibold text-on-surface-variant mr-1">Modalidad:</span>
            {WORK_MODE_FILTERS.map((wm) => (
              <button
                key={wm.id}
                onClick={() => setSelectedWorkMode(wm.id)}
                type="button"
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedWorkMode === wm.id
                    ? 'bg-primary text-on-primary shadow-xs'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {wm.label}
              </button>
            ))}
          </div>

          {/* Skill Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-sm border-t border-surface-container-high">
            <span className="text-xs font-semibold text-on-surface-variant mr-1">Habilidades:</span>
            {SKILL_FILTERS.map((skill) => (
              <button
                key={skill}
                onClick={() => setSelectedSkill(skill)}
                type="button"
                className={`px-2.5 py-1 rounded-lg text-xs transition-colors cursor-pointer ${
                  selectedSkill === skill
                    ? 'bg-secondary-container text-on-secondary-container font-bold shadow-xs border border-secondary'
                    : 'bg-surface-container-lowest border border-surface-container-high text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </section>

        {/* Results Counter & Controls */}
        <div className="flex items-center justify-between px-1">
          <p className="text-sm font-medium text-on-surface-variant">
            {loading ? (
              <span className="inline-flex items-center gap-2">
                <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
                Buscando talentos en la base de datos...
              </span>
            ) : (
              <span>
                Mostrando <strong>{talents.length}</strong> {talents.length === 1 ? 'talento compatible' : 'talentos compatibles'}
              </span>
            )}
          </p>

          {(searchQuery || selectedSkill !== 'Todos' || selectedWorkMode !== 'todas') && (
            <button
              onClick={resetFilters}
              className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">refresh</span>
              Restablecer filtros
            </button>
          )}
        </div>

        {/* Talent Cards Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div
                key={idx}
                className="bg-surface-container-low rounded-2xl p-md border border-surface-variant/40 animate-pulse h-64 flex flex-col justify-between"
              >
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 rounded-full bg-surface-container-high" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-surface-container-high rounded w-3/4" />
                    <div className="h-3 bg-surface-container-high rounded w-1/2" />
                    <div className="h-3 bg-surface-container-high rounded w-2/3" />
                  </div>
                </div>
                <div className="h-8 bg-surface-container-high rounded-lg w-full" />
              </div>
            ))}
          </div>
        ) : talents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
            {talents.map((talent) => {
              const isConnected = connectedMap[talent.id] || talent.matchStatus === 'company_interested' || talent.matchStatus === 'mutual';
              const isConnecting = connectingMap[talent.id];

              return (
                <div
                  key={talent.id}
                  className="bg-surface-container-lowest rounded-2xl p-md border border-surface-container-high shadow-ambient hover:shadow-ambient-md transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Bar with Affinity Badge */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      {/* Avatar with generic template fallback */}
                      <ProfileAvatar
                        src={talent.photoUrl}
                        name={talent.name}
                        type="talent"
                        size="lg"
                        verified={true}
                      />

                      <div className="min-w-0">
                        <div className="flex items-center gap-1">
                          <h3 className="font-headline-sm text-headline-sm font-bold text-on-background truncate">
                            {talent.name}
                          </h3>
                        </div>
                        <p className="text-xs text-primary font-semibold truncate">
                          {talent.currentJobTitle}
                        </p>
                        <p className="text-[11px] text-on-surface-variant flex items-center gap-0.5 mt-0.5">
                          <span className="material-symbols-outlined text-[13px]">location_on</span>
                          <span className="truncate">{talent.location}</span>
                        </p>
                      </div>
                    </div>

                    {/* Affinity Score Pill */}
                    <div
                      className="shrink-0 px-2.5 py-1 rounded-full text-xs font-bold bg-primary-container text-on-primary-container border border-primary/30 flex items-center gap-1 shadow-2xs"
                      title="Porcentaje de afinidad calculado"
                    >
                      <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                      <span>{talent.affinityScore}%</span>
                    </div>
                  </div>

                  {/* Bio snippet */}
                  <p className="text-xs text-on-surface-variant line-clamp-2 mb-3 leading-relaxed">
                    {talent.bio || 'Perfil profesional registrado y verificado en la red de talento de PuntoClic.'}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {talent.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-surface-container text-on-surface text-[11px] font-medium rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                    {talent.skills.length > 4 && (
                      <span className="px-1.5 py-0.5 text-on-surface-variant text-[11px] font-medium">
                        +{talent.skills.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Work Modes & Availability Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-surface-container-high mb-3 text-[11px] text-on-surface-variant">
                    <span className="capitalize">
                      {talent.workModes.length > 0 ? talent.workModes.join(' · ') : 'Modalidad Flexible'}
                    </span>
                    {talent.currentlyWorking ? (
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">
                        Disponible
                      </span>
                    ) : (
                      <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full font-semibold">
                        Búsqueda Activa
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedTalentModal(talent)}
                      type="button"
                      className="py-2 px-3 border border-outline-variant rounded-xl text-xs font-bold text-on-surface hover:bg-surface-container transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[15px]">visibility</span>
                      Ver Perfil
                    </button>

                    <button
                      onClick={() => handleConnect(talent)}
                      disabled={isConnected || isConnecting}
                      type="button"
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                        isConnected
                          ? 'bg-emerald-600 text-white cursor-default'
                          : 'bg-primary text-on-primary hover:opacity-95 active:scale-95 shadow-xs'
                      }`}
                    >
                      {isConnecting ? (
                        <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
                      ) : isConnected ? (
                        <>
                          <span className="material-symbols-outlined text-[15px]">check</span>
                          Conectado
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-outlined text-[15px]">handshake</span>
                          Conectar
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-surface-container-low rounded-2xl p-xl border border-surface-variant/40 text-center flex flex-col items-center justify-center max-w-lg mx-auto my-8">
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-3">
              <span className="material-symbols-outlined text-3xl">person_search</span>
            </div>
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-1">
              No se encontraron talentos
            </h3>
            <p className="text-sm text-on-surface-variant mb-4 max-w-sm">
              No hay candidatos que coincidan con los filtros aplicados. Intenta ampliar tus criterios de búsqueda.
            </p>
            <button
              onClick={resetFilters}
              type="button"
              className="px-4 py-2 bg-primary text-on-primary rounded-xl text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span className="material-symbols-outlined text-sm">refresh</span>
              Restablecer filtros y ver todos
            </button>
          </div>
        )}
      </main>

      {/* Talent Detail Modal */}
      {selectedTalentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
          <div
            className="bg-surface-container-lowest w-full max-w-xl rounded-2xl border border-surface-container-high shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-md md:p-lg border-b border-surface-container-high flex items-start justify-between bg-surface-container-low/50">
              <div className="flex items-center gap-3">
                <ProfileAvatar
                  src={selectedTalentModal.photoUrl}
                  name={selectedTalentModal.name}
                  type="talent"
                  size="xl"
                  verified={true}
                />
                <div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-background">
                    {selectedTalentModal.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold">
                    {selectedTalentModal.currentJobTitle}
                  </p>
                  <p className="text-xs text-on-surface-variant flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    {selectedTalentModal.location}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedTalentModal(null)}
                className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer"
                aria-label="Cerrar modal"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-md md:p-lg overflow-y-auto space-y-md">
              {/* Afinidad Banner */}
              <div className="p-3 rounded-xl bg-primary-container/40 border border-primary/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">auto_awesome</span>
                  <span className="text-xs font-bold text-on-primary-container">
                    Índice de Afinidad con tu Empresa
                  </span>
                </div>
                <span className="text-sm font-bold text-primary">
                  {selectedTalentModal.affinityScore}% de Match
                </span>
              </div>

              {/* Bio */}
              <div>
                <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-primary">person</span>
                  Sobre el talento
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed bg-surface-container-low p-3 rounded-xl">
                  {selectedTalentModal.bio || 'El candidato aún no ha añadido una biografía extensa a su perfil.'}
                </p>
              </div>

              {/* Habilidades */}
              <div>
                <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm text-primary">psychology</span>
                  Habilidades y Tecnologías
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTalentModal.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-secondary-container text-on-secondary-container text-xs font-semibold rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Educación & Modalidades */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-surface-container-low p-3 rounded-xl">
                  <span className="text-[11px] text-on-surface-variant uppercase tracking-wider font-semibold block mb-0.5">
                    Educación
                  </span>
                  <span className="text-xs font-bold text-on-surface">
                    {selectedTalentModal.educationLevel || 'No especificada'}
                  </span>
                </div>
                <div className="bg-surface-container-low p-3 rounded-xl">
                  <span className="text-[11px] text-on-surface-variant uppercase tracking-wider font-semibold block mb-0.5">
                    Modalidad preferida
                  </span>
                  <span className="text-xs font-bold text-on-surface capitalize">
                    {selectedTalentModal.workModes.join(', ') || 'Flexible'}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-md border-t border-surface-container-high bg-surface-container-low flex justify-end gap-2">
              <button
                onClick={() => setSelectedTalentModal(null)}
                className="px-4 py-2 text-xs font-bold text-on-surface-variant hover:text-on-surface cursor-pointer"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  handleConnect(selectedTalentModal);
                  setSelectedTalentModal(null);
                }}
                disabled={connectedMap[selectedTalentModal.id]}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  connectedMap[selectedTalentModal.id]
                    ? 'bg-emerald-600 text-white cursor-default'
                    : 'bg-primary text-on-primary hover:opacity-90 shadow-xs'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">
                  {connectedMap[selectedTalentModal.id] ? 'check' : 'handshake'}
                </span>
                <span>
                  {connectedMap[selectedTalentModal.id] ? 'Conexión Enviada' : 'Solicitar Match Directo'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
