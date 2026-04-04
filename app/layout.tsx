import type { Metadata } from "next";
import { IBM_Plex_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const ibmSans = IBM_Plex_Sans({
  variable: "--font-ibm",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "NorthBridge Investment Capitals",
  description: "NorthBridge Investment Capitals - secure , efficient and intelligent trading playform offering stocks, ETFS, crypto wallets, real-time market data, and AI powered auto-trading for investors, Manage Trades, track portfolios, and make informed financial dcisions covertly with ease, trading tools for a seamless investment experience.",
  icons: {

  },
  other: {
    'theme-color': '#040c29',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={` ${ibmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
