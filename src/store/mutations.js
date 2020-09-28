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

  showReview(state, id) {
    state.writeReview = id;
  },

  sethide(state) {
    state.hide = !state.hide;
  },

  setNewReview(state, review) {
    let reviewList = state.reviewList;
    reviewList.push(review);
    const parsed = JSON.stringify(reviewList);
    localStorage.setItem("review-list", parsed);
  },

  setGetAttendList(state, list) {
    state.attendList = list;
  },

  setDisplayReview(state, reviewList) {
    state.reviewList = reviewList;
  },
};

export default mutations;
