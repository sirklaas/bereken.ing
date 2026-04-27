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
      
      {/* 1. TOP AD SLOT (The Money Maker) */}
      <section style={{ background: "#f1f5f9", padding: "1.5rem 0" }}>
        <div className="fluid-container" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ 
            background: "#FF007F", 
            width: "100%",
            maxWidth: "970px",
            height: "90px", 
            borderRadius: "12px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            color: "white",
            fontWeight: 900,
            fontSize: "1.2rem",
            boxShadow: "0 10px 30px rgba(255,0,127,0.3)"
          }}>
             AD SLOT 1 - TOP BANNER (970x90)
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section style={{ padding: "6rem 0 4rem", background: "white" }}>
        <div className="fluid-container" style={{ textAlign: "center" }}>
          <h3 style={{ color: "var(--primary-accent)", letterSpacing: "0.2em", fontWeight: 800, fontSize: "0.8rem", marginBottom: "1.5rem" }}>DE SLIMSTE REKENTOOLS VAN 2026</h3>
          <h1 style={{ maxWidth: "1000px", margin: "0 auto 1.5rem", fontSize: "clamp(3rem, 9vw, 5.5rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
            Berekeningen die je <span style={{ color: "var(--primary-accent)" }}>geld besparen</span>.
          </h1>
          <p style={{ maxWidth: "750px", margin: "0 auto 3.5rem", color: "var(--secondary)", fontSize: "1.25rem", fontWeight: 500, lineHeight: 1.6 }}>
            Van maximale hypotheek tot je studieschuld. Wij gebruiken de meest actuele wetgeving en Nibud-normen voor een vlijmscherp resultaat.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/hypotheek" className="btn btn-primary" style={{ padding: "1.4rem 3rem", fontSize: "1.1rem", borderRadius: "16px", boxShadow: "0 20px 40px rgba(159,160,195,0.3)" }}>Bekijk je Hypotheek</Link>
            <Link href="/uurtarief" className="btn" style={{ padding: "1.4rem 3rem", fontSize: "1.1rem", borderRadius: "16px", border: "2px solid #e2e8f0", background: "white", color: "var(--heading-color)" }}>ZZP Calculator</Link>
          </div>
        </div>
      </section>

      {/* 2. MID AD SLOT */}
      <section style={{ paddingBottom: "6rem" }}>
        <div className="fluid-container" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ 
            background: "#FF007F", 
            width: "100%",
            maxWidth: "728px",
            height: "250px", 
            borderRadius: "24px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            color: "white",
            fontWeight: 900,
            fontSize: "1.4rem",
            boxShadow: "0 15px 35px rgba(255,0,127,0.2)"
          }}>
             AD SLOT 2 - MID RECTANGLE (728x250)
          </div>
        </div>
      </section>

      {/* Popular Tools Grid */}
      <section style={{ paddingBottom: "8rem" }}>
        <div className="fluid-container">
          <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)", marginBottom: "4.5rem", textAlign: "center", letterSpacing: "-0.01em" }}>
            Onze Populairste <span style={{ color: "var(--primary-accent)" }}>Hulpjes</span>
          </h2>
          <div className="fluid-grid">
            {tools.map((tool) => (
              <Link key={tool.href} href={tool.href} style={{ textDecoration: "none" }}>
                <div className="pristine-card" style={{ 
                  height: "100%", 
                  padding: "3rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center"
                }}>
                  <div style={{ 
                    width: "80px", 
                    height: "80px", 
                    background: "#f8fafc", 
                    borderRadius: "20px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    fontSize: "3rem",
                    marginBottom: "2rem"
                  }}>
                    {tool.icon}
                  </div>
                  <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem", color: "var(--heading-color)" }}>{tool.name}</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--secondary)", lineHeight: 1.6 }}>{tool.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LARGE AD SLOT (High Impact) */}
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
             <span style={{ fontWeight: 900, fontSize: "1.8rem" }}>AD SLOT 3 - LARGE LEADERBOARD</span>
             <span style={{ opacity: 0.8, fontSize: "0.9rem", marginTop: "0.8rem", letterSpacing: "0.1em" }}>MAXIMALE OPBRENGST POSITIE</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: "8rem 0", background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
        <div className="fluid-container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h3 style={{ color: "var(--primary-accent)", letterSpacing: "0.15em", fontWeight: 800, fontSize: "0.85rem", marginBottom: "1.5rem" }}>OVER BEREKEN.ING</h3>
            <h2 style={{ fontSize: "2.8rem", marginBottom: "2.5rem", lineHeight: 1.1 }}>Onafhankelijke berekeningen voor slimme beslissingen.</h2>
            <p style={{ fontSize: "1.2rem", color: "var(--secondary)", lineHeight: 1.8, marginBottom: "4rem" }}>
              Wij geloven dat financiële duidelijkheid voor iedereen toegankelijk moet zijn. Geen kleine lettertjes, geen verborgen kosten. Alleen de harde cijfers, gebaseerd op de meest recente wetgeving van 2026.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
              <div style={{ borderLeft: "4px solid var(--primary-accent)", paddingLeft: "2rem" }}>
                <h3 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>100% Onafhankelijk</h3>
                <p style={{ fontSize: "1rem", color: "var(--secondary)", lineHeight: 1.6 }}>Onze tools zijn niet gebonden aan financiële instellingen. We geven je het eerlijke verhaal.</p>
              </div>
              <div style={{ borderLeft: "4px solid var(--primary-accent)", paddingLeft: "2rem" }}>
                <h3 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>Actuele Nibud-Normen</h3>
                <p style={{ fontSize: "1rem", color: "var(--secondary)", lineHeight: 1.6 }}>Onze rekenmodellen worden direct bijgewerkt bij nieuwe regelgeving in 2026.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM AD SLOT */}
      <section style={{ padding: "5rem 0", background: "white" }}>
        <div className="fluid-container" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ 
            background: "#FF007F", 
            width: "100%",
            maxWidth: "728px",
            height: "90px", 
            borderRadius: "12px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            color: "white",
            fontWeight: 900
          }}>
             AD SLOT 4 - BOTTOM BANNER (728x90)
          </div>
        </div>
      </section>

    </div>
  );
}
