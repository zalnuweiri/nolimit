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
import affiliates from "../assets/affiliateshq.png"
import CoterieVoFinalNew from "./CoterieVoFinalNew111";

function Affiliates() {
    return (
        <div className="relative size-full" data-name="Affiliates">
            <h2 className="font-['Rangen'] text-[50px] leading-[1.2] tracking-[2px] text-center pb-[60px] xl:scale-[1.1]">Our Co-Authors</h2>
            <img src={affiliates} className="w-[681px] h-[370.1px] xl:scale-[1.1] object-contain ml-[20.4%] xl:ml-[27%]"/>
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
        <div className="w-full bg-[#3a2e2a] py-[90px]">
            <div className="max-w-[1280px] mx-auto px-[72px] flex justify-between items-start">

                {/* LEFT */}
                <div className="max-w-[420px] mt-[16%]">
                    <p className="font-['Rangen'] text-[64px] leading-[1.2] text-[#f1e9da]">
                        The things we’re good at
                    </p>
                </div>

                {/* RIGHT */}
                <div className="w-[640px] flex flex-col">

                    {/* ITEM */}
                    <div className="flex justify-between gap-[40px] py-[24px] border-b border-dashed  border-[#f1e9da]/70">
                        <p className="font-['Helvetica:Bold',sans-serif] font-[700] text-[18px] tracking-[1.5px] text-[#f1e9da] uppercase w-[300px]">
                            Campaign Strategy & Activation
                        </p>
                        <p className="font-['Helvetica',sans-serif] font-[400] text-[16px] leading-[1.6] text-[#f1e9da] w-[300px]">
                            Culture-led campaigns that create real-world moments. We get people talking and keep them talking.
                        </p>
                    </div>

                    {/* ITEM */}
                    <div className="flex justify-between gap-[40px] py-[24px] border-b border-dashed border-[#f1e9da]/70">
                        <p className="font-['Helvetica:Bold',sans-serif] font-[700] text-[18px] tracking-[1.5px] text-[#f1e9da] uppercase w-[300px]">
                            Brand Storytelling & Copywriting
                        </p>
                        <p className="font-['Helvetica',sans-serif] font-[400] text-[16px] leading-[1.6] text-[#f1e9da] w-[300px]">
                            From manifestos to campaign copy to tone of voice, we give your brand a voice people actually want to hear.
                        </p>
                    </div>

                    {/* ITEM */}
                    <div className="flex justify-between gap-[40px] py-[24px] border-b border-dashed  border-[#f1e9da]/70">
                        <p className="font-['Helvetica:Bold',sans-serif] font-[700] text-[18px] tracking-[1.5px] text-[#f1e9da] uppercase w-[300px]">
                            Content Creation & Direction
                        </p>
                        <p className="font-['Helvetica',sans-serif] font-[400] text-[16px] leading-[1.6] text-[#f1e9da] w-[300px]">
                            Content that stops the scroll and starts the conversation. Strategy, creative direction, and production — end to end.
                        </p>
                    </div>

                    {/* ITEM */}
                    <div className="flex justify-between gap-[40px] py-[24px]">
                        <p className="font-['Helvetica:Bold',sans-serif] font-[700] text-[18px] tracking-[1.5px] text-[#f1e9da] uppercase w-[300px]">
                            Community & Social Strategy
                        </p>
                        <p className="font-['Helvetica',sans-serif] font-[400] text-[16px] leading-[1.6] text-[#f1e9da] w-[300px]">
                            Audiences are built, not bought. We turn followers into fans and fans into advocates.
                        </p>
                    </div>

                </div>
            </div>
        </div>
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

function SecondaryButtonMobile() {
  return (
    <div className="content-stretch flex items-center justify-center p-[16px] relative shrink-0" data-name="SecondaryButton - Mobile">
      <div aria-hidden="true" className="absolute border border-[#f1e9da] border-solid inset-0 pointer-events-none" />
      <p className="font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f1e9da] text-[16px] tracking-[3.2px] uppercase">join our mailing list</p>
    </div>
  );
}

function LucideInstagram() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/instagram">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lucide/instagram">
          <path d={svgPaths.p18a68ff0} id="Vector" stroke="var(--stroke-0, #F1E9DA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LucideFacebook() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/facebook">
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
    <div className="relative shrink-0 size-[24px]" data-name="Layer_1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Layer_1">
          <path d={svgPaths.pa940c00} fill="var(--fill-0, #F1E9DA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <LucideInstagram />
      <LucideFacebook />
      <Layer />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-[235px]">
      <p className="font-['Helvetica:Bold',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#f1e9da] text-[20px] text-center tracking-[1.4px] uppercase w-[min-content] whitespace-pre-wrap">Let's get social</p>
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-[1172px]">
      <SecondaryButtonMobile />
      <Frame1 />
    </div>
  );
}

function MobileFooter() {
  return (
    <div className="absolute bg-[#3a2e2a] content-stretch flex flex-col h-[289px] items-center justify-center left-0 px-[36px] py-[80px] w-full" data-name="Mobile-Footer">
      <Frame2 />
    </div>
  );
}

