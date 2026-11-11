
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-gradient-to-br from-primary to-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-display uppercase text-white">Our Services</h2>
                    <p className="text-lg text-gray-200 mt-2 max-w-2xl mx-auto">Comprehensive support to keep your business running smoothly and efficiently.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service, index) => (
                        <div key={index} className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 text-white">
                            <h3 className="text-xl font-bold font-display mb-2">{service.title}</h3>
                            <p className="text-gray-100 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
