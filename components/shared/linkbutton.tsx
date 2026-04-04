import React from 'react';
import Link from "next/link";

interface LinkButtonProps {
    className?: string;
    text: string;
    href: string;
}

const LinkButton = ({ className = "", text, href }: LinkButtonProps) => {
    return (
        <Link
            href={href}
            className={`
                relative inline-flex items-center justify-center
                px-10 py-3
                text-white text-[1rem] font-semibold
                whitespace-nowrap rounded-2xl
                border-2 hover:border-1 border-white/80
                bg-[linear-gradient(90deg,_#177cfe_0%,_#1860e3_34.62%,_#1860e3_72.24%,_#177cfe_100%)]
                shadow-[0_0_14px_0_#1860e3,inset_0_0_6px_0_hsla(0,0%,100%,0.85)]
                cursor-pointer
                transition-all duration-200 ease-in-out
                will-change-transform
                hover:scale-[1.02]
                active:scale-[0.98]
                ${className}
            `}
        >
            {/* Glow layer */}
            <span
                className="
                    absolute inset-0 -z-10 rounded-2xl
                    bg-[linear-gradient(90deg,_rgba(19,220,255,0.65)_9.48%,_rgba(38,147,254,0.65)_49.31%,_rgba(42,82,255,0.65)_97.2%)]
                    blur-[11px]
                "
            />

            <span className="relative z-10">{text}</span>
        </Link>
    )
}

export default LinkButton;