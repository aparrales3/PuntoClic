// =============================================================================
// PUNTOCLICK — Design System: ProfileAvatar Component
// Robust avatar with automatic fallback to generic template with initials / icons
// =============================================================================

'use client';

import { useState } from 'react';

export interface ProfileAvatarProps {
  src?: string | null;
  name: string;
  type?: 'talent' | 'company' | 'institution';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  rounded?: 'full' | 'xl' | '2xl';
  verified?: boolean;
  className?: string;
}

const SIZE_MAP = {
  xs: { container: 'w-6 h-6 text-[10px]', icon: 'text-[12px]', verified: 'w-2.5 h-2.5 text-[8px]' },
  sm: { container: 'w-8 h-8 text-xs', icon: 'text-[15px]', verified: 'w-3.5 h-3.5 text-[9px]' },
  md: { container: 'w-12 h-12 text-base', icon: 'text-[22px]', verified: 'w-4 h-4 text-[11px]' },
  lg: { container: 'w-16 h-16 text-xl', icon: 'text-[28px]', verified: 'w-5 h-5 text-[13px]' },
  xl: { container: 'w-24 h-24 text-2xl', icon: 'text-[38px]', verified: 'w-6 h-6 text-[15px]' },
  '2xl': { container: 'w-28 h-28 md:w-36 md:h-36 text-3xl md:text-4xl', icon: 'text-[48px] md:text-[56px]', verified: 'w-7 h-7 text-[16px]' },
};

const GRADIENTS = {
  talent: 'bg-gradient-to-br from-amber-500/20 via-primary-container to-amber-700/30 text-on-primary-container border-amber-300/40',
  company: 'bg-gradient-to-br from-blue-600/20 via-secondary-container to-indigo-800/30 text-on-secondary-container border-blue-300/40',
  institution: 'bg-gradient-to-br from-violet-600/20 via-tertiary-container to-purple-800/30 text-on-tertiary-container border-purple-300/40',
};

const ICONS = {
  talent: 'person',
  company: 'business',
  institution: 'school',
};

export function ProfileAvatar({
  src,
  name,
  type = 'talent',
  size = 'md',
  rounded = 'full',
  verified = false,
  className = '',
}: ProfileAvatarProps) {
  const [imageFailed, setImageFailed] = useState(false);

  const sizeStyles = SIZE_MAP[size] || SIZE_MAP.md;
  const gradientStyle = GRADIENTS[type] || GRADIENTS.talent;
  const fallbackIcon = ICONS[type] || ICONS.talent;

  // Extract initials (max 2 characters)
  const cleanName = (name || '').trim();
  const words = cleanName.split(/\s+/).filter(Boolean);
  const initials =
    words.length >= 2
      ? `${words[0][0]}${words[1][0]}`.toUpperCase()
      : cleanName.slice(0, 2).toUpperCase() || (type === 'company' ? 'EM' : type === 'institution' ? 'IN' : 'PC');

  const roundedClass =
    rounded === 'full'
      ? 'rounded-full'
      : rounded === 'xl'
      ? 'rounded-xl'
      : 'rounded-2xl';

  const showImage = src && !imageFailed;

  return (
    <div className={`relative inline-flex shrink-0 ${className}`}>
      <div
        className={`${sizeStyles.container} ${roundedClass} overflow-hidden shadow-xs border border-surface-variant/40 flex items-center justify-center font-bold select-none relative bg-surface-container-high transition-all`}
      >
        {showImage ? (
          <img
            src={src}
            alt={cleanName ? `Avatar de ${cleanName}` : 'Avatar de perfil'}
            className="w-full h-full object-cover"
            onError={() => setImageFailed(true)}
            loading="lazy"
          />
        ) : (
          /* Generic Template / Placeholder */
          <div
            className={`w-full h-full flex flex-col items-center justify-center ${gradientStyle} ${roundedClass} relative`}
            title={cleanName}
          >
            {/* Subtle background icon pattern */}
            <span
              className={`material-symbols-outlined ${sizeStyles.icon} opacity-20 absolute select-none pointer-events-none`}
            >
              {fallbackIcon}
            </span>
            <span className="font-bold tracking-tight z-10 drop-shadow-xs">
              {initials}
            </span>
          </div>
        )}
      </div>

      {/* Verified Badge */}
      {verified && (
        <div
          className={`absolute -bottom-0.5 -right-0.5 ${sizeStyles.verified} bg-primary text-on-primary rounded-full flex items-center justify-center border-2 border-surface shadow-xs`}
          title="Perfil verificado en PuntoClic"
        >
          <span className="material-symbols-outlined text-[1em] font-bold">verified</span>
        </div>
      )}
    </div>
  );
}
