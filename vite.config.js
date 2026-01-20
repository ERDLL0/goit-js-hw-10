import { defineConfig } from "vite";

export default defineConfig({
  base: "/goit-js-hw-10/",
  root: "src",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
  },
});
