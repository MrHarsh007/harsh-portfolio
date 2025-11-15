'use client';

import { Linkedin, Github, Instagram, Download, Mail } from 'lucide-react';
import Image from 'next/image';
import { PERSONAL_INFO, SOCIAL_LINKS, BUTTON_LABELS } from '@/lib/constants';
import { useEffect, useState } from 'react';

export default function HomePage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-linear-to-r from-[#1a0a0a] via-[#141414] to-black text-white flex items-center justify-center px-6 md:px-20 lg:px-40">
            <div className="w-full max-w-2/3 flex flex-col items-center text-center space-y-8 mt-20">

                {/* Profile Photo */}
                <div className={`relative w-42 h-42 md:w-52 md:h-52 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                    <div className="absolute inset-0 bg-red-500/30 blur-xl rounded-lg"></div>
                    <div className="relative w-full h-full bg-gray-800 rounded-lg overflow-hidden border-2 border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.4)]">
                        <Image
                            src={PERSONAL_INFO.profileImage}
                            alt="Profile Photo"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* About Me */}
                <div className={`space-y-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className="text-2xl md:text-4xl font-bold text-[#E50914]">
                        {PERSONAL_INFO.profession}
                    </h1>
                    <p className="text-lg md:text-lg text-gray-300 leading-relaxed w-fit -tracking-tighter">
                        {PERSONAL_INFO.overview}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className={`flex flex-col sm:flex-row gap-6 w-full max-w-lg transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <button
                        className="flex-1 bg-[#E50914] hover:bg-[#c4070f] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-red-500/50"
                        onClick={() => window.location.href = `mailto:${PERSONAL_INFO.email}`}
                    >
                        <Mail size={20} />
                        {BUTTON_LABELS.contactMe}
                    </button>
                    <button
                        className="flex-1 bg-white hover:bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                        onClick={() => window.open(PERSONAL_INFO.cvPath, '_blank')}
                    >
                        <Download size={20} />
                        {BUTTON_LABELS.downloadCV}
                    </button>
                </div>

                {/* Social Media Links */}
                <div className={`flex gap-4 pt-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-gray-800 hover:bg-[#0077B5] rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-110"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-gray-800 hover:bg-[#333] rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-gray-500/50 hover:scale-110"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href={SOCIAL_LINKS.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-gray-800 hover:bg-linear-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-pink-500/50 hover:scale-110"
                    >
                        <Instagram size={24} />
                    </a>
                </div>

            </div>
        </div>
    );
}
