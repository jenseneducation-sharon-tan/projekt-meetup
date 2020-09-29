<template>
  <div class="catchphrase">
    <router-link to="/">
      <img src="../assets/hangout.jpg" class="logo" />
    </router-link>
    <h2 class="tagline">Passionate about something? Let's meetup !</h2>
    <div class="topbar-responsive-links">
      <div class="top-bar-right" v-if="mainpage">
        <ul class="menu">
          <li>
            <a href="#event" class="eventNow">Current Events</a>
          </li>
          <li><a href="#history" class="pastEvent">Past Events</a></li>
        </ul>
      </div>

      <div class="not-homepage" v-if="!mainpage">
        <ul class="menu">
          <router-link :to="{ path: '/' }">
            <li>Current Events</li>
          </router-link>
          <router-link :to="{ path: '/' }">
            <li>Past Events</li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mainpage"],
};
</script>

<style scoped>
.catchphrase {
  background-image: url("../assets/white-pattern-opac.jpg");
  height: 120px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

img.logo {
  height: 100px;
  width: 150px;
}
h2 {
  margin: auto 0;
  font-size: 2rem;
}
a {
  text-decoration: none;
}
li {
  display: inline-block;
  margin-right: 50px;
  list-style-type: none;
}

.top-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    243deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(249, 249, 249, 0.6475183823529411) 22%,
    rgba(248, 237, 239, 1) 100%
  );
}

.topbar-responsive-links {
  margin-top: 65px;
}

.topbar-responsive .topbar-responsive-logo {
  color: black;
  vertical-align: middle;
}

.topbar-responsive .menu a {
  color: black;
  transition: color 0.15s ease-in;
  text-decoration: none;
}

.topbar-responsive .menu a:hover {
  color: gray;
}

.menu {
  margin-top: 20px;
}
</style>
