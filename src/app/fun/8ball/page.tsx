import type { Metadata } from "next";
import Magic8Ball from "@/components/Magic8Ball";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";

export const metadata: Metadata = {
  title: "Magische 8-Ball | Krijg direct antwoord op je vragen",
  description: "Stel een ja/nee vraag aan de Magische 8-Ball en ontdek wat de toekomst voor je in petto heeft.",
};

export default function Page() {
  return (
    <ToolLayout 
      intro="Aftellen & Fun"
      title="Magische 8-Ball"
      subtitle="Stel een vraag en laat de magische 8-ball je toekomst voorspellen."
    >
      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      <h3>Fun & Entertainment</h3>
      <h1>Magische <span style={{ color: "var(--primary-accent)" }}>8-Ball</span></h1>
      <Magic8Ball />
      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
