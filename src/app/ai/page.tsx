import type { Metadata } from "next";
import AISavingsCalculator from "@/components/AISavingsCalculator";
import AdSenseSlot from "@/components/AdSenseSlot";
import ToolLayout from "@/components/ToolLayout";
import JsonLd from "@/components/JsonLd";
import AffiliateCTA from "@/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "AI Besparing Berekenen 2026 | ROI van Kunstmatige Intelligentie",
  description: "Bereken direct hoeveel tijd en geld AI jou bespaart. Ontdek de ROI van AI-tools zoals ChatGPT voor jouw werk of bedrijf.",
};

export default function AIPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialCalculator",
    "name": "AI Besparing Calculator",
    "description": "Tool voor het berekenen van productiviteitswinst en ROI door AI.",
    "url": "https://www.bereken.ing/ai"
  };

  return (
    <ToolLayout>
      <JsonLd data={schema} />

      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      
      <h3>Technologie & SaaS</h3>
      <h1>AI Besparing <span style={{ color: "var(--primary-accent)" }}>Berekenen</span></h1>
      
      <AISavingsCalculator />

      <AffiliateCTA 
        title="Verhoog je productiviteit met AI"
        description="Ontdek de beste AI-tools van dit moment die jouw werkproces tot wel 10x sneller kunnen maken. Start vandaag nog met besparen."
        buttonText="Bekijk AI Tools"
        href="https://www.futuretools.io"
        badge="Editor's Choice"
      />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Hoeveel tijd bespaart AI echt?</h2>
        <p>
          Onderzoek toont aan dat kenniswerkers die AI gebruiken tot wel 40% sneller zijn bij specifieke schrijftaken en 25% sneller bij coderen. 
          De echte winst zit niet alleen in de snelheid, maar in de mogelijkheid om meer projecten tegelijkertijd aan te pakken zonder kwaliteitsverlies.
        </p>
        <AdSenseSlot id="inline-ad" format="fluid" />
      </div>

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
