// =============================================================================
// PUNTOCLICK — Design System: Button Component
// Primary (Bee Yellow), Secondary (ghost), Danger variants
// =============================================================================

import { forwardRef, type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[--color-primary-container] text-[--color-on-primary-container] ' +
    'hover:bg-[--color-primary-fixed-dim] active:scale-[0.98] ' +
    'shadow-[0_4px_12px_rgba(244,190,55,0.2)] hover:shadow-[0_6px_16px_rgba(244,190,55,0.3)]',
  secondary:
    'bg-[--color-surface-container-lowest] text-[--color-on-surface] ' +
    'border-2 border-[--color-outline] ' +
    'hover:bg-[--color-surface-variant] active:scale-[0.98]',
  ghost:
    'bg-transparent text-[--color-primary] ' +
    'hover:bg-[--color-surface-container] active:scale-[0.98]',
  danger:
    'bg-[--color-error-container] text-[--color-on-error-container] ' +
    'hover:opacity-90 active:scale-[0.98]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'py-2 px-3 text-label-sm rounded-[--radius-md]',
  md: 'py-3 px-[--spacing-md] text-label-md rounded-[--radius-lg]',
  lg: 'py-4 px-[--spacing-lg] text-body-md rounded-[--radius-lg]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      fullWidth = false,
      children,
      disabled,
      className = '',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={[
          'inline-flex items-center justify-center gap-2',
          'font-semibold transition-all duration-150',
          'focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:ring-offset-2',
          'focus:ring-offset-[--color-background]',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100',
          variantClasses[variant],
          sizeClasses[size],
          fullWidth ? 'w-full' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {loading ? (
          <span
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
            aria-hidden="true"
          />
        ) : (
          icon
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
