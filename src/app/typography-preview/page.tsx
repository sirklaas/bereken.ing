export default function TypographyPreview() {
  return (
    <div style={{ padding: "4rem 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <h3 className="animate-in">Gekozen Combinatie</h3>
          <h1 className="animate-in stagger-1">Fugaz One + Work Sans</h1>
          <h2 className="animate-in stagger-2">De perfecte mix voor bereken.ing</h2>
        </div>
        
        <div className="card animate-in" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h3 className="animate-in">Hypotheek Tool</h3>
          <h1 className="animate-in stagger-1">Hoeveel kun je maximaal lenen?</h1>
          <h2 className="animate-in stagger-2">Bereken je woningwaarde in 2026</h2>
          
          <p className="animate-in stagger-3" style={{ marginTop: "2rem" }}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. fusce ut pretium morbi. 
            Onze rekentools zijn ontworpen voor snelheid en nauwkeurigheid. 
            Met Work Sans als bodyfont garanderen we maximale leesbaarheid van alle cijfers en resultaten.
          </p>

          <div style={{ display: "flex", gap: "1rem", marginTop: "3rem" }}>
            <button className="btn btn-primary animate-in stagger-2">Bereken Nu</button>
            <button className="btn animate-in stagger-3" style={{ border: "1px solid var(--border)" }}>Meer Informatie</button>
          </div>
        </div>
      </div>
    </div>
  );
}
