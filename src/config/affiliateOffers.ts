/**
 * MASTER AFFILIATE OFFERS
 * 
 * This file maps calculator topics to specific affiliate offers.
 * The AffiliateCTA component uses this to automatically display the right offer.
 */

export interface AffiliateOffer {
  topic: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  badge?: string;
}

export const AFFILIATE_OFFERS: Record<string, AffiliateOffer> = {
  hypotheek: {
    topic: "hypotheek",
    title: "Vergelijk Hypotheekrentes",
    description: "Bespaar duizenden euro's door de actuele rentes van alle banken te vergelijken via Independer.",
    buttonText: "Bereken je voordeel",
    href: "https://www.independer.nl/hypotheek",
    badge: "Populairst"
  },
  warmtepomp: {
    topic: "warmtepomp",
    title: "Ontvang Warmtepomp Offertes",
    description: "Ontdek hoeveel subsidie je krijgt en vergelijk erkende installateurs in jouw regio.",
    buttonText: "Vraag offertes aan",
    href: "https://www.offertevergelijker.nl/warmtepomp",
    badge: "Subsidie 2026"
  },
  isolatie: {
    topic: "isolatie",
    title: "Isolatie Specialist Nodig?",
    description: "Vergelijk vrijblijvend 3 offertes van isolatiebedrijven en bespaar direct op je energierekening.",
    buttonText: "Start vergelijking",
    href: "https://www.offertevergelijker.nl/isolatie",
    badge: "Bespaar Tip"
  },
  uurtarief: {
    topic: "uurtarief",
    title: "Zakelijke Rekening voor ZZP",
    description: "Open binnen 5 minuten een zakelijke rekening bij Knab. De meest gekozen bank door ZZP'ers.",
    buttonText: "Bekijk Knab Zakelijk",
    href: "https://www.knab.nl/zakelijk",
    badge: "ZZP Keuze"
  },
  studentenlening: {
    topic: "studentenlening",
    title: "Slimmer Sparen voor later?",
    description: "Zet je geld op een spaarrekening met de hoogste rente en laat je vermogen groeien.",
    buttonText: "Vergelijk Spaarrentes",
    href: "https://www.independer.nl/sparen",
  },
  zorgverzekering: {
    topic: "zorgverzekering",
    title: "Vergelijk je Zorgverzekering",
    description: "Check of je nog steeds de beste deal hebt voor 2026 en stap eenvoudig over.",
    buttonText: "Check Independer",
    href: "https://www.independer.nl/zorgverzekering",
    badge: "Nieuw 2026"
  },
  eigen_risico: {
    topic: "eigen_risico",
    title: "Zorgverzekering Vergelijken",
    description: "Bespaar op je maandelijkse premie door je eigen risico slim te kiezen via Independer.",
    buttonText: "Start vergelijking",
    href: "https://www.independer.nl/zorgverzekering",
  },
  autoverzekering: {
    topic: "autoverzekering",
    title: "Bespaar op je Autoverzekering",
    description: "Vergelijk alle verzekeraars en zie binnen 2 minuten hoeveel jij kunt besparen op je premie.",
    buttonText: "Vergelijk premies",
    href: "https://www.independer.nl/autoverzekering",
  },
  uitvaart: {
    topic: "uitvaart",
    title: "Uitvaartverzekering Vergelijken",
    description: "Voorkom hoge kosten voor je nabestaanden. Vergelijk de beste uitvaartverzekeringen van 2026.",
    buttonText: "Bekijk premies",
    href: "https://www.independer.nl/uitvaartverzekering",
    badge: "Zekerheid"
  },
  overlijdensrisico: {
    topic: "overlijdensrisico",
    title: "Overlijdensrisicoverzekering",
    description: "Zorg dat je gezin goed achterblijft. Vergelijk en bespaar op je overlijdensrisicoverzekering via Independer.",
    buttonText: "Bereken premie",
    href: "https://www.independer.nl/overlijdensrisicoverzekering",
  },
  zonnepanelen: {
    topic: "zonnepanelen",
    title: "Zonnepanelen Rendement",
    description: "Bereken hoeveel jij kunt besparen met zonnepanelen. Ontvang direct offertes van specialisten.",
    buttonText: "Start Besparing",
    href: "https://www.offertevergelijker.nl/zonnepanelen",
  },
  thuisbatterij: {
    topic: "thuisbatterij",
    title: "Thuisbatterij Offertes",
    description: "Optimaliseer je eigen verbruik en verlaag je energierekening met een thuisbatterij.",
    buttonText: "Ontvang Offertes",
    href: "https://www.offertevergelijker.nl/thuisbatterij",
  },
  "vaste-lasten": {
    topic: "vaste-lasten",
    title: "Bespaar op je Vaste Lasten",
    description: "Check direct waar jij maandelijks geld laat liggen. Vergelijk energie, internet en verzekeringen.",
    buttonText: "Check Besparing",
    href: "https://www.independer.nl",
  },
  // Default fallback offer
  general: {
    topic: "general",
    title: "Vergelijk & Bespaar",
    description: "Gebruik onze onafhankelijke vergelijkingstools om direct te besparen op je vaste lasten.",
    buttonText: "Bekijk alle tools",
    href: "/",
  }
};

export const getOfferByTopic = (topic: string): AffiliateOffer => {
  return AFFILIATE_OFFERS[topic] || AFFILIATE_OFFERS.general;
};
