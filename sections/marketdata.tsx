import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import OilChartContainer from '@/components/shared/tradingview';
import { OilChart, GasChart, Oil2Chart, Silver, NasdaqChart, GoldChart } from '@/components/shared/marketchart';
import Image from 'next/image';
import PriceCard from '@/components/shared/pricecard';

const marketTabs: string[] = [
    "Most Popular",
    "Shares",
    "Commodities",
    "Crypto",
    "Indices",
    "Forex",
    "Options",
    "ETFs"
] as const;

type typemarketTab = (typeof marketTabs)[number];

const Marketdata = () => {
    const [activeMarketTab, setActiveMarketTab] = useState<typemarketTab>("Most Popular");
    const [oilPrice, setOilPrice] = useState<number | null>(null);


    return (
        <div className="py-8 px-4 sm:px-6 relative">
            <h2 className="text-white capitalize [text-shadow:0_0_1rem_#0c2780,0_0_1.5rem_#0c2780] text-[1.575rem] sm:text-[1.875rem] leading-8">
                Trade intuitively on thousands of CFDs
            </h2>
            <div className="sans mt-4 grid grid-cols-4 grid-rows-3 gap-2
    auto-rows-[76px]
    sm:auto-rows-[84px]
    md:auto-rows-[94px]
    lg:auto-rows-[104px]
    aspect-square[2/]
    ">

                {/* BIG TOP LEFT */}
                <Link href="https://www.plus500.com/en-ng/instruments/cl" className="bg-logo-color   hover:bg-[#052fce] rounded-xl col-start-1 col-span-2 row-start-1 row-span-2  flex flex-col items-start  border border-transparent relative m-0  transition-colors duration-300">
                    <div className="flex-row flex gap-x-2 items-center p-2">
                        <Image
                            alt="Oil Market"
                            src="/assets/images/popularMarket/CL_border.png"
                            width={20}
                            height={20}
                            className='object-contain rounded-full  '

                        />
                        <div className='flex flex-col items-start'>
                            <span className='text-white text-[14px] capitalize'>Oil</span>
                            <span className='text-[#e8f5ff] text-[12px] font-light'>  CL </span>
                        </div>

                    </div>
                    <div className='px-2 flex flex-col'>
                        <span className='text-[14px] text-white  px-2'>112.01</span>
                        <span className='text-[13px] px-2'> 50% are buyers now
                            <sup className='align-baseline'> 2</sup>
                        </span>
                    </div>
                    <OilChart className=" size-full " />
                    <span className='absolute bottom-2 left-2 text-[14px] px-3 py-1/2 bg-[rgba(9,27,93,.8)] rounded-sm z-1 '> 30 days </span>
                </Link>

                {/* SMALL TOP RIGHT 1 */}
                <Link href="https://www.plus500.com/en-ng/instruments/cl" className="bg-logo-color hover:bg-[#052fce]  rounded-xl col-start-3 row-start-1   flex flex-col items-start  border border-transparent relative ">
                    <div className="flex-row flex gap-x-2 items-center p-2">
                        <Image
                            alt="Natural Gas Market"
                            src="/assets/images/popularMarket/NG.png"
                            width={20}
                            height={20}
                            className='object-contain rounded-full  '

                        />
                        <span className='text-white text-[12px] capitalize'>Natural Gas</span>
                    </div>
                    <span className='text-[12px] text-white font-normal px-2'> 2.791</span>
                    <GasChart className="" />
                </Link>

                {/* SMALL TOP RIGHT 2 */}
                <Link href="https://www.plus500.com/en-ng/instruments/cl" className="bg-logo-color hover:bg-[#052fce]  rounded-xl col-start-4 row-start-1 flex flex-col items-start  border border-transparent relative">
                    <div className="flex-row flex gap-x-2 items-center p-2">
                        <Image
                            alt="Natural Gas Market"
                            src="/assets/images/popularMarket/EB_border.png"
                            width={22}
                            height={22}
                            className='object-contain rounded-full '

                        />
                        <span className='text-white text-[12px] capitalize'>Brent Oil</span>
                    </div>
                    <span className='text-[12px] text-white font-normal px-2'> 106.65</span>
                    <Oil2Chart className="w-full h-full" />
                </Link>

                {/* SMALL BOTTOM LEFT 1 */}
                <Link href="https://www.plus500.com/en-ng/instruments/cl" className="bg-logo-color hover:bg-[#052fce]  rounded-xl col-start-1 row-start-3  flex flex-col items-start  border border-transparent relative">
                    <div className="flex-row flex gap-x-2 items-center p-2">
                        <Image
                            alt="Silver Market"
                            src="/assets/images/popularMarket/XAG.webp"
                            width={22}
                            height={22}
                            className='object-contain rounded-full  size-4'

                        />
                        <span className='text-white text-[12px] capitalize'>Silver</span>
                    </div>
                    <span className='text-[12px] text-white font-normal px-2'> 72.665</span>
                    <Silver className="w-full h-full" />
                </Link>

                {/* SMALL BOTTOM LEFT 2 */}
                <Link href="https://www.plus500.com/en-ng/instruments/cl" className="bg-logo-color hover:bg-[#052fce]  rounded-xl  col-start-2 row-start-3 flex flex-col items-start  border border-transparent relative">
                    <div className="flex-row flex gap-x-2 items-center p-2">
                        <Image
                            alt="Nasdaq Market"
                            src="/assets/images/popularMarket/NQ.png"
                            width={22}
                            height={22}
                            className='object-contain rounded-full size-4 '

                        />
                        <span className='text-white text-[12px] capitalize'>Nasdaq 100</span>
                    </div>
                    <span className='text-[12px] text-white font-normal px-2'>24140</span>
                    <NasdaqChart className="w-full h-full" />
                </Link>

                {/* BIG BOTTOM RIGHT */}
                <Link href="https://www.plus500.com/en-ng/instruments/cl" className="bg-logo-color hover:bg-[#052fce] rounded-xl  col-start-3 col-span-2 row-start-2 row-span-2  flex flex-col items-start  border border-transparent relative">
                    <div className="flex-row flex gap-x-2 items-center p-2">
                        <Image
                            alt="Oil Market"
                            src="/assets/images/popularMarket/XAU.png"
                            width={22}
                            height={22}
                            className='object-contain rounded-full '

                        />
                        <div className='flex flex-col items-start'>
                            <span className='text-white text-[14px] capitalize'>Gold</span>
                            <span className='text-[#e8f5ff] text-[12px] font-light'>  XAU </span>
                        </div>

                    </div>

                    <div className='px-2 flex flex-col'>
                        <span className='text-[14px] text-white font-bold px-2'>4675.57</span>
                        <span className='text-[13px] px-2'> 79% are buyers now
                            <sup className='align-baseline'> 2</sup>
                        </span>
                    </div>
                    <GoldChart className="w-full h-full" />
                </Link>
            </div>
            <div
                aria-label="Market Tab"
                className="mt-6 flex flex-row scrollbar-none items-center gap-x-2 pb-4 overflow-x-auto whitespace-nowrap scrollbar-hide snap-x snap-mandatory overscroll-x-contain scrollbar-hide"
            >
                {marketTabs.map((tab, idx) => (
                    <div
                        key={idx}
                        className={`px-4 py-1 shrink-0 rounded-full border border-transparent transition-colors duration-300 text-white cursor-pointer snap-start ${activeMarketTab === tab ? "bg-[#1553e0]" : "bg-[#193d8f]"
                            }`}
                        onClick={() => setActiveMarketTab(tab)}
                    >
                        {tab}
                    </div>
                ))}
            </div>
            <Link
                href="/allmarkets"
                className="text-text-color inline-flex items-center gap-x-1 font-semibold text-[16px] transition-colors duration-200 hover:text-link-hover group"
            >
                <span>Explore all Markets</span>

                <ChevronRight
                    stroke="currentColor"
                    strokeWidth={1.5}
                    size={26}
                    className="transition-transform duration-200 "
                />
            </Link>

        </div>
    )
}

export default Marketdata
