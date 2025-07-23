import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/CSS/index.css";
import { LoadingProvider } from "./components/context/LoadingContext.jsx";
import Cursor from "./components/Common/Cursor";
import Scroller from "./components/Common/Scroller";
import SmoothScroll from "./components/Common/SmoothScroll.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <LoadingProvider>
            <SmoothScroll>
                <App />
                <Cursor />
                <Scroller />
            </SmoothScroll>
        </LoadingProvider>
    </StrictMode>
);
