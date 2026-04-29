export interface ToolContent {
  id: string;
  topic: string;
  intro: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  contentTitle?: string;
  contentText?: string;
}

export const TOOL_CONTENT: Record<string, ToolContent> = {
  "hypotheek": {
  "id": "hypotheek",
  "topic": "hypotheek",
  "intro": "Snel antwoord op de vraag",
  "title": "Wat is jouw Ideale Maximale Hypotheek?",
  "subtitle": "Bereken direct jouw leencapaciteit op basis van de Nibud-normen 2026.Bereken direct jouw leencapaciteit op basis van de Nibud-normen 2026.Bereken direct jouw leencapaciteit op basis van de Nibud-normen 2026. met minder text maar wel lekker ",
  "metaTitle": "Maximale Hypotheek Berekenen 2026 | Snel & Onafhankelijk",
  "metaDescription": "Bereken direct hoeveel je maximaal kunt lenen voor je woning in 2026. Onafhankelijk advies en vlijmscherpe berekeningen.",
  "category": "Wonen",
  "contentTitle": "Eenvoudig inzicht in je leencapaciteit",
  "contentText": "Hoeveel je kunt lenen hangt af van je inkomen, eventuele schulden en de waarde van de woning. Onze tool geeft je direct een indicatie op basis van de Nibud-normen voor 2026. belangrijk "
},
  "zonnepanelen": {
    id: "zonnepanelen",
    topic: "zonnepanelen",
    intro: "Energie & Wonen",
    title: "Zonnepanelen Rendement",
    subtitle: "Bereken direct de terugverdientijd en de jaarlijkse opbrengst van jouw zonnepanelen.",
    metaTitle: "Zonnepanelen Berekenen 2026 | Terugverdientijd & Opbrengst",
    metaDescription: "Bereken direct de opbrengst en terugverdientijd van zonnepanelen. Ontdek hoeveel je bespaart op je energierekening in 2026.",
    category: "Wonen",
    contentTitle: "Zijn zonnepanelen nog steeds rendabel?",
    contentText: "Ondanks de discussie over de salderingsregeling en terugleverkosten blijven zonnepanelen een van de beste investeringen voor je woning. Met een gemiddelde terugverdientijd van 5 tot 7 jaar en een levensduur van 25 jaar, leveren ze nog steeds een fors rendement op."
  },
  "pensioen": {
    id: "pensioen",
    topic: "pensioen",
    intro: "Geld & Toekomst",
    title: "Pensioen Opbouw",
    subtitle: "Bereken of je voldoende opbouwt voor later en ontdek je jaarruimte voor 2026.",
    metaTitle: "Pensioen Opbouw Berekenen 2026 | Toekomstige Ouderdomsvoorziening",
    metaDescription: "Bereken hoeveel pensioen je naar verwachting hebt opgebouwd bij je pensioenleeftijd, gebaseerd op je maandelijkse bijdragen en verwacht rendement.",
    category: "Geld",
    contentTitle: "Waarom pensioenplanning belangrijk is",
    contentText: "Een helder overzicht van je verwachte pensioenpot helpt je om tijdig extra besparingen te doen, je beleggingsstrategie aan te passen en een comfortabel pensioen te garanderen."
  },
  "alcohol": {
    id: "alcohol",
    topic: "alcohol",
    intro: "Gezondheid & Veiligheid",
    title: "Alcohol Berekenen",
    subtitle: "Bereken je geschatte bloedalcoholgehalte (BAG) op basis van je consumpties.",
    metaTitle: "Promillage Berekenen 2026 | Alcohol Calculator & Limiet",
    metaDescription: "Bereken direct je geschatte promillage na het drinken van alcohol. Ontdek hoe lang het duurt voordat je weer mag autorijden.",
    category: "Gezondheid",
    contentTitle: "Hoe wordt alcohol afgebroken?",
    contentText: "Je lichaam breekt alcohol af met een constante snelheid van ongeveer 0,15 promille per hour. Niets kan dit proces versnellen: geen koffie, geen koude douche en geen zware maaltijd."
  },
  "uurtarief": {
    id: "uurtarief",
    topic: "uurtarief",
    intro: "Werk & Ondernemen",
    title: "Uurtarief ZZP",
    subtitle: "Bereken welk uurtarief je moet vragen om je gewenste netto inkomen te behalen.",
    metaTitle: "Uurtarief Berekenen als ZZP | Freelance Calculator 2026",
    metaDescription: "Bereken eenvoudig welk uurtarief je moet vragen als freelancer of ZZP'er om je gewenste netto inkomen te behalen.",
    category: "Werk",
    contentTitle: "Bepaal je waarde als ondernemer",
    contentText: "Een goed uurtarief dekt niet alleen je salaris, maar ook je pensioen, verzekeringen en vakantiedagen. Onze calculator houdt rekening met alle verborgen kosten van het ondernemerschap."
  },
  "eigen-risico": {
    id: "eigen-risico",
    topic: "eigen-risico",
    intro: "Zorg & Verzekeringen",
    title: "Eigen Risico",
    subtitle: "Ontdek of het verhogen van je eigen risico in 2026 loont voor jouw situatie.",
    metaTitle: "Eigen Risico Berekenen 2026 | Zorgkosten & Verzekering",
    metaDescription: "Bereken je jaarlijkse eigen risico en out‑of‑pocket zorgkosten op basis van je uitgaven, eigen risico en verzekeringsdekking.",
    category: "Gezondheid",
    contentTitle: "Hoe werkt het verplicht eigen risico?",
    contentText: "Het eigen risico is het bedrag dat je zelf betaalt voordat je zorgverzekering kosten vergoedt. Voor 2026 is het verplicht eigen risico bevroren op €385."
  },
  "vaste-lasten": {
    id: "vaste-lasten",
    topic: "vaste-lasten",
    intro: "Persoonlijke Financiën",
    title: "Vaste Lasten",
    subtitle: "Krijg direct overzicht van al je maandelijkse uitgaven en zie wat je onderaan de streep overhoudt.",
    metaTitle: "Vaste Lasten Berekenen 2026 | Grip op je Budget",
    metaDescription: "Bereken je maandelijkse vaste lasten en krijg direct inzicht in je budget. Ontdek waar je kunt besparen op wonen, energie en abonnementen.",
    category: "Geld",
    contentTitle: "Krijg weer rust in je hoofd",
    contentText: "Weten waar je geld naartoe gaat is de eerste stap naar financiële vrijheid. Door je vaste lasten te categoriseren zie je direct waar je onnodig geld uitgeeft."
  },
  "studentenlening": {
    id: "studentenlening",
    topic: "studentenlening",
    intro: "Geld & Studie",
    title: "Studieschuld",
    subtitle: "Bereken je maandelijkse aflossing en de impact van de rente op je totale studieschuld.",
    metaTitle: "Studieschuld Berekenen 2026 | DUO Maandbedrag & Rente",
    metaDescription: "Bereken direct je maandelijke aflossing voor je studieschuld bij DUO. Inclusief 35-jaar en 15-jaar stelsels en impact van de huidige rente.",
    category: "Geld",
    contentTitle: "Afbetalen of wachten?",
    contentText: "De rente op studieschulden is flink gestegen. Het is daarom belangrijker dan ooit om te weten hoe lang je moet aflossen en wat het totale bedrag inclusief rente zal zijn."
  },
  "gezondheid": {
    id: "gezondheid",
    topic: "gezondheid",
    intro: "Gezondheid & Lifestyle",
    title: "BMI & Calorieën",
    subtitle: "Bereken je Body Mass Index en ontdek je dagelijkse caloriebehoefte voor een gezonde balans.",
    metaTitle: "BMI & Caloriebehoefte Berekenen 2026 | Gezond Gewicht",
    metaDescription: "Bereken direct je BMI en dagelijkse caloriebehoefte (TDEE). Ontdek wat een gezond gewicht is voor jouw lengte en leeftijd.",
    category: "Gezondheid",
    contentTitle: "Wat betekent jouw BMI resultaat?",
    contentText: "Je BMI geeft een indicatie of je gewicht past bij je lengte. Voor een completer beeld kijken we ook naar je TDEE, oftewel hoeveel energie je lichaam dagelijks nodig heeft."
  },
  "warmtepomp": {
    id: "warmtepomp",
    topic: "warmtepomp",
    intro: "Energie & Duurzaamheid",
    title: "Warmtepomp Rendement",
    subtitle: "Bereken direct jouw gasbesparing en de terugverdientijd van een hybride of volledige warmtepomp.",
    metaTitle: "Warmtepomp Rendement Berekenen 2026 | Bespaar direct",
    metaDescription: "Ontdek hoeveel je bespaart met een warmtepomp. Bereken je jaarlijkse gasbesparing, terugverdientijd en benodigde investering.",
    category: "Wonen",
    contentTitle: "Hoe rendabel is een warmtepomp?",
    contentText: "Met de stijgende gasprijzen is de overstap naar een warmtepomp vaak een slimme zet. In veel gevallen verdien je de investering binnen 7 tot 10 jaar terug, afhankelijk van je huidige verbruik en isolatie."
  },
  "isolatie": {
    id: "isolatie",
    topic: "isolatie",
    intro: "Energie & Comfort",
    title: "Isolatie Besparing",
    subtitle: "Bereken direct hoeveel m³ gas je bespaart met de verschillende vormen van isolatie.",
    metaTitle: "Isolatie Besparing Berekenen 2026 | Lagere Energierekening",
    metaDescription: "Ontdek hoeveel je bespaart door je woning beter te isoleren. Bereken direct de winst van spouwmuur-, dak- en vloerisolatie.",
    category: "Wonen",
    contentTitle: "Begin bij de basis: Isolatie",
    contentText: "Voordat je kijkt naar warmtepompen of zonnepanelen, is goede isolatie de allerbeste investering. Het verlaagt direct je basisverbruik en verhoogt het wooncomfort aanzienlijk."
  },
  "thuisbatterij": {
    id: "thuisbatterij",
    topic: "thuisbatterij",
    intro: "Energie & Wonen",
    title: "Thuisbatterij Rendement",
    subtitle: "Ontdek of een thuisbatterij in 2026 rendabel is voor jouw specifieke situatie.",
    metaTitle: "Thuisbatterij Berekenen 2026 | Rendement & Besparing",
    metaDescription: "Bereken de terugverdientijd van een thuisbatterij in 2026. Ontdek of een batterij loont nu de salderingsregeling wordt afgebouwd.",
    category: "Wonen",
    contentTitle: "Zelfvoorzienend worden?",
    contentText: "Een thuisbatterij helpt je om meer van je eigen zonne-energie te verbruiken. Dit wordt steeds belangrijker naarmate de salderingsregeling wordt afgebouwd en terugleverkosten stijgen."
  },
  "autoverzekering": {
    id: "geld/autokosten",
    topic: "autoverzekering",
    intro: "Geld & Verzekeringen",
    title: "Autoverzekering",
    subtitle: "Bereken de maandelijkse kosten voor je autoverzekering op basis van je rijgedrag en auto.",
    metaTitle: "Autokosten Berekenen 2026 | Wat kost mijn auto per maand?",
    metaDescription: "Bereken de volledige kosten van je auto per maand en per kilometer. Inclusief brandstof, wegenbelasting, verzekering en afschrijving.",
    category: "Verzekering",
    contentTitle: "Besparen op je autoverzekering?",
    contentText: "De premie voor je autoverzekering hangt af van je schadevrije jaren, je woonplaats en de gekozen dekking. Door jaarlijks te vergelijken kun je vaak tientallen euro's per maand besparen."
  },
  "begrafeniskosten": {
    id: "geld/begrafenis",
    topic: "uitvaart",
    intro: "Geld & Zekerheid",
    title: "Begrafeniskosten",
    subtitle: "Bereken de totale kosten van een uitvaart en voorkom financiële verrassingen voor nabestaanden.",
    metaTitle: "Begrafeniskosten Berekenen 2026 | Wat kost een uitvaart?",
    metaDescription: "Bereken direct de geschatte kosten voor een begrafenis in Nederland. Inzicht in grafrechten, uitvaartverzorger en catering.",
    category: "Verzekering",
    contentTitle: "De kosten van een begrafenis",
    contentText: "Een begrafenis is vaak duurder dan een crematie vanwege grafrechten en het onderhoud van het graf. Gemiddeld liggen de kosten tussen de €8.000 and €11.000."
  },
  "crematiekosten": {
    id: "geld/crematie",
    topic: "uitvaart",
    intro: "Geld & Zekerheid",
    title: "Crematiekosten",
    subtitle: "Bereken de kosten voor een respectvolle crematie en bekijk de vergoedingen.",
    metaTitle: "Crematiekosten Berekenen 2026 | Wat kost een crematie?",
    metaDescription: "Bereken de kosten voor een crematie in Nederland. Ontdek de verschillen in prijs tussen begraven en cremeren.",
    category: "Verzekering",
    contentTitle: "Uitvaartverzekering Vergelijken",
    contentText: "Door de kosten van een crematie vooraf in kaart te brengen, kun je bepalen of een uitvaartverzekering nodig is om de financiële last voor je familie te verlichten."
  },
  "inboedelverzekering": {
    id: "geld/inboedelverzekering",
    topic: "inboedel",
    intro: "Geld & Verzekeringen",
    title: "Inboedelverzekering",
    subtitle: "Bereken de waarde van je inboedel en de bijbehorende maandelijkse premie.",
    metaTitle: "Inboedelverzekering Berekenen 2026 | Waarde & Premie",
    metaDescription: "Bereken de waarde van je inboedel en ontdek welke dekking je nodig hebt. Vergelijk de beste inboedelverzekeringen voor jouw woning.",
    category: "Verzekering",
    contentTitle: "Direct je premie berekenen",
    contentText: "Je inboedel is vaak meer waard dan je denkt. Met een goede verzekering zijn je spullen beschermd tegen brand, diefstal en waterschade."
  },
  "reisverzekering": {
    id: "geld/reisverzekering",
    topic: "reisverzekering",
    intro: "Geld & Verzekeringen",
    title: "Reisverzekering",
    subtitle: "Bereken de kosten voor een kortlopende of doorlopende reisverzekering.",
    metaTitle: "Reisverzekering Berekenen 2026 | Kortlopend of Doorlopend?",
    metaDescription: "Bereken of een doorlopende reisverzekering voor jou goedkoper is dan een kortlopende verzekering. Vergelijk prijzen en dekkingen.",
    category: "Verzekering",
    contentTitle: "Vind de beste reisverzekering",
    contentText: "Ga je vaker dan twee keer per jaar op vakantie? Dan is een doorlopende reisverzekering vaak goedkoper dan elke keer een losse verzekering afsluiten."
  },
  "levensverzekering": {
    id: "geld/levensverzekering",
    topic: "overlijdensrisico",
    intro: "Geld & Verzekeringen",
    title: "Levensverzekering",
    subtitle: "Bescherm je nabestaanden en bereken de premie voor een levensverzekering.",
    metaTitle: "Levensverzekering Berekenen 2026 | Overlijdensrisico",
    metaDescription: "Bereken de premie voor een overlijdensrisicoverzekering. Zorg voor financiële zekerheid voor je nabestaanden bij overlijden.",
    category: "Verzekering",
    contentTitle: "Vergelijk ORV premies",
    contentText: "Een overlijdensrisicoverzekering (ORV) geeft je partner en kinderen financiële rust als jij er niet meer bent. De premies zijn de afgelopen jaren flink gedaald."
  },
  "8ball": {
    id: "fun/8ball",
    topic: "fun",
    intro: "Aftellen & Fun",
    title: "Magische 8-Ball",
    subtitle: "Stel een vraag en laat de magische 8-ball je toekomst voorspellen.",
    metaTitle: "Magische 8-Ball | Krijg direct antwoord op je vragen",
    metaDescription: "Stel een ja/nee vraag aan de Magische 8-Ball en ontdek wat de toekomst voor je in petto heeft.",
    category: "Fun"
  },
  "kerst": {
    id: "fun/kerst",
    topic: "countdown",
    intro: "Aftellen & Fun",
    title: "Dagen tot Kerst",
    subtitle: "Tel af naar de gezelligste tijd van het jaar. Hoeveel nachtjes nog tot kerstavond?",
    metaTitle: "Dagen tot Kerst 2026 | Kerst Countdown & Klok",
    metaDescription: "Hoeveel dagen, uren en minuten nog tot Kerst? Bekijk onze live kerst countdown en begin met aftellen naar de gezelligste tijd van het jaar.",
    category: "Fun",
    contentTitle: "Kerstcadeaus op tijd in huis?",
    contentText: "De kerstdagen komen altijd sneller dan je denkt. Door op tijd te beginnen met de voorbereidingen voorkom je stress en kun je optimaal genieten van de feestdagen."
  },
  "dagentot": {
    id: "fun/dagentot",
    topic: "deathclock",
    intro: "Aftellen & Fun",
    title: "Dagentot (Death Clock)",
    subtitle: "Krijg een statistische indicatie van je resterende tijd op aarde. Gebruik het als motivatie!",
    metaTitle: "Dagentot (Death Clock) | Hoeveel dagen heb je nog?",
    metaDescription: "Bereken je geschatte resterende dagen op basis van levensverwachting en levensstijl. Een tool voor reflectie.",
    category: "Fun"
  },
  "iching": {
    id: "fun/iching",
    topic: "iching",
    intro: "Aftellen & Fun",
    title: "I Ching (Itjing)",
    subtitle: "Raadpleeg het eeuwenoude Chinese Boek der Veranderingen voor inzicht en wijsheid.",
    metaTitle: "I Ching (Itjing) | Oude Chinese Divinatie",
    metaDescription: "Raadpleeg de I Ching voor wijsheid en inzicht in je huidige situatie met onze digitale hexagram calculator.",
    category: "Fun"
  }
};
