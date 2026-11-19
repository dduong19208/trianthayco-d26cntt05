import React from 'react';

interface HoaDauSVGProps {
  className?: string;
  size?: number;
  color?: string;
}

/**
 * Biểu tượng Cánh Hoa Dầu – nét đặc trưng thanh xuân của Đại học Thủ Dầu Một (TDMU)
 * Quả dầu rái với 2 cánh dài thanh thoát chao liệng xoay tít trong gió
 */
export default function HoaDauSVG({
  className = '',
  size = 32,
  color = 'currentColor',
}: HoaDauSVGProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cánh trái thuôn dài */}
      <path
        d="M48 78 C35 60 22 35 26 12 C28 5 38 6 44 18 C50 32 52 58 50 78 Z"
        fill={color}
        fillOpacity="0.85"
      />
      {/* Gân cánh trái */}
      <path
        d="M34 16 C36 34 45 56 49 76"
        stroke="#FFF"
        strokeWidth="1.2"
        strokeOpacity="0.4"
        strokeLinecap="round"
      />

      {/* Cánh phải thuôn dài hơi mở góc */}
      <path
        d="M52 78 C65 60 78 35 74 12 C72 5 62 6 56 18 C50 32 48 58 50 78 Z"
        fill={color}
        fillOpacity="0.95"
      />
      {/* Gân cánh phải */}
      <path
        d="M66 16 C64 34 55 56 51 76"
        stroke="#FFF"
        strokeWidth="1.2"
        strokeOpacity="0.4"
        strokeLinecap="round"
      />

      {/* Hạt dầu tròn ở cuống */}
      <ellipse
        cx="50"
        cy="92"
        rx="14"
        ry="16"
        fill={color}
      />
      {/* Ánh sáng điểm xuyết trên hạt */}
      <ellipse
        cx="46"
        cy="88"
        rx="5"
        ry="7"
        fill="#FFF"
        fillOpacity="0.3"
      />

      {/* Cuống hoa dầu */}
      <path
        d="M50 108 L50 114"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
