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

  attendEvent({ state, commit }, event) {
    let attendEvent = state.attend;
    attendEvent.push(event);
    commit("setAttend", attendEvent);
    const parsed = JSON.stringify(attendEvent);
    localStorage.setItem("attend-list", parsed);
  },
};

export default actions;
