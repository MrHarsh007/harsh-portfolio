// pages/index.tsx or app/page.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PERSONAL_INFO, Skills } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Briefcase, Sparkles, Clapperboard } from 'lucide-react';


export default function NetflixIntro() {
  const router = useRouter();
  const [showLetterAnimation, setShowLetterAnimation] = useState(false);
  const [zoomOutLetters, setZoomOutLetters] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [floatingSkills, setFloatingSkills] = useState<Array<{
    name: string;
    top: number;
    left: number;
    duration: number;
    delay: number;
    direction: 'left' | 'right';
    opacity: number;
    size: number;
  }>>([]);

  useEffect(() => {
    // Flatten all skills from all categories
    const allSkills = Skills.flatMap(category => category.skills);

    // Multiply by 4 to cover the whole screen
    const multipliedSkills = [...allSkills, ...allSkills, ...allSkills, ...allSkills];

    // Generate random properties for each skill
    const randomSkills = multipliedSkills.map((skill, index) => ({
      name: skill,
      top: Math.random() * 100, // Random vertical position (0-100%)
      left: Math.random() * 100, // Random horizontal position (0-100%)
      duration: 15 + Math.random() * 25, // Animation duration between 15-40s
      delay: Math.random() * 5, // Random delay 0-5s
      direction: Math.random() > 0.5 ? 'left' : 'right' as 'left' | 'right',
      opacity: 0.03 + Math.random() * 0.07, // Opacity between 0.03-0.1
      size: 0.7 + Math.random() * 0.5, // Size multiplier 0.7-1.2
    }));

    setFloatingSkills(randomSkills);
  }, []);

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
    <div className="relative flex items-center justify-center h-screen overflow-hidden min-h-screen bg-linear-to-r from-[#1a0a0a] via-[#141414] to-black text-white">
      {/* Floating Skills Background - Only show when button is visible */}
      {!showLetterAnimation && (
        <div className="absolute inset-0 pointer-events-none">
          {floatingSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="absolute whitespace-nowrap text-white font-medium px-4 py-2 rounded-lg border border-gray-700/30"
              style={{
                top: `${skill.top}%`,
                left: `${skill.left}%`,
                opacity: skill.opacity * 5,
                fontSize: `${skill.size * 1.2}rem`,
                animation: `float-${skill.direction} ${skill.duration}s linear ${skill.delay}s infinite`,
              }}
            >
              {skill.name}
            </div>
          ))}
        </div>
      )}
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

      <div className="w-full max-w-4xl px-8 flex flex-col items-center gap-8 relative z-10">
        {!showLetterAnimation && (
          <>
            {/* Shadcn Button with Creative Text */}
            <Button
              onClick={handleStart}
              size="xl"
              className="bg-[#E50914]! hover:bg-[#ff1f1f]! text-white! font-bold tracking-wide shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Clapperboard className="mr-2 animate-pulse ml-2" size={20} />
              Ready? Action...
              <Sparkles size={18} className="animate-pulse ml-2" />
            </Button>
          </>
        )}
      </div>

      {/* Audio element */}
      <audio ref={audioRef} preload="auto">
        <source src="/netflix-sound.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* CSS Animations */}
      <style jsx>{`
                @keyframes float-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100vw);
                    }
                }
                
                @keyframes float-right {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(100vw);
                    }
                }
            `}</style>
    </div>
  );
}
