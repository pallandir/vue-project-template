import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import PrimeVue from "primevue/config";
import Lara from "@primevue/themes/lara";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(PrimeVue, {
  theme: {
    preset: Lara,
  },
});
app.use(router);
app.mount("#app");
