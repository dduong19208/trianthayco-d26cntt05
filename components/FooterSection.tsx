'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import HeartCounter from './HeartCounter';
import HoaDauSVG from './HoaDauSVG';
import { ArrowUp, Share2, Check, Sparkles, Heart } from 'lucide-react';

export default function FooterSection() {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-academic via-navy to-navy-dark text-white pt-12 sm:pt-16 pb-12 overflow-hidden shadow-2xl">
      {/* Decorative Wave Transition on Top */}
      <div className="absolute top-0 inset-x-0 overflow-hidden leading-none pointer-events-none -translate-y-full">
        <svg
          className="relative block w-full h-8 sm:h-12 text-academic fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Decorative background glow & sparkles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-academic-light/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 z-10">
        {/* Heart Counter interactive section */}
        <div className="pt-2">
          <HeartCounter />
        </div>

        {/* Big handwriting title */}
        <div className="space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-gold text-xs sm:text-sm uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            <span>Kính Chúc Quý Thầy Cô</span>
            <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
          </div>

          <h2 className="font-handwriting text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-tight drop-shadow-md break-words px-2">
            Chúc mừng ngày Nhà giáo Việt Nam 20/11
          </h2>
        </div>

        {/* Full concluding wish - 100% Verbatim */}
        <div className="max-w-3xl mx-auto py-3.5 px-4 sm:py-4 sm:px-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-inner">
          <p className="font-sans text-sm sm:text-base md:text-xl text-white/95 leading-relaxed font-normal">
            Chúc mừng ngày Nhà giáo Việt Nam 20/11 – Kính chúc những người lái đò thầm lặng luôn vững tay chèo, bền lòng với sự nghiệp cao quý của mình!
          </p>
        </div>

        {/* TDMU School Logo Badge & Cánh Hoa Dầu */}
        <div className="flex justify-center items-center gap-3 pt-1">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/95 shadow-md border border-white/30 backdrop-blur-sm">
            <div className="relative h-7 w-20 sm:h-8 sm:w-24 shrink-0">
              <Image
                src="/images/tdmu-logo.png"
                alt="Logo Trường Đại học Thủ Dầu Một"
                fill
                sizes="100px"
                className="object-contain"
              />
            </div>
            <span className="h-4 w-[1px] bg-gray-200" />
            <span className="text-[11px] sm:text-xs font-semibold text-navy flex items-center gap-1.5">
              <span>Viện Công Nghệ Số</span>
              <HoaDauSVG size={16} color="#D97706" />
            </span>
          </div>
        </div>

        {/* Signature line - 100% Verbatim */}
        <div className="pt-1 pb-2 sm:pb-4">
          <p className="font-handwriting text-xl sm:text-2xl md:text-3xl text-gold font-bold tracking-wide break-words px-2 leading-snug">
            Tập thể lớp D26CNTT05 – Viện Công nghệ số – Trường Đại học Thủ Dầu Một
          </p>
          <div className="flex items-center justify-center gap-1 text-white/70 text-xs sm:text-sm mt-2">
            <span>Thiết kế gửi trọn yêu thương</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 mx-1" />
            <span>Tháng 11 năm 2026</span>
          </div>
        </div>

        {/* Action buttons: Share & Back to Top */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-3 border-t border-white/15 text-xs text-white/80">
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-200"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-400" />
                <span>Đã sao chép liên kết!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-gold" />
                <span>Chia sẻ trang tri ân</span>
              </>
            )}
          </button>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-200"
          >
            <ArrowUp className="w-3.5 h-3.5 text-gold" />
            <span>Về đầu trang</span>
          </button>
        </div>

        {/* Public Host info note */}
        <div className="text-[11px] text-white/50 pt-2 font-mono flex items-center justify-center gap-2">
          <span>trianthayco.duyduong.site</span>
          <span>•</span>
          <span>D26CNTT05 – TDMU</span>
        </div>
      </div>
    </footer>
  );
}
