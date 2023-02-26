import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
console.log("Hi from vite.config.ts file 🙂");
console.log("Env varaible: ", process.env.VITE_ENV_VAR);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
