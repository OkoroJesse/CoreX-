import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from './Navbar';
import Footer from './Footer';

const ServicesPage = ({ onBack }) => {
    const headerRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        // Scroll to top when page opens
        window.scrollTo(0, 0);

        // Header animation
        gsap.fromTo(
            headerRef.current.children,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        );

        // Grid animation
        gsap.fromTo(
            gridRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.4
            }
        );
    }, []);

    const services = [
        {
            id: '01',
            title: 'Product Design',
            description: 'Brainstorming and generating ideas that\'s based on research findings. This phase in involves sketching, creating mood board, and exploring different concepts to develop innovative solutions.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
            )
        },
        {
            id: '02',
            title: 'Web Development',
            description: 'Implementing the design to using HTML, CSS, Bootstraps and JavaScript to create the user facing aspects of the website. Front end developers focus on building responsive layouts.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            id: '03',
            title: 'Digital Marketing',
            description: 'Digital marketing refers to the use of the digital channels, platforms, and many technologies to promote to products, services, or brands to reach engage with target audiences.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
            )
        },
        {
            id: '04',
            title: 'Brand Identity',
            description: 'Creating a unique identity for your business that resonates with your target audience. We focus on logo design, color palettes, typography, and visual guidelines.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
            )
        },
        {
            id: '05',
            title: 'SEO Optimization',
            description: 'Improving your website visibility on search engines to drive organic traffic. We implement on-page and off-page strategies to boost your rankings.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            )
        },
        {
            id: '06',
            title: 'Content Strategy',
            description: 'Developing a comprehensive content plan that aligns with your business goals. We create engaging content that educates, entertains, and converts.',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 space-y-6">
                        <h1 className="text-5xl lg:text-6xl font-bold text-[#1a5f4f]">
                            Explore Our Services
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We offer features and services for businesses and individuals with your unique needs in mind.
                        </p>

                        {/* Back Button */}
                        <button
                            onClick={onBack}
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mt-4"
                        >
                            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            Back to Home
                        </button>
                    </div>

                    {/* Services Grid */}
                    <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="group p-8 border border-gray-200 hover:border-primary/50 rounded-none bg-white hover:shadow-lg transition-all duration-300 relative"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                    <span className="text-gray-400 font-medium">{service.id}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-[#1a5f4f] mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ServicesPage;
