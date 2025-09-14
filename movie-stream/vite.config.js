import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/movieStream/", // your repo name
  plugins: [react()],
});
