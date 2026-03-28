import Rectangle from "./Rectangle1";
import Logo from "./Logo";
import Line4 from "./Line4";
import imgHeroBackground from "../assets/b88c1766df9500c17fb036b3cfd4047d2efe8cc1.png";
import banner from "../assets/banner-padded-new.mp4";
import banner2 from "../assets/banner-hero-compressed.mp4";
import { useState } from "react";


export default function HeroSec() {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
      <div className="relative size-full" data-name="Coterie_VO_FINAL New11 1">
          {/* Image background - full width */}
          <div className="relative w-full h-[87vh] overflow-hidden z-0">

              <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="hidden xl:flex
                    w-full h-full
                    object-cover

                    /* MOBILE / TABLET ONLY */
                    object-[center_35%]
                    scale-[1.08]

                    sm:object-[center_40%]
                    md:object-[center_45%]
                    lg:object-[center_48%]


                    xl:object-[center_45%]
                    2xl:object-[center_51.6%]

                    xl:scale-100

                    pointer-events-none
                  "
              >
                  <source src="/newbg-optimized.mp4" type="video/mp4"/>
              </video>

              {/* Laptops less than xl but not mobile background - full width */}

              <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="xl:hidden
                    w-full h-full
                    object-cover

                    /* MOBILE / TABLET ONLY */
                    object-[center_35%]
                    scale-[1.08]

                    sm:object-[center_40%]
                    md:object-[center_45%]
                    lg:object-[center_48%]


                    xl:object-[center_45%]
                    2xl:object-[center_51.6%]

                    xl:scale-100

                    pointer-events-none
                  "
              >
                  <source src={banner2} type="video/mp4"/>
              </video>

          </div>

          <nav className="hidden md:flex absolute top-[16px] right-[48px] z-20 flex gap-[32px]">

              <a
                  href="#beliefs"
                  className="font-['Helvetica:Bold',sans-serif] text-[14px] tracking-[2.8px] uppercase
               text-[#F1E9DA]
               transition-colors duration-300 ease-out
               hover:text-[#B64220]"
              >
                  our beliefs
              </a>

              <a
                  href="#services"
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

          {/* Centered content overlay container */}
          {/* Blur box - extends from screen edge to divider line */}


          {/* NOTLIMITED text and tagline - positioned from screen edge */}
          <div
              className="absolute content-stretch flex flex-col gap-[32px] items-start left-[48px] top-[30%] w-[36.25%] 2xl:scale-[1.2] 2xl:ml-[70px] 2xl:left-0 2xl:top-[40%] 2xl:max-w-[564px] max-w-[464px] z-10">
              <Logo/>
          </div>

      </div>
  );
}