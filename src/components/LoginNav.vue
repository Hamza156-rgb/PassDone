<template >
  <div>
    <VueScrollFixedNavbar>
      <nav
        class="navbar navbar-expand-lg"
        v-bind:class="{ navbarOpen: show }"
        style="background-color: #0776bd"
      >
        <div class="container-fluid">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2 logo">
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
              <form @submit.prevent="submit">
                <div class="row mt-2">
                  <div
                    class="
                      form-group
                      col-xs-12 col-sm-12 col-md-6 col-lg-4
                      mt-2
                    "
                  >
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                      v-model="form.email"
                      :class="{
                        'is-invalid': submitted && $v.form.email.$error,
                      }"
                    />

                    <div
                      v-if="submitted && $v.form.email.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.form.email.required">
                        Username is required
                      </span>
                    </div>
                  </div>
                  <div
                    class="
                      form-group
                      col-xs-12 col-sm-12 col-md-6 col-lg-4
                      mt-2
                    "
                  >
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                      v-model="form.password"
                      :class="{
                        'is-invalid': submitted && $v.form.password.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.form.password.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.form.password.required">
                        Password is required
                      </span>
                    </div>
                    <a
                      id="forget"
                      style="color: white"
                      @click="$refs.modalName1.openModal()"
                      >Forget Password!
                    </a>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 buttons">
                    <div class="row">
                      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
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
                      </div>

                      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
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
                            Sign Up
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
import { required, email } from "vuelidate/lib/validators";
import ContentDataService from "../services/ContentDataService";

export default {
  name: "Navbar",
  components: {
    Modal,
  },
  data() {
    return {
      show: false,
      submitted: false,
      form: {
        email: "",
        password: "",
      },
    };
  },

  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },

  methods: {
    toggleNavbar() {
      this.show = !this.show;
    },
    submit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        ContentDataService.login(this.form)
          .then((response) => {
            console.log(response.data);
            localStorage.setItem("user_id", response.data.data.user_id);

            if (response.data.data.user_type == 1) {
              console.log(response.data.data);
              localStorage.setItem("degree", response.data.data.degree.name);
              localStorage.setItem("country", response.data.data.country.name);
              localStorage.setItem("first_name", response.data.data.first_name);
              localStorage.setItem(
                "university_name",
                response.data.data.university.name
              );
              localStorage.setItem(
                "university_id",
                response.data.data.university.user_id
              );
            } else if (response.data.data.user_type == 2) {
              console.log(response.data.data);
              // localStorage.setItem("degree", response.data.data.degree.name);
              // localStorage.setItem("country", response.data.data.country.name);
              localStorage.setItem("first_name", response.data.data.first_name);
              localStorage.setItem(
                "university_name",
                response.data.data.institute.name
              );
              localStorage.setItem(
                "university_id",
                response.data.data.institute.user_id
              );
            } else if (response.data.data.user_type == 3) {
              localStorage.setItem("name", response.data.data.name);
            }
            if (response.data.data.profile_pic == null) {
              localStorage.setItem("profile_pic", "null");
            } else {
              localStorage.setItem(
                "profile_pic",
                "passdoneapi.codetreck.com" + response.data.data.profile_pic
              );
            }

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user_type", response.data.data.user_type);
            this.$toasted.success(" Logged In Successfully");
            this.$router.push("/home");
          })
          .catch((e) => {
            if (e) {
              this.$toasted.error("Username or Password is incorrect");
            }
          });
      }
    },
  },
};
</script>

<style scoped>
.form-control.is-invalid,
.was-validated .form-control:invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

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

@media only screen and (max-width: 600px) {
  .logo button {
    margin-left: 130px;
  }
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
  .forget {
    font-size: 13px;
  }
  .btn {
    font-size: 12px;
  }
  #forget {
    font-size: 13px;
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
  .btn {
    font-size: 16px;
  }
  select {
    font-size: 16px;
  }

  #forget {
    font-size: 16px;
  }
}
</style>