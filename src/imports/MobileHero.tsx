import Rectangle from "./Rectangle1";
import Frame1616 from "./Frame1616";
import Line4 from "./Line4";
import imgHeroBackground from "../assets/b88c1766df9500c17fb036b3cfd4047d2efe8cc1.png";
import banner from "../assets/sssnew2.mp4";
import TextLogo from "./TextLogo";


export default function MobileHero() {
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
            {/* NAV (mobile fixed + clean) */}
            <nav className="absolute top-[20px] left-0 w-full z-20 flex justify-center gap-[28px] px-[20px]">

                <a
                    href="#beliefs"
                    className="text-[#F1E9DA] text-[12px] tracking-[2px] uppercase
          transition-colors duration-300 ease-out hover:text-[#B64220]"
                >
                    our beliefs
                </a>

                <a
                    href="#services"
                    className="text-[#F1E9DA] text-[12px] tracking-[2px] uppercase
          transition-colors duration-300 ease-out hover:text-[#B64220]"
                >
                    services
                </a>

                <a
                    href="#contact"
                    className="text-[#F1E9DA] text-[12px] tracking-[2px] uppercase
          transition-colors duration-300 ease-out hover:text-[#B64220]"
                >
                    contact
                </a>

            </nav>

            {/* TEXT CONTENT */}
            <div className="absolute bottom-[6%] left-0 w-full px-[24px] z-10">
                <TextLogo/>
            </div>

        </div>
    );
}