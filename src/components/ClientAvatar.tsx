"use client";
import { Avatar } from "@telegram-apps/telegram-ui";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../i18n";
import { Button, Text } from "@telegram-apps/telegram-ui";

export default function ClientAvatar() {
  const { language, setLanguage } = useLanguage();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsLanguageModalOpen(false);
  };

  return (
    <>
      <div 
        onClick={() => setIsLanguageModalOpen(true)}
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          cursor: "pointer"
        }}
      >
        <Avatar
          src="https://ui-avatars.com/api/?name=User&background=007AFF&color=fff&size=32&rounded=true"
          size={28}
        />
      </div>

      {/* Popup для смены языка */}
      {isLanguageModalOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div style={{
            background: "var(--tg-theme-bg-color)",
            borderRadius: "16px",
            padding: "24px",
            maxWidth: "300px",
            margin: "20px"
          }}>
            <Text style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "20px",
              textAlign: "center"
            }}>
              Select Language
            </Text>
            
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px"
            }}>
              <Button
                mode={language === 'ru' ? "filled" : "outline"}
                onClick={() => handleLanguageChange('ru')}
              >
                Русский
              </Button>
              <Button
                mode={language === 'en' ? "filled" : "outline"}
                onClick={() => handleLanguageChange('en')}
              >
                English
              </Button>
              <Button
                mode={language === 'ua' ? "filled" : "outline"}
                onClick={() => handleLanguageChange('ua')}
              >
                Українська
              </Button>
            </div>
            
            <Button
              mode="outline"
              onClick={() => setIsLanguageModalOpen(false)}
              style={{
                width: "100%",
                marginTop: "16px"
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
