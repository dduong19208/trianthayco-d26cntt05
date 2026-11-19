import React from 'react';

interface TimelineCardProps {
  step: string;
  title: string;
  content: string;
  badgeSubtitle?: string;
  className?: string;
}

export default function TimelineCard({
  step,
  title,
  content,
  badgeSubtitle = 'Hành trình tri ân',
  className = '',
}: TimelineCardProps) {
  return (
    <article
      className={`relative paper-card rounded-xl sm:rounded-2xl p-4.5 sm:p-6 md:p-8 border border-academic/15 bg-white/95 backdrop-blur-sm shadow-card-soft transition-all duration-300 hover:shadow-card-hover ${className}`}
    >
      {/* Decorative top washi tape accent */}
      <div className="absolute -top-3 left-6 sm:left-8 w-16 sm:w-20 h-4.5 sm:h-5 bg-gold/50 rounded-sm shadow-sm rotate-[-2deg] pointer-events-none" />

      {/* Header Bar */}
      <div className="flex items-start gap-3 sm:gap-3.5 pb-3 sm:pb-4 mb-3.5 sm:mb-4 border-b border-academic/10">
        {/* Navy circular badge with step number */}
        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy text-white flex items-center justify-center font-mono font-bold text-base sm:text-lg shadow-md ring-2 ring-gold/60 mt-0.5">
          <span>{step}</span>
        </div>

        {/* Title and subtitle - NO TRUNCATION, FULL WRAP */}
        <div className="min-w-0 flex-1">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-academic block mb-0.5">
            {badgeSubtitle}
          </span>
          <h3 className="font-handwriting text-xl sm:text-2xl md:text-3xl text-navy font-bold leading-snug sm:leading-tight break-words">
            {title}
          </h3>
        </div>
      </div>

      {/* Verbatim Content - Fully legible on all screen sizes */}
      <p className="font-sans text-navy/90 text-[14.5px] sm:text-base md:text-[17px] leading-relaxed text-left sm:text-justify hyphens-none">
        {content}
      </p>

      {/* Subtle corner flourish */}
      <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 flex items-center justify-end text-gold text-xs font-handwriting">
        <span>D26CNTT05 ♡</span>
      </div>
    </article>
  );
}
