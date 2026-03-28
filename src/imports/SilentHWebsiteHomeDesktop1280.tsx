import svgPaths from "./svg-lnnw8or0xj";
import imgScreenshot20260224At121017Pm1 from "../assets/7b0b2511407939991732caa0f6265b4de72e59c2.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img6 from "../assets/img6.jpg"
import img7 from "../assets/img7.png"
import img8 from "../assets/img8.png"
import img9 from "../assets/img9.png"
import imgW211 from "../assets/1900f8207e4f9f54b749cff985df73aac8c44509.png";
import imgScreenshot20260224At34135Pm1 from "../assets/358c83f9ee4cb440d306cc5a5c4c43209c64d780.png";
import imgScreenshot20260224At33952Pm1 from "../assets/7e6feab11736e6d4ff0f7e4d72d3a208dc3435cc.png";
import imgW511 from "../assets/dda9ddf98bcef1501a24eede91678cadf12548a3.png";
import affiliates from "../assets/affiliatesnew.png"
import HeroSec from "./HeroSec";
import BackToTop from "./BackToTop";
import MobileHero from "./MobileHero";
import TextLogo from "./TextLogo";
import MobileAuthors from "../assets/affiliatesmobnew.png";
import Vid1 from "../assets/Vid1FinalCompress.mp4";
import Vid2 from "../assets/Vid2-compressed.mp4";
import Vid3 from "../assets/Vid3-compressed.mp4";
import Vid4 from "../assets/vid4-compressed.mp4";
import Vid5 from "../assets/vid5-compressed.mp4";
import Vid6 from "../assets/vid6-compressed.mp4";
import Vid7 from "../assets/vid7-compressed.mp4";
import Vid8 from "../assets/vid8-compressed.mp4";
import {useRef, useState} from "react";
import { VolumeX, Volume2 } from "lucide-react";



function Affiliates() {
    return (
        <div className="relative size-full" data-name="Affiliates">
            <h2 className="font-['Rangen'] text-[#3A2E2A] text-[50px] 2xl:text-[55.4px] leading-[1.2] tracking-[2px] text-center pb-[60px] 2xl:pb-[80px] xl:scale-[1.1]">Our Co-Authors</h2>
            <img src={affiliates} className="w-[681px] 2xl:w-[858px] h-[370.1px] xl:scale-[1.1] 2xl:scale-[1.3] object-contain ml-[20.4%] xl:ml-[27%] 2xl:ml-[28.3%] 2xl:pb-[10px]"/>
        </div>
    )
}

function MobileAffiliates() {
    return (
        <div className="relative size-full" data-name="Affiliates">
            <h2 className="font-['Rangen'] text-[#3A2E2A] text-[40px] leading-[1.2] tracking-[2px] text-center pb-[80px]">Our Co-Authors</h2>
            <img src={MobileAuthors} className="mt-[180px] w-[681px] h-[370.1px] scale-[2.19] object-contain"/>
        </div>
    )
}

function ImageGridSection() {
    return (
        <div
            className="absolute top-[1958px] xl:scale-[0.65] xl:top-[1496px] left-1/2 -translate-x-1/2 w-full max-w-[1140px] grid grid-cols-3 gap-[20px]">

            {/* ROW 1 */}
            <div className="h-[652px] w-[367px] rounded-[24px] overflow-hidden">
                <img src={img1} className="w-full h-full object-cover"/>
            </div>
            <div className="h-[652px] w-[367px] rounded-[24px] overflow-hidden">
                <img src={img2} className="w-full h-full object-cover"/>
            </div>
            <div className="h-[652px] w-[367px] rounded-[24px] overflow-hidden">
                <img src={img3} className="w-full h-full object-cover"/>
            </div>
            {/*<div className="h-[652px] w-[367px] rounded-[24px] overflow-hidden">
                <img src={imgW511} className="w-full h-full object-cover"/>
            </div>*/}

            {/* ROW 2 — FEATURE (BIG) */}
            <div className="col-span-3 h-[640px] w-[1137px] rounded-[24px] overflow-hidden">
                <img src={img4} className="w-full h-full object-cover"/>
            </div>

            {/* ROW 3 */}
            <div className="h-[652px] w-[367px]  rounded-[24px] overflow-hidden">
                <img src={img6} className="w-full h-full object-cover"/>
            </div>
            <div className="h-[652px] w-[367px]  rounded-[24px] overflow-hidden">
                <img src={img7} className="w-full h-full object-cover"/>
            </div>
            <div className="h-[652px] w-[367px]  rounded-[24px] overflow-hidden">
                <img src={img8} className="w-full h-full object-cover"/>
            </div>

            {/* ROW 4 — FEATURE (BIGGER) */}
            <div className="col-span-3 h-[640px] w-[1137px] rounded-[24px] overflow-hidden">
                <img src={img9} className="w-full h-full object-cover"/>
            </div>

        </div>
    );
}

