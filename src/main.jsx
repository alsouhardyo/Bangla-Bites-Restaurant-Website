import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/CSS/index.css";
import App from "./App.jsx";
import { LoadingProvider } from "./components/context/LoadingContext.jsx";
import Cursor from "./components/Common/Cursor";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <LoadingProvider>
            <Cursor /> {/* Render Cursor here */}
            <App />
        </LoadingProvider>
    </StrictMode>
);
