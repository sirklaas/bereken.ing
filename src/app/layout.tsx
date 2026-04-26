import type { Metadata } from "next";
import { 
  Fjalla_One, 
  Cantarell, 
  Unica_One, 
  Crimson_Text, 
  Fugaz_One, 
  Work_Sans 
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Option 1 Fonts
const fjallaOne = Fjalla_One({ weight: "400", subsets: ["latin"], variable: "--font-fjalla" });
const cantarell = Cantarell({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-cantarell" });

// Option 2 Fonts
const unicaOne = Unica_One({ weight: "400", subsets: ["latin"], variable: "--font-unica" });
const crimsonText = Crimson_Text({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--font-crimson" });

// Option 3 Fonts
const fugazOne = Fugaz_One({ weight: "400", subsets: ["latin"], variable: "--font-fugaz" });
const workSans = Work_Sans({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--font-work-sans" });

export const metadata: Metadata = {
  title: "Typography Preview | bereken.ing",
  description: "Previewing user-requested typography combinations for bereken.ing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`
      ${fjallaOne.variable} 
      ${cantarell.variable} 
      ${unicaOne.variable} 
      ${crimsonText.variable} 
      ${fugazOne.variable} 
      ${workSans.variable}
    `}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
