"use client";
import { useState, useCallback, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export function useLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navigateWithLoading = useCallback((path: string) => {
    setIsLoading(true);
    
    // Принудительная задержка для демонстрации
    setTimeout(() => {
      router.push(path);
    }, 1000);
  }, [router]);

  // Скрываем индикатор загрузки когда страница полностью загружена
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      // Небольшая задержка для плавности
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // Скрываем при изменении pathname
    if (pathname) {
      handleRouteChangeComplete();
    }
  }, [pathname]);

  return {
    isLoading,
    navigateWithLoading
  };
}
