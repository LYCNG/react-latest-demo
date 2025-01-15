import { createContext, useEffect, useState } from "react";

type GridThemeContextType = {
  theme: string;
  gridMode: string;
  dark: boolean;
  toggleDark: () => void;
  toggleTheme: (theme: string) => void;
};

const defaultTheme = "ag-theme-quartz";

export const GridThemeContext = createContext<GridThemeContextType | undefined>(
  undefined
);

const GridThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [gridMode, setGridMode] = useState(defaultTheme);
  const [dark, setDark] = useState(false);

  const toggleTheme = (mode: string) => setGridMode(mode);
  const toggleDark = () => setDark((pre) => !pre);

  useEffect(() => {
    const newTheme = gridMode + (dark ? "-dark" : "");
    setTheme(newTheme);
  }, [dark, gridMode]);

  return (
    <GridThemeContext.Provider
      value={{ theme, gridMode, dark, toggleDark, toggleTheme }}
    >
      {children}
    </GridThemeContext.Provider>
  );
};

export default GridThemeProvider;
