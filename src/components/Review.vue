<template>
  <div class="form">
    <div class="leave-review"></div>
    <textarea
      type="text"
      v-model="comment"
      placeholder="Comment is here"
    ></textarea>
    <!-- <p v-show="showErrorMessage">Please key in your comments</p> -->
    <button @click="addComment">Add Comment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    addComment() {
      if (this.comment.length > 1) {
        this.$store.dispatch("setAddComment", this.comment);
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
</style>