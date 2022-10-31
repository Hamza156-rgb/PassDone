<template >
  <div class="container-fluid" style="background-color: #0776bd">
    <nav class="navbar navbar-expand-lg" v-bind:class="{ navbarOpen: show }">
      <div class="col-xs-4 col-sm-6 col-md-4 col-lg-2 logo">
        <div align="left">
          <img src="../assets/logo.png" class="img-fluid" />
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            @click.stop="toggleNavbar()"
            style="box-shadow: none !important; float: left"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        v-bind:class="{ show: show }"
      >
        <div
          class="col-xs-4 col-sm-12 col-md-12 col-lg-8"
          v-if="user_type == 1 || user_type == 2"
        >
          <div class="row menuImage" align="center">
            <div class="col-3">
              <router-link to="/home">
                <img src="../assets/main/home.png" />
                <p>Home</p>
              </router-link>
            </div>

            <div class="col-3 pt-1 color">
              <div class="nav-item dropdown">
                <img
                  src="../assets/main/classroom.png"
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                />
                <p>ClassRoom</p>
                <div class="dropdown-menu">
                  <router-link class="dropdown-item" to="/my-desk">
                    My Desk
                  </router-link>

                  <router-link class="dropdown-item" to="/courses">
                    Courses
                  </router-link>

                  <router-link class="dropdown-item" to="/my-instructors">
                    Instructors
                  </router-link>
                  <router-link class="dropdown-item" to="/students">
                    Students
                  </router-link>
                  <router-link class="dropdown-item" to="/my-study-room">
                    Study Room
                  </router-link>
                </div>
              </div>
            </div>

            <div class="col-3 pt-1">
              <router-link to="/library">
                <img src="../assets/main/library.png" />
                <p>Library</p>
              </router-link>
            </div>

            <div class="col-3 pt-1">
              <router-link to="/institute">
                <img src="../assets/main/institute.png" />
                <p>Institute</p>
              </router-link>
            </div>
          </div>
        </div>

        <div
          class="col-xs-4 col-sm-12 col-md-12 col-lg-8"
          v-if="user_type == 3"
        >
          <div class="row menuImage" align="center">
            <div class="col-2"></div>
            <div class="col-3">
              <router-link to="/home">
                <img src="../assets/main/home.png" />
                <p>Home</p>
              </router-link>
            </div>

            <div class="col-3 pt-1">
              <router-link to="/library">
                <img src="../assets/main/library.png" />
                <p>Library</p>
              </router-link>
            </div>

            <div class="col-3 pt-1">
              <router-link to="/education">
                <img src="../assets/main/institute.png" />
                <p>Institute</p>
              </router-link>
            </div>
            <div class="col-1"></div>
          </div>
        </div>

        <div
          class="col-xs-4 col-sm-12 col-md-12 col-lg-2"
          v-if="user_type == 1 || user_type == 2"
        >
          <div class="row">
            <div class="col-4">
              <router-link to="/friend-request">
                <i class="fa fa-user" aria-hidden="true"></i>
              </router-link>
            </div>
            <div class="col-4">
              <router-link to="/notification">
                <i class="fa fa-bell"></i>
              </router-link>
            </div>
            <div class="col-4">
              <div class="dropdown">
                <i class="fa fa-bars"></i>
                <div class="dropdown-content">
                  <router-link class="dropdown-item" to="/my-courses">
                    Manage Courses
                  </router-link>

                  <router-link class="dropdown-item" to="/my-library">
                    Manage Library
                  </router-link>

                  <router-link class="dropdown-item" to="/account-setting">
                    Account Setting
                  </router-link>
                  <span>
                    <router-link to="/technical-support">
                      <p class="dropdown-item">
                        <i class="fa-solid fa-hand-point-right"></i>
                        Technical Support
                      </p>
                    </router-link>
                  </span>

                  <p class="token" style="color: white" v-if="user_type == 1">
                    {{ Name }}
                  </p>
                  <p class="token" style="color: white" v-if="user_type == 2">
                    {{ Name }}
                  </p>
                  <p class="token" style="color: white" v-if="user_type == 3">
                    {{ name }}
                  </p>

                  <div class="row mt-3">
                    <div
                      class="col-xs-12 col-sm-12 col-md-3 col-lg-4 user-image"
                    >
                      <img
                        src="../assets/main/user.png"
                        class="rounded-circle"
                      />
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-9 col-lg-8 p-2">
                      <div class="row btn-side">
                        <span>
                          <p class="verify" style="color: #00811e">
                            <i class="fa-sharp fa-solid fa-check-double"></i>
                            Verified
                          </p></span
                        >
                        <div class="col-1"></div>
                        <div class="col-5 p-lg-1 p-md-1">
                          <router-link to="/update-profile">
                            <button class="btn btn-upd">Update</button>
                          </router-link>
                        </div>

                        <div class="col-5 p-lg-1 p-md-1">
                          <button
                            class="btn btn-logout"
                            @click="logOut()"
                            style="cursor: pointer"
                          >
                            Logout
                          </button>
                        </div>
                        <div class="col-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-xs-4 col-sm-12 col-md-12 col-lg-2"
          v-if="user_type == 3"
        >
          <div class="row">
            <div class="col-4">
              <router-link to="/friend-request">
                <i class="fa fa-user" aria-hidden="true"></i>
              </router-link>
            </div>
            <div class="col-4">
              <router-link to="/notification">
                <i class="fa fa-bell"></i>
              </router-link>
            </div>
            <div class="col-4">
              <div class="dropdown">
                <i class="fa fa-bars"></i>
                <div class="dropdown-content">
                  <router-link class="dropdown-item" to="/my-courses">
                    Manage Courses
                  </router-link>

                  <router-link
                    class="dropdown-item"
                    to="/institute-instructor-list"
                  >
                    Instructor List
                  </router-link>

                  <router-link
                    class="dropdown-item"
                    to="/institute-student-list"
                  >
                    Student List
                  </router-link>
                  <router-link class="dropdown-item" to="/my-library">
                    Manage Library
                  </router-link>
                  <router-link class="dropdown-item" to="/account-setting">
                    Account Setting
                  </router-link>
                  <span>
                    <router-link to="/technical-support">
                      <p class="dropdown-item">
                        <i class="fa-solid fa-hand-point-right"></i>
                        Technical Support
                      </p>
                    </router-link>
                  </span>







                  <p class="token" style="color: white" v-if="user_type == 1">
                    {{ Name }}
                  </p>
                  <p class="token" style="color: white" v-if="user_type == 2">
                    {{ Name }}
                  </p>
                  <p class="token" style="color: white" v-if="user_type == 3">
                    {{ name }}
                  </p>



                  <div class="row mt-3">
                    <div
                      class="col-xs-12 col-sm-12 col-md-3 col-lg-4 user-image"
                    >
                      <img
                        src="../assets/main/user.png"
                        class="rounded-circle"
                      />
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-9 col-lg-8 p-2">
                      <div class="row btn-side">
                        <span>
                          <p class="verify" style="color: #00811e">
                            <i class="fa-sharp fa-solid fa-check-double"></i>
                            Verified
                          </p></span
                        >
                        <div class="col-1"></div>
                        <div class="col-5 p-lg-1 p-md-1">
                          <router-link to="/update-profile">
                            <button class="btn btn-upd">Update</button>
                          </router-link>
                        </div>

                        <div class="col-5 p-lg-1 p-md-1">
                          <button
                            class="btn btn-logout"
                            @click="logOut()"
                            style="cursor: pointer"
                          >
                            Logout
                          </button>
                        </div>
                        <div class="col-1"></div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
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
      Name: "",
      name: "",
      user_type: "",
    };
  },

  created() {
    this.Name = localStorage.getItem("first_name");
    this.name = localStorage.getItem("name");
    this.user_type = localStorage.getItem("user_type");
  },

  methods: {
    toggleNavbar() {
      this.show = !this.show;
    },
    logOut() {
      localStorage.removeItem("user_id");
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("first_name");
      localStorage.removeItem("user_type");
      this.$toasted.success(" Logged Out Successfully");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.fa {
  color: white;
  font-size: 30px;
  cursor: pointer;
}

.menuImage p {
  font-size: 12px;
  color: white;
  cursor: pointer;
}
img {
  cursor: pointer;
}

.dropdown-menu {
  background-color: #145d8b;
  width: 150px;
  /* margin-left: -40px; */
}
.dropdown-menu :hover {
  background-color: transparent;
}
.dropdown-item {
  color: white;
  border-bottom: 1px solid #014a79;
  padding: 10px;
  font-size: 12px;
}
.nav-item:hover .dropdown-menu {
  display: block;
  margin-top: 0px;
}
.token {
  margin-left: 5px;
  font-size: 12px;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  background-color: #145d8b;
  width: 250px;
  margin-left: -100px;
}
.dropdown:hover .dropdown-content {
  display: block;
}

.btn-upd {
  color: #0776bd !important;
  border: 1px solid #0776bd;
  border-radius: 30px;
  padding: 0px 12px !important;
  display: inline-block;
  font-weight: 400;
  user-select: none;
  background-color: #fff;
  font-size: 13px;
  outline: none;
  cursor: pointer;
}

.btn-upd:hover {
  background-color: #0776bd;
  color: white !important;
}

.btn-logout {
  color: #f75555 !important;
  border: 1px solid #f75555;
  border-radius: 30px;
  padding: 0px 12px !important;
  user-select: none;
  background-color: #fff;
  font-size: 13px;
  outline: none;
  cursor: pointer;
}

.btn-logout:hover {
  background-color: #f75555;
  color: white !important;
}

.verify {
  font-size: 15px;
  bottom: 0%;
}

@media only screen and (max-width: 600px) {
  .logo img {
    width: 40%;
  }

  .dropdown-content {
    margin-left: -140px;
  }
  .rounded-circle {
    width: 30%;
  }
  .user-image {
    display: flex;
    justify-content: center;
  }
  .btn-side button {
    justify-content: center;
    display: flex;
  }
  .verify {
    text-align: center;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .logo img {
    width: 40%;
  }
  .rounded-circle {
    width: 30%;
  }
}

@media only screen and (min-width: 768px) {
  .logo img {
    width: 45%;
  }
  .rounded-circle {
    width: 100%;
  }
}
@media only screen and (min-width: 992px) {
  .logo img {
    width: 100%;
  }
  .rounded-circle {
    width: 100%;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .logo img {
    width: 100%;
  }

  .rounded-circle {
    width: 100%;
  }
}
</style>