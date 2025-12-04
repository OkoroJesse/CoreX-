import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Navbar = () => {
    const navRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Mobile menu animation only
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            gsap.to(mobileMenuRef.current, {
                x: 0,
                duration: 0.4,
                ease: 'power3.out'
            });
        } else {
            gsap.to(mobileMenuRef.current, {
                x: '-100%',
                duration: 0.4,
                ease: 'power3.in'
            });
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20 lg:h-24">
                        {/* Logo */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                                </svg>
                            </div>
                            <span className="text-xl sm:text-2xl font-bold text-primary">CoreX</span>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden lg:flex items-center gap-8">
                            <a href="#home" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium group relative">
                                Home
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            <a href="#about" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                                About Us
                            </a>
                            <a href="#projects" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                                Projects
                            </a>
                            <a href="#pages" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium group relative">
                                Pages
                                <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            <a href="#careers" className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                                Careers
                            </a>
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-4">
                            <button className="px-5 py-2 text-gray-700 font-medium hover:text-primary transition-colors duration-300 border border-gray-200 rounded-full hover:border-primary">
                                Login
                            </button>
                            <button className="btn-fill-hover pl-5 pr-2 py-2 bg-primary/20 text-primary font-medium rounded-full transition-all duration-300 flex items-center gap-2 group" style={{ "--fill-color": "#1a5f4f" }}>
                                Let's Talk
                                <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                    <svg className="w-3 h-3 text-white group-hover:text-primary transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 bg-gray-900 text-white rounded-lg"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef}
                className="fixed top-0 left-0 bottom-0 w-64 bg-white z-50 lg:hidden shadow-2xl transform -translate-x-full"
            >
                <div className="p-6 space-y-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold text-primary">Vibebes</span>
                    </div>

                    {/* Navigation Links */}
                    <nav className="space-y-4">
                        <a href="#home" className="block text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                            Home
                            <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                        <a href="#about" className="block text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                            About Us
                        </a>
                        <a href="#projects" className="block text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                            Projects
                        </a>
                        <a href="#pages" className="block text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                            Pages
                            <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                        <a href="#careers" className="block text-gray-700 hover:text-primary transition-colors duration-300 font-medium">
                            Careers
                        </a>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="flex gap-2 pt-6 border-t border-gray-200">
                        <button className="px-5 py-2 text-gray-700 text-sm font-medium hover:text-primary transition-colors duration-300 border border-gray-300 rounded-full hover:border-primary bg-white">
                            Login
                        </button>
                        <button className="btn-fill-hover pl-5 pr-2 py-2 bg-primary/20 text-primary text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 group" style={{ "--fill-color": "#1a5f4f" }}>
                            Let's Talk
                            <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                                <svg className="w-3 h-3 text-white group-hover:text-primary transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
