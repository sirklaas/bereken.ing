import type { Metadata } from "next";
import Magic8Ball from "@/components/Magic8Ball";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";
import BolProduct from "@/components/BolProduct";

export const metadata: Metadata = {
  title: "Magische 8-Ball | Krijg direct antwoord op je vragen",
  description: "Stel een ja/nee vraag aan de Magische 8-Ball en ontdek wat de toekomst voor je in petto heeft.",
};

export default function Page() {
  return (
    <ToolLayout 
      intro="Aftellen & Fun" topic="fun"
      title="Magische 8-Ball"
      subtitle="Stel een vraag en laat de magische 8-ball je toekomst voorspellen."
    >
      <Magic8Ball />
      
      <BolProduct 
        id="bol_1777803262520"
        productId="9300000148770215"
        siteId="1517771"
      />

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
