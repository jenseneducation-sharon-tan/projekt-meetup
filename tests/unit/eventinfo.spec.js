import { shallowMount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Vuex from "vuex";
import EventInfo from "@/views/EventInfo.vue";
import Button from "@/components/Button.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("EventInfo", () => {
  let wrapper;

  let attendList = [{ id: 1 }, { id: 2 }];

  let data = {
    events: [
      {
        id: 1,
        name: "Meditation and well-being",
        image: "",
        date: "THU, SEPT 17,",
        time: " 17:30",
        attendees: 10,
      },
      {
        id: 2,
        name: "Halloween home deco ideas",
        image: "",
        date: "TUE, OCT 20,",
        time: " 14:00",
        attendees: 15,
      },
      {
        id: 3,
        name: "Amigurumi learn to crochet",
        image: "",
        date: "SUN, NOV 1,",
        time: " 09:30",
        attendees: 7,
      },
      {
        id: 4,
        name: "Serial programming session",
        image: "",
        date: "WED, SEPT 30,",
        time: " 12:00",
        attendees: 20,
      },
      {
        id: 5,
        name: "Fengshui your home for inner peace",
        image: "",
        date: "MON, NOV 30,",
        time: " 10:30",
        attendees: 18,
      },
      {
        id: 6,
        name: "Speak chinese - 学中文",
        image: "",
        date: "THU, DEC 10,",
        time: " 11:30",
        attendees: 10,
      },
      {
        id: 7,
        name: "Zumba your way to fitness",
        image: "",
        date: "SUN, SEPT 20,",
        time: " 09:30",
        attendees: 14,
      },
      {
        id: 8,
        name: "Spice and pan - Asian culinary",
        image: "",
        date: "TUE, DEC 1,",
        time: " 10:00",
        attendees: 8,
      },
    ],
  };
  let mockEvent = {
    id: 8,
    name: "Spice and pan - Asian culinary",
    image: "",
    date: "TUE, DEC 1,",
    time: " 10:00",
    attendees: 8,
  };

  const Parent = {
    data() {
      return { data, going: false };
    },
  };

  const store = new Vuex.Store({
    state: { attendList },
    modules: {
      module: {
        getters: {
          getEventById: () => jest.fn(),
          attendList: () => jest.fn(),
          attendButton: () => jest.fn(),
          willAttendButton: () => jest.fn(),
          isGoing: () => jest.fn(),
          showAttend: () => jest.fn(),
        },
        actions: {
          attendEvent: () => jest.fn(),
          getAttendList: () => jest.fn(),
        },
      },
    },
  });

  beforeEach(() => {
    wrapper = shallowMount(EventInfo, {
      localVue,
      Parent,
      store,
      mocks: {
        $route: {
          path: "/eventinfo/8",
          params: { id: 8 },
        },
      },
      stubs: {
        Header,
        RouterLink: RouterLinkStub,
        Footer,
      },
    });
  });

  it("should display event name ", async () => {
    const expected = mockEvent.name;
    console.log("expected: ", expected);
    const actual = wrapper.find(".name").text();
    console.log("actual: ", actual);

    expect(actual).toBe(expected);
  });

  /* it("should display button 'Attend' ", async () => {
    const button = wrapper.findComponent(Button);
    await button.trigger("click");  /// click native
    expect(button.exists()).toBe(true);
  }); */

  /* it("should display button 'Going' if click on 'Attend' ", async () => {
    const button = wrapper.find(".attend");
	await button.trigger("click");  /// click native
	const goingBtn = wrapper.find(".isGoing")
    expect(goingBtn.exists()).toBe(true);
  }); */
});
