<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
export default {
  name: "App",
  setup() {},
};
</script>

<style scoped>
@font-face {
  font-family: "Oxygen";
  src: url(./assets/fonts/Oxygen-Regular.ttf);
}
html{
 font-family: 'Oxygen', sans-serif;
}
</style>
