import { useContext } from "react";
import { GridThemeContext } from "../contexts/gridThemeContext";

export const useGridTheme = () => {
  const context = useContext(GridThemeContext);
  if (!context) {
    throw new Error("grid theme must be used within a UProvider");
  }
  return context;
};
