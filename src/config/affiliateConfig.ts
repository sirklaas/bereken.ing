/**
 * DAISYCON / AFFILIATE CONFIGURATION
 * 
 * This is the heart of your monetization. 
 * Wrap all links in Daisycon tracking parameters automatically.
 */

export const AFFILIATE_CONFIG = {
  // Your Daisycon Media ID
  mediaId: "1517771",

  // Your Amazon Store ID
  amazonStoreID: "pinkamazon0c-21",

  // Your Plug&Pay Partner ID
  plugAndPayId: "pink-plugandplay",

  // Default tracking parameters
  defaultParams: {
    wi: "1517771",
    si: "12345", // Default Program ID if not specified
    li: "1",     // Default Link ID
  },

  // Topic-specific configurations
  topics: {
    hypotheek: {
      preferred: {
        name: "Independer",
        url: "https://www.independer.nl/hypotheek",
        description: "Vergelijk alle banken & bespaar"
      },
      partners: [
        { name: "ING", url: "https://www.ing.nl/particulier/hypotheek" },
        { name: "Rabobank", url: "https://www.rabobank.nl/particulieren/hypotheek" },
        { name: "ABN AMRO", url: "https://www.abnamro.nl/nl/prive/hypotheken" },
        { name: "ASN Bank", url: "https://www.asnbank.nl" },
        { name: "RegioBank", url: "https://www.regiobank.nl" },
        { name: "Triodos", url: "https://www.triodos.nl" },
        { name: "Nationale-Nederlanden", url: "https://www.nn.nl" },
        { name: "Hypotheker", url: "https://www.hypotheker.nl" }
      ]
    },
    uurtarief: {
      preferred: {
        name: "Knab",
        url: "https://www.knab.nl/zakelijk",
        description: "De #1 bank voor ZZP'ers"
      },
      partners: [
        { name: "Bunq", url: "https://www.bunq.com/business" },
        { name: "Moneybird", url: "https://www.moneybird.nl" },
        { name: "ING Zakelijk", url: "https://www.ing.nl/zakelijk" }
      ]
    }
    // Add more topics as needed...
  }
};

/**
 * HELPER: Wraps any URL into a Daisycon tracking link
 */
export const wrapAffiliateLink = (url: string, programId?: string) => {
  if (AFFILIATE_CONFIG.mediaId === "YOUR_MEDIA_ID_HERE") return url;
  
  const mediaId = AFFILIATE_CONFIG.mediaId;
  const si = programId || AFFILIATE_CONFIG.defaultParams.si;
  
  // Daisycon standard click URL format
  return `https://ds1.nl/c/?wi=${mediaId}&si=${si}&dl=${encodeURIComponent(url)}`;
};
