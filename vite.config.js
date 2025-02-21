import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  // Vitest configuration will be added in the next section
  test: {
    globals: true,
    environment: "jsdom",
  },
});
