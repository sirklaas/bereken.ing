/**
 * SITE CONFIGURATION
 * 
 * Centralized list of all tools and pages for Header, Footer, and Sitemap.
 */

export interface ToolItem {
  name: string;
  href: string;
  category: "Geld" | "Wonen" | "Werk" | "Gezondheid" | "Fun" | "AI";
}

export const ALL_TOOLS: ToolItem[] = [
  // Financiën / Geld
  { name: "Maximale Hypotheek", href: "/hypotheek", category: "Geld" },
  { name: "Pensioen", href: "/pensioen", category: "Geld" },
  { name: "Studentenlening", href: "/studentenlening", category: "Geld" },
  { name: "Autokosten", href: "/autokosten", category: "Geld" },
  { name: "Inboedelverzekering", href: "/inboedelverzekering", category: "Geld" },
  { name: "Reisverzekering", href: "/reisverzekering", category: "Geld" },
  { name: "Levensverzekering", href: "/levensverzekering", category: "Geld" },
  { name: "Begrafeniskosten", href: "/begrafenis", category: "Geld" },
  { name: "Crematiekosten", href: "/crematie", category: "Geld" },
  
  // Wonen / Verduurzamen
  { name: "Zonnepanelen", href: "/zonnepanelen", category: "Wonen" },
  { name: "Thuisbatterij", href: "/thuisbatterij", category: "Wonen" },
  { name: "Warmtepomp", href: "/warmtepomp", category: "Wonen" },
  { name: "Isolatie", href: "/isolatie", category: "Wonen" },
  
  // Werk
  { name: "Uurtarief ZZP", href: "/uurtarief", category: "Werk" },
  { name: "Vaste Lasten", href: "/vaste-lasten", category: "Werk" },
  
  // Gezondheid
  { name: "BMI & Calorieën", href: "/gezondheid", category: "Gezondheid" },
  { name: "Eigen Risico", href: "/eigen-risico", category: "Gezondheid" },
  { name: "Alcohol Calculator", href: "/alcohol", category: "Gezondheid" },
  
  // AI
  { name: "AI Besparingshulp", href: "/ai", category: "AI" },
  { name: "AI Video Generator", href: "/ai-video", category: "AI" },
  { name: "AI Afbeeldingen", href: "/ai-plaatjes", category: "AI" },
  { name: "Beste AI Tools", href: "/ai-tools", category: "AI" },
  
  // Fun & Tools
  { name: "Valuta Converter", href: "/valuta", category: "Geld" },
  { name: "Eenheden Omrekenen", href: "/eenheden", category: "Fun" },
  { name: "Typesnelheid Test", href: "/typesnelheid", category: "Fun" },
  { name: "Dagentot (Death Clock)", href: "/dagentot", category: "Fun" },
  { name: "Magic 8-Ball", href: "/8ball", category: "Fun" },
  { name: "I Ching Oracle", href: "/iching", category: "Fun" },
  { name: "Aftellen naar Jubileum", href: "/jubileum", category: "Fun" },
  { name: "Aftellen naar Verjaardag", href: "/verjaardag", category: "Fun" },
  { name: "Aftellen naar Bruiloft", href: "/bruiloft", category: "Fun" },
  { name: "Ramadan Aftellen", href: "/ramadan", category: "Fun" },
  { name: "Suikerfeest Aftellen", href: "/suikerfeest", category: "Fun" },
  { name: "Kerst Aftellen", href: "/kerst", category: "Fun" },
  { name: "Pasen Aftellen", href: "/pasen", category: "Fun" },
];

export const FOOTER_LINKS = {
  main: [
    { name: "Over ons", href: "/over" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Voorwaarden", href: "/voorwaarden" },
  ]
};
