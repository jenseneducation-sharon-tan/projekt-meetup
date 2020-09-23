const mutations = {
  setEvents(state, events) {
    state.events = events;
  },
  setHistory(state, history) {
    state.pastEvents = history;
  },
};

export default mutations;
