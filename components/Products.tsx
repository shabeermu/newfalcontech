
import React from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
    return (
        <section id="products" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-display uppercase text-primary">Our Products</h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">From copiers to CCTV, we supply a wide range of high-quality tech products.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRODUCTS.map((product, index) => (
                        <div key={index} className="bg-light p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
                            <div className="mb-4">
                                {product.icon}
                            </div>
                            <h3 className="text-2xl font-display text-dark mb-2">{product.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{product.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
