'use client';

import React from 'react';

export default function WatercolorBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Left Watercolor Splash */}
      <div className="watercolor-corner-tl opacity-70" />

      {/* Top Right Watercolor Splash */}
      <div className="watercolor-corner-tr opacity-60" />

      {/* Bottom Right Watercolor Splash */}
      <div className="watercolor-corner-br opacity-80" />

      {/* Bottom Left Watercolor Splash */}
      <div className="watercolor-corner-bl opacity-70" />

      {/* Subtle organic SVG wave curves in corners */}
      <svg
        className="absolute top-0 right-0 w-[420px] h-[320px] opacity-25 text-academic"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 C150,90 280,30 400,120 L400,0 Z"
          fill="currentColor"
          fillOpacity="0.15"
        />
        <path
          d="M80,0 C200,140 320,60 400,180 L400,0 Z"
          fill="currentColor"
          fillOpacity="0.08"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-[450px] h-[340px] opacity-20 text-academic"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,300 C120,200 240,260 400,160 L0,160 Z"
          fill="currentColor"
          fillOpacity="0.12"
        />
        <path
          d="M0,300 C160,180 260,220 380,100 L0,100 Z"
          fill="currentColor"
          fillOpacity="0.06"
        />
      </svg>
    </div>
  );
}
