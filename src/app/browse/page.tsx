'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import blue from "../../../public/blue.png"
import grey from "../../../public/grey.png"
import red from "../../../public/red.png"
import yellow from "../../../public/yellow.png"

export default function BrowsePage() {
    const router = useRouter();

    const profiles = [
        {
            name: 'Home',
            color: 'bg-[#00B4D8]',
            hoverColor: 'hover:ring-[#00B4D8]',
            icon: blue,
            path: '/home'
        },
        {
            name: 'About',
            color: 'bg-[#10B981]',
            hoverColor: 'hover:ring-[#10B981]',
            icon: blue,
            path: '/about'
        },
        {
            name: 'Projects',
            color: 'bg-[#6C757D]',
            hoverColor: 'hover:ring-[#6C757D]',
            icon: grey,
            path: '/projects'
        },
        {
            name: 'Skills',
            color: 'bg-[#E50914]',
            hoverColor: 'hover:ring-[#E50914]',
            icon: red,
            path: '/skills'
        },
        {
            name: 'Experience',
            color: 'bg-[#FFC107]',
            hoverColor: 'hover:ring-[#FFC107]',
            icon: yellow,
            path: '/experience'
        }
    ];

    const handleProfileClick = (path: string) => {
        router.push(path);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#141414] px-4">
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-12 md:mb-20 tracking-tighter text-center">
                Where would you like to go?
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl">
                {profiles.map((profile) => {
                    const Icon = profile.icon;
                    return (
                        <button
                            key={profile.name}
                            onClick={() => handleProfileClick(profile.path)}
                            className={`group flex flex-col items-center gap-3 focus:outline-none`}
                        >
                            <div
                                className={`
                  ${profile.hoverColor}
                  rounded-lg
                  flex items-center justify-center
                  transition-all duration-300
                  ring-0 ring-transparent
                  group-hover:ring-4
                  group-hover:scale-105
                  relative
                  overflow-hidden
                `}
                            >
                                {/* Decorative smile face */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                    <div className="relative w-20 h-20 md:w-24 md:h-24">
                                        {/* Eyes */}
                                        <div className="absolute top-6 left-5 w-3 h-3 bg-black rounded-full"></div>
                                        <div className="absolute top-6 right-5 w-3 h-3 bg-black rounded-full"></div>
                                        {/* Smile */}
                                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-6 border-b-4 border-black rounded-full"></div>
                                    </div>
                                </div>

                                {/* Icon */}
                                <Image src={Icon} alt={profile.name} width={250} height={250} className="w-26 h-26 md:w-36 md:h-36  text-black/60 z-10" />
                            </div>

                            <span className="text-gray-400 group-hover:text-white text-base md:text-xl font-normal tracking-wide transition-colors">
                                {profile.name}
                            </span>
                        </button>
                    );
                })}
            </div>

            <div className="mt-16 md:mt-20">
                <button
                    onClick={() => router.push('/')}
                    className="px-8 py-3 border-2 border-gray-600 text-gray-400 hover:border-white hover:text-white transition-all duration-300 text-sm md:text-base tracking-widest uppercase"
                >
                    Back to Intro
                </button>
            </div>
        </div>
    );
}
