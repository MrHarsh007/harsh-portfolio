// pages/index.tsx or app/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function NetflixIntro() {
  const router = useRouter();
  const [animate, setAnimate] = useState(false);
  const [started, setStarted] = useState(false);
  const [showLetterAnimation, setShowLetterAnimation] = useState(false);
  const [zoomOutLetters, setZoomOutLetters] = useState(false);
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
    }, 3800);

    // Navigate to browse page after complete animation (4s)
    setTimeout(() => {
      router.push('/browse');
    }, 4500);
  };

  const name = "HARSH PORWAL";
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
                animationDelay: `${index * 0.26}s`,
                textShadow: '0 0 20px rgba(229, 9, 20, 0.6), 0 0 40px rgba(229, 9, 20, 0.4), 0 0 60px rgba(229, 9, 20, 0.2)'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </div>
          ))}
        </div>
      )}

      <div className="w-full max-w-4xl px-8 flex flex-col items-center gap-8">
        {!showLetterAnimation && (
          <button
            onClick={handleStart}
            className="group mt-2 px-10 py-4 rounded-full from-[#E50914] via-red-600 to-[#ff4b4b] text-white text-lg md:text-xl font-semibold tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(229,9,20,0.6)] hover:shadow-[0_0_45px_rgba(229,9,20,0.9)] transition-all duration-300 flex items-center gap-3"
          >
            <span className="relative">
              <span className="block text-xs font-normal tracking-[0.35em] opacity-70">ENTER</span>
              <span className="block -mt-1">PORTFOLIO</span>
            </span>
            <span className="h-8  bg-white/40 group-hover:h-10 transition-all" />
            <span className="text-sm md:text-base font-normal tracking-[0.25em] opacity-80 group-hover:opacity-100">
              PLAY INTRO
            </span>
          </button>
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
