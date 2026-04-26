import type { Metadata } from "next";
import HealthCalculator from "@/components/HealthCalculator";
import AdSenseSlot from "@/components/AdSenseSlot";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "BMI & Caloriebehoefte Berekenen 2026 | Gezond Gewicht",
  description: "Bereken direct je BMI en dagelijkse caloriebehoefte (TDEE). Ontdek wat een gezond gewicht is voor jouw lengte en leeftijd.",
  keywords: ["bmi berekenen", "caloriebehoefte berekenen", "tdee calculator", "gezond gewicht", "afvallen berekenen"],
};

export default function HealthPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthTopic",
    "name": "BMI & Calorie Calculator",
    "description": "Hulpmiddel voor het berekenen van Body Mass Index en dagelijkse energiebehoefte.",
    "url": "https://www.bereken.ing/gezondheid"
  };

  return (
    <div className="container" style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>
      <JsonLd data={schema} />

      {/* Top AdZone */}
      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "3rem" }} />

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr clamp(300px, 25%, 350px)", 
        gap: "4rem",
        alignItems: "start" 
      }}>
        
        {/* Main Content Area */}
        <div className="animate-in stagger-1">
          <h3 style={{ textTransform: "uppercase", color: "var(--primary-accent)", letterSpacing: "0.2em", fontWeight: 800, fontSize: "0.85rem", marginBottom: "1rem" }}>
            Health & Wellness Tools
          </h3>
          <h1 style={{ marginBottom: "1.5rem" }}>Gezondheid <span style={{ color: "var(--primary-accent)" }}>Berekenen</span></h1>
          <h2 style={{ fontSize: "1.25rem", color: "var(--secondary)", fontWeight: 500, lineHeight: 1.5, marginBottom: "3rem" }}>
            Wil je weten of je een gezond gewicht hebt of hoeveel calorieën je per dag verbrandt? Gebruik onze geavanceerde calculator voor direct inzicht.
          </h2>

          <HealthCalculator />

          <article style={{ marginTop: "5rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Wat zegt je BMI over je gezondheid?</h2>
            <p>
              De Body Mass Index (BMI) is een veelgebruikte maatstaf om te bepalen of je gewicht past bij je lengte. 
              Hoewel het geen rekening houdt met spiermassa, geeft het voor de meeste mensen een goede indicatie 
              van mogelijke gezondheidsrisico's gerelateerd aan gewicht.
            </p>

            <AdSenseSlot id="inline-ad" format="fluid" style={{ margin: "3rem 0" }} />

            <h3 style={{ marginTop: "2rem", color: "var(--foreground)" }}>Inzicht in je energiebehoefte (TDEE)</h3>
            <p>
              Je TDEE (Total Daily Energy Expenditure) is het aantal calorieën dat je lichaam dagelijks verbrandt, 
              inclusief je dagelijkse activiteiten en sport. Dit is de sleutel tot gewichtsbeheersing: 
              eet minder dan je TDEE om af te vallen, of meer om aan te komen.
            </p>

            <h2 style={{ fontSize: "1.8rem", marginTop: "3rem", marginBottom: "1.5rem" }}>Gezonde Tips</h2>
            <div style={{ display: "grid", gap: "2rem" }}>
              <div>
                <h4 style={{ fontWeight: 800, marginBottom: "0.5rem" }}>Focus op voedingswaarde</h4>
                <p style={{ fontSize: "1rem" }}>Calorieën zijn belangrijk, maar de kwaliteit van je voeding (eiwitten, vezels, vitamines) bepaalt hoe je je voelt.</p>
              </div>
              <div>
                <h4 style={{ fontWeight: 800, marginBottom: "0.5rem" }}>Beweeg consistent</h4>
                <p style={{ fontSize: "1rem" }}>Zelfs een dagelijkse wandeling van 30 minuten kan je TDEE aanzienlijk verhogen en je hartgezondheid verbeteren.</p>
              </div>
            </div>
          </article>
        </div>

        {/* Sidebar AdZone */}
        <aside style={{ position: "sticky", top: "120px" }}>
          <AdSenseSlot id="sidebar-ad" format="rectangle" style={{ minHeight: "600px" }} />
          <div style={{ marginTop: "2rem", padding: "1.5rem", background: "#f8fafc", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 800, marginBottom: "1rem" }}>Premium Wellness</h4>
            <p style={{ fontSize: "0.8rem", opacity: 0.7 }}>Ontdek de beste supplementen en fitness schema's geoptimaliseerd voor jouw BMI.</p>
          </div>
        </aside>

      </div>

      {/* Bottom AdZone */}
      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "4rem" }} />
    </div>
  );
}
