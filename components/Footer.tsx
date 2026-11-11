import React from 'react';

const FalconLogo = () => (
    <img src="/logo_icon.svg" alt="New Falcon Tech Solutions" className="h-10 w-10" />
);


const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

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
        <footer className="bg-primary text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <div className="flex justify-center md:justify-start items-center space-x-3 mb-4">
                             <FalconLogo />
                            <span className="text-2xl font-display uppercase tracking-wider">New Falcon Tech Solutions</span>
                        </div>
                        <p className="text-gray-300 text-sm">Your reliable partner for office technology and solutions in the GCC region.</p>
                    </div>
                    <div>
                        <h4 className="font-bold font-display text-lg uppercase mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#about" onClick={handleNavClick} className="hover:text-secondary transition-colors">About Us</a></li>
                            <li><a href="#products" onClick={handleNavClick} className="hover:text-secondary transition-colors">Products</a></li>
                            <li><a href="#services" onClick={handleNavClick} className="hover:text-secondary transition-colors">Services</a></li>
                            <li><a href="#contact" onClick={handleNavClick} className="hover:text-secondary transition-colors">Contact</a></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-bold font-display text-lg uppercase mb-4">Contact Info</h4>
                        <ul className="space-y-2 text-gray-300">
                             <li><a href="mailto:contact@newfalcontech.com" className="hover:text-secondary">contact@newfalcontech.com</a></li>
                             <li><a href="http://www.newfalcontech.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">www.newfalcontech.com</a></li>
                             <li>Khalid Bin Waleed Street, Jeddah - KSA</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-400">
                    <p>&copy; {currentYear} New Falcon Tech Solutions. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;