import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Wonen Migration
      { source: '/wonen/zonnepanelen', destination: '/zonnepanelen', permanent: true },
      { source: '/wonen/thuisbatterij', destination: '/thuisbatterij', permanent: true },
      
      // Geld Migration
      { source: '/geld/crematie', destination: '/crematie', permanent: true },
      { source: '/geld/begrafenis', destination: '/begrafenis', permanent: true },
      { source: '/geld/autokosten', destination: '/autokosten', permanent: true },
      { source: '/geld/inboedelverzekering', destination: '/inboedelverzekering', permanent: true },
      { source: '/geld/reisverzekering', destination: '/reisverzekering', permanent: true },
      { source: '/geld/levensverzekering', destination: '/levensverzekering', permanent: true },
      
      // Fun Migration
      { source: '/fun/8ball', destination: '/8ball', permanent: true },
      { source: '/fun/kerst', destination: '/kerst', permanent: true },
      { source: '/fun/pasen', destination: '/pasen', permanent: true },
      { source: '/fun/dagentot', destination: '/dagentot', permanent: true },
      { source: '/fun/verjaardag', destination: '/verjaardag', permanent: true },
      { source: '/fun/suikerfeest', destination: '/suikerfeest', permanent: true },
      { source: '/fun/jubileum', destination: '/jubileum', permanent: true },
      { source: '/fun/ramadan', destination: '/ramadan', permanent: true },
      { source: '/fun/bruiloft', destination: '/bruiloft', permanent: true },
      { source: '/fun/iching', destination: '/iching', permanent: true },
    ];
  },
};

export default nextConfig;
