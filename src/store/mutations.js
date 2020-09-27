const mutations = {
  setEvents(state, events) {
    state.events = events;
  },
  setHistory(state, history) {
    state.eventHistory = history;
  },

  setAttend(state, attend) {
    state.attendList = attend;
  },

  setIsGoing(state) {
    state.isGoing = !state.isGoing;
  },
  showReview(state) {
    state.writeReview = !state.writeReview;
  },
  /* setReview(state, event) {
    state.reviewList = event;
  }, */
};

export default mutations;
