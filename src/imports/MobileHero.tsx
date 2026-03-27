import Rectangle from "./Rectangle1";
import Frame1616 from "./Logo";
import Line4 from "./Line4";
import imgHeroBackground from "../assets/b88c1766df9500c17fb036b3cfd4047d2efe8cc1.png";
import banner from "../assets/sssnew2.mp4";
import TextLogo from "./TextLogo";
import MobLogo from "../assets/MobLogo.svg"
import {useState} from "react";



export default function MobileHero() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="relative w-full overflow-hidden">

            {/* VIDEO */}
            <div className="relative w-full h-screen overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={banner} type="video/mp4"/>
                </video>
            </div>
            {/* MOBILE NAV BAR */}
            <div
                className="md:hidden fixed top-0 left-0 w-full h-[72px] bg-[#B64220] z-50 flex items-center justify-between px-[20px]">

                {/* LOGO */}
                <div className="w-[36px] h-[36px] flex items-center">
                    <img
                        src={MobLogo}
                        alt="logo"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* HAMBURGER */}
                <button onClick={() => setMenuOpen(true)}>
                    <div
                        className="w-[36px] h-[36px] border border-[#F1E9DA] rounded-full flex items-center justify-center">
                        <div className="flex flex-col gap-[4px]">
                            <div className="w-[14px] h-[2px] bg-[#F1E9DA]"/>
                            <div className="w-[14px] h-[2px] bg-[#F1E9DA]"/>
                            <div className="w-[14px] h-[2px] bg-[#F1E9DA]"/>
                        </div>
                    </div>
                </button>

            </div>

            <nav className="absolute top-[16px] right-[48px] z-20 flex gap-[32px]">

                <a
                    href="#beliefsM"
                    className="font-['Helvetica:Bold',sans-serif] text-[14px] tracking-[2.8px] uppercase
               text-[#F1E9DA]
               transition-colors duration-300 ease-out
               hover:text-[#B64220]"
                >
                    our beliefs
                </a>

                <a
                    href="#servicesM"
                    className="font-['Helvetica:Bold',sans-serif] text-[14px] tracking-[2.8px] uppercase
               text-[#F1E9DA]
               transition-colors duration-300 ease-out
               hover:text-[#B64220]"
                >
                    services
                </a>

                <a
                    href="#contact"
                    className="font-['Helvetica:Bold',sans-serif] text-[14px] tracking-[2.8px] uppercase
               text-[#F1E9DA]
               transition-colors duration-300 ease-out
               hover:text-[#B64220]"
                >
                    contact us
                </a>

            </nav>

            {menuOpen && (
                <div className="fixed inset-0 z-40 flex">

                    {/* RIGHT PANEL */}
                    <div className="w-full h-full bg-[#3a2e2a] flex flex-col p-[32px]">

                        {/* CLOSE BUTTON */}
                        <div className="flex justify-end mb-[40px]">
                            <button onClick={() => setMenuOpen(false)}>
                                <div className="w-[36px] h-[36px] border border-[#F1E9DA] rounded-full flex items-center justify-center text-[#F1E9DA] text-[18px]">
                                    ✕
                                </div>
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-[24px] text-[#F1E9DA] text-[32px] tracking-[2px] uppercase font-['Helvetica']">

                            <a className="
                                    font-['AnonymousPro',monospace]
                                    font-[700]
                                    text-[56px]
                                    leading-[56px]
                                    tracking-[3.92px]
                                    uppercase
                                    text-[#F1E9DA]"
                               href="#beliefsM" onClick={() => setMenuOpen(false)}>
                                OUR BELIEFS
                            </a>

                            <a className="
                                    font-['AnonymousPro',monospace]
                                    font-[700]
                                    text-[56px]
                                    leading-[56px]
                                    tracking-[3.92px]
                                    uppercase
                                    text-[#F1E9DA]" href="#servicesM" onClick={() => setMenuOpen(false)}>
                                SERVICES
                            </a>

                            <a className="
                                    font-['AnonymousPro',monospace]
                                    font-[700]
                                    text-[56px]
                                    leading-[56px]
                                    tracking-[3.92px]
                                    uppercase
                                    text-[#F1E9DA]" href="#contact" onClick={() => setMenuOpen(false)}>
                                CONTACT
                            </a>

                        </div>

                    </div>

                </div>
            )}
            {/* TEXT CONTENT */}
            <div className="absolute bottom-[6%] left-0 w-full px-[24px] z-10">
                <TextLogo/>
            </div>

        </div>
    );
}