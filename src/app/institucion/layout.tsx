import { TopAppBar, BottomNav, institutionNavItems } from '@/components/design-system';

export default function InstitucionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-on-background min-h-screen pt-16 pb-24 md:pb-12 selection:bg-primary-container selection:text-on-primary-container">
      <TopAppBar showMenu />
      {children}
      <BottomNav items={institutionNavItems} />
    </div>
  );
}
