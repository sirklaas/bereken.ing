import type { Metadata } from "next";
import FuneralCalculator from "@/components/FuneralCalculator";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";
import AffiliateCTA from "@/components/AffiliateCTA";
import { AFFILIATE_CONFIG } from "@/config/affiliateConfig";

export const metadata: Metadata = {
  title: "Begrafeniskosten Berekenen 2026 | Wat kost een uitvaart?",
  description: "Bereken direct de geschatte kosten voor een begrafenis in Nederland. Inzicht in grafrechten, uitvaartverzorger en catering.",
};

export default function Page() {
  return (
    <ToolLayout 
      intro="Geld & Zekerheid"
      title="Begrafeniskosten"
      subtitle="Bereken de totale kosten van een uitvaart en voorkom financiële verrassingen voor nabestaanden."
    >
      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      <h3>Geld & Verzekeringen</h3>
      <h1>Begrafenis <span style={{ color: "var(--primary-accent)" }}>Kosten</span></h1>
      
      <FuneralCalculator type="burial" />

      <AffiliateCTA 
        title="Uitvaartverzekering Vergelijken"
        description="Voorkom hoge kosten voor je nabestaanden. Vergelijk de beste uitvaartverzekeringen en sluit direct een polis af die bij je past."
        buttonText="Vergelijk Verzekeringen"
        href={AFFILIATE_CONFIG.links.uitvaartverzekering}
        badge="Financieel Tip"
      />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Waarom stijgen de begrafeniskosten?</h2>
        <p>
          De kosten voor een begrafenis in Nederland stijgen jaarlijks, vooral door de verhoging van gemeentelijke grafrechten. 
          Gemiddeld kost een begrafenis tussen de €8.500 en €11.000. Het is verstandig om dit tijdig financieel te regelen.
        </p>
        <AdSenseSlot id="inline-ad" format="fluid" />
      </div>

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
