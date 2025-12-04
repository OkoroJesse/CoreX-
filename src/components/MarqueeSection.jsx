import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MarqueeSection = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        const marqueeContent = marquee.querySelector('.marquee-content');

        // Clone the content for seamless loop
        const clone = marqueeContent.cloneNode(true);
        marquee.appendChild(clone);

        // Get the width of the content
        const contentWidth = marqueeContent.offsetWidth;

        // Create seamless infinite scroll
        const tl = gsap.timeline({ repeat: -1 });

        tl.fromTo(
            marqueeContent,
            { x: 0 },
            {
                x: -contentWidth,
                duration: 20,
                ease: 'none',
            }
        );

        tl.fromTo(
            clone,
            { x: contentWidth },
            {
                x: 0,
                duration: 20,
                ease: 'none',
            },
            0 // Start at the same time as the first animation
        );

        return () => {
            tl.kill();
        };
    }, []);

    const starColors = ['text-yellow-400', 'text-primary-dark', 'text-purple-400'];

    // More items to ensure no gaps
    const items = Array(15).fill("Let's Work Together");

    return (
        <section className="py-8 bg-primary overflow-hidden">
            <div ref={marqueeRef} className="flex whitespace-nowrap">
                <div className="marquee-content flex items-center">
                    {items.map((text, index) => (
                        <div key={index} className="flex items-center">
                            <span className="text-4xl lg:text-5xl font-bold text-white mx-8" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                                {text}
                            </span>
                            <svg
                                className={`w-8 h-8 lg:w-10 lg:h-10 ${starColors[index % starColors.length]} mx-8`}
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarqueeSection;
