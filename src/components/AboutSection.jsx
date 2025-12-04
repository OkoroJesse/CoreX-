import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    const featuresRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image animation
            gsap.fromTo(
                imageRef.current,
                { x: -100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    }
                }
            );

            // Content animation
            gsap.fromTo(
                contentRef.current.children,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 75%',
                    }
                }
            );

            // Features animation
            gsap.fromTo(
                featuresRef.current.children,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: featuresRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const features = [
        {
            text: 'Fast and easy to help your brand.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            )
        },
        {
            text: 'Fast and easy to help your brand.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            )
        },
        {
            text: 'Fast and easy to help your brand.',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            )
        }
    ];

    return (
        <section ref={sectionRef} className="py-4 lg:py-8 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Left - Image */}
                    <div ref={imageRef} className="relative order-2 lg:order-1">
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/about-professional.jpg"
                                alt="Professional at work"
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.classList.add('bg-gradient-to-br', 'from-primary/20', 'to-accent/20', 'aspect-[4/3]');
                                }}
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div ref={contentRef} className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                        <div className="flex items-center gap-3">
                            <div className="w-8 sm:w-12 h-0.5 bg-orange-400"></div>
                            <span className="text-orange-400 font-semibold text-base sm:text-lg">About Us</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                            Why Work With Us And How We Work?
                        </h2>

                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                            Marketing online present and overall in digital world to make awesome strategy for startup businesses.
                        </p>

                        {/* Features List */}
                        <div ref={featuresRef} className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 sm:gap-4 group"
                                >
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg">{feature.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
