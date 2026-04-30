import type { Metadata } from "next";
import FuneralCalculator from "@/components/FuneralCalculator";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";

export const metadata: Metadata = {
  title: "Begrafeniskosten Berekenen 2026 | Wat kost een uitvaart?",
  description: "Bereken direct de geschatte kosten voor een begrafenis in Nederland. Inzicht in grafrechten, uitvaartverzorger en catering.",
};

export default function Page() {
  return (
    <ToolLayout 
      intro="Geld & Zekerheid"
      title="Begrafeniskosten"
      subtitle="Bereken de totale kosten van een uitvaart en voorkom financiële verrassingen voor nabestaanden." topic="uitvaart"
    >
      
      <FuneralCalculator type="burial" />

      
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
