import type { Metadata } from "next";
import EventCountdown from "@/components/EventCountdown";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";
import AffiliateCTA from "@/components/AffiliateCTA";

export const metadata: Metadata = {
  title: "Dagen tot Kerst 2026 | Kerst Countdown & Klok",
  description: "Hoeveel dagen, uren en minuten nog tot Kerst? Bekijk onze live kerst countdown en begin met aftellen naar de gezelligste tijd van het jaar.",
};

export default function Page() {
  const currentYear = new Date().getFullYear();
  let christmas = new Date(currentYear, 11, 25);
  if (new Date() > christmas) {
    christmas = new Date(currentYear + 1, 11, 25);
  }

  return (
    <ToolLayout 
      intro="Aftellen & Fun"
      title="Dagen tot Kerst"
      subtitle="Tel af naar de gezelligste tijd van het jaar. Hoeveel nachtjes nog tot kerstavond?"
    >
      
      <EventCountdown targetDate={christmas} title="Aftellen naar Kerstavond" />

      <AffiliateCTA 
        title="Kerstcadeaus op tijd in huis?"
        description="Bekijk de populairste cadeaus van dit jaar en zorg dat je ze op tijd bestelt. Voorkom kerststress!"
        buttonText="Bekijk Cadeau Tips"
        href="https://www.bol.com/nl/nl/l/kerstcadeaus/42747/"
        badge="Kerst Tip"
      />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Wanneer begint de kerstvakantie?</h2>
        <p>
          De kerstvakantie begint voor de meeste scholen en bedrijven rond 20 december. Het is de perfecte tijd om te ontspannen, 
          tijd door te brengen met familie en natuurlijk te genieten van het kerstdiner.
        </p>
        <AdSenseSlot id="inline-ad" format="fluid" />
      </div>

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
