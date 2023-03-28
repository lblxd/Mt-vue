import { createApp } from "vue";
import App from "./App.vue";
import "amfe-flexible";
import "./assets/reset.css";
import router from "./router";

import { Button } from "vant";
import "vant/lib/index.css";

const app = createApp(App);
app.use(Button);
app.use(router);
app.mount("#app");
