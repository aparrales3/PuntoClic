// =============================================================================
// PUNTOCLICK — Company Portal Layout
// =============================================================================

import { TopAppBar, BottomNav, companyNavItems } from '@/components/design-system';

export default function EmpresaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[--color-background] min-h-screen">
      <TopAppBar showMenu />
      <div className="pt-16 pb-24 md:pb-12">
        {children}
      </div>
      <BottomNav items={companyNavItems} />
    </div>
  );
}
