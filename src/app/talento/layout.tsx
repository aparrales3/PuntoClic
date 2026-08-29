import { TopAppBar, BottomNav, talentNavItems } from '@/components/design-system';

export default function TalentoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-on-background min-h-screen pt-16 pb-24 md:pb-12 selection:bg-primary-container selection:text-on-primary-container">
      <TopAppBar
        showMenu
        avatarUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDw5L4zmwrHM6O0rHe9L1JmCFh2Rv0gTcYzGqoZHcz2sr2UxdyMgHiKAGPyEvKiAh3WH7v16y_Ah-3BLZ2lxFY-iLgJc5rXqiDTp1VGZY4u8BsiyC_qqfvokdfpkB50hElwH1bIx5pXGsEpIj0CYuJzeF3lMdujfdbP4BYSXc-JAAz2PpYU4THZNi2oklzKIyTJRQtzunWMzkTp_wpiUVWmNy_CWeYsFpzKEXKy_AqBiQlng1pioIoO"
      />
      {children}
      <BottomNav items={talentNavItems} />
    </div>
  );
}

