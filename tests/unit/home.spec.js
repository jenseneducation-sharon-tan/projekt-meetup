import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Vuex from "vuex";
import Home from "@/views/Home.vue";
import Header from "@/components/Header.vue";
import EventList from "@/components/EventList.vue";
import Event from "@/components/Event.vue";
import Footer from "@/components/Footer.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Home", () => {
  let wrapper;

  const $route = {
    path: "/",
  };

  let reviewList = [
    { id: "2020-09-29T09:07:31.042Z", review: "Sucks big time", eventId: 10 },
    { id: "2020-09-29T09:07:31.042Z", review: "Worth the time", eventId: 9 },
  ];
  let attendList = [{ id: 1 }, { id: 2 }];

  const store = new Vuex.Store({
    state: { reviewList, attendList },
    modules: {
      module: {
        getters: {
          events: () => jest.fn(),
          eventHistory: () => jest.fn(),
        },
        actions: {
          fetchEventList: () => jest.fn(),
          fetchPastEvents: () => jest.fn(),
          getAttendList: () => jest.fn(),
          fetchReviewList: () => jest.fn(),
        },
      },
    },
  });

  beforeEach(() => {
    wrapper = mount(Home, {
      localVue,
      mocks: {
        $route,
      },
      store,
      stubs: {
        Header,
        RouterLink: RouterLinkStub,
        Footer,
      },
    });
  });

  it('should render page when go to "/" ', () => {
    //Arrange
    const wrapper = mount(Home, {
      localVue,
      mocks: {
        $route,
      },
      store,
      stubs: {
        Header,
        RouterLink: RouterLinkStub,
        Footer,
      },
    });

    //Assert
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should show that Event.vue component exist ", async () => {
    // find eventlist component
    const eventListComponent = wrapper.findComponent(EventList);

    /// setprops
    await eventListComponent.setProps({
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
      ],
    });

    await wrapper.vm.$nextTick();

    // find event component
    const eventComponent = eventListComponent.findComponent(Event);

    //Assert
    expect(eventComponent.exists()).toBe(true);
  });
});
