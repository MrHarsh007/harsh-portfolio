'use client';

import { ExperiencePage } from '@/lib/constants';
import * as LucideIcons from 'lucide-react';
import { MapPin, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ExperiencePageComponent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const getIcon = (iconName: string) => {
        const Icon = (LucideIcons as any)[iconName] || LucideIcons.Circle;
        return Icon;
    };

    return (
        <div className="min-h-screen bg-linear-to-r from-[#1a0a0a] via-[#141414] to-black text-white px-6 md:px-12 lg:px-20 py-16 relative overflow-hidden">
            {/* Animated Background Elements - Different pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#E50914]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#E50914]/5 rounded-full blur-3xl animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-[#E50914]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Content */}
            <div className="relative z-10  mx-auto mt-20">
                {/* Header */}
                <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#E50914]">
                        {ExperiencePage.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
                        {ExperiencePage.description}
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-[#E50914]/50 to-transparent hidden lg:block"></div>

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {ExperiencePage.experiences.map((exp, index) => {
                            const Icon = getIcon(exp.icon);
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-20' : 'translate-x-20'}`
                                        }`}
                                    style={{
                                        transitionDelay: `${index * 200}ms`,
                                    }}
                                >
                                    {/* Desktop Layout - Alternating */}
                                    <div className={`hidden lg:flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                                        {/* Content Card */}
                                        <div className={`w-[47%] ${isEven ? 'pr-2 text-right' : 'pl-2 text-left'}`}>
                                            <div className="group bg-black border border-[#E50914]/30 hover:border-[#E50914] rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#E50914]/40 hover:-translate-y-1">
                                                {/* Duration Badge */}
                                                <div className={`flex items-center gap-2 text-xs text-gray-400 mb-3 ${isEven ? 'justify-end' : 'justify-start'}`}>
                                                    <Calendar size={14} />
                                                    <span>{exp.duration}</span>
                                                </div>

                                                {/* Role & Company */}
                                                <h3 className={`text-xl font-bold text-white group-hover:text-[#E50914] transition-colors duration-300 mb-2 ${isEven ? 'text-right' : 'text-left'}`}>
                                                    {exp.role}
                                                </h3>
                                                <h4 className={`text-base font-semibold text-gray-300 mb-3 ${isEven ? 'text-right' : 'text-left'}`}>
                                                    {exp.company}
                                                </h4>

                                                {/* Location */}
                                                <div className={`flex items-center gap-2 text-sm text-gray-400 mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                                                    <MapPin size={14} />
                                                    <span>{exp.location}</span>
                                                </div>

                                                {/* Description */}
                                                <p className={`text-sm text-gray-300 leading-relaxed ${isEven ? 'text-right' : 'text-left'}`}>
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Timeline Node */}
                                        <div className="w-[6%] flex justify-center">
                                            <div className="relative">
                                                <div className="w-16 h-16 bg-linear-to-br from-[#E50914] to-[#c4070f] rounded-full flex items-center justify-center shadow-lg shadow-[#E50914]/50 border-4 border-black">
                                                    <Icon size={28} className="text-white" strokeWidth={2.5} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Empty Space */}
                                        <div className="w-[47%]"></div>
                                    </div>

                                    {/* Mobile Layout */}
                                    <div className="lg:hidden">
                                        <div className="flex gap-3">
                                            {/* Timeline Node */}
                                            <div className="shrink-0">
                                                <div className="w-12 h-12 bg-linear-to-br from-[#E50914] to-[#c4070f] rounded-full flex items-center justify-center shadow-lg shadow-[#E50914]/50">
                                                    <Icon size={20} className="text-white" strokeWidth={2.5} />
                                                </div>
                                                {index < ExperiencePage.experiences.length - 1 && (
                                                    <div className="w-0.5 h-16 bg-[#E50914]/30 mx-auto mt-4"></div>
                                                )}
                                            </div>

                                            {/* Content Card */}
                                            <div className="flex-1 pb-8">
                                                <div className="bg-black border border-[#E50914]/30 hover:border-[#E50914] rounded-lg p-5 transition-all duration-300 hover:shadow-lg hover:shadow-[#E50914]/30">
                                                    {/* Duration */}
                                                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                                                        <Calendar size={12} />
                                                        <span>{exp.duration}</span>
                                                    </div>

                                                    {/* Role & Company */}
                                                    <h3 className="text-lg font-bold text-white mb-2">
                                                        {exp.role}
                                                    </h3>
                                                    <h4 className="text-sm font-semibold text-gray-300 mb-3">
                                                        {exp.company}
                                                    </h4>

                                                    {/* Location */}
                                                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                                                        <MapPin size={12} />
                                                        <span>{exp.location}</span>
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-sm text-gray-300 leading-relaxed">
                                                        {exp.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>



            </div>
        </div>
    );
}
