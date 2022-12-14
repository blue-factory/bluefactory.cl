import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/bluefactory.cl/",
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      lib: resolve(__dirname, "src/lib"),
      routes: resolve(__dirname, "src/routes"),
    },
  },
});
