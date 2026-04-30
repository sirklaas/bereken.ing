import type { Metadata } from "next";
import DeathClock from "@/components/DeathClock";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";

export const metadata: Metadata = {
  title: "Dagentot (Death Clock) | Hoeveel dagen heb je nog?",
  description: "Bereken je geschatte resterende dagen op basis van levensverwachting en levensstijl. Een tool voor reflectie.",
};

export default function Page() {
  return (
    <ToolLayout 
      intro="Aftellen & Fun" topic="fun"
      title="Dagentot (Death Clock)"
      subtitle="Krijg een statistische indicatie van je resterende tijd op aarde. Gebruik het als motivatie!"
    >
      <DeathClock />
      
      
      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
