import type { Metadata } from "next";
import MortgageCalculator from "@/components/MortgageCalculator";
import AdSenseSlot from "@/components/AdSenseSlot";
import Sidebar from "@/components/Sidebar";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Maximale Hypotheek Berekenen 2026 | Snel & Onafhankelijk",
  description: "Bereken direct hoeveel je maximaal kunt lenen voor je woning in 2026. Onafhankelijk advies en vlijmscherpe berekeningen.",
};

export default function MortgagePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialCalculator",
    "name": "Hypotheek Calculator",
    "description": "Berekening van maximale hypotheek en maandlasten.",
    "url": "https://www.bereken.ing/hypotheek"
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
        
        {/* Navigation Sidebar */}
        <Sidebar />

        {/* Focused Main Content Area */}
        <div>
          <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
          
          <h3 style={{ marginBottom: "1rem" }}>Hypotheek & Wonen</h3>
          <h1 style={{ marginBottom: "2rem" }}>Maximale <span style={{ color: "var(--primary-accent)" }}>Hypotheek</span></h1>
          
          <MortgageCalculator />

          <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
            <h2 style={{ fontSize: "1.8rem" }}>Eenvoudig inzicht in je leencapaciteit</h2>
            <p>
              Hoeveel je kunt lenen hangt af van je inkomen, eventuele schulden en de waarde van de woning. 
              Onze tool geeft je direct een indicatie op basis van de Nibud-normen voor 2026.
            </p>
            <AdSenseSlot id="inline-ad" format="fluid" />
          </div>

          <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
        </div>

      </div>
    </div>
  );
}
