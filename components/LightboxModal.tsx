'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export interface LightboxImage {
  src: string;
  caption: string;
  alt: string;
}

interface LightboxModalProps {
  images: LightboxImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < images.length;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || currentIndex === null) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh phóng to"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-navy-deep/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar: Counter & Close button */}
        <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-academic/10 text-academic">
              {currentIndex + 1} / {images.length}
            </span>
            <span className="text-xs text-gray-500 hidden sm:inline">
              (Dùng phím ← → để chuyển ảnh, Esc để đóng)
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Đóng"
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 hover:text-navy transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image Display Area */}
        <div className="relative w-full max-h-[72vh] flex items-center justify-center overflow-hidden rounded-xl bg-gray-50/60">
          <div className="relative w-full h-[55vh] sm:h-[65vh]">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
              className="object-contain transition-transform duration-300"
            />
          </div>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Ảnh trước"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 text-navy hover:bg-white hover:scale-105 shadow-md transition-all border border-gray-200/50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Ảnh kế tiếp"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 text-navy hover:bg-white hover:scale-105 shadow-md transition-all border border-gray-200/50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Caption */}
        <div className="pt-3 text-center w-full">
          <p className="font-handwriting text-xl sm:text-2xl text-navy font-bold tracking-wide">
            {currentImage.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
