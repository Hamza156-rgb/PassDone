<template >
  <div class="container-fluid" style="background-color: #0776bd">
    <nav class="navbar navbar-expand-lg" v-bind:class="{ navbarOpen: show }">
      <div class="col-md-2">
        <img src="../assets/logo.png" style="width: 100%" />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        @click.stop="toggleNavbar()"
        style="background-color: white"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        v-bind:class="{ show: show }"
      >
        <div class="col-md-8 forms">
          <form>
            <div class="row mt-4">
              <div class="form-group col-md-4">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div class="form-group col-md-4">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
                <a style="color: white" @click="$refs.modalName1.openModal()"
                  >Forget Password!
                </a>
              </div>
              <div class="col-md-4 buttons">
                <button type="submit" class="btn btn-primary login">
                  Login
                </button>
                <router-link to="/signup">
                  <button
                    type="submit"
                    class="btn btn-primary signup"
                    style="margin-left: 5px"
                  >
                    Sign Up
                  </button>
                </router-link>
              </div>
            </div>
          </form>
        </div>

        <div class="col-md-2 col-xs-12 px-4 last">
          <select class="form-select">
            <option>English</option>
            <option>Arabic</option>
          </select>
        </div>
      </div>
    </nav>

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
        <div class="recovery">
          <a class="p-2">Cancel </a>
          <button class="btn btn-primary">Recovery</button>
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
      show: true,
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
.recovery {
  float: right;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.about {
  font-size: 1.5rem;
  text-align: left;
}
.last {
  margin-left: 160px;
}

@media only screen and (max-width: 768px) {
  .forms {
    margin-top: 15px;
  }
  input[type="password"] {
    margin-top: 20px;
  }

  .buttons {
    margin: 15px 0px 15px 0px;
    display: flex;
  }
  .login {
    width: 50%;
  }
  .signup {
    width: 50%;
  }
  .last {
    margin-left: 0px;
  }
}
</style>