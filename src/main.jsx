import { StrictMode} from "react";
import { createRoot } from "react-dom/client";
import React, { useState, useEffect } from 'react';
import "./css/style.css";
import "./css/api.css"
import App from "./App";
import Preloader from "./components/preloader";

const Main = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const load = async () => {
        setTimeout(() => {
          setLoading(false);
        }, 4000); 
      };
  
      load();
    }, []);
    return (
        <>
          {loading ? <Preloader /> : <App />}
        </>
      );
    };  
export default Main;

const container = document.getElementById("root");
createRoot(container).render(
    <StrictMode>
        <Main />
    </StrictMode>
);