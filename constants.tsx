
import React from 'react';

const CopierIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
);
const PrinterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
);
const ScannerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15zM17 8l-5 5-5-5" />
    </svg>
);
const CctvIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);
const TonerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2h-2m-4 2h4m-4 0v-4m0 4H8m0 0v-4m0 4L6 14m6 2l2-2" />
    </svg>
);
const AccessoriesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const PRODUCTS = [
    {
        icon: <CopierIcon />,
        title: "Copiers",
        description: "Modern digital, color, and multifunction copiers (MFPs) from top brands."
    },
    {
        icon: <PrinterIcon />,
        title: "Printers",
        description: "A wide variety of printers including inkjet, laser, thermal, and 3D printers."
    },
    {
        icon: <ScannerIcon />,
        title: "Scanners",
        description: "Various categories of scanners like Drum, Flatbed, and handheld scanners."
    },
    {
        icon: <CctvIcon />,
        title: "CCTV",
        description: "Expert installation and maintenance of CCTV, biometric devices, and alarm systems."
    },
    {
        icon: <TonerIcon />,
        title: "Toner & Ink",
        description: "High-quality toner and ink cartridges for all models to grow your business."
    },
    {
        icon: <AccessoriesIcon />,
        title: "Computer Accessories",
        description: "Wholesale and retail IT accessories including keyboards, mice, speakers, and cables."
    }
];

export const SERVICES = [
    { title: "AMC Contract", description: "Scheduled service, labor, and managed repair costs over a one-year period." },
    { title: "Speed Delivery", description: "Get your accessories in your hands within one hour of placing your order." },
    { title: "Office Equipment", description: "Prompt delivery and professional installation of all essential office equipment." },
    { title: "Used & Rental", description: "High-quality reconditioned copier machines for rent with free installation." },
    { title: "Installation", description: "Expert setup of network printers, drivers, and toner management." },
    { title: "Maintenance", description: "Regular inspections, cleaning, and calibration to enhance equipment lifespan." },
    { title: "Troubleshooting", description: "Diagnosing and resolving complex hardware and software issues." },
    { title: "Customer Service", description: "Ensuring a high level of customer satisfaction with excellent service." },
];

export const BRANDS = [
    "Canon", "Konica Minolta", "Samsung", "Kyocera", "Panasonic", "OKI",
    "Ricoh", "brother", "Lexmark", "nashuatec", "Epson", "Toshiba",
    "Sharp", "HP", "Xerox"
];
