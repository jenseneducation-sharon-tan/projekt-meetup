<template>
  <button>
    {{ title }}
  </button>
</template>

<script>
export default {
  props: ["title", "event"],
  /*  data() {
    return {
      showGoingButton: false,
    };
  },
  created() {
    let attendList = this.$store.state.attendList;
    let attended = attendList.find((id) => id == event.id);
    if (attended) {
      this.showGoingButton = true;
    } else {
      this.showGoingButton = false;
    }
  }, */
};
</script>

<style>
button {
  box-shadow: 0px 10px 14px -7px #ffffff;
  background: linear-gradient(to bottom, #ededed 5%, #c2c2c2 100%);
  background-color: #ededed;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #474447;
  font-family: Arial;
  font-size: 13px;
  font-weight: bold;
  padding: 6px 12px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  width: 200px;
  height: 50px;
  visibility: visible;
}
button:hover {
  background: linear-gradient(to bottom, #c2c2c2 5%, #ededed 100%);
  background-color: #c2c2c2;
}
.button:active {
  position: relative;
  top: 1px;
}
</style>