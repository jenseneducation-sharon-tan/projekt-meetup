<template>
  <div class="wrapper-event-info">
    <Header />
    <div class="event-info center" v-if="event">
      <img
        v-if="event.image"
        v-bind:src="require(`@/assets/${event.image}.jpg`)"
        class="margin-bottom-20"
      />
      <div class="padding">
        <p class="name margin-bottom-20">
          {{ event.name }} <span>Time: {{ event.time }}</span>
        </p>

        <p class="margin-bottom-20">Event details:</p>
        <p class="details margin-bottom-20">{{ event.details }}</p>
        <Button
          :event="event"
          :title="willAttendButton"
          v-if="confirmGoing"
          class="isGoing margin-bottom-20"
        />
        <Button
          :event="event"
          :title="attendButton"
          @click.native="attendEvent(event.id)"
          v-else
          class="attend"
        />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Header,
    Button,
    Footer,
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
    ]),
    event() {
      let id = parseInt(this.$route.params.id);
      return this.getEventById(id);
    },
    confirmGoing() {
      let storedAttendList = this.$store.state.attendList;
      let going;
      if (storedAttendList.length != 0) {
        let attended = storedAttendList.find((id) => id == this.event.id);

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
img {
  border-radius: 20px;
  width: 700px;
  height: 400px;
}

.center {
  margin: auto;
  width: 50%;

  padding: 10px;
}

.margin-bottom-20 {
  margin-bottom: 20px;
}

span {
  margin-left: 20px;
}

.isGoing {
  color: white;
  background: green;
}
.padding {
  padding: 10px;
}
</style>
