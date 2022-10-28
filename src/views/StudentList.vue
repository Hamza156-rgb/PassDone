<template>
  <div>
    <Navbar />
    <div class="container mt-3">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-2">
          <div class="custom-card p-3">
            <div class="row">
              <div class="col-12">
                <h4 class="library">
                  <b style="color: #0798d2">Institute </b> Student List
                </h4>
              </div>
            </div>

            <hr />
            <div class="card">
              <div class="search-card">
                <div class="row">
                  <div class="col-7">
                    <div class="input-group std-search p-3">
                      <input
                        type="text"
                        class="form-control"
                        name="searchname"
                        id="searchname"
                        placeholder="Search By keywords"
                        value=""
                      />

                      <span class="input-group-append"
                        ><button
                          type="submit"
                          style="
                            padding: 0;
                            margin: 0;
                            border: 0px;
                            background: transparent;
                          "
                        >
                          <i class="fa fa-search"></i></button
                      ></span>
                    </div>
                  </div>
                  <div class="col-5">
                    <div class="arrow">
                      <div class="d-flex p-4">
                        <img
                          src="../assets/instructors/up.png"
                          style="padding-right: 20px"
                        />
                        <img src="../assets/instructors/down.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mt-4">
              <div class="Following-data p-3">
                <div class="row">
                  <div class="col-2 ">
                    <!-- <img
                      v-if="item.profile_pic"
                      class="rounded-circle"
                      style="width: 100%"
                    /> -->

                    <img
                      src="../assets/main/user.png"
                      class="rounded-circle"
                    style="width:100%;"
                    />
                  </div>
                  <div class="col-10 mt-lg-5">
                    <div class="row">
                      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <h5 class="name">dsf</h5>
                        <h6 class="uni">sadas -dsasd</h6>
                      </div>

                      <div
                        class="col-xs-12 col-sm-12 col-md-6 col-lg-6"
                        align="right"
                      >
                        <button class="btn btn-primarys info-buttons mt-2">
                          View Profile
                        </button>

                        <button class="btn btn-warnings info-buttons mt-2">
                          Add Friend
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BackToTop />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import BackToTop from "../components/BackToTop.vue";
// import Modal from '../components/Modal.vue'
export default {
  name: "StudentList",
  components: {
    Navbar,
    BackToTop,
  },
};
</script>


<style scoped>
.customm-file-input {
  z-index: 2;
  height: 5px;
  opacity: 0;
}
.card {
  border: none;
}
.ad-card {
  margin-bottom: 15px;
  padding: 3px;
  border: 0;
  border-radius: 12px;
  box-shadow: 0 8px 16px 0 rgb(162 169 204 / 24%);
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #e1e6f1;
  border-radius: 3px;
}

.custom-card {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border: 0;
  border-radius: 18px;
  box-shadow: 0 8px 16px 0 rgb(162 169 204 / 24%);
  background-color: white;
  height: 100vh;
}
.search-card {
  border-radius: 18px;
  border: 1px solid #d6d6d6;
  background-color: #f9f9f9;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.std-search i {
  margin: 17px 4px 0px 18px;
  font-size: 22px;
  color: #0776bd;
}
.form-control {
  border-radius: 0px;
  background: transparent;
  outline: 0;
  border-width: 0 0 1px;
  border-color: #bdbdbd;
  color: black;
  box-shadow: none;
}
.form-control-lg {
  border-left: 5px solid #f95858;
  box-shadow: none;
  border-top: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
}
.arrow {
  float: right;
}

.Following-data {
  border-radius: 18px;
  border: 1px solid #d6d6d6;
}
.card-options {
  margin-left: auto;
  display: flex;
  -ms-flex-order: 100;
  order: 100;
  margin-right: -0.5rem;
  color: #99a6b7;
  -ms-flex-item-align: center;
  align-self: center;
  float: right;
}
.manage-semester {
  color: #0776bd;
}

.btn-primarys {
  color: #fff !important;
  border: 2px solid #0776bd;
  border-radius: 30px;
  padding: 1px 12px !important;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #0776bd;
  line-height: 1.5;
  outline: none;
  cursor: pointer;
}

.btn-primarys:hover {
  background-color: #08619a;
}

.btn-warnings {
  color: #fff !important;
  border: 2px solid #ff9900;
  border-radius: 30px;
  padding: 1px 20px !important;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #ff9900;
  line-height: 1.5;
  outline: none;
  cursor: pointer;
}
.btn-warnings:hover {
  background-color: #fab002;
  border: 2px solid #fab002;
}

.btn-about {
  color: #fff !important;
  border: 2px solid #0776bd;
  border-radius: 30px;
  padding: 1px 22px !important;
  background-color: #0776bd;
  font-size: 14px;
  outline: none;
  cursor: pointer;
}

.btn-about:hover {
  background-color: #08619a;
}

@media only screen and (max-width: 600px) {
  .library {
    font-size: 14px;
  }

  .fa-sharp {
    font-size: 18px;
  }

  .manage-semester {
    font-size: 17px;
  }
  .card-text p {
    font-size: 11px;
  }
  select {
    font-size: 11px;
  }
  .name {
    font-size: 14px;
  }
  .uni {
    font-size: 10px;
  }

  .btn-primarys {
    font-size: 12px;
    width: 50%;
  }
  .btn-warnings {
    font-size: 12px;
    width: 50%;
  }
    .profile img{
    width: 100%;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .library {
    font-size: 16px;
  }

  .fa-sharp {
    font-size: 16px;
  }

  .manage-semester {
    font-size: 19px;
  }
  .card-text p {
    font-size: 12px;
  }
  select {
    font-size: 12px;
  }
  .name {
    font-size: 15px;
  }
  .uni {
    font-size: 12px;
  }

  .btn-primarys {
    font-size: 12px;
    width: 50%;
  }
  .btn-warnings {
    font-size: 12px;
    width: 50%;
  }
    .profile img{
    width: 100%;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .library {
    font-size: 18px;
  }

  .fa-sharp {
    font-size: 20px;
  }

  .manage-semester {
    font-size: 18px;
  }
  .card-text p {
    font-size: 13px;
  }
  select {
    font-size: 13px;
  }
  .name {
    font-size: 16px;
  }
  .uni {
    font-size: 13px;
  }

  .btn-primarys {
    font-size: 10px;
    margin-right: 1px;
  }
  .btn-warnings {
    font-size: 10px;
  }
    .profile img{
    width: 50%;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .library {
    font-size: 20px;
  }

  .fa-sharp {
    font-size: 28px;
  }

  .manage-semester {
    font-size: 20px;
  }

  .card-text p {
    font-size: 15px;
  }
  select {
    font-size: 14px;
  }
  .name {
    font-size: 17px;
  }
  .uni {
    font-size: 14px;
  }

  .btn-primarys {
    font-size: 12px;
    width: 30%;
    margin-right: 5px;
  }
  .btn-warnings {
    font-size: 12px;
    width: 30%;
  }
    .profile img{
    width: 50%;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .library {
    font-size: 22px;
  }

  .fa-sharp {
    font-size: 30px;
  }

  .manage-semester {
    font-size: 22px;
  }

  .card-text p {
    font-size: 18px;
  }
  select {
    font-size: 15px;
  }
  .name {
    font-size: 18px;
  }
  .uni {
    font-size: 15px;
  }
  .btn-primarys {
    font-size: 12px;
    width: 30%;
    margin-right: 5px;
  }
  .btn-warnings {
    font-size: 12px;
    width: 30%;
  }
  .profile img{
    width: 70%;
  }
}
</style>

