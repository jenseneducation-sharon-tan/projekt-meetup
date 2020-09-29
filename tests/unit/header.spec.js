import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Vuex from "vuex";
import Header from "@/components/Header.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(Vuex, VueRouter);
const router = new VueRouter();

describe("Header", () => {
  it("Should render logo, 'Passionate about something? Let's meetup !' and Current Events and Past Event ", () => {
    let wrapper = mount(Header, {
      localVue,
      propsData: { mainpage: true },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const expectedLogo = wrapper.find(".logo");
    const expectedTagline = "Passionate about something? Let's meetup !";
    const expectedCurrentEvent = "Current Events";
    const expectedPastEvent = "Past Events";

    const tagline = wrapper.find(".tagline").text();
    const currentEvents = wrapper.find(".eventNow").text();
    const pastEvents = wrapper.find(".pastEvent").text();

    expect(expectedLogo).toBeTruthy();
    expect(tagline).toBe(expectedTagline);
    expect(expectedCurrentEvent).toBe(currentEvents);
    expect(expectedPastEvent).toBe(pastEvents);
  });

  it("Should have href to #event on Current Event when on home '/'", () => {
    let wrapper = mount(Header, {
      localVue,
      propsData: { mainpage: true },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const eventTag = wrapper.find(".eventNow");

    expect(eventTag.attributes().href).toBe("#event");
  });

  it("Should have href to #history on Past Event when on home '/'", () => {
    let wrapper = mount(Header, {
      localVue,
      propsData: { mainpage: true },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const eventTag = wrapper.find(".pastEvent");

    expect(eventTag.attributes().href).toBe("#history");
  });

  it("Should go back to '/' click on Current Event when not on home '/' ", () => {
    let wrapper = mount(Header, {
      localVue,
      router,
      propsData: { mainpage: false },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const expectedUrlEvent = "/";
    const eventLink = wrapper.findComponent(RouterLinkStub);

    expect(eventLink.props("to")).toBe(expectedUrlEvent);
  });

  it("Should go back to '/' click on Past Event when not on home '/' ", () => {
    let wrapper = mount(Header, {
      localVue,
      router,
      propsData: { mainpage: false },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const expectedUrlEvent = "/";
    const eventLink = wrapper.findComponent(RouterLinkStub);

    expect(eventLink.props("to")).toBe(expectedUrlEvent);
  });
});
