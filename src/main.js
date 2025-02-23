// directives
import clickOutside from "@/directives/click-outside.js";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.directive("click-outside", clickOutside);

app.mount("#app");
