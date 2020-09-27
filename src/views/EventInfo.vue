<template>
  <div class="wrapper-event-info">
    <Header />
    <div class="event-info">
      <img v-bind:src="require(`@/assets/${event.image}.jpg`)" />
      <p class="name">{{ event.name }}</p>
      <p class="time">{{ event.time }}</p>
      <p class="details">{{ event.details }}</p>
      <Button
        :event="event"
        :title="attendButton"
        @click.native="attendEvent(event)"
        :class="{ isGoing: isGoing == event.id }"
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
    ...mapGetters(["getEventById", "attendList", "attendButton", "isGoing"]),
    event() {
      let id = parseInt(this.$route.params.id);
      return this.getEventById(id);
    },
  },
  methods: mapActions(["attendEvent"]),
};
</script>

<style scoped>
.isGoing {
  color: white;
  background: green;
}
</style>
