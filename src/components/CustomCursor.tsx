'use client';

import { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const animationFrameRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        let rawMouseX = 0;
        let rawMouseY = 0;

        const updateMousePosition = (e: MouseEvent) => {
            rawMouseX = e.clientX;
            rawMouseY = e.clientY;
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        // Check if hovering over interactive elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.onclick !== null ||
                target.closest('button') !== null ||
                target.closest('a') !== null ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(isInteractive);
        };

        // Magnetic snapping animation
        const magneticEffect = () => {
            const magneticRadius = 120; // Distance at which magnetic effect starts
            const magneticStrength = 0.3; // How strong the pull is (0-1)

            // Find all interactive elements
            const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
            let closestElement: HTMLElement | null = null;
            let closestDistance = Infinity;

            interactiveElements.forEach((element) => {
                if (element instanceof HTMLElement) {
                    const rect = element.getBoundingClientRect();
                    const elementCenterX = rect.left + rect.width / 2;
                    const elementCenterY = rect.top + rect.height / 2;

                    const distance = Math.sqrt(
                        Math.pow(rawMouseX - elementCenterX, 2) +
                        Math.pow(rawMouseY - elementCenterY, 2)
                    );

                    if (distance < closestDistance && distance < magneticRadius) {
                        closestDistance = distance;
                        closestElement = element;
                    }
                }
            });

            let targetX = rawMouseX;
            let targetY = rawMouseY;

            if (closestElement) {
                const rect = closestElement.getBoundingClientRect();
                const elementCenterX = rect.left + rect.width / 2;
                const elementCenterY = rect.top + rect.height / 2;

                // Calculate magnetic pull
                const pullX = (elementCenterX - rawMouseX) * magneticStrength;
                const pullY = (elementCenterY - rawMouseY) * magneticStrength;

                targetX = rawMouseX + pullX;
                targetY = rawMouseY + pullY;
            }

            // Smooth cursor movement with easing
            setCursorPosition((prev) => ({
                x: prev.x + (targetX - prev.x) * 0.2,
                y: prev.y + (targetY - prev.y) * 0.2,
            }));

            animationFrameRef.current = requestAnimationFrame(magneticEffect);
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        // Start magnetic animation
        magneticEffect();

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <>
            {/* Main cursor dot */}
            <div
                className="fixed top-0 left-0 pointer-events-none z-9999 mix-blend-difference transition-transform duration-100"
                style={{
                    transform: `translate(${cursorPosition.x - 6}px, ${cursorPosition.y - 6}px) scale(${isClicking ? 0.8 : 1})`,
                }}
            >
                <div
                    className={`rounded-full transition-all duration-200 ${isHovering
                        ? 'w-3 h-3 bg-[#E50914]'
                        : 'w-3 h-3 bg-white'
                        }`}
                />
            </div>

            {/* Outer ring cursor */}
            <div
                className="fixed top-0 left-0 pointer-events-none z-9999 transition-all duration-300 ease-out"
                style={{
                    transform: `translate(${cursorPosition.x - 20}px, ${cursorPosition.y - 20}px) scale(${isClicking ? 1.2 : isHovering ? 1.5 : 1})`,
                }}
            >
                <div
                    className={`rounded-full border-2 transition-all duration-300 ${isHovering
                        ? 'w-10 h-10 border-[#E50914] opacity-100'
                        : 'w-10 h-10 border-white opacity-50'
                        }`}
                />
            </div>

            {/* Glow effect on hover */}
            {isHovering && (
                <div
                    className="fixed top-0 left-0 pointer-events-none z-9998 transition-all duration-300"
                    style={{
                        transform: `translate(${cursorPosition.x - 30}px, ${cursorPosition.y - 30}px)`,
                    }}
                >
                    <div className="w-[60px] h-[60px] rounded-full bg-[#E50914] opacity-20 blur-xl animate-pulse" />
                </div>
            )}
        </>
    );
}
