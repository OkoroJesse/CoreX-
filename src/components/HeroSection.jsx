import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollIndicator from './ScrollIndicator';

const HeroSection = () => {
    const headingRef = useRef(null);
    const subheadingRef = useRef(null);
    const buttonsRef = useRef(null);
    const imageRef = useRef(null);
    const starRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Only animate on desktop
        if (!isMobile && window.innerWidth >= 1024) {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            // Animate heading words
            const words = headingRef.current.querySelectorAll('.word');
            tl.fromTo(
                words,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
                0.3
            );

            // Animate subheading
            tl.fromTo(
                subheadingRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                0.8
            );

            // Animate buttons
            tl.fromTo(
                buttonsRef.current.children,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
                1.2
            );

            // Animate image
            tl.fromTo(
                imageRef.current,
                { x: 100, opacity: 0, scale: 0.9 },
                { x: 0, opacity: 1, scale: 1, duration: 1 },
                0.5
            );

            // Animate star with rotation
            tl.fromTo(
                starRef.current,
                { scale: 0, rotation: -180, opacity: 0 },
                { scale: 1, rotation: 0, opacity: 1, duration: 0.8 },
                1
            );

            // Continuous star rotation
            gsap.to(starRef.current, {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: 'none'
            });
        } else {
            // On mobile, just show everything immediately
            gsap.set([headingRef.current, subheadingRef.current, buttonsRef.current, imageRef.current, starRef.current], {
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1
            });
        }

        return () => window.removeEventListener('resize', checkMobile);
    }, [isMobile]);

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white pt-14 sm:pt-16 lg:pt-20 pb-4 sm:pb-6 lg:pb-8 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="relative z-10">
                        <h1 ref={headingRef} className="text-[28px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6">
                            <span className="word inline-block">We</span>{' '}
                            <span className="word inline-block">Can</span>{' '}
                            <span className="word inline-block">Build</span>{' '}
                            <span className="word inline-block">a</span>{' '}
                            <span className="word inline-block">Fully</span>
                            <span ref={starRef} className="inline-block mx-1 sm:mx-2 align-middle">
                                <svg className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 text-gray-300" viewBox="0 0 100 100" fill="currentColor">
                                    <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
                                </svg>
                            </span>
                            <br />
                            <span className="word inline-block">Integrated</span>{' '}
                            <span className="word inline-block">Digital</span>
                            <br />
                            <span className="word inline-block">Product</span>{' '}
                            <span className="word inline-block">for</span>{' '}
                            <span className="word inline-block">You</span>
                        </h1>

                        <p ref={subheadingRef} className="text-sm sm:text-base lg:text-lg text-gray-600 mb-5 sm:mb-6 lg:mb-8 max-w-xl leading-relaxed">
                            A digital agency can provide numerous benefits for business looking to establish and enhance their online presence.
                        </p>

                        <div ref={buttonsRef} className="flex flex-row items-center gap-3 sm:gap-4">
                            <button className="btn-fill-hover group pl-4 pr-2 py-2 sm:pl-5 sm:pr-2.5 sm:py-2.5 lg:pl-6 lg:pr-3 lg:py-3 bg-primary/20 text-primary text-sm sm:text-base font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap" style={{ "--fill-color": "#1a5f4f" }}>
                                Get Started
                                <span className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-primary rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-white group-hover:text-primary transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </span>
                            </button>

                            <button className="group px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 bg-white text-gray-700 text-sm sm:text-base font-semibold rounded-full border-2 border-gray-200 hover:border-primary hover:text-primary transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 whitespace-nowrap">
                                Learn More
                            </button>

                            {/* Scroll Indicator - Beside buttons on large screens */}
                            <div className="hidden lg:block ml-4">
                                <ScrollIndicator className="scale-75 origin-left" />
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div ref={imageRef} className="relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-w-sm lg:max-w-md xl:max-w-lg">
                            <img
                                src="/hero-team.jpg"
                                alt="CoreX Team"
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.classList.add('bg-gradient-to-br', 'from-primary/20', 'to-accent/20', 'aspect-[4/3]');
                                }}
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator - Centered below content on mobile/tablet */}
                <div className="relative mt-12 lg:hidden">
                    <ScrollIndicator className="relative left-1/2 -translate-x-1/2" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
