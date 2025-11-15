'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Mail, Phone, Download, Menu, X } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useState } from 'react';
import Image from 'next/image';
import { PERSONAL_INFO } from '@/lib/constants';

const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
];

export default function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-linear-to-b from-black to-transparent">
            <div className="flex items-center justify-between px-4 md:px-6 py-4 md:py-6">
                <div className='flex flex-row gap-6 items-center align-center'>
                    {/* Left: Name */}
                    <Link href="/home" >
                        <Image src="/harsh_netflix.png" alt="Harsh Porwal" width={200} height={100} />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`text-lg font-medium transition-colors ${pathname === link.path
                                    ? 'text-white '
                                    : 'text-gray-400 hover:text-gray-300'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Right side - Mobile Menu Button + Profile */}
                <div className="flex items-center gap-3">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-gray-400 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>

                    {/* Profile Icon with Popover */}
                    <Popover>
                        <PopoverTrigger asChild>
                            <button className="w-10 h-10 border-2 border-gray-600 rounded-sm flex items-center justify-center hover:border-white transition-colors group">
                                <User className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                            </button>
                        </PopoverTrigger>
                        <PopoverContent align="end" className="w-72">
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg text-white mb-3">Contact Information</h3>

                                <div className="flex items-center gap-3 text-gray-300">
                                    <Mail className="w-5 h-5 text-[#E50914]" />
                                    <div>
                                        <p className="text-xs text-gray-500">Email</p>
                                        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm hover:text-white transition-colors">
                                            {PERSONAL_INFO.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 text-gray-300">
                                    <Phone className="w-5 h-5 text-[#E50914]" />
                                    <div>
                                        <p className="text-xs text-gray-500">Phone</p>
                                        <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm hover:text-white transition-colors">
                                            {PERSONAL_INFO.phone}
                                        </a>
                                    </div>
                                </div>

                                <a
                                    href={PERSONAL_INFO.cvPath}
                                    download
                                    className="w-full mt-4 flex items-center justify-center gap-2 bg-[#E50914] hover:bg-[#f40612] text-white px-4 py-2.5 rounded-sm transition-colors font-medium"
                                >
                                    <Download className="w-4 h-4" />
                                    Download CV
                                </a>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-black/95 border-t border-gray-800">
                    <nav className="px-4 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-4 py-3 rounded-sm text-base font-medium transition-colors ${pathname === link.path
                                    ? 'bg-[#E50914] text-white'
                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
