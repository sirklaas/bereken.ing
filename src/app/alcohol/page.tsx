import type { Metadata } from "next";
import AlcoholCalculator from "@/components/AlcoholCalculator";
import AdSenseSlot from "@/components/AdSenseSlot";
import Sidebar from "@/components/Sidebar";
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
    <div className="container" style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>
      <JsonLd data={schema} />

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "250px 1fr", 
        gap: "5rem",
        alignItems: "start" 
      }}>
        
        <Sidebar />

        <div>
          <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
          
          <h3 style={{ marginBottom: "1rem" }}>Gezondheid & Veiligheid</h3>
          <h1 style={{ marginBottom: "2rem" }}>Alcohol <span style={{ color: "var(--primary-accent)" }}>Berekenen</span></h1>
          
          <AlcoholCalculator />

          <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
            <h2 style={{ fontSize: "1.8rem" }}>Hoe wordt alcohol afgebroken?</h2>
            <p>
              Je lichaam breekt alcohol af met een constante snelheid van ongeveer 0,15 promille per uur. Niets kan dit proces versnellen: geen koffie, geen koude douche en geen zware maaltijd. 
              Onze calculator geeft een schatting, maar de enige manier om zeker te zijn is een blaastest van de politie.
            </p>
            <div style={{ 
              marginTop: "2rem", 
              padding: "1rem", 
              background: "#fff1f2", 
              borderLeft: "4px solid #ef4444", 
              fontSize: "0.85rem", 
              color: "#991b1b" 
            }}>
              <strong>Disclaimer:</strong> Deze berekening is een indicatie. Rijden onder invloed is gevaarlijk en strafbaar. Bij twijfel: niet rijden.
            </div>
            <AdSenseSlot id="inline-ad" format="fluid" />
          </div>

          <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
        </div>

      </div>
    </div>
  );
}
