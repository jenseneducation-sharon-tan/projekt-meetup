<template>
  <div class="wrapper-event-info">
    <Header />
    <div class="event-info">
      <img v-bind:src="require(`@/assets/${event.image}.jpg`)" />
      <p>id: {{ event.id }}</p>
      <p class="name">{{ event.name }}</p>
      <p class="time">{{ event.time }}</p>
      <p class="details">{{ event.details }}</p>
      <Button
        :event="event"
        :title="willAttendButton"
        v-if="confirmGoing"
        class="isGoing"
      />
      <Button
        :event="event"
        :title="attendButton"
        @click.native="attendEvent(event.id)"
        v-else
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
  data() {
    return {
      going: false,
    };
  },
  computed: {
    ...mapGetters([
      "getEventById",
      "attendList",
      "attendButton",
      "willAttendButton",
      "isGoing",
      "showAttend",
    ]),
    event() {
      let id = parseInt(this.$route.params.id);
      return this.getEventById(id);
    },
    confirmGoing() {
      let storage = this.$store.state.attendList;
      let going;
      if (storage.length != 0) {
        let attended = storage.find((id) => id == this.event.id);
        console.log(this.event.id);
        if (attended) {
          going = true;
        } else {
          going = false;
        }
      } else {
        going = false;
      }
      return going;
    },
  },
  methods: mapActions(["attendEvent", "getAttendList"]),

  created() {
    this.getAttendList();
  },
};
</script>

<style scoped>
.isGoing {
  color: white;
  background: green;
}
</style>
