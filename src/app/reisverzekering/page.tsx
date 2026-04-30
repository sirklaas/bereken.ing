import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";

export const metadata: Metadata = {
  title: "Reisverzekering Berekenen 2026 | Kortlopend of Doorlopend?",
  description: "Bereken of een doorlopende reisverzekering voor jou goedkoper is dan een kortlopende verzekering. Vergelijk prijzen en dekkingen.",
};

export default function Page() {
  return (
    <ToolLayout 
      intro="Geld & Verzekeringen"
      title="Reisverzekering"
      subtitle="Bereken de kosten voor een kortlopende of doorlopende reisverzekering." topic="reisverzekering"
    >
      
      <div className="card" style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>Wanneer is doorlopend voordeliger?</h2>
        <p style={{ fontSize: "0.9rem" }}>
          Als je meer dan **21 dagen per jaar** op reis gaat, is een doorlopende reisverzekering bijna altijd goedkoper dan elke keer een losse verzekering afsluiten. 
          Vergeet niet te checken of werelddekking en wintersport nodig zijn!
        </p>
      </div>

      
      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
