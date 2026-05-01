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
      preferred: { 
        name: "Independer Hypotheken", 
        url: "https://www.independer.nl/hypotheek", 
        description: "Bespaar duizenden euro's door de actuele rentes van alle banken te vergelijken via Independer.",
        cta: "Bereken je voordeel",
        badge: "Populairst"
      },
      partners: [
        { name: "SNS Bank", url: "https://www.snsbank.nl/particulier/hypotheek" },
        { name: "bijBouwe", url: "https://www.bijbouwe.nl" }
      ]
    },
    uitvaart: {
      preferred: { 
        name: "Monuta Uitvaartzorg", 
        url: "https://www.monuta.nl", 
        description: "Voorkom hoge kosten voor je nabestaanden. Vergelijk de beste uitvaartverzekeringen van 2026.",
        cta: "Bekijk premies",
        badge: "Zekerheid"
      },
      partners: [{ name: "DELA", url: "https://www.dela.nl" }]
    },
    pensioen: {
      preferred: { 
        name: "Brand New Day", 
        url: "https://new.brandnewday.nl", 
        description: "De beste pensioenrekening van NL. Start nu met fiscaal voordelig sparen.",
        cta: "Start Pensioen",
        badge: "Beste Keuze"
      },
      partners: [{ name: "Centraal Beheer", url: "https://www.centraalbeheer.nl" }]
    },
    autoverzekering: {
      preferred: { 
        name: "Univé Autoverzekering", 
        url: "https://www.unive.nl/autoverzekering", 
        description: "Vergelijk alle verzekeraars en zie binnen 2 minuten hoeveel jij kunt besparen op je premie.",
        cta: "Vergelijk premies",
        badge: "Bespaar Tip"
      },
      partners: [{ name: "Allianz Direct", url: "https://www.allianzdirect.nl" }]
    },
    reisverzekering: {
      preferred: { 
        name: "Allianz Direct", 
        url: "https://www.allianzdirect.nl/reisverzekering", 
        description: "Al vanaf €1,50 per dag. De meest gekozen reisverzekering voor 2026.",
        cta: "Bereken Premie",
        badge: "Lage Prijs"
      },
      partners: [{ name: "FBTO", url: "https://www.fbto.nl/reisverzekering" }]
    },
    "eigen-risico": {
      preferred: { 
        name: "Independer Zorg", 
        url: "https://www.independer.nl/zorgverzekering", 
        description: "Bespaar op je maandelijkse premie door je eigen risico slim te kiezen.",
        cta: "Start vergelijking",
        badge: "Nieuw 2026"
      },
      partners: [{ name: "FBTO", url: "https://www.fbto.nl/zorgverzekering" }]
    },
    gezondheid: {
      preferred: { 
        name: "FBTO Zorgverzekering", 
        url: "https://www.fbto.nl/zorgverzekering", 
        description: "Jouw zorg, jouw keuze. Stel zelf je ideale verzekering samen.",
        cta: "Check FBTO",
        badge: "Flexibel"
      },
      partners: [{ name: "Zilveren Kruis", url: "https://www.zilverenkruis.nl" }]
    },
    uurtarief: {
      preferred: { 
        name: "Knab Zakelijk", 
        url: "https://www.knab.nl/zakelijk", 
        description: "Open binnen 5 minuten een zakelijke rekening. De #1 bank voor ZZP'ers.",
        cta: "Bekijk Knab",
        badge: "ZZP Keuze"
      },
      partners: [{ name: "e-Boekhouden.nl", url: "https://www.e-boekhouden.nl" }]
    },
    isolatie: {
      preferred: { 
        name: "Offertevergelijker", 
        url: "https://www.offertevergelijker.nl/isolatie", 
        description: "Vergelijk vrijblijvend 3 offertes van isolatiebedrijven en bespaar direct.",
        cta: "Vraag Offertes",
        badge: "Bespaar Tip"
      },
      partners: [{ name: "Coolblue", url: "https://www.coolblue.nl" }]
    },
    warmtepomp: {
      preferred: { 
        name: "Warmtepomp Offertes", 
        url: "https://www.offertevergelijker.nl/warmtepomp", 
        description: "Ontdek hoeveel subsidie je krijgt en vergelijk erkende installateurs.",
        cta: "Ontvang Offertes",
        badge: "Subsidie 2026"
      },
      partners: [{ name: "Zonneplan", url: "https://www.zonneplan.nl" }]
    },
    studentenlening: {
      preferred: { 
        name: "Openbank Sparen", 
        url: "https://www.openbank.nl", 
        description: "Zet je geld op een spaarrekening met de hoogste rente van NL.",
        cta: "Check Rente",
        badge: "Top Rente"
      },
      partners: [{ name: "Brand New Day", url: "https://new.brandnewday.nl" }]
    },
    inboedel: {
      preferred: { 
        name: "FBTO Woonverzekering", 
        url: "https://www.fbto.nl/woonverzekering", 
        description: "Inboedel & Opstal in één. Snel geregeld en vlijmscherp geprijsd.",
        cta: "Bereken Premie",
        badge: "Alles-in-1"
      },
      partners: [{ name: "Centraal Beheer", url: "https://www.centraalbeheer.nl" }]
    },
    "vaste-lasten": {
      preferred: { 
        name: "Independer Besparingscheck", 
        url: "https://www.independer.nl", 
        description: "Check direct waar jij maandelijks geld laat liggen op je vaste lasten.",
        cta: "Check Besparing",
        badge: "Gratis Tool"
      },
      partners: [{ name: "Vattenfall", url: "https://www.vattenfall.nl" }]
    },
    overlijdensrisico: {
      preferred: { 
        name: "Independer ORV", 
        url: "https://www.independer.nl/overlijdensrisicoverzekering", 
        description: "Zorg dat je gezin goed achterblijft. Vergelijk alle premies & bespaar.",
        cta: "Bereken Premie",
        badge: "Zekerheid"
      },
      partners: [{ name: "FBTO", url: "https://www.fbto.nl" }]
    },
    zonnepanelen: {
      preferred: { 
        name: "Zonneplan Dakcheck", 
        url: "https://www.zonneplan.nl", 
        description: "Vraag nu een gratis dakcheck aan en zie direct je besparingspotentieel.",
        cta: "Start Dakcheck",
        badge: "Gratis Advies"
      },
      partners: [{ name: "Vattenfall", url: "https://www.vattenfall.nl/zonnepanelen" }]
    },
    thuisbatterij: {
      preferred: { 
        name: "Thuisbatterij Offertes", 
        url: "https://www.offertevergelijker.nl/thuisbatterij", 
        description: "Optimaliseer je eigen verbruik en verlaag je energierekening met opslag.",
        cta: "Ontvang Offertes",
        badge: "Duurzaam"
      },
      partners: [{ name: "Btw-vrij", url: "https://www.btwvrij.nl" }]
    },
    fun: {
      preferred: { 
        name: "Bol.com Gadgets", 
        url: "https://www.bol.com", 
        description: "Ontdek de leukste cadeaus, gadgets en boeken voor elke gelegenheid.",
        cta: "Shop op Bol",
        badge: "Cadeau Tip"
      },
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
