<template >
  <div class="container-fluid" style="background-color: #0776bd">
    <nav class="navbar navbar-expand-lg" v-bind:class="{ navbarOpen: show }">
      <div class="col-2">
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
        <div class="col-1"></div>
        <div class="col-7">
          <div class="row menuImage">
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

        <div class="col-2">
          <div class="row">
            <div class="col-4">
               <router-link  to="/friend-request">
              <i class="fa fa-user" aria-hidden="true"></i>
               </router-link>
            </div>
            <div class="col-4">
                  <router-link  to="/notification">
              <i class="fa fa-bell"></i>
                  </router-link>
            </div>
            <div class="col-4">
              <div class="nav-item dropdown">
                <i class="fa fa-bars"></i>
                <div class="dropdown-menu">
                  <router-link class="dropdown-item" to="/my-courses">
                    Manage Courses
                  </router-link>

                  <router-link class="dropdown-item" to="/my-library">
                  Manage Library
                  </router-link>

                  <router-link class="dropdown-item" to="/account-setting">
                    Account Setting
                  </router-link>
                  <router-link class="dropdown-item" to="/technical-support">
                    Technical Support
                  </router-link>
                  <router-link class="dropdown-item" to="/update-profile">
                  Update
                  </router-link>
                     <router-link class="dropdown-item" to="/">
                  Logout
                  </router-link>
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
  margin-left: -40px;
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
</style>