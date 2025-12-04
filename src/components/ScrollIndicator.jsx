import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ScrollIndicator = ({ className = "" }) => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // Fade in animation
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1, delay: 2, ease: 'power3.out' }
        );

        // Continuous rotation for ONLY the text
        gsap.to(textRef.current, {
            rotation: 360,
            duration: 8,
            repeat: -1,
            ease: 'none'
        });

        // Subtle pulse animation for the container
        gsap.to(containerRef.current, {
            scale: 1.05,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });
    }, []);

    const scrollToNext = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div
            ref={containerRef}
            className={`cursor-pointer z-20 w-fit ${className}`}
            onClick={scrollToNext}
        >
            <div
                className="relative w-32 h-32 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
                {/* Circular Text - Rotates */}
                <svg
                    ref={textRef}
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 128 128"
                >
                    <defs>
                        <path
                            id="circlePath"
                            d="M 64, 64 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                        />
                    </defs>
                    <text className="text-[11px] font-semibold fill-gray-700 tracking-[0.3em]">
                        <textPath href="#circlePath" startOffset="0%">
                            SCROLL NOW • SCROLL NOW •
                        </textPath>
                    </text>
                </svg>

                {/* Center Arrow - Static */}
                <div className="relative z-10">
                    <svg
                        className="w-8 h-8 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ScrollIndicator;
