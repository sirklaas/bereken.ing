import type { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";
import AffiliateCTA from "@/components/AffiliateCTA";
import { AFFILIATE_CONFIG } from "@/config/affiliateConfig";

export const metadata: Metadata = {
  title: "Inboedelverzekering Berekenen 2026 | Waarde & Premie",
  description: "Bereken de waarde van je inboedel en ontdek welke dekking je nodig hebt. Vergelijk de beste inboedelverzekeringen voor jouw woning.",
};

export default function Page() {
  return (
    <ToolLayout>
      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      <h3>Geld & Wonen</h3>
      <h1>Inboedel <span style={{ color: "var(--primary-accent)" }}>Verzekering</span></h1>
      
      <div className="card" style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>Wat is jouw inboedel waard?</h2>
        <p style={{ fontSize: "0.9rem" }}>
          Een gemiddeld Nederlands huishouden heeft voor ongeveer **€45.000** aan spullen in huis. 
          Ben je student? Dan ligt dit vaak rond de **€8.000**. Woon je in een vrijstaand huis met luxe inrichting? Dan kan dit oplopen tot boven de **€100.000**.
        </p>
      </div>

      <AffiliateCTA 
        title="Direct je premie berekenen"
        description="Vergelijk alle aanbieders op prijs en kwaliteit. Binnen 2 minuten weet je wat de beste inboedelverzekering is voor jouw situatie."
        buttonText="Vergelijk Inboedelverzekeringen"
        href={AFFILIATE_CONFIG.links.inboedelverzekering}
        badge="Top Keuze"
      />

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
