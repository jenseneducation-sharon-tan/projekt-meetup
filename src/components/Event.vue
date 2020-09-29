<template>
  <div class="event-container">
    <img v-bind:src="require(`@/assets/${event.image}.jpg`)" />
    <div class="event-details">
      <div class="date-time-container">
        <p class="date">{{ event.date }}</p>
        <p class="time">{{ event.time }}</p>
      </div>
      <p class="name">{{ event.name }}</p>
    </div>
    <div class="show-going">
      <Button
        :event="event"
        :title="willAttendButton"
        v-if="confirmGoing"
        class="isGoing"
      />
    </div>
    <div class="padding">
      <div class="display-reviews-list" v-if="review">
        <div
          class="display-reviews"
          v-for="review in showReviews"
          :key="review.id"
        >
          {{ review.review }}
        </div>
      </div>
    </div>
    <div class="comments" v-if="review">
      <div class="padding">
        <Button
          :title="reviewButton"
          :event="event"
          v-if="writeReview !== event.id"
          @click.native="showCommentBox(event.id)"
        />
      </div>
      <div class="padding">
        <div class="comments" v-if="review">
          <Review
            v-if="writeReview == event.id"
            :eventId="event.id"
            :displayReviewList="showReviews"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Review from "@/components/Review";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { Button, Review },

  props: ["event", "review"],
  data() {
    return {
      going: false,
    };
  },
  computed: {
    ...mapGetters([
      "reviewButton",
      "writeReview",
      "willAttendButton",
      "isGoing",
      "reviewList",
    ]),
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

    showReviews() {
      let reviewList = this.$store.state.reviewList;
      let selectedEventToComment = reviewList.filter(
        (item) => item.eventId == this.event.id
      );

      return selectedEventToComment;
    },
  },
  methods: {
    ...mapActions([
      "showCommentBox",
      "attendEvent",
      "getAttendList",
      "fetchReviewList",
    ]),
  },
  created() {
    this.getAttendList();
    this.fetchReviewList();
  },
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
  height: auto;
}

img {
  width: 280px;
  height: 200px;
  padding: 10px;
}
.event-details {
  display: grid;
  grid-template-rows: repeat(4, auto);
  padding: 20px;
}

p,
.number-attendees {
  margin-bottom: 5px;
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
.hidden {
  display: none;
}

button {
  margin-left: 40px;
}
.isGoing {
  color: white;
  background: green;
}

.display-reviews-list {
  border: 2px gray solid;
  border-radius: 5px;
  padding: 10px;
}

.padding {
  padding: 10px;
}
</style>