"use client";

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
      
      {/* 1. TOP AD SLOT (Full Width Banner) */}
      <section className="top-ad-section" style={{ background: "#f1f5f9", padding: "1.5rem 0" }}>
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

      {/* Main Content Grid with Sidebars */}
      <div className="fluid-container" style={{ paddingTop: "4rem", paddingBottom: "8rem" }}>
        <div className="home-main-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "var(--gap)",
          alignItems: "start"
        }}>
          
          {/* Left Sidebar */}
          <aside className="side-slot left-slot" style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>
            <div style={{ 
              background: "#FF007F", 
              width: "300px", 
              height: "600px", 
              borderRadius: "24px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              color: "white",
              fontWeight: 900,
              boxShadow: "0 15px 35px rgba(255,0,127,0.2)"
            }}>
              LEFT SKYSCRAPER
            </div>
            <div style={{ background: "#FF007F", width: "300px", height: "250px", borderRadius: "24px" }} />
          </aside>

          {/* Center Content */}
          <main style={{ minWidth: 0 }}>
            {/* Hero Section */}
            <section style={{ padding: "0 0 4rem", background: "white", textAlign: "center" }}>
              <h3 style={{ color: "var(--primary-accent)", letterSpacing: "0.2em", fontWeight: 800, fontSize: "0.8rem", marginBottom: "1.5rem" }}>DE SLIMSTE REKENTOOLS VAN 2026</h3>
              <h1 style={{ margin: "0 auto 1.5rem", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Berekeningen die je <span style={{ color: "var(--primary-accent)" }}>geld besparen</span>.
              </h1>
              <p style={{ maxWidth: "750px", margin: "0 auto 3.5rem", color: "var(--secondary)", fontSize: "1.1rem", fontWeight: 500, lineHeight: 1.6 }}>
                Van maximale hypotheek tot je studieschuld. Wij gebruiken de meest actuele wetgeving en Nibud-normen.
              </p>
              <p style={{ marginBottom: "1rem", fontSize: "0.75rem", fontWeight: 900, color: "var(--secondary)", letterSpacing: "0.1em" }}>ANDERE HANDIGE HULPJES</p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/hypotheek" className="btn btn-primary" style={{ padding: "1.2rem 2.5rem", borderRadius: "14px" }}>Bekijk je Hypotheek</Link>
                <Link href="/uurtarief" className="btn" style={{ padding: "1.2rem 2.5rem", borderRadius: "14px", border: "2px solid #e2e8f0", background: "white" }}>ZZP Calculator</Link>
              </div>
            </section>

            {/* Popular Tools Grid */}
            <section style={{ paddingBottom: "6rem" }}>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", marginBottom: "3.5rem", textAlign: "center", letterSpacing: "-0.01em" }}>
                Populaire <span style={{ color: "var(--primary-accent)" }}>Hulpjes</span>
              </h2>
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
                gap: "1.5rem" 
              }}>
                {tools.map((tool) => (
                  <Link key={tool.href} href={tool.href} style={{ textDecoration: "none" }}>
                    <div className="pristine-card" style={{ 
                      height: "100%", 
                      padding: "2.5rem 1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center"
                    }}>
                      <div style={{ 
                        width: "60px", 
                        height: "60px", 
                        background: "#f8fafc", 
                        borderRadius: "16px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        fontSize: "2.5rem",
                        marginBottom: "1.5rem"
                      }}>
                        {tool.icon}
                      </div>
                      <h3 style={{ fontSize: "1.1rem", marginBottom: "0.8rem", color: "var(--heading-color)" }}>{tool.name}</h3>
                      <p style={{ fontSize: "0.85rem", color: "var(--secondary)", lineHeight: 1.5 }}>{tool.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Mid Ad Slot */}
            <section style={{ paddingBottom: "6rem", display: "flex", justifyContent: "center" }}>
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
                fontSize: "1.2rem",
                boxShadow: "0 15px 35px rgba(255,0,127,0.15)"
              }}>
                 MID AD SLOT (728x250)
              </div>
            </section>

            {/* About Section */}
            <section style={{ padding: "4rem", background: "#f8fafc", borderRadius: "32px", border: "1px solid #e2e8f0" }}>
              <h3 style={{ color: "var(--primary-accent)", letterSpacing: "0.15em", fontWeight: 800, fontSize: "0.8rem", marginBottom: "1.5rem" }}>OVER BEREKEN.ING</h3>
              <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem", lineHeight: 1.2 }}>Onafhankelijke berekeningen voor slimme beslissingen.</h2>
              <p style={{ fontSize: "1.1rem", color: "var(--secondary)", lineHeight: 1.7 }}>
                Wij geloven dat financiële duidelijkheid voor iedereen toegankelijk moet zijn. Alleen de harde cijfers, gebaseerd op de meest recente wetgeving van 2026.
              </p>
            </section>
          </main>

          {/* Right Sidebar */}
          <aside className="side-slot right-slot" style={{ display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>
            <div style={{ background: "#FF007F", width: "300px", height: "250px", borderRadius: "24px" }} />
            <div style={{ 
              background: "#FF007F", 
              width: "300px", 
              height: "600px", 
              borderRadius: "24px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              color: "white",
              fontWeight: 900,
              boxShadow: "0 15px 35px rgba(255,0,127,0.2)"
            }}>
              RIGHT SKYSCRAPER
            </div>
          </aside>

        </div>
      </div>

      {/* 4. BOTTOM AD SLOT (Full Width) */}
      <section style={{ padding: "5rem 0", background: "white", borderTop: "1px solid #f1f5f9" }}>
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
            fontWeight: 900
          }}>
             BOTTOM AD SLOT (970x90)
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 1023px) {
          .top-ad-section, .side-slot {
            display: none !important;
          }
          .home-main-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 1400px) {
          .home-main-grid {
            grid-template-columns: 300px 1fr 300px !important;
          }
        }
        @media (max-width: 1399px) and (min-width: 1024px) {
          .home-main-grid {
            grid-template-columns: 1fr 300px !important;
          }
          .left-slot { display: none; }
        }
      `}</style>
    </div>
  );
}
