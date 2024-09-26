import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components/",
      styles: "/src/styles/",
      layout: "/src/layout/",
      pages: "/src/pages/",
      assets: "/src/assets/",
      services: "/src/services/",
      redux: "/src/redux/",
      routes: "/src/routes/",
      types: "/src/types/",
      "styles/vars": "/src/styles/vars/",
    },
  },
  // css: {
  //   modules: {
  //     localsConvention: 'camelCaseOnly', // или 'dashes' для использования dash-case
  //   },
  // },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
