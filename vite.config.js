// ============================================================================
// Vite Configuration - Build tool and development server setup
// ============================================================================
// Vite is a modern build tool that provides:
// - Fast development server with Hot Module Replacement (HMR)
// - Optimized production builds
// - Plugin system for framework support
// ============================================================================

import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// Export Vite configuration
export default defineConfig({
  // Plugins array - Adds React support to Vite
  plugins: [react()],
  // Development server configuration
  server: {
    port: 5173,      // Local development server runs on this port
    open: false      // Don't automatically open browser when server starts
  },
  // Build configuration for multi-page application
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        privacy: resolve(__dirname, "privacy-policy.html"),
        terms: resolve(__dirname, "terms-and-conditions.html"),
        iconCredits: resolve(__dirname, "icon-credits.html"),
      },
    },
  },
});
