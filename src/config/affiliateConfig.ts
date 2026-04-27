/**
 * DAISYCON / AFFILIATE CONFIGURATION
 * 
 * Change your Media ID and specific links here. 
 * All buttons on the site will update automatically.
 */

export const AFFILIATE_CONFIG = {
  // Your Daisycon Media ID (get this from your Daisycon dashboard)
  mediaId: "YOUR_MEDIA_ID_HERE",

  links: {
    warmtepomp: "https://www.offertevergelijker.nl/warmtepomp",
    isolatie: "https://www.offertevergelijker.nl/isolatie",
    hypotheek: "https://www.independer.nl/hypotheek",
    zzp_bank: "https://www.knab.nl/zakelijk",
    zorgverzekering: "https://www.independer.nl/zorgverzekering",
    boekhouden: "https://www.moneybird.nl",
    uitvaartverzekering: "https://www.independer.nl/uitvaartverzekering",
    autoverzekering: "https://www.independer.nl/autoverzekering",
    reisverzekering: "https://www.independer.nl/reisverzekering",
    inboedelverzekering: "https://www.independer.nl/inboedelverzekering",
    levensverzekering: "https://www.independer.nl/overlijdensrisicoverzekering",
  }
};

/**
 * Helper to generate a Daisycon deep link if needed, 
 * or just return the URL if you are using Auto-linking.
 */
export const getAffiliateLink = (key: keyof typeof AFFILIATE_CONFIG.links) => {
  const baseUrl = AFFILIATE_CONFIG.links[key];
  
  // If you have a specific Daisycon deep-link format, we can wrap it here
  // For now, it returns the base URL.
  return baseUrl;
};
