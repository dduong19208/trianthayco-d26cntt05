'use client';

import React, { useState, useEffect } from 'react';
import { GraduationCap, Heart, Sparkles, Image as ImageIcon } from 'lucide-react';

interface NavbarProps {
  onOpenLightbox: (index: number) => void;
}

export default function Navbar({ onOpenLightbox }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-100/90 backdrop-blur-md shadow-sm border-b border-academic/10 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Emblem */}
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-9 h-9 rounded-xl bg-navy text-white flex items-center justify-center shadow-md ring-1 ring-gold/40">
            <GraduationCap className="w-5 h-5 text-gold" />
          </div>
          <div>
            <div className="font-handwriting text-2xl text-navy font-bold leading-none flex items-center gap-1">
              <span>D26CNTT05</span>
              <span className="text-gold text-lg">♡</span>
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-academic">
              Viện Công Nghệ Số • TDMU
            </p>
          </div>
        </div>

        {/* Quick Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-navy/80">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-academic transition-colors"
          >
            Trang Chủ
          </button>
          <button
            onClick={() => scrollToSection('timeline-section')}
            className="hover:text-academic transition-colors"
          >
            Trục Tri Ân
          </button>
          <button
            onClick={() => onOpenLightbox(0)}
            className="hover:text-academic transition-colors flex items-center gap-1.5"
          >
            <ImageIcon className="w-3.5 h-3.5 text-academic" />
            <span>Kỷ Niệm Ảnh</span>
          </button>
        </nav>

        {/* Right Badge: 20/11 */}
        <div className="flex items-center gap-2">
          <div className="px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-navy font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>20.11</span>
          </div>
        </div>
      </div>
    </header>
  );
}
