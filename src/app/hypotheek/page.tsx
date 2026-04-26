import MortgageCalculator from "@/components/MortgageCalculator";
import AdSenseSlot from "@/components/AdSenseSlot";
import JsonLd from "@/components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hypotheek Berekenen 2026",
  description: "Hoeveel kun je lenen voor een woning? Bereken binnen 1 minuut je maximale hypotheek op basis van de laatste Nibud regels van 2026.",
};

export default function HypotheekPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Hypotheek Calculator",
    "description": "Bereken je maximale hypotheek in 2026.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    }
  };

  return (
    <div style={{ padding: "4rem 0" }}>
      <JsonLd data={schemaData} />
      
      <div className="container">
        {/* Ad Slot: Top Banner */}
        <AdSenseSlot id="hypotheek-top-leaderboard" />

        <div style={{ textAlign: "center", marginBottom: "4rem", marginTop: "4rem" }}>
          <h3 className="animate-in">Financiële Rekentools</h3>
          <h1 className="animate-in stagger-1">Maximale <span style={{ color: "var(--primary-accent)" }}>Hypotheek</span> 2026</h1>
          <h2 className="animate-in stagger-2">Bereken binnen 1 minuut hoeveel je kunt lenen.</h2>
        </div>

        <div className="grid-layout" style={{ gridTemplateColumns: "1fr 300px", alignItems: "start" }}>
          <div>
            <MortgageCalculator />
            
            {/* Ad Slot: Inline Content */}
            <AdSenseSlot id="hypotheek-inline-1" />

            <section style={{ marginTop: "6rem" }}>
              <h3 className="animate-in">Uitleg & Normen</h3>
              <h2 className="animate-in stagger-1">Hoe berekenen wij jouw maximale hypotheek?</h2>
              <p className="animate-in stagger-2">
                Het berekenen van een hypotheek is afhankelijk van meerdere factoren. De belangrijkste factor is je bruto jaarinkomen, maar we kijken ook naar:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginBottom: "2rem", color: "var(--secondary)" }}>
                <li>Je huidige rentepercentage en de rentevaste periode.</li>
                <li>Eventuele lopende schulden of kredieten (BKR).</li>
                <li>De marktwaarde van de woning die je op het oog hebt.</li>
                <li>Je leeftijd en pensioenzicht.</li>
              </ul>
              
              <h2 className="animate-in stagger-1">Nibud Normen 2026</h2>
              <p className="animate-in stagger-2">
                Jaarlijks stelt het Nibud nieuwe normen vast voor hoeveel van je inkomen je aan woonlasten mag uitgeven. In 2026 zijn deze regels aangepast om rekening te houden met de gestegen energiekosten en inflatie. Onze rekentool is hier volledig op aangepast.
              </p>
            </section>
          </div>

          <aside style={{ position: "sticky", top: "100px" }}>
            <h3 style={{ marginBottom: "1rem" }}>Partner Content</h3>
            {/* Ad Slot: Sidebar SkyScraper */}
            <AdSenseSlot id="hypotheek-sidebar-1" />
            
            <div className="card" style={{ marginTop: "2rem", padding: "1.5rem" }}>
              <h3>Gerelateerd</h3>
              <ul style={{ listStyle: "none", marginTop: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <li><a href="/studentenlening" style={{ color: "var(--primary-accent)", textDecoration: "none", fontWeight: 600 }}>Studentenlening Aflossen</a></li>
                <li><a href="/warmtepomp" style={{ color: "var(--primary-accent)", textDecoration: "none", fontWeight: 600 }}>Warmtepomp Subsidie</a></li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Ad Slot: Bottom Content */}
        <div style={{ marginTop: "6rem" }}>
          <AdSenseSlot id="hypotheek-bottom-large" />
        </div>

        <section style={{ padding: "6rem 0", borderTop: "1px solid var(--border)", marginTop: "6rem" }}>
          <div style={{ maxWidth: "800px" }}>
            <h3 className="animate-in">Veelgestelde Vragen</h3>
            <h2 className="animate-in stagger-1">Antwoorden op jouw vragen</h2>
            <div style={{ display: "grid", gap: "2rem", marginTop: "2rem" }}>
              <div>
                <h4 style={{ fontWeight: 800, marginBottom: "0.5rem" }}>Telt mijn studieschuld mee?</h4>
                <p style={{ fontSize: "1rem" }}>Ja, sinds 2024 wordt er gekeken naar de actuele stand van je studieschuld, niet meer naar de oorspronkelijke schuld. Dit kan positief uitvallen voor je maximale lening.</p>
              </div>
              <div>
                <h4 style={{ fontWeight: 800, marginBottom: "0.5rem" }}>Wat is de invloed van de rente?</h4>
                <p style={{ fontSize: "1rem" }}>Hoe hoger de rente, hoe lager je maximale hypotheek. Dit komt omdat je maandlasten stijgen bij een hogere rente.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
