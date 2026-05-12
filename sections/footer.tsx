import React from 'react'
import { SocialMediaIcons, paymentMethodsIcons, footerLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import LinkButton from '@/components/shared/linkbutton';
import { AutoTraderLogo } from '@/components/icons/icons';


function Footer() {

    return (

        <div className='pt-12 w-full mt-2 flex flex-col px-4 sm:px-6  max-w-full'>
            <div className='flex flex-col gap-y-8 items-center justify-center  md:flex-row-reverse md:justify-between w-full'>
                <div className='flex  flex-row space-x-1 items-center'>
                    {SocialMediaIcons.map((item, idx) => (
                        <Link href={item.href} key={idx} rel='noopener noreferrer' target='_blank' className='rounded-full border-none p-1 cursor-pointer transition-transform duration-300 ease-out hover:scale-110'>
                            <Image
                                src={item.imgPath}
                                alt={`social media icon ${idx + 1}`}
                                width={32}
                                height={32}
                            />

                        </Link>
                    ))}
                </div>
                <div className='flex  flex-row space-x-2 flex-wrap  items-center justify-center gap-y-3 md:gap-y-2'>
                    {paymentMethodsIcons.map((item, idx) => (
                        <Image
                            key={idx}
                            src={item}
                            alt={`payment method icon ${idx + 1}`}
                            width={100}
                            height={100}
                            className='object-contain'
                            color='white'


                        />
                    ))}
                </div>
            </div>
            <div className='w-full pt-8 mt-2  px-4 md:px-0 text-[14px] sm:text-[15px] md:text-sm text-justify text-white flex flex-col gap-y-3.5 md:gap-y-5 items-start'>
                <p> Investing for 5+ years can boost your chances of gains over cash savings. Values may rise or fall, so you could get back less. Relax—our Bridge Bot trades automatically with expert precision.</p>

                <p> AutoTraderInc Ltd is a trading name of AutoTradeInc Ltd., registered in the US. All services are provided under US regulations.</p>

                <p>
                    AutoTraderInc Ltd is registered in England and Wales (
                    <span className='text-medium-blue cursor-pointer hover:underline'>Company number 09882007</span>
                    ). Registered address: 10 Bridge Street, London, EC4N 1AB. plus500Bot Ltd. is authorised and regulated by the Financial Conduct Authority (
                    <span className='text-medium-blue cursor-pointer hover:underline'>Firm reference number 704567</span>
                    ).
                </p>

                <p>
                    AutoTraderInc Ltd. is registered in Australia (
                    <span className='text-medium-blue cursor-pointer hover:underline'>ABN 23 727 219 821</span>
                    ). Registered address: Level 5, 88 King Street, Melbourne VIC 3000. plus500Bot AU Pty Ltd. is authorised and regulated by the Australian Securities and Investments Commission (
                    <span className='text-medium-blue cursor-pointer hover:underline'>AFSL 2189092</span>
                    ).
                </p>

                <p>
                    AutoTraderInc EU GmbH is registered in Germany (
                    <span className='text-medium-blue cursor-pointer hover:underline'>Company number HRB 482761</span>
                    ). Registered address: Königsallee 92A, 40212 Düsseldorf, Germany. plus500Bot EU GmbH is authorised and regulated by the German Federal Financial Supervisory Authority (
                    <span className='text-medium-blue cursor-pointer hover:underline'>BaFin ID 9472018</span>
                    ).
                </p>

                <p>
                    AutoTraderInc is registered in Bulgaria (
                    <span className='text-medium-blue cursor-pointer hover:underline'>Company number 209874561</span>
                    ). Registered address: 18 Vitosha Boulevard, floor 6, 1000 Sofia, Bulgaria. plus500Bot Ltd. is authorised and regulated by the Financial Supervision Commission (
                    <span className='text-medium-blue cursor-pointer hover:underline'>License number RG-03-4821</span>
                    ).
                </p>

                <p>
                    AutoTraderInc is registered in Cyprus (
                    <span className='text-medium-blue cursor-pointer hover:underline'>Company number HE 582941</span>
                    ). Registered address: 12 Archbishop Makarios III Avenue, 3rd floor, Office 4, 3030, Limassol, Cyprus. plus500Bot Markets Ltd. is authorised and regulated by the Cyprus Securities and Exchange Commission (
                    <span className='text-medium-blue cursor-pointer hover:underline'>License number 472/26</span>
                    ).
                </p>

                <p>
                    The information on this site is intended for individuals in jurisdictions where AutoTraderInc is permitted to offer its services. Eligibility may vary depending on local laws and regulatory requirements. Residents of restricted or unsupported jurisdictions will be informed accordingly and may not be eligible to register or trade on our platform.
                </p>
                <div className=" px-4 md:px-0 h-[0.069rem] w-full bg-zinc-200 relative mt-6  max-w-full " />
            </div>
            <div className=' flex py-2  pb-24 flex-col items-center justify-center gap-y-6 w-full'>

                <Link href="/" aria-label='AutoTradeInc AI Investment Home page' className='w-full flex items-center pl-14 justify-center  cursor-pointer   duration-300 transition-all'>
                    <AutoTraderLogo className='size-md' />

                </Link>
                <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-0 w-full mx-auto">
                    {footerLinks.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <Link
                                href={item.href}
                                className="px-3 text-[13px] text-white/90 hover:text-medium-blue hover:underline transition-colors duration-200"
                            >
                                {item.name}
                            </Link>

                            {idx !== footerLinks.length - 1 && (
                                <span className="h-4 w-px bg-white/25" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex text-center  flex-row space-x-2 items-center text-[13px] sm:text-[14px]   text-white ">
                    <span> © 2012 - {new Date().getFullYear()} NIC Ltd,  All Rights reserved.</span>

                </div>
            </div>
            <div className="fixed bottom-4 left-1/2 z-[9999] transform -translate-x-1/2">
                <LinkButton
                    text="Start Trading"
                    href="https://app.autotraderai.online"
                    className="w-56 h-11 text-[15px] rounded-xl"
                />
            </div>
        </div>

    )
}

export default Footer;
