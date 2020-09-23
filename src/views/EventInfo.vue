<template>
  <div class="wrapper-event-info">
    <Header />
    <div class="event-info">
      <img v-bind:src="require(`@/assets/${event.image}.jpg`)" />
    </div>
    <p>{{ event.name }}</p>
    <p>{{ event.time }}</p>
    <p>{{ event.details }}</p>
    <div class="going">
      <AttendFooter :event="event" />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

import AttendFooter from "../components/AttendFooter";
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    AttendFooter,
  },
  computed: {
    ...mapGetters(["getEventById"]),
    event() {
      let id = parseInt(this.$route.params.id);
      return this.getEventById(id);
    },
  },
};
</script>

<style scoped></style>
