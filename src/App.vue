<template>
  <div>
    <nav>
      <img alt="Vue logo" src="./assets/logo.png" class="logo">
      <div class="nav-items">
        <router-link to="/">Home</router-link>
        <router-link to="/about">Services</router-link>
        <router-link to="/contact">Make an Appointment</router-link>
      </div>
    </nav>
    <router-view />
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav {
  background-color: grey;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}

.logo {
  max-height: 50px;
}

.nav-items {
  display: flex;
}

.router-link {
  margin-right: 10px;
}

footer {
  background-color: grey;
  height: 50px;
}
</style>
