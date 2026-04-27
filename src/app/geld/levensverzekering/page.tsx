import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";
import AffiliateCTA from "@/components/AffiliateCTA";
import { AFFILIATE_CONFIG } from "@/config/affiliateConfig";

export const metadata: Metadata = {
  title: "Levensverzekering Berekenen 2026 | Overlijdensrisico",
  description: "Bereken de premie voor een overlijdensrisicoverzekering. Zorg voor financiële zekerheid voor je nabestaanden bij overlijden.",
};

export default function Page() {
  return (
    <ToolLayout>
      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      <h3>Geld & Zekerheid</h3>
      <h1>Levens <span style={{ color: "var(--primary-accent)" }}>Verzekering</span></h1>
      
      <div className="card" style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>Wat is een ORV?</h2>
        <p style={{ fontSize: "0.9rem" }}>
          Een overlijdensrisicoverzekering (ORV) keert een eenmalig bedrag uit aan je partner of kinderen als jij komt te overlijden. 
          Dit bedrag kan gebruikt worden om de hypotheek af te lossen of om het verlies aan inkomen op te vangen.
        </p>
      </div>

      <AffiliateCTA 
        title="Vergelijk ORV premies"
        description="De premies voor levensverzekeringen zijn de afgelopen jaren flink gedaald. Vergelijk nu en zie hoeveel jij kunt besparen."
        buttonText="Vergelijk Levensverzekeringen"
        href={AFFILIATE_CONFIG.links.levensverzekering}
        badge="Belangrijk"
      />

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
