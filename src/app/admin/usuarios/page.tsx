'use client';

import { useState } from 'react';
import Link from 'next/link';

const USERS = [
  { id: 1, initials: 'DP', name: 'Dayana Padilla', email: 'dayana@ejemplo.com', role: 'Talento', status: 'Activo', date: '15 Oct 2024', color: 'bg-primary-container text-on-primary-container' },
  { id: 2, initials: 'TH', name: 'TechHive Solutions', email: 'contacto@techhive.com', role: 'Empresa', status: 'Activo', date: '10 Oct 2024', color: 'bg-tertiary-container text-on-tertiary-container' },
  { id: 3, initials: 'UC', name: 'Universidad Central', email: 'info@ucentral.edu.ni', role: 'Institución', status: 'Pendiente', date: '08 Oct 2024', color: 'bg-secondary-container text-on-secondary-container' },
  { id: 4, initials: 'MR', name: 'Mario Ríos', email: 'marios@ecosistema.io', role: 'Mentor', status: 'Activo', date: '02 Oct 2024', color: 'bg-primary-container text-on-primary-container' },
  { id: 5, initials: 'LG', name: 'Lucía Gómez', email: 'lucia.gomez@email.com', role: 'Talento', status: 'Inactivo', date: '28 Sep 2024', color: 'bg-secondary-container text-on-secondary-container' },
  { id: 6, initials: 'IN', name: 'InnoCorp Nica', email: 'hr@innocorp.com.ni', role: 'Empresa', status: 'Activo', date: '20 Sep 2024', color: 'bg-tertiary-container text-on-tertiary-container' },
];

const STATUS_COLORS: Record<string, string> = {
  Activo: 'bg-emerald-100 text-emerald-800',
  Pendiente: 'bg-amber-100 text-amber-800',
  Inactivo: 'bg-surface-container-high text-on-surface-variant',
};

const ROLE_COLORS: Record<string, string> = {
  Talento: 'bg-primary-container text-on-primary-container',
  Empresa: 'bg-tertiary-container text-on-tertiary-container',
  Institución: 'bg-secondary-container text-on-secondary-container',
  Mentor: 'bg-surface-container-highest text-on-surface',
};

