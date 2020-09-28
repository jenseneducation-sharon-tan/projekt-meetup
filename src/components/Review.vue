<template>
  <div class="form">
    <div class="display-reviews">{{ displayReviewList }}</div>
    <div class="input-review">
      <textarea
        type="text"
        v-model="review"
        placeholder="Comment is here"
        :class="{ hide: hide }"
      ></textarea>
      <p v-show="showErrorMessage">Please key in your comments</p>
      <button @click="addComment">Add Comment</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["eventId", "displayReviewList"],
  data() {
    return {
      id: new Date(),
      review: "",
      showErrorMessage: false,
      hide: false,
    };
  },

  methods: {
    addComment() {
      if (this.review != "") {
        let message = {
          id: this.id,
          review: this.review,
          eventId: this.eventId,
        };
        this.$store.dispatch("addNewReview", message);
        this.review = "";
        this.hide = true;
      } else {
        this.showErrorMessage = !this.showErrorMessage;
      }
    },
  },
};
</script>

<style scoped>
textarea {
  width: 280px;
  height: 150px;
  padding: 10px;
}

.hide {
  display: none;
}
</style>