// =============================================================================
// PUNTOCLICK — Design System: Card Component
// rounded-xl, ambient shadow, warm cream surface
// =============================================================================

import { type HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Highlighted card (Bee Yellow background) */
  highlighted?: boolean;
  /** Clickable card with hover effect */
  interactive?: boolean;
  /** Elevation level */
  elevation?: 'none' | 'sm' | 'md';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      highlighted = false,
      interactive = false,
      elevation = 'sm',
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const elevationClass = {
      none: '',
      sm: 'shadow-ambient',
      md: 'shadow-ambient-md',
    }[elevation];

    const baseClass = highlighted
      ? 'bg-[--color-primary-container] text-[--color-on-primary-container] border border-[--color-primary-fixed-dim]/30'
      : 'bg-[--color-surface-container-lowest] border border-[--color-surface-variant]/40';

    const interactiveClass = interactive
      ? 'cursor-pointer hover:shadow-ambient-md hover:scale-[1.005] transition-all duration-200 active:scale-[0.998]'
      : '';

    return (
      <div
        ref={ref}
        className={[
          'rounded-[--radius-xl] p-[--spacing-md]',
          baseClass,
          elevationClass,
          interactiveClass,
          'relative overflow-hidden',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/** Stat card for dashboard grids */
export function StatCard({
  label,
  value,
  icon,
  trend,
  className = '',
}: {
  label: string;
  value: string | number;
  icon: string;
  trend?: { value: string; positive: boolean };
  className?: string;
}) {
  return (
    <Card className={`flex flex-col justify-between ${className}`}>
      <div className="flex justify-between items-start mb-[--spacing-sm]">
        <span className="text-label-md text-[--color-on-surface-variant] uppercase tracking-wider">
          {label}
        </span>
        <span className="material-symbols-outlined text-[--color-secondary]" style={{ fontVariationSettings: "'FILL' 1" }}>
          {icon}
        </span>
      </div>
      <div className="mt-auto">
        <span className="text-headline-lg-mobile text-[--color-on-background]">
          {value}
        </span>
        {trend && (
          <span
            className={`ml-2 text-label-sm inline-flex items-center gap-0.5 ${
              trend.positive
                ? 'text-[--color-secondary]'
                : 'text-[--color-error]'
            }`}
          >
            <span className="material-symbols-outlined text-[12px]">
              {trend.positive ? 'trending_up' : 'trending_down'}
            </span>
            {trend.value}
          </span>
        )}
      </div>
    </Card>
  );
}
