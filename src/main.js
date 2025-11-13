// directives
<<<<<<< HEAD
import clickOutside from "./directives/click-outside.js";
=======
import clickOutside from "./composables/click-outside.js";
>>>>>>> origin/main

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.directive("click-outside", clickOutside);

app.mount("#app");
