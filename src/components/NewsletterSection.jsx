import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NewsletterSection = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                contentRef.current.children,
                { y: 50, opacity: 0 },
                {
                    y: 0,
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-4 lg:py-8 bg-gray-100 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" className="text-primary">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
            </div>

            <div className="absolute top-20 left-20 w-24 h-24 opacity-10">
                <svg viewBox="0 0 100 100" className="text-accent">
                    <path d="M50 10 L90 90 L10 90 Z" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
            </div>

            <div className="absolute bottom-10 right-10 w-40 h-40 opacity-20">
                <svg viewBox="0 0 100 100" className="text-primary">
                    <path d="M20 50 Q50 20 80 50 T140 50" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
            </div>

            <div className="absolute top-1/2 right-20 w-20 h-20 opacity-15">
                <svg viewBox="0 0 100 100" className="text-accent">
                    <circle cx="50" cy="50" r="8" fill="currentColor" />
                    <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="50" y1="30" x2="50" y2="10" stroke="currentColor" strokeWidth="2" />
                    <line x1="50" y1="70" x2="50" y2="90" stroke="currentColor" strokeWidth="2" />
                    <line x1="30" y1="50" x2="10" y2="50" stroke="currentColor" strokeWidth="2" />
                    <line x1="70" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div ref={contentRef} className="text-center space-y-8">
                    {/* Heading */}
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                        Do You Want to Grow Your Business? Let's Chat!
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover the blog & article practices that make our agency a champion of diversity and equality.
                    </p>

                    {/* Email Form */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:flex-1 px-6 py-3 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                        />
                        <button className="btn-fill-hover group w-full sm:w-auto pl-6 pr-3 py-3 bg-primary/20 text-primary font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105" style={{ "--fill-color": "#1a5f4f" }}>
                            Subscribe Now
                            <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                <svg className="w-4 h-4 text-white group-hover:text-primary transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
