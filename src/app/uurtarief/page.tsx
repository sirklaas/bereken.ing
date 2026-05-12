import type { Metadata } from "next";
import RateCalculator from "@/components/RateCalculator";
import ToolLayout from "@/components/ToolLayout";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Uurtarief Berekenen als ZZP | Freelance Calculator 2026",
  description: "Bereken eenvoudig welk uurtarief je moet vragen als freelancer of ZZP'er om je gewenste netto inkomen te behalen.",
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
    <ToolLayout 
      intro="Werk & Ondernemen"
      title="Uurtarief ZZP" topic="uurtarief"
      subtitle="Bereken eenvoudig welk uurtarief je moet vragen als freelancer of ZZP'er om je gewenste netto inkomen te behalen."
    >
      <JsonLd data={schema} />

      

      <RateCalculator />

      <div style={{ marginTop: "4rem", maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.8rem" }}>Bepaal je waarde als ondernemer</h2>
        <p>
          Een goed uurtarief dekt niet alleen je salaris, maar ook je pensioen, verzekeringen en vakantiedagen.
          Onze calculator houdt rekening met alle verborgen kosten van het ondernemerschap.
        </p>
      </div>

      {/* PayPro Affiliate Block */}
      <div style={{
        marginTop: "3rem",
        padding: "2rem",
        background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
        borderRadius: "16px",
        border: "1px solid #475569",
        maxWidth: "800px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
          <span style={{ fontSize: "2rem" }}>💰</span>
          <h3 style={{ fontSize: "1.4rem", color: "#f8fafc", margin: 0 }}>Verdien geld met je website</h3>
        </div>
        <p style={{ color: "#cbd5e1", lineHeight: "1.6", marginBottom: "1.5rem" }}>
          Heb je een website, blog of social media volgers? Word affiliate en verdien commissie op elke sale.
          PayPro heeft al meer dan <strong style={{ color: "#60a5fa" }}>€10 miljoen</strong> aan commissies uitgekeerd.
        </p>
        <a
          href="https://www.paypro.nl/producten/Affiliate_registratie_PayPro/98556/223271"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.875rem 1.5rem",
            background: "linear-gradient(90deg, #10b981 0%, #059669 100%)",
            color: "white",
            textDecoration: "none",
            borderRadius: "10px",
            fontWeight: "600",
            fontSize: "1rem",
            transition: "transform 0.2s, box-shadow 0.2s"
          }}
        >
          Start als Affiliate →
        </a>
        <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginTop: "1rem" }}>
          Eenmalige administratievergoeding van €7,50. Daarna onbeperkt commissies verdienen.
        </p>
      </div>

    </ToolLayout>
  );
}
