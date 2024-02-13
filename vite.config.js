import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: " ", replacement: "/src" },
      { find: "components", replacement: "/src/components" },
      { find: "data", replacement: "/src/data/" },
      { find: "pages", replacement: "/src/pages" },
      { find: "utils", replacement: "/src/utils" },
      { find: "context", replacement: "/src/context" },
      { find: "styles", replacement: "/src/styles" },
      { find: "shared", replacement: "/src/shared" },
      { find: "assets", replacement: "/src/assets" },
      { find: "context", replacement: "/src/context" }
    ]
  }
});
