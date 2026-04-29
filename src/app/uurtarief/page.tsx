import type { Metadata } from "next";
import RateCalculator from "@/components/RateCalculator";
import AdSenseSlot from "@/components/AdSenseSlot";
import AffiliateCTA from "@/components/AffiliateCTA";
import ToolLayout from "@/components/ToolLayout";
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
    <ToolLayout 
      intro="Werk & Ondernemen"
      title="Uurtarief ZZP"
      subtitle="Bereken welk uurtarief je moet vragen om je gewenste netto inkomen te behalen."
      topic="uurtarief"
    >
      <JsonLd data={schema} />

      

      <RateCalculator />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Bepaal je waarde als ondernemer</h2>
        <p>
          Een goed uurtarief dekt niet alleen je salaris, maar ook je pensioen, verzekeringen en vakantiedagen. 
          Onze calculator houdt rekening met alle verborgen kosten van het ondernemerschap.
        </p>
        <AdSenseSlot id="inline-ad" format="fluid" />
      </div>

      <AffiliateCTA topic="uurtarief" />

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
