export async function fetchPrice(symbol: string): Promise<number | null> {
    try {
        const API_KEY = "c3cdd66430214464861d6aa860ec1eb9";
        const res = await fetch(`https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${API_KEY}`);
        const data = await res.json();

        if (!data || !data.close) {
            console.error("No price returned for symbol:", symbol, data);
            return null;
        }

        return parseFloat(data.close);
    } catch (err) {
        console.error("Error fetching price:", err);
        return null;
    }
}