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
    <ToolLayout>
      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      <h3>Fun & Entertainment</h3>
      <h1>Dagentot <span style={{ color: "var(--primary-accent)" }}>Death Clock</span></h1>
      <DeathClock />
      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
