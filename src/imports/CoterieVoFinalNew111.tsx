import Rectangle from "./Rectangle1";
import Frame1616 from "./Frame1616";
import Line4 from "./Line4";
import imgHeroBackground from "../assets/b88c1766df9500c17fb036b3cfd4047d2efe8cc1.png";
import banner from "../assets/banner-padded-new.mp4";;


export default function CoterieVoFinalNew() {
  return (
      <div className="relative size-full" data-name="Coterie_VO_FINAL New11 1">
          {/* Image background - full width */}
          <div className="relative w-full h-[87vh] overflow-hidden z-0">

              <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-[center_45%] 2xl:object-[center_51.6%] pointer-events-none"
              >
                  <source src={banner} type="video/mp4"/>
              </video>

          </div>
          <nav className="absolute top-[16px] right-[48px] z-20 flex gap-[32px]">

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
              className="absolute content-stretch flex flex-col gap-[32px] items-start left-[48px] top-[30%] w-[36.25%] max-w-[464px] z-10">
              <Frame1616/>
          </div>

          <div className="relative w-full max-w-[1280px] h-full">
              {/* Vertical line divider */}


              {/* Horizontal line at top right */}


              {/* old Navigation - top right
              <div
                  className="absolute content-stretch flex gap-[12px] items-center left-[calc(68.33%+48.33px)] top-[3px] z-10">
                  <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0">
                      <p className="font-['Helvetica:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#f1e9da] text-[14px] tracking-[2.8px] uppercase">our
                          beliefs</p>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0">
                      <p className="font-['Helvetica:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#f1e9da] text-[14px] tracking-[2.8px] uppercase">services</p>
                  </div>
                  <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0">
                      <p className="font-['Helvetica:Bold',sans-serif] leading-none not-italic relative shrink-0 text-[#f1e9da] text-[14px] tracking-[2.8px] uppercase">contact
                          us</p>
                  </div>
              </div>*/}
          </div>
      </div>
  );
}