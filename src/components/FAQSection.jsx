import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQItem = ({ number, question, answer, isOpen, onClick }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.to(contentRef.current, {
                height: 'auto',
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out',
            });
        } else {
            gsap.to(contentRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in',
            });
        }
    }, [isOpen]);

    return (
        <div className={`border rounded-2xl overflow-hidden bg-white mb-4 transition-all duration-300 hover:shadow-md ${isOpen ? 'border-primary/50 bg-primary/5' : 'border-gray-200'}`}>
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
                <div className="flex items-center gap-6">
                    <span className={`text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-gray-400'}`}>{number}</span>
                    <h3 className={`text-lg lg:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-gray-900'}`}>{question}</h3>
                </div>
                <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180 bg-primary text-white' : 'bg-gray-100 text-gray-600'
                        }`}
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </button>
            <div
                ref={contentRef}
                className="h-0 opacity-0 overflow-hidden"
            >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const leftColumnRef = useRef(null);
    const rightColumnRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(0); // First item open by default

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

            // Columns animation
            gsap.fromTo(
                [leftColumnRef.current, rightColumnRef.current],
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const faqs = [
        {
            question: "What is a Digital Agency?",
            answer: "A digital agency is a company that offers a range of services related to digital marketing, online presence that helps and digital strategy for businesses."
        },
        {
            question: "What Are the Startup Agency System?",
            answer: "A startup agency system refers to the set of strategies, tools, and processes that an agency—typically a digital marketing or consulting agency—uses to help startups grow and thrive."
        },
        {
            question: "What Services Does Digital Agency Offer?",
            answer: "Digital agencies offer services including web design, development, SEO, content marketing, social media management, and digital strategy consulting."
        },
        {
            question: "How is Your Agency Different From Others?",
            answer: "We focus on data-driven results, personalized strategies, and a collaborative approach that puts your business goals at the forefront of everything we do."
        },
        {
            question: "What Industries Do You Specialize in?",
            answer: "We specialize in technology, e-commerce, healthcare, and finance sectors, but our adaptable strategies have proven successful across various industries."
        },
        {
            question: "What is Your Pricing Structure?",
            answer: "A startup agency system refers to the set of strategies, tools, and processes that an agency—typically a digital marketing or consulting agency—uses to help startups grow and thrive."
        },
        {
            question: "How Do You Manage Social Marketing?",
            answer: "We use advanced analytics and scheduling tools to create engaging content, manage community interactions, and track performance across all major social platforms."
        },
        {
            question: "Do You Offer Content Creation Services?",
            answer: "Yes, we provide comprehensive content creation services including blog writing, video production, graphic design, and copywriting tailored to your brand voice."
        }
    ];

    const midPoint = Math.ceil(faqs.length / 2);
    const leftFaqs = faqs.slice(0, midPoint);
    const rightFaqs = faqs.slice(midPoint);

    return (
        <section ref={sectionRef} className="py-4 lg:py-8 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Heading */}
                <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                        Frequently Asked Questions About Our Digital Agency
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A digital business agency is a company or organization that specializes in providing services related to digital.
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
                    {/* Left Column */}
                    <div ref={leftColumnRef}>
                        {leftFaqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                number={`0${index + 1}`}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div ref={rightColumnRef}>
                        {rightFaqs.map((faq, index) => {
                            const actualIndex = index + midPoint;
                            return (
                                <FAQItem
                                    key={actualIndex}
                                    number={`0${actualIndex + 1}`}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === actualIndex}
                                    onClick={() => setOpenIndex(openIndex === actualIndex ? -1 : actualIndex)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
