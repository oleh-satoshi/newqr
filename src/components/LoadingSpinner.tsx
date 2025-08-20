"use client";
import { useState, useEffect } from "react";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

export default function LoadingSpinner({ size = "medium", color = "#007AFF" }: LoadingSpinnerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Небольшая задержка для плавного появления
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const sizeMap = {
    small: "16px",
    medium: "24px",
    large: "32px"
  };

  const spinnerSize = sizeMap[size];

  if (!isVisible) return null;

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px"
    }}>
      <div style={{
        width: spinnerSize,
        height: spinnerSize,
        position: "relative",
        animation: "spin 1s linear infinite"
      }}>
        {/* Создаем 5 "лезвий" спиннера */}
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              width: "2px",
              height: "40%",
              background: color,
              borderRadius: "1px",
              top: "50%",
              left: "50%",
              transformOrigin: "50% 0%",
              transform: `translate(-50%, -50%) rotate(${index * 72}deg)`,
              opacity: 1 - (index * 0.2)
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
