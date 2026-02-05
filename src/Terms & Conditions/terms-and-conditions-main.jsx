import React from "react";
import { createRoot } from "react-dom/client";
import TermsAndConditions from "./TermsAndConditions.jsx";
import "../styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TermsAndConditions />
  </React.StrictMode>
);
