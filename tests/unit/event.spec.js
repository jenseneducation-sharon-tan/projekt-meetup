import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Event from "@/components/Event.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Event", () => {
  let event = {
    id: 1,
    name: "Meditation and well-being",
    image: "meditate",
    date: "THU, SEPT 17,",
    time: " 17:30",
    attendees: "10",
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Event, {
      propsData: { event },
    });
  });

  it("should display event name, date, time and attendees", () => {
    const expectedName = "Meditation and well-being";
    const expectedDate = "THU, SEPT 17,";
    const expectedTime = "17:30";
    const expectedAttendees = "Participants: 10";
    const eventName = wrapper.find(".event-name").text();
    const eventDate = wrapper.find(".date").text();
    const eventTime = wrapper.find(".time").text();
    const eventAttendees = wrapper.find(".number-attendees").text();

    expect(eventName).toBe(expectedName);
    expect(eventDate).toBe(expectedDate);
    expect(eventTime).toBe(expectedTime);
    expect(eventAttendees).toBe(expectedAttendees);
  });
});
