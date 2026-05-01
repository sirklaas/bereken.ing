import { AFFILIATE_CONFIG, wrapAffiliateLink } from "@/config/affiliateConfig";

interface AffiliateCTAProps {
  topic?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
  badge?: string;
}

export default function AffiliateCTA({ 
  topic, 
  title, 
  description, 
  buttonText, 
  href, 
  badge 
}: AffiliateCTAProps) {
  // If a topic is provided, get the default offer for that topic from our UNIFIED config
  const offerConfig = topic ? (AFFILIATE_CONFIG.topics as any)[topic]?.preferred : null;

  // Use provided props or fallback to the offer from the config
  const finalTitle = title || offerConfig?.name || "Vergelijk & Bespaar";
  const finalDescription = description || offerConfig?.description || "Bespaar op je vaste lasten via onze partners.";
  const finalButtonText = buttonText || offerConfig?.cta || "Bekijk Deal";
  const finalHref = href || offerConfig?.url || "/";
  const finalBadge = badge || offerConfig?.badge;

  // WRAP THE LINK WITH DAISYCON TRACKING
  const wrappedHref = wrapAffiliateLink(finalHref);

  return (
    <div className="affiliate-card animate-in" style={{
      marginTop: "2rem",
      padding: "2rem",
      background: "#fff",
      borderRadius: "16px",
      border: "2px solid var(--primary-accent)",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      position: "relative",
      overflow: "hidden"
    }}>
      {finalBadge && (
        <div style={{
          position: "absolute",
          top: "12px",
          right: "-35px",
          background: "var(--primary-accent)",
          color: "white",
          padding: "5px 40px",
          fontSize: "0.7rem",
          fontWeight: 800,
          transform: "rotate(45deg)",
          textTransform: "uppercase"
        }}>
          {finalBadge}
        </div>
      )}

      <div style={{ maxWidth: "80%" }}>
        <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "var(--heading-color)" }}>{finalTitle}</h3>
        <p style={{ fontSize: "0.9rem", color: "var(--secondary)", lineHeight: "1.5" }}>{finalDescription}</p>
      </div>

      <a 
        href={wrappedHref} 
        target="_blank" 
        rel="noopener noreferrer nofollow"
        className="button"
        style={{ 
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          width: "fit-content",
          padding: "0.8rem 2rem"
        }}
      >
        {finalButtonText}
      </a>

      <p style={{ fontSize: "0.7rem", color: "#94a3b8", marginTop: "0.5rem" }}>
        * Wij ontvangen mogelijk een commissie bij gebruik van deze link, dit kost jou niets extra.
      </p>
    </div>
  );
}
