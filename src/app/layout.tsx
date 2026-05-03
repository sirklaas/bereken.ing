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
    icon: "/icon.png?v=6.0",
    apple: "/apple-icon.png?v=6.0",
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
            
            var savedConsent = null;
            try {
              savedConsent = localStorage.getItem('google_consent');
            } catch (e) {}

            var defaults = {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            };

            if (savedConsent === 'all') {
              defaults = {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted'
              };
            } else if (savedConsent === 'minimal') {
              defaults.analytics_storage = 'granted';
            }

            gtag('consent', 'default', defaults);
          `}
        </Script>

        {/* Google AdSense Auto Ads - Native Tag to avoid data-nscript issues */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6805783605124617"
          crossOrigin="anonymous"
        ></script>

        {/* Daisycon Auto-linking Automation is handled at the bottom of the body */}
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
