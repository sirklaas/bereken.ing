import Link from "next/link";
import AdSenseSlot from "@/components/AdSenseSlot";

export default function Home() {
  const tools = [
    { title: "Maximale Hypotheek", slug: "hypotheek", desc: "Bereken hoeveel je kunt lenen voor je droomhuis.", icon: "🏠" },
    { title: "Studieschuld DUO", slug: "studentenlening", desc: "Bereken je maandbedrag en rente-impact.", icon: "🎓" },
    { title: "Gezondheid & BMI", slug: "gezondheid", desc: "Bereken je BMI en dagelijkse caloriebehoefte.", icon: "🥗" },
    { title: "ZZP Uurtarief", slug: "uurtarief", desc: "Bereken het ideale tarief voor jouw inkomen.", icon: "💼" },
  ];

  return (
    <div>
      {/* Hero Section - Clean White */}
      <section style={{ padding: "8rem 0 6rem", background: "white" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h3>Slimme Rekentools</h3>
          <h1 style={{ maxWidth: "900px", margin: "0 auto 1.5rem" }}>
            Vlijmscherpe berekeningen voor <span style={{ color: "var(--primary-accent)" }}>elke vraag</span>.
          </h1>
          <h2 style={{ maxWidth: "700px", margin: "0 auto 3rem", color: "var(--secondary)", fontWeight: 500 }}>
            Van hypotheek tot uurtarief. Wij rekenen het voor je uit met de meest actuele formules van 2026.
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Link href="/hypotheek" className="btn btn-primary">Start Hypotheek Check</Link>
            <Link href="/uurtarief" className="btn" style={{ border: "1px solid var(--border)", color: "var(--primary-accent)" }}>Freelance Calculator</Link>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section style={{ padding: "4rem 0", background: "#fcfdfe" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Populaire Tools</h2>
          <div className="grid-layout">
            {tools.map((tool) => (
              <Link key={tool.slug} href={`/${tool.slug}`} style={{ textDecoration: "none" }}>
                <div className="card">
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{tool.icon}</div>
                  <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>{tool.title}</h2>
                  <p style={{ fontSize: "0.95rem", marginBottom: "1.5rem", color: "var(--secondary)" }}>{tool.desc}</p>
                  <span style={{ fontWeight: 800, color: "var(--primary-accent)", fontSize: "0.85rem" }}>Bereken nu →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Section */}
      <div className="container">
        <AdSenseSlot id="home-bottom" />
      </div>

      {/* SEO Content Section */}
      <section style={{ padding: "6rem 0", background: "white" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h3>Over bereken.ing</h3>
            <h2>Waarom kiezen voor onze tools?</h2>
            <p>
              In een wereld vol complexe financiële beslissingen heb je behoefte aan duidelijkheid. Onze missie is om ingewikkelde formules om te zetten in begrijpelijke resultaten. Of je nu je eerste huis koopt, je studieschuld wilt aflossen of je freelance tarief wilt optimaliseren: wij rekenen het voor je uit.
            </p>
            <div className="grid-layout" style={{ marginTop: "3rem" }}>
              <div>
                <h3 style={{ marginBottom: "0.5rem", fontSize: "0.75rem" }}>100% Onafhankelijk</h3>
                <p style={{ fontSize: "0.9rem" }}>Wij zijn niet verbonden aan banken of verzekeraars. Onze tools zijn er voor jou.</p>
              </div>
              <div>
                <h3 style={{ marginBottom: "0.5rem", fontSize: "0.75rem" }}>Altijd Up-to-date</h3>
                <p style={{ fontSize: "0.9rem" }}>Onze algoritmes worden dagelijks gecontroleerd op de laatste wet- en regelgeving voor 2026.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
