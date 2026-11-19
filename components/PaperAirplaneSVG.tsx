import React from 'react';

interface PaperAirplaneProps {
  className?: string;
  withTrail?: boolean;
}

export default function PaperAirplaneSVG({
  className = '',
  withTrail = false,
}: PaperAirplaneProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {withTrail && (
        <svg
          className="absolute -left-20 -bottom-3 w-24 h-12 text-academic/40 -z-10"
          viewBox="0 0 100 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        >
          <path d="M5,35 Q40,40 60,20 T95,5" />
        </svg>
      )}
      <svg
        className="w-8 h-8 text-academic hover:text-gold transition-colors duration-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    </div>
  );
}
