import type { Metadata } from "next";
import EventCountdown from "@/components/EventCountdown";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";
import AffiliateCTA from "@/components/AffiliateCTA";
import { getEaster } from "@/utils/dateUtils";

export const metadata: Metadata = {
  title: "Dagen tot Pasen 2026 | Paas Countdown & Datum",
  description: "Wanneer is het Pasen? Bekijk de countdown tot Eerste Paasdag 2026 en ontdek hoeveel dagen je nog hebt tot het paasontbijt.",
};

export default function Page() {
  const currentYear = new Date().getFullYear();
  let easter = getEaster(currentYear);
  if (new Date() > easter) {
    easter = getEaster(currentYear + 1);
  }

  return (
    <ToolLayout>
      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      <h3>Vakanties & Tradities</h3>
      <h1>Dagen tot <span style={{ color: "var(--primary-accent)" }}>Pasen</span></h1>
      
      <EventCountdown targetDate={easter} title={`Countdown tot Pasen ${easter.getFullYear()}`} />

      <AffiliateCTA 
        title="Paasontbijt of chocolade?"
        description="Maak je klaar voor Pasen met de lekkerste chocolade-eieren en decoraties voor je paastafel."
        buttonText="Bekijk Paas Artikelen"
        href="https://www.bol.com/nl/nl/l/pasen/10651/"
        badge="Paas Deal"
      />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Hoe wordt de datum van Pasen bepaald?</h2>
        <p>
          Pasen valt altijd op de eerste zondag na de eerste volle maan in de lente. Daarom verschuift de datum elk jaar tussen 22 maart en 25 april. 
          Met onze tool weet je altijd exact wanneer je de eieren kunt gaan zoeken!
        </p>
        <AdSenseSlot id="inline-ad" format="fluid" />
      </div>

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
