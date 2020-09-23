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
  const store = new Vuex.Store({
    modules: {
      module: {
        getters: { events: () => jest.fn() },
        actions: { fetchEventList: () => jest.fn() },
      },
    },
  });

  const $route = {
    path: "/",
  };

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
