import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["framer-motion.js"],
  },
  server: {
    port: 5678,
    host: "0.0.0.0",
  },
});
