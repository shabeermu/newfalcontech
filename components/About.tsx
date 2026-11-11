
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-light">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-display uppercase text-primary mb-6">About Us</h2>
                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                            <p>
                                At New Falcon Tech Solutions, we provide a comprehensive range of services for all brands of Photocopiers, Printers, Thermal printers, Scanners, Laptops, Computers, Accessories and Spare parts in the GCC Region.
                            </p>
                            <p>
                                Our team provides immediate technical support for your equipment, ensuring that help is just a call away whenever you need it. With experienced professional technicians available around the clock, you can be sure that your machines are in capable hands.
                            </p>
                            <p>
                                Additionally, we offer both brand new and reconditioned machines to suit your needs.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src="/about.webp" alt="Modern office equipment" className="rounded-lg shadow-2xl w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
