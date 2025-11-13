import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [vue()],
  // Vitest configuration will be added in the next section
  test: {
    globals: true,
    environment: "jsdom",
  },
});
