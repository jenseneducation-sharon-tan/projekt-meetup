const mutations = {
  setEvents(state, events) {
    state.events = events;
  },
  setHistory(state, history) {
    state.eventHistory = history;
  },

  setAttend(state, attend) {
    state.attend = attend;
  },
};

export default mutations;
