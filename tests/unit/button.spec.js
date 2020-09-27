import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Button from "@/components/Button.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Button", () => {
  let title = "Attend";
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Button, {
      propsData: { title },
    });
  });

  it("should display 'Attend' on button component", () => {
    const buttonText = wrapper.text();

    expect(buttonText).toBe("Attend");
  });
});
