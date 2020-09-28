import { mount, RouterLinkStub, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import EventList from "@/components/EventList.vue";
import Button from "@/components/Button.vue";
import Review from "@/components/Review.vue";

import VueRouter from "vue-router";

const localVue = createLocalVue();
const router = new VueRouter();
localVue.use(Vuex, VueRouter);

describe("EventList", () => {
  it("should show 8 events when rendering", () => {
    let wrapper, events;
    events = [
      {
        id: 1,
        name: "Meditation and well-being",
        image: "meditate",
        date: "THU, SEPT 17,",
        time: " 17:30",
        attendees: 10,
      },
      {
        id: 2,
        name: "Halloween home deco ideas",
        image: "halloween",
        date: "TUE, OCT 20,",
        time: " 14:00",
        attendees: 15,
      },
      {
        id: 3,
        name: "Amigurumi learn to crochet",
        image: "amigurumi",
        date: "SUN, NOV 1,",
        time: " 09:30",
        attendees: 7,
      },
      {
        id: 4,
        name: "Serial programming session",
        image: "programming",
        date: "WED, SEPT 30,",
        time: " 12:00",
        attendees: 20,
      },
      {
        id: 5,
        name: "Fengshui your home for inner peace",
        image: "fengshui",
        date: "MON, NOV 30,",
        time: " 10:30",
        attendees: 18,
      },
      {
        id: 6,
        name: "Speak chinese - 学中文",
        image: "chinese",
        date: "THU, DEC 10,",
        time: " 11:30",
        attendees: 10,
      },
      {
        id: 7,
        name: "Zumba your way to fitness",
        image: "zumba",
        date: "SUN, SEPT 20,",
        time: " 09:30",
        attendees: 14,
      },
      {
        id: 8,
        name: "Spice and pan - Asian culinary",
        image: "cooking",
        date: "TUE, DEC 1,",
        time: " 10:00",
        attendees: 8,
      },
    ];

    wrapper = mount(EventList, {
      propsData: { events },
      localVue,
      router,
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    const expected = 8;
    const actual = wrapper.findAll(".event-container").length;
    expect(actual).toBe(expected);
  });
  it("it renders button component in child event component", () => {
    const store = new Vuex.Store({
      modules: {
        module: {
          getters: {
            reviewButton: () => jest.fn(),
            writeReview: () => jest.fn(),
            hide: () => jest.fn(),
          },
        },
      },
    });

    let wrapper, events;
    events = [
      {
        id: 1,
        name: "Meditation and well-being",
        image: "meditate",
        date: "THU, SEPT 17,",
        time: " 17:30",
        attendees: 10,
      },
    ];

    wrapper = mount(EventList, {
      store,
      propsData: { events, review: true },
      localVue,
      router,
      stubs: {
        RouterLink: RouterLinkStub,
        Review,
      },
    });

    const eventComponent = wrapper.find(".past");
    const reviewButton = eventComponent.findComponent(Button);

    expect(reviewButton.exists()).toBe(true);
  });
});
