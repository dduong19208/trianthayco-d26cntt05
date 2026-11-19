'use client';

import React from 'react';
import TimelineCard from './TimelineCard';
import PolaroidPhoto from './PolaroidPhoto';
import { Calendar, GraduationCap, Heart, Sparkles } from 'lucide-react';

interface TimelineSectionProps {
  onOpenLightbox: (index: number) => void;
}

export default function TimelineSection({ onOpenLightbox }: TimelineSectionProps) {
  return (
    <section id="timeline-section" className="relative py-8 sm:py-12 md:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-24 space-y-2.5 sm:space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-academic/10 border border-academic/20 text-xs sm:text-sm font-semibold tracking-wider text-navy uppercase">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>Hành Trình Tri Ân & Kỷ Niệm</span>
        </div>

        <h2 className="font-handwriting text-3xl sm:text-5xl md:text-6xl text-navy font-bold break-words px-2">
          Những Dòng Cảm Xúc Gửi Trao
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-xl mx-auto px-3">
          Từng chặng đường học tập, từng bài giảng quý báu dưới mái trường Đại học Thủ Dầu Một luôn khắc sâu trong trái tim chúng em.
        </p>

        <div className="flex items-center justify-center gap-2 pt-1.5">
          <span className="w-10 sm:w-12 h-0.5 bg-gold/50 rounded-full" />
          <Heart className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gold fill-gold/30" />
          <span className="w-10 sm:w-12 h-0.5 bg-gold/50 rounded-full" />
        </div>
      </div>

      {/* Main Timeline Container */}
      <div className="relative">
        {/* Central Vertical Line (Visible on Desktop lg+) */}
        <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-academic/20 via-academic/60 to-navy/80" />

        {/* =========================================
            STAGE 01: Tháng 11 – Tháng tri ân
           ========================================= */}
        <div className="relative mb-10 sm:mb-16 md:mb-24">
          {/* Center Node Badge on Desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-4 border-academic shadow-md items-center justify-center z-10 text-xs font-bold text-navy">
            01
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            {/* Left: Card 01 */}
            <div>
              <TimelineCard
                step="01"
                title="Tháng 11 – Tháng tri ân"
                badgeSubtitle="Mùa tri ân nở hoa"
                content="Tháng 11 lại về, mang theo những yêu thương, sự trân trọng và lòng biết ơn sâu sắc dành cho những người đã và đang miệt mài với sự nghiệp trồng người."
              />
            </div>

            {/* Right: Scrapbook note & Calendar leaf */}
            <div className="hidden lg:flex justify-center">
              <div className="w-full max-w-sm paper-card p-6 rounded-2xl bg-white/80 border border-gold/30 shadow-card-soft rotate-1 hover:rotate-0 transition-transform duration-300 relative">
                <div className="washi-tape top-0 right-8 washi-tape-blue -translate-y-1/2" />
                <div className="flex items-center gap-3 mb-3 text-academic">
                  <Calendar className="w-5 h-5 text-gold" />
                  <span className="font-semibold text-xs uppercase tracking-wider text-navy">
                    Tháng Mười Một Yêu Thương
                  </span>
                </div>
                <p className="font-handwriting text-2xl text-navy/90 leading-relaxed">
                  &ldquo;Nét chữ nết người, công ơn thầy cô ghi lòng tạc dạ.&rdquo;
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Ngày 20 tháng 11</span>
                  <span className="font-semibold text-academic">TDMU • 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            STAGE 02: Nhân ngày Nhà giáo Việt Nam 20/11
           ========================================= */}
        <div className="relative mb-10 sm:mb-16 md:mb-24">
          {/* Center Node Badge on Desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-4 border-navy shadow-md items-center justify-center z-10 text-xs font-bold text-navy">
            02
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            {/* Left: Decorative Institute & Academic card */}
            <div className="hidden lg:flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-sm paper-card p-6 rounded-2xl bg-white/80 border border-academic/20 shadow-card-soft -rotate-1 hover:rotate-0 transition-transform duration-300 relative">
                <div className="washi-tape top-0 left-8 -translate-y-1/2" />
                <div className="flex items-center gap-3 mb-3 text-navy">
                  <GraduationCap className="w-6 h-6 text-academic" />
                  <span className="font-semibold text-xs uppercase tracking-wider text-academic">
                    Viện Công Nghệ Số
                  </span>
                </div>
                <p className="font-sans text-sm text-gray-700 leading-relaxed">
                  Nơi chắp cánh cho những ước mơ công nghệ, nơi thầy cô truyền lửa nhiệt huyết kiến tạo tương lai số.
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="font-medium text-navy">Trường Đại học Thủ Dầu Một</span>
                  <span className="text-gold font-bold">★ D26CNTT05</span>
                </div>
              </div>
            </div>

            {/* Right: Card 02 */}
            <div className="order-1 lg:order-2">
              <TimelineCard
                step="02"
                title="Nhân ngày Nhà giáo Việt Nam 20/11"
                badgeSubtitle="Lời ngỏ chân thành"
                content="Nhân ngày Nhà giáo Việt Nam 20/11, tập thể lớp D26CNTT05 chúng em xin gửi đến quý thầy cô, đặc biệt là các giảng viên Viện Công nghệ số, cùng toàn thể quý thầy cô, cán bộ, giảng viên Trường Đại học Thủ Dầu Một lời tri ân chân thành và sâu sắc nhất."
              />
            </div>
          </div>
        </div>

        {/* =========================================
            STAGE 03: Cảm ơn thầy cô... + Ảnh lớp 1
           ========================================= */}
        <div className="relative mb-10 sm:mb-16 md:mb-24">
          {/* Center Node Badge on Desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-4 border-academic shadow-md items-center justify-center z-10 text-xs font-bold text-navy">
            03
          </div>

          {/* Flexible layout: Text on one side, Class Photo 1 on the other side on desktop.
              On mobile: photo positioned right above or beside the text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            {/* Mobile-only photo 1 preview (above card on mobile) */}
            <div className="block lg:hidden mb-1">
              <PolaroidPhoto
                src="/images/anh-lop-1.jpg"
                alt="Tập thể lớp D26CNTT05 chụp kỷ niệm cùng quý thầy cô"
                caption="Tập thể lớp D26CNTT05 ♡"
                tilt="right"
                aspectRatio="aspect-[4/3]"
                tapeColor="yellow"
                tapePosition="top-right"
                onClick={() => onOpenLightbox(1)}
              />
            </div>

            {/* Left: Card 03 */}
            <div>
              <TimelineCard
                step="03"
                title="Cảm ơn thầy cô..."
                badgeSubtitle="Ghi lòng tạc dạ"
                content="Cảm ơn thầy cô đã không chỉ truyền đạt tri thức mà còn trao gửi niềm tin, khơi dậy đam mê, hun đúc bản lĩnh và chắp cánh cho những ước mơ của bao thế hệ sinh viên. Đằng sau mỗi bài giảng là sự tận tâm, phía sau mỗi thành công của sinh viên là biết bao tâm huyết, kiên nhẫn và những hy sinh thầm lặng của thầy cô."
              />
            </div>

            {/* Right: Desktop Polaroid Class Photo 1 */}
            <div className="hidden lg:block">
              <PolaroidPhoto
                src="/images/anh-lop-1.jpg"
                alt="Tập thể lớp D26CNTT05 chụp kỷ niệm cùng quý thầy cô"
                caption="Tập thể lớp D26CNTT05 ♡"
                tilt="right"
                aspectRatio="aspect-[4/3]"
                tapeColor="yellow"
                tapePosition="top-right"
                onClick={() => onOpenLightbox(1)}
              />
            </div>
          </div>
        </div>

        {/* =========================================
            STAGE 04: Kính chúc quý thầy cô + Ảnh lớp 2
           ========================================= */}
        <div className="relative mb-8 sm:mb-12">
          {/* Center Node Badge on Desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-4 border-gold shadow-md items-center justify-center z-10 text-xs font-bold text-navy">
            04
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            {/* Mobile-only photo 2 preview (above card on mobile) */}
            <div className="block lg:hidden mb-1">
              <PolaroidPhoto
                src="/images/anh-lop-2.jpg"
                alt="Khoảnh khắc thanh xuân rực rỡ của tập thể lớp D26CNTT05"
                caption="Tập thể lớp D26CNTT05 ♡"
                tilt="left"
                aspectRatio="aspect-[4/3]"
                tapeColor="blue"
                tapePosition="top-left"
                onClick={() => onOpenLightbox(2)}
              />
            </div>

            {/* Left: Desktop Polaroid Class Photo 2 (Balanced placement opposite Card 04) */}
            <div className="hidden lg:block order-2 lg:order-1">
              <PolaroidPhoto
                src="/images/anh-lop-2.jpg"
                alt="Khoảnh khắc thanh xuân rực rỡ của tập thể lớp D26CNTT05"
                caption="Tập thể lớp D26CNTT05 ♡"
                tilt="left"
                aspectRatio="aspect-[4/3]"
                tapeColor="blue"
                tapePosition="top-left"
                onClick={() => onOpenLightbox(2)}
              />
            </div>

            {/* Right: Card 04 */}
            <div className="order-1 lg:order-2">
              <TimelineCard
                step="04"
                title="Kính chúc quý thầy cô"
                badgeSubtitle="Gửi ngàn lời chúc"
                content="Kính chúc quý thầy cô luôn dồi dào sức khỏe, bình an, hạnh phúc và giữ mãi ngọn lửa nhiệt huyết với nghề. Mong rằng trên hành trình gieo mầm tri thức, thầy cô sẽ luôn nhận được thật nhiều yêu thương, trân trọng và những trái ngọt xứng đáng."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
