import type { Metadata } from "next";
import { Fugaz_One, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsentBanner from "@/components/ConsentBanner";
import Script from "next/script";
import { AFFILIATE_CONFIG } from "@/config/affiliateConfig";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const fugazOne = Fugaz_One({ weight: "400", subsets: ["latin"], variable: "--font-fugaz" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "bereken.ing | De slimste rekentools",
  description: "Vlijmscherpe berekeningen voor elke vraag. Van hypotheek tot studieschuld.",
  icons: {
    icon: "/icon.png?v=9.6",
    apple: "/apple-icon.png?v=9.6",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${fugazOne.variable} ${jakarta.variable}`}>
      <head>
        {/* Google AdSense Auto Ads - Highest Priority */}
        <Script
          id="adsense-init"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6805783605124617"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        {/* 
            Option A: Letting Google Funding Choices handle consent 
            We disable the custom banner and manual consent defaults to avoid TCF conflicts.
        */}
      </head>
      <body>
        {/* <ConsentBanner /> */}
        <a href="#main-content" className="skip-link">Skip naar content</a>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Daisycon Auto-linking Automation */}
        <Script 
          id="daisycon-autolink"
          src={`https://m.daisycon.com/m.js?m=${AFFILIATE_CONFIG.mediaId}&v=1.1&t=1`}
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
