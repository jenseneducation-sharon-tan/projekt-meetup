<template>
  <div class="event-container">
    <img v-bind:src="require(`@/assets/${event.image}.jpg`)" />
    <div class="event-details">
      <div class="date-time-container">
        <p class="date">{{ event.date }}</p>
        <p class="time">{{ event.time }}</p>
      </div>
      <p class="event-name">{{ event.name }}</p>
      <p class="number-attendees">Participants: {{ event.attendees }}</p>
    </div>
    <Button title="Leave a review" :event="event" v-if="review" />
  </div>
</template>

<script>
import Button from "../components/Button";
export default {
  components: { Button },
  props: ["event", "review"],
};
</script>

<style scoped>
.event-container {
  background: white;
  margin: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 8px #888888;
  border-radius: 10px;
  width: 280px;
  height: 370px;
}

img {
  width: 280px;
  height: 200px;
  padding: 10px;
}
.event-details {
  display: grid;
  grid-template-rows: repeat(4, auto);
}
.date-time-container {
  display: flex;
  width: 100%;
}

.time .date {
  color: #d0d3d4;
}

.time {
  margin-left: 20px;
}

.event-name {
  margin: 0;

  font-size: 1.2rem;
}
</style>