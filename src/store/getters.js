const getters = {
  events: (state) => {
    return state.events;
  },
  getEventById: (state) => {
    return (id) => {
      return state.events.find((event) => event.id === id);
    };
  },
  eventHistory: (state) => {
    return state.eventHistory;
  },
  attendList: (state) => {
    return state.attendList;
  },
  attendButton: (state) => {
    return state.attendButton;
  },
  reviewButton: (state) => {
    return state.reviewButton;
  },
  isGoing: (state) => {
    return state.isGoing;
  },
  reviewList: (state) => {
    return state.reviewList;
  },
  writeReview: (state) => {
    return state.writeReview;
  },
};

export default getters;
