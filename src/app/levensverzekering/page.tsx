import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";

export const metadata: Metadata = {
  title: "Levensverzekering Berekenen 2026 | Overlijdensrisico",
  description: "Bereken de premie voor een overlijdensrisicoverzekering. Zorg voor financiële zekerheid voor je nabestaanden bij overlijden.",
};

export default function Page() {
  return (
    <ToolLayout 
      intro="Geld & Verzekeringen"
      title="Levensverzekering"
      subtitle="Bescherm je nabestaanden en bereken de premie voor een levensverzekering." topic="overlijdensrisico"
    >
      
      <div className="card" style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>Wat is een ORV?</h2>
        <p style={{ fontSize: "0.9rem" }}>
          Een overlijdensrisicoverzekering (ORV) keert een eenmalig bedrag uit aan je partner of kinderen als jij komt te overlijden. 
          Dit bedrag kan gebruikt worden om de hypotheek af te lossen of om het verlies aan inkomen op te vangen.
        </p>
      </div>

      
      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
