// =============================================================================
// PUNTOCLICK — Design System: Input Component
// Cream background, tertiary border → primary on focus
// =============================================================================

import { forwardRef, type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, hint, id, className = '', ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-[--spacing-xs]">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-label-md text-[--color-on-surface]"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[--color-on-surface-variant] pointer-events-none"
              style={{ fontSize: '20px' }}
            >
              {icon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={[
              'w-full',
              'bg-[--color-surface-container-lowest]',
              'border',
              error
                ? 'border-[--color-error] focus:ring-[--color-error]'
                : 'border-[--color-tertiary-fixed-dim] focus:border-[--color-primary] focus:ring-[--color-primary]',
              'rounded-[--radius-lg]',
              'px-4 py-3',
              icon ? 'pl-10' : '',
              'text-body-md text-[--color-on-surface]',
              'placeholder:text-[--color-on-surface-variant]',
              'focus:outline-none focus:ring-2',
              'transition-all duration-150',
              'shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              className,
            ]
              .filter(Boolean)
              .join(' ')}
            {...props}
          />
        </div>
        {error && (
          <p className="text-label-sm text-[--color-error] flex items-center gap-1">
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
              error
            </span>
            {error}
          </p>
        )}
        {hint && !error && (
          <p className="text-label-sm text-[--color-on-surface-variant]">{hint}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

/** Textarea variant */
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, id, className = '', ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-[--spacing-xs]">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-label-md text-[--color-on-surface]"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={[
            'w-full',
            'bg-[--color-surface-container-lowest]',
            'border',
            error
              ? 'border-[--color-error] focus:ring-[--color-error]'
              : 'border-[--color-tertiary-fixed-dim] focus:border-[--color-primary] focus:ring-[--color-primary]',
            'rounded-[--radius-lg]',
            'px-4 py-3',
            'text-body-md text-[--color-on-surface]',
            'placeholder:text-[--color-on-surface-variant]',
            'focus:outline-none focus:ring-2',
            'transition-all duration-150',
            'resize-y min-h-[120px]',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          {...props}
        />
        {error && (
          <p className="text-label-sm text-[--color-error]">{error}</p>
        )}
        {hint && !error && (
          <p className="text-label-sm text-[--color-on-surface-variant]">{hint}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
