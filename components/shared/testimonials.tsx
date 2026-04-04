import { Testimonial } from "@/types/type";
import React, { useEffect, useState } from "react";
import { TrustPilotAllStar } from "../icons/icons";

export const TestimnialSection1 = ({ item }: { item: Testimonial }) => {
    return (
        <div className="shrink-0 snap-start bg-white text-[#0c2780] z-20 px-4 border border-transparent w-[340px] py-4 h-52 rounded-[1.3rem] flex flex-col justify-between">

            <div className="flex flex-col gap-y-3 items-start">
                <TrustPilotAllStar className="h-[1rem] w-auto shrink-0" />
                <h3 className="font-bold text-xs truncate">{item.title}</h3>
                <p className="text-sm font-normal leading-normal break-words whitespace-normal">
                    {item.content}
                </p>
            </div>

            <div className="flex flex-col w-full">
                <div className="h-px w-full bg-[#0c2780] mb-2" />
                <div className="flex flex-row items-center gap-x-1">
                    <span className="text-xs font-[400]">{item.author}, </span>
                    <span className="text-xs">{item.date}</span>
                </div>
            </div>

        </div>
    );
};