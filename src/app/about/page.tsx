'use client';

import { ABOUT_ME, PERSONAL_INFO, AboutPage } from '@/lib/constants';
import * as LucideIcons from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function AboutPageComponent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Split the detailed overview into paragraphs
    const paragraphs = ABOUT_ME.detailedOverview.split('\n\n').filter(p => p.trim());

    const getIcon = (iconName: string) => {
        const Icon = (LucideIcons as any)[iconName] || LucideIcons.Circle;
        return Icon;
    };


    return (
        <div className="min-h-screen bg-linear-to-l from-[#1a0a0a] via-[#141414] to-black text-white px-6 md:px-12 lg:px-20 py-16 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-96 h-96 bg-[#E50914]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#E50914]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto mt-20">
                {/* Header with Profile */}
                <div className={`mb-16 flex flex-col md:flex-row items-center gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    {/* Profile Image */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                        <div className="absolute inset-0 bg-[#E50914]/30 blur-xl rounded-full"></div>
                        <div className="relative w-full h-full bg-gray-800 rounded-full overflow-hidden shadow-[0_0_30px_rgba(239,68,68,0.3)] border-2 border-[#E50914]/30">
                            <Image
                                src={PERSONAL_INFO.profileImage2}
                                alt="Profile Photo"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Header Text */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold mb-3 text-[#E50914]">
                            {AboutPage.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400">
                            {AboutPage.subtitle}
                        </p>
                    </div>
                </div>

                {/* Highlights Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {AboutPage.highlights.map((highlight, index) => {
                        const Icon = getIcon(highlight.icon);
                        return (
                            <div
                                key={index}
                                className="group bg-black border border-[#E50914]/30 hover:border-[#E50914] rounded-lg p-5 transition-all duration-300 hover:shadow-lg hover:shadow-[#E50914]/50 hover:scale-105"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-linear-to-br from-[#E50914] to-[#c4070f] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-[#E50914]/40 transition-all duration-300">
                                        <Icon size={20} className="text-white" strokeWidth={2.5} />
                                    </div>
                                    <h3 className="font-bold text-white text-sm">{highlight.title}</h3>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">{highlight.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Detailed Story */}
                <div className={`bg-black border border-[#E50914]/30 rounded-lg p-8 md:p-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex items-center gap-3 mb-8">
                        {(() => {
                            const HeartIcon = getIcon('Heart');
                            return <HeartIcon className="text-[#E50914]" size={28} strokeWidth={2.5} />;
                        })()}
                        <h2 className="text-2xl md:text-3xl font-bold text-white">My Journey</h2>
                    </div>

                    <div className="space-y-6">
                        {paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-gray-300 leading-relaxed text-base md:text-lg transition-all duration-700"
                                style={{
                                    transitionDelay: `${600 + (index * 100)}ms`,
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)'
                                }}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Core Values */}
                <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {AboutPage.coreValues.map((value, index) => {
                        const Icon = getIcon(value.icon);
                        return (
                            <div
                                key={index}
                                className="bg-black border border-[#E50914]/30 rounded-lg p-6 text-center hover:border-[#E50914] transition-all duration-300 hover:shadow-lg hover:shadow-[#E50914]/30"
                            >
                                <Icon className="text-[#E50914] mx-auto mb-4" size={32} strokeWidth={2.5} />
                                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-sm text-gray-400">{value.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
