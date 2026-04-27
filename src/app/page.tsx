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
        <section className="fluid-container" style={{ paddingBottom: "8rem" }}>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "4rem", textAlign: "center" }}>
          Populaire <span style={{ color: "var(--primary-accent)" }}>Tools</span>
        </h2>
        <div className="fluid-grid">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} style={{ textDecoration: "none" }}>
              <div className="pristine-card" style={{ 
                height: "100%", 
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
              }}>
                <span style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>{tool.icon}</span>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{tool.name}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--secondary)", lineHeight: 1.4 }}>{tool.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
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
