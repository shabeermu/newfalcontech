import React, { useState } from 'react';

const FalconLogo = () => (
    <img src="/logo_icon.svg" alt="New Falcon Tech Solutions" className="h-10 w-10" />
);

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ["About", "Products", "Services", "Brands"];

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
        <header className="bg-primary shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#home" onClick={handleNavClick} className="flex items-center space-x-3">
                    <FalconLogo />
                    <span className="text-white text-2xl font-display uppercase tracking-wider">New Falcon</span>
                </a>

                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} onClick={handleNavClick} className="text-white hover:text-secondary transition duration-300 font-medium">{link}</a>
                    ))}
                    <a href="#contact" onClick={handleNavClick} className="bg-secondary text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition duration-300">
                        Contact Us
                    </a>
                </nav>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-primary pb-4">
                    <nav className="flex flex-col items-center space-y-4">
                        {navLinks.map(link => (
                            <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => { handleNavClick(e); setIsOpen(false); }} className="text-white hover:text-secondary transition duration-300 font-medium">{link}</a>
                        ))}
                        <a href="#contact" onClick={(e) => { handleNavClick(e); setIsOpen(false); }} className="bg-secondary text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition duration-300">
                            Get a Quote
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;