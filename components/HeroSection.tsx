'use client';

import React from 'react';
import PolaroidPhoto from './PolaroidPhoto';
import PaperAirplaneSVG from './PaperAirplaneSVG';
import { Sparkles, BookOpen, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenLightbox: (index: number) => void;
}

export default function HeroSection({ onOpenLightbox }: HeroSectionProps) {
  const scrollToTimeline = () => {
    const el = document.getElementById('timeline-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 md:pt-14 md:pb-24 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Decorative Floating Airplane */}
      <div className="absolute top-6 right-8 md:right-24 hidden sm:block animate-flight pointer-events-none">
        <PaperAirplaneSVG withTrail />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
        {/* Left Column (Hero Text & Info) */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
          {/* Top Label with decorative lines on both sides */}
          <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 max-w-full">
            <span className="hidden sm:inline-block h-[1.5px] w-6 sm:w-12 bg-academic/40 rounded-full" />
            <div className="inline-flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-academic/10 border border-academic/20 text-[10.5px] sm:text-xs md:text-sm font-semibold tracking-wider text-navy uppercase max-w-full text-center">
              <span>LỜI TRI ÂN NHỮNG NGƯỜI LÁI ĐÒ THẦM LẶNG</span>
              <span className="text-academic font-bold">•</span>
              <span className="text-academic font-bold">D26CNTT05</span>
            </div>
            <span className="hidden sm:inline-block h-[1.5px] w-6 sm:w-12 bg-academic/40 rounded-full" />
          </div>

          {/* Main Title: Tri ân Thầy Cô + Heart */}
          <div className="relative">
            <h1 className="font-handwriting text-[42px] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-navy font-bold leading-tight tracking-tight drop-shadow-sm break-words">
              Tri ân Thầy Cô{' '}
              <span className="inline-block text-gold text-3xl sm:text-5xl md:text-6xl animate-pulse align-middle ml-1">
                ♡
              </span>
            </h1>

            {/* Subtle decorative stamp / badge */}
            <div className="inline-flex items-center justify-center gap-1.5 mt-2.5 px-3 py-1 rounded-md bg-gold/15 text-navy font-medium text-[11px] sm:text-xs md:text-sm border border-gold/40 max-w-full text-center">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark shrink-0" />
              <span>Kỷ niệm 44 năm Ngày Nhà giáo Việt Nam (20/11/1982 – 20/11/2026)</span>
            </div>
          </div>

          {/* Slogan in italics */}
          <blockquote className="relative py-2 pl-3.5 sm:pl-4 border-l-4 border-gold/70 lg:border-l-4 text-navy/90 text-left max-w-xl mx-auto lg:mx-0">
            <p className="font-sans italic text-base sm:text-xl md:text-2xl font-medium tracking-wide">
              &ldquo;Ươm mầm tri thức – Thắp sáng tương lai&rdquo;
            </p>
          </blockquote>

          {/* Subtitle / Department & University info */}
          <div className="text-xs sm:text-sm md:text-base text-navy/80 space-y-1">
            <p className="font-semibold text-academic text-sm sm:text-base">
              Viện Công nghệ số – Trường Đại học Thủ Dầu Một
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              Gửi trọn tình cảm tri ân sâu sắc nhất từ các bạn sinh viên tập thể lớp D26CNTT05
            </p>
          </div>

          {/* Action Button: Scroll down to read timeline */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button
              onClick={scrollToTimeline}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-navy text-white font-medium text-xs sm:text-sm shadow-md hover:bg-academic hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4 text-gold" />
              <span>Đọc từng trang tri ân</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>

        {/* Right Column (Polaroid Photo 1: Teachers' photo) */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-none">
            <PolaroidPhoto
              src="/images/anh-thay-co.jpg"
              alt="Ảnh tập thể Quý Thầy Cô Viện Công nghệ số - Trường Đại học Thủ Dầu Một"
              caption="Quý Thầy Cô – Viện Công nghệ số ♡"
              tilt="left"
              aspectRatio="aspect-[16/10]"
              tapeColor="yellow"
              tapePosition="top-center"
              priority={true}
              onClick={() => onOpenLightbox(0)}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
