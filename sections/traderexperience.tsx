import React from 'react'
import { beginnerTraderSteps, experiencedTraderSteps } from '@/constants';
import Image from "next/image";

const Traderexperience = () => {
    return (
        <section aria-label='Trader Steps' className='pt-8 px-4 sm:px-6 '>
            <h2 className='text-3xl ibm capitalize font-semibold'>Beginner trader?</h2>
            <div className='px-4 md:px-8 pt-6 border mt-6 bg-trader-card border-transparent rounded-3xl pb-12  shrink-0 shadow-[0px_-1rem_10rem_rgb(4,12,41)] '>
                <div className='flex flex-col gap-y-4 space-y-1 items-start md:flex-row md:justify-between md:items-center md:gap-x-10 text-card-text-color'>
                    {beginnerTraderSteps.map((item, idx) => (
                        <div key={idx} className='flex flex-row items-center md:items-start md:flex-col  '>
                            <Image
                                src={item.imgPath}
                                alt="Trader steps icons"
                                width={100}
                                height={100}
                                priority
                                className='object-contain'
                            />
                            <div className='flex flex-col gap-y-1 items-start max-w-[70%] md:max-w-full '>
                                <h3 className=' font-bold text-[18px] md:text-[18px] leading-normal'> {item.title}</h3>
                                <span className='leading-7 text-[16px] md:text-[19px]'>{item.content}</span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className='py-12 mt-4'>

                <h2 className='text-3xl font-semibold capitalize  ibm'> Experienced trader? </h2>
                <div className='relative px-4 md:px-8 pt-6 border  mt-6 border-transparent rounded-3xl pb-12 bg-clip-padding  shrink-0 bg-[linear-gradient(150deg,#2a265c_0%,#080c1b_51%,#2a265c_100%)]  '>
                    <div
                        className="absolute inset-0 
               bg-[url('/assets/images/pattern-dark.svg')] 
                bg-center  z-0 pointer-events-none opacity-80"
                    />
                    <div className=' flex flex-col gap-y-4 space-y-1 items-start md:flex-row md:justify-between md:items-center md:gap-x-10 text-card-text-color'>
                        {experiencedTraderSteps.map((item, idx) => (
                            <div key={idx} className='z-2 flex flex-row items-center md:items-start md:flex-col  '>
                                <Image
                                    src={item.imgPath}
                                    alt="Trader steps icons"
                                    width={100}
                                    height={100}
                                    priority
                                    className='object-contain'
                                />
                                <div className='flex flex-col gap-y-1 items-start max-w-[70%] md:max-w-full '>
                                    <h3 className=' font-bold text-[18px] md:text-[18px] leading-normal'> {item.title}</h3>
                                    <span className='leading-7 text-[16px] md:text-[19px]'>{item.content}</span>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Traderexperience;
