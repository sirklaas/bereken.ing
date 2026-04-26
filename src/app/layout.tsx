import type { Metadata } from "next";
import { Fugaz_One, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Only loading the winner fonts to ensure production stability
const fugazOne = Fugaz_One({ weight: "400", subsets: ["latin"], variable: "--font-fugaz" });
const workSans = Work_Sans({ weight: ["400", "500", "600", "700", "800"], subsets: ["latin"], variable: "--font-work-sans" });

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
    <html lang="nl" className={`${fugazOne.variable} ${workSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