export default function AdminUsuariosPage() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const filtered = USERS.filter((u) => {
    const q = search.toLowerCase();
    const matchSearch = u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.role.toLowerCase().includes(q);
    const matchRole = roleFilter ? u.role === roleFilter : true;
    const matchStatus = statusFilter ? u.status === statusFilter : true;
    return matchSearch && matchRole && matchStatus;
  });

  return (
    <main className="flex-1 p-margin-mobile md:p-lg space-y-lg max-w-container-max mx-auto w-full pb-24 md:pb-lg">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-md">
        <div>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background font-bold">
            Gestión de Usuarios
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Administra los usuarios registrados, sus roles y estados en el ecosistema.
          </p>
        </div>
        <div className="flex gap-sm">
          <button
            type="button"
            className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2.5 rounded-xl shadow-xs hover:opacity-90 transition-all flex items-center gap-2 font-bold cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">person_add</span>
            Crear Usuario
          </button>
        </div>
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
        <div className="bg-surface-container-lowest rounded-2xl p-md border border-surface-container shadow-ambient">
          <p className="text-label-sm text-on-surface-variant font-bold mb-1">Total Usuarios</p>
          <p className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-background">12,450</p>
          <span className="text-xs text-emerald-700 font-semibold">+12% este mes</span>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-md border border-surface-container shadow-ambient">
          <p className="text-label-sm text-on-surface-variant font-bold mb-1">Activos</p>
          <p className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-emerald-700">11,280</p>
          <span className="text-xs text-on-surface-variant font-semibold">90.6%</span>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-md border border-surface-container shadow-ambient">
          <p className="text-label-sm text-on-surface-variant font-bold mb-1">Pendientes</p>
          <p className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-amber-600">847</p>
          <span className="text-xs text-on-surface-variant font-semibold">Verificación</span>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl p-md border border-surface-container shadow-ambient">
          <p className="text-label-sm text-on-surface-variant font-bold mb-1">Inactivos</p>
          <p className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-on-surface-variant">323</p>
          <span className="text-xs text-on-surface-variant font-semibold">2.6%</span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-surface-container-low p-md rounded-2xl border border-surface-container-high shadow-ambient flex flex-col md:flex-row gap-md items-stretch md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
            search
          </span>
          <input
            type="text"
            placeholder="Buscar por nombre, email o rol..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-surface border border-outline-variant rounded-xl pl-10 pr-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
          />
        </div>
        <div className="flex gap-sm flex-wrap">
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="bg-surface border border-outline-variant rounded-xl px-3 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary cursor-pointer"
          >
            <option value="">Todos los Roles</option>
            <option>Talento</option>
            <option>Empresa</option>
            <option>Institución</option>
            <option>Mentor</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-surface border border-outline-variant rounded-xl px-3 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary cursor-pointer"
          >
            <option value="">Todos los Estados</option>
            <option>Activo</option>
            <option>Pendiente</option>
            <option>Inactivo</option>
          </select>
          <button
            type="button"
            onClick={() => { setSearch(''); setRoleFilter(''); setStatusFilter(''); }}
            className="bg-surface border border-outline-variant rounded-xl px-3 py-2.5 text-sm text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer font-semibold flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">filter_list_off</span>
            Limpiar
          </button>
        </div>
      </div>

      {/* Users Table — with mobile horizontal scroll */}
      <div className="bg-surface-container-lowest rounded-2xl border border-surface-container-high shadow-ambient overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-surface-container-high text-on-surface-variant font-label-md text-label-md">
                <th className="p-4 font-bold">Usuario</th>
                <th className="p-4 font-bold">Rol</th>
                <th className="p-4 font-bold">Estado</th>
                <th className="p-4 font-bold">Fecha de Registro</th>
                <th className="p-4 text-right font-bold">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high text-sm">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-on-surface-variant">
                    No se encontraron usuarios con los filtros aplicados.
                  </td>
                </tr>
              )}
              {filtered.map((u) => (
                <tr key={u.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${u.color} flex items-center justify-center font-bold text-sm shrink-0`}>
                        {u.initials}
                      </div>
                      <div>
                        <p className="font-bold text-on-background">{u.name}</p>
                        <p className="text-xs text-on-surface-variant">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`${ROLE_COLORS[u.role] ?? 'bg-surface-container text-on-surface'} px-2.5 py-1 rounded-full text-xs font-semibold`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`${STATUS_COLORS[u.status] ?? ''} px-2.5 py-1 rounded-full text-xs font-semibold`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="p-4 text-on-surface-variant whitespace-nowrap">{u.date}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        type="button"
                        className="p-1.5 rounded-lg hover:bg-surface-container transition-colors text-primary cursor-pointer"
                        title="Editar"
                      >
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                      <button
                        type="button"
                        className="p-1.5 rounded-lg hover:bg-surface-container transition-colors text-secondary cursor-pointer"
                        title="Ver detalle"
                      >
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                      </button>
                      <button
                        type="button"
                        className="p-1.5 rounded-lg hover:bg-error-container/30 transition-colors text-error cursor-pointer"
                        title="Eliminar"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="flex items-center justify-between p-4 border-t border-surface-container-high bg-surface-container-low">
          <p className="text-label-sm text-on-surface-variant font-medium">
            Mostrando {filtered.length} de {USERS.length} usuarios
          </p>
          <div className="flex gap-1">
            <button
              type="button"
              className="px-3 py-1.5 text-sm rounded-lg bg-surface border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer font-semibold"
            >
              Anterior
            </button>
            <button
              type="button"
              className="px-3 py-1.5 text-sm rounded-lg bg-primary text-on-primary font-semibold cursor-pointer"
            >
              1
            </button>
            <button
              type="button"
              className="px-3 py-1.5 text-sm rounded-lg bg-surface border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer font-semibold"
            >
              2
            </button>
            <button
              type="button"
              className="px-3 py-1.5 text-sm rounded-lg bg-surface border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer font-semibold"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
