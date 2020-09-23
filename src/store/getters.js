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
};

export default getters;
