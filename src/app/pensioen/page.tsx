import type { Metadata } from "next";
import PensionCalculator from "@/components/PensionCalculator";
import AdSenseSlot from "@/components/AdSenseSlot";
import ToolLayout from "@/components/ToolLayout";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pensioen Opbouw Berekenen 2026 | Toekomstige Ouderdomsvoorziening",
  description: "Bereken hoeveel pensioen je naar verwachting hebt opgebouwd bij je pensioenleeftijd, gebaseerd op je maandelijkse bijdragen en verwacht rendement.",
};

export default function PensionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialCalculator",
    "name": "Pensioen Opbouw Calculator",
    "description": "Berekening van de verwachte pensioenpot bij pensionering.",
    "url": "https://www.bereken.ing/pensioen"
  };

  return (
    <ToolLayout 
      intro="Geld & Toekomst"
      title="Pensioen Opbouw" topic="pensioen"
      subtitle="Bereken of je voldoende opbouwt voor later en ontdek je jaarruimte voor 2026."
    >
      <JsonLd data={schema} />

      <PensionCalculator />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Waarom pensioenplanning belangrijk is</h2>
        <p>
          Een helder overzicht van je verwachte pensioenpot helpt je om tijdig extra besparingen te doen, je beleggingsstrategie aan te passen en een comfortabel pensioen te garanderen.
        </p>
        <AdSenseSlot id="inline-ad" format="fluid" />
      </div>

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
