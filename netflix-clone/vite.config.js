import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/clone_project_2025/", // your repo name
  plugins: [react()],
});
