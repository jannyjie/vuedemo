import { createStore } from "vuex";
import state from "./state.js";
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";

import Auth from "./Auth";

export default createStore({
  state,
  //如果要觸發要在actions做觸發
  actions,
  //如果要改變 state  的值要在mutations做修改
  mutations,
  // getters 可以重組一次資料再把資料丟到VUE COMPONENT
  getters,
  //可依照切割區塊來分資料
  modules: {
    Auth,
  },
});
