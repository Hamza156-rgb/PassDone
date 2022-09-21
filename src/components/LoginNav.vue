<template >
  <div>
    <VueScrollFixedNavbar>
      <nav
        class="navbar navbar-expand-lg"
        v-bind:class="{ navbarOpen: show }"
        style="background-color: #0776bd"
      >
        <div class="container-fluid">
          <div class="col-xs-2 col-sm-12 col-md-12 col-lg-2 logo">
            <img src="../assets/logo.png" class="mb-2" />

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              @click.stop="toggleNavbar()"
              style="box-shadow: none !important; float: right"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            v-bind:class="{ show: show }"
          >
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 forms mt-2">
              <form>
                <div class="row mt-2">
                  <div
                    class="
                      form-group
                      col-xs-12 col-sm-12 col-md-12 col-lg-4
                      mt-2
                    "
                  >
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                    />
                  </div>
                  <div
                    class="
                      form-group
                      col-xs-12 col-sm-12 col-md-12 col-lg-4
                      mt-2
                    "
                  >
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                    <a
                      style="color: white"
                      @click="$refs.modalName1.openModal()"
                      >Forget Password!
                    </a>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 buttons">
                    <div class="row">
                      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                        <router-link to="/home">
                          <button
                            type="submit"
                            class="
                              btn btn-primary
                              login
                              col-xs-12 col-sm-12 col-md-12 col-lg-12
                              mt-2
                            "
                          >
                            Login
                          </button>
                        </router-link>
                      </div>

                      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                        <router-link to="/signup-student">
                          <button
                            type="submit"
                            class="
                              btn btn-primary
                              signup
                              col-xs-12 col-sm-12 col-md-12 col-lg-12
                              mt-2
                            "
                          >
                            SignUp
                          </button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2 select">
              <select class="form-select">
                <option>English</option>
                <option>Arabic</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </VueScrollFixedNavbar>
    <modal ref="modalName1">
      <template v-slot:header>
        <h3 class="about">Forget your password !</h3>
      </template>

      <template v-slot:body>
        <div class="main" style="border-top: 1px solid grey">
          <label class="mt-3"> Please enter your email </label>
          <input
            type="email"
            class="form-control mt-2"
            placeholder="Email Address"
          />
        </div>
      </template>

      <template v-slot:footer>
        <div align="right">
          <button type="button" class="btn btn-link">Cancel</button>
          <button type="button" class="btn btn-primary">Recovery</button>
        </div>
      </template>
    </modal>
  </div>
</template>
<script>
import Modal from "./Modal.vue";

export default {
  name: "Navbar",
  components: {
    Modal,
  },
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
.about {
  font-size: 1.5rem;
  text-align: left;
}
.btn-link {
  color: black;
  font-size: 12px;
  text-decoration: underline;
  box-shadow: none !important;
}
.logo img {
  width: 40%;
}

@media only screen and (max-width: 768px) {
  .select {
    margin: 15px 0px 0px 0px;
  }
  .buttons .btn {
    width: 100%;
  }
  .main img {
    width: 10%;
  }
}

@media only screen and (min-width: 768px) {
  .select {
    margin: 15px 0px 0px 0px;
  }
  .logo img {
    width: 15%;
  }
}

@media only screen and (min-width: 992px) {
  .select {
    margin: 0px 0px 0px 120px;
  }
  .logo img {
    width: 100%;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .select {
    margin-left: 150px;
  }
  .logo img {
    width: 100%;
  }
}
</style>