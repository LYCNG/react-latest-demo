import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};
