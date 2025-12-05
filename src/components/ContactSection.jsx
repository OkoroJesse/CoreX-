import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const contentRef = useRef(null);

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

            // Content animation (Image and Form)
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
                        trigger: contentRef.current,
                        start: 'top 60%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-4 lg:py-8 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Heading */}
                <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-0 space-y-2">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                        Get in Touch With Us Today: Vibebes
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We are offer features and services for businesses and individuals with your unique needs in mind.
                    </p>
                </div>

                {/* Content Grid */}
                <div ref={contentRef} className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-start">
                    {/* Left - Image */}
                    <div className="relative rounded-3xl overflow-hidden h-full min-h-[400px] max-w-sm lg:max-w-md mx-auto lg:mx-0">
                        <img
                            src="/contact-person.jpg"
                            alt="Contact Person"
                            className="w-full h-full object-cover absolute inset-0"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.classList.add('bg-gray-200');
                            }}
                        />
                    </div>

                    {/* Right - Form */}
                    <div className="bg-gray-100 rounded-3xl p-8 lg:p-12">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Fast Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        placeholder="Fast Name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        placeholder="Last Name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Massage</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Example Text"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn-fill-hover group w-full pl-6 pr-3 py-3 bg-primary/20 text-primary font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                                style={{ "--fill-color": "#1a5f4f" }}
                            >
                                Send Message
                                <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                    <svg className="w-4 h-4 text-white group-hover:text-primary transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </span>
                            </button>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                                />
                                <label htmlFor="privacy" className="text-sm text-gray-600">
                                    I agree to the Insurbes privacy policy
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
