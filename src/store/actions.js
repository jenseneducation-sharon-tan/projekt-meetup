import { getEvents } from "../data/eventslist";
import { getPastEvents } from "../data/historylist";

const actions = {
  async fetchEventList({ commit }) {
    const data = await getEvents();
    commit("setEvents", data.events);
  },

  async fetchPastEvents({ commit }) {
    const data = await getPastEvents();
    commit("setHistory", data.history);
  },

  async attendEvent({ commit, state, dispatch }, id) {
    let attendEvent = state.attendList;
    let addEvent = attendEvent.find((item) => item == id);

    if (!addEvent) {
      attendEvent.push(id);
      const parsed = JSON.stringify(attendEvent);
      localStorage.setItem("attend-list", parsed);
      await commit("setAttend", attendEvent);
      dispatch("getAttendList");
    }
  },

  getAttendList({ commit }) {
    let attendList;
    const LS_KEY = "attend-list";
    let fromLs = localStorage.getItem(LS_KEY);
    console.log("fromLS: ", fromLs);
    if (fromLs) {
      attendList = JSON.parse(fromLs);
      commit("setGetAttendList", attendList);
    }
  },

  showCommentBox({ commit, state } /* , event */) {
    state.noDisplay = true;
    commit("showReview");
  },

  setAddComment({ commit }, comment) {
    commit("setThisComment", comment);
  },
};

export default actions;
