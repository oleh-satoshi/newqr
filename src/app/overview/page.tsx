"use client";
import { AppRoot, Text, Avatar } from "@telegram-apps/telegram-ui";
import { useLoading } from "../../hooks/useLoading";
import LoadingSpinner from "../../components/LoadingSpinner";
import BottomNavigation from "../../components/BottomNavigation";

export default function OverviewPage() {
  const { isLoading, navigateWithLoading } = useLoading();
  
  console.log('📱 OverviewPage render, isLoading:', isLoading);
  
  return (
    <AppRoot appearance="light" platform="ios">
      <div style={{
        background: "#EFEFF",
        minHeight: "100vh",
        padding: "0"
      }}>
        {/* Топ-бар */}
        <div style={{
          background: "#EFEFF",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "0.5px solid #e0e0e0"
        }}>
          {/* Левая сторона - эмодзи и текст */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}>
            <span style={{ fontSize: "12px" }}>🤌</span>
            <Text style={{
              color: "#999",
              fontSize: "12px"
            }}>
              handcrafted by{" "}
              <a 
                href="https://www.linkedin.com/in/blokitin/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#999",
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
          textAlign: "center"
        }}>
          <Text style={{
            fontSize: "24px",
            color: "#007AFF",
            marginBottom: "16px"
          }}>
            Overview Page
          </Text>
          <Text style={{
            fontSize: "16px",
            color: "#666"
          }}>
            This is the Overview tab content
          </Text>
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
            <LoadingSpinner size="large" color="#007AFF" />
            <Text style={{
              fontSize: "12px",
              color: "#666",
              textAlign: "center",
              marginTop: "12px"
            }}>
              Loading...
            </Text>
            <Text style={{
              fontSize: "12px",
              color: "#999",
              textAlign: "center",
              marginTop: "8px"
            }}>
              isLoading: {isLoading.toString()}
            </Text>
          </div>
        )}

        {/* Нижняя навигационная панель */}
        <BottomNavigation activeTab="overview" />
      </div>
    </AppRoot>
  );
}
