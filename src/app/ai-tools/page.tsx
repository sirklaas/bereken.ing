"use client";

import ToolLayout from "@/components/ToolLayout";

const AI_TOOLS = [
  { name: "ChatGPT", cat: "Chat & Writing", desc: "De koning van AI-chatbots voor al je vragen en teksten.", link: "https://chat.openai.com" },
  { name: "Midjourney", cat: "Images", desc: "Creëer adembenemende kunstwerken met simpele tekst.", link: "https://www.midjourney.com" },
  { name: "HeyGen", cat: "Video", desc: "Maak realistische AI-video's met digitale avatars.", link: "https://www.heygen.com" },
  { name: "ElevenLabs", cat: "Audio", desc: "De meest realistische AI-stemmen ter wereld.", link: "https://elevenlabs.io" },
  { name: "Perplexity", cat: "Search", desc: "De AI-zoekmachine die direct antwoorden geeft.", link: "https://www.perplexity.ai" },
  { name: "Canva AI", cat: "Design", desc: "Design alles met behulp van slimme AI-tools.", link: "https://www.canva.com" },
];

export default function AiToolsPage() {
  return (
    <ToolLayout
      title="Beste AI Tools 2026"
      subtitle="Een samengestelde lijst van de meest krachtige AI-hulpmiddelen om je productiviteit en creativiteit te verhogen."
      topic="ai"
    >
      <div className="tool-grid">
        {AI_TOOLS.map(tool => (
          <div key={tool.name} className="card tool-card-item">
            <div className="tool-header">
              <span className="tool-badge">{tool.cat}</span>
              <h3>{tool.name}</h3>
            </div>
            <p>{tool.desc}</p>
            <a href={tool.link} target="_blank" rel="noopener noreferrer" className="button-primary" style={{ marginTop: "1rem", display: "block", textAlign: "center" }}>
              Bezoek {tool.name}
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        .tool-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .tool-card-item {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s;
        }
        .tool-card-item:hover {
          transform: translateY(-5px);
          border-color: var(--primary-accent);
        }
        .tool-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .tool-badge {
          background: var(--primary-accent);
          color: white;
          padding: 2px 10px;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 800;
          width: fit-content;
        }
      `}</style>
    </ToolLayout>
  );
}
