'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TimelineSection from '@/components/TimelineSection';
import FooterSection from '@/components/FooterSection';
import LightboxModal, { LightboxImage } from '@/components/LightboxModal';
import PetalsEffect from '@/components/PetalsEffect';
import BackgroundMusic from '@/components/BackgroundMusic';
import WatercolorBackground from '@/components/WatercolorBackground';

export default function HomePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryImages: LightboxImage[] = [
    {
      src: '/images/anh-thay-co.jpg',
      caption: 'Quý Thầy Cô – Viện Công nghệ số ♡',
      alt: 'Ảnh tập thể Quý Thầy Cô Viện Công nghệ số – Trường Đại học Thủ Dầu Một',
    },
    {
      src: '/images/anh-lop-1.jpg',
      caption: 'Tập thể lớp D26CNTT05 ♡',
      alt: 'Ảnh kỷ niệm tập thể lớp D26CNTT05 cùng Quý Thầy Cô',
    },
    {
      src: '/images/anh-lop-2.jpg',
      caption: 'Tập thể lớp D26CNTT05 ♡',
      alt: 'Khoảnh khắc thanh xuân rực rỡ của tập thể lớp D26CNTT05',
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-cream-100">
      {/* Decorative watercolor corner textures */}
      <WatercolorBackground />

      {/* Falling petals & sparkles interactive effect */}
      <PetalsEffect />

      {/* Gentle background music player */}
      <BackgroundMusic />

      {/* Top Header / Navigation */}
      <Navbar onOpenLightbox={(idx) => setLightboxIndex(idx)} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-1">
        {/* A. Hero Section (2 columns on desktop, stacked on mobile) */}
        <HeroSection onOpenLightbox={(idx) => setLightboxIndex(idx)} />

        {/* B. Main Content (4-stage Timeline + Class Photos) */}
        <TimelineSection onOpenLightbox={(idx) => setLightboxIndex(idx)} />
      </main>

      {/* C. Footer Section */}
      <FooterSection />

      {/* Unified Lightbox Modal for all images */}
      <LightboxModal
        images={galleryImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
}
