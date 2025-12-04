import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
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

            // Cards pop-up animation - alternating from left and right
            const cards = cardsRef.current.children;
            Array.from(cards).forEach((card, index) => {
                const fromLeft = index % 2 === 0;
                gsap.fromTo(
                    card,
                    {
                        x: fromLeft ? -100 : 100,
                        opacity: 0,
                        scale: 0.8
                    },
                    {
                        x: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        delay: index * 0.15,
                        ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: cardsRef.current,
                            start: 'top 75%',
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const testimonials = [
        {
            rating: 5,
            title: 'Great value able startup company 👍',
            text: "Being an early adopter of Vibebes cutting edge technology has revolutionized our business operations. Their innovative solutions have not only streamlined.",
            author: 'Sarah Johnson',
            role: 'CEO'
        },
        {
            rating: 5,
            title: 'Such a wonderful website ❤️',
            text: "Their agile strategies and data-driven to approach have significantly boosted our online presence. The team's a creativity, coupled with a thorough understanding of market dynamics, has exceeded our expectations. We look forward to",
            author: 'Dianne Russell',
            role: 'Founder',
            avatar: '👨‍💼'
        },
        {
            rating: 5,
            title: 'Love the home pages and tips',
            text: "Their powerful financial tools and tailored advice have streamlined our accounting processes and fueled our growth.",
            author: 'Marvin McKinney',
            role: 'Marketing Officer',
            avatar: '👨'
        },
        {
            rating: 5,
            title: "I can honestly say that I've enjoyed",
            text: "Vibebes is an indispensable partner in our journey toward financial success. Their robust financial tools and personalized advice have not only streamlined ❤️",
            author: 'Ronald Richards',
            role: 'Businessman',
            avatar: '👨‍💼'
        },
        {
            rating: 5,
            title: '10/10 would recommend 👌',
            text: "The workouts are fun to do but still make you sweat! I'm so grateful for the two of you for starting this amazing app",
            author: 'Kristin Watson',
            role: 'Social Influencer',
            avatar: '👨'
        },
        {
            rating: 5,
            title: 'Awesome experience with VibeBes',
            text: "As someone who has not exercised for a few years, it is great to be getting back into it with such accessible exercises and daily tips. Would recommend to anyone whatever fitness level, The workouts are really fun and my family are loving it too! Wonderful job guys 😍",
            author: 'Karen Lynn',
            role: 'Founder',
            avatar: '👩'
        }
    ];

    return (
        <section ref={sectionRef} className="py-4 lg:py-8 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Heading */}
                <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-12 h-0.5 bg-orange-400"></div>
                        <span className="text-orange-400 font-semibold text-lg">Testimonials</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                        What Our Clients Says About Us
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Star Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {testimonial.title}
                            </h3>

                            {/* Text */}
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {testimonial.text}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
                                    {testimonial.avatar || '👤'}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
