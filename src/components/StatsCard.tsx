import { Card, Text } from "@telegram-apps/telegram-ui";
import { t } from "../i18n";
import { Language } from "../i18n";

interface StatsCardProps {
  value: string | number;
  labelKey: string;
  language: Language;
}

export default function StatsCard({ value, labelKey, language }: StatsCardProps) {
  return (
    <Card style={{
      width: "172px",
      height: "59px",
      borderRadius: "10px",
      background: "#E6E6EA",
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
        color: "var(--tg-theme-text-color)",
        marginBottom: "4px"
      }}>
        {value}
      </Text>
      <Text style={{
        fontSize: "13px",
        fontWeight: "600",
        color: "var(--tg-theme-hint-color)",
        lineHeight: "16px"
      }}>
        {t(labelKey, language)}
      </Text>
    </Card>
  );
}