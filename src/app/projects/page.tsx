'use client';

import { ProjectPage } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ProjectsPage() {
    const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const toggleDescription = (index: number) => {
        setExpandedProjects(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const truncateText = (text: string, maxLength: number = 150) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    return (
        <div className="min-h-screen bg-linear-to-r from-[#1a0a0a] via-[#141414] to-black text-white px-6 md:px-12 lg:px-20 py-16">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mt-20">
                <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#E50914]">
                        My Projects
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
                        {ProjectPage.description}
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {ProjectPage.projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative bg-linear-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-gray-700/50 hover:border-[#E50914]/50 transition-all duration-700 hover:shadow-2xl hover:shadow-[#E50914]/10 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                                }`}
                            style={{
                                transitionDelay: `${index * 150}ms`,
                            }}
                        >
                            {/* Project Title and Designation */}
                            <div className="mb-4">
                                <div className="flex items-start justify-between gap-4 mb-2">
                                    <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#E50914] transition-colors duration-300">
                                        {project.title}
                                    </h2>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 w-10 h-10 bg-gray-800 hover:bg-[#E50914] rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-red-500/50 hover:scale-110"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                                {project.designation && (
                                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-linear-to-r from-[#E50914] to-[#c4070f] px-4 py-1.5 rounded-full shadow-lg shadow-[#E50914]/20">
                                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                        {project.designation}
                                    </span>
                                )}
                            </div>

                            {/* Project Description */}
                            <div className="mb-6">
                                {/* Mobile: Truncated with View More */}
                                <p className="text-gray-300 leading-relaxed text-sm md:hidden">
                                    {expandedProjects.includes(index) ? project.desc : truncateText(project.desc)}
                                </p>
                                {project.desc.length > 150 && (
                                    <button
                                        onClick={() => toggleDescription(index)}
                                        className="md:hidden mt-2 text-[#E50914] hover:text-[#c4070f] text-sm font-medium transition-colors duration-200 cursor-pointer"
                                    >
                                        {expandedProjects.includes(index) ? 'View Less' : 'View More'}
                                    </button>
                                )}

                                {/* Desktop: Full description */}
                                <p className="hidden md:block text-gray-300 leading-relaxed text-base">
                                    {project.desc}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2.5">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="relative px-4 py-2 bg-linear-to-r from-gray-800/90 to-gray-900/90 hover:from-[#E50914]/20 hover:to-[#c4070f]/20 text-white text-xs md:text-sm font-medium rounded-md border border-gray-700/50 hover:border-[#E50914]/50 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#E50914]/10 hover:-translate-y-0.5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Element */}
                            <div className="absolute -top-2 -right-2 w-20 h-20 bg-[#E50914]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
