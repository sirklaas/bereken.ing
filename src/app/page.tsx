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
      {/* Main Content Grid */}
      <div className="page-shell" style={{ paddingTop: "4rem", paddingBottom: "8rem" }}>
        {/* Hero Section (Aligned to Content Width) */}
        <div className="pristine-grid" style={{ marginBottom: "3rem" }}>
          <section className="hero-section" style={{ gridColumn: 2, textAlign: "center", marginBottom: 0 }}>
            <h3 className="hero-eyebrow">DE SLIMSTE REKENTOOLS VAN 2026</h3>
            <h1 className="hero-title">
              Berekeningen die je <span className="text-gradient">geld besparen</span>.
            </h1>
            <p className="hero-text">
              Van maximale hypotheek tot je studieschuld. Wij gebruiken de meest actuele wetgeving en Nibud-normen.
            </p>
          </section>
        </div>

        <div className="pristine-grid">
          {/* Center Content */}
          <main className="home-main-content" style={{ gridColumn: "1 / -1" }}>
            {/* Popular Tools Grid */}
            <section style={{ paddingBottom: "6rem" }}>
              <h2 className="section-title">
                Populaire <span className="text-gradient">Hulpjes</span>
              </h2>
              <div className="tools-grid">
                {tools.map((tool) => (
                  <Link key={tool.href} href={tool.href} className="tool-card-link">
                    <div className="pristine-card tool-card">
                      <div className="tool-icon-wrapper">
                        {tool.icon}
                      </div>
                      <h3 className="tool-card-title">{tool.name}</h3>
                      <p className="tool-card-desc">{tool.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* About Section */}
            <section className="about-card">
              <h3 className="hero-eyebrow">OVER BEREKEN.ING</h3>
              <h2 className="about-title">Onafhankelijke berekeningen voor slimme beslissingen.</h2>
              <p className="about-text">
                Wij geloven dat financiële duidelijkheid voor iedereen toegankelijk moet zijn. Alleen de harde cijfers, gebaseerd op de meest recente wetgeving van 2026.
              </p>
            </section>
          </main>
        </div>
      </div>

      <style jsx>{`
        .home-main-content {
          min-width: 0;
        }
        .hero-section {
          padding: 0 0 4rem;
          text-align: center;
        }
        .hero-eyebrow {
          color: var(--primary-accent);
          letter-spacing: 0.2em;
          font-weight: 800;
          font-size: 0.8rem;
          margin-bottom: 1.5rem;
        }
        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.2rem);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }
        .text-gradient {
          color: var(--primary-accent);
          background: linear-gradient(135deg, #FF007F, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-text {
          max-width: 700px;
          margin: 0 auto 3.5rem;
          color: var(--secondary);
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 1.6;
        }
        .section-title {
          font-size: clamp(2rem, 5vw, 2.8rem);
          margin-bottom: 3.5rem;
          text-align: center;
        }
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .tool-card-link {
          text-decoration: none;
          transition: transform 0.3s ease;
        }
        .tool-card-link:hover {
          transform: translateY(-8px);
        }
        .tool-card {
          height: 100%;
          padding: 3rem 2rem;
          text-align: center;
        }
        .tool-icon-wrapper {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }
        .tool-card-title {
          font-size: 1.2rem;
          margin-bottom: 0.8rem;
          color: var(--heading-color);
        }
        .tool-card-desc {
          font-size: 0.95rem;
          color: var(--secondary);
          line-height: 1.5;
        }
        .about-card {
          padding: 4rem;
          background: #f8fafc;
          border-radius: 32px;
          border: 1px solid #e2e8f0;
        }
        .about-title {
          font-size: 2.2rem;
          margin-bottom: 2rem;
          line-height: 1.2;
        }
        .about-text {
          font-size: 1.1rem;
          color: var(--secondary);
          line-height: 1.7;
        }
      `}</style>
    </div>
  );
}
