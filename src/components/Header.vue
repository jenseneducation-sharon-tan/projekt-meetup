<template>
  <div class="catchphrase">
    <router-link to="/">
      <img src="../assets/hangout.jpg" class="logo" />
    </router-link>
    <h2>Passionate about something? Let's meetup !</h2>
    <div class="topbar-responsive-links">
      <div class="top-bar-right">
        <ul class="menu">
          <li><a href="#" v-scroll-to="'#event'">Events</a></li>
          <router-link to="/login">
            <li>Sign in</li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
/* img.logo {
  height: 100px;
  width: 150px;
}

li {
  display: inline-block;
  margin-right: 50px;
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
  list-style-type: none;
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

@media screen and (max-width: 39.9375em) {
  .topbar-responsive .menu a {
    padding: 0.875rem 0;
  }
}

.topbar-responsive .menu .topbar-responsive-button {
  color: #fefefe;
  border-color: #fefefe;
  border-radius: 5000px;
  transition: color 0.15s ease-in, border-color 0.15s ease-in;
}

.topbar-responsive .menu .topbar-responsive-button:hover {
  color: #c6d1d8;
  border-color: #c6d1d8;
}

@media screen and (max-width: 39.9375em) {
  .topbar-responsive .menu .topbar-responsive-button {
    width: 100%;
    margin: 0.875rem 0;
  }
}

@media screen and (max-width: 39.9375em) {
  .topbar-responsive {
    padding: 0.75rem;
  }
  .topbar-responsive .top-bar-title {
    position: relative;
    width: 100%;
  }
  .topbar-responsive .top-bar-title span {
    position: absolute;
    right: 0;
    border: 1px solid #fefefe;
    border-radius: 5px;
    padding: 0.25rem 0.45rem;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .topbar-responsive .top-bar-title span .menu-icon {
    margin-bottom: 4px;
  }
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes slideDown {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }
}

@keyframes slideDown {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
  }
}

@media screen and (max-width: 39.9375em) {
  .topbar-responsive-links {
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    width: 100%;
    -webkit-animation: fadeIn 1s ease-in;
    animation: fadeIn 1s ease-in;
  }
} */
/* .info-header-container {
  display: flex;
  justify-content: space-between;
}

.logo,
.profile {
  padding: 0px;
}

img.profile {
  height: 30px;
  width: 30px;
} */
</style>
