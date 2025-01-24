import { Theme } from "ag-grid-community";
import { createContext, useMemo, useState } from "react";
import { gridThemes, gridThemesDark } from "../constant/gridTheme";

type GridThemeContextType = {
  theme: { id: string; theme: Theme };
  changeTheme: (themeId: string) => void;
  dark: boolean;
  setDark: (param: boolean) => void;
};

export const GridThemeContext = createContext<GridThemeContextType | undefined>(
  undefined
);

const GridThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeId, setThemeId] = useState("themeQuartz");

  const [dark, setDark] = useState(false);

  const changeTheme = (themeId: string) => {
    setThemeId(themeId);
  };

  const theme = useMemo(() => {
    return (
      (dark ? gridThemesDark : gridThemes).find((t) => t?.id === themeId) ||
      gridThemes[0]
    );
  }, [themeId, dark]);

  return (
    <GridThemeContext.Provider value={{ theme, changeTheme, dark, setDark }}>
      {children}
    </GridThemeContext.Provider>
  );
};

export default GridThemeProvider;
