// =============================================================================
// PUNTOCLICK — Talent Portal Layout
// =============================================================================

import { TopAppBar, BottomNav, talentNavItems } from '@/components/design-system';

export default function TalentoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[--color-background] min-h-screen">
      <TopAppBar
        showMenu
        avatarUrl="/avatar-placeholder.svg"
      />
      <div className="pt-16 pb-24 md:pb-12">
        {children}
      </div>
      <BottomNav items={talentNavItems} />
    </div>
  );
}
