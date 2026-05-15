"use client";

import { useEffect } from "react";

declare global {
    interface Window {
        Tawk_API?: any;
        Tawk_LoadStart?: Date;
    }
}

export default function SupportPage() {
    useEffect(() => {
        window.Tawk_LoadStart = new Date();

        const script = document.createElement("script");
        script.src =
            "https://embed.tawk.to/6a069e0d9f3e811c3945a95f/1joktiq2n";
        script.async = true;
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");

        script.onload = () => {
            window.Tawk_API = window.Tawk_API || {};

            const initChat = () => {
                // 🔥 remove floating bubble
                window.Tawk_API?.hideWidget?.();

                // 🔥 open full chat window
                window.Tawk_API?.maximize?.();

                // 🔥 force focus chat (best effort)
                window.Tawk_API?.setAttributes?.({
                    "default_view": "chat",
                });
            };

            // Tawk delay-safe execution
            setTimeout(initChat, 800);
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div className="h-dvh w-full overflow-hidden" />;
}