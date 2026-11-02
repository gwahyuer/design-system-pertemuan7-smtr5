"use client";
import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { themes, type ThemeMode } from "./theme";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin:0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
  button { font: inherit; }
  ::selection { background: #bfdbfe; color: #1e3a8a; }
`;
const ThemeContext = createContext<{mode:ThemeMode;toggleTheme:()=>void}>({mode:"light",toggleTheme:()=>{}});
export function useAppTheme(){ return useContext(ThemeContext); }

export function AppThemeProvider({children}:{children:React.ReactNode}){
  const [mode,setMode] = useState<ThemeMode>("light");
  const value = useMemo(()=>({mode,toggleTheme:()=>setMode(v=>v==="light"?"dark":"light")}),[mode]);
  return <ThemeContext.Provider value={value}><ThemeProvider theme={themes[mode]}><GlobalStyle />{children}</ThemeProvider></ThemeContext.Provider>;
}