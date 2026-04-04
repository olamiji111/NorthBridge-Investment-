import React, { useEffect, useRef } from "react";

declare global {
    interface Window {
        TradingView?: {
            widget: (config: Record<string, unknown>) => void;
        };
    }
}

interface TradingViewWidgetProps {
    symbol?: string;
    width?: string | number;
    height?: string | number;
}

const OilChartContainer: React.FC<TradingViewWidgetProps> = ({
    symbol = "OANDA:USOIL",
    width = "100%",
    height = 300,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check if TradingView script is already loaded
        const initWidget = () => {
            if (!containerRef.current || !window.TradingView) return;

            window.TradingView.widget({
                container_id: containerRef.current.id,
                width,
                height,
                symbol,
                interval: "60",
                timezone: "Etc/UTC",
                theme: "dark",
                style: "1",
                locale: "en",
                toolbar_bg: "#0c0c2c",
                enable_publishing: false,
                hide_side_toolbar: false,
                allow_symbol_change: true,
                details: true,
                hotlist: true,
                news: ["headlines"],
            });
        };

        if (!window.TradingView) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/tv.js";
            script.async = true;
            script.onload = initWidget;
            document.body.appendChild(script);
        } else {
            initWidget();
        }

        return () => {
            if (containerRef.current) containerRef.current.innerHTML = "";
        };
    }, [symbol, width, height]);

    return (
        <div
            ref={containerRef}
            id="tradingview-widget-container"
            className="mt-4 bg-[#0c0c2c] p-2 rounded-xl shadow-lg"
            style={{ width: width, height: height }}
        />
    );
};

export default OilChartContainer;