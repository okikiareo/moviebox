import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import "./css/main.css";
import App from "./App";

const container = document.getElementById("root");
createRoot(container).render(
    <StrictMode>
        <App />
    </StrictMode>
);