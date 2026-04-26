import type { Metadata } from "next";
import AlcoholCalculator from "@/components/AlcoholCalculator";
import AdSenseSlot from "@/components/AdSenseSlot";
import ToolLayout from "@/components/ToolLayout";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Promillage Berekenen 2026 | Alcohol Calculator & Limiet",
  description: "Bereken direct je geschatte promillage na het drinken van alcohol. Ontdek hoe lang het duurt voordat je weer mag autorijden.",
};

export default function AlcoholPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthTopic",
    "name": "Alcohol Promillage Calculator",
    "description": "Schatting van bloedalcoholgehalte op basis van de Widmark formule.",
    "url": "https://www.bereken.ing/alcohol"
  };

  return (
    <ToolLayout>
      <JsonLd data={schema} />

      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      
      <h3 style={{ marginBottom: "1rem" }}>Gezondheid & Veiligheid</h3>
      <h1 style={{ marginBottom: "2rem" }}>Alcohol <span style={{ color: "var(--primary-accent)" }}>Berekenen</span></h1>
      
      <AlcoholCalculator />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Hoe wordt alcohol afgebroken?</h2>
        <p>
          Je lichaam breekt alcohol af met een constante snelheid van ongeveer 0,15 promille per uur. Niets kan dit proces versnellen: geen koffie, geen koude douche en geen zware maaltijd. 
        </p>
        <div style={{ 
          marginTop: "2rem", 
          padding: "1.5rem", 
          background: "#fff1f2", 
          borderLeft: "4px solid #ef4444", 
          fontSize: "0.85rem", 
          color: "#991b1b",
          borderRadius: "0 12px 12px 0"
        }}>
          <strong>Disclaimer:</strong> Deze berekening is een indicatie. Rijden onder invloed is gevaarlijk en strafbaar. Bij twijfel: niet rijden.
        </div>
        <AdSenseSlot id="inline-ad" format="fluid" />
      </div>

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
