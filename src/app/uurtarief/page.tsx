import type { Metadata } from "next";
import RateCalculator from "@/components/RateCalculator";
import AdSenseSlot from "@/components/AdSenseSlot";
import Sidebar from "@/components/Sidebar";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Uurtarief Berekenen als ZZP | Freelance Calculator 2026",
  description: "Bereken eenvoudig welk uurtarief je moet vragen als freelancer of ZZP'er om je gewenste netto inkomen te behalen.",
};

export default function RatePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialCalculator",
    "name": "ZZP Uurtarief Calculator",
    "description": "Tool voor het berekenen van het ideale uurtarief voor zelfstandigen.",
    "url": "https://www.bereken.ing/uurtarief"
  };

  return (
    <div className="container" style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>
      <JsonLd data={schema} />

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "250px 1fr", 
        gap: "5rem",
        alignItems: "start" 
      }}>
        
        <Sidebar />

        <div>
          <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
          
          <h3 style={{ marginBottom: "1rem" }}>Ondernemen & ZZP</h3>
          <h1 style={{ marginBottom: "2rem" }}>Uurtarief <span style={{ color: "var(--primary-accent)" }}>Berekenen</span></h1>
          
          <RateCalculator />

          <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
            <h2 style={{ fontSize: "1.8rem" }}>Bepaal je waarde als ondernemer</h2>
            <p>
              Een goed uurtarief dekt niet alleen je salaris, maar ook je pensioen, verzekeringen en vakantiedagen. 
              Onze calculator houdt rekening met alle verborgen kosten van het ondernemerschap.
            </p>
            <AdSenseSlot id="inline-ad" format="fluid" />
          </div>

          <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
        </div>

      </div>
    </div>
  );
}
