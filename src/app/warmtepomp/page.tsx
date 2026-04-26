import type { Metadata } from "next";
import HeatPumpCalculator from "@/components/HeatPumpCalculator";
import AdSenseSlot from "@/components/AdSenseSlot";
import ToolLayout from "@/components/ToolLayout";
import JsonLd from "@/components/JsonLd";
import AffiliateCTA from "@/components/AffiliateCTA";
import { AFFILIATE_CONFIG } from "@/config/affiliateConfig";

export const metadata: Metadata = {
  title: "Warmtepomp Berekenen 2026 | Terugverdientijd & Besparing",
  description: "Bereken direct de terugverdientijd en jaarlijkse besparing van een warmtepomp. Ontdek of een hybride of volledige warmtepomp loont voor jouw woning.",
};

export default function HeatPumpPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialCalculator",
    "name": "Warmtepomp Calculator",
    "description": "Berekening van rendement en besparing voor warmtepompen.",
    "url": "https://www.bereken.ing/warmtepomp"
  };

  return (
    <ToolLayout>
      <JsonLd data={schema} />

      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      
      <h3>Wonen & Energie</h3>
      <h1>Warmtepomp <span style={{ color: "var(--primary-accent)" }}>Berekenen</span></h1>
      
      <HeatPumpCalculator />

      <AffiliateCTA 
        title="Vrijblijvende Warmtepomp Offertes"
        description="Bespaar tot wel €500 door offertes van lokale installateurs te vergelijken. Ontvang binnen 24 uur inzicht in de mogelijkheden voor jouw huis."
        buttonText="Vergelijk Offertes"
        href={AFFILIATE_CONFIG.links.warmtepomp}
        badge="Bespaar Tip"
      />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Is een warmtepomp de investering waard?</h2>
        <p>
          Met de stijgende gasprijzen en de aantrekkelijke ISDE-subsidies is de terugverdientijd van een warmtepomp de afgelopen jaren flink gedaald. 
          Onze calculator houdt rekening met de gemiddelde COP-waarde (rendement) van moderne pompen.
        </p>
        <AdSenseSlot id="inline-ad" format="fluid" />
      </div>

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
