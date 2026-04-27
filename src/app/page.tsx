import Link from "next/link";

export default function Home() {
  const tools = [
    { name: "Maximale Hypotheek", href: "/hypotheek", desc: "Bereken hoeveel je kunt lenen voor je droomhuis.", icon: "🏠" },
    { name: "Studieschuld DUO", href: "/studentenlening", desc: "Bereken je maandbedrag en rente-impact.", icon: "🎓" },
    { name: "Gezondheid & BMI", href: "/gezondheid", desc: "Bereken je BMI en dagelijkse caloriebehoefte.", icon: "🥗" },
    { name: "ZZP Uurtarief", href: "/uurtarief", desc: "Bereken het ideale tarief voor jouw inkomen.", icon: "💼" },
    { name: "Vaste Lasten", href: "/vaste-lasten", desc: "Krijg direct overzicht van al je maandelijkse uitgaven.", icon: "📊" },
  ];

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* Hero Section */}
      <section style={{ padding: "8rem 0 6rem", background: "white" }}>
        <div className="fluid-container" style={{ textAlign: "center" }}>
          <h3 style={{ color: "var(--primary-accent)", letterSpacing: "0.2em", fontWeight: 800, fontSize: "0.8rem", marginBottom: "1rem" }}>SLIMME REKENTOOLS</h3>
          <h1 style={{ maxWidth: "900px", margin: "0 auto 1.5rem", fontSize: "clamp(2.5rem, 8vw, 4.5rem)", lineHeight: 1 }}>
            Vlijmscherpe berekeningen voor <span style={{ color: "var(--primary-accent)" }}>elke vraag</span>.
          </h1>
          <p style={{ maxWidth: "700px", margin: "0 auto 3.5rem", color: "var(--secondary)", fontSize: "1.2rem", fontWeight: 500, lineHeight: 1.6 }}>
            Van hypotheek tot uurtarief. Wij rekenen het voor je uit met de meest actuele formules van 2026.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/hypotheek" className="btn btn-primary" style={{ padding: "1.2rem 2.5rem", fontSize: "1rem", borderRadius: "14px" }}>Start Hypotheek Check</Link>
            <Link href="/uurtarief" className="btn" style={{ padding: "1.2rem 2.5rem", fontSize: "1rem", borderRadius: "14px", border: "1px solid var(--border)", color: "var(--primary-accent)", background: "white" }}>Freelance Calculator</Link>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section style={{ paddingBottom: "8rem" }}>
        <div className="fluid-container">
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "4rem", textAlign: "center" }}>
            Populaire <span style={{ color: "var(--primary-accent)" }}>Tools</span>
          </h2>
          <div className="fluid-grid">
            {tools.map((tool) => (
              <Link key={tool.href} href={tool.href} style={{ textDecoration: "none" }}>
                <div className="pristine-card" style={{ 
                  height: "100%", 
                  padding: "2.5rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center"
                }}>
                  <span style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>{tool.icon}</span>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "0.8rem", color: "var(--heading-color)" }}>{tool.name}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--secondary)", lineHeight: 1.5 }}>{tool.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Re-designed Ad Section (Centered & Blocked) */}
      <section style={{ paddingBottom: "8rem" }}>
        <div className="fluid-container" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ 
            background: "#FF007F", 
            width: "100%",
            maxWidth: "970px",
            height: "250px", 
            borderRadius: "24px", 
            display: "flex", 
            flexDirection: "column",
            alignItems: "center", 
            justifyContent: "center", 
            color: "white"
          }}>
             <span style={{ fontWeight: 900, fontSize: "1.5rem" }}>RESERVED PROMO SLOT</span>
             <span style={{ opacity: 0.8, fontSize: "0.8rem", marginTop: "0.5rem" }}>970x250 Large Leaderboard</span>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section style={{ padding: "8rem 0", background: "#f8fafc" }}>
        <div className="fluid-container">
          <div style={{ maxWidth: "850px", margin: "0 auto" }}>
            <h3 style={{ color: "var(--primary-accent)", letterSpacing: "0.1em", fontWeight: 800, fontSize: "0.8rem", marginBottom: "1.5rem" }}>OVER BEREKEN.ING</h3>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Waarom kiezen voor onze tools?</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--secondary)", lineHeight: 1.7, marginBottom: "3rem" }}>
              In een wereld vol complexe financiële beslissingen heb je behoefte aan duidelijkheid. Onze missie is om ingewikkelde formules om te zetten in begrijpelijke resultaten. Of je nu je eerste huis koopt, je studieschuld wilt aflossen of je freelance tarief wilt optimaliseren: wij rekenen het voor je uit.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
              <div>
                <h3 style={{ marginBottom: "0.8rem", fontSize: "1rem" }}>100% Onafhankelijk</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--secondary)", lineHeight: 1.6 }}>Wij zijn niet verbonden aan banken of verzekeraars. Onze tools zijn er uitsluitend om jou te helpen betere keuzes te maken.</p>
              </div>
              <div>
                <h3 style={{ marginBottom: "0.8rem", fontSize: "1rem" }}>Altijd Up-to-date</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--secondary)", lineHeight: 1.6 }}>Onze algoritmes worden dagelijks gecontroleerd op de laatste wet- en regelgeving voor 2026. Zo ben je altijd zeker van je zaak.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
