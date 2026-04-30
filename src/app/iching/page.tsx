import type { Metadata } from "next";
import IChing from "@/components/IChing";
import ToolLayout from "@/components/ToolLayout";
import AdSenseSlot from "@/components/AdSenseSlot";

export const metadata: Metadata = {
  title: "I Ching (Itjing) | Oude Chinese Divinatie",
  description: "Raadpleeg de I Ching voor wijsheid en inzicht in je huidige situatie met onze digitale hexagram calculator.",
};

export default function Page() {
  return (
    <ToolLayout 
      intro="Aftellen & Fun" topic="fun"
      title="I Ching (Itjing)"
      subtitle="Raadpleeg het eeuwenoude Chinese Boek der Veranderingen voor inzicht en wijsheid."
    >
      <IChing />
      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
