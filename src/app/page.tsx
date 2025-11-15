// pages/index.tsx or app/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { PERSONAL_INFO } from '@/lib/constants';
import { Play, Sparkles, ChevronRight } from 'lucide-react';


export default function NetflixIntro() {
  const router = useRouter();
  const [animate, setAnimate] = useState(false);
  const [started, setStarted] = useState(false);
  const [showLetterAnimation, setShowLetterAnimation] = useState(false);
  const [zoomOutLetters, setZoomOutLetters] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!started) return;

    // Start animation shortly after user starts intro
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 200);

    return () => clearTimeout(timer);
  }, [started]);

  const handleStart = () => {
    setShowLetterAnimation(true);

    // Play sound
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Audio playback failed:', error);
      });
    }

    // After letters animation completes (3.5s), start zoom out (0.5s)
    setTimeout(() => {
      setZoomOutLetters(true);
    }, 3200);

    // Navigate to browse page after complete animation (4s)
    setTimeout(() => {
      router.push('/browse');
    }, 4000);
  };

  const name = PERSONAL_INFO.name;
  const letters = name.split('');

  return (
    <div className="relative flex items-center justify-center h-screen bg-[#141414] overflow-hidden">
      {/* Fullscreen Letter Animation */}
      {showLetterAnimation && (
        <div className={`absolute inset-0 z-50 flex items-center justify-center gap-2 md:gap-4 px-4 ${zoomOutLetters ? 'animate-zoom-out-letters' : ''}`}>
          {letters.map((letter, index) => (
            <div
              key={index}
              className="letter-typography text-4xl md:text-6xl lg:text-8xl font-black text-[#E50914]"
              style={{
                animationDelay: `${index * 0.2}s`,
                textShadow: '0 0 20px rgba(229, 9, 20, 0.4), 0 0 40px rgba(229, 9, 20, 0.2), 0 0 60px rgba(229, 9, 20, 0)'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </div>
          ))}
        </div>
      )}

      <div className="w-full max-w-4xl px-8 flex flex-col items-center gap-8 relative">
        {!showLetterAnimation && (
          <>
            {/* Creative Tooltip */}
            {showTooltip && (
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="relative bg-linear-to-r from-[#E50914] to-[#ff4b4b] text-white px-6 py-3 rounded-lg shadow-2xl shadow-red-500/50">
                  <div className="flex items-center gap-2">
                    <Sparkles size={18} className="animate-pulse" />
                    <span className="text-sm font-medium">Click below to start the experience!</span>
                    <Sparkles size={18} className="animate-pulse" />
                  </div>
                  {/* Arrow */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#ff4b4b]"></div>
                </div>
              </div>
            )}

            {/* Modern Button */}
            <button
              onClick={handleStart}
              onMouseEnter={() => setShowTooltip(false)}
              onMouseLeave={() => setShowTooltip(true)}
              className="group relative mt-2 px-12 py-6 rounded-lg bg-linear-to-r from-[#E50914] via-[#ff1f1f] to-[#E50914] text-white text-lg md:text-xl font-bold tracking-wide uppercase shadow-[0_0_40px_rgba(229,9,20,0.7)] hover:shadow-[0_0_60px_rgba(229,9,20,1)] transition-all duration-500 flex items-center gap-4 cursor-pointer overflow-hidden bg-size-[200%_100%] hover:bg-position-[100%_0] animate-gradient-x"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

              {/* Play icon with animation */}
              <div className="relative z-10 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-90 transition-all duration-500">
                <Play size={24} className="fill-white" />
              </div>

              {/* Text content */}
              <div className="relative z-10 flex flex-col items-start">
                <span className="text-xs font-light tracking-[0.3em] opacity-80 group-hover:opacity-100 transition-opacity">WELCOME TO</span>
                <span className="text-2xl md:text-3xl font-black -mt-1 tracking-tight">MY PORTFOLIO</span>
              </div>

              {/* Arrow with animation */}
              <ChevronRight size={32} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={3} />

              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-2xl bg-[#E50914] opacity-0 group-hover:opacity-30 animate-ping"></div>
            </button>

            {/* Decorative elements */}
            <div className="flex gap-2 mt-4 animate-pulse">
              <div className="w-2 h-2 bg-[#E50914] rounded-full"></div>
              <div className="w-2 h-2 bg-[#E50914]/70 rounded-full animation-delay-150"></div>
              <div className="w-2 h-2 bg-[#E50914]/40 rounded-full animation-delay-300"></div>
            </div>
          </>
        )}
      </div>

      {/* Audio element */}
      <audio ref={audioRef} preload="auto">
        <source src="/netflix-sound.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
