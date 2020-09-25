<template>
  <div class="wrapper-event-info">
    <Header />
    <div class="event-info">
      <img v-bind:src="require(`@/assets/${event.image}.jpg`)" />
      <p>{{ event.name }}</p>
      <p>{{ event.time }}</p>
      <p>{{ event.details }}</p>
      <Button
        :event="event"
        title="Attend"
        @click.native="attendEvent(event)"
      />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Button from "../components/Button";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Header,
    Button,
  },

  computed: {
    ...mapGetters(["getEventById", "attend"]),
    event() {
      let id = parseInt(this.$route.params.id);
      return this.getEventById(id);
    },
  },
  methods: mapActions(["attendEvent"]),
};
</script>

<style scoped></style>
