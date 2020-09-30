import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Vuex from "vuex";
import EventInfo from "@/views/EventInfo.vue";
import Button from "@/components/Button.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("EventInfo", () => {
  let wrapper;

  let attendList = [{ id: 1 }, { id: 2 }, { id: 8 }];

  let events = [
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
    {
      id: 4,
      name: "Serial programming session",
      image: "programming",
      date: "WED, SEPT 30,",
      time: " 12:00",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
      attendees: 20,
    },
    {
      id: 5,
      name: "Fengshui your home ",
      image: "fengshui",
      date: "MON, NOV 30,",
      time: " 10:30",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
      attendees: 18,
    },
    {
      id: 6,
      name: "Speak chinese - 学中文",
      image: "chinese",
      date: "THU, DEC 10,",
      time: " 11:30",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
      attendees: 10,
    },
    {
      id: 7,
      name: "Zumba your way to fitness",
      image: "zumba",
      date: "SUN, SEPT 20,",
      time: " 09:30",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
      attendees: 14,
    },
    {
      id: 8,
      name: "Spice and pan - Asian culinary",
      image: "cooking",
      date: "TUE, DEC 1,",
      time: " 10:00",
      location: "Stockholm",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
      attendees: 8,
    },
  ];

  let mockEvent = {
    id: 8,
    name: "Spice and pan - Asian culinary",
    image: "cooking",
    date: "TUE, DEC 1,",
    time: " 10:00",
    location: "Stockholm",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tempora mollitia hic sequi quaerat optio neque! Quibusdam totam ut fuga perferendis illum odio necessitatibus! Repudiandae ipsam omnis magni laudantium eaque",
    attendees: 8,
  };

  const Parent = {
    data() {
      return { going: false };
    },
  };

  const store = new Vuex.Store({
    state: { attendList, events },
    modules: {
      module: {
        getters: {
          getEventById: () => jest.fn().mockReturnValue(mockEvent),
          attendList: () => jest.fn().mockReturnValue(attendList),
          attendButton: () => jest.fn().mockReturnThis("Attend"),
          willAttendButton: () => jest.fn().mockReturnValue(false),
          isGoing: () => jest.fn().mockReturnValue(false),
        },
        actions: {
          attendEvent: () => jest.fn(),
          getAttendList: () => jest.fn(),
        },
      },
    },
  });

  beforeEach(() => {
    wrapper = mount(EventInfo, {
      localVue,
      Parent,
      store,
      propsData: { event: mockEvent },
      mocks: {
        $route: {
          path: "/eventinfo/8",
          params: { id: "8" },
        },
      },
      stubs: {
        Header,
        RouterLink: RouterLinkStub,
        Footer,
      },
    });
  });

  it("should be able to display details of the event ", async () => {
    const expected = mockEvent.details;
    const actual = wrapper.find(".details").text();

    expect(actual).toBe(expected);
  });

  it("should call on the function when click on Button 'Attend' ", async () => {
    const button = wrapper.findComponent(Button);

    wrapper.vm.attendEvent = jest.fn();
    await button.trigger("click");

    expect(wrapper.vm.attendEvent).toHaveBeenCalled();
  });
});
