"use client";

import React from "react"; // این خط رو برای دسترسی به تایپ‌ها اضافه کن
import { ThemeProvider } from "@/context/ThemeContext";

// جلوی children باید مشخص کنی که تایپش چیه
export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}