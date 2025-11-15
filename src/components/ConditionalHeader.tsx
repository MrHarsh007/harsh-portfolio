'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function ConditionalHeader() {
    const pathname = usePathname();

    // Don't show header on browse page or root page
    if (pathname === '/browse' || pathname === '/') {
        return null;
    }

    return <Header />;
}
