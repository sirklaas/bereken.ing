import type { Metadata } from "next";
import StudentLoanCalculator from "@/components/StudentLoanCalculator";
import AdSenseSlot from "@/components/AdSenseSlot";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Studieschuld Berekenen 2026 | DUO Maandbedrag & Rente",
  description: "Bereken direct je maandelijkse aflossing voor je studieschuld bij DUO. Inclusief 35-jaar en 15-jaar stelsels en impact van de huidige rente.",
  keywords: ["studieschuld berekenen", "duo aflossen", "rente studieschuld", "maandbedrag duo", "studieschuld hypotheek"],
};

export default function StudentLoanPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialCalculator",
    "name": "Studieschuld Calculator",
    "description": "Berekening van studieschuld aflossing bij DUO.",
    "url": "https://www.bereken.ing/studentenlening"
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
            Personal Finance Tools
          </h3>
          <h1 style={{ marginBottom: "1.5rem" }}>Studieschuld <span style={{ color: "var(--primary-accent)" }}>Berekenen</span></h1>
          <h2 style={{ fontSize: "1.25rem", color: "var(--secondary)", fontWeight: 500, lineHeight: 1.5, marginBottom: "3rem" }}>
            Hoeveel ga jij maandelijks aflossen aan DUO? Gebruik onze slimme tool om je maandbedrag te berekenen op basis van de huidige rente en aflosregels.
          </h2>

          <StudentLoanCalculator />

          {/* Detailed Content for SEO & AISO */}
          <article style={{ marginTop: "5rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Hoe werkt het aflossen van je studieschuld?</h2>
            <p>
              Wanneer je stopt met studeren, begint niet direct de aflosfase. Je hebt eerst een aanloopperiode van twee jaar. 
              Daarna start de verplichte aflossing. Het bedrag dat je per maand betaalt hangt af van je totale schuld, 
              de rente op dat moment, en het stelsel waar je onder valt (het oude 15-jarige stelsel of het nieuwe 35-jarige stelsel).
            </p>

            <AdSenseSlot id="inline-ad" format="fluid" style={{ margin: "3rem 0" }} />

            <h3 style={{ marginTop: "2rem", color: "var(--foreground)" }}>De invloed van rente</h3>
            <p>
              Lange tijd was de rente op studieschulden 0%, maar dat is veranderd. Sinds 2024 is de rente aanzienlijk gestegen. 
              Zelfs een klein percentage kan op een schuld van €30.000 duizenden euro's aan extra kosten betekenen over de hele looptijd.
            </p>

            <h2 style={{ fontSize: "1.8rem", marginTop: "3rem", marginBottom: "1.5rem" }}>Veelgestelde Vragen (FAQ)</h2>
            <div style={{ display: "grid", gap: "2rem" }}>
              <div>
                <h4 style={{ fontWeight: 800, marginBottom: "0.5rem" }}>Wanneer begint DUO met afschrijven?</h4>
                <p style={{ fontSize: "1rem" }}>De verplichte aflossing begint op 1 januari van het tweede jaar nadat je bent afgestudeerd.</p>
              </div>
              <div>
                <h4 style={{ fontWeight: 800, marginBottom: "0.5rem" }}>Heeft een studieschuld invloed op mijn hypotheek?</h4>
                <p style={{ fontSize: "1rem" }}>Ja, banken kijken naar je oorspronkelijke schuld. Een schuld kan je maximale hypotheek met tienduizenden euro's verlagen.</p>
              </div>
            </div>
          </article>
        </div>

        {/* Sidebar AdZone */}
        <aside style={{ position: "sticky", top: "120px" }}>
          <AdSenseSlot id="sidebar-ad" format="rectangle" style={{ minHeight: "600px" }} />
          <div style={{ marginTop: "2rem", padding: "1.5rem", background: "#f8fafc", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 800, marginBottom: "1rem" }}>Handige Links</h4>
            <ul style={{ listStyle: "none", fontSize: "0.85rem", display: "grid", gap: "0.8rem" }}>
              <li><a href="https://duo.nl" style={{ color: "var(--primary-accent)" }}>Officiële DUO Website</a></li>
              <li><a href="/hypotheek" style={{ color: "var(--primary-accent)" }}>Hypotheek berekenen</a></li>
            </ul>
          </div>
        </aside>

      </div>

      {/* Bottom AdZone */}
      <AdSenseSlot id="bottom-ad" format="rectangle" style={{ marginTop: "4rem" }} />
    </div>
  );
}
