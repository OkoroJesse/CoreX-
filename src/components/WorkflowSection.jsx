import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkflowSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.fromTo(
                headingRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    }
                }
            );

            // Cards animation
            gsap.fromTo(
                cardsRef.current.children,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: 'top 75%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const steps = [
        {
            number: '01',
            title: 'Project Brief',
            description: 'Clearly define project requirements. We visualize entire user experience interaction achieving their goals'
        },
        {
            number: '02',
            title: 'Project Strategy',
            description: 'Clearly define project requirements. We visualize entire user experience interaction achieving their goals'
        },
        {
            number: '03',
            title: 'Final Output',
            description: 'Clearly define project requirements. We visualize entire user experience interaction achieving their goals'
        }
    ];

    return (
        <section ref={sectionRef} className="py-4 lg:py-8 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Heading */}
                <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                        Explore Our Work Flow
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        A digital business agency is a company or organization that specializes in providing services related to digital.
                    </p>
                </div>

                {/* Workflow Cards */}
                <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-md hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Arrow - Only show for first two cards */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            )}

                            {/* Number */}
                            <div className="text-6xl lg:text-7xl font-bold text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {step.number}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                {step.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkflowSection;
