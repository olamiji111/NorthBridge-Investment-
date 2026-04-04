import { ChevronRight } from 'lucide-react';
import React from 'react'
import Link from "next/link";

interface LinkTextProps {
    className?: string;
    text: string;
    href: string;
    iconSize?: number;
}
const Linktext = ({ className, text, href, iconSize }: LinkTextProps) => {
    return (
        <Link
            href={`/${href}`}
            className={`text-text-color  inline-flex items-center gap-x-0.5 font-semibold text-sm transition-colors duration-200 hover:text-link-hover group  ${className}`}
        >
            <span>{text} </span>

            <ChevronRight
                stroke="currentColor"
                strokeWidth={1.5}
                size={iconSize ?? 18}
                className="transition-transform duration-200 "
            />
        </Link>
    )
}

export default Linktext;
