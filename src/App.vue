<template>
  <div id="app" class="bg-light">
    <b-navbar variant="dark" type="dark" class="mb-5">
      <b-navbar-brand>
          <img class="nick-img" src="./assets/invaders.png" alt="" srcset="">
      </b-navbar-brand>
      <b-navbar-nav class="mx-auto">
        <b-nav-item style="margin-left:250px; font-size: 20px;"> Trivia 'Uw'ue</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
        </b-nav-item>
        <b-nav-item :to="{ path: '/gamemenu'}">
          Game Menu
        </b-nav-item>
         <b-nav-item :to="{ path: '/'}">
          Home
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  min-height: 100vh;
}

/* nav {
  font-size: 26px;
  border-style: groove;
  border-color: #2c3e50;
  border-top: none;
  border-right: none;
} */
.nick-img {
  max-width: 50px;
  margin-left: 30px;
}
</style>
