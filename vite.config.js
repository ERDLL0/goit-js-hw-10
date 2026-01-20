import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/goit-js-hw-10/",
  root: "src",
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        timer: resolve(__dirname, "src/01-timer.html"),
        snackbar: resolve(__dirname, "src/02-snackbar.html"),
      },
    },
  },
});

