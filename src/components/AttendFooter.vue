<template>
  <div class="attend-container">
    <p>{{event.time}}</p>
    <p>{{event.date}}</p>
    <p>{{event.name}}</p>
    <button>Attend</button>
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>

<style>
.attend-container {
  background: #606060;
  height: 160px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 16px 24px;
  color: white;
}
</style>