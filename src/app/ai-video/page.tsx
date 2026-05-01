"use client";

import ToolLayout from "@/components/ToolLayout";

export default function AiVideoPage() {
  return (
    <ToolLayout
      title="AI Video Generator"
      subtitle="Beschrijf je droomvideo en laat onze AI-modellen de rest doen. Van filmische scènes tot grappige animaties."
      topic="ai"
    >
      <div className="card">
        <div className="ai-container">
          <textarea 
            placeholder="Beschrijf de video die je wilt maken... (bijv: 'Een astronaut die op een keyboard speelt in de ruimte')"
            className="ai-textarea"
          ></textarea>
          
          <div className="ai-controls">
            <select className="ai-select">
              <option>Filmisch (Cinematic)</option>
              <option>Anime</option>
              <option>3D Render</option>
              <option>Realistisch</option>
            </select>
            <button className="button-primary" style={{ width: "100%" }}>
              Genereer Video Concept
            </button>
          </div>

          <div className="ai-placeholder">
            <div className="shimmer" style={{ height: "300px", borderRadius: "16px" }}></div>
            <p style={{ marginTop: "1rem", color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
              Klaar om te genereren? Beschrijf je scène en klik op de knop.
            </p>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: "2rem" }}>
        <h3>Hoe werkt AI Video?</h3>
        <p>
          Moderne AI-modellen zoals Sora en Runway kunnen tekst omzetten in verbluffende videobeelden. 
          Hoewel we hier een concept-tool aanbieden, zijn de mogelijkheden eindeloos. Gebruik deze tool om 
          inspiratie op te doen voor je volgende project of gewoon om te zien wat AI kan.
        </p>
      </div>

      <style jsx>{`
        .ai-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .ai-textarea {
          width: 100%;
          min-height: 120px;
          padding: 1rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          color: white;
          font-family: var(--font-jakarta);
          resize: vertical;
        }
        .ai-controls {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .ai-select {
          background: rgba(255,255,255,0.1);
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 0.8rem;
          border-radius: 12px;
          font-weight: 700;
        }
        .ai-placeholder {
          background: rgba(0,0,0,0.2);
          border: 2px dashed rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
        }
      `}</style>
    </ToolLayout>
  );
}
