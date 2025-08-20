"use client";
import { Text } from "@telegram-apps/telegram-ui";
import { useLoading } from "../hooks/useLoading";

interface BottomNavigationProps {
  activeTab: 'overview' | 'folders' | 'qr-codes';
}

export default function BottomNavigation({ activeTab }: BottomNavigationProps) {
  const { navigateWithLoading } = useLoading();

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: "white",
      borderTop: "0.5px solid #e0e0e0",
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px",
      padding: "12px 0 24px 0",
      zIndex: 999
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto"
      }}>
        <div 
          onClick={() => navigateWithLoading('/overview')}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            padding: "8px 16px",
            background: activeTab === 'overview' ? "#E3F2FD" : "transparent",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            flex: 1,
            textAlign: "center"
          }}
        >
          <div style={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <img 
              src={activeTab === 'overview' ? "/icons/overview-active.svg" : "/icons/overview-not-active.svg"}
              alt="Overview"
              style={{ width: "24px", height: "24px" }}
            />
          </div>
          <Text style={{
            fontSize: "12px",
            color: activeTab === 'overview' ? "#007AFF" : "#999",
            fontWeight: activeTab === 'overview' ? "500" : "normal"
          }}>
            Overview
          </Text>
        </div>

        <div 
          onClick={() => navigateWithLoading('/folders')}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            padding: "8px 16px",
            background: activeTab === 'folders' ? "#E3F2FD" : "transparent",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            flex: 1,
            textAlign: "center"
          }}
        >
          <div style={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <img 
              src={activeTab === 'folders' ? "/icons/folder-active.svg" : "/icons/folder-not-active.svg"}
              alt="Folders"
              style={{ width: "24px", height: "24px" }}
            />
          </div>
          <Text style={{
            fontSize: "12px",
            color: activeTab === 'folders' ? "#007AFF" : "#999",
            fontWeight: activeTab === 'folders' ? "500" : "normal"
          }}>
            Folders
          </Text>
        </div>

        <div 
          onClick={() => navigateWithLoading('/qr-codes')}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            padding: "8px 16px",
            background: activeTab === 'qr-codes' ? "#E3F2FD" : "transparent",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            flex: 1,
            textAlign: "center"
          }}
        >
          <div style={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <img 
              src={activeTab === 'qr-codes' ? "/icons/qr-active.svg" : "/icons/qr-not-active.svg"}
              alt="QR-codes"
              style={{ width: "24px", height: "24px" }}
            />
          </div>
          <Text style={{
            fontSize: "12px",
            color: activeTab === 'qr-codes' ? "#007AFF" : "#999",
            fontWeight: activeTab === 'qr-codes' ? "500" : "normal"
          }}>
            QR-codes
          </Text>
        </div>
      </div>
    </div>
  );
}
