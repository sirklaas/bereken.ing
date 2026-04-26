import type { Metadata } from "next";
import EigenRisicoCalculator from "@/components/EigenRisicoCalculator";
import AdSenseSlot from "@/components/AdSenseSlot";
import ToolLayout from "@/components/ToolLayout";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Eigen Risico Berekenen 2026 | Zorgkosten & Verzekering",
  description: "Bereken je jaarlijkse eigen risico en out‑of‑pocket zorgkosten op basis van je uitgaven, eigen risico en verzekeringsdekking.",
};

export default function EigenRisicoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthTopic",
    "name": "Eigen Risico Calculator",
    "description": "Tool om jaarlijks eigen risico en betaalde zorgkosten te berekenen.",
    "url": "https://www.bereken.ing/eigen-risico"
  };

  return (
    <ToolLayout>
      <JsonLd data={schema} />

      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />

      <h3 style={{ marginBottom: "1rem" }}>Financiën & Zorg</h3>
      <h1 style={{ marginBottom: "2rem" }}>Eigen Risico <span style={{ color: "var(--primary-accent)" }}>Berekenen</span></h1>

      <EigenRisicoCalculator />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Waarom eigen risico inzichtelijk maken?</h2>
        <p>
          Het kennen van je eigen risico helpt bij het kiezen van de juiste zorgverzekering en bij het budgetteren van onverwachte zorgkosten.
        </p>
        <AdSenseSlot id="inline-ad" format="fluid" />
      </div>

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
