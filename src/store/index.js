import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
    eventHistory: [],
    user: { name: "", email: "" },
  },
  actions,
  mutations,
  getters,
});
