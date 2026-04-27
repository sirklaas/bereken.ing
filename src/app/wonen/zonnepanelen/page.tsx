import type { Metadata } from "next";
import SolarCalculator from "@/components/SolarCalculator";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";
import AffiliateCTA from "@/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Zonnepanelen Berekenen 2026 | Terugverdientijd & Opbrengst",
  description: "Bereken direct de opbrengst en terugverdientijd van zonnepanelen. Ontdek hoeveel je bespaart op je energierekening in 2026.",
};

export default function Page() {
  return (
    <ToolLayout>
      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      <h3>Wonen & Energie</h3>
      <h1>Zonnepanelen <span style={{ color: "var(--primary-accent)" }}>Berekenen</span></h1>
      
      <SolarCalculator />

      <AffiliateCTA 
        title="Ontvang 4 gratis offertes"
        description="Bespaar tot 30% op je zonnepanelen door offertes van lokale installateurs te vergelijken. Gratis en volledig vrijblijvend."
        buttonText="Vergelijk Offertes"
        href="https://www.offertevergelijker.nl/zonnepanelen"
        badge="Populairst"
      />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Zijn zonnepanelen nog steeds rendabel?</h2>
        <p>
          Ondanks de discussie over de salderingsregeling en terugleverkosten blijven zonnepanelen een van de beste investeringen voor je woning. 
          Met een gemiddelde terugverdientijd van 5 tot 7 jaar en een levensduur van 25 jaar, leveren ze nog steeds een fors rendement op.
        </p>
        <AdSenseSlot id="inline-ad" format="fluid" />
      </div>

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
