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
  attend: (state) => {
    return state.attend;
  },
};

export default getters;
