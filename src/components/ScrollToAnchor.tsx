"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToAnchor() {
  const pathname = usePathname();

  useEffect(() => {
    // Обработка якоря при загрузке
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        // Декодируем hash (кириллица в URL)
        const id = decodeURIComponent(hash.slice(1));
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }

    // Обработка кликов по якорным ссылкам
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (anchor) {
        e.preventDefault();
        const hash = anchor.getAttribute("href");
        if (hash) {
          const id = decodeURIComponent(hash.slice(1));
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            // Обновляем URL
            window.history.pushState({}, "", hash);
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, [pathname]);

  return null;
}
