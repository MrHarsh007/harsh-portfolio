'use client';

import { Skills, SkillsPageData } from '@/lib/constants';
import * as LucideIcons from 'lucide-react';
import { useEffect, useState } from 'react';

type IconName = keyof typeof LucideIcons;

export default function SkillsPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const getIcon = (iconName: string) => {
        const Icon = (LucideIcons as any)[iconName] || LucideIcons.Circle;
        return Icon;
    };

    return (
        <div className="min-h-screen bg-linear-to-l from-[#1a0a0a] via-[#141414] to-black text-white px-6 md:px-12 lg:px-20 py-16 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#E50914]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E50914]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E50914]/5 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto mt-20">
                {/* Header Section */}
                <div className={`mb-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#E50914]">
                        {SkillsPageData.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        {SkillsPageData.description}
                    </p>
                </div>

                {/* Stats Section - Moved to Top */}
                <div className={`mb-12 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {SkillsPageData.stats.map((stat, index) => {
                        const Icon = getIcon(stat.icon);
                        return (
                            <div
                                key={index}
                                className="group relative bg-black backdrop-blur-sm rounded-lg p-5 border border-[#E50914]/30 hover:border-[#E50914] hover:shadow-lg hover:shadow-[#E50914]/50 transition-all duration-300 hover:scale-105"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <Icon size={24} className="text-[#E50914] group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                                    <div className="text-2xl md:text-3xl font-bold text-white">
                                        {stat.value}
                                    </div>
                                </div>
                                <div className="text-xs text-gray-400">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {Skills.map((skillCategory, categoryIndex) => {
                        const Icon = getIcon(skillCategory.icon);

                        return (
                            <div
                                key={categoryIndex}
                                className={`group relative overflow-hidden bg-black backdrop-blur-sm rounded-lg p-6 border border-[#E50914]/30 hover:border-[#E50914] hover:shadow-xl hover:shadow-[#E50914]/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                    }`}
                                style={{
                                    transitionDelay: `${(categoryIndex + 4) * 20}ms`,
                                }}
                            >
                                <div className="relative">
                                    {/* Category Header */}
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-11 h-11 bg-linear-to-br from-[#E50914] to-[#c4070f] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-[#E50914]/40 transition-all duration-300 group-hover:rotate-3">
                                                <Icon size={22} className="text-white" strokeWidth={2.5} />
                                            </div>
                                            <h2 className="text-lg font-bold text-white group-hover:text-[#E50914] transition-colors duration-300">
                                                {skillCategory.category}
                                            </h2>
                                        </div>
                                        <div className="flex items-center justify-center w-7 h-7 bg-[#E50914]/20 rounded-full border border-[#E50914]/30">
                                            <span className="text-xs font-bold text-[#E50914]">{skillCategory.skills.length}</span>
                                        </div>
                                    </div>

                                    {/* Skills Badges */}
                                    <div className="flex flex-wrap gap-2">
                                        {skillCategory.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-3 py-1.5 bg-gray-800/60 hover:bg-linear-to-r hover:from-[#E50914]/20 hover:to-[#c4070f]/20 text-gray-300 hover:text-white text-xs font-medium rounded-md border border-gray-700/40 hover:border-[#E50914]/50 transition-all duration-200 hover:scale-105 cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
