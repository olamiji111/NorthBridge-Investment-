import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { HeroLogos } from "@/constants";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let x = 0;
    const speed = 0.9;
    let animationFrameId: number;

    const animate = () => {
      x -= speed;


      const resetPoint = container.scrollWidth / 2;
      if (Math.abs(x) >= resetPoint) {
        x = 0;
      }

      container.style.transform = `translateX(${x}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [])
  return (
    <>
      <section className="relative  flex flex-col   items-center gap-y-8">
        <div className="h-20" />
        <div
          className="
        absolute inset-0
        bg-[url('/assets/images/hero-dark-bg.webp')]
        bg-no-repeat
        bg-center
        bg-[length:100%_100%]
        sm:bg-[length:100%_100%]
        md:bg-[length:100%_%100%]
        sm:bg-bottom-center
        md:bg-bottom-center
        translate-y-20
        sm:translate-y-20
        bg-navbar-bg 
        
      "
        />
        <div className="absolute inset-0  bg-gradient-to-b  from-transparent via-[#040c29]/5 to-[#040c29]/5" />

        <div className=" py-6 relative z-10 flex flex-col items-center gap-y-4 px-4">
          <h1 className=" text-white text-4xl font-bold sm:text-4xl lg:text-4xl text-center ibm font-semibold
        [text-shadow:0_0_1rem_#0c2780,0_0_1.5rem_#0c2780]">
            Smart Bot Trading <br />
            for modern Investors
          </h1>
          <p className="text-foreground text-[18px] sm:text-[20px]  text-center leading-normal 
        [text-shadow:0_0_1rem_#0c2780,0_0_1.5rem_#0c2780] ibm max-w-[530px] sm:max-w-full" >
            Trade smarter, faster, and accurately , let our AI bot bridge the gap for you.
          </p>
        </div>
        <div

          className="
          relative cursor-zoom-in
          max-h-[70vh]
        
        "
        >
          <Image
            src="/assets/images/hero-phone.webp"
            alt="Hero phone"
            width={180}
            height={200}
            priority
            className=" w-auto object-contain"
          />
        </div>

      </section>
      <div className="overflow-hidden w-full">
        <div
          ref={containerRef}
          className="flex whitespace-nowrap items-center "
        >
          {/* Original set */}
          {HeroLogos.map((logo, index) => (
            <div key={index} className="shrink-0 mx-3">
              <Image
                src={logo.imgPath}
                alt={`Hero logo ${index + 1}`}
                width={40}
                height={50}
                className="object-contain bg-background rounded-full h-18 w-18 "
              />
            </div>
          ))}


          {HeroLogos.map((logo, index) => (
            <div key={`dup-${index}`} className="shrink-0 mx-3">
              <Image
                src={logo.imgPath}
                alt={`Hero logo duplicate ${index + 1}`}
                width={40}
                height={50}
                className="object-contain bg-background rounded-full h-18 w-18 "
              />

            </div>
          ))}
        </div>
      </div>
    </>

  );
};

export default Hero;