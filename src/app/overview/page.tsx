"use client";
import { AppRoot, Text, Avatar, Card } from "@telegram-apps/telegram-ui";
import { useLoading } from "../../hooks/useLoading";
import LoadingSpinner from "../../components/LoadingSpinner";
import BottomNavigation from "../../components/BottomNavigation";
import ParticlesAnimation from "../../components/ParticlesAnimation";

export default function OverviewPage() {
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
          justifyContent: "space-between"
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

        {/* Основной контент Overview */}
        <div style={{
          padding: "20px",
          position: "relative"
        }}>
          {/* Анимация частиц */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1
          }}>
            <ParticlesAnimation />
          </div>

          {/* Метрики */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 2,
            marginTop: "60px"
          }}>
            {/* Метрика 1: Общее количество сканирований */}
            <Card style={{
              width: "172px",
              height: "59px",
              borderRadius: "10px",
              background: "#F2F2F7",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px 16px"
            }}>
              <Text style={{
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "16px",
                letterSpacing: "-0.08px",
                color: "#000",
                marginBottom: "4px"
              }}>
                100
              </Text>
              <Text style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "#555",
                lineHeight: "16px"
              }}>
                Сканирований всего
              </Text>
            </Card>

            {/* Метрика 2: Уникальные пользователи */}
            <Card style={{
              width: "172px",
              height: "59px",
              borderRadius: "10px",
              background: "#F2F2F7",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px 16px"
            }}>
              <Text style={{
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "16px",
                letterSpacing: "-0.08px",
                color: "#000",
                marginBottom: "4px"
              }}>
                42
              </Text>
              <Text style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "#555",
                lineHeight: "16px"
              }}>
                Уникальных юзеров
              </Text>
            </Card>
          </div>
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
              fontSize: "12px",
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
