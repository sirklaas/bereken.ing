import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";

export const metadata: Metadata = {
  title: "Inboedelverzekering Berekenen 2026 | Waarde & Premie",
  description: "Bereken de waarde van je inboedel en ontdek welke dekking je nodig hebt. Vergelijk de beste inboedelverzekeringen voor jouw woning.",
};

export default function Page() {
  return (
    <ToolLayout 
      intro="Geld & Verzekeringen"
      title="Inboedelverzekering"
      subtitle="Bereken de waarde van je inboedel en de bijbehorende maandelijkse premie." topic="inboedel"
    >
      
      <div className="card" style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>Wat is jouw inboedel waard?</h2>
        <p style={{ fontSize: "0.9rem" }}>
          Een gemiddeld Nederlands huishouden heeft voor ongeveer **€45.000** aan spullen in huis. 
          Ben je student? Dan ligt dit vaak rond de **€8.000**. Woon je in een vrijstaand huis met luxe inrichting? Dan kan dit oplopen tot boven de **€100.000**.
        </p>
      </div>

      
      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
