import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Review from "@/components/Review.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Review", () => {
  let wrapper;
  let eventId;

  let actions = {
    addNewReview: jest.fn(),
  };

  const store = new Vuex.Store({
    actions,
  });

  let data = () => ({
    id: "2020-09-29T19:24:05.919Z",
    review: "Someone coughed at me",
  });

  beforeEach(() => {
    wrapper = shallowMount(Review, {
      propsData: { eventId },
      data,
      store,
      localVue,
    });
  });

  it("should add 1 event on button click", async () => {
    const expected = 1;
    let button = wrapper.find(".addComment");
    await button.trigger("click");
    const actual = actions.addNewReview.mock.calls.length;
    expect(actual).toBe(expected);
  });

  it("should show error message if there is no input", async () => {
    const textInput = wrapper.find("#review");
    const errorMessage = "Please key in your comments";

    await textInput.setValue(errorMessage);

    const errorMessageContainer = wrapper.find(".errorMsg").text();

    expect(errorMessageContainer).toBe(errorMessage);
  });
});
