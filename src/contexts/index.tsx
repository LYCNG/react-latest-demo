import React from "react";
import AuthUserProvider from "./authContext";
import GridThemeProvider from "./gridThemeContext";
import ThemeProvider from "./themeContext";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthUserProvider>
      <GridThemeProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </GridThemeProvider>
    </AuthUserProvider>
  );
};

export default AppProvider;
