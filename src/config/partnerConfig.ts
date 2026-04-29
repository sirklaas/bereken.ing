/**
 * PARTNER CONFIGURATION
 * 
 * Maps topics to a list of relevant partners (Banks, Insurers, etc.)
 */

export interface Partner {
  name: string;
  logo: string; // URL or Emoji for now
  href: string;
  description?: string;
}

export const PARTNER_CONFIG: Record<string, Partner[]> = {
  hypotheek: [
    { name: "ING", logo: "https://www.google.com/s2/favicons?domain=ing.nl&sz=128", href: "https://www.ing.nl/particulier/hypotheek", description: "Vlijmscherpe rente" },
    { name: "Rabobank", logo: "https://www.google.com/s2/favicons?domain=rabobank.nl&sz=128", href: "https://www.rabobank.nl/particulieren/hypotheek", description: "Lokaal betrokken" },
    { name: "ABN AMRO", logo: "https://www.google.com/s2/favicons?domain=abnamro.nl&sz=128", href: "https://www.abnamro.nl/nl/prive/hypotheken", description: "Duurzaam wonen" },
    { name: "ASN Bank", logo: "https://www.google.com/s2/favicons?domain=asnbank.nl&sz=128", href: "https://www.asnbank.nl", description: "Duurzaam bankieren" },
    { name: "RegioBank", logo: "https://www.google.com/s2/favicons?domain=regiobank.nl&sz=128", href: "https://www.regiobank.nl", description: "Dichtbij huis" },
    { name: "Triodos", logo: "https://www.google.com/s2/favicons?domain=triodos.nl&sz=128", href: "https://www.triodos.nl", description: "Maak geld eerlijk" },
    { name: "Nationale-Nederlanden", logo: "https://www.google.com/s2/favicons?domain=nn.nl&sz=128", href: "https://www.nn.nl", description: "Hypotheken \u0026 meer" },
    { name: "Independer", logo: "https://www.google.com/s2/favicons?domain=independer.nl&sz=128", href: "https://www.independer.nl/hypotheek", description: "Vergelijk alle banken" },
    { name: "Hypotheker", logo: "https://www.google.com/s2/favicons?domain=dehypotheker.nl&sz=128", href: "https://www.hypotheker.nl", description: "Jazeker!" }
  ],
  uurtarief: [
    { name: "Knab", logo: "https://www.google.com/s2/favicons?domain=knab.nl&sz=128", href: "https://www.knab.nl/zakelijk", description: "Voor ondernemers" },
    { name: "Bunq", logo: "https://www.google.com/s2/favicons?domain=bunq.com&sz=128", href: "https://www.bunq.com/business", description: "Mobiel bankieren" },
    { name: "Moneybird", logo: "https://www.google.com/s2/favicons?domain=moneybird.nl&sz=128", href: "https://www.moneybird.nl", description: "Slim boekhouden" },
    { name: "ING Zakelijk", logo: "https://www.google.com/s2/favicons?domain=ing.nl&sz=128", href: "https://www.ing.nl/zakelijk", description: "Voor ondernemers" },
    { name: "Rabobank Zakelijk", logo: "https://www.google.com/s2/favicons?domain=rabobank.nl&sz=128", href: "https://www.rabobank.nl/bedrijven", description: "Samen groeien" }
  ],
  zorg: [
    { name: "Zilveren Kruis", logo: "https://www.google.com/s2/favicons?domain=zilverenkruis.nl&sz=128", href: "https://www.zilverenkruis.nl", description: "Grootste verzekeraar" },
    { name: "VGZ", logo: "https://www.google.com/s2/favicons?domain=vgz.nl&sz=128", href: "https://www.vgz.nl", description: "Met hart voor zorg" },
    { name: "Menzis", logo: "https://www.google.com/s2/favicons?domain=menzis.nl&sz=128", href: "https://www.menzis.nl", description: "Leefkracht" },
    { name: "CZ", logo: "https://www.google.com/s2/favicons?domain=cz.nl&sz=128", href: "https://www.cz.nl", description: "Zorgverzekeraar" },
    { name: "FBTO", logo: "https://www.google.com/s2/favicons?domain=fbto.nl&sz=128", href: "https://www.fbto.nl", description: "Kies wat je nodig hebt" }
  ],
  gezondheid: [
    { name: "Zilveren Kruis", logo: "https://www.google.com/s2/favicons?domain=zilverenkruis.nl&sz=128", href: "https://www.zilverenkruis.nl", description: "Grootste verzekeraar" },
    { name: "VGZ", logo: "https://www.google.com/s2/favicons?domain=vgz.nl&sz=128", href: "https://www.vgz.nl", description: "Met hart voor zorg" },
    { name: "Menzis", logo: "https://www.google.com/s2/favicons?domain=menzis.nl&sz=128", href: "https://www.menzis.nl", description: "Leefkracht" }
  ],
  eigen_risico: [
    { name: "Zilveren Kruis", logo: "https://www.google.com/s2/favicons?domain=zilverenkruis.nl&sz=128", href: "https://www.zilverenkruis.nl", description: "Grootste verzekeraar" },
    { name: "VGZ", logo: "https://www.google.com/s2/favicons?domain=vgz.nl&sz=128", href: "https://www.vgz.nl", description: "Met hart voor zorg" },
    { name: "Menzis", logo: "https://www.google.com/s2/favicons?domain=menzis.nl&sz=128", href: "https://www.menzis.nl", description: "Leefkracht" }
  ]
};

export const getPartnersByTopic = (topic: string): Partner[] => {
  return PARTNER_CONFIG[topic] || [];
};
