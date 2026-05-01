"use client";

import ToolLayout from "@/components/ToolLayout";

export default function AiPlaatjesPage() {
  return (
    <ToolLayout
      title="AI Afbeeldingen Generator"
      subtitle="Creëer verbluffende visuele concepten. Beschrijf je idee en laat onze AI-prompt generator de perfecte instructies maken voor Midjourney of DALL-E."
      topic="ai"
    >
      <div className="card">
        <div className="ai-image-lab">
          <div className="input-group">
            <label style={{ fontWeight: 900, marginBottom: "0.5rem", display: "block" }}>Wat wil je zien?</label>
            <input type="text" placeholder="Bijv: 'Een futuristische stad met vliegende auto's'" className="ai-input" />
          </div>

          <div className="style-chips">
            <span className="chip active">Cyberpunk</span>
            <span className="chip">Olieverf</span>
            <span className="chip">Hyper-realistisch</span>
            <span className="chip">Potloodtekening</span>
            <span className="chip">8-bit Pixel Art</span>
          </div>

          <button className="button-primary" style={{ width: "100%", padding: "1.2rem", fontSize: "1.1rem" }}>
            Genereer Meesterwerk Concept
          </button>

          <div className="preview-box">
             <div className="shimmer-img"></div>
             <p className="hint text-muted">Jouw AI-meesterwerk verschijnt hier...</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ai-image-lab {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .ai-input {
          width: 100%;
          padding: 1rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          color: white;
          font-family: var(--font-jakarta);
        }
        .style-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .chip {
          padding: 6px 14px;
          background: rgba(255,255,255,0.1);
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          border: 1px solid transparent;
        }
        .chip.active {
          background: var(--primary-accent);
          border-color: white;
        }
        .preview-box {
          aspect-ratio: 1;
          background: rgba(0,0,0,0.3);
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .shimmer-img {
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
          border-radius: 16px;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </ToolLayout>
  );
}
