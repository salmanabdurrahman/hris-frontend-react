import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./contexts/ThemeContext";
import AppRoutes from "./routes/AppRoutes";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </StrictMode>
);
