import React, { useRef, useLayoutEffect, useEffect } from "react";
import { trustSection, topIndustryAwards, testimonials } from "@/constants";
import Image from "next/image";
import LinkButton from "@/components/shared/linkbutton";
import { Trustpilot, TrustPilotFourStar } from "@/components/icons/icons";
import { TestimnialSection1 } from "@/components/shared/testimonials";

const PageContent = () => {
    const trustRef = useRef<HTMLDivElement>(null);
    const awardsRef = useRef<HTMLDivElement>(null);

    const enableDragScroll = (el: HTMLDivElement | null) => {
        if (!el) return;

        let isDown = false;
        let startX = 0;
        let scrollStart = 0;

        const onMouseDown = (e: MouseEvent) => {
            isDown = true;
            startX = e.clientX;
            scrollStart = el.scrollLeft;
            e.preventDefault();
        };

        const onMouseUpOrLeave = () => {
            isDown = false;
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            const dx = e.clientX - startX;
            el.scrollLeft = scrollStart - dx;
        };

        el.addEventListener("mousedown", onMouseDown);
        el.addEventListener("mouseup", onMouseUpOrLeave);
        el.addEventListener("mouseleave", onMouseUpOrLeave);
        el.addEventListener("mousemove", onMouseMove);

        return () => {
            el.removeEventListener("mousedown", onMouseDown);
            el.removeEventListener("mouseup", onMouseUpOrLeave);
            el.removeEventListener("mouseleave", onMouseUpOrLeave);
            el.removeEventListener("mousemove", onMouseMove);
        };
    };

    useLayoutEffect(() => {
        const cleanups = [
            enableDragScroll(trustRef.current),
            enableDragScroll(awardsRef.current),
        ];
        return () => {
            cleanups.forEach((cleanup) => cleanup && cleanup());
        };
    }, []);

    return (
        <div className="py-6 mt-4 px-4 sm:px-6 relative">
            {/* Title */}
            <h2 className="text-[1.875rem] text-text-color font-semibold relative z-10">
                Why 33 million people trust us
                <sup className="align-baseline">3</sup>
            </h2>

            {/* Grid of numbers */}
            <div className="mt-4 pt-2 grid grid-cols-[repeat(auto-fit,minmax(20px,0.35fr))] sm:grid-cols-4 sm:gap-x-4 overflow-hidden z-10">
                <div className="text-text-color flex flex-col  items-start">
                    <h2 className="text-[5.125rem] leading-none bg-gradient-to-r from-[#afe1ff] to-[#caacfd] text-transparent bg-clip-text">
                        85
                    </h2>

                    <span className="text-sm ml-3">countries</span>
                </div>
                <div className="text-text-color flex flex-col items-start">
                    <h2 className="text-[5.125rem] leading-none bg-gradient-to-r from-[#afe1ff] to-[#caacfd] text-transparent bg-clip-text">
                        18+
                    </h2>
                    <span className="text-sm ml-4">Licenses</span>
                </div>
            </div>

            <div className="mt-4 h-[0.069rem] w-full bg-zinc-400/40 relative z-10" />
            <div
                className="bg-center absolute top-0 left-0 translate-x-0 size-full md:bg-position-[30%_55%] md:bg-[length:140%_160%] 
        bg-[url('/assets/images/trust-section-bg.svg')] bg-no-repeat bg-position-[30%_35%] bg-[length:180%_160%] 
        pointer-events-none opacity-100"
            />

            {/* Trust Section */}
            <div className="relative z-10">
                <h2 className="text-[1.5rem] mt-4 tracking-tighter font-semibold text-text-color wrap-break-word ijm">
                    Globally Licensed and Regulated
                </h2>
                <div
                    ref={trustRef}
                    className="overflow-x-auto flex space-x-4 py-2 cursor-grab scroll-pl-2 scroll-smooth
          snap-x snap-mandatory select-none active:cursor-grab scrollbar-none"
                >
                    {trustSection.map((item, idx) => (
                        <div
                            key={idx}
                            className="shrink-0 w-40 sm:w-48 h-40 flex flex-col items-center rounded-[1.5rem] border border-white/20 bg-[radial-gradient(circle,#ffffff25,#ffffff10)] px-3 py-3 snap-start"
                        >
                            {item.imagePath && (
                                <Image
                                    src={item.imagePath}
                                    alt={item.name}
                                    draggable={false}
                                    width={120}
                                    height={120}
                                    className="object-contain"
                                    priority
                                />
                            )}
                            <p className="mt-1 text-center text-[14px] text-[#0c2780] leading-snug h-12 flex items-start justify-center">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 h-[0.069rem] w-full bg-zinc-400/40 relative z-10" />

            </div>

            {/* Awards Section */}
            <div className="mt-8" aria-label="Top Industry Awards Section">
                <h2 className="text-[1.5rem] mt-5 tracking-tighter capitalize font-semibold text-text-color wrap-break-word heina">
                    Top Industry Awards
                </h2>
                <div
                    ref={awardsRef}
                    className="overflow-x-auto flex space-x-4 gap-x-8 py-2 cursor-grab scroll-pl-2 scroll-smooth snap-x snap-mandatory select-none px-1 active:cursor-grab scrollbar-none"
                >
                    {topIndustryAwards.map((item, idx) => (
                        <div
                            key={idx}
                            aria-label="award item wrapper"
                            className="relative flex flex-col items-center justify-center"
                        >
                            <span className="text-[13px] tracking-[-0.04rem]">{item.name}</span>

                            <div className="">
                                {/* Left leaf */}
                                <div
                                    className="
            absolute 
            bg-[url('/assets/images/trust-section/palm-left.svg')]
            bg-no-repeat
            bg-left
            bg-contain
            inset-y-4
            pointer-events-none
            size-10
            -left-1
          "
                                />

                                {/* Year */}
                                <span className="text-[1.875rem] text-foreground px-4 leading-normal ibm">
                                    {item.year}
                                </span>

                                {/* Right leaf */}
                                <div
                                    className="
            absolute 
            bg-[url('/assets/images/trust-section/palm-right.svg')]
            bg-no-repeat
            bg-contain
            inset-y-4
            pointer-events-none
            size-10
            -right-1
            bg-right
          "
                                />
                            </div>

                            <span className="text-[12px] text-center mt-1 leading-tight min-w-[120px]">
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="hidden sm:inline-block py-8">
                <LinkButton text="Join NIC Now" className="font-bold text-xl w-48" href="(auth)/signin" />
            </div>


        </div>
    );
};

export default PageContent;