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

  sethide(state) {
    state.hide = !state.hide;
  },

  setThisComment(state, comment) {
    state.comment = comment;
    console.log(state.comment);
  },

  setGetAttendList(state, list) {
    state.attendList = list;
  },
  /*  setShowAttend(state) {
    state.showAttend = !state.showAttend;
  }, */
  /* setReview(state, event) {
    state.reviewList = event;
  }, */
};

export default mutations;
