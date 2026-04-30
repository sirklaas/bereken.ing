/**
 * PARTNER CONFIGURATION
 * 
 * Maps topics to a list of relevant partners (Banks, Insurers, etc.)
 * Every partner here is automatically wrapped in Daisycon/LinkPizza tracking.
 */

export interface Partner {
  name: string;
  logo: string;
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
    { name: "Nationale-Nederlanden", logo: "https://www.google.com/s2/favicons?domain=nn.nl&sz=128", href: "https://www.nn.nl", description: "Hypotheken & meer" },
    { name: "Independer", logo: "https://www.google.com/s2/favicons?domain=independer.nl&sz=128", href: "https://www.independer.nl/hypotheek", description: "Vergelijk alle banken" },
    { name: "Hypotheker", logo: "https://www.google.com/s2/favicons?domain=dehypotheker.nl&sz=128", href: "https://www.hypotheker.nl", description: "Jazeker!" }
  ],
  uurtarief: [
    { name: "Knab", logo: "https://www.google.com/s2/favicons?domain=knab.nl&sz=128", href: "https://www.knab.nl/zakelijk", description: "Voor ondernemers" },
    { name: "Bunq", logo: "https://www.google.com/s2/favicons?domain=bunq.com&sz=128", href: "https://www.bunq.com/business", description: "Mobiel bankieren" },
    { name: "Moneybird", logo: "https://www.google.com/s2/favicons?domain=moneybird.nl&sz=128", href: "https://www.moneybird.nl", description: "Slim boekhouden" },
    { name: "ING Zakelijk", logo: "https://www.google.com/s2/favicons?domain=ing.nl&sz=128", href: "https://www.ing.nl/zakelijk", description: "Voor ondernemers" },
    { name: "Rabobank Zakelijk", logo: "https://www.google.com/s2/favicons?domain=rabobank.nl&sz=128", href: "https://www.rabobank.nl/bedrijven", description: "Samen groeien" },
    { name: "ABN AMRO Zakelijk", logo: "https://www.google.com/s2/favicons?domain=abnamro.nl&sz=128", href: "https://www.abnamro.nl/nl/zakelijk", description: "Ondernemen met ambitie" },
    { name: "Kamer van Koophandel", logo: "https://www.google.com/s2/favicons?domain=kvk.nl&sz=128", href: "https://www.kvk.nl", description: "Ondernemerschap" },
    { name: "Tellow", logo: "https://www.google.com/s2/favicons?domain=tellow.nl&sz=128", href: "https://www.tellow.nl", description: "Boekhouding voor ZZP" }
  ],
  uitvaart: [
    { name: "DELA", logo: "https://www.google.com/s2/favicons?domain=dela.nl&sz=128", href: "https://www.dela.nl", description: "Voor elkaar en met elkaar" },
    { name: "Monuta", logo: "https://www.google.com/s2/favicons?domain=monuta.nl&sz=128", href: "https://www.monuta.nl", description: "De steun bij iedere uitvaart" },
    { name: "a.s.r.", logo: "https://www.google.com/s2/favicons?domain=asr.nl&sz=128", href: "https://www.asr.nl", description: "Verzekeringsmaatschappij van nu" },
    { name: "Twenthe", logo: "https://www.google.com/s2/favicons?domain=twenthe-uitvaartverzekering.nl&sz=128", href: "https://www.twenthe-uitvaartverzekering.nl", description: "Uw uitvaart, onze zorg" },
    { name: "Klaverblad", logo: "https://www.google.com/s2/favicons?domain=klaverblad.nl&sz=128", href: "https://www.klaverblad.nl", description: "Gewoon goede verzekeringen" },
    { name: "Ardanta", logo: "https://www.google.com/s2/favicons?domain=ardanta.nl&sz=128", href: "https://www.ardanta.nl", description: "Hulp bij uitvaartwensen" },
    { name: "GUV", logo: "https://www.google.com/s2/favicons?domain=guv.nl&sz=128", href: "https://www.guv.nl", description: "Zorg met hart en ziel" },
    { name: "DLE", logo: "https://www.google.com/s2/favicons?domain=dle.nl&sz=128", href: "https://www.dle.nl", description: "Uitvaart in vertrouwde handen" }
  ],
  gezondheid: [
    { name: "Zilveren Kruis", logo: "https://www.google.com/s2/favicons?domain=zilverenkruis.nl&sz=128", href: "https://www.zilverenkruis.nl", description: "Raad en daad voor je gezondheid" },
    { name: "VGZ", logo: "https://www.google.com/s2/favicons?domain=vgz.nl&sz=128", href: "https://www.vgz.nl", description: "Met hart voor de zorg" },
    { name: "CZ", logo: "https://www.google.com/s2/favicons?domain=cz.nl&sz=128", href: "https://www.cz.nl", description: "Zorg die verder gaat" },
    { name: "Menzis", logo: "https://www.google.com/s2/favicons?domain=menzis.nl&sz=128", href: "https://www.menzis.nl", description: "Leefkracht voor iedereen" },
    { name: "a.s.r. Zorg", logo: "https://www.google.com/s2/favicons?domain=asr.nl&sz=128", href: "https://www.asr.nl", description: "Verzekeringsmaatschappij van nu" },
    { name: "DSW", logo: "https://www.google.com/s2/favicons?domain=dsw.nl&sz=128", href: "https://www.dsw.nl", description: "Zorgverzekeraar dichtbij" },
    { name: "ONVZ", logo: "https://www.google.com/s2/favicons?domain=onvz.nl&sz=128", href: "https://www.onvz.nl", description: "Uw gezondheid, onze zorg" },
    { name: "FBTO", logo: "https://www.google.com/s2/favicons?domain=fbto.nl&sz=128", href: "https://www.fbto.nl", description: "Jij kiest, jij beslist" },
    { name: "Anderzorg", logo: "https://www.google.com/s2/favicons?domain=anderzorg.nl&sz=128", href: "https://www.anderzorg.nl", description: "De slimme keuze voor zorg" }
  ],
  pensioen: [
    { name: "Brand New Day", logo: "https://www.google.com/s2/favicons?domain=brandnewday.nl&sz=128", href: "https://www.brandnewday.nl", description: "De bank voor je pensioen" },
    { name: "Meesman", logo: "https://www.google.com/s2/favicons?domain=meesman.nl&sz=128", href: "https://www.meesman.nl", description: "Indexbeleggen voor iedereen" },
    { name: "DEGIRO", logo: "https://www.google.com/s2/favicons?domain=degiro.nl&sz=128", href: "https://www.degiro.nl", description: "De online broker voor iedereen" },
    { name: "Centraal Beheer", logo: "https://www.google.com/s2/favicons?domain=centraalbeheer.nl&sz=128", href: "https://www.centraalbeheer.nl", description: "Even Apeldoorn bellen" },
    { name: "Saxo Bank", logo: "https://www.google.com/s2/favicons?domain=saxobank.com&sz=128", href: "https://www.saxobank.com", description: "Beleggen in de toekomst" },
    { name: "ING", logo: "https://www.google.com/s2/favicons?domain=ing.nl&sz=128", href: "https://www.ing.nl", description: "Vooruit met je geld" },
    { name: "Rabobank", logo: "https://www.google.com/s2/favicons?domain=rabobank.nl&sz=128", href: "https://www.rabobank.nl", description: "Samen sterker" },
    { name: "ABN AMRO", logo: "https://www.google.com/s2/favicons?domain=abnamro.nl&sz=128", href: "https://www.abnamro.nl", description: "Bankieren op jouw manier" },
    { name: "Bright Pensioen", logo: "https://www.google.com/s2/favicons?domain=brightpensioen.nl&sz=128", href: "https://www.brightpensioen.nl", description: "Voor een beter pensioen" }
  ],
  reisverzekering: [
    { name: "ANWB", logo: "https://www.google.com/s2/favicons?domain=anwb.nl&sz=128", href: "https://www.anwb.nl", description: "Altijd onderweg" },
    { name: "Unigarant", logo: "https://www.google.com/s2/favicons?domain=unigarant.nl&sz=128", href: "https://www.unigarant.nl", description: "Verzekeringen voor onderweg" },
    { name: "FBTO", logo: "https://www.google.com/s2/favicons?domain=fbto.nl&sz=128", href: "https://www.fbto.nl", description: "Jij kiest, jij beslist" },
    { name: "Centraal Beheer", logo: "https://www.google.com/s2/favicons?domain=centraalbeheer.nl&sz=128", href: "https://www.centraalbeheer.nl", description: "Even Apeldoorn bellen" },
    { name: "Ohra", logo: "https://www.google.com/s2/favicons?domain=ohra.nl&sz=128", href: "https://www.ohra.nl", description: "Direct geregeld, geen gedoe" },
    { name: "Allianz Direct", logo: "https://www.google.com/s2/favicons?domain=allianzdirect.nl&sz=128", href: "https://www.allianzdirect.nl", description: "De online verzekeraar" },
    { name: "Univé", logo: "https://www.google.com/s2/favicons?domain=unive.nl&sz=128", href: "https://www.unive.nl", description: "Vruchten van plukken" },
    { name: "Interpolis", logo: "https://www.google.com/s2/favicons?domain=interpolis.nl&sz=128", href: "https://www.interpolis.nl", description: "Glashelder" },
    { name: "InShared", logo: "https://www.google.com/s2/favicons?domain=inshared.nl&sz=128", href: "https://www.inshared.nl", description: "We share, you share" }
  ],
  inboedel: [
    { name: "Vereniging Eigen Huis", logo: "https://www.google.com/s2/favicons?domain=eigenhuis.nl&sz=128", href: "https://www.eigenhuis.nl", description: "Samen staan we sterker" },
    { name: "InShared", logo: "https://www.google.com/s2/favicons?domain=inshared.nl&sz=128", href: "https://www.inshared.nl", description: "We share, you share" },
    { name: "Centraal Beheer", logo: "https://www.google.com/s2/favicons?domain=centraalbeheer.nl&sz=128", href: "https://www.centraalbeheer.nl", description: "Even Apeldoorn bellen" },
    { name: "Univé", logo: "https://www.google.com/s2/favicons?domain=unive.nl&sz=128", href: "https://www.unive.nl", description: "Vruchten van plukken" },
    { name: "Interpolis", logo: "https://www.google.com/s2/favicons?domain=interpolis.nl&sz=128", href: "https://www.interpolis.nl", description: "Glashelder" },
    { name: "FBTO", logo: "https://www.google.com/s2/favicons?domain=fbto.nl&sz=128", href: "https://www.fbto.nl", description: "Jij kiest, jij beslist" },
    { name: "Allianz Direct", logo: "https://www.google.com/s2/favicons?domain=allianzdirect.nl&sz=128", href: "https://www.allianzdirect.nl", description: "De online verzekeraar" },
    { name: "Klaverblad", logo: "https://www.google.com/s2/favicons?domain=klaverblad.nl&sz=128", href: "https://www.klaverblad.nl", description: "Gewoon goede verzekeringen" },
    { name: "Ohra", logo: "https://www.google.com/s2/favicons?domain=ohra.nl&sz=128", href: "https://www.ohra.nl", description: "Direct geregeld, geen gedoe" }
  ],
  warmtepomp: [
    { name: "Vattenfall", logo: "https://www.google.com/s2/favicons?domain=vattenfall.nl&sz=128", href: "https://www.vattenfall.nl", description: "Samen voor fossielvrij" },
    { name: "Essent", logo: "https://www.google.com/s2/favicons?domain=essent.nl&sz=128", href: "https://www.essent.nl", description: "De kracht van Nederland" },
    { name: "Eneco", logo: "https://www.google.com/s2/favicons?domain=eneco.nl&sz=128", href: "https://www.eneco.nl", description: "Samen voor duurzaam" },
    { name: "Budget Energie", logo: "https://www.google.com/s2/favicons?domain=budgetenergie.nl&sz=128", href: "https://www.budgetenergie.nl", description: "Gewoon goede energie" },
    { name: "Greenchoice", logo: "https://www.google.com/s2/favicons?domain=greenchoice.nl&sz=128", href: "https://www.greenchoice.nl", description: "Samen voor groen" },
    { name: "Coolblue Energie", logo: "https://www.google.com/s2/favicons?domain=coolblue.nl&sz=128", href: "https://www.coolblue.nl/energie", description: "Alles voor een glimlach" },
    { name: "Pure Energie", logo: "https://www.google.com/s2/favicons?domain=pure-energie.nl&sz=128", href: "https://www.pure-energie.nl", description: "De groenste van NL" },
    { name: "Tibber", logo: "https://www.google.com/s2/favicons?domain=tibber.com&sz=128", href: "https://www.tibber.com", description: "Digitale leverancier" }
  ],
  zonnepanelen: [
    { name: "Zonneplan", logo: "https://www.google.com/s2/favicons?domain=zonneplan.nl&sz=128", href: "https://www.zonneplan.nl", description: "Nummer 1 in zonnepanelen" },
    { name: "Vattenfall", logo: "https://www.google.com/s2/favicons?domain=vattenfall.nl&sz=128", href: "https://www.vattenfall.nl", description: "Samen voor fossielvrij" },
    { name: "Essent", logo: "https://www.google.com/s2/favicons?domain=essent.nl&sz=128", href: "https://www.essent.nl", description: "De kracht van Nederland" },
    { name: "Coolblue", logo: "https://www.google.com/s2/favicons?domain=coolblue.nl&sz=128", href: "https://www.coolblue.nl", description: "Alles voor een glimlach" },
    { name: "Eneco", logo: "https://www.google.com/s2/favicons?domain=eneco.nl&sz=128", href: "https://www.eneco.nl", description: "Samen voor duurzaam" },
    { name: "Budget Energie", logo: "https://www.google.com/s2/favicons?domain=budgetenergie.nl&sz=128", href: "https://www.budgetenergie.nl", description: "Gewoon goede energie" },
    { name: "Greenchoice", logo: "https://www.google.com/s2/favicons?domain=greenchoice.nl&sz=128", href: "https://www.greenchoice.nl", description: "Samen voor groen" },
    { name: "Zelfstroom", logo: "https://www.google.com/s2/favicons?domain=zelfstroom.nl&sz=128", href: "https://www.zelfstroom.nl", description: "Huren of kopen" }
  ],
  autoverzekering: [
    { name: "Allianz Direct", logo: "https://www.google.com/s2/favicons?domain=allianzdirect.nl&sz=128", href: "https://www.allianzdirect.nl", description: "De online verzekeraar" },
    { name: "Univé", logo: "https://www.google.com/s2/favicons?domain=unive.nl&sz=128", href: "https://www.unive.nl", description: "Vruchten van plukken" },
    { name: "Centraal Beheer", logo: "https://www.google.com/s2/favicons?domain=centraalbeheer.nl&sz=128", href: "https://www.centraalbeheer.nl", description: "Even Apeldoorn bellen" },
    { name: "FBTO", logo: "https://www.google.com/s2/favicons?domain=fbto.nl&sz=128", href: "https://www.fbto.nl", description: "Jij kiest, jij beslist" },
    { name: "InShared", logo: "https://www.google.com/s2/favicons?domain=inshared.nl&sz=128", href: "https://www.inshared.nl", description: "We share, you share" },
    { name: "Ohra", logo: "https://www.google.com/s2/favicons?domain=ohra.nl&sz=128", href: "https://www.ohra.nl", description: "Direct geregeld" },
    { name: "Interpolis", logo: "https://www.google.com/s2/favicons?domain=interpolis.nl&sz=128", href: "https://www.interpolis.nl", description: "Glashelder" },
    { name: "ANWB", logo: "https://www.google.com/s2/favicons?domain=anwb.nl&sz=128", href: "https://www.anwb.nl", description: "Altijd onderweg" }
  ],
  thuisbatterij: [
    { name: "Zonneplan", logo: "https://www.google.com/s2/favicons?domain=zonneplan.nl&sz=128", href: "https://www.zonneplan.nl/thuisbatterij", description: "De slimste batterij" },
    { name: "Btw-vrij", logo: "https://www.google.com/s2/favicons?domain=btwvrij.nl&sz=128", href: "https://www.btwvrij.nl", description: "Subsidie hulp" },
    { name: "Sessy", logo: "https://www.google.com/s2/favicons?domain=sessy.nl&sz=128", href: "https://www.sessy.nl", description: "Nederlandse batterij" },
    { name: "Vattenfall", logo: "https://www.google.com/s2/favicons?domain=vattenfall.nl&sz=128", href: "https://www.vattenfall.nl", description: "Samen voor duurzaam" },
    { name: "Essent", logo: "https://www.google.com/s2/favicons?domain=essent.nl&sz=128", href: "https://www.essent.nl", description: "Energie opslaan" },
    { name: "Eneco", logo: "https://www.google.com/s2/favicons?domain=eneco.nl&sz=128", href: "https://www.eneco.nl", description: "Zelfvoorzienend wonen" },
    { name: "Budget Energie", logo: "https://www.google.com/s2/favicons?domain=budgetenergie.nl&sz=128", href: "https://www.budgetenergie.nl", description: "Slimme energie" },
    { name: "Coolblue", logo: "https://www.google.com/s2/favicons?domain=coolblue.nl&sz=128", href: "https://www.coolblue.nl", description: "Alles voor een glimlach" }
  ],
  overlijdensrisico: [
    { name: "Independer", logo: "https://www.google.com/s2/favicons?domain=independer.nl&sz=128", href: "https://www.independer.nl", description: "Vergelijk ze allemaal" },
    { name: "FBTO", logo: "https://www.google.com/s2/favicons?domain=fbto.nl&sz=128", href: "https://www.fbto.nl", description: "Direct geregeld" },
    { name: "Centraal Beheer", logo: "https://www.google.com/s2/favicons?domain=centraalbeheer.nl&sz=128", href: "https://www.centraalbeheer.nl", description: "Even Apeldoorn bellen" },
    { name: "Allianz", logo: "https://www.google.com/s2/favicons?domain=allianz.nl&sz=128", href: "https://www.allianz.nl", description: "Wereldwijde zekerheid" }
  ],
  isolatie: [
    { name: "Offertevergelijker", logo: "https://www.google.com/s2/favicons?domain=offertevergelijker.nl&sz=128", href: "https://www.offertevergelijker.nl", description: "Vergelijk & bespaar" },
    { name: "Isolatie-vergelijker", logo: "https://www.google.com/s2/favicons?domain=isolatie-vergelijker.nl&sz=128", href: "https://www.isolatie-vergelijker.nl", description: "Beste deal in de buurt" },
    { name: "Vattenfall", logo: "https://www.google.com/s2/favicons?domain=vattenfall.nl&sz=128", href: "https://www.vattenfall.nl", description: "Isolatie advies" },
    { name: "Essent", logo: "https://www.google.com/s2/favicons?domain=essent.nl&sz=128", href: "https://www.essent.nl", description: "Bespaar op energie" },
    { name: "Zonneplan", logo: "https://www.google.com/s2/favicons?domain=zonneplan.nl&sz=128", href: "https://www.zonneplan.nl", description: "Slim isoleren" },
    { name: "Budget Energie", logo: "https://www.google.com/s2/favicons?domain=budgetenergie.nl&sz=128", href: "https://www.budgetenergie.nl", description: "Energiezuinig wonen" }
  ],
  studentenlening: [
    { name: "Brand New Day", logo: "https://www.google.com/s2/favicons?domain=brandnewday.nl&sz=128", href: "https://www.brandnewday.nl", description: "Slim sparen" },
    { name: "Openbank", logo: "https://www.google.com/s2/favicons?domain=openbank.nl&sz=128", href: "https://www.openbank.nl", description: "Hoge spaarrente" },
    { name: "Bunq", logo: "https://www.google.com/s2/favicons?domain=bunq.com&sz=128", href: "https://www.bunq.com", description: "Bank of the free" },
    { name: "ING", logo: "https://www.google.com/s2/favicons?domain=ing.nl&sz=128", href: "https://www.ing.nl", description: "Studentenrekening" },
    { name: "Rabobank", logo: "https://www.google.com/s2/favicons?domain=rabobank.nl&sz=128", href: "https://www.rabobank.nl", description: "Starten met groeien" },
    { name: "ABN AMRO", logo: "https://www.google.com/s2/favicons?domain=abnamro.nl&sz=128", href: "https://www.abnamro.nl", description: "Studentenpakket" },
    { name: "Knab", logo: "https://www.google.com/s2/favicons?domain=knab.nl&sz=128", href: "https://www.knab.nl", description: "Voordelig bankieren" },
    { name: "SNS Bank", logo: "https://www.google.com/s2/favicons?domain=snsbank.nl&sz=128", href: "https://www.snsbank.nl", description: "Persoonlijk bankieren" },
    { name: "ASN Bank", logo: "https://www.google.com/s2/favicons?domain=asnbank.nl&sz=128", href: "https://www.asnbank.nl", description: "Duurzaam studenten" },
    { name: "DUO", logo: "https://www.google.com/s2/favicons?domain=duo.nl&sz=128", href: "https://www.duo.nl", description: "Officiële info" }
  ],
  "vaste-lasten": [
    { name: "Independer", logo: "https://www.google.com/s2/favicons?domain=independer.nl&sz=128", href: "https://www.independer.nl", description: "Alles vergelijken" },
    { name: "Vattenfall", logo: "https://www.google.com/s2/favicons?domain=vattenfall.nl&sz=128", href: "https://www.vattenfall.nl", description: "Energie besparen" },
    { name: "KPN", logo: "https://www.google.com/s2/favicons?domain=kpn.com&sz=128", href: "https://www.kpn.com", description: "Internet & TV" },
    { name: "Ziggo", logo: "https://www.google.com/s2/favicons?domain=ziggo.nl&sz=128", href: "https://www.ziggo.nl", description: "Snel internet" }
  ],
  "eigen-risico": [
    { name: "FBTO", logo: "https://www.google.com/s2/favicons?domain=fbto.nl&sz=128", href: "https://www.fbto.nl", description: "Jouw zorg, jouw keuze" },
    { name: "Independer", logo: "https://www.google.com/s2/favicons?domain=independer.nl&sz=128", href: "https://www.independer.nl", description: "Vergelijk zorg" },
    { name: "VGZ", logo: "https://www.google.com/s2/favicons?domain=vgz.nl&sz=128", href: "https://www.vgz.nl", description: "Goede zorg voor iedereen" }
  ],
  alcohol: [
    { name: "Alcoholinfo", logo: "https://www.google.com/s2/favicons?domain=alcoholinfo.nl&sz=128", href: "https://www.alcoholinfo.nl", description: "Betrouwbare info" },
    { name: "BOB", logo: "https://www.google.com/s2/favicons?domain=daid.nl&sz=128", href: "https://www.daid.nl", description: "Veilig naar huis" }
  ],
  fun: [
    { name: "Bol.com", logo: "https://www.google.com/s2/favicons?domain=bol.com&sz=128", href: "https://www.bol.com", description: "De winkel van ons allemaal" },
    { name: "Amazon", logo: "https://www.google.com/s2/favicons?domain=amazon.nl&sz=128", href: "https://www.amazon.nl", description: "Grootste assortiment" },
    { name: "Coolblue", logo: "https://www.google.com/s2/favicons?domain=coolblue.nl&sz=128", href: "https://www.coolblue.nl", description: "Alles voor een glimlach" }
  ]
};

export const getPartnersByTopic = (topic: string): Partner[] => {
  return PARTNER_CONFIG[topic] || [];
};
