import { createApp } from "vue";
import App from "./App.vue";
import "amfe-flexible";
import "./assets/reset.css";
import router from "./router";
import store from "./store";

import {
  Button,
  Icon,
  Tab,
  Tabs,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
} from "vant";
import "vant/lib/index.css";
import "vant/es/toast/style";
const app = createApp(App);
app.use(Icon);
app.use(Button);
app.use(Tab);
app.use(Tabs);
app.use(router);
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
app.use(store);
app.mount("#app");
