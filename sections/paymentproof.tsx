import React, { useEffect, useState } from 'react';
import { paymentTestimonials } from "@/constants";
import Image from "next/image";

function Paymentproof() {
    const firstRow = paymentTestimonials.slice(0, 5);
    const secondRow = paymentTestimonials.slice(5, 10);

    const [thirdRow] = useState(() => [...firstRow].sort(() => Math.random() - 0.5));

    const CARD_WIDTH = 300;
    const GAP = 8;
    const STEP = CARD_WIDTH + GAP;

    const infiniteFirstRow = [...firstRow, ...firstRow];
    const infiniteSecondRow = [...secondRow, ...secondRow];
    const infiniteThirdRow = [...thirdRow, ...thirdRow];

    const [firstIndex, setFirstIndex] = useState(0);
    const [secondIndex, setSecondIndex] = useState(0);
    const [thirdIndex, setThirdIndex] = useState(0);

    const [enableFirstTransition, setEnableFirstTransition] = useState(true);
    const [enableSecondTransition, setEnableSecondTransition] = useState(true);
    const [enableThirdTransition, setEnableThirdTransition] = useState(true);

    // FIRST ROW (LEFT)
    useEffect(() => {
        const interval = setInterval(() => {
            setFirstIndex((prev) => prev + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (firstIndex === firstRow.length) {
            const timeout = setTimeout(() => {
                setEnableFirstTransition(false);
                setFirstIndex(0);
            }, 400);

            return () => clearTimeout(timeout);
        }
    }, [firstIndex, firstRow.length]);

    useEffect(() => {
        if (!enableFirstTransition) {
            const raf = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setEnableFirstTransition(true);
                });
            });

            return () => cancelAnimationFrame(raf);
        }
    }, [enableFirstTransition]);

    // SECOND ROW (RIGHT)
    useEffect(() => {
        const interval = setInterval(() => {
            setSecondIndex((prev) => prev + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (secondIndex === secondRow.length) {
            const timeout = setTimeout(() => {
                setEnableSecondTransition(false);
                setSecondIndex(0);
            }, 400);

            return () => clearTimeout(timeout);
        }
    }, [secondIndex, secondRow.length]);

    useEffect(() => {
        if (!enableSecondTransition) {
            const raf = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setEnableSecondTransition(true);
                });
            });

            return () => cancelAnimationFrame(raf);
        }
    }, [enableSecondTransition]);

    // THIRD ROW (LEFT)
    useEffect(() => {
        const interval = setInterval(() => {
            setThirdIndex((prev) => prev + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (thirdIndex === thirdRow.length) {
            const timeout = setTimeout(() => {
                setEnableThirdTransition(false);
                setThirdIndex(0);
            }, 400);

            return () => clearTimeout(timeout);
        }
    }, [thirdIndex, thirdRow.length]);

    useEffect(() => {
        if (!enableThirdTransition) {
            const raf = requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setEnableThirdTransition(true);
                });
            });

            return () => cancelAnimationFrame(raf);
        }
    }, [enableThirdTransition]);

    return (
        <div className='px-0 py-8 mt-2 w-full'>
            <div className='flex flex-col items-start gap-y-4 overflow-hidden'>

                {/* FIRST ROW - MOVES LEFT */}
                <div className='overflow-hidden w-full'>
                    <div
                        className='flex flex-row gap-x-2 items-center'
                        style={{
                            transform: `translateX(-${firstIndex * STEP}px)`,
                            transition: enableFirstTransition ? 'transform 0.4s ease-in-out' : 'none',
                        }}
                    >
                        {infiniteFirstRow.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white select-none cursor-pointer text-[#0c2780] border shrink-0 border-transparent overflow-hidden rounded-xl p-3 h-18 relative"
                                style={{ minWidth: `${CARD_WIDTH}px` }}
                            >
                                <div className='flex flex-row items-start gap-x-2'>
                                    <Image
                                        alt="client certificate"
                                        src={item.certificatePath}
                                        height={50}
                                        width={50}
                                        loading="lazy"
                                        className='rounded-lg object-center object-cover h-12 w-18'
                                    />
                                    <div className="flex flex-col gap-y-0 flex-nowrap items-start mt-1">
                                        <span className='text-[14px] font-normal'>{item.clientNamewithFlag}</span>
                                        <span className="text-[15px] font-semibold">{item.amount}</span>
                                    </div>
                                    <span className='absolute right-3 top-3 text-[14px]'>now</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECOND ROW - MOVES RIGHT */}
                <div className='overflow-hidden w-full'>
                    <div
                        className='flex flex-row gap-x-2 items-center'
                        style={{
                            transform: `translateX(calc(-${secondRow.length * STEP - secondIndex * STEP}px - ${STEP / 2}px))`,
                            transition: enableSecondTransition ? 'transform 0.4s ease-in-out' : 'none',
                        }}
                    >
                        {infiniteSecondRow.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white select-none cursor-pointer text-[#0c2780] border shrink-0 border-transparent overflow-hidden rounded-xl p-3 h-18 relative"
                                style={{ minWidth: `${CARD_WIDTH}px` }}
                            >
                                <div className='flex flex-row items-start gap-x-2'>
                                    <Image
                                        alt="client certificate"
                                        src={item.certificatePath}
                                        height={50}
                                        width={50}
                                        loading="lazy"
                                        className='rounded-lg object-center object-cover h-12 w-18'
                                    />
                                    <div className="flex flex-col gap-y-0 flex-nowrap items-start mt-1">
                                        <span className='text-[14px] font-normal'>{item.clientNamewithFlag}</span>
                                        <span className="text-[15px] font-semibold">{item.amount}</span>
                                    </div>
                                    <span className='absolute right-3 top-3 text-[14px]'>now</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* THIRD ROW - MOVES LEFT */}
                <div className='overflow-hidden w-full'>
                    <div
                        className='flex flex-row gap-x-2 items-center'
                        style={{
                            transform: `translateX(-${thirdIndex * STEP}px)`,
                            transition: enableThirdTransition ? 'transform 0.4s ease-in-out' : 'none',
                        }}
                    >
                        {infiniteThirdRow.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white select-none cursor-pointer text-[#0c2780] border shrink-0 border-transparent overflow-hidden rounded-xl p-3 h-18 relative"
                                style={{ minWidth: `${CARD_WIDTH}px` }}
                            >
                                <div className='flex flex-row items-start gap-x-2'>
                                    <Image
                                        alt="client certificate"
                                        src={item.certificatePath}
                                        height={50}
                                        width={50}
                                        loading="lazy"
                                        className='rounded-lg object-center object-cover h-12 w-18'
                                    />
                                    <div className="flex flex-col gap-y-0 flex-nowrap items-start mt-1">
                                        <span className='text-[14px] font-normal'>{item.clientNamewithFlag}</span>
                                        <span className="text-[15px] font-semibold">{item.amount}</span>
                                    </div>
                                    <span className='absolute right-3 top-3 text-[14px]'>now</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Paymentproof;