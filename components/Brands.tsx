
import React from 'react';
import { BRANDS } from '../constants';

const Brands: React.FC = () => {
    return (
        <section id="brands" className="py-20 bg-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-display uppercase text-primary">Brands We Deal With</h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
                        Our strategic partnerships with the world's leading manufacturers ensure we have the specialized training and genuine parts you need.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
                    <img src="/logo1.webp" alt="Brand Logo 1" />
                    <img src="/logo2.webp" alt="Brand Logo 2" />
                    <img src="/logo3.webp" alt="Brand Logo 3" />
                    <img src="/logo4.webp" alt="Brand Logo 4" />
                    <img src="/logo5.webp" alt="Brand Logo 5" />
                    <img src="/logo6.webp" alt="Brand Logo 6" />
                    <img src="/logo7.webp" alt="Brand Logo 7" />
                    <img src="/logo8.webp" alt="Brand Logo 8" />
                    <img src="/logo9.webp" alt="Brand Logo 9" />
                    <img src="/logo10.webp" alt="Brand Logo 10" />
                    <img src="/logo11.webp" alt="Brand Logo 11" />
                    <img src="/logo12.webp" alt="Brand Logo 12" />
                    <img src="/logo13.webp" alt="Brand Logo 13" />
                    <img src="/logo14.webp" alt="Brand Logo 14" />
                    <img src="/logo15.webp" alt="Brand Logo 15" />
                    {/* {BRANDS.map((brand, index) => (
                        <div key={index} className="text-center font-semibold text-gray-500 text-xl filter grayscale hover:grayscale-0 transition duration-300">
                            {brand}
                        </div>
                    ))} */}
                </div>
            </div>
        </section>
    );
};

export default Brands;
