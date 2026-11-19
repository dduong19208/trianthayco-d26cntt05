'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Flower2 } from 'lucide-react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotSpeed: number;
  swing: number;
  swingSpeed: number;
  color: string;
  opacity: number;
  type: 'petal' | 'sparkle';
}

export default function PetalsEffect() {
  const [isActive, setIsActive] = useState<boolean>(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const petalColors = [
      '#F8D7DA', // Soft pink blossom
      '#FCE8E6', // Light blush
      '#F2B705', // Warm gold
      '#FFEAA7', // Pastel yellow
      '#EBF2FC', // Light academic blue blossom
    ];

    const totalParticles = Math.min(Math.floor(width / 35), 45);
    const particles: Petal[] = [];

    for (let i = 0; i < totalParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 8 + 6,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1.2 + 0.8,
        rotation: Math.random() * 360,
        rotSpeed: Math.random() * 2 - 1,
        swing: Math.random() * Math.PI * 2,
        swingSpeed: Math.random() * 0.02 + 0.01,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        opacity: Math.random() * 0.6 + 0.25,
        type: Math.random() > 0.35 ? 'petal' : 'sparkle',
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.swing += p.swingSpeed;
        p.x += Math.sin(p.swing) * 0.8 + p.speedX;
        p.rotation += p.rotSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'petal') {
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(
            -p.size / 2,
            -p.size / 2,
            -p.size,
            p.size / 3,
            0,
            p.size
          );
          ctx.bezierCurveTo(
            p.size,
            p.size / 3,
            p.size / 2,
            -p.size / 2,
            0,
            0
          );
          ctx.fill();
        } else {
          // Sparkle star (✦)
          ctx.fillStyle = p.color;
          ctx.beginPath();
          const s = p.size * 0.55;
          ctx.moveTo(0, -s);
          ctx.quadraticCurveTo(0, 0, s, 0);
          ctx.quadraticCurveTo(0, 0, 0, s);
          ctx.quadraticCurveTo(0, 0, -s, 0);
          ctx.quadraticCurveTo(0, 0, 0, -s);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive]);

  return (
    <>
      {isActive && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-20"
        />
      )}

      {/* Floating Toggle Button - optimized for mobile safe area */}
      <button
        onClick={() => setIsActive(!isActive)}
        aria-label={isActive ? 'Tắt hiệu ứng cánh hoa' : 'Bật hiệu ứng cánh hoa'}
        className={`fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center gap-1.5 p-2.5 sm:px-3.5 sm:py-2.5 rounded-full text-xs font-medium shadow-md transition-all duration-300 backdrop-blur-sm border ${
          isActive
            ? 'bg-white/95 text-navy border-academic/20 hover:bg-white hover:shadow-lg'
            : 'bg-white/75 text-gray-500 border-gray-200 hover:bg-white hover:text-navy'
        }`}
        title={isActive ? 'Tắt hiệu ứng cánh hoa & lấp lánh' : 'Bật hiệu ứng cánh hoa & lấp lánh'}
      >
        <Flower2 className="w-4 h-4 text-academic" />
        <span className="hidden sm:inline">{isActive ? 'Cánh hoa: Bật' : 'Cánh hoa: Tắt'}</span>
        {isActive && <Sparkles className="w-3.5 h-3.5 text-gold hidden sm:inline" />}
      </button>
    </>
  );
}
