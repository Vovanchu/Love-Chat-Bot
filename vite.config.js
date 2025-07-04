// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Love-Chat-Bot/", // 👈 Оце головне
  plugins: [react()],
});
