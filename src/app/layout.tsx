import type { Metadata } from "next";
import { Fugaz_One, Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { AFFILIATE_CONFIG } from "@/config/affiliateConfig";

const fugazOne = Fugaz_One({ weight: "400", subsets: ["latin"], variable: "--font-fugaz" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "bereken.ing | De slimste rekentools",
  description: "Vlijmscherpe berekeningen voor elke vraag. Van hypotheek tot studieschuld.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${fugazOne.variable} ${workSans.variable} ${inter.variable}`}>
      <head>
        {/* Google AdSense Auto Ads */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6805783605124617"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Daisycon Auto-linking Automation */}
        <Script 
          id="daisycon-autolink"
          src={`//ds1.nl/m.js?m=${AFFILIATE_CONFIG.mediaId}&v=1.1&t=1`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
