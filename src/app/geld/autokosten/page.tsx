import type { Metadata } from "next";
import CarCostCalculator from "@/components/CarCostCalculator";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";
import AffiliateCTA from "@/components/AffiliateCTA";
import { AFFILIATE_CONFIG } from "@/config/affiliateConfig";

export const metadata: Metadata = {
  title: "Autokosten Berekenen 2026 | Wat kost mijn auto per maand?",
  description: "Bereken de volledige kosten van je auto per maand en per kilometer. Inclusief brandstof, wegenbelasting, verzekering en afschrijving.",
};

export default function Page() {
  return (
    <ToolLayout 
      intro="Geld & Verzekeringen"
      title="Autoverzekering"
      subtitle="Bereken de maandelijkse kosten voor je autoverzekering op basis van je rijgedrag en auto."
    >
      
      <CarCostCalculator />

      <AffiliateCTA 
        title="Besparen op je autoverzekering?"
        description="De verzekering is een grote maandelijkse kostenpost. Vergelijk nu de goedkoopste autoverzekeringen en bespaar direct tot wel €200 per jaar."
        buttonText="Vergelijk Autoverzekeringen"
        href={AFFILIATE_CONFIG.links.autoverzekering}
        badge="Bespaar Tip"
      />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>De verborgen kosten van autorijden</h2>
        <p>
          De meeste mensen kijken alleen naar de brandstof en de wegenbelasting, maar de grootste kostenpost is vaak de **afschrijving**. 
          Zodra je een auto koopt, wordt deze minder waard. Onze tool neemt dit mee voor een realistisch beeld van je maandlasten.
        </p>
        <AdSenseSlot id="inline-ad" format="fluid" />
      </div>

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
