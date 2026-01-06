'use client';

import { ABOUT_ME, PERSONAL_INFO, AboutPage, CERTIFICATIONS } from '@/lib/constants';
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
                                src={PERSONAL_INFO.profileCartoon2}
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
                {/* Certifications Section */}
                <div className={`transition-all duration-1000 delay-400 mb-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex items-center gap-3 mb-6">
                        {(() => {
                            const AwardIcon = getIcon('Award');
                            return <AwardIcon className="text-[#E50914]" size={28} strokeWidth={2.5} />;
                        })()}
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Certifications</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {CERTIFICATIONS.map((cert, index) => {
                            const Icon = getIcon(cert.icon);
                            return (
                                <div
                                    key={index}
                                    className="group relative bg-black border border-[#E50914]/30 hover:border-[#E50914] rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#E50914]/30 overflow-hidden"
                                >
                                    {/* Google Logo Background */}
                                    <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                        </svg>
                                    </div>

                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-linear-to-br from-[#E50914] to-[#c4070f] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-[#E50914]/40 transition-all duration-300 shrink-0">
                                            <Icon size={24} className="text-white" strokeWidth={2.5} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-white group-hover:text-[#E50914] transition-colors duration-300 mb-1">
                                                {cert.title}
                                            </h3>
                                            <p className="text-sm text-gray-400">{cert.issuer}</p>
                                        </div>
                                    </div>

                                    {/* Date Info */}
                                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                                        <span>Issued {cert.issueDate}</span>
                                        <span>•</span>
                                        <span>Expires {cert.expiryDate}</span>
                                    </div>

                                    {/* Credential ID */}
                                    <div className="mb-4 p-3 bg-gray-900/50 rounded-md border border-gray-800">
                                        <div className="text-xs text-gray-500 mb-1">Credential ID</div>
                                        <div className="text-xs font-mono text-gray-300 break-all">
                                            {cert.credentialId}
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div className="mb-4">
                                        <div className="text-xs text-gray-500 mb-2 font-semibold">Skills:</div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {cert.skills.slice(0, 5).map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="px-2 py-1 bg-gray-800/60 text-gray-300 text-xs rounded-md border border-gray-700/40"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                            {cert.skills.length > 5 && (
                                                <span className="px-2 py-1 bg-gray-800/60 text-gray-400 text-xs rounded-md border border-gray-700/40">
                                                    +{cert.skills.length - 5} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Show Credential Button */}
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#E50914] hover:bg-[#c4070f] text-white text-sm font-semibold rounded-md transition-all duration-300 group-hover:scale-105"
                                    >
                                        Show credential
                                        {(() => {
                                            const ExternalLinkIcon = getIcon('ExternalLink');
                                            return <ExternalLinkIcon size={14} strokeWidth={2.5} />;
                                        })()}
                                    </a>
                                </div>
                            );
                        })}
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
                <div className={`mt-12 bg-black border border-[#E50914]/30 rounded-lg p-8 md:p-10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                                    transitionDelay: `${800 + (index * 100)}ms`,
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
