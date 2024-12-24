import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/CSS/index.css";
import { LoadingProvider } from "./components/context/LoadingContext.jsx";
import Cursor from "./components/Common/Cursor";
import Scroller from "./components/Common/Scroller";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <LoadingProvider>
            <Cursor />
            <Scroller />
            <App />
        </LoadingProvider>
    </StrictMode>
);
