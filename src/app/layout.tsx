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
    icon: "/icon.png?v=5.7",
    apple: "/apple-icon.png?v=5.7",
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
        {/* Google Consent Mode v2 Defaults */}
        <Script id="google-consent-mode" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 2000
            });
          `}
        </Script>

        {/* Google AdSense Auto Ads - Native Tag to avoid data-nscript issues */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6805783605124617"
          crossOrigin="anonymous"
        ></script>
        <script dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-6805783605124617",
            enable_page_level_ads: true
          });`
        }} />

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
        <ConsentBanner />
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
