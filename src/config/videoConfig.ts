/**
 * MASTER VIDEO CONFIGURATION
 * 
 * Maps topics to YouTube video IDs.
 */

export const VIDEO_CONFIG: Record<string, string> = {
  hypotheek: "V-6uX6V7D1g",
  uurtarief: "Xy-1_D9_rKE",
  warmtepomp: "6yP-6_N_r_E",
  isolatie: "Ind47583605",
  pensioen: "BND47583605",
  studentenlening: "DUO47583605",
  gezondheid: "dQw4w9WgXcQ", // General healthy living
  "eigen-risico": "ZORG47583605",
  uitvaart: "MONU47583605",
  autoverzekering: "AUTO47583605",
  zonnepanelen: "SOLA47583605",
  thuisbatterij: "BATT47583605",
  "vaste-lasten": "IND47583605",
  // Fallback video or channel intro
  general: "dQw4w9WgXcQ" 
};

export const getVideoIdByTopic = (topic: string): string => {
  return VIDEO_CONFIG[topic] || VIDEO_CONFIG.general;
};
