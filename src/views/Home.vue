<template>
  <div class="home">
    <div class="top"></div>
    <div class="intro">
      <Header />
    </div>
    <img src="../assets/meetup.jpg" class="meet" />
    <EventList :events="events" />
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
  computed: mapGetters(["events"]),
  methods: {
    ...mapActions(["fetchEventList"]),
  },
  created() {
    this.fetchEventList();
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

.meet {
  width: 100%;
}
</style>
