import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkSmarterSection = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const features = [
        {
            title: 'Flexible Working Schedule',
            description: 'Marketing online present and overall in digital world to make strategy for startup businesses.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Expert Team Member',
            description: 'We always think different business solutions for the your business create growth solutions.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        }
    ];

    return (
        <section ref={sectionRef} className="py-4 lg:py-8 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Image */}
                    <div ref={imageRef} className="relative max-w-sm lg:max-w-md mx-auto lg:mx-0">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/team-collaboration.jpg"
                                alt="Team collaboration"
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.classList.add('bg-gradient-to-br', 'from-primary/20', 'to-accent/20', 'aspect-[4/3]');
                                }}
                            />
                            {/* Yellow accent bar */}
                            <div className="absolute top-0 right-0 w-16 h-full bg-yellow-400"></div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div ref={contentRef} className="space-y-8">
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                            Work Smarter Not Harder in Every Task
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Marketing online present and overall in digital world to make awesome strategy for startup businesses.
                        </p>

                        {/* Features List */}
                        <div className="space-y-6 pt-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSmarterSection;
