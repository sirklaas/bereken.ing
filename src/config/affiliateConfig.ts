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

  // Topic-specific configurations (The Gold List 2026)
  topics: {
    hypotheek: {
      preferred: { name: "Independer", url: "https://www.independer.nl/hypotheek", description: "Vergelijk alle banken & bespaar" },
      partners: [
        { name: "SNS Bank", url: "https://www.snsbank.nl/particulier/hypotheek" },
        { name: "bijBouwe", url: "https://www.bijbouwe.nl" }
      ]
    },
    uitvaart: {
      preferred: { name: "Monuta", url: "https://www.monuta.nl", description: "Hoogste uitbetaling (€175+) - Vergelijk nu" },
      partners: [{ name: "DELA", url: "https://www.dela.nl" }]
    },
    pensioen: {
      preferred: { name: "Brand New Day", url: "https://new.brandnewday.nl", description: "De beste pensioenrekening van NL" },
      partners: [{ name: "Centraal Beheer", url: "https://www.centraalbeheer.nl" }]
    },
    autoverzekering: {
      preferred: { name: "Univé", url: "https://www.unive.nl/autoverzekering", description: "Bespaar tot €90 per jaar" },
      partners: [{ name: "Allianz Direct", url: "https://www.allianzdirect.nl" }]
    },
    reisverzekering: {
      preferred: { name: "Allianz Direct", url: "https://www.allianzdirect.nl/reisverzekering", description: "Al vanaf €1,50 per dag" },
      partners: [{ name: "FBTO", url: "https://www.fbto.nl/reisverzekering" }]
    },
    "eigen-risico": {
      preferred: { name: "Independer", url: "https://www.independer.nl/zorgverzekering", description: "Check je zorgpremie voor 2026" },
      partners: [{ name: "FBTO", url: "https://www.fbto.nl/zorgverzekering" }]
    },
    gezondheid: {
      preferred: { name: "FBTO", url: "https://www.fbto.nl/zorgverzekering", description: "Jouw zorg, jouw keuze" },
      partners: [{ name: "Zilveren Kruis", url: "https://www.zilverenkruis.nl" }]
    },
    uurtarief: {
      preferred: { name: "Knab", url: "https://www.knab.nl/zakelijk", description: "De #1 bank voor ZZP'ers" },
      partners: [{ name: "e-Boekhouden.nl", url: "https://www.e-boekhouden.nl" }]
    },
    isolatie: {
      preferred: { name: "Offertevergelijker", url: "https://www.offertevergelijker.nl/isolatie", description: "Vergelijk 3 gratis offertes" },
      partners: [{ name: "Coolblue", url: "https://www.coolblue.nl" }]
    },
    warmtepomp: {
      preferred: { name: "Coolblue Energie", url: "https://www.coolblue.nl/energie", description: "Ontvang tot €100+ voor je installatie" },
      partners: [{ name: "Zonneplan", url: "https://www.zonneplan.nl" }]
    },
    studentenlening: {
      preferred: { name: "Openbank", url: "https://www.openbank.nl", description: "Hoge rente op je spaargeld" },
      partners: [{ name: "Brand New Day", url: "https://new.brandnewday.nl" }]
    },
    inboedel: {
      preferred: { name: "FBTO", url: "https://www.fbto.nl/woonverzekering", description: "Inboedel & Opstal in één" },
      partners: [{ name: "Centraal Beheer", url: "https://www.centraalbeheer.nl" }]
    },
    "vaste-lasten": {
      preferred: { name: "Independer", url: "https://www.independer.nl", description: "Bespaar op al je vaste lasten" },
      partners: [{ name: "Vattenfall", url: "https://www.vattenfall.nl" }]
    },
    overlijdensrisico: {
      preferred: { name: "Independer", url: "https://www.independer.nl/overlijdensrisicoverzekering", description: "Vergelijk alle premies & bespaar" },
      partners: [{ name: "FBTO", url: "https://www.fbto.nl" }]
    },
    // Fun tools get an Amazon/Bol suggestion
    fun: {
      preferred: { name: "Bol.com", url: "https://www.bol.com", description: "Ontdek de leukste cadeaus & gadgets" },
      partners: [{ name: "Amazon", url: "https://www.amazon.nl" }]
    }
  }
};

/**
 * HELPER: Wraps any URL into a Daisycon tracking link
 */
export const wrapAffiliateLink = (url: string, programId?: string) => {
  const mediaId = AFFILIATE_CONFIG.mediaId;
  if (!mediaId || mediaId === "YOUR_MEDIA_ID_HERE") return url;
  
  const si = programId || AFFILIATE_CONFIG.defaultParams.si;
  return `https://ds1.nl/c/?wi=${mediaId}&si=${si}&dl=${encodeURIComponent(url)}`;
};
