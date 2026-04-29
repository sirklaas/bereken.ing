import type { Metadata } from "next";
import MortgageCalculator from "@/components/MortgageCalculator";
import AffiliateCTA from "@/components/AffiliateCTA";
import ToolLayout from "@/components/ToolLayout";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Maximale Hypotheek Berekenen 2026 | Snel & Onafhankelijk",
  description: "Bereken direct hoeveel je maximaal kunt lenen voor je woning in 2026. Onafhankelijk advies en vlijmscherpe berekeningen.",
};

export default function MortgagePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialCalculator",
    "name": "Hypotheek Calculator",
    "description": "Berekening van maximale hypotheek en maandlasten.",
    "url": "https://www.bereken.ing/hypotheek"
  };

  return (
    <ToolLayout 
      intro="Financiën & Wonen"
      title="Maximale Hypotheek"
      subtitle="Bereken direct jouw leencapaciteit op basis van de Nibud-normen 2026."
      topic="hypotheek"
    >
      <JsonLd data={schema} />

      {/* The main calculator box is inside ToolLayout's center column */}
      <MortgageCalculator />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Eenvoudig inzicht in je leencapaciteit</h2>
        <p>
          Hoeveel je kunt lenen hangt af van je inkomen, eventuele schulden en de waarde van de woning. 
          Onze tool geeft je direct een indicatie op basis van de Nibud-normen voor 2026.
        </p>
      </div>

      <AffiliateCTA topic="hypotheek" />
    </ToolLayout>
  );
}
