import { createRouter, createWebHashHistory } from "vue-router";
import Cart from "../views/Cart";
import Home from "../views/Home";
import Mine from "../views/Mine";
import Order from "../views/Order";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/cart",
      component: Cart,
    },
    {
      path: "/mine",
      component: Mine,
    },
    {
      path: "/order",
      component: Order,
    },
  ],
});

export default router;
