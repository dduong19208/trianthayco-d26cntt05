'use client';

import React from 'react';
import Image from 'next/image';
import { Maximize2 } from 'lucide-react';

interface PolaroidPhotoProps {
  src: string;
  alt: string;
  caption: string;
  tilt?: 'left' | 'right' | 'none';
  aspectRatio?: 'aspect-[4/3]' | 'aspect-[16/9]' | 'aspect-[16/10]';
  tapeColor?: 'yellow' | 'blue';
  tapePosition?: 'top-center' | 'top-left' | 'top-right';
  priority?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function PolaroidPhoto({
  src,
  alt,
  caption,
  tilt = 'none',
  aspectRatio = 'aspect-[4/3]',
  tapeColor = 'yellow',
  tapePosition = 'top-center',
  priority = false,
  onClick,
  className = '',
}: PolaroidPhotoProps) {
  const tiltClasses = {
    left: '-rotate-1 sm:-rotate-2 md:-rotate-3 hover:rotate-0 hover:scale-[1.02]',
    right: 'rotate-1 sm:rotate-2 md:rotate-3 hover:rotate-0 hover:scale-[1.02]',
    none: 'hover:scale-[1.01]',
  };

  const tapePositions = {
    'top-center': 'left-1/2 -top-3.5 -translate-x-1/2 rotate-1',
    'top-left': 'left-4 sm:left-6 -top-3.5 -rotate-6',
    'top-right': 'right-4 sm:right-6 -top-3.5 rotate-6',
  };

  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`group relative select-none cursor-pointer polaroid-frame transition-all duration-500 ease-out p-3 pb-5 sm:p-3.5 sm:pb-7 ${tiltClasses[tilt]} ${className}`}
    >
      {/* Decorative Washi Tape */}
      <div
        className={`washi-tape ${
          tapeColor === 'blue' ? 'washi-tape-blue' : ''
        } ${tapePositions[tapePosition]}`}
      />

      {/* Image container */}
      <div className={`relative w-full ${aspectRatio} overflow-hidden rounded-md bg-gray-100 shadow-inner`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Hover zoom indicator */}
        <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-navy text-xs font-medium shadow-md backdrop-blur-sm">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Phóng to</span>
          </span>
        </div>
      </div>

      {/* Polaroid Caption - full wrap without cutting words */}
      <div className="pt-2.5 sm:pt-3.5 pb-0.5 text-center px-1">
        <p className="font-handwriting text-lg sm:text-xl md:text-2xl text-navy font-bold tracking-wide group-hover:text-academic transition-colors flex items-center justify-center gap-1.5 break-words">
          <span>{caption}</span>
        </p>
      </div>

      {/* Subtle corner pin / clip detail */}
      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gold/40 border border-gold/70 opacity-60" />
    </div>
  );
}
