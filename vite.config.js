import { defineConfig } from "vite";

export default defineConfig({
  base: "/goit-js-hw-10/",
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
