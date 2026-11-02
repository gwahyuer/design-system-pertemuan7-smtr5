import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";
import { AppThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "STIKOM UI — Mini Design System",
  description: "Mini design system STIKOM dengan tema terang dan gelap."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <StyledComponentsRegistry>
          <AppThemeProvider>{children}</AppThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}