import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Vuex from "vuex";
import Event from "@/components/Event.vue";
import Button from "@/components/Button.vue";
import Review from "@/components/Review.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Event", () => {
  let event = {
    id: 10,
    name: "Meditation and well-being",
    image: "meditate",
    date: "THU, SEPT 17,",
    time: " 17:30",
    attendees: "10",
  };

  let reviewList = [
    {
      id: "2020-09-29T19:24:05.919Z",
      review: "sdfsfsfdsfsdfsfsfsf",
      eventId: 9,
    },
    {
      id: "2020-09-29T19:24:05.910Z",
      review: "sdfsfsfdsfsdfsfsfsf",
      eventId: 9,
    },
  ];

  let attendList = [{ id: 1 }, { id: 2 }];

  let wrapper;
  const store = new Vuex.Store({
    state: { reviewList, attendList },
    modules: {
      module: {
        getters: {
          reviewButton: () => "Leave a review",
          writeReview: () => jest.fn(),
          hide: () => jest.fn(),
          willAttendButton: () => jest.fn(),
          isGoing: () => jest.fn(),
          reviewList: () => jest.fn(),
        },
        actions: {
          showCommentBox: () => jest.fn(),
          attendEvent: () => jest.fn(),
          getAttendList: () => jest.fn(),
          fetchReviewList: () => jest.fn(),
        },
      },
    },
  });

  beforeEach(() => {
    wrapper = mount(Event, {
      computed: {
        showReviews() {
          return true;
        },
      },
      store,
      propsData: { event, review: true },
      localVue,
      stubs: {
        RouterLink: RouterLinkStub,
        Review,
        Button,
      },
    });
  });

  it("should display event name, date and time", () => {
    const expectedName = "Meditation and well-being";
    const expectedDate = "THU, SEPT 17,";
    const expectedTime = "17:30";

    const eventName = wrapper.find(".name").text();
    const eventDate = wrapper.find(".date").text();
    const eventTime = wrapper.find(".time").text();

    expect(eventName).toBe(expectedName);
    expect(eventDate).toBe(expectedDate);
    expect(eventTime).toBe(expectedTime);
  });

  it("should display button 'Leave a review' for Past Event list", () => {
    const button = wrapper.findComponent(Button);
    const buttonText = button.text();

    expect(button.exists()).toBe(true);
    expect(buttonText).toBe("Leave a review");
  });

  it("should call the function when click on Button component ", async () => {
    const button = wrapper.findComponent(Button);

    wrapper.vm.showCommentBox = jest.fn();
    await button.trigger("click");

    expect(wrapper.vm.showCommentBox).toHaveBeenCalled();
  });

  it("should display button 'Leave a review' for Past Event list", () => {
    const button = wrapper.findComponent(Button);

    expect(button.exists()).toBe(true);
  });
});
