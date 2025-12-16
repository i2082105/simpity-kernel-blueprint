import { useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  useEffect(() => {
    if (!theme) return;
    
    const root = document.documentElement;
    // Remove all theme classes
    root.classList.remove("light", "light-dark", "dark", "mixed");
    // Add current theme class
    root.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
}

