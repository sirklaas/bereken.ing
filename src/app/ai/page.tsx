import type { Metadata } from "next";
import AISavingsCalculator from "@/components/AISavingsCalculator";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "AI Besparing Berekenen 2026 | ROI van Productiviteit",
  description: "Bereken hoeveel tijd en geld AI jou bespaart. Ontdek de ROI van AI-tools voor jouw dagelijkse werkzaamheden.",
};

export default function AIPage() {
  return (
    <ToolLayout 
      intro="Technologie & SaaS"
      title="AI Besparing"
      subtitle="Ontdek de productiviteitswinst van kunstmatige intelligentie voor jouw specifieke taken."
    >
      <AISavingsCalculator />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>De AI-revolutie in cijfers</h2>
        <p>
          AI-tools zoals ChatGPT, Copilot en Midjourney veranderen de manier waarop we werken. 
          Gemiddeld bespaart een kenniswerker met de juiste AI-tools tot wel 10 uur per week op routinetaken. 
          Dat is niet alleen tijdswinst, maar ook een enorme kostenbesparing.
        </p>
      </div>
    </ToolLayout>
  );
}
