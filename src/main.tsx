import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ViewingProjectContextProvider } from "./contexts/ViewingProjectContext.tsx";
import { CurrentThemeContextProvider } from "./contexts/CurrentThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CurrentThemeContextProvider>
      <ViewingProjectContextProvider>
        <App />
      </ViewingProjectContextProvider>
    </CurrentThemeContextProvider>
  </React.StrictMode>
);
