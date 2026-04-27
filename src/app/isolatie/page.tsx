import type { Metadata } from "next";
import InsulationCalculator from "@/components/InsulationCalculator";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Isolatie Besparing Berekenen 2026 | Lagere Energierekening",
  description: "Ontdek hoeveel je bespaart door je woning beter te isoleren. Bereken direct de winst van spouwmuur-, dak- en vloerisolatie.",
};

export default function InsulationPage() {
  return (
    <ToolLayout 
      intro="Energie & Comfort"
      title="Isolatie Besparing"
      subtitle="Bereken direct hoeveel m³ gas je bespaart met de verschillende vormen van isolatie."
    >
      <InsulationCalculator />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>De beste investering voor je huis</h2>
        <p>
          Isolatie is vaak de eerste stap in het verduurzamen van je woning. Het verhoogt niet alleen je wooncomfort, 
          maar verlaagt ook direct je vaste lasten. Veel maatregelen hebben een terugverdientijd van minder dan 5 jaar.
        </p>
      </div>
    </ToolLayout>
  );
}
