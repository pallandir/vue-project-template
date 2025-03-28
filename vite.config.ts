import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";
import { fileURLToPath, URL } from "url";
import Icons from "unplugin-icons/vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
    Icons({
      compiler: "vue3",
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
