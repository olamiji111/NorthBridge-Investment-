import React from "react";
import { MoneySectionPropery, paymentMethods } from "@/constants";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import LinkText from "@/components/shared/linktext";


const MoneySection = () => {
    const firstItem = MoneySectionPropery[0];
    const rest = MoneySectionPropery.slice(1);
    return (
        <section className="px-4 sm:px-6 relative overflow-hidden py-10 mt-4  bg-transparent">

            <h2 className='text-2xl sm:text-3xl md:text-4xl  ibm capitalize font-semibold'> Take control of your funds</h2>
            {/* arrangement for small screens */}
            <div className=" sm:hidden mt-6">
                <div className=" flex  flex-col items-start gap-y-1 ">
                    <Image
                        src={firstItem.imgPath}
                        alt="money section image"
                        width={100}
                        height={100}
                        priority
                        className="object-contain"

                    />
                    <h3 className="font-semibold text-[18px] text-shadow-white">{firstItem.title}</h3>
                    {firstItem.content?.map((c, idx) => (
                        <p key={idx} className="text-[16px] text-shadow-white"> {c}</p>
                    ))}

                    <Link
                        href="/learnmore"
                        className="text-text-color mt-4  inline-flex items-center gap-x-1 font-semibold text-sm transition-colors duration-200 hover:text-link-hover group"
                    >
                        <span>Learn More</span>

                        <ChevronRight
                            stroke="currentColor"
                            strokeWidth={1.5}
                            size={18}
                            className="transition-transform duration-200 "
                        />
                    </Link>
                </div>
                <div className=" flex flex-row py-6 gap-8 space-x-4 ">
                    {rest.map((item, idx) => (
                        <div key={idx} className="flex flex-col space-y-1">
                            <Image
                                src={item.imgPath}
                                alt="money section image"
                                width={60}
                                height={60}
                                priority
                                className="object-contain"
                            />
                            <h3 className="font-semibold text-[18px] text-shadow-white leading-6"> {item.title}</h3>

                        </div>
                    ))}
                </div>
            </div>

            <div className="hidden md:flex gap-x-8 space-x-2 items-start py-8  snap-start shrink-0">
                {MoneySectionPropery.map((item, idx) => (
                    <div key={idx} className="flex flex-col space-y-1">

                        {/* fixed image area */}
                        <div className="h-20 flex items-start">
                            <Image
                                src={item.imgPath}
                                alt="money section image"
                                width={idx === 0 ? 120 : 70}
                                height={60}
                                priority
                                className="object-contain"
                            />
                        </div>

                        <h3 className="font-semibold text-[18px] text-shadow-white leading-6">
                            {item.title}
                        </h3>
                        {Array.isArray(item.content) ? (
                            item.content.map((line, idx) => (
                                <p key={idx}>
                                    {line}
                                </p>
                            ))
                        ) : (
                            null
                        )}
                        {idx === 0 && (
                            <LinkText href="learn more" text="Learn more" className="mt-4" />
                        )}
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap py-6">
                <div className="h-px w-full bg-white rounded-none" />
                <div className="flex flex-row py-4 items-center justify-center gap-x-3 space-x-2">
                    {paymentMethods.map((imgPath, idx) => (
                        <div key={idx} className="flex items-start ">
                            <Image
                                src={imgPath}
                                alt="payment image"
                                width={`${idx === 1 ? 120 : 40}`}
                                height={`${idx === 1 ? 120 : 40}`}
                                className="object-contain"
                            />
                        </div>
                    ))}

                </div>
                <div className="h-px w-full bg-white rounded-none" />
            </div>

        </section>
    );
};

export default MoneySection;