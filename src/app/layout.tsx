import type { Metadata } from "next";
import { Fugaz_One, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { AFFILIATE_CONFIG } from "@/config/affiliateConfig";

const fugazOne = Fugaz_One({ weight: "400", subsets: ["latin"], variable: "--font-fugaz" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

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
    <html lang="nl" className={`${fugazOne.variable} ${jakarta.variable}`}>
      <head>
        {/* Google AdSense Auto Ads */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6805783605124617"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* LinkPizza Affiliate Automation */}
        <Script id="linkpizza-script" strategy="afterInteractive">
          {`
            (function(p,z,Z){
                z=p.createElement("script");z.async=1;
                z.src="https://pzz.io/pzz.js?uid=103571&host="+p.domain;
                (p.head||p.documentElement).insertBefore(z,Z);
            })(document);
          `}
        </Script>
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip naar content</a>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Daisycon Auto-linking Automation */}
        <Script 
          id="daisycon-autolink"
          src={`https://m.daisycon.com/m.js?m=${AFFILIATE_CONFIG.mediaId}&v=1.1&t=1`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
