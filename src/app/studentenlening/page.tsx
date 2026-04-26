import type { Metadata } from "next";
import StudentLoanCalculator from "@/components/StudentLoanCalculator";
import AdSenseSlot from "@/components/AdSenseSlot";
import Sidebar from "@/components/Sidebar";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Studieschuld Berekenen 2026 | DUO Maandbedrag & Rente",
  description: "Bereken direct je maandelijke aflossing voor je studieschuld bij DUO. Inclusief 35-jaar en 15-jaar stelsels en impact van de huidige rente.",
};

export default function StudentLoanPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialCalculator",
    "name": "Studieschuld Calculator",
    "description": "Berekening van studieschuld aflossing bij DUO.",
    "url": "https://www.bereken.ing/studentenlening"
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
          
          <h3 style={{ marginBottom: "1rem" }}>DUO & Studieschuld</h3>
          <h1 style={{ marginBottom: "2rem" }}>Studieschuld <span style={{ color: "var(--primary-accent)" }}>Berekenen</span></h1>
          
          <StudentLoanCalculator />

          <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
            <h2 style={{ fontSize: "1.8rem" }}>Impact van rente op je schuld</h2>
            <p>
              Zelfs met de huidige renteverhogingen blijft de studieschuld vaak de 'goedkoopste' lening die je kunt hebben. 
              Onze tool berekent exact wat je maandelijks kwijt bent op basis van de Nibud-regels.
            </p>
            <AdSenseSlot id="inline-ad" format="fluid" />
          </div>

          <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
        </div>

      </div>
    </div>
  );
}
