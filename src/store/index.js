import { createStore } from "vuex";

export default createStore({
  state: {
    cartList: [],
  },
  mutations: {
    addcart(state, value) {
      state.cartList = value;
    },
  },
  actions: {},
});
