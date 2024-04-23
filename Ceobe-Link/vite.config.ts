import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig(async (mode) => ({
  plugins: [
    react(),
    // viteSingleFile()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
    },
  },
  base: mode.mode === "production" ? "./" : "/",
  server: {
    port: 1420,
    strictPort: true,
  },
}));
