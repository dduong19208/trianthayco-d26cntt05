'use client';

import React, { useEffect, useRef, useState } from 'react';
import HoaDauSVG from './HoaDauSVG';
import { Sparkles } from 'lucide-react';

interface HoaDauParticle {
  x: number;
  y: number;
  length: number;      // Chiều dài cánh hoa dầu
  width: number;       // Bề ngang cánh
  speedX: number;
  speedY: number;
  rotation: number;    // Góc quay hiện tại
  rotSpeed: number;    // Tốc độ quay tự xoay kiểu cánh quạt trực thăng (autorotation)
  swing: number;       // Dao động lượn ngang
  swingSpeed: number;
  colorWing: string;
  colorSeed: string;
  opacity: number;
  type: 'hoadau' | 'sparkle';
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

    // Bảng màu cánh hoa dầu Thủ Dầu Một (nâu vàng hổ phách, vàng cam nắng chiều)
    const wingColors = [
      '#D97706', // Hổ phách đậm
      '#B45309', // Nâu cánh gián hoa dầu khô
      '#F59E0B', // Vàng cam ấm
      '#E5A842', // Vàng nắng
      '#C2410C', // Cam đất trầm
    ];

    const totalParticles = Math.min(Math.floor(width / 40), 38);
    const particles: HoaDauParticle[] = [];

    for (let i = 0; i < totalParticles; i++) {
      const isHoaDau = Math.random() > 0.3;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        length: Math.random() * 16 + 22,    // Cánh hoa dầu dài 22-38px
        width: Math.random() * 4 + 6,       // Bề rộng cánh
        speedX: Math.random() * 0.8 - 0.4,
        speedY: isHoaDau ? Math.random() * 1.0 + 1.2 : Math.random() * 0.6 + 0.6,
        rotation: Math.random() * 360,
        // Cánh hoa dầu xoay tròn rất nhanh khi rơi tự do
        rotSpeed: (Math.random() * 4 + 3) * (Math.random() > 0.5 ? 1 : -1),
        swing: Math.random() * Math.PI * 2,
        swingSpeed: Math.random() * 0.02 + 0.015,
        colorWing: wingColors[Math.floor(Math.random() * wingColors.length)],
        colorSeed: '#78350F', // Hạt màu nâu đậm
        opacity: Math.random() * 0.55 + 0.35,
        type: isHoaDau ? 'hoadau' : 'sparkle',
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.swing += p.swingSpeed;
        p.x += Math.sin(p.swing) * 1.2 + p.speedX;
        p.rotation += p.rotSpeed;

        // Reset khi rơi hết màn hình
        if (p.y > height + 40) {
          p.y = -35;
          p.x = Math.random() * width;
        }
        if (p.x > width + 30) p.x = -20;
        if (p.x < -30) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'hoadau') {
          // VẼ CÁNH HOA DẦU THỦ DẦU MỘT (2 cánh dài đối xứng + 1 hạt ở cuống)
          const L = p.length;
          const W = p.width;

          // Cánh 1 (vươn sang hướng trên-trái)
          ctx.fillStyle = p.colorWing;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(-W * 0.6, -L * 0.3, -W * 1.1, -L * 0.7, -W * 0.2, -L);
          ctx.bezierCurveTo(W * 0.2, -L * 0.8, W * 0.1, -L * 0.3, 0, 0);
          ctx.fill();

          // Cánh 2 (vươn sang hướng trên-phải, mở góc V khoảng 35 độ)
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(W * 0.6, -L * 0.3, W * 1.1, -L * 0.7, W * 0.2, -L);
          ctx.bezierCurveTo(-W * 0.2, -L * 0.8, -W * 0.1, -L * 0.3, 0, 0);
          ctx.fill();

          // Gân cánh mờ tinh tế
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(-W * 0.15, -L * 0.85);
          ctx.moveTo(0, 0);
          ctx.lineTo(W * 0.15, -L * 0.85);
          ctx.stroke();

          // Hạt tròn ở đáy cánh hoa dầu
          ctx.fillStyle = p.colorSeed;
          ctx.beginPath();
          ctx.arc(0, 2, W * 0.55, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Bụi vàng lấp lánh (✦)
          ctx.fillStyle = p.colorWing;
          ctx.beginPath();
          const s = 4.5;
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

      {/* Floating Toggle Button – Biểu tượng Cánh hoa dầu Thủ Dầu Một */}
      <button
        onClick={() => setIsActive(!isActive)}
        aria-label={isActive ? 'Tắt hiệu ứng hoa dầu bay' : 'Bật hiệu ứng hoa dầu bay'}
        className={`fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center gap-1.5 p-2 sm:px-3.5 sm:py-2.5 rounded-full text-xs font-medium shadow-md transition-all duration-300 backdrop-blur-sm border ${
          isActive
            ? 'bg-white/95 text-navy border-academic/20 hover:bg-white hover:shadow-lg'
            : 'bg-white/75 text-gray-500 border-gray-200 hover:bg-white hover:text-navy'
        }`}
        title={isActive ? 'Tắt hiệu ứng cánh hoa dầu bay' : 'Bật hiệu ứng cánh hoa dầu bay'}
      >
        <span className={`inline-block ${isActive ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }}>
          <HoaDauSVG size={18} color={isActive ? '#D97706' : '#9CA3AF'} />
        </span>
        <span className="hidden sm:inline font-sans">{isActive ? 'Hoa dầu: Bật' : 'Hoa dầu: Tắt'}</span>
        {isActive && <Sparkles className="w-3.5 h-3.5 text-gold hidden sm:inline" />}
      </button>
    </>
  );
}
