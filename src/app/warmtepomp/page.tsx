import type { Metadata } from "next";
import HeatPumpCalculator from "@/components/HeatPumpCalculator";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Warmtepomp Rendement Berekenen 2026 | Bespaar direct",
  description: "Ontdek hoeveel je bespaart met een warmtepomp. Bereken je jaarlijkse gasbesparing, terugverdientijd en benodigde investering.",
};

export default function HeatPumpPage() {
  return (
    <ToolLayout 
      intro="Energie & Duurzaamheid"
      title="Warmtepomp Rendement" topic="warmtepomp"
      subtitle="Bereken direct jouw gasbesparing en de terugverdientijd van een hybride of volledige warmtepomp."
    >
      <HeatPumpCalculator />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Waarom nu overstappen?</h2>
        <p>
          Met de huidige gasprijzen en beschikbare subsidies is de terugverdientijd van een warmtepomp historisch laag. 
          Gemiddeld bespaar je met een hybride warmtepomp tot wel 60% op je gasverbruik.
        </p>
      </div>
    </ToolLayout>
  );
}
