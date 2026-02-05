// ============================================================================
// Entry Point - React Application Bootstrap
// ============================================================================
// This file initializes the React application by:
// 1. Importing React and the DOM renderer
// 2. Loading the main App component
// 3. Importing global styles
// 4. Rendering the app into the DOM
// ============================================================================

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

// Find the root DOM element and render the React app inside
createRoot(document.getElementById("root")).render(
  // StrictMode helps identify potential issues during development
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
