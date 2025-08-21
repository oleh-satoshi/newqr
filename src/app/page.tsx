"use client";
import { AppRoot, Text, Avatar } from "@telegram-apps/telegram-ui";
import { useLoading } from "../hooks/useLoading";
import LoadingSpinner from "../components/LoadingSpinner";
import BottomNavigation from "../components/BottomNavigation";

export default function HomePage() {
  const { isLoading, navigateWithLoading } = useLoading();
  
  return (
    <AppRoot appearance="light" platform="ios">
      <div style={{
        background: "var(--tg-theme-bg-color)",
        minHeight: "100vh",
        padding: "0"
      }}>
        {/* Топ-бар */}
        <div style={{
          background: "var(--tg-theme-bg-color)",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "0.5px solid var(--tg-theme-hint-color)"
        }}>
          {/* Левая сторона - эмодзи и текст */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <span style={{ fontSize: "12px" }}>🤌</span>
            <Text style={{
              color: "var(--tg-theme-hint-color)",
              fontSize: "12px"
            }}>
              handcrafted by{" "}
              <a 
                href="https://www.linkedin.com/in/blokitin/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--tg-theme-hint-color)",
                  textDecoration: "none"
                }}
              >
                Blokitin
              </a>
            </Text>
          </div>

          {/* Правая сторона - аватар */}
          <Avatar 
            src="https://ui-avatars.com/api/?name=User&background=007AFF&color=fff&size=32&rounded=true"
            style={{
              width: "32px",
              height: "32px"
            }}
          />
        </div>

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
        <BottomNavigation activeTab="overview" />
      </div>
    </AppRoot>
  );
}