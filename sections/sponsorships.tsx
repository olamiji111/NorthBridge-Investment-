"use client";

import React, { useLayoutEffect, useRef } from 'react'
import { SponsorShipDetails } from '@/constants';
import Link from 'next/link';
import Image from "next/image";

const Sponsorship = () => {
    const sponsorshipRef = useRef<HTMLDivElement>(null);

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
        const cleanup = enableDragScroll(sponsorshipRef.current);
        return () => {
            cleanup && cleanup();
        };
    }, []);

    return (
        <div className='py-8 px-4 sm:px-6 xl:px-8'>
            <div
                ref={sponsorshipRef}
                className="overflow-x-auto flex gap-4 py-2 cursor-grab scroll-smooth snap-x snap-mandatory select-none scrollbar-none"
            >
                {SponsorShipDetails.map((item, idx) => (
                    <Link
                        href={item.href}
                        key={idx}
                        className='relative shrink-0 w-[250px]  h-[150px] sm:w-[220px] snap-start'
                    >
                        <Image
                            src={item.imgBackgroundPath}
                            alt={`sponsorship ${item.title}`}
                            width={320}
                            height={150}
                            className='object-cover h-full w-full rounded-2xl'
                        />
                        <div className='absolute bottom-4 left-4 flex flex-row gap-x-1'>
                            <Image
                                src={item.logoPath}
                                alt={`sponsorship logo, ${item.title}`}
                                width={25}
                                height={25}
                                className='object-contain'
                            />
                            <span className='text-xl text-white font-semibold'> {item.title} </span>
                        </div>


                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sponsorship;