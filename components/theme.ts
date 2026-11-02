import type { DefaultTheme } from "styled-components";

export type ThemeMode = "light" | "dark";

export const themes: Record<ThemeMode, DefaultTheme> = {
  light: {
    mode: "light",
    colors: {
      page: "#f8fafc", surface: "#ffffff", text: "#0f172a", muted: "#64748b",
      primary: "#2563eb", primaryHover: "#1d4ed8", border: "#e2e8f0",
      secondary: "#eaf1ff", success: "#16a34a", warning: "#d97706", danger: "#dc2626"
    },
    radius: { sm: "8px", md: "14px", lg: "20px", pill: "999px" },
    spacing: { xs: "4px", sm: "8px", md: "16px", lg: "24px", xl: "32px" }
  },
  dark: {
    mode: "dark",
    colors: {
      page: "#0b1220", surface: "#111c2e", text: "#e5edf8", muted: "#9aabc2",
      primary: "#60a5fa", primaryHover: "#93c5fd", border: "#26364d",
      secondary: "#20334f", success: "#4ade80", warning: "#fbbf24", danger: "#f87171"
    },
    radius: { sm: "8px", md: "14px", lg: "20px", pill: "999px" },
    spacing: { xs: "4px", sm: "8px", md: "16px", lg: "24px", xl: "32px" }
  }
};