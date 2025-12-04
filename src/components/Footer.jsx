import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Top Section - Copyright and Powered By */}
                <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>Copyright © CoreX 2025</p>
                    <p>Powered by Webflow</p>
                </div>

                {/* Large CoreX Text */}
                <div className="py-12 lg:py-16">
                    <h2 className="footer-logo text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-200 text-center leading-none">
                        CoreX
                    </h2>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
