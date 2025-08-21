"use client";
import { useLanguage } from "../contexts/LanguageContext";
import StatsCard from "./StatsCard";

export default function ServerStatsSection() {
  const { language } = useLanguage();
  
  return (
    <div style={{
      padding: "20px"
    }}>
      {/* Статистика */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "16px"
      }}>
        <StatsCard 
          value="100" 
          labelKey="stats.totalScans"
          language={language}
        />
        <StatsCard 
          value="42" 
          labelKey="stats.uniqueUsers"
          language={language}
        />
      </div>
    </div>
  );
}
