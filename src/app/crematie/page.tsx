import type { Metadata } from "next";
import FuneralCalculator from "@/components/FuneralCalculator";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";
import AffiliateCTA from "@/components/AffiliateCTA";
import { AFFILIATE_CONFIG } from "@/config/affiliateConfig";

export const metadata: Metadata = {
  title: "Crematiekosten Berekenen 2026 | Wat kost een crematie?",
  description: "Bereken de kosten voor een crematie in Nederland. Ontdek de verschillen in prijs tussen begraven en cremeren.",
};

export default function Page() {
  return (
    <ToolLayout 
      intro="Geld & Zekerheid"
      title="Crematiekosten"
      subtitle="Bereken de kosten voor een respectvolle crematie en bekijk de vergoedingen."
    >
      
      <FuneralCalculator type="cremation" />

      <AffiliateCTA 
        title="Uitvaartverzekering Vergelijken"
        description="Een crematie is vaak goedkoper dan begraven, maar nog steeds een grote uitgave. Zorg dat je nabestaanden niet voor verrassingen komen te staan."
        buttonText="Vergelijk Verzekeringen"
        href={AFFILIATE_CONFIG.topics.uitvaart.preferred.url}
        badge="Scherpste Deal"
      />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Crematie vs. Begrafenis</h2>
        <p>
          Een crematie is in de basis vaak goedkoper dan een begrafenis omdat er geen sprake is van grafrechten en onderhoudskosten voor een graf. 
          De gemiddelde kosten voor een crematie liggen tussen de €6.000 en €9.000.
        </p>
        <AdSenseSlot id="inline-ad" format="fluid" />
      </div>

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
