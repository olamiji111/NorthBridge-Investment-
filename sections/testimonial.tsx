import { Trustpilot, TrustPilotFourStar } from '@/components/icons/icons';
import { TestimnialSection1 } from '@/components/shared/testimonials';
import { testimonials2 } from '@/constants';
import React, { useEffect, useRef } from 'react'


const AutoScrollingTestimonials = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const scrollSpeed = 0.6; // adjust speed

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let x = 0;
        let animationId: number;

        const animate = () => {
            x -= scrollSpeed;

            // Reset scroll when first set is completely gone
            const resetPoint = container.scrollWidth / 2;
            if (Math.abs(x) >= resetPoint) {
                x = 0;
            }

            container.style.transform = `translateX(${x}px)`;
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className="overflow-hidden w-full mt-4 py-2">
            <div
                ref={containerRef}
                className="flex whitespace-nowrap items-center select-none cursor-pointer "
                style={{ willChange: "transform" }}
            >
                {/* Original testimonials */}
                {testimonials2.map((item, idx) => (
                    <div key={idx} className="shrink-0 px-2">
                        <TestimnialSection1 item={item} />
                    </div>
                ))}

                {/* Duplicate testimonials for seamless scroll */}
                {testimonials2.map((item, idx) => (
                    <div key={`dup-${idx}`} className="shrink-0 px-2">
                        <TestimnialSection1 item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};
const Testimonial = () => {
    return (
        <div aria-label="Testimonial Section" className="relative py-8 mt-2">
            <div className=' px-4 sm:px-6'>
                <h2 className="text-foreground text-2xl font-semibold leading-norm">Our Traders say its the Best</h2>
                <div className="pt-8 flex flex-col space-y-1 gap-y-2 items-start">
                    <div
                        className="absolute top-14 -bottom-16 -left-40 -right-40
               bg-[url('/assets/images/trustpilot-bg.svg')] bg-no-repeat bg-[position:20%_0%]
               bg-[length:140%_110%] sm:bg-[length:100%_100%] pointer-events-none opacity-90 z-0"
                    />

                    <Trustpilot className="w-auto h-[2rem]" />
                    <div className="flex flex-row items-center gap-x-4">
                        <TrustPilotFourStar className="h-[2rem] w-auto" />
                        <div className="flex flex-col items-start gap-y-0">
                            <span className="font-semibold text-[16px]">4.2 | Great</span>
                            <span className="text-[16px]">18569 reviews</span>
                        </div>
                    </div>
                </div>


                {/* Auto-scrolling testimonials */}

            </div>
            <AutoScrollingTestimonials />
            <span className='text-[15px] px-4 sm:px-6 '> Showing our 4 & 5 star reviews in your language </span>
        </div>
    )

}

export default Testimonial;
