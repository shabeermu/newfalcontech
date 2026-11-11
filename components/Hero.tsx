import React from 'react';

const Hero: React.FC = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(1);
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/bg.webp')" }}></div>
            <div className="absolute inset-0 bg-primary opacity-80"></div>
            <div className="relative z-10 text-center px-6">
                <h1 className="text-5xl md:text-7xl font-display uppercase tracking-widest mb-4">New Falcon</h1>
                <h2 className="text-3xl md:text-5xl font-display uppercase text-secondary mb-8">Tech Solutions</h2>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans">
                    Your one-stop solution for photocopiers, printers, scanners, and comprehensive tech services in the GCC Region.
                </p>
                <a href="#products" onClick={handleNavClick} className="bg-white text-primary font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-light transition duration-300 shadow-lg">
                    Our Products
                </a>
            </div>
        </section>
    );
};

export default Hero;