import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EventInfo from "../views/EventInfo.vue";
import PastEvents from "../views/PastEvents.vue";
import Login from "../views/Login.vue";

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
  {
    path: "/pastevents",
    name: "PastEvents",
    component: PastEvents,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
