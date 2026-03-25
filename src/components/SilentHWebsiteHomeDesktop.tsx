import { useEffect } from 'react';
import { motion } from 'framer-motion'; // optional, for smooth animations

// Placeholder image URLs (replace with your actual assets)
const placeholderImages = {
    image1: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
    image2: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
    image3: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    image4: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
    image5: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    image6: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=800&fit=crop',
    videoPlaceholder: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    mickeyVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
};

// Helper component for animated background bubbles
const Bubbles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
            className="absolute left-[-196px] w-[663px] h-[663px] top-[-151px] animate-float-1"
            style={{ animationDuration: '40s' }}
        >
            <div className="absolute inset-[-75.41%]">
                <svg className="w-full h-full" fill="none" viewBox="0 0 1663 1663">
                    <g filter="url(#filter0_f_1_266)">
                        <circle cx="831.5" cy="831.5" fill="#E4572E" r="331.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1_266" x="0" y="0" width="1663" height="1663" filterUnits="userSpaceOnUse">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
        <div
            className="absolute right-[-200px] w-[560px] h-[594px] top-[-92px] animate-float-2"
            style={{ animationDuration: '45s' }}
        >
            <div className="absolute inset-[-67.34%_-71.43%]">
                <svg className="w-full h-full" fill="none" viewBox="0 0 1360 1394">
                    <g filter="url(#filter0_f_1_268)">
                        <ellipse cx="680" cy="697" fill="#7B8B6F" rx="280" ry="297" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1_268" x="0" y="0" width="1360" height="1394" filterUnits="userSpaceOnUse">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur stdDeviation="200" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
        <div
            className="absolute left-1/2 -translate-x-1/2 w-[568px] h-[568px] top-[771px] animate-float-3"
            style={{ animationDuration: '38s' }}
        >
            <div className="absolute inset-[-88.03%]">
                <svg className="w-full h-full" fill="none" viewBox="0 0 1568 1568">
                    <g filter="url(#filter0_f_1_253)">
                        <circle cx="784" cy="784" fill="#3A2E2A" r="284" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1_253" x="0" y="0" width="1568" height="1568" filterUnits="userSpaceOnUse">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur stdDeviation="250" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    </div>
);

const Header = () => (
    <header className="absolute top-0 left-0 w-full z-20">
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 pt-6">
            <nav className="flex justify-between items-center">
                {/* Logo / NOTLIMITED text - will be handled by the actual logo SVG below */}
                <div className="w-[200px] md:w-[300px]">
                    {/* Logo will be rendered inside the hero section; here we leave empty */}
                </div>
                <ul className="hidden md:flex gap-6 text-[#f1e9da] text-sm tracking-wider uppercase font-bold">
                    <li><a href="#beliefs" className="hover:opacity-80 transition">Our Beliefs</a></li>
                    <li><a href="#services" className="hover:opacity-80 transition">Services</a></li>
                    <li><a href="#contact" className="hover:opacity-80 transition">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    </header>
);

// Hero video background
const HeroVideo = () => (
    <div className="absolute top-0 left-0 w-full h-[700px] overflow-hidden">
        <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop"
        >
            <source src={placeholderImages.videoPlaceholder} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
);

