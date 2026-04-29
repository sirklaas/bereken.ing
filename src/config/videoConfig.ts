/**
 * MASTER VIDEO CONFIGURATION
 * 
 * Maps topics to YouTube video IDs.
 */

export const VIDEO_CONFIG: Record<string, string> = {
  hypotheek: "dQw4w9WgXcQ", // Placeholder IDs for now
  uurtarief: "dQw4w9WgXcQ",
  warmtepomp: "dQw4w9WgXcQ",
  isolatie: "dQw4w9WgXcQ",
  pensioen: "dQw4w9WgXcQ",
  studentenlening: "dQw4w9WgXcQ",
  gezondheid: "dQw4w9WgXcQ",
  eigen_risico: "dQw4w9WgXcQ",
  // Fallback video or channel intro
  general: "dQw4w9WgXcQ" 
};

export const getVideoIdByTopic = (topic: string): string => {
  return VIDEO_CONFIG[topic] || VIDEO_CONFIG.general;
};
