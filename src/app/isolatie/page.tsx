import type { Metadata } from "next";
import InsulationCalculator from "@/components/InsulationCalculator";
import AdSenseSlot from "@/components/AdSenseSlot";
import ToolLayout from "@/components/ToolLayout";
import JsonLd from "@/components/JsonLd";
import AffiliateCTA from "@/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Isolatie Besparing Berekenen 2026 | Rendement & Subsidie",
  description: "Bereken hoeveel je bespaart met woningisolatie. Direct inzicht in kosten, ISDE-subsidie en de terugverdientijd voor dak, muur en glas.",
};

export default function InsulationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialCalculator",
    "name": "Isolatie Calculator",
    "description": "Tool voor het berekenen van besparingen door woningisolatie.",
    "url": "https://www.bereken.ing/isolatie"
  };

  return (
    <ToolLayout>
      <JsonLd data={schema} />

      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      
      <h3 style={{ marginBottom: "1rem" }}>Wonen & Energie</h3>
      <h1 style={{ marginBottom: "2rem" }}>Isolatie <span style={{ color: "var(--primary-accent)" }}>Berekenen</span></h1>
      
      <InsulationCalculator />

      <AffiliateCTA 
        title="Bespaar op Isolatie"
        description="Vergelijk tot 4 gratis offertes van isolatiespecialisten bij jou in de buurt. Bespaar tot 30% op de totale kosten."
        buttonText="Gratis Offertes Aanvragen"
        href="https://www.offertevergelijker.nl/isolatie"
        badge="Top Deal"
      />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Waarom nu investeren in isolatie?</h2>
        <p>
          Isolatie is de meest effectieve manier om je energierekening te verlagen. Dankzij de ISDE-subsidie krijg je vaak tot 30% van de kosten terug van de overheid. 
          Bovendien verhoogt goede isolatie direct de waarde en het energielabel van je woning.
        </p>
        <AdSenseSlot id="inline-ad" format="fluid" />
      </div>

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
