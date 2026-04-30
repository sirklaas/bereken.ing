import type { Metadata } from "next";
import FixedCostsCalculator from "@/components/FixedCostsCalculator";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Vaste Lasten Berekenen 2026 | Grip op je Budget",
  description: "Bereken je maandelijkse vaste lasten en krijg direct inzicht in je budget. Ontdek waar je kunt besparen op wonen, energie en abonnementen.",
};

export default function VasteLastenPage() {
  return (
    <ToolLayout 
      intro="Persoonlijke Financiën"
      title="Vaste Lasten" topic="vaste-lasten"
      subtitle="Krijg direct overzicht van al je maandelijkse uitgaven en zie wat je onderaan de streep overhoudt."
    >
      <FixedCostsCalculator />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Waarom inzicht in vaste lasten belangrijk is</h2>
        <p>
          Vaste lasten vormen vaak de grootste hap uit het budget. Door deze goed in kaart te brengen, 
          creëer je rust en ruimte voor sparen of investeren. Onze tool helpt je om niets te vergeten.
        </p>
      </div>
    </ToolLayout>
  );
}
