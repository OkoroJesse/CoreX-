import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import WorkflowSection from './components/WorkflowSection'
import ProjectsSection from './components/ProjectsSection'
import WorkSmarterSection from './components/WorkSmarterSection'
import TestimonialsSection from './components/TestimonialsSection'
import MarqueeSection from './components/MarqueeSection'
import FAQSection from './components/FAQSection'
import NewsletterSection from './components/NewsletterSection'
import ContactSection from './components/ContactSection'
import ContactInfoSection from './components/ContactInfoSection'
import Footer from './components/Footer'
import ServicesPage from './components/ServicesPage'

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    if (currentPage === 'services') {
        return <ServicesPage onBack={() => setCurrentPage('home')} />;
    }

    return (
        <div className="min-h-screen">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ServicesSection onBrowseAll={() => setCurrentPage('services')} />
            <WorkflowSection />
            <ProjectsSection />
            <WorkSmarterSection />
            <TestimonialsSection />
            <MarqueeSection />
            <FAQSection />
            <ContactSection />
            <ContactInfoSection />
            <NewsletterSection />
            <Footer />
        </div>
    )
}

export default App
