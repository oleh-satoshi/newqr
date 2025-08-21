"use client";
import { useLoading } from "../hooks/useLoading";
import LoadingSpinner from "./LoadingSpinner";
import BottomNavigation from "./BottomNavigation";
import { Text } from "@telegram-apps/telegram-ui";

interface ClientHomePageProps {
  activeTab: 'overview' | 'folders' | 'qr-codes';
}

export default function ClientHomePage({ activeTab }: ClientHomePageProps) {
  const { isLoading } = useLoading();
  
  return (
    <>
      {/* Индикатор загрузки */}
      {isLoading && (
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
          background: "rgba(255, 255, 255, 0.9)",
          borderRadius: "16px",
          padding: "20px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
        }}>
          <LoadingSpinner size="large" />
          <Text style={{
            fontSize: "14px",
            color: "var(--tg-theme-text-color)",
            textAlign: "center",
            marginTop: "12px"
          }}>
            Loading...
          </Text>
        </div>
      )}

      {/* Нижняя навигационная панель */}
      <BottomNavigation activeTab={activeTab} />
    </>
  );
}
