/* import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Vuex from "vuex";
import EventInfo from "@/views/EventInfo.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("EventInfo", () => {
  const store = new Vuex.Store({
    state: {
      id: 1,
      name: "Meditation and well-being",
      image: "meditate",
      date: "THU, SEPT 17,",
      time: " 17:30",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
      attendees: 10,
	},
	
	getters : {
		getEventById: (state) => {
			return (id) => {
			  return state.events.find((event) => event.id === id);
			};
		
	};

	const $route = {
		$route: {
		  path: "/eventinfo/1",
		  params: { id: "1" },
		},
	  };


  let event;
  let wrapper;

  let data = {
    events: [
      {
        id: 1,
        name: "Meditation and well-being",
        image: "meditate",
        date: "THU, SEPT 17,",
        time: " 17:30",
        location: "Stockholm",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
        attendees: 10,
      },
      {
        id: 2,
        name: "Halloween home deco ideas",
        image: "halloween",
        date: "TUE, OCT 20,",
        time: " 14:00",
        location: "Stockholm",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
        attendees: 15,
      },
      {
        id: 3,
        name: "Amigurumi learn to crochet",
        image: "amigurumi",
        date: "SUN, NOV 1,",
        time: " 09:30",
        location: "Stockholm",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
        attendees: 7,
      },
    ],
  };

  const store = new Vuex.Store({
    modules: {
      module: {
        getters: {
          getEventById: () => jest.fn(),
          attend: () => jest.fn(),
        },
        actions: {
          attendEvents: () => jest.fn(),
        },
      },
    },
  });

  const $route = {
    $route: {
      path: "/eventinfo/1",
      params: { id: "1" },
    },
  };

  event = {
    id: 1,
    name: "Meditation and well-being",
    image: "meditate",
    date: "THU, SEPT 17,",
    time: " 17:30",
    location: "Stockholm",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
    attendees: 10,
  };

  const Parent = {
    data() {
      return data;
    },
  };
  wrapper = mount(EventInfo, {
    parentComponent: Parent,
    mocks: {
      $route,
    },
    propsData: { event },
    store,
    stubs: {
      RouterLink: RouterLinkStub,
      AddDeleteButton: true,
      Header: true,
      Button: true,
    },
  });

  console.log("EventInfo: ", wrapper);
  it("should display event info", () => {
    //expect(wrapper.vm.$route.params.id).toBe("1");
    console.log(wrapper);
    //console.log(wrapper.props());
    const expected = wrapper.find(".name").text();
    //const link = wrapper.findComponent(RouterLinkStub);
    //expect(link.props("to")).toBe(expected);
    expect(expected).toBe(event.name);
  }); 
});
 */
