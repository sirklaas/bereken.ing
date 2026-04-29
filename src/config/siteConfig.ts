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
  { name: "Autokosten", href: "/geld/autokosten", category: "Geld" },
  { name: "Inboedelverzekering", href: "/geld/inboedelverzekering", category: "Geld" },
  { name: "Reisverzekering", href: "/geld/reisverzekering", category: "Geld" },
  { name: "Levensverzekering", href: "/geld/levensverzekering", category: "Geld" },
  { name: "Begrafeniskosten", href: "/geld/begrafenis", category: "Geld" },
  { name: "Crematiekosten", href: "/geld/crematie", category: "Geld" },
  
  // Wonen / Verduurzamen
  { name: "Zonnepanelen", href: "/wonen/zonnepanelen", category: "Wonen" },
  { name: "Thuisbatterij", href: "/wonen/thuisbatterij", category: "Wonen" },
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
  
  // Fun
  { name: "Dagentot (Death Clock)", href: "/fun/dagentot", category: "Fun" },
  { name: "Magic 8-Ball", href: "/fun/8ball", category: "Fun" },
  { name: "I Ching Oracle", href: "/fun/iching", category: "Fun" },
  { name: "Aftellen naar Jubileum", href: "/fun/jubileum", category: "Fun" },
  { name: "Aftellen naar Verjaardag", href: "/fun/verjaardag", category: "Fun" },
  { name: "Aftellen naar Bruiloft", href: "/fun/bruiloft", category: "Fun" },
  { name: "Ramadan Aftellen", href: "/fun/ramadan", category: "Fun" },
  { name: "Suikerfeest Aftellen", href: "/fun/suikerfeest", category: "Fun" },
  { name: "Kerst Aftellen", href: "/fun/kerst", category: "Fun" },
  { name: "Pasen Aftellen", href: "/fun/pasen", category: "Fun" },
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
