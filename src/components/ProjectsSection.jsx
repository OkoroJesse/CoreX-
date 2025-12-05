import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const buttonRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current || !buttonRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Constrain button within card boundaries
        const buttonSize = 96; // w-24 = 96px (smaller size)
        const padding = buttonSize / 2;
        const constrainedX = Math.max(padding, Math.min(x, rect.width - padding));
        const constrainedY = Math.max(padding, Math.min(y, rect.height - padding));

        setMousePos({ x: constrainedX, y: constrainedY });
    };

    useEffect(() => {
        if (buttonRef.current) {
            gsap.to(buttonRef.current, {
                x: mousePos.x,
                y: mousePos.y,
                duration: 0.3,
                ease: 'power2.out',
            });
        }
    }, [mousePos]);

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="group relative bg-gray-100 rounded-3xl overflow-hidden aspect-[4/3] cursor-none"
        >
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                    e.target.style.display = 'none';
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-orange-400 font-semibold mb-2">{project.category}</p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">{project.title}</h3>
                </div>
            </div>

            {/* Magnetic "View Project" Button - Smaller Size */}
            <div
                ref={buttonRef}
                className="absolute w-24 h-24 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{ left: 0, top: 0 }}
            >
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                        <p className="text-xs font-bold text-gray-900">View</p>
                        <p className="text-xs font-bold text-gray-900">Project</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectsSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const gridRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState('All');

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

            // Grid animation
            gsap.fromTo(
                gridRef.current.children,
                { y: 60, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 75%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const filters = ['All', 'Dashboard', 'Webflow', 'Branding', 'App Design'];

    const projects = [
        {
            title: 'Dashboard Design',
            category: 'Dashboard',
            image: '/project-1.jpg'
        },
        {
            title: 'Mobile App UI',
            category: 'App Design',
            image: '/project-2.jpg'
        },
        {
            title: 'Brand Identity',
            category: 'Branding',
            image: '/project-3.jpg'
        },
        {
            title: 'E-commerce Platform',
            category: 'Webflow',
            image: '/project-4.jpg'
        }
    ];

    return (
        <section ref={sectionRef} className="py-4 lg:py-8 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <div ref={headingRef} className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-0.5 bg-orange-400"></div>
                            <span className="text-orange-400 font-semibold text-lg">Projects</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                            Some of Our Creative Works
                        </h2>
                    </div>

                    <button className="btn-fill-hover group pl-6 pr-3 py-3 bg-primary/20 text-primary font-semibold rounded-full transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-lg self-start lg:self-auto" style={{ "--fill-color": "#1a5f4f" }}>
                        Explore More
                        <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                            <svg className="w-4 h-4 text-white group-hover:text-primary transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* Projects Grid */}
                <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
