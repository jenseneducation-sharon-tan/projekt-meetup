<template>
  <div class="footer">
    <h2>Contact us</h2>
    <div class="contact">
      <div class="mail">
        <!--   <img src="@/assets/mail.svg" alt /> -->
        <a href="mailto:mailus@meetup.com">mailus@meetup.com</a>
      </div>
      <div class="call">
        <!--  <img src="@/assets/call.svg" alt /> -->
        <a>072-99 9999</a>
      </div>
    </div>
    <span>All rights reserved @ meetup.se</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    243deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(221, 80, 168, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  height: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 16px 24px;
  color: white;
}
</style>
