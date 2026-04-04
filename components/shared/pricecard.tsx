import React, { useEffect, useState } from "react";
import { fetchPrice } from "@/utils/index";

interface PriceProps {
    symbol: string;
}

const PriceCard = ({ symbol }: PriceProps) => {
    const [price, setPrice] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!symbol) return;

        async function loadPrice() {
            setLoading(true);
            const latest = await fetchPrice(symbol);
            setPrice(latest);
            setLoading(false);
        }

        loadPrice();

        const interval = setInterval(loadPrice, 60000); // refresh every 60s
        return () => clearInterval(interval);
    }, [symbol]);

    return (


        <span className="font-bold text-lg">
            {loading ? "…" : price !== null ? price.toFixed(2) : "N/A"}
        </span>

    );
};

export default PriceCard;