import type { Metadata } from "next";
import { IBM_Plex_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { url } from "inspector/promises";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const ibmSans = IBM_Plex_Sans({
  variable: "--font-ibm",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoTraderInc",
  description: "AutoTraderInc is an AI-powered automated trading platform using OrionAI to analyze global markets and financial instruments in real time. It executes smart trades across stocks, ETFs, and crypto, helping investors optimize portfolios, reduce risk, and capitalize on market opportunities with advanced algorithmic precision.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "AutoTraderInc",
    description: "AutoTraderInc is an AI-powered automated trading platform using OrionAI to analyze global markets and financial instruments in real time. It executes smart trades across stocks, ETFs, and crypto, helping investors optimize portfolios, reduce risk, and capitalize on market opportunities with advanced algorithmic precision.",
    url: "https://autotraderai.online",
    siteName: "AutoTraderInc",
    images: [
      {
        url: "/preview.png",
        width: 256,
        height: 256,
        alt: "AutoTraderInc",
      }
    ],
    type: "website",
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
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={`${ibmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}