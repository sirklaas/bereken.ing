import type { Metadata } from "next";
import FixedCostsCalculator from "@/components/FixedCostsCalculator";
import AdSenseSlot from "@/components/AdSenseSlot";
import Sidebar from "@/components/Sidebar";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Vaste Lasten Berekenen 2026 | Maandelijkse vaste kosten",
  description: "Bereken snel je totale vaste lasten per maand, inclusief huur, nutsvoorzieningen, verzekeringen en abonnementen.",
};

export default function FixedCostsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialCalculator",
    "name": "Vaste Lasten Calculator",
    "description": "Tool om de maandelijkse vaste lasten te berekenen.",
    "url": "https://www.bereken.ing/vaste-lasten"
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

          <h3 style={{ marginBottom: "1rem" }}>Financiën & Overzicht</h3>
          <h1 style={{ marginBottom: "2rem" }}>Vaste Lasten <span style={{ color: "var(--primary-accent)" }}>Berekenen</span></h1>

          <FixedCostsCalculator />

          <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
            <h2 style={{ fontSize: "1.8rem" }}>Waarom vaste lasten bijhouden?</h2>
            <p>
              Een duidelijk overzicht van je vaste kosten helpt je om je budget beter te beheren, onnodige uitgaven te vermijden en een realistisch financieel plan op te stellen.
            </p>
            <AdSenseSlot id="inline-ad" format="fluid" />
          </div>

          <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
        </div>

      </div>
    </div>
  );
}
