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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
@font-face {
  font-family: "Oxygen";
  src: url(./assets/fonts/Oxygen-Regular.ttf);
}
html{
 font-family: 'Oxygen', sans-serif;
}
.multiselect__tags {
  border-radius: 0px;
  background: transparent;
  outline: 0;
  border-width: 0 0 1px;
  border-color: #bdbdbd;
  color: black;
  box-shadow: none;
  width: 100%;
}

.multiselect__single {
  border-radius: 0px;
  background: transparent;
  outline: 0;
  border-width: 0 0 1px;
  border-color: #bdbdbd;
  color: black;
  box-shadow: none;
  width: 100%;
}
</style>
