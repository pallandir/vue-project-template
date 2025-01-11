import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import PrimeVue from "primevue/config";
import Nora from "@primevue/themes/nora";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Nora,
  },
});
app.use(router);
app.mount("#app");
