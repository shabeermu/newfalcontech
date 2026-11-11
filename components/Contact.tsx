import React from 'react';

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);


const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-display uppercase text-primary">Contact Us</h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Have questions? We'd love to hear from you. Reach out and we'll get back to you shortly.</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold font-display mb-6 text-dark">Get in Touch</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <PhoneIcon />
                                <div>
                                    <h4 className="font-bold text-dark">Sales Executive</h4>
                                    <a href="tel:+966547584367" className="text-gray-600 hover:text-primary">+966 54 758 4367</a>, <a href="tel:+966547551192" className="text-gray-600 hover:text-primary">+966 54 755 1192</a>
                                    <h4 className="font-bold text-dark mt-2">Office</h4>
                                    <a href="tel:+966546339483" className="text-gray-600 hover:text-primary">+966 54 633 9483</a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <MailIcon />
                                <a href="mailto:contact@newfalcontech.com" className="text-gray-600 hover:text-primary">contact@newfalcontech.com</a>
                            </div>
                            <div className="flex items-start">
                                <LocationIcon />
                                <p className="text-gray-600">Khalid Bin Waleed Street, Jeddah - KSA</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 rounded-lg shadow-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14844.25687796016!2d39.1764668871582!3d21.544778300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cf374531109f%3A0x4426d971576263e6!2sKhalid%20Ibn%20Al%20Walid%20St%2C%20Jeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1701104141285!5m2!1sen!2sus"
                            className="w-full h-full min-h-[450px]"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;