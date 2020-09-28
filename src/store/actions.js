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

  fetchReviewList({ commit }) {
    let reviewList;
    const LS_KEY = "review-list";
    let fromLs = localStorage.getItem(LS_KEY);
    if (fromLs) {
      reviewList = JSON.parse(fromLs);
      commit("setDisplayReview", reviewList);
    }
  },

  attendEvent({ commit, state }, id) {
    let attendEvent = state.attendList;
    let addEvent = attendEvent.find((item) => item == id);

    if (!addEvent) {
      attendEvent.push(id);
      const parsed = JSON.stringify(attendEvent);
      localStorage.setItem("attend-list", parsed);
      commit("setAttend", attendEvent);
    }
  },

  getAttendList({ commit }) {
    let attendList;
    const LS_KEY = "attend-list";
    let fromLs = localStorage.getItem(LS_KEY);

    if (fromLs) {
      attendList = JSON.parse(fromLs);
      commit("setGetAttendList", attendList);
    }
  },

  showCommentBox({ commit, state }, id) {
    let pastEventList = state.eventHistory;
    let clickedEvent = pastEventList.find((item) => item.id == id);

    if (clickedEvent.id) {
      commit("showReview", id);
    }
  },

  addNewReview({ commit }, review) {
    commit("setNewReview", review);
  },
};

export default actions;
