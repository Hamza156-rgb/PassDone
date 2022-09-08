<template >
  <div class="container-fluid" style="background-color: #0776bd">
    <nav class="navbar navbar-expand-lg" v-bind:class="{ navbarOpen: show }">
      <div class="col-md-2">
        <div class="row">
          <div class="col-2">
            <button
              class="navbar-toggler"
              v-b-toggle.sidebar-variant
              style="background-color: white"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div class="col-10">
            <img src="../assets/logo.png" style="width: 100%" />
          </div>
        </div>
      </div>

      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        v-bind:class="{ show: show }"
      >
        <div class="col-md-8">sadasdsadsad</div>

        <div class="col-md-2 col-xs-12 px-4"></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      show: false,
    };
  },

  methods: {
    toggleNavbar() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
</style>