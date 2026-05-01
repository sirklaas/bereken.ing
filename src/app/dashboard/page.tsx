"use client";

import React, { useState, useTransition, useEffect } from "react";
import { TOOL_CONTENT, ToolContent } from "@/config/toolContent";
import { updateToolContent, pushToGitHub, rewriteTool, rewriteAllTools, checkAffiliateLinks, updateAffiliateTopic, updatePartnerGrid } from "./actions";
import { AFFILIATE_CONFIG } from "@/config/affiliateConfig";
import { PARTNER_CONFIG } from "@/config/partnerConfig";
import Link from "next/link";

export default function ContentDashboard() {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [tools, setTools] = useState(Object.values(TOOL_CONTENT));
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isPushing, setIsPushing] = useState(false);
  const [isBulkWriting, setIsBulkWriting] = useState(false);
  const [isCheckingLinks, setIsCheckingLinks] = useState(false);
  const [linkStatus, setLinkStatus] = useState<Record<string, boolean>>({});

  const categories = ["Alle", ...Array.from(new Set(tools.map(t => t.category)))];

  const filteredTools = activeCategory === "Alle" 
    ? tools 
    : tools.filter(t => t.category === activeCategory);

  const handleSave = async (updatedTool: ToolContent) => {
    startTransition(async () => {
      const result = await updateToolContent(updatedTool);
      if (result.success) {
        setTools(tools.map(t => t.id === updatedTool.id ? updatedTool : t));
        setEditingId(null);
      } else {
        alert("Fout bij opslaan: " + result.error);
      }
    });
  };

  const handlePush = async () => {
    setIsPushing(true);
    const result = await pushToGitHub();
    setIsPushing(false);
    if (result.success) {
      alert("Changes pushed to GitHub successfully!");
    } else {
      alert("Push failed: " + result.error);
    }
  };

  const handleBulkRewrite = async () => {
    if (filteredTools.length === 0) return;
    if (!confirm("Weet je het zeker? Dit zal ALLE tools in de huidige selectie herschrijven met Claude AI.")) return;
    setIsBulkWriting(true);
    try {
      const result = await rewriteAllTools(filteredTools);
      if (result.success) {
        alert(`Klaar! ${result.count} tools zijn herschreven.`);
        window.location.reload();
      }
    } catch (error: any) {
      alert("Bulk Fout: " + error.message);
    } finally {
      setIsBulkWriting(false);
    }
  };

  const handleCheckLinks = async () => {
    setIsCheckingLinks(true);
    const result = await checkAffiliateLinks();
    setIsCheckingLinks(false);
    if (result.success) {
      setLinkStatus(result.status);
    }
  };

  return (
    <div style={{ padding: "4rem 2rem", maxWidth: "1200px", margin: "0 auto", fontFamily: "var(--font-main)" }}>
      <header style={{ marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>Content Dashboard</h1>
          <p style={{ color: "#64748b" }}>Beheer je tools, AI content en affiliate links.</p>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button 
            onClick={handleCheckLinks}
            disabled={isCheckingLinks}
            style={{
              padding: "1rem 1.5rem",
              background: "#10b981", // Green
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontWeight: 700,
              cursor: "pointer",
              opacity: isCheckingLinks ? 0.7 : 1
            }}
          >
            {isCheckingLinks ? "Links Checken..." : "Check Affiliates"}
          </button>
          <button 
            onClick={handleBulkRewrite}
            disabled={isBulkWriting || isPushing}
            style={{
              padding: "1rem 1.5rem",
              background: "#6366f1",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontWeight: 700,
              cursor: "pointer",
              opacity: isBulkWriting ? 0.7 : 1
            }}
          >
            {isBulkWriting ? "AI Schrijft..." : "Herschrijf Alle (AI)"}
          </button>
          <button 
            onClick={handlePush}
            disabled={isPushing || isBulkWriting}
            style={{
              padding: "1rem 2rem",
              background: "#24292f",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontWeight: 800,
              cursor: "pointer",
              opacity: isPushing ? 0.7 : 1
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            {isPushing ? "Pushing..." : "Push to GitHub"}
          </button>
        </div>
      </header>

      {/* Category Filter Bar */}
      <div style={{ 
        display: "flex", 
        gap: "0.8rem", 
        marginBottom: "3rem", 
        paddingBottom: "1.5rem", 
        borderBottom: "2px solid #f1f5f9",
        overflowX: "auto" 
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: "0.8rem 1.5rem",
              borderRadius: "12px",
              border: "none",
              background: activeCategory === cat ? "var(--primary-accent)" : "white",
              color: activeCategory === cat ? "white" : "#64748b",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: activeCategory === cat ? "0 4px 12px rgba(99, 102, 241, 0.3)" : "0 2px 4px rgba(0,0,0,0.05)",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gap: "2rem" }}>
        {filteredTools.map((tool) => (
          <ToolCard 
            key={tool.id} 
            tool={tool} 
            isEditing={editingId === tool.id}
            onEdit={() => setEditingId(tool.id)}
            onCancel={() => setEditingId(null)}
            onSave={handleSave}
            isPending={isPending}
            linkHealth={linkStatus[tool.topic]}
          />
        ))}
      </div>
    </div>
  );
}

function MonetizationEditor({ topic, onSave }: { topic: string, onSave: () => void }) {
  const affiliateConfig = (AFFILIATE_CONFIG.topics as any)[topic];
  const partners = PARTNER_CONFIG[topic] || [];

  const [prefData, setPrefData] = useState(affiliateConfig?.preferred || { name: "", description: "", url: "" });
  const [partnerList, setPartnerList] = useState(partners);
  const [isSaving, setIsSaving] = useState(false);

  const handleSavePref = async () => {
    setIsSaving(true);
    const updated = { ...affiliateConfig, preferred: prefData };
    const res = await updateAffiliateTopic(topic, updated);
    setIsSaving(false);
    if (res.success) alert("Preferred Offer opgeslagen!");
    else alert("Fout: " + res.error);
  };

  const handleSavePartners = async () => {
    setIsSaving(true);
    const res = await updatePartnerGrid(topic, partnerList);
    setIsSaving(false);
    if (res.success) alert("Partner Grid opgeslagen!");
    else alert("Fout: " + res.error);
  };

  const updatePartner = (index: number, field: string, value: string) => {
    const newList = [...partnerList];
    newList[index] = { ...newList[index], [field]: value };
    setPartnerList(newList);
  };

  const addPartner = () => {
    if (partnerList.length >= 12) return; // Keep it clean
    setPartnerList([...partnerList, { name: "", logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128", href: "", description: "" }]);
  };

  return (
    <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "2px solid #f1f5f9" }}>
      <h3 style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        💰 Monetization & Authority Grid
      </h3>
      
      {/* Preferred Offer Section */}
      <div style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "16px", border: "1px solid #e2e8f0", marginBottom: "2rem" }}>
        <h4 style={{ fontSize: "0.8rem", color: "var(--primary-accent)", textTransform: "uppercase", marginBottom: "1rem" }}>Preferred Partner (Top Deal Box)</h4>
        <div style={{ display: "grid", gap: "1rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "1rem" }}>
            <input style={inputStyle} placeholder="Naam (Heading)" value={prefData.name} onChange={e => setPrefData({...prefData, name: e.target.value})} />
            <input style={inputStyle} placeholder="Affiliate URL" value={prefData.url} onChange={e => setPrefData({...prefData, url: e.target.value})} />
          </div>
          <input style={inputStyle} placeholder="Description (Body)" value={prefData.description} onChange={e => setPrefData({...prefData, description: e.target.value})} />
          <button onClick={handleSavePref} disabled={isSaving} style={miniButtonStyle}>Update Preferred Offer</button>
        </div>
      </div>

      {/* Partner Grid Section */}
      <div style={{ background: "white", padding: "1.5rem", borderRadius: "16px", border: "1px solid #e2e8f0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <h4 style={{ fontSize: "0.8rem", color: "#64748b", textTransform: "uppercase" }}>Authority Partners ({partnerList.length})</h4>
          <button onClick={addPartner} style={{ ...miniButtonStyle, background: "#10b981" }}>+ Partner Toevoegen</button>
        </div>
        
        <div style={{ display: "grid", gap: "0.8rem" }}>
          {partnerList.map((p, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1.5fr 2fr 1fr 40px", gap: "0.5rem", alignItems: "center", padding: "0.5rem", background: "#f8fafc", borderRadius: "8px" }}>
              <input style={{...inputStyle, padding: "0.5rem"}} placeholder="Naam" value={p.name} onChange={e => updatePartner(i, "name", e.target.value)} />
              <input style={{...inputStyle, padding: "0.5rem"}} placeholder="Link" value={p.href} onChange={e => updatePartner(i, "href", e.target.value)} />
              <input style={{...inputStyle, padding: "0.5rem"}} placeholder="Favicon" value={p.logo} onChange={e => updatePartner(i, "logo", e.target.value)} />
              <button 
                onClick={() => setPartnerList(partnerList.filter((_, idx) => idx !== i))}
                style={{ background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontWeight: 800 }}
              >✕</button>
            </div>
          ))}
        </div>
        <button onClick={handleSavePartners} disabled={isSaving} style={{ ...miniButtonStyle, marginTop: "1rem", width: "100%" }}>Opslaan Partner Grid</button>
      </div>
    </div>
  );
}

const miniButtonStyle = {
  padding: "0.6rem 1rem",
  background: "var(--primary-accent)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "0.75rem",
  fontWeight: 700,
  cursor: "pointer",
  transition: "opacity 0.2s"
};

function ToolCard({ tool, isEditing, onEdit, onCancel, onSave, isPending, linkHealth }: { 
  tool: ToolContent, 
  isEditing: boolean, 
  onEdit: () => void, 
  onCancel: () => void,
  onSave: (tool: ToolContent) => void,
  isPending: boolean,
  linkHealth?: boolean
}) {
  const [formData, setFormData] = useState(tool);
  const [isRewriting, setIsRewriting] = useState(false);

  // Check if this tool has an affiliate offer configured
  const hasAffiliate = !!(AFFILIATE_CONFIG.topics as any)[tool.topic];

  const handleAiRewrite = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRewriting(true);
    const result = await rewriteTool(tool);
    setIsRewriting(false);
    if (result.success) {
      setFormData(result.data);
      if (!isEditing) onEdit();
    } else {
      alert("AI Fout: " + result.error);
    }
  };

  if (isEditing) {
    return (
      <div style={{ 
        background: "white", 
        padding: "2.5rem", 
        borderRadius: "20px", 
        border: "2px solid var(--primary-accent)",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
          <h3 style={{ margin: 0 }}>Bewerken: {tool.title}</h3>
          <button 
            onClick={handleAiRewrite}
            disabled={isRewriting}
            style={{
              padding: "0.5rem 1rem",
              background: "rgba(99, 102, 241, 0.1)",
              color: "var(--primary-accent)",
              border: "1px solid var(--primary-accent)",
              borderRadius: "8px",
              fontWeight: 700,
              cursor: "pointer"
            }}
          >
            {isRewriting ? "AI aan het werk..." : "✨ Deep AI Rewrite"}
          </button>
        </div>

        <div style={{ display: "grid", gap: "1.5rem" }}>
          <div>
            <label style={labelStyle}>Intro Heading</label>
            <input 
              style={inputStyle} 
              value={formData.intro} 
              onChange={e => setFormData({...formData, intro: e.target.value})} 
            />
          </div>
          <div>
            <label style={labelStyle}>Heading (H1)</label>
            <input 
              style={inputStyle} 
              value={formData.title} 
              onChange={e => setFormData({...formData, title: e.target.value})} 
            />
          </div>
          <div>
            <label style={labelStyle}>Subheading</label>
            <textarea 
              style={{...inputStyle, minHeight: "80px"}} 
              value={formData.subtitle} 
              onChange={e => setFormData({...formData, subtitle: e.target.value})} 
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div>
              <label style={labelStyle}>Bottom Title (H2)</label>
              <input 
                style={inputStyle} 
                value={formData.contentTitle || ""} 
                onChange={e => setFormData({...formData, contentTitle: e.target.value})} 
              />
            </div>
            <div>
              <label style={labelStyle}>Meta Title (SEO)</label>
              <input 
                style={inputStyle} 
                value={formData.metaTitle} 
                onChange={e => setFormData({...formData, metaTitle: e.target.value})} 
              />
            </div>
          </div>
          <div>
            <label style={{ ...labelStyle, color: "#f59e0b" }}>📚 Gesuggereerde PayPro Cursus (AI Tip)</label>
            <input 
              style={{ ...inputStyle, borderColor: "#f59e0b" }} 
              placeholder="Bijv: Masterclass Hypotheekvrij Wonen"
              value={formData.suggestedCourse || ""} 
              onChange={e => setFormData({...formData, suggestedCourse: e.target.value})} 
            />
          </div>
          <div>
            <label style={labelStyle}>Bottom Body / Intro Body</label>
            <textarea 
              style={{...inputStyle, minHeight: "120px"}} 
              value={formData.contentText || ""} 
              onChange={e => setFormData({...formData, contentText: e.target.value})} 
            />
          </div>

          <MonetizationEditor topic={tool.topic} onSave={() => {}} />
          
          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
            <button 
              onClick={() => onSave(formData)} 
              disabled={isPending}
              style={{
                padding: "1rem 2rem",
                borderRadius: "12px",
                background: "var(--primary-accent)",
                color: "white",
                border: "none",
                fontWeight: 700,
                cursor: "pointer",
                opacity: isPending ? 0.7 : 1
              }}
            >
              {isPending ? "Opslaan..." : "Wijzigingen Opslaan"}
            </button>
            <button 
              onClick={onCancel}
              style={{
                padding: "1rem 2rem",
                borderRadius: "12px",
                background: "#f1f5f9",
                color: "#64748b",
                border: "none",
                fontWeight: 700,
                cursor: "pointer"
              }}
            >
              Annuleren
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={onEdit}
      style={{ 
        background: "white", 
        padding: "2rem", 
        borderRadius: "16px", 
        border: "1px solid #e2e8f0",
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
        cursor: "pointer",
        transition: "all 0.2s ease",
        position: "relative"
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "var(--primary-accent)"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "#e2e8f0"}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <div>
            <span style={{ 
              fontSize: "0.7rem", 
              fontWeight: 800, 
              color: "var(--primary-accent)", 
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              background: "rgba(99, 102, 241, 0.1)",
              padding: "4px 8px",
              borderRadius: "4px"
            }}>{tool.intro}</span>
            <h2 style={{ fontSize: "1.5rem", marginTop: "0.5rem" }}>{tool.title}</h2>
          </div>
          
          {/* Affiliate Status Badge */}
          <div style={{ 
            padding: "4px 12px", 
            borderRadius: "20px", 
            fontSize: "0.65rem", 
            fontWeight: 900,
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            background: hasAffiliate ? (linkHealth === false ? "#fee2e2" : "#ecfdf5") : "#fff7ed",
            color: hasAffiliate ? (linkHealth === false ? "#ef4444" : "#10b981") : "#f97316"
          }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "currentColor" }} />
            {hasAffiliate ? (linkHealth === false ? "LINK BROKEN" : "AFFILIATE OK") : "NO OFFER"}
          </div>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
          <button 
            onClick={handleAiRewrite}
            disabled={isRewriting}
            style={{
              padding: "0.4rem 0.8rem",
              background: "#6366f1",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "0.7rem",
              fontWeight: 800,
              cursor: "pointer"
            }}
          >
            {isRewriting ? "AI..." : "✨ AI Audit"}
          </button>
          <Link href={`/${tool.id}`} target="_blank" onClick={e => e.stopPropagation()} style={{ 
            fontSize: "0.8rem", 
            color: "var(--primary-accent)", 
            textDecoration: "none",
            fontWeight: 700
          }}>Bekijk Tool →</Link>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", fontSize: "0.9rem" }}>
        <div>
          <h4 style={{ color: "#64748b", marginBottom: "0.5rem" }}>Subheading</h4>
          <p>{tool.subtitle}</p>
        </div>
        <div>
          <h4 style={{ color: "#64748b", marginBottom: "0.5rem" }}>Bottom SEO Content</h4>
          <p><strong>{tool.contentTitle}</strong></p>
          <p style={{ marginTop: "0.5rem", fontSize: "0.85rem", color: "#475569" }}>{tool.contentText}</p>
        </div>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: 700,
  color: "#64748b",
  marginBottom: "0.5rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em"
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "1rem",
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  fontSize: "1rem",
  fontFamily: "inherit"
};
