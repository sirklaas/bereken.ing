import type { Metadata } from "next";
import HealthCalculator from "@/components/HealthCalculator";
import AdSenseSlot from "@/components/AdSenseSlot";
import ToolLayout from "@/components/ToolLayout";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "BMI & Caloriebehoefte Berekenen 2026 | Gezond Gewicht",
  description: "Bereken direct je BMI en dagelijkse caloriebehoefte (TDEE). Ontdek wat een gezond gewicht is voor jouw lengte en leeftijd.",
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
    <ToolLayout 
      intro="Gezondheid & Lifestyle"
      title="BMI & Calorieën"
      subtitle="Bereken je Body Mass Index en ontdek je dagelijkse caloriebehoefte voor een gezonde balans."
      topic="gezondheid"
    >
      <JsonLd data={schema} />

      <AdSenseSlot id="top-ad" format="rectangle" style={{ marginBottom: "2rem" }} />
      
      <HealthCalculator />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Wat betekent jouw BMI resultaat?</h2>
        <p>
          Je BMI geeft een indicatie of je gewicht past bij je lengte. Voor een completer beeld kijken we ook naar je TDEE, 
          oftewel hoeveel energie je lichaam dagelijks nodig heeft.
        </p>
        <AdSenseSlot id="inline-ad" format="fluid" />
      </div>

      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "3rem" }} />
    </ToolLayout>
  );
}
