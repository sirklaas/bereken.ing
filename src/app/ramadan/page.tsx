import type { Metadata } from "next";
import EventCountdown from "@/components/EventCountdown";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";
import { getRamadan } from "@/utils/dateUtils";

export const metadata: Metadata = {
  title: "Dagen tot Ramadan 2026 | Start van de Vastentijd",
  description: "Wanneer begint de Ramadan in 2026? Volg de countdown tot de heilige maand en ontdek hoeveel dagen het nog is tot de start van het vasten.",
};

export default function Page() {
  const currentYear = new Date().getFullYear();
  let ramadan = getRamadan(currentYear);
  if (new Date() > ramadan) {
    ramadan = getRamadan(currentYear + 1);
  }

  return (
    <ToolLayout 
      intro="Aftellen & Fun"
      title="Dagen tot Ramadan"
      subtitle="Bereid je voor op de heilige maand. Ontdek wanneer de Ramadan in 2026 begint."
    >
      
      <EventCountdown targetDate={ramadan} title={`Start van Ramadan ${ramadan.getFullYear()}`} />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>De heilige maand Ramadan</h2>
        <p>
          Ramadan is de negende maand van de islamitische kalender en is een tijd van vasten, bezinning, gebed en gemeenschap. 
          De exacte begindatum hangt af van de stand van de maan en kan per land licht verschillen.
        </p>
        <AdSenseSlot id="inline-ad" format="fluid" />
      </div>

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
