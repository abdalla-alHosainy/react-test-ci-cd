import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
console.log("Hi from vite.config.ts file 🙂");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
