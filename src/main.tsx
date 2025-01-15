import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthUserProvider from "./contexts/authContext.tsx";
import GridThemeProvider from "./contexts/gridThemeContext.tsx";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer />
    <BrowserRouter basename="/">
      <QueryClientProvider client={queryClient}>
        <AuthUserProvider>
          <GridThemeProvider>
            <App />
          </GridThemeProvider>
        </AuthUserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
