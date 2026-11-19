'use client';

import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
}

export default function HeartCounter() {
  const [likes, setLikes] = useState<number>(2011);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [floatingHearts, setFloatingHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('d26cntt05_hearts_count');
    if (saved) {
      setLikes(parseInt(saved, 10));
    }
  }, []);

  const handleSendHeart = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newCount = likes + 1;
    setLikes(newCount);
    localStorage.setItem('d26cntt05_hearts_count', newCount.toString());

    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 400);

    // Floating heart at click
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setFloatingHearts((prev) => [
      ...prev.slice(-8),
      {
        id,
        x: rect.width / 2 + (Math.random() * 40 - 20),
        y: -10,
      },
    ]);

    // Canvas confetti burst
    confetti({
      particleCount: 18,
      spread: 60,
      origin: {
        x: rect.left / window.innerWidth + rect.width / (2 * window.innerWidth),
        y: rect.top / window.innerHeight,
      },
      colors: ['#F2B705', '#1B3B6F', '#2C5AA0', '#FF6B6B'],
      disableForReducedMotion: true,
    });

    setTimeout(() => {
      setFloatingHearts((prev) => prev.filter((h) => h.id !== id));
    }, 1500);
  };

  return (
    <div className="relative inline-flex flex-col items-center">
      {/* Floating hearts */}
      {floatingHearts.map((h) => (
        <span
          key={h.id}
          className="absolute pointer-events-none text-red-500 text-lg animate-float-slow -top-8"
          style={{
            left: `${h.x}px`,
            animation: 'floatUp 1.2s ease-out forwards',
          }}
        >
          ❤️
        </span>
      ))}

      <button
        onClick={handleSendHeart}
        className={`group relative flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-navy font-semibold shadow-card-soft hover:shadow-card-hover border border-academic/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
          isAnimating ? 'ring-4 ring-gold/40' : ''
        }`}
      >
        <span className="relative flex items-center justify-center">
          <Heart
            className={`w-5 h-5 text-red-500 fill-red-500 transition-transform duration-300 group-hover:scale-125 ${
              isAnimating ? 'scale-150 animate-heart-burst' : ''
            }`}
          />
        </span>
        <span className="font-sans text-sm">
          Thả tim tri ân Thầy Cô{' '}
          <span className="font-mono font-bold text-academic ml-1">
            ({likes.toLocaleString('vi-VN')})
          </span>
        </span>
      </button>

      <style jsx>{`
        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translateY(0) scale(0.8);
          }
          100% {
            opacity: 0;
            transform: translateY(-50px) scale(1.4);
          }
        }
      `}</style>
    </div>
  );
}