const LogoAndTagline = () => (
    <div className="absolute left-[48px] top-[40px] z-10 max-w-[464px]">
        <div className="mb-8">
            {/* NOTLIMITED SVG Logo */}
            <svg width="463" height="92" viewBox="0 0 463 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M102.53 72.7086C102.53 85.4176 96.2561 91.6918 83.5472 91.6918H75.9597C63.2654 91.6918 56.9765 85.4176 56.9765 72.7086V18.3395H72.6038V71.979C72.6038 76.0646 74.5006 77.9614 78.5862 77.9614H81.0667C85.0063 77.9614 86.9032 76.0646 86.9032 71.979V18.3395H102.516V72.7086H102.53Z" fill="#E4572E" />
                <path d="M56.9773 18.9832C56.9773 6.27423 63.2515 0 75.9605 0H83.548C96.2423 0 102.531 6.27423 102.531 18.9832V73.3523H86.9039V19.7128C86.9039 15.6272 85.0071 13.7304 80.9215 13.7304H78.441C74.5014 13.7304 72.6045 15.6272 72.6045 19.7128V73.3523H56.9919V18.9832H56.9773Z" fill="#E4572E" />
                <path d="M34.4645 0.658621H49.7853V90.8179H32.6406L15.6272 37.6766L15.7731 90.8179H0V0.658621H18.8957L34.5958 51.3048L34.4499 0.658621H34.4645Z" fill="#E4572E" />
                <path d="M176.72 0.658621V76.6498H193.952V90.8179H161.107V0.658621H176.735H176.72Z" fill="#E4572E" />
                <path d="M217.036 90.8179H201.423V0.658621H217.036V90.8179Z" fill="#E4572E" />
                <path d="M337.732 90.8179V14.8121H323.71V0.658621H367.352V14.8121H353.33V90.8179H337.718H337.732Z" fill="#E4572E" />
                <path d="M259.043 49.9478L266.281 0.658621H293.114V90.8179H277.793V26.2079L266.558 90.8179H251.383L240.148 25.9161V90.8179H224.739V0.658621H250.07L259.072 49.9478H259.043Z" fill="#E4572E" />
                <path d="M317.278 90.8179H301.666V0.658621H317.278V90.8179Z" fill="#E4572E" />
                <path d="M124.046 90.8179V14.8121H110.024V0.658621H153.666V14.8121H139.644V90.8179H124.031H124.046Z" fill="#E4572E" />
                <path d="M408.401 0.658621V14.8121H389.272V37.02H407.657V51.1881H389.272V76.6644H408.693V90.8325H373.659V0.658621H408.401Z" fill="#E4572E" />
                <path d="M417.169 0.658621H440.675C455.85 0.658621 463 7.95424 463 22.9978V68.4933C463 83.5369 455.85 90.8325 440.675 90.8325H417.169V0.658621ZM432.796 77.1021H438.487C444.615 77.1021 447.387 74.1839 447.387 68.0555V23.4355C447.387 17.3072 444.615 14.389 438.487 14.389H432.796V77.1021Z" fill="#E4572E" />
            </svg>
        </div>
        <p className="text-[#f1e9da] text-sm tracking-[2.8px] uppercase leading-[1.5]">
            We craft stories that move people and strategies that shift perception. We don’t follow culture, we help shape it.
        </p>
    </div>
);

const ServicesList = () => {
    const services = [
        { title: "Brand Strategy & Identity", desc: "We define your voice, visuals, and positioning—building brands with clarity and character." },
        { title: "Creative Direction & Design", desc: "Purposeful, high-impact visuals that communicate with clarity and precision." },
        { title: "Video Production", desc: "Cinematic and human storytelling designed to capture attention and create impact." },
        { title: "Influencer Marketing", desc: "Strategic creator partnerships rooted in authenticity and trust." },
        { title: "Digital Ads", desc: "Performance-driven campaigns that place your brand where it matters most." },
        { title: "Experiential Marketing", desc: "Immersive brand moments that connect digital and real-world experiences." },
    ];

    return (
        <div className="w-full max-w-[657px]">
            {services.map((service, idx) => (
                <div key={idx} className="mb-6">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
                        <h3 className="text-[#3a2e2a] text-xl tracking-[1.4px] uppercase font-bold w-full md:w-[367px]">{service.title}</h3>
                        <p className="text-[#3a2e2a] text-sm tracking-[0.98px] w-full md:w-[270px]">{service.desc}</p>
                    </div>
                    {idx < services.length - 1 && <hr className="my-4 border-[#3a2e2a]/20" />}
                </div>
            ))}
        </div>
    );
};

