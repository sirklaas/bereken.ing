import type { Metadata } from "next";
import EventCountdown from "@/components/EventCountdown";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";
import AffiliateCTA from "@/components/AffiliateCTA";
import { getSuikerfeest } from "@/utils/dateUtils";

export const metadata: Metadata = {
  title: "Dagen tot Suikerfeest 2026 | Eid al-Fitr Countdown",
  description: "Wanneer is het Suikerfeest? Bekijk de countdown tot Eid al-Fitr 2026 en begin met aftellen naar het feestelijke einde van de Ramadan.",
};

export default function Page() {
  const currentYear = new Date().getFullYear();
  let eid = getSuikerfeest(currentYear);
  if (new Date() > eid) {
    eid = getSuikerfeest(currentYear + 1);
  }

  return (
    <ToolLayout>
      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      <h3>Vieringen & Feest</h3>
      <h1>Dagen tot <span style={{ color: "var(--primary-accent)" }}>Suikerfeest</span></h1>
      
      <EventCountdown targetDate={eid} title={`Eid al-Fitr ${eid.getFullYear()}`} />

      <AffiliateCTA 
        title="Cadeaus voor Suikerfeest?"
        description="Verras je familie en vrienden met de mooiste cadeaus en lekkerste zoetigheden voor Eid al-Fitr."
        buttonText="Bekijk Cadeau Tips"
        href="https://www.bol.com/nl/nl/l/suikerfeest-cadeaus/52431/"
        badge="Eid Tip"
      />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Wat vieren we tijdens het Suikerfeest?</h2>
        <p>
          Suikerfeest, of Eid al-Fitr, markeert het einde van de vastenmaand Ramadan. Het is een dag van vreugde, 
          familiebezoek en het delen van zoetigheden en cadeaus als dankbaarheid aan Allah.
        </p>
        <AdSenseSlot id="inline-ad" format="fluid" />
      </div>

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
