import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/router";
import PrimeVue from "primevue/config";
import Lara from "@primevue/themes/lara";
import ToastService from "primevue/toastservice";
import "./styles/main.css";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(PrimeVue, {
  theme: {
    preset: Lara,

    options: {
      darkModeSelector: "system",
      cssLayer: {
        name: "primevue",
        order: "tailwind-base, primevue, tailwind-utilities",
      },
    },
  },
});
app.use(ToastService);
app.use(router);
app.mount("#app");