function LucideInfinity() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="lucide/infinity">
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
            <p className="font-['Rangen'] ml-[45%] text-[50px] leading-[60px] tracking-[2px] text-[#3a2e2a]">
                Our Beliefs.
            </p>
            </div>


            {/* BLOCK 1 */}
            <div className="flex flex-col gap-[12px] ml-[25%] w-[641px]">
                <p className="font-['Helvetica:Bold',sans-serif] font-[700] text-[18px] tracking-[1.2px]">
                    Culture over strategy
                </p>
                <p className="font-['Helvetica:Bold',sans-serif] text-[16px] leading-[1.6]">
                    You can have the best strategy with all the right intentions, but if it doesn't speak the language
                    of culture, it won't move a soul. We decode what matters to your audience. Stories make your brand
                    human.
                </p>
            </div>

            {/* BLOCK 2 */}
            <div className="flex flex-col gap-[12px] w-[641px] ml-[25%]">
                <p className="font-['Helvetica:Bold',sans-serif] text-[18px] font-[700] tracking-[1.2px]">
                    Stories make your brand human
                </p>
                <p className="font-['Helvetica:Bold',sans-serif] text-[16px] leading-[1.6]">
                    Stories stick. We craft narratives that make people feel something. Because brands that make you
                    feel become brands you believe in. Every touchpoint is an opportunity to deepen that story.
                </p>
            </div>

            {/* BLOCK 3 */}
            <div className="flex flex-col gap-[12px] w-[641px] ml-[25%]">
                <p className="font-['Helvetica:Bold',sans-serif] text-[18px] font-[700] tracking-[1.2px]">
                    Think Bigger
                </p>
                <p className="font-['Helvetica:Bold',sans-serif] text-[16px] leading-[1.6]">
                    We don't use limitations as excuses, we treat them as the exact conditions that produce unexpected,
                    genuinely original thinking.
                </p>
            </div>

            {/* ICON */}
            <div className="ml-[25%]">
                <LucideInfinity/>
            </div>

        </div>
    );
}

export default function SilentHWebsiteHomeDesktop() {
    return (
        <div className="bg-[#f1e9da] w-full overflow-x-hidden">

        {/* HERO */}
            <section className="relative w-full h-[87vh]">
                <CoterieVoFinalNew />
            </section>

            {/* STORY SECTION */}
            <section className="max-w-[1280px] mx-auto px-[40px] mt-[160px] mb-[139px] flex items-start">

                <div className="max-w-[420px]">
                    <p className="font-['Rangen'] text-[50px] leading-[60px] tracking-[2px] text-[#3a2e2a] whitespace-pre-wrap">
                        {"Storytellers\nStrategists\nOutliers."}
                    </p>
                </div>

                <div className="w-[430px]" />

                <div className="max-w-[520px] flex flex-col gap-[40px] -mt-[40px]">
                    <p className="font-['Helvetica',sans-serif] text-[16px] font-[400] leading-[1.2] tracking-[1.12px] text-[#3A2E2A]">
                        We started Notlimited because we believe brands deserve more than marketing. They deserve a
                        voice that cuts through. A strategy rooted in real culture.
                    </p>

                    <p className="font-['Helvetica',sans-serif] font-[400] text-[16px] font-[400] leading-[1.2] tracking-[1.12px] text-[#3A2E2A]">
                        At our core, we are culture strategists, we are obsessed with how people think, what they care
                        about, and what moves them. We don't just speak to audiences, we become part of their world.
                    </p>

                    <p className="font-['Helvetica',sans-serif] font-[400] text-[16px] font-[400] leading-[1.2] tracking-[1.12px] text-[#3A2E2A]">
                        We're the agency for brands ready to stop following the playbook and write their own.
                    </p>
                </div>

            </section>

            {/* BELIEFS TITLE */}

            {/* BELIEFS CONTENT */}
            <section className="max-w-[1280px] mx-auto">
                <BeliefsSec />
            </section>

            {/* IMAGE GRID */}
            <section className="mt-[140px] flex justify-center">
                <div className="w-full max-w-[1140px] grid grid-cols-3 gap-[20px]">

                    {/* row 1 */}
                    <img src={img1} className="h-[652px] object-cover rounded-[24px]" />
                    <img src={img2} className="h-[652px] object-cover rounded-[24px]" />
                    <img src={img3} className="h-[652px] object-cover rounded-[24px]" />

                    {/* feature */}
                    <img src={img4} className="col-span-3 h-[640px] object-cover rounded-[24px]" />

                    {/* row 3 */}
                    <img src={img6} className="h-[652px] object-cover rounded-[24px]" />
                    <img src={img7} className="h-[652px] object-cover rounded-[24px]" />
                    <img src={img8} className="h-[652px] object-cover rounded-[24px]" />

                    {/* bottom feature */}
                    <img src={img9} className="col-span-3 h-[640px] object-cover rounded-[24px]" />

                </div>
            </section>

            {/* WHAT WE DO */}
            <section className="mt-20">
                <WhatWeDoSection />
            </section>

            {/* VIDEO (THIS WAS BREAKING YOUR SCROLL) */}
            <section className="w-full h-[480px]">
                <video
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/NLMICKEY.mp4" />
                </video>
            </section>

            {/* AFFILIATES */}
            <section className="mt-[120px]">
                <Affiliates />
            </section>

            {/* FOOTER */}
            <footer className="mt-[130px]">
                <MobileFooter />
            </footer>

        </div>
    );
}