function WhatWeDoSection() {
    return (
        <div className="w-full bg-[#3a2e2a] py-[90px] 2xl:py-[146.5px]">
            <div className="max-w-[1580px] 2xl:max-w-[2083px] mx-auto px-[72px] flex justify-between items-start">

                {/* LEFT */}
                <div className="max-w-[420px] 2xl:max-w-[683px] mt-[18.3%] 2xl:mt-[7%]">
                    <p className="font-['Rangen'] text-[64px] 2xl:text-[100px] 2xl:ml-[7%] leading-[1.2] text-[#f1e9da]">
                        The things we’re good at
                    </p>
                </div>

                {/* RIGHT */}
                <div className="w-[640px] 2xl:w-[941px] 2xl:mt-0 mt-[8.8%] flex flex-col">

                    {/* ITEM */}
                    <div
                        className="group flex justify-between gap-[40px]">
                        <p className="font-['Helvetica:Bold',sans-serif] font-[700] text-[20px] 2xl:text-[29.3px]
                        tracking-[1.5px] leading-[120%] text-[#f1e9da] uppercase w-[300px] 2xl:text-[29.3px] 2xl:w-[488px] text-[#f1e9da] group-hover:text-[#B64220] transition-colors duration-300">
                            Campaign Strategy & Activation
                        </p>
                        <p className="font-['Helvetica',sans-serif] font-[400] text-[16px] 2xl:text-[19px] 2xl:w-[400px]
                        leading-[1.2] tracking-[0.98px] text-[#f1e9da] w-[300px] text-[#f1e9da] group-hover:text-[#B64220] transition-colors duration-300">
                            Culture-led campaigns that create real-world moments. We get people talking and keep them
                            talking.
                        </p>
                    </div>
                    <div className="w-full mt-[16px] h-[1px] opacity-60
    bg-[linear-gradient(to_right,#f1e9da_0%,#f1e9da_45%,transparent_45%,transparent_75%)]
    bg-[length:14px_1px] bg-repeat-x"
                    />

                    {/* ITEM */}
                    <div
                        className="group flex justify-between gap-[40px] py-[16px]">
                        <p className="font-['Helvetica:Bold',sans-serif] font-[700] text-[20px] tracking-[1.5px] leading-[120%]
                        text-[#f1e9da] uppercase 2xl:text-[29.3px] 2xl:w-[488px] w-[300px] text-[#f1e9da] group-hover:text-[#B64220] transition-colors duration-300">
                            Brand Storytelling & Copywriting
                        </p>
                        <p className="font-['Helvetica',sans-serif] font-[400] text-[16px] 2xl:text-[19px]
                        2xl:w-[400px] leading-[1.2] tracking-[0.98px] text-[#f1e9da] w-[300px] text-[#f1e9da] group-hover:text-[#B64220] transition-colors duration-300">
                            From manifestos to campaign copy to tone of voice, we give your brand a voice people
                            actually want to hear.
                        </p>
                    </div>
                    <div className="w-full mt-[16px] h-[1px] opacity-60
    bg-[linear-gradient(to_right,#f1e9da_0%,#f1e9da_45%,transparent_45%,transparent_75%)]
    bg-[length:14px_1px] bg-repeat-x"
                    />

                    {/* ITEM */}
                    <div
                        className="group flex justify-between gap-[40px] py-[16px]">
                        <p className="font-['Helvetica:Bold',sans-serif] font-[700] text-[20px] tracking-[1.5px] leading-[1.2]
                        text-[#f1e9da] uppercase 2xl:text-[29.3px] 2xl:w-[488px] w-[300px] text-[#f1e9da] group-hover:text-[#B64220] transition-colors duration-300">
                            Content Creation & Direction
                        </p>
                        <p className="font-['Helvetica',sans-serif] font-[400] text-[16px] 2xl:text-[19px] 2xl:w-[400px]
                        leading-[1.2] tracking-[0.98px] text-[#f1e9da] w-[300px] text-[#f1e9da] group-hover:text-[#B64220] transition-colors duration-300">
                            Content that stops the scroll and starts the conversation. Strategy, creative direction, and
                            production — end to end.
                        </p>
                    </div>
                    <div className="mt-[16px] h-[1px] opacity-60
    bg-[linear-gradient(to_right,#f1e9da_0%,#f1e9da_45%,transparent_45%,transparent_75%)]
    bg-[length:14px_1px] bg-repeat-x"
                    />

                    {/* ITEM */}
                    <div className="group flex justify-between gap-[40px] py-[16px]">
                        <p className="font-['Helvetica:Bold',sans-serif] font-[700] text-[20px] tracking-[1.5px] leading-[120%]
                        text-[#f1e9da] group-hover:text-[#B64220] transition-colors duration-300 text-[#f1e9da] uppercase 2xl:text-[29.3px] 2xl:w-[488px] w-[300px]">
                            Community & Social Strategy
                        </p>
                        <p className="font-['Helvetica',sans-serif] font-[400] text-[16px] 2xl:text-[19px] 2xl:w-[400px]
                        text-[#f1e9da] group-hover:text-[#B64220] transition-colors duration-300 leading-[1.2] tracking-[0.98px] text-[#f1e9da] w-[300px]">
                            Audiences are built, not bought. We turn followers into fans and fans into advocates.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

function WhatWeDoMobile() {
    return (
        <section className="
            md:hidden
            min-h-screen
            w-full
            bg-[#3a2e2a]
            px-[24px]
            py-[80px]
            flex flex-col
        ">

            {/* TITLE */}
            <div className="max-w-[320px] mb-[40px]">
                <p className="
                    font-['Rangen']
                    text-[40px]
                    leading-[40px]
                    tracking-[1.6px]
                    text-[#f1e9da]
                    items-center
                    ml-[36px]
                ">
                    The things we’re good at
                </p>
            </div>

            {/* ITEMS */}
            <div className="flex flex-col">

                {/* ITEM 1 */}
                <div className="py-[20px]">
                    <p className="
                        font-['Helvetica',sans-serif]
                        font-[700]
                        text-[16px]
                        tracking-[1.2px]
                        leading-[1.12px]
                        text-[#f1e9da]
                        uppercase
                        mb-[20px]
                        ml-[36px]
                    ">
                        Campaign Strategy & Activation
                    </p>

                    <p className="
                        max-w-[270px]
                        font-['Helvetica',sans-serif]
                        text-[14px]
                        font-[400]
                        tracking-[0.98px]
                        leading-[1.5]
                        text-[#f1e9da]
                        ml-[36px]
                        mb-[40px]
                    ">
                        Culture-led campaigns that create real-world moments. We get people talking and keep them
                        talking.
                    </p>
                    <div className="ml-[38px] w-[84.5%] mt-[32px] h-[1px] opacity-60
    bg-[linear-gradient(to_right,#f1e9da_0%,#f1e9da_45%,transparent_45%,transparent_75%)]
    bg-[length:14px_1px] bg-repeat-x"
                    />
                </div>

                {/* ITEM 2 */}
                <div className="py-[20px]">
                    <p className="ml-[36px] font-['Helvetica'] font-[700] text-[16px] tracking-[1.2px] text-[#f1e9da] uppercase mb-[10px]">
                        Brand Storytelling & Copywriting
                    </p>

                    <p className="max-w-[270px]
                        font-['Helvetica',sans-serif]
                        text-[14px]
                        font-[400]
                        tracking-[0.98px]
                        leading-[1.5]
                        text-[#f1e9da]
                        ml-[36px]
                        mb-[40px]">
                        From manifestos to campaign copy to tone of voice, we give your brand a voice people actually
                        want to hear.
                    </p>
                    <div className="ml-[38px] w-[84.5%] mt-[32px] h-[1px] opacity-60
    bg-[linear-gradient(to_right,#f1e9da_0%,#f1e9da_45%,transparent_45%,transparent_75%)]
    bg-[length:14px_1px] bg-repeat-x"
                    />
                </div>

                {/* ITEM 3 */}
                <div className="py-[20px]">
                    <p className="ml-[36px] font-['Helvetica'] font-[700] text-[16px] tracking-[1.2px] text-[#f1e9da] uppercase mb-[10px]">
                        Content Creation & Direction
                    </p>

                    <p className="max-w-[270px]
                        font-['Helvetica',sans-serif]
                        text-[14px]
                        font-[400]
                        tracking-[0.98px]
                        leading-[1.5]
                        text-[#f1e9da]
                        ml-[36px]
                        mb-[40px]
                        ">
                        Content that stops the scroll and starts the conversation. Strategy, creative direction, and
                        production — end to end.
                    </p>
                    <div className="ml-[38px] w-[84.5%] mt-[40px] h-[1px] opacity-60
    bg-[linear-gradient(to_right,#f1e9da_0%,#f1e9da_45%,transparent_45%,transparent_75%)]
    bg-[length:14px_1px] bg-repeat-x"
                    />
                </div>

                {/* ITEM 4 */}
                <div className="py-[20px]">
                    <p className="ml-[36px] font-['Helvetica'] font-[700] text-[16px] tracking-[1.2px] text-[#f1e9da] uppercase mb-[10px]">
                        Community & Social Strategy
                    </p>

                    <p className="max-w-[270px]
                        font-['Helvetica',sans-serif]
                        text-[14px]
                        font-[400]
                        tracking-[0.98px]
                        leading-[1.5]
                        text-[#f1e9da]
                        ml-[36px]
                        ">
                        Audiences are built, not bought. We turn followers into fans and fans into advocates.
                    </p>
                </div>

            </div>

        </section>
    );
}

function Group() {
  return (
    <div className="h-[91.692px] relative shrink-0 w-[463px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 463 91.6919">
        <g id="Group 17">
          <g id="Group 16">
            <path d={svgPaths.p2839e600} fill="var(--fill-0, #E4572E)" id="Vector" />
            <path d={svgPaths.p9a6a200} fill="var(--fill-0, #E4572E)" id="Vector_2" />
          </g>
          <path d={svgPaths.p283c6fd0} fill="var(--fill-0, #E4572E)" id="Vector_3" />
          <path d={svgPaths.p1a7d080} fill="var(--fill-0, #E4572E)" id="Vector_4" />
          <path d={svgPaths.pa3a2e00} fill="var(--fill-0, #E4572E)" id="Vector_5" />
          <path d={svgPaths.pabfd900} fill="var(--fill-0, #E4572E)" id="Vector_6" />
          <path d={svgPaths.p38641a00} fill="var(--fill-0, #E4572E)" id="Vector_7" />
          <path d={svgPaths.p10689100} fill="var(--fill-0, #E4572E)" id="Vector_8" />
          <path d={svgPaths.p32cdac00} fill="var(--fill-0, #E4572E)" id="Vector_9" />
          <path d={svgPaths.p35a45100} fill="var(--fill-0, #E4572E)" id="Vector_10" />
          <path d={svgPaths.p28b66e00} fill="var(--fill-0, #E4572E)" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

/* hero */
function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[69px] top-[40px] w-[464px]">
      <Group />
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#f1e9da] text-[14px] tracking-[2.8px] uppercase w-[min-content] whitespace-pre-wrap">Your story is our obsession. We believe in the power of human connection. As storytellers first, we bridge the gap between where your brand is and where it's going. Boundless. Bold. There are no limits.</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#3a2e2a] text-[14px] tracking-[0.98px] w-full whitespace-pre-wrap">We craft brands and digital experiences built to grow, connect, and perform.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[461px]">
      <p className="not-italic relative shrink-0 uppercase w-full whitespace-pre-wrap" style={{ fontFamily: 'Helvetica', fontSize: '80px', fontWeight: 700, lineHeight: '120%', letterSpacing: '5.6px', color: '#7B8B6F' }}>Let's create a story</p>
      <Frame7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[657px]">
      <div className="content-stretch flex gap-[20px] items-center leading-[1.2] not-italic relative shrink-0 text-[#3a2e2a] w-[657px] whitespace-pre-wrap">
        <p className="font-['Helvetica:Bold',sans-serif] relative shrink-0 text-[20px] tracking-[1.4px] uppercase w-[367px]">{`Brand Strategy & Identity`}</p>
        <p className="font-['Helvetica:Regular',sans-serif] relative shrink-0 text-[14px] tracking-[0.98px] w-[270px]">We define your voice, visuals, and positioning—building brands with clarity and character.</p>
      </div>
      <div className="flex h-[2px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.17deg] w-full">
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-0.2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 657 0.2">
                <line id="Line 3" stroke="var(--stroke-0, #3A2E2A)" strokeWidth="0.2" x2="657" y1="0.1" y2="0.1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[20px] items-center leading-[1.2] not-italic relative shrink-0 text-[#3a2e2a] w-[657px] whitespace-pre-wrap">
        <p className="font-['Helvetica:Bold',sans-serif] relative shrink-0 text-[20px] tracking-[1.4px] uppercase w-[367px]">{`creative direction & Design`}</p>
        <p className="font-['Helvetica:Regular',sans-serif] relative shrink-0 text-[14px] tracking-[0.98px] w-[270px]">Purposeful, high-impact visuals that communicate with clarity and precision.</p>
      </div>
      <div className="flex h-[2px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.17deg] w-full">
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-0.2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 657 0.2">
                <line id="Line 3" stroke="var(--stroke-0, #3A2E2A)" strokeWidth="0.2" x2="657" y1="0.1" y2="0.1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[20px] items-center leading-[1.2] not-italic relative shrink-0 text-[#3a2e2a] w-[657px] whitespace-pre-wrap">
        <p className="font-['Helvetica:Bold',sans-serif] relative shrink-0 text-[20px] tracking-[1.4px] uppercase w-[367px]">Video Production</p>
        <p className="font-['Helvetica:Regular',sans-serif] relative shrink-0 text-[14px] tracking-[0.98px] w-[270px]">Cinematic and human storytelling designed to capture attention and create impact.</p>
      </div>
      <div className="flex h-[2px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.17deg] w-full">
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-0.2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 657 0.2">
                <line id="Line 3" stroke="var(--stroke-0, #3A2E2A)" strokeWidth="0.2" x2="657" y1="0.1" y2="0.1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[20px] items-center leading-[1.2] not-italic relative shrink-0 text-[#3a2e2a] w-[657px] whitespace-pre-wrap">
        <p className="font-['Helvetica:Bold',sans-serif] relative shrink-0 text-[20px] tracking-[1.4px] uppercase w-[367px]">Influencer Marketing</p>
        <p className="font-['Helvetica:Regular',sans-serif] relative shrink-0 text-[14px] tracking-[0.98px] w-[270px]">Strategic creator partnerships rooted in authenticity and trust.</p>
      </div>
      <div className="flex h-[2px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.17deg] w-full">
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-0.2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 657 0.2">
                <line id="Line 3" stroke="var(--stroke-0, #3A2E2A)" strokeWidth="0.2" x2="657" y1="0.1" y2="0.1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[20px] items-center not-italic relative shrink-0 text-[#3a2e2a] w-[657px] whitespace-pre-wrap">
        <p className="font-['Helvetica:Bold',sans-serif] leading-[0] relative shrink-0 text-[20px] tracking-[1.4px] uppercase w-[367px]">
          <span className="leading-[1.2]">digital</span>
          <span className="leading-[1.2]">{` Ads`}</span>
        </p>
        <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[14px] tracking-[0.98px] w-[270px]">Performance-driven campaigns that place your brand where it matters most.</p>
      </div>
      <div className="flex h-[2px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.17deg] w-full">
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-0.2px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 657 0.2">
                <line id="Line 3" stroke="var(--stroke-0, #3A2E2A)" strokeWidth="0.2" x2="657" y1="0.1" y2="0.1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[20px] items-center leading-[1.2] not-italic relative shrink-0 text-[#3a2e2a] w-[657px] whitespace-pre-wrap">
        <p className="font-['Helvetica:Bold',sans-serif] relative shrink-0 text-[20px] tracking-[1.4px] uppercase w-[367px]">Experiential Marketing</p>
        <p className="font-['Helvetica:Regular',sans-serif] relative shrink-0 text-[14px] tracking-[0.98px] w-[270px]">Immersive brand moments that connect digital and real-world experiences.</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-[72px] top-[4254px]">
        {/*<Frame8 />
      <Frame10 />*/}
    </div>
  );
}

function LucideTelescope() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="lucide/telescope">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="lucide/telescope" opacity="0.6">
          <path d={svgPaths.p1284ad00} id="Vector" stroke="var(--stroke-0, #3A2E2A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center leading-[1.2] not-italic relative shrink-0 text-[#3a2e2a] w-full whitespace-pre-wrap">
      <p className="font-['Helvetica:Bold',sans-serif] relative shrink-0 text-[20px] tracking-[1.4px] uppercase w-full">{`Discovery & Deep Listening`}</p>
      <p className="font-['Helvetica:Regular',sans-serif] relative shrink-0 text-[14px] tracking-[0.98px] w-full">We uncover your brand's purpose and audience insights to build a strategy rooted in clarity and truth.</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[72px] top-[4520px] w-[268px]">
      <LucideTelescope />
      <Frame9 />
    </div>
  );
}

function LucidePaintbrush() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="lucide/paintbrush">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="lucide/paintbrush" opacity="0.6">
          <path d={svgPaths.p3dae6f70} id="Vector" stroke="var(--stroke-0, #3A2E2A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center leading-[1.2] not-italic relative shrink-0 text-[#3a2e2a] w-full whitespace-pre-wrap">
      <div className="font-['Helvetica:Bold',sans-serif] relative shrink-0 text-[20px] tracking-[1.4px] uppercase w-full">
        <p className="mb-0">{`Design & Artistry`}</p>
        <p>&nbsp;</p>
      </div>
      <p className="font-['Helvetica:Regular',sans-serif] relative shrink-0 text-[14px] tracking-[0.98px] w-full">We transform vision into intentional digital experiences that connect and resonate.</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[380px] top-[4520px] w-[268px]">
      <LucidePaintbrush />
      <Frame12 />
    </div>
  );
}

function LucideLaptopMinimalCheck() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="lucide/laptop-minimal-check">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="lucide/laptop-minimal-check" opacity="0.6">
          <path d={svgPaths.p1cbbfb00} id="Vector" stroke="var(--stroke-0, #3A2E2A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center leading-[1.2] not-italic relative shrink-0 text-[#3a2e2a] w-full whitespace-pre-wrap">
      <p className="font-['Helvetica:Bold',sans-serif] relative shrink-0 text-[20px] tracking-[1.4px] uppercase w-full">{`Refinement & Empathy`}</p>
      <p className="font-['Helvetica:Regular',sans-serif] relative shrink-0 text-[14px] tracking-[0.98px] w-full">We test, refine, and perfect every detail to ensure seamless, human-centered interactions.</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[688px] top-[4520px] w-[270px]">
      <LucideLaptopMinimalCheck />
      <Frame13 />
    </div>
  );
}

function LucideRocket() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="lucide/rocket">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="lucide/rocket" opacity="0.6">
          <path d={svgPaths.p5f0df00} id="Vector" stroke="var(--stroke-0, #3A2E2A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center leading-[1.2] not-italic relative shrink-0 text-[#3a2e2a] w-full whitespace-pre-wrap">
      <div className="font-['Helvetica:Bold',sans-serif] relative shrink-0 text-[20px] tracking-[1.4px] uppercase w-full">
        <p className="mb-0">{`The Launch & Beyond`}</p>
        <p>&nbsp;</p>
      </div>
      <p className="font-['Helvetica:Regular',sans-serif] relative shrink-0 text-[14px] tracking-[0.98px] w-full">We support your growth long after launch, building lasting impact and connection.</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-start left-[998px] top-[4520px] w-[268px]">
      <LucideRocket />
      <Frame14 />
    </div>
  );
}

function Contactus() {
  return (
      <div>
      <div className="relative z-10 content-stretch flex items-center justify-center xl:items-start xl:justify-start px-[16px] py-[15px] mt-[5%] relative shrink-0"
           data-name="contactus">
          <div aria-hidden="true" className="absolute  inset-0 pointer-events-none"/>
          <p className="relative z-10 font-['Rangen'] font-[400] leading-[1.2] font-normal relative shrink-0 text-[#f1e9da] text-[24px] 2xl:text-[39px] tracking-[0.8px] ">
              {"Contact Us\n"}</p>
      </div>
          <div className="content-stretch flex items-center justify-center xl:items-start xl:justify-start px-[16px] pb-[32px] 2xl:pb-[47px] relative shrink-0"
               >
          <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 font-normal font-[400] text-[#f1e9da] text-[16px] 2xl:text-[26px] tracking-[3.2px] uppercase">
              INFO@NOTLIMITED.CA</p>
          </div>
      </div>
  );
}

function LucideInstagram() {
    return (
        <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative shrink-0 size-[24px] 2xl:size-[39px]"
        >
            <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
            >
                <g id="lucide/instagram">
                    <path
                        d={svgPaths.p18a68ff0}
                        stroke="var(--stroke-0, #F1E9DA)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                </g>
            </svg>
        </a>
    );
}

function LucideFacebook() {
    return (
        <div className="relative shrink-0 size-[24px] 2xl:size-[39px]" data-name="lucide/facebook">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/facebook">
          <path d={svgPaths.p3d19f300} id="Vector" stroke="var(--stroke-0, #F1E9DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Layer() {
  return (
    <div className="relative shrink-0 size-[24px] 2xl:size-[39px]" data-name="Layer_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Layer_1">
          <path d={svgPaths.pa940c00} fill="var(--fill-0, #F1E9DA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialTags() {
  return (
    <div className="content-stretch flex gap-[32px] 2xl:gap-[52px] items-center relative shrink-0">
      <LucideInstagram />
      <LucideFacebook />
      <Layer />
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center xl:items-start xl:justify-start relative shrink-0 w-[235px] 2xl:w-[382.5px] xl:ml-[6%] ">
      <p className="font-['Rangen'] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#f1e9da] text-[20px] 2xl:text-[32.56px] text-center xl:text-start tracking-[0.8px] w-[min-content] whitespace-pre-wrap">Let's get social</p>
      <SocialTags />
    </div>
  );
}

function Cities() {
    return (
        <div className="flex flex-col items-center gap-[40px] 2xl:gap-[100px] mt-[80px] xl:text-right xl:items-end">

            {/* TORONTO */}
            <div className="flex flex-col items-center gap-[6px] xl:items-end">
                <p className="
          font-['Helvetica',sans-serif]
          font-[700]
          text-[#F1E9DA]
          text-[15px]
          2xl:text-[26px]
          tracking-[2.8px]
          leading-[16.8px]
          xl:text-right
          xl:items-end
        ">
                    Toronto
                </p>

                <p className="
          font-['Helvetica',sans-serif]
          font-[400]
          text-[#F1E9DA]
          text-[14px]
          2xl:text-[22px]
          tracking-[2px]
          leading-[16.8px]
          xl:text-right
          xl:items-end
        ">
                    383 Adelaide St West
                </p>
            </div>

            {/* NEW YORK */}
            <div className="flex flex-col items-center xl:text-right xl:items-end gap-[6px]">
                <p className="
          font-['Helvetica',sans-serif]
          font-[700]
          text-[#F1E9DA]
          text-[15px]
          2xl:text-[26px]
          tracking-[2.8px]
          leading-[16.8px]
          xl:text-right
          xl:items-end
        ">
                    New York
                </p>

                <p className="
          font-['Helvetica',sans-serif]
          font-[400]
          text-[#F1E9DA]
          text-[14px]
          2xl:text-[22px]
          leading-[16.8px]
          tracking-[2.8px]
          xl:text-right
          xl:items-end
        ">
                    416 West 13th St
                </p>
            </div>

        </div>
    );
}

function FooterContentD() {
    return (
        <div className="
      w-full
      max-w-[1172px]
      2xl:max-w-[86.9vw]
      mx-auto

      flex flex-col
      xl:flex-row

      items-center
      xl:items-start

      justify-between

      gap-[60px]
    ">

            {/* LEFT COLUMN (Contact + Socials stacked) */}
            <div className="
        flex flex-col
        items-start
        xl:items-start
        gap-[32px]
      ">
                <Contactus />
                <Socials />
            </div>

            {/* RIGHT COLUMN (Cities) */}
            <div className="
        flex
        items-end
        xl:items-end
        text-right
        xl:text-right
      ">
                <Cities />
            </div>

        </div>
    );
}

function HoverVideo({ img, video, className }) {
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(true);

    const toggleMute = (e) => {
        e.stopPropagation(); // prevent hover conflicts
        setMuted((prev) => {
            const newMuted = !prev;
            if (videoRef.current) {
                videoRef.current.muted = newMuted;
            }
            return newMuted;
        });
    };

    return (
        <div
            className={`relative overflow-hidden rounded-[24px] group ${className}`}
            onMouseEnter={() => videoRef.current?.play()}
            onMouseLeave={() => {
                videoRef.current?.pause();
                videoRef.current.currentTime = 0;
            }}
        >
            {/* IMAGE */}
            <img
                src={img}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            />

            {/* VIDEO */}
            <video
                ref={videoRef}
                muted={muted}
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                <source src={video} type="video/mp4" />
            </video>

            {/* 🔊 MUTE BUTTON */}
            <button
                onClick={toggleMute}
                className="
                    absolute bottom-[12px] right-[12px]
                    w-[36px] h-[36px]
                    bg-black/40 backdrop-blur-sm
                    border border-white/30
                    rounded-full
                    flex items-center justify-center
                    text-[#F1E9DA] text-[14px]
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                "
            >
                {muted ? (
                    <VolumeX size={16} strokeWidth={2} />
                ) : (
                    <Volume2 size={16} strokeWidth={2} />
                )}
            </button>
        </div>
    );
}

function FootercontentM() {
    return (
        <div
            className="content-stretch flex flex-col gap-[0px] items-center justify-center relative shrink-0 w-[1172px]">
            <Contactus/>
            <Socials/>
        <Cities />
    </div>
  );
}

function Footer() {
  return (
      <div>
          <div
              className="hidden md:block bg-[#3a2e2a] content-stretch flex flex-col h-[50vh] xl:h-[45vh] 2xl:h-[41vh] items-center justify-center left-0 px-[20px] py-[80px] w-full"
              data-name="Desktop-Footer">
              <FooterContentD/>
          </div>
          <div
              className="md:hidden bg-[#3a2e2a] content-stretch flex flex-col h-[50vh] xl:h-[50vh] 2xl:h-[41vh] items-center justify-center left-0 px-[36px] py-[80px] w-full"
              data-name="Mobile-Footer">
              <FootercontentM/>
          </div>
      </div>

  );
}

function LucideInfinity() {
    return (
        <div className="relative shrink-0 size-[24px] 2xl:size-[39px]" data-name="lucide/infinity">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/infinity">
          <path d={svgPaths.p331bb900} id="Vector" stroke="var(--stroke-0, #3A2E2A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BeliefsSec() {
    return (
        <div className="max-w-[1111px] flex flex-col gap-[40px] text-[#3a2e2a]">
            <div className="max-w-[1111px] flex flex-col gap-[48px] text-[#3a2e2a]">
            <p className="font-['Rangen'] ml-[45%] 2xl:ml-[38%] text-[50px] 2xl:text-[75px] mb-[40px] leading-[60px] tracking-[2px] text-[#3a2e2a]">
                Our Beliefs.
            </p>
            </div>


            {/* BLOCK 1 */}
            <div className="flex flex-col gap-[12px] ml-[20%] 2xl:ml-[9%] w-[791px] 2xl:w-[1100px]">
                <p className="font-['Helvetica:Bold',sans-serif] font-[700] text-[18px] 2xl:text-[24px] tracking-[1.2px]">
                    Culture over strategy
                </p>
                <p className="font-['Helvetica:Bold',sans-serif] text-[16px] 2xl:text-[22px] leading-[1.6]">
                    You can have the best strategy with all the right intentions, but if it doesn't speak the language
                    of culture, it won't move a soul. We decode what matters to your audience. Stories make your brand
                    human.
                </p>
            </div>

            {/* BLOCK 2 */}
            <div className="flex flex-col gap-[12px] w-[791px] ml-[20%] 2xl:ml-[9%] 2xl:w-[1100px]">
                <p className="font-['Helvetica:Bold',sans-serif] text-[18px]  2xl:text-[24px] font-[700] tracking-[1.2px]">
                    Stories make your brand human
                </p>
                <p className="font-['Helvetica:Bold',sans-serif] text-[16px]  2xl:text-[22px] leading-[1.6]">
                    Stories stick. We craft narratives that make people feel something. Because brands that make you
                    feel become brands you believe in. Every touchpoint is an opportunity to deepen that story.
                </p>
            </div>

            {/* BLOCK 3 */}
            <div className="flex flex-col gap-[12px] w-[791px] ml-[20%] 2xl:ml-[9%] 2xl:w-[1100px]">
                <p className="font-['Helvetica:Bold',sans-serif] text-[18px] 2xl:text-[24px] font-[700] tracking-[1.2px]">
                    Think Bigger
                </p>
                <p className="font-['Helvetica:Bold',sans-serif] text-[16px]  2xl:text-[22px] leading-[1.6]">
                    We don't use limitations as excuses, we treat them as the exact conditions that produce unexpected,
                    genuinely original thinking.
                </p>
            </div>

            {/* ICON */}
            <div className="ml-[20%] 2xl:ml-[9%]">
                <LucideInfinity/>
            </div>

        </div>
    );
}

function BeliefsSecMobile() {
    return (
        <section className="
            md:hidden
            w-full
            px-[24px]
            mt-[120px]
            mb-[120px]
            text-[#3a2e2a]
            flex flex-col
        ">

            {/* TITLE */}
            <h2 className="
                font-['Rangen']
                text-[42px]
                leading-[52px]
                tracking-[1px]
                mb-[40px]
            ">
                Our beliefs.
            </h2>

            {/* CONTENT BLOCKS */}
            <div className="flex flex-col gap-[32px] max-w-[340px]">

                {/* BLOCK 1 */}
                <div className="flex flex-col gap-[12px]">
                    <p className="
                        font-['Helvetica',sans-serif]
                        font-[700]
                        text-[15px]
                        tracking-[1.2px]
                    ">
                        Culture over strategy
                    </p>

                    <p className="
                        font-['Helvetica',sans-serif]
                        text-[15px]
                        leading-[1.5]
                    ">
                        You can have the best strategy with all the right intentions, but if it doesn't speak the language
                        of culture, it won't move a soul. We decode what matters to your audience.
                    </p>
                </div>

                {/* BLOCK 2 */}
                <div className="flex flex-col gap-[12px]">
                    <p className="
                        font-['Helvetica',sans-serif]
                        font-[700]
                        text-[15px]
                        tracking-[1.2px]
                    ">
                        Stories make your brand human
                    </p>

                    <p className="
                        font-['Helvetica',sans-serif]
                        text-[15px]
                        leading-[1.5]
                    ">
                        Stories stick. We craft narratives that make people feel something. Because brands that make you
                        feel become brands you believe in. Every touchpoint is an opportunity to deepen that story.
                    </p>
                </div>

                {/* BLOCK 3 */}
                <div className="flex flex-col gap-[12px]">
                    <p className="
                        font-['Helvetica',sans-serif]
                        font-[700]
                        text-[15px]
                        tracking-[1.2px]
                    ">
                        Think Bigger
                    </p>

                    <p className="
                        font-['Helvetica',sans-serif]
                        text-[15px]
                        leading-[1.5]
                    ">
                        We don't use limitations as excuses, we treat them as the exact conditions that produce unexpected,
                        genuinely original thinking.
                    </p>
                </div>

                {/* ICON */}
                <div className="mt-[16px]">
                    <LucideInfinity />
                </div>

            </div>
        </section>
    );
}

export default function SilentHWebsiteHomeDesktop() {
    return (
        <div className="bg-[#f1e9da] w-full overflow-x-hidden relative">
            {/* Background gradient animations - Desktop only */}
            <div
                className="hidden md:block z-0 absolute bg-[#f1e9da] h-[4047px] left-0 right-0 overflow-clip top-[700px]"
                data-name="Component 7">
                <div className="absolute left-[-196px] size-[663px] top-[-151px]"
                     style={{animation: 'float-bubble-1 25s ease-in-out infinite'}}>
                    <div className="absolute inset-[-75.41%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1663 1663">
                            <g filter="url(#filter0_f_1_266)" id="Ellipse 1">
                                <circle cx="831.5" cy="831.5" fill="var(--fill-0, #E4572E)" r="331.5"
                                        fillOpacity="0.5"/>
                            </g>
                            <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1663"
                                        id="filter0_f_1_266" width="1663" x="0" y="0">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"/>
                                    <feGaussianBlur result="effect1_foregroundBlur_1_266" stdDeviation="250"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="absolute h-[594px] right-[-200px] top-[-92px] w-[560px]"
                     style={{animation: 'float-bubble-2 30s ease-in-out infinite'}}>
                    <div className="absolute inset-[-67.34%_-71.43%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1360 1394">
                            <g filter="url(#filter0_f_1_268)" id="Ellipse 2">
                                <ellipse cx="680" cy="697" fill="var(--fill-0, #7B8B6F)" rx="280" ry="297"
                                         fillOpacity="0.5"/>
                            </g>
                            <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1394"
                                        id="filter0_f_1_268" width="1360" x="0" y="0">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"/>
                                    <feGaussianBlur result="effect1_foregroundBlur_1_268" stdDeviation="200"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 size-[568px] top-[771px]"
                     style={{animation: 'float-bubble-3 28s ease-in-out infinite'}}>
                    <div className="absolute inset-[-88.03%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1568 1568">
                            <g filter="url(#filter0_f_1_253)" id="Ellipse 3">
                                <circle cx="784" cy="784" fill="var(--fill-0, #3A2E2A)" r="284" fillOpacity="0.5"/>
                            </g>
                            <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1568"
                                        id="filter0_f_1_253" width="1568" x="0" y="0">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"/>
                                    <feGaussianBlur result="effect1_foregroundBlur_1_253" stdDeviation="250"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Background gradient animations - Mobile only */}
            <div className="md:hidden absolute left-0 right-0 top-[90vh] z-0 pointer-events-none">
                <div
                    className="absolute left-[-80px] top-[40px] size-[280px]"
                    style={{animation: 'float-bubble-mobile-1 12s linear infinite'}}
                >
                    <div className="absolute inset-[-75.41%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1663 1663">
                            <g filter="url(#filter0_f_1_266)" id="Ellipse 1">
                                <circle cx="831.5" cy="831.5" fill="var(--fill-0, #E4572E)" r="331.5"
                                        fillOpacity="0.5"/>
                            </g>
                            <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1663"
                                        id="filter0_f_1_266" width="1663" x="0" y="0">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"/>
                                    <feGaussianBlur result="effect1_foregroundBlur_1_266" stdDeviation="250"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div
                    className="absolute right-[-100px] top-[150px] w-[260px] h-[300px]"
                    style={{animation: 'float-bubble-mobile-2 14s linear infinite'}}
                >
                    <div className="absolute inset-[-67.34%_-71.43%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1360 1394">
                            <g filter="url(#filter0_f_1_268)" id="Ellipse 2">
                                <ellipse cx="680" cy="697" fill="var(--fill-0, #7B8B6F)" rx="280" ry="297"
                                         fillOpacity="0.5"/>
                            </g>
                            <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1394"
                                        id="filter0_f_1_268" width="1360" x="0" y="0">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"/>
                                    <feGaussianBlur result="effect1_foregroundBlur_1_268" stdDeviation="200"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div
                    className="absolute left-1/2 -translate-x-1/2 top-[350px] size-[240px]"
                    style={{animation: 'float-bubble-mobile-3 13s linear infinite'}}
                >
                    <div className="absolute inset-[-88.03%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1568 1568">
                            <g filter="url(#filter0_f_1_253)" id="Ellipse 3">
                                <circle cx="784" cy="784" fill="var(--fill-0, #3A2E2A)" r="284" fillOpacity="0.5"/>
                            </g>
                            <defs>
                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1568"
                                        id="filter0_f_1_253" width="1568" x="0" y="0">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"/>
                                    <feGaussianBlur result="effect1_foregroundBlur_1_253" stdDeviation="250"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            {/* HERO */}
            <section className="relative w-full h-[87vh] hidden md:block">
            <HeroSec/>

            </section>

            {/* mobile HERO */}
            <section className="relative w-full h-[87vh] md:hidden">
                <MobileHero/>

            </section>


            {/* STORY SECTION */}
            <section
                className="hidden md:flex relative z-10 max-w-[1280px] 2xl:max-w-[1720px] mx-auto px-[40px] mt-[160px] 2xl:mt-[200px] mb-[139px] flex items-start">

                <div className="max-w-[420px] 2xl:max-w-[920px] ">
                    <p className="font-['Rangen'] text-[50px] 2xl:text-[75px] leading-[60px] tracking-[2px] text-[#3a2e2a] whitespace-pre-wrap">
                        {"Storytellers.\nStrategists.\nOutliers."}
                    </p>
                </div>

                <div className="w-[430px] 2xl:w-[700px]"/>

                <div className="max-w-[520px] 2xl:max-w-[806px] flex flex-col gap-[40px] -mt-[40px]">
                    <p className="font-['Helvetica',sans-serif] text-[16px] 2xl:text-[24px] font-[400] leading-[1.2] tracking-[1.12px] text-[#3A2E2A]">
                        We started Notlimited because we believe brands deserve more than marketing. They deserve a
                        voice that cuts through. A strategy rooted in real culture.
                    </p>

                    <p className="font-['Helvetica',sans-serif] font-[400] text-[16px] 2xl:text-[24px] font-[400] leading-[1.2] tracking-[1.12px] text-[#3A2E2A]">
                        At our core, we are culture strategists, we are obsessed with how people think, what they care
                        about, and what moves them. We don't just speak to audiences, we become part of their world.
                    </p>

                    <p className="font-['Helvetica',sans-serif] font-[400] text-[16px] 2xl:text-[24px] font-[400] leading-[1.2] tracking-[1.12px] text-[#3A2E2A]">
                        We're the agency for brands ready to stop following the playbook and write their own.
                    </p>
                </div>

            </section>

            {/* mobile STORY SECTION */}

            <section className="
  md:hidden
  relative z-10
  w-full
  px-[24px]
  mt-[233px]
  mb-[120px]
  flex flex-col
">

                {/* HEADING */}
                <div className="max-w-[320px]">
                    <p className="
      font-['Rangen']
      text-[42px]
      leading-[52px]
      tracking-[1px]
      text-[#3a2e2a]
      whitespace-pre-wrap
    ">
                        {"Storytellers.\nStrategists.\nOutliers."}
                    </p>
                </div>

                {/* PARAGRAPHS */}
                <div className="
    mt-[32px]
    max-w-[370px]
    flex flex-col
    gap-[28px]
  ">
                    <p className="
      font-['Helvetica',sans-serif]
      text-[16px]
      leading-[1.5]
      tracking-[1.12px]
      text-[#3A2E2A]
    ">
                        We started Notlimited because we believe brands deserve more than marketing. They deserve a
                        voice that cuts through. A strategy rooted in real culture.
                    </p>

                    <p className="
      font-['Helvetica',sans-serif]
      text-[16px]
      leading-[1.5]
      tracking-[1.12px]
      text-[#3A2E2A]
    ">
                        At our core, we are culture strategists, we are obsessed with how people think, what they care
                        about, and what moves them. We don't just speak to audiences, we become part of their world.
                    </p>

                    <p id="beliefsM" className="
      font-['Helvetica',sans-serif]
      text-[16px]
      leading-[1.5]
      tracking-[1.12px]
      text-[#3A2E2A]
    ">
                        We're the agency for brands ready to stop following the playbook and write their own.
                    </p>
                </div>

            </section>

            {/* BELIEFS TITLE */}

            {/* BELIEFS CONTENT */}
            <section id="beliefs" className="hidden md:block relative z-10 max-w-[1280px] mx-auto">
                <BeliefsSec/>
            </section>

            <section className="md:hidden relative max-w-[361px] z-10 ml-[8.6%]">
                <BeliefsSecMobile/>
            </section>

            {/* IMAGE GRID */}
            <section
                className="hidden md:flex relative z-10 mt-[140px] 2xl:mt-[827px] 2xl:mb-[700px] flex justify-center">
                <div className="w-full max-w-[1140px] 2xl:scale-[1.5] grid grid-cols-3 gap-[20px]">

                    {/* row 1 */}
                    <HoverVideo img={img1} video={Vid1} className="h-[652px]"/>
                    <HoverVideo img={img2} video={Vid2} className="h-[652px]"/>
                    <HoverVideo img={img3} video={Vid3} className="h-[652px]"/>

                    {/* feature */}
                    <HoverVideo img={img4} video={Vid4} className="col-span-3 h-[640px]"/>

                    {/* row 3 */}
                    <HoverVideo img={img6} video={Vid5} className="h-[652px]"/>
                    <HoverVideo img={img7} video={Vid6} className="h-[652px]"/>
                    <HoverVideo img={img8} video={Vid7} className="h-[652px]"/>

                    {/* bottom feature */}
                    <HoverVideo img={img9} video={Vid8} className="col-span-3 h-[640px]"/>

                </div>
            </section>

            <section className="md:hidden relative z-10 mt-[120px] flex justify-center">

                <div className="w-full px-[20px] flex flex-col gap-[16px]">

                    {/* 1 */}
                    <img src={img1} className="w-full h-[570px] object-cover rounded-[20px]"/>

                    {/* 2 */}
                    <img src={img2} className="w-full h-[570px] object-cover rounded-[20px]"/>

                    {/* 3 */}
                    <img src={img3} className="w-full h-[570px] object-cover rounded-[20px]"/>

                    {/* 4 (LANDSCAPE) */}
                    <img src={img4} className="w-full h-[220px] object-cover rounded-[20px]"/>

                    {/* 5 */}
                    <img src={img6} className="w-full h-[570px] object-cover rounded-[20px]"/>

                    {/* 6 */}
                    <img src={img7} className="w-full h-[570px] object-cover rounded-[20px]"/>

                    {/* 7 */}
                    <img src={img8} className="w-full h-[570px] object-cover rounded-[20px]"/>

                    {/* 8 (LANDSCAPE) */}
                    <img src={img9} className="w-full h-[220px] object-cover rounded-[20px]"/>

                </div>

            </section>

            {/* WHAT WE DO */}
            <section id="services" className="hidden md:block mt-[20px] md:mt-20">
                <WhatWeDoSection/>
            </section>

            <section id="servicesM" className="md:hidden mt-[20px]">
                <WhatWeDoMobile/>
            </section>

            {/* Mickey VIDEO */}
            <section className="hidden md:block w-full h-[480px]">
                <video
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/NLMICKEY.mp4"/>
                </video>
            </section>

            {/* Mobile Mickey VIDEO */}
            <section className="md:hidden w-full h-[331px]">
                <video
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/NLMICKEY.mp4"/>
                </video>
            </section>

            {/* AFFILIATES */}
            <section className="hidden md:block mt-[120px]">
                <Affiliates/>
            </section>

            {/* MOBILE AFFILIATES */}
            <section className="md:hidden h-[92vh] mt-[80px]">
                <MobileAffiliates/>
            </section>

            {/* FOOTER */}
            <footer id="contact" className="mt-[130px]">
                <Footer/>
            </footer>

            <BackToTop/>

        </div>
    );
}