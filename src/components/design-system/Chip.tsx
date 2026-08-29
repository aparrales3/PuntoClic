// =============================================================================
// PUNTOCLICK — Design System: Chip/Tag Component
// Celeste Pastel background, used for skills & categories
// =============================================================================

import { type HTMLAttributes } from 'react';

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'skill' | 'status' | 'location';
  icon?: string;
}

export function Chip({
  variant = 'skill',
  icon,
  children,
  className = '',
  ...props
}: ChipProps) {
  const variantClass = {
    skill:
      'bg-[--color-secondary-container] text-[--color-on-secondary-container] border border-[--color-secondary]/10',
    status:
      'bg-[--color-tertiary-container] text-[--color-on-tertiary-container]',
    location:
      'bg-[--color-surface-container-high] text-[--color-on-surface] border border-[--color-surface-variant]',
  }[variant];

  return (
    <span
      className={[
        'inline-flex items-center gap-1',
        'rounded-[--radius-full] px-3 py-1',
        'text-label-sm font-medium',
        variantClass,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {icon && (
        <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
          {icon}
        </span>
      )}
      {children}
    </span>
  );
}

/** Match score badge */
export function MatchBadge({ score }: { score: number }) {
  const color =
    score >= 85
      ? 'text-[--color-primary]'
      : score >= 70
      ? 'text-[--color-secondary]'
      : 'text-[--color-tertiary]';

  return (
    <div className="flex flex-col items-end">
      <span className={`text-headline-md leading-none ${color}`}>{score}%</span>
      <span className="text-label-sm text-[--color-on-surface-variant]">Match</span>
    </div>
  );
}
