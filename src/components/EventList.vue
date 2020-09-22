<template>
  <div class="event-list-container">
    <div class="title">
      <h2 id="event">Upcoming events</h2>
    </div>
    <div class="list-container">
      <div
        class="event-list"
        v-for="event in events"
        :key="event.id"
        :event="event"
      >
        <router-link :to="'/eventinfo/' + event.id">
          <Event :event="event" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Event from "@/components/Event";
export default {
  components: { Event },
  props: ["events"],
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Crete+Round&family=Hammersmith+One&family=Rubik+Mono+One&display=swap");
.list-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 24px;
}

a {
  text-decoration: none;
}

h2 {
  font-family: "Hammersmith One", sans-serif;
  font-size: 3rem;
}
</style>
