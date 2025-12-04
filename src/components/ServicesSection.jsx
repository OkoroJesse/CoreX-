import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = ({ onBrowseAll }) => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.fromTo(
                headingRef.current.children,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
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
                { y: 50, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
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

    const services = [
        {
            number: '01',
            title: 'Product Design',
            description: "We're committed to finding solutions that drive success for your brand.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        },
        {
            number: '02',
            title: 'Web Development',
            description: "We're committed to finding solutions that drive success for your brand.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            number: '03',
            title: 'Digital Marketing',
            description: "We're committed to finding solutions that drive success for your brand.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
            )
        },
        {
            number: '04',
            title: 'Brand And Identity',
            description: "We're committed to finding solutions that drive success for your brand.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        }
    ];

    return (
        <section ref={sectionRef} className="py-4 lg:py-8 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 lg:gap-16">
                    {/* Left - Heading */}
                    <div ref={headingRef} className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-0.5 bg-orange-400"></div>
                            <span className="text-orange-400 font-semibold text-lg">Services</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                            We Offer The Best Services to Our Clients
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            A digital business agency is a company or organization that specializes in providing services related to digital marketing, online present, and overall digital strategy for businesses.
                        </p>

                        <button
                            onClick={onBrowseAll}
                            className="btn-fill-hover group pl-6 pr-3 py-3 bg-primary/20 text-primary font-semibold rounded-full transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-lg mt-4"
                            style={{ "--fill-color": "#1a5f4f" }}
                        >
                            Browse All Services
                            <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                <svg className="w-4 h-4 text-white group-hover:text-primary transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    {/* Right - Service Cards Grid */}
                    <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer"
                            >
                                {/* Number */}
                                <div className="absolute top-6 right-6 text-4xl font-bold text-gray-200 group-hover:text-white/20 transition-colors duration-300">
                                    {service.number}
                                </div>

                                {/* Icon */}
                                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-white/20 group-hover:text-white transition-all duration-300 mb-6">
                                    {service.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
