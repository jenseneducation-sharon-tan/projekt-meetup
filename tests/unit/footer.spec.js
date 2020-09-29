import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Footer from "@/components/Footer.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Footer", () => {
  it("Should render email, telephone number and allrights reserved clause", () => {
    let wrapper = shallowMount(Footer);
    const expectedEmail = "mailus@meetup.com";
    const expectedTel = "072-99 9999";
    const expectedClause = "All rights reserved @ meetup.se";

    const email = wrapper.find(".email").text();
    const tel = wrapper.find(".tel").text();
    const clause = wrapper.find(".clause").text();

    expect(email).toBe(expectedEmail);
    expect(tel).toBe(expectedTel);
    expect(clause).toBe(expectedClause);
  });

  it("Should have href to 'mailus@meetup.com' on email '/'", () => {
    let wrapper = shallowMount(Footer);

    const email = wrapper.find(".email");

    expect(email.attributes().href).toBe("mailto:mailus@meetup.com");
  });
});