const ProcessSteps = () => {
    const steps = [
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.13 24.986L7.77 27.622C7.29024 27.7261 6.78878 27.6372 6.37408 27.3744C5.95938 27.1117 5.66478 26.6963 5.554 26.218L4.48 21.918C4.35373 21.3999 4.42544 20.8534 4.68107 20.3854C4.9367 19.9174 5.35784 19.5617 5.862 19.388L32.87 10.508M27.12 23.494L35.784 21.646M32 42L25.79 29.58M12.316 17.266L14.544 26.178M16 42L22.21 29.58M32.97 11.88C32.7129 10.851 32.875 9.76196 33.4207 8.85244C33.9664 7.94293 34.851 7.2874 35.88 7.03L38.06 6.486C38.5742 6.35772 39.1184 6.4388 39.5729 6.71142C40.0274 6.98405 40.3551 7.42593 40.484 7.94L43.514 20.06C43.6429 20.5745 43.5621 21.1192 43.2894 21.5741C43.0167 22.0291 42.5745 22.3571 42.06 22.486L39.88 23.03C38.851 23.2871 37.762 23.125 36.8524 22.5793C35.9429 22.0336 35.2874 21.149 35.03 20.12L32.97 11.88ZM28 26C28 28.2091 26.2091 30 24 30C21.7909 30 20 28.2091 20 26C20 23.7909 21.7909 22 24 22C26.2091 22 28 23.7909 28 26Z" stroke="#3A2E2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Discovery & Deep Listening",
            desc: "We uncover your brand's purpose and audience insights to build a strategy rooted in clarity and truth."
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.244 35.794L7.884 29.968M18 16C14.392 21.42 10.06 22.92 4.834 23.896C4.66063 23.9277 4.49851 24.0039 4.36361 24.1173C4.22871 24.2307 4.1257 24.3773 4.06473 24.5427C4.00376 24.708 3.98694 24.8864 4.01592 25.0603C4.0449 25.2341 4.11868 25.3974 4.23 25.534L18.87 43.3C19.1674 43.6158 19.5593 43.8264 19.9868 43.9C20.4143 43.9736 20.8542 43.9062 21.24 43.708C25.47 40.81 32 33.584 32 30M36.752 5.244C37.1462 4.84977 37.6142 4.53705 38.1293 4.3237C38.6444 4.11034 39.1965 4.00053 39.754 4.00053C40.3115 4.00053 40.8636 4.11034 41.3787 4.3237C41.8938 4.53705 42.3618 4.84977 42.756 5.244C43.1502 5.63823 43.463 6.10625 43.6763 6.62133C43.8897 7.13641 43.9995 7.68848 43.9995 8.246C43.9995 8.80352 43.8897 9.35559 43.6763 9.87067C43.463 10.3858 43.1502 10.8538 42.756 11.248L34.72 19.286C34.5325 19.4735 34.4272 19.7278 34.4272 19.993C34.4272 20.2582 34.5325 20.5125 34.72 20.7L36.608 22.588C37.5118 23.4919 38.0195 24.7178 38.0195 25.996C38.0195 27.2742 37.5118 28.5001 36.608 29.404L34.72 31.292C34.5325 31.4795 34.2782 31.5848 34.013 31.5848C33.7478 31.5848 33.4935 31.4795 33.306 31.292L16.708 14.696C16.5205 14.5085 16.4152 14.2542 16.4152 13.989C16.4152 13.7238 16.5205 13.4695 16.708 13.282L18.596 11.394C19.4999 10.4902 20.7258 9.98251 22.004 9.98251C23.2822 9.98251 24.5081 10.4902 25.412 11.394L27.3 13.282C27.4875 13.4695 27.7418 13.5748 28.007 13.5748C28.2722 13.5748 28.5265 13.4695 28.714 13.282L36.752 5.244Z" stroke="#3A2E2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Design & Artistry",
            desc: "We transform vision into intentional digital experiences that connect and resonate."
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 40H44M18 20L22 24L30 16M10 8H38C40.2091 8 42 9.79086 42 12V28C42 30.2091 40.2091 32 38 32H10C7.79086 32 6 30.2091 6 28V12C6 9.79086 7.79086 8 10 8Z" stroke="#3A2E2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Refinement & Empathy",
            desc: "We test, refine, and perfect every detail to ensure seamless, human-centered interactions."
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 30V40C24 40 30.06 38.9 32 36C34.16 32.76 32 26 32 26M24 30C26.7934 28.9369 29.4734 27.5969 32 26M24 30L18 24M32 26C42.44 19 44 9.44 44 4C39.6053 3.97274 35.2768 5.07027 31.426 7.18818C27.5752 9.3061 24.3304 12.374 22 16.1M18 24C19.0643 21.2389 20.4044 18.5921 22 16.1M18 24H8C8 24 9.1 17.94 12 16C15.24 13.84 22 16.1 22 16.1M9 33C6 35.52 5 43 5 43C5 43 12.48 42 15 39C16.42 37.32 16.4 34.74 14.82 33.18C14.0426 32.438 13.0186 32.0093 11.9445 31.9761C10.8703 31.9428 9.82175 32.3075 9 33Z" stroke="#3A2E2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "The Launch & Beyond",
            desc: "We support your growth long after launch, building lasting impact and connection."
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16 px-6 md:px-0">
            {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col gap-6">
                    <div className="opacity-60">{step.icon}</div>
                    <div>
                        <h3 className="text-[#3a2e2a] text-xl tracking-[1.4px] uppercase font-bold mb-4">{step.title}</h3>
                        <p className="text-[#3a2e2a] text-sm tracking-[0.98px]">{step.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Footer = () => (
    <footer className="bg-[#3a2e2a] py-20 px-6 mt-32">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-8">
            <button
                onClick={() => alert('Join our mailing list – feature coming soon')}
                className="border border-[#f1e9da] px-6 py-4 text-[#f1e9da] uppercase text-sm tracking-[3.2px] hover:bg-[#f1e9da] hover:text-[#3a2e2a] transition-colors"
            >
                join our mailing list
            </button>
            <div className="text-center">
                <p className="text-[#f1e9da] text-xl tracking-[1.4px] uppercase font-bold mb-4">Let's get social</p>
                <div className="flex gap-8 justify-center">
                    <a href="#" className="text-[#f1e9da] hover:text-[#E4572E] transition" aria-label="Instagram">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href="#" className="text-[#f1e9da] hover:text-[#E4572E] transition" aria-label="Facebook">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href="#" className="text-[#f1e9da] hover:text-[#E4572E] transition" aria-label="LinkedIn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7977 1.99988C15.7919 4.54701 17.8619 6.76616 20.4601 7.00327C20.636 7.01946 20.867 6.95 21.0001 7.06229V10.2487C19.671 10.2941 18.3602 9.95204 17.1712 9.39581L15.7977 8.56801C15.8063 10.5161 15.786 12.4657 15.7956 14.4144C15.8063 16.5708 15.8378 18.1016 14.2976 19.8277C10.219 24.3961 2.43714 21.2379 3.03217 15.1946C3.3786 11.6776 6.83917 9.13833 10.3949 9.70135V12.9854C9.66943 12.8329 9.03912 12.8021 8.33289 13.0627C4.6002 14.441 6.80335 20.0455 10.582 18.544C12.7232 17.6932 12.4505 15.6652 12.4778 13.7887C12.5344 9.86064 12.4318 5.92791 12.4756 1.99988H15.7972L15.7977 1.99988Z" fill="currentColor" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default function SilentHWebsiteHomeDesktop() {
    useEffect(() => {
        // Add smooth scrolling for anchor links
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');
            if (link && link.hash && link.hash.startsWith('#') && link.pathname === window.location.pathname) {
                e.preventDefault();
                const element = document.querySelector(link.hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <div className="relative bg-[#f1e9da] min-h-screen overflow-x-hidden">
            {/* Animated Background Bubbles */}
            <Bubbles />

            {/* Hero Section */}
            <div className="relative h-[700px] w-full">
                <HeroVideo />
                <div className="absolute inset-0 z-10">
                    <Header />
                    <LogoAndTagline />
                    {/* Divider lines */}
                    <div className="absolute top-[297px] left-0 w-[calc(58.33%-3.67px)] border-t border-[#f1e9da]" />
                    <div className="absolute top-0 left-[calc(58.33%-3.67px)] h-[700px] border-l border-[#f1e9da]" />
                    <div className="absolute top-[80px] left-[calc(58.33%-3.67px)] w-[537px] border-t border-[#f1e9da]" />
                </div>
            </div>

            {/* Main Content */}
            <main className="relative z-10 max-w-[1280px] mx-auto px-6 pt-32">
                {/* Intro Quote */}
                <div className="text-center mb-32">
                    <p className="text-[#3a2e2a] text-3xl font-bold leading-tight max-w-3xl mx-auto">
                        Yerr
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                    <div className="rounded-2xl overflow-hidden h-64">
                        <img src={placeholderImages.image1} alt="Creative work" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden h-64">
                        <img src={placeholderImages.image2} alt="Team collaboration" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden h-64">
                        <img src={placeholderImages.image3} alt="Brand identity" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden h-64">
                        <img src={placeholderImages.image4} alt="Video production" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden h-64">
                        <img src={placeholderImages.image5} alt="Influencer marketing" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden h-64">
                        <img src={placeholderImages.image6} alt="Experiential event" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Services Section */}
                <div id="services" className="flex flex-col lg:flex-row gap-12 mb-32">
                    <div className="lg:w-1/2">
                        <h2 className="text-[#7b8b6f] text-6xl font-bold uppercase tracking-[5.6px] mb-6">Let's create a story</h2>
                        <p className="text-[#3a2e2a] text-sm tracking-[0.98px]">We craft brands and digital experiences built to grow, connect, and perform.</p>
                    </div>
                    <div className="lg:w-1/2">
                        <ServicesList />
                    </div>
                </div>

                {/* Mickey Video (full width) */}
                <div className="w-full h-[480px] rounded-2xl overflow-hidden my-16">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={placeholderImages.mickeyVideo} type="video/mp4" />
                    </video>
                </div>

                {/* Journey Section */}
                <div className="text-center mt-32">
                    <h2 className="text-[#7b8b6f] text-6xl font-bold uppercase tracking-[5.6px]">OUR JOURNEY<br />TOGETHER</h2>
                    <p className="text-[#3a2e2a] text-3xl font-bold mt-4">How we bring your story to life</p>
                </div>
                <ProcessSteps />
            </main>

            <Footer />
        </div>
    );
}