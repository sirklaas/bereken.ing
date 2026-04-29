import type { Metadata } from "next";
import BatteryCalculator from "@/components/BatteryCalculator";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";
import AffiliateCTA from "@/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Thuisbatterij Berekenen 2026 | Rendement & Besparing",
  description: "Bereken de terugverdientijd van een thuisbatterij in 2026. Ontdek of een batterij loont nu de salderingsregeling wordt afgebouwd.",
};

export default function Page() {
  return (
    <ToolLayout 
      intro="Energie & Wonen"
      title="Thuisbatterij Loont?"
      subtitle="Ontdek of een thuisbatterij in 2026 rendabel is voor jouw specifieke situatie."
    >
      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      
      <BatteryCalculator />

      <AffiliateCTA 
        title="Interesse in een thuisbatterij?"
        description="Verhoog je zelfconsumptie tot wel 70%. Ontvang informatie en offertes van specialisten in jouw regio."
        buttonText="Informatie Aanvragen"
        href="https://www.offertevergelijker.nl/thuisbatterij"
        badge="Nieuw"
      />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>De toekomst van energieopslag</h2>
        <p>
          Met de afbouw van de salderingsregeling wordt het opslaan van je eigen zonnestroom steeds interessanter. 
          Een thuisbatterij zorgt ervoor dat je overdag opgewekte stroom 's avonds kunt gebruiken, waardoor je minder afhankelijk bent van het energienet en stijgende prijzen.
        </p>
        <AdSenseSlot id="inline-ad" format="fluid" />
      </div>

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
