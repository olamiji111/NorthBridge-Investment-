import React from 'react'
import Image from "next/image";
import { FlagPath } from '@/constants';
import { MessageCircle, Mail } from "lucide-react";
import Link from "next/link";
import Linktext from '@/components/shared/linktext';

const Contact = () => {
    return (

        <section aria-label="Messsage Us" className=' py-8 px-4 sm:px-6 flex-col flex items-center md:items-start justify-center'>
            <div className='relative  flex md:hidden flex-col gap-y-3 space-y-1 sans items-center justify-center '>
                <h2 className='text-3xl md:text-4xl font-[500]  ibm'>
                    We&apos;re here for you
                </h2>
                <p className='text-center  leading-5 text-[16px] sm:text-[17px] md:text-[19px]'>
                    Professional customer service by human agents, whenever you need it.
                </p>



                <div
                    className="
                        relative z-10
                        mx-auto my-0
                        flex items-center justify-center
                        w-full w-[29.25rem]
                        rounded-[1.5rem]
                        px-6 pt-8 pb-[2.625rem]
                        bg-[rgba(175,194,255,0.16)]
                        backdrop-blur-[0.3125rem]
                        border border-white/10
                        overflow-hidden
                    "
                >
                    <div
                        className="
                            absolute
                            left-[-10%]
                            top-[-40%]
                            w-[120%]
                            h-[175%]
                            -z-10
                            bg-[url('/assets/images/support-illustration-backlights.svg')]
                            bg-center
                            bg-no-repeat
                            bg-[length:110%]
                            pointer-events-none
                            opacity-90
                            rounded-3xl
                            
                        "
                    />
                    <div className="flex flex-col items-start gap-4 opacity-80 w-full">
                        <div className=" flex w-full items-end justify-end gap-2 self-end animate-[fadeInUp_1s_ease-out_forwards] [animation-delay:0.1s]">
                            <div className="relative max-w-[80%] rounded-2xl bg-[#e8f5ff] px-3 pt-3 pb-6 text-sm text-[#052fce]">
                                <div
                                    className="
            absolute bottom-0 right-[-7px] h-[1.625rem] w-[1.625rem] bg-[#e8f5ff] -z-10
        "
                                    style={{
                                        clipPath:
                                            'path("M19 14.0004V0H0V14.5L11.1838 21.6452C13.655 23.224 14.8906 24.0135 16.2201 24.3253C17.3956 24.601 18.6182 24.6071 19.7964 24.343C21.1289 24.0444 22.3723 23.2673 24.8591 21.713L26 21C22.134 21 19 17.8664 19 14.0004Z")',
                                    }}
                                />
                                <strong className='font-bold sans'> Anna, </strong>
                                <br />
                                <span> Hi, can you help me ?</span>

                            </div>
                            <div className='max-h-20'>
                                <Image
                                    alt="user agent"
                                    src="/assets/images/support-user-icon.svg"
                                    width={35}
                                    height={35}
                                    loading='lazy'
                                    className='object-contain'
                                />
                            </div>
                        </div>
                        <div
                            className="flex w-full relative items-end gap-2 justify-start flex-row-reverse animate-[fadeInUp_1s_ease-out_forwards] [animation-delay:0.8s]"
                        >
                            <div
                                className="flex w-full items-end gap-2 justify-start flex-row-reverse animate-[fadeInUp_1s_ease-out_forwards] [animation-delay:0.8s]"
                            >
                                <div className="relative">
                                    <div className="relative max-w-[80%] rounded-2xl bg-[#e8f5ff] px-3 py-3 text-sm text-[#052fce]">
                                        <div
                                            className="absolute bottom-0 left-[-6px] h-[1.625rem] w-[1.625rem] bg-[#e8f5ff] -z-10"
                                            style={{
                                                clipPath:
                                                    'path("M19 14.0004V0H0V14.5L11.1838 21.6452C13.655 23.224 14.8906 24.0135 16.2201 24.3253C17.3956 24.601 18.6182 24.6071 19.7964 24.343C21.1289 24.0444 22.3723 23.2673 24.8591 21.713L26 21C22.134 21 19 17.8664 19 14.0004Z")',
                                                transform: "scaleX(-1)",
                                            }}
                                        />
                                        <strong className='font-bold'> Jacob, NIC.</strong>
                                        <br />
                                        <span> Sure! How can I assist you today?</span>
                                    </div>

                                    <div className="absolute -bottom-2 left-4 flex gap-[0.125rem]">
                                        {FlagPath.map((path, idx) => (
                                            <div
                                                key={idx}
                                                className="shrink-0 h-5 w-5 rounded-full bg-center bg-cover bg-[#e8f5ff]"
                                                style={{ backgroundImage: `url(${path})` }}
                                            />
                                        ))}
                                        <span className="flex items-end justify-center text-[11px] font-bold text-[#052fce] bg-white border-2 border-[#e8f5ff] rounded-[0.625rem] w-[1.875rem] unicode-bidi-plaintext">
                                            +10
                                        </span>
                                    </div>
                                </div>

                                <div className='max-h-20'>
                                    <Image
                                        alt="support agent"
                                        src="/assets/images/support-agent-icon.svg"
                                        width={35}
                                        height={35}
                                        loading='lazy'
                                        className='object-contain'
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=" py-2 flex flex-row items-center justify-center gap-x-2 space-x-1">
                    <Link href="/" className='px-5 py-3  rounded-[1rem] flex flex-row items-center space-x-1 text-[#1844b5] border-transparent  bg-[#eef7ff] cursor-pointer hover:bg-[#bcdeff] font-bold transition-colors duration-300 '>
                        <MessageCircle strokeWidth={2} />
                        <span className='ibm'> Chat</span>
                    </Link>
                    <div className='flex items-start text-[#8ecaff] hover:text-[#bcdeff] cursor-pointer transition-colors duration-150'>
                        <Mail />
                    </div>
                </div>
                <Linktext href="faq" text="Visit our FAQs" className='font-bold text-[16px] ' iconSize={21} />
            </div>

            {/* Illustration for larger screens */}
            <div className='relative w-full md:flex hidden flex-row  sans gap-x-10 space-x-4  items-start    '>
                <div
                    className="
                        relative z-10
                        mx-auto my-0
                        flex items-center justify-center
                         w-[29.25rem] 
                         
                        rounded-[1.5rem]
                        px-6 pt-8 pb-[2.625rem]
                        bg-[rgba(175,194,255,0.16)]
                        backdrop-blur-[0.3125rem]
                        border border-white/10
                        overflow-hidden
                    "
                >
                    <div
                        className="
                            absolute
                            left-[-10%]
                            top-[-40%]
                            w-[120%]
                            h-[175%]
                            -z-10
                            bg-[url('/assets/images/support-illustration-backlights.svg')]
                            bg-center
                            bg-no-repeat
                            bg-[length:110%]
                            pointer-events-none
                            opacity-90
                            rounded-3xl
                            
                        "
                    />
                    <div className="flex flex-col items-start gap-4 opacity-80 w-full">
                        <div className=" flex w-full items-end justify-end gap-2 self-end animate-[fadeInUp_1s_ease-out_forwards] [animation-delay:0.1s]">
                            <div className="relative max-w-[80%] rounded-2xl bg-[#e8f5ff] px-3 pt-3 pb-6 text-sm text-[#052fce]">
                                <div
                                    className="
            absolute bottom-0 right-[-7px] h-[1.625rem] w-[1.625rem] bg-[#e8f5ff] -z-10
        "
                                    style={{
                                        clipPath:
                                            'path("M19 14.0004V0H0V14.5L11.1838 21.6452C13.655 23.224 14.8906 24.0135 16.2201 24.3253C17.3956 24.601 18.6182 24.6071 19.7964 24.343C21.1289 24.0444 22.3723 23.2673 24.8591 21.713L26 21C22.134 21 19 17.8664 19 14.0004Z")',
                                    }}
                                />
                                <strong className='font-bold sans'> Anna, </strong>
                                <br />
                                <span> Hi, can you help me ?</span>

                            </div>
                            <div className='max-h-20'>
                                <Image
                                    alt="user agent"
                                    src="/assets/images/support-user-icon.svg"
                                    width={35}
                                    height={35}
                                    loading='lazy'
                                    className='object-contain'
                                />
                            </div>
                        </div>
                        <div
                            className="flex w-full relative items-end gap-2 justify-start flex-row-reverse animate-[fadeInUp_1s_ease-out_forwards] [animation-delay:0.8s]"
                        >
                            <div
                                className="flex w-full items-end gap-2 justify-start flex-row-reverse animate-[fadeInUp_1s_ease-out_forwards] [animation-delay:0.8s]"
                            >
                                <div className="relative">
                                    <div className="relative max-w-[80%] rounded-2xl bg-[#e8f5ff] px-3 py-3 text-sm text-[#052fce]">
                                        <div
                                            className="absolute bottom-0 left-[-6px] h-[1.625rem] w-[1.625rem] bg-[#e8f5ff] -z-10"
                                            style={{
                                                clipPath:
                                                    'path("M19 14.0004V0H0V14.5L11.1838 21.6452C13.655 23.224 14.8906 24.0135 16.2201 24.3253C17.3956 24.601 18.6182 24.6071 19.7964 24.343C21.1289 24.0444 22.3723 23.2673 24.8591 21.713L26 21C22.134 21 19 17.8664 19 14.0004Z")',
                                                transform: "scaleX(-1)",
                                            }}
                                        />
                                        <strong className='font-bold'> Jacob, NIC.</strong>
                                        <br />
                                        <span> Sure! How can I assist you today?</span>
                                    </div>

                                    <div className="absolute -bottom-2 left-4 flex gap-[0.125rem]">
                                        {FlagPath.map((path, idx) => (
                                            <div
                                                key={idx}
                                                className="shrink-0 h-5 w-5 rounded-full bg-center bg-cover bg-[#e8f5ff]"
                                                style={{ backgroundImage: `url(${path})` }}
                                            />
                                        ))}
                                        <span className="flex items-end justify-center text-[11px] font-bold text-[#052fce] bg-white border-2 border-[#e8f5ff] rounded-[0.625rem] w-[1.875rem] unicode-bidi-plaintext">
                                            +10
                                        </span>
                                    </div>
                                </div>

                                <div className='max-h-20'>
                                    <Image
                                        alt="support agent"
                                        src="/assets/images/support-agent-icon.svg"
                                        width={35}
                                        height={35}
                                        loading='lazy'
                                        className='object-contain'
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='relative max-w-[60%]  md:flex hidden flex-col gap-y-3 space-y-1 sans items-start justify-start '>
                    <h2 className='text-3xl md:text-4xl font-[500]  ibm'>
                        We&apos;re here for you
                    </h2>
                    <p className='  leading-5 text-[15px] md:text-[18px]'>
                        Professional customer service by human agents, whenever you need it.
                    </p>

                    <div className=" py-4 flex flex-row items-center justify-center gap-x-2 space-x-1">
                        <Link href="/" className='px-5 py-3  rounded-[1rem] flex flex-row items-center space-x-1 text-[#1844b5] border-transparent  bg-[#eef7ff] cursor-pointer hover:bg-[#bcdeff] font-bold transition-colors duration-300 '>
                            <MessageCircle strokeWidth={2} />
                            <span className='ibm'> Chat</span>
                        </Link>
                        <div className='flex items-start text-[#8ecaff] hover:text-[#bcdeff] cursor-pointer transition-colors duration-150'>
                            <Mail />
                        </div>
                    </div>
                    <Linktext href="faq" text="Visit our FAQs" className='font-bold text-[16px] ' iconSize={21} />

                </div>
            </div>
        </section>
    )
}

export default Contact;
