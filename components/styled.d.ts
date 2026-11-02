import "styled-components";
import type { ThemeMode } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: ThemeMode;
    colors: {
      page: string; surface: string; text: string; muted: string;
      primary: string; primaryHover: string; border: string; secondary: string;
      success: string; warning: string; danger: string;
    };
    radius: { sm: string; md: string; lg: string; pill: string };
    spacing: { xs: string; sm: string; md: string; lg: string; xl: string };
  }
}