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
    attendList: [],
    reviewList: [],
    writeReview: false,
    isGoing: false,
    hide: false,
    attendButton: "Attend",
    willAttendButton: "Going",
    reviewButton: "Leave a review",
  },
  actions,
  mutations,
  getters,
});
