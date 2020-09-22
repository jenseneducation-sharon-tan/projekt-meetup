import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Home from "@/views/Home.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Home", () => {
  /*  it('should render page when go to "/" ', () => {
    //Arrange
    const wrapper = shallowMount(Home, { localVue });
    //Assert
    expect(wrapper.element).toMatchSnapshot();
  }); */
  test('should render page when go to "/" ', () => {
    //Arrange
    const wrapper = shallowMount(Home, { localVue });
    //Assert
    expect(wrapper.element).toMatchSnapshot();
  });
});
