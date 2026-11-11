import React from 'react';

const Cta: React.FC = () => {
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
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="bg-light rounded-lg shadow-xl p-12 text-center flex flex-col items-center">
                    <div className="relative inline-block mb-4">
                        <span className="absolute -inset-2 block transform -skew-x-12 bg-red-600" aria-hidden="true"></span>
                        <span className="relative text-white font-bold text-xl">FREE VISIT & INSPECTION</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display uppercase text-primary mb-4">
                        Annual Maintenance Contract Available
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Ensure your equipment runs flawlessly with our scheduled maintenance, minimizing downtime and managing repair costs effectively.
                    </p>
                    <a href="#contact" onClick={handleNavClick} className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-opacity-90 transition duration-300 shadow-lg">
                        Inquire Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Cta;