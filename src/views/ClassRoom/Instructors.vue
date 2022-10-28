<template>
  <div>
    <Navbar />
    <div class="container mt-4">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <div class="card course-card">
            <div class="card-body">
              <div class="card-text">
                <p>Filter & Search</p>
              </div>
              <div class="filters">
                <select class="form-select shadow-none">
                  <option>All Courses</option>
                  <option>course Name</option>
                  <option>Course Name</option>
                </select>

                <select class="form-select shadow-none mt-2">
                  <option>All Post Type</option>
                  <option>POSTS1</option>
                  <option>POSTS 2</option>
                </select>

                <select class="form-select shadow-none mt-2">
                  <option>All Institutes</option>
                  <option>Institues Names</option>
                  <option>Institutes Name</option>
                </select>

                <select class="form-select shadow-none mt-2">
                  <option>Posted By</option>
                  <option>Instructor</option>
                  <option>Students</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
          <div class="custom-card p-3">
            <h3>Instructors List</h3>
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
                          src="../../assets/instructors/up.png"
                          style="padding-right: 20px"
                        />
                        <img src="../../assets/instructors/down.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mt-4">
              <div class="Following-data p-3">
                <div class="row">
                  <div class="col-2">
                    <img
                      src="../../assets/main/instructor.png"
                      class="rounded-circle"
                      style="width: 100%"
                    />
                  </div>
                  <div class="col-10 mt-lg-3">
                    <h5 class="name">Student Name</h5>

                    <h6 class="uni">
                      Professor - Al Al-Bayt University - Jordan
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mt-4">
              <div class="Following-data p-3">
                <div class="row">
                  <div class="col-2">
                    <img
                      src="../../assets/main/instructor.png"
                      class="rounded-circle"
                      style="width: 100%"
                    />
                  </div>
                  <div class="col-10 mt-lg-3">
                    <h5 class="name">Student Name</h5>

                    <h6 class="uni">
                      Professor - Al Al-Bayt University - Jordan
                    </h6>
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
import Navbar from "../../components/Navbar.vue";
import BackToTop from "../../components/BackToTop.vue";
export default {
  name: "Instructors",
  components: {
    Navbar,
      BackToTop,
  },
};
</script>

<style scoped>
.card {
  border: none;
}
.course-card {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border: 0;
  border-radius: 18px;
  box-shadow: 0 8px 16px 0 rgb(162 169 204 / 24%);
}
.card-text p {
  color: #707070;
  padding: 15px 0px 0px 15px;
}
select {
  background-color: #fff;
  border: 0px;
  border-bottom: 1px solid #ececec;
  border-radius: 0px;
  outline: 0;
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
.arrow {
  float: right;
}

.Following-data {
  border-radius: 18px;
  border: 1px solid #d6d6d6;
}
.name {
  font-weight: 500;
  color: #707070;
}
.uni {
  color: #aba9a9;
}

@media only screen and (max-width: 600px) {
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
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
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
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
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
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
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
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
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
}
</style>