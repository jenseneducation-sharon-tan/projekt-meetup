import { getEvents } from "../data/eventslist";

const actions = {
  async fetchEventList({ commit }) {
    const data = await getEvents();
    commit("setEvents", data.events);
  },
};

export default actions;

/* product() {
	let id = this.$route.params.id;
	return this.$root.$data.products.find(product => product.id == id);
  },


  ({rootState}) => new Promise((resolve, reject) => {
    let params = rootState.route.params
    // do stuff
} */
