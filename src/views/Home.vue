<template>
  <div class="home">
    <div class="top"></div>
    <div class="intro">
      <Header :mainpage="true" />
    </div>
    <img src="../assets/meetup.jpg" class="meet" />
    <h2 id="event">{{ upcomingEvents }}</h2>
    <EventList :events="events" />
    <h2 id="history">{{ pastEvents }}</h2>
    <EventList :events="eventHistory" :review="true" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import EventList from "../components/EventList";
import Footer from "../components/Footer";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Header,
    EventList,
    Footer,
  },
  data: () => {
    return {
      upcomingEvents: "Upcoming Events",
      pastEvents: "Past Events",
    };
  },
  computed: mapGetters(["events", "eventHistory"]),
  methods: {
    ...mapActions(["fetchEventList", "fetchPastEvents"]),
  },
  created() {
    this.fetchEventList();
    this.fetchPastEvents();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
.top {
  height: 60px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    243deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(221, 80, 168, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
}
h2 {
  margin: auto 0;
  font-size: 2rem;
}
.meet {
  width: 100%;
}
</style>
