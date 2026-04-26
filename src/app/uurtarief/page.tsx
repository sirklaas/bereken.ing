import type { Metadata } from "next";
import RateCalculator from "@/components/RateCalculator";
import AdSenseSlot from "@/components/AdSenseSlot";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Uurtarief Berekenen als ZZP | Freelance Calculator 2026",
  description: "Bereken eenvoudig welk uurtarief je moet vragen als freelancer of ZZP'er om je gewenste netto inkomen te behalen. Inclusief belasting en kosten.",
  keywords: ["uurtarief berekenen", "zzp tarief", "freelance calculator", "netto inkomen zzp", "uurtarief consultant"],
};

export default function RatePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialCalculator",
    "name": "ZZP Uurtarief Calculator",
    "description": "Tool voor het berekenen van het ideale uurtarief voor zelfstandigen.",
    "url": "https://www.bereken.ing/uurtarief"
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
            Business & Freelance Tools
          </h3>
          <h1 style={{ marginBottom: "1.5rem" }}>Uurtarief <span style={{ color: "var(--primary-accent)" }}>Berekenen</span></h1>
          <h2 style={{ fontSize: "1.25rem", color: "var(--secondary)", fontWeight: 500, lineHeight: 1.5, marginBottom: "3rem" }}>
            Vraag je genoeg voor je expertise? Onze calculator helpt je bij het bepalen van het perfecte uurtarief om je financiële doelen te bereiken.
          </h2>

          <RateCalculator />

          <article style={{ marginTop: "5rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Hoe bepaal je een goed uurtarief?</h2>
            <p>
              Veel startende ZZP'ers kijken naar wat hun concurrenten vragen, maar vergeten hun eigen kostenstructuur. 
              Je uurtarief moet niet alleen je inkomen dekken, maar ook je pensioenopbouw, verzekeringen, vakantiedagen 
              en de uren die je besteedt aan administratie en acquisitie.
            </p>

            <AdSenseSlot id="inline-ad" format="fluid" style={{ margin: "3rem 0" }} />

            <h3 style={{ marginTop: "2rem", color: "var(--foreground)" }}>Vergeet de belastingen niet</h3>
            <p>
              Als freelancer ben je zelf verantwoordelijk voor je inkomstenbelasting. In Nederland kan dit percentage 
              al snel oplopen tot 30% of meer van je winst. Onze tool houdt hier rekening mee zodat je niet 
              voor verrassingen komt te staan aan het einde van het kwartaal.
            </p>

            <h2 style={{ fontSize: "1.8rem", marginTop: "3rem", marginBottom: "1.5rem" }}>Veelgestelde Vragen</h2>
            <div style={{ display: "grid", gap: "2rem" }}>
              <div>
                <h4 style={{ fontWeight: 800, marginBottom: "0.5rem" }}>Wat is een gangbaar tarief voor een consultant?</h4>
                <p style={{ fontSize: "1rem" }}>Gemiddelde tarieven variëren van €85 tot €150 per uur, afhankelijk van ervaring en specialisatie.</p>
              </div>
              <div>
                <h4 style={{ fontWeight: 800, marginBottom: "0.5rem" }}>Hoeveel uren kan ik per jaar factureren?</h4>
                <p style={{ fontSize: "1rem" }}>De meeste fulltime ZZP'ers factureren tussen de 1.100 en 1.300 uur per jaar.</p>
              </div>
            </div>
          </article>
        </div>

        {/* Sidebar AdZone */}
        <aside style={{ position: "sticky", top: "120px" }}>
          <AdSenseSlot id="sidebar-ad" format="rectangle" style={{ minHeight: "600px" }} />
          <div style={{ marginTop: "2rem", padding: "1.5rem", background: "#f8fafc", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 800, marginBottom: "1rem" }}>Zakelijk Bankieren</h4>
            <p style={{ fontSize: "0.8rem", opacity: 0.7 }}>Vergelijk de beste zakelijke rekeningen voor jouw onderneming.</p>
          </div>
        </aside>

      </div>

      {/* Bottom AdZone */}
      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "4rem" }} />
    </div>
  );
}
