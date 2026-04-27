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
    <ToolLayout>
      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      <h3>Fun & Entertainment</h3>
      <h1>I Ching <span style={{ color: "var(--primary-accent)" }}>Itjing</span></h1>
      <IChing />
      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
