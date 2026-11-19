'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, Image as ImageIcon } from 'lucide-react';

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
          ? 'bg-cream-100/95 backdrop-blur-md shadow-sm border-b border-academic/10 py-2 sm:py-2.5'
          : 'bg-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / School Logo & Class emblem */}
        <div
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* TDMU School Logo */}
          <div className="relative h-8 w-20 sm:h-9 sm:w-24 shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/tdmu-logo.png"
              alt="Logo Trường Đại học Thủ Dầu Một"
              fill
              priority
              sizes="100px"
              className="object-contain object-left"
            />
          </div>

          <span className="h-6 w-[1.5px] bg-academic/20 hidden xs:inline-block" />

          <div>
            <div className="font-handwriting text-xl sm:text-2xl text-navy font-bold leading-none flex items-center gap-1">
              <span>D26CNTT05</span>
              <span className="text-gold text-base sm:text-lg">♡</span>
            </div>
            <p className="text-[9.5px] sm:text-[10px] font-semibold uppercase tracking-wider text-academic">
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
          <div className="px-2.5 sm:px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-navy font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>20.11</span>
          </div>
        </div>
      </div>
    </header>
  );
}
