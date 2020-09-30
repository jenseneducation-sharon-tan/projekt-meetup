<template>
  <div class="form">
    <div class="input-review">
      <textarea
        id="review"
        type="text"
        v-model="review"
        placeholder="Comment is here"
        :class="{ hide: hide }"
      ></textarea>
      <p v-show="showErrorMessage" class="errorMsg">
        Please key in your comments
      </p>
      <div class="padding">
        <button @click="addComment" class="addComment">Add Comment</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["eventId"],
  data() {
    return {
      id: new Date().toLocaleTimeString(),
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
      } else {
        this.showErrorMessage = !this.showErrorMessage;
      }
    },
  },
};
</script>

<style scoped>
textarea {
  width: 260px;
  height: 150px;
  padding: 10px;
}

.hide {
  display: none;
}

.padding {
  padding: 20px;
}
</style>