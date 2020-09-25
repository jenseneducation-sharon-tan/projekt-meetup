import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EventInfo from "../views/EventInfo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/eventinfo/:id",
    name: "EventInfo",
    component: EventInfo,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehaviour: function(to) {
    if (to.hash) {
      return { selector: to.hash };
    }
  },
});

export default router;
