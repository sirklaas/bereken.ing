import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";
import AffiliateCTA from "@/components/AffiliateCTA";
import { AFFILIATE_CONFIG } from "@/config/affiliateConfig";

export const metadata: Metadata = {
  title: "Reisverzekering Berekenen 2026 | Kortlopend of Doorlopend?",
  description: "Bereken of een doorlopende reisverzekering voor jou goedkoper is dan een kortlopende verzekering. Vergelijk prijzen en dekkingen.",
};

export default function Page() {
  return (
    <ToolLayout>
      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      <h3>Geld & Vakantie</h3>
      <h1>Reis <span style={{ color: "var(--primary-accent)" }}>Verzekering</span></h1>
      
      <div className="card" style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>Wanneer is doorlopend voordeliger?</h2>
        <p style={{ fontSize: "0.9rem" }}>
          Als je meer dan **21 dagen per jaar** op reis gaat, is een doorlopende reisverzekering bijna altijd goedkoper dan elke keer een losse verzekering afsluiten. 
          Vergeet niet te checken of werelddekking en wintersport nodig zijn!
        </p>
      </div>

      <AffiliateCTA 
        title="Vind de beste reisverzekering"
        description="Ga onbezorgd op reis. Vergelijk nu alle reisverzekeringen en kies de dekking die bij jouw vakantieplannen past."
        buttonText="Vergelijk Reisverzekeringen"
        href={AFFILIATE_CONFIG.links.reisverzekering}
        badge="Vakantie Tip"
      />

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
