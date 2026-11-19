'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Gentle pentatonic peaceful melody notes (frequencies in Hz)
  const notes = [
    261.63, 293.66, 329.63, 392.00, 440.00, // C4, D4, E4, G4, A4
    523.25, 587.33, 659.25, 783.99, 880.00, // C5, D5, E5, G5, A5
  ];

  const melodySequence = [
    { note: 2, dur: 0.6 }, // E4
    { note: 4, dur: 0.6 }, // A4
    { note: 5, dur: 0.9 }, // C5
    { note: 4, dur: 0.6 }, // A4
    { note: 3, dur: 0.6 }, // G4
    { note: 2, dur: 1.0 }, // E4
    { note: 0, dur: 0.6 }, // C4
    { note: 1, dur: 0.6 }, // D4
    { note: 2, dur: 1.2 }, // E4
    { note: 4, dur: 0.6 }, // A4
    { note: 3, dur: 0.6 }, // G4
    { note: 5, dur: 1.2 }, // C5
    { note: 6, dur: 0.6 }, // D5
    { note: 7, dur: 1.5 }, // E5
  ];

  const playTone = useCallback((freq: number, duration: number) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.09, ctx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + duration);
    } catch {
      // AudioContext state error safety
    }
  }, []);

  const startMusicLoop = useCallback(() => {
    if (!isPlayingRef.current) return;

    let step = 0;
    const playNext = () => {
      if (!isPlayingRef.current) return;
      const current = melodySequence[step % melodySequence.length];
      const freq = notes[current.note];
      playTone(freq, current.dur);

      step++;
      const nextDelay = current.dur * 850;
      timerRef.current = setTimeout(playNext, nextDelay);
    };

    playNext();
  }, [playTone]);

  const togglePlay = () => {
    if (!isPlaying) {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      isPlayingRef.current = true;
      setIsPlaying(true);
      startMusicLoop();
    } else {
      isPlayingRef.current = false;
      setIsPlaying(false);
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    return () => {
      isPlayingRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <button
      onClick={togglePlay}
      aria-label={isPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền du dương'}
      title={isPlaying ? 'Tạm dừng nhạc điệu tri ân' : 'Phát giai điệu tri ân nhẹ nhàng'}
      className={`fixed bottom-4 left-3 sm:bottom-6 sm:left-6 z-40 flex items-center justify-center gap-1.5 p-2.5 sm:px-3.5 sm:py-2.5 rounded-full text-xs font-medium shadow-md transition-all duration-300 backdrop-blur-sm border ${
        isPlaying
          ? 'bg-white/95 text-academic border-academic/30 shadow-lg'
          : 'bg-white/75 text-gray-500 border-gray-200 hover:bg-white hover:text-navy'
      }`}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 text-academic animate-pulse" />
          <span className="hidden sm:inline font-sans font-medium text-navy">Nhạc: Đang phát</span>
          <span className="hidden sm:flex gap-0.5 items-end h-3">
            <span className="w-0.5 h-3 bg-academic animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-0.5 h-2 bg-academic animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-0.5 h-3.5 bg-academic animate-bounce" style={{ animationDelay: '300ms' }} />
          </span>
        </>
      ) : (
        <>
          <Music className="w-4 h-4 text-gray-400" />
          <span className="hidden sm:inline font-sans">Bật nhạc nền</span>
        </>
      )}
    </button>
  );
}
