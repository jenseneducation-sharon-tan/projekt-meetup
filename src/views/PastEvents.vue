<template>
  <div class="past-events">
    <Header />
    <EventList :events="eventHistory" />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import EventList from "../components/EventList";
import Footer from "../components/Footer";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { Header, EventList, Footer },
  computed: mapGetters(["eventHistory"]),
  methods: {
    ...mapActions(["fetchPastEvents"]),
  },
  created() {
    this.fetchPastEvents();
  },
};
</script>

<style scoped></style>
