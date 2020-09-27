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

  attendEvent({ commit, state }, event) {
    let attendEvent = state.attendList;
    let addEventOnce = attendEvent.findIndex((item) => item.name == event.name);

    /*    let getStorage = localStorage.getItem("attend-list");
    let parsedGet = JSON.parse(getStorage); */

    /* let confirmGoing = state.isGoing; */

    // if attendlist has nothing, push event in
    /// cannot add the same event

    if (addEventOnce === -1) {
      state.isGoing = true;
      attendEvent.push(event);
    }
    commit("setAttend", attendEvent);
    const parsed = JSON.stringify(attendEvent);
    localStorage.setItem("attend-list", parsed);
  },

  showCommentBox({ commit /* , state */ } /* , event */) {
    /* let historyList = state.historyList;
    let openTextBox = historyList.find((item) => item.name == event.name);
    console.log(openTextBox); */

    commit("showReview");
  },
};

export default actions;
