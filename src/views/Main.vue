<template>
  <div>
    <Navbar />

    <div class="container-fluid mt-2">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-2 info-card">
          <div class="card">
            <div class="card-header">
              <div class="profile">
                <img
                  src="../assets/main/user.png"
                  class="rounded-circle"
                  style="width: 20%"
                />

                <p class="m-3 name">Arsal Mahmood</p>
              </div>
            </div>

            <div class="card-body">
              <div class="row">
                <div class="col-6 information">
                  <h5>Colleagues</h5>
                  <h5>Followers</h5>
                  <h5>Following</h5>
                  <h5>Friends</h5>
                </div>
                <div class="col-4"></div>
                <div class="col-2 value">
                  <h5>0</h5>
                  <h5>0</h5>
                  <h5>0</h5>
                  <h5>0</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="card mt-4">
            <div class="card-body second">
              <h5>My University</h5>
              <hr />
              <h5 id="uni">Al Al-Bayt University</h5>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2 info-card">
          <div class="card">
            <div class="card-header">
              <div class="post d-flex p-1">
                <img
                  src="../assets/main/user.png"
                  class="rounded-circle"
                  style="width: 20%"
                />
                <input
                  type="text"
                  class="form-control shadow-none"
                  placeholder="Share Your Lectures,exams,notes etc"
                />
              </div>
              <input type="file" style="float: right" />
            </div>

            <div class="card-body">
              <div class="row firstSelect">
                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-2">
                  <label>Select Course</label>
                  <select class="mt-2">
                    <option value="">choose One</option>
                  </select>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-2">
                  <label>Select Type</label>
                  <select class="mt-2">
                    <option value="">choose One</option>
                  </select>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-2">
                  <label>Who Can See?</label>
                  <select class="mt-2">
                    <option value="">choose One</option>
                  </select>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-4">
                  <button class="btn post">POST</button>
                </div>
              </div>
            </div>
          </div>

          <div class="filter mt-4">
            <label>Filter By </label>

            <div class="row mt-1">
              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                <select class="mt-2">
                  <option value="">All</option>
                  <option value="">Jordan</option>
                  <option value="">Al Al-Bayt University</option>
                </select>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                <select class="mt-2">
                  <option value="">All Majors</option>
                  <option value="">My Majors</option>
                  <option value="">My courses</option>
                </select>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                <select class="mt-2">
                  <option value="">choose One</option>
                </select>
              </div>

              <div class="mt-4" align="right">
                <button class="btn clear">Clear</button>
                <button class="btn filterBtn">Filter</button>
              </div>
            </div>
          </div>

          <div class="card mt-4" style="background: #f9f9f9">
            <div class="container-fluid">
              <div class="row mt-2">
                <div align="right">
                  <i class="fa fa-times" style="color: red"></i>
                </div>
              </div>
              <div class="card-header" style="background: #f9f9f9">
                <div class="row">
                  <div class="col-3">
                    <img
                      src="../assets/main/user.png"
                      class="rounded-circle"
                      style="width: 100%"
                    />
                  </div>

                  <div class="col-9">
                    <div class="post-information">
                      <h5>Name Here</h5>
                      <h6>
                        Professor
                        <span style="color: #0776bd"
                          >- Al Al-Bayt University -</span
                        >
                        Jordan
                      </h6>
                      <span>Notes- </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-body">
                <p class="postedBy">
                  <b>posted by:</b>
                  <span style="color: #0776bd"> Name Here</span>
                </p>

                <div class="post-data mt-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur scelerisque eros in feugiat feugiat. Curabitur
                    sollicitudin rutrum sollicitudin. Fusce tincidunt semper
                    mauris sed ultrices. Vivamus consectetur velit tincidunt
                    orci rutrum, sed faucibus quam elementum. Sed venenatis
                    tortor tortor, at viverra lorem gravida in. Vivamus rutrum,
                    ex ut congue ultricies, arcu justo auctor est, vitae auctor
                    nulla urna quis dui. Aenean faucibus, turpis eget eleifend
                    rhoncus, quam nisl ornare nulla, consectetur malesuada massa
                    erat eget lectus. Nulla pharetra ultrices velit, ut tempor
                    ligula suscipit non. Praesent eleifend est nunc, in dictum
                    orci bibendum eget. Nulla quis mauris quis eros gravida
                    finibus eget a mauris. Ut auctor suscipit dui non sodales.
                    Phasellus luctus dolor sit amet fringilla venenatis.
                    Vestibulum euismod risus eget lorem semper gravida. Mauris
                    nunc nulla, pellentesque vitae condimentum rhoncus, euismod
                    vel enim.
                  </p>
                </div>

                <div class="post-image">
                  <img
                    src="../assets/main/post.png"
                    class="img-fluid"
                    alt="Responsive image"
                  />

                  <div class="d-flex post-condition mt-3">
                    <p class="p-1">
                      <span style="color: #05d134">1</span> TRUE
                    </p>
                    <p class="p-1">
                      <span style="color: #f75555">1</span> FALSE
                    </p>
                    <p class="p-1">
                      <span style="color: #ffcc00">1</span> HIGHLIGHT
                    </p>
                  </div>
                </div>
              </div>

              <div class="card-footer" style="background: #f9f9f9">
                <div class="d-flex" style="float: left">
                  <i class="fa fa-check true"></i>
                  <i class="fa fa-times false"></i>
                  <i class="fa fa-lightbulb bulb"></i>
                </div>

                <div class="d-flex" style="float: right">
                  <span>
                    <img src="../assets/main/restore.png" />
                    Reply 0
                  </span>
                  <span style="margin-left: 10px">
                    <img src="../assets/main/share.png" />
                    Share
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-2">
          <div class="card">
            <div class="card-body">
              <span> Top Active Students</span>
              <hr />
              <div class="profile">
                <img
                  src="../assets/main/user.png"
                  class="rounded-circle"
                  style="width: 20%"
                />

                <p class="m-3 name">Student 1</p>
              </div>

              <div class="profile mt-2">
                <img
                  src="../assets/main/user.png"
                  class="rounded-circle"
                  style="width: 20%"
                />

                <p class="m-3 name">Student 2</p>
              </div>

              <div class="profile mt-2">
                <img
                  src="../assets/main/user.png"
                  class="rounded-circle"
                  style="width: 20%"
                />

                <p class="m-3 name">Student 3</p>
              </div>

              <div class="profile mt-2">
                <img
                  src="../assets/main/user.png"
                  class="rounded-circle"
                  style="width: 20%"
                />

                <p class="m-3 name">Student 4</p>
              </div>

              <span style="float: right; color: #0776bd">See More... </span>
            </div>
          </div>
          <div class="card mt-4">
            <div class="card-body">
              <span>Top Active Instructors</span>
              <hr />
              <div class="profile mt-2">
                <img
                  src="../assets/main/instructor.png"
                  class="rounded-circle"
                  style="width: 20%"
                />

                <p class="m-3 name">Instructor 1</p>
              </div>

              <div class="profile mt-2">
                <img
                  src="../assets/main/instructor.png"
                  class="rounded-circle"
                  style="width: 20%"
                />

                <p class="m-3 name">Instructor 2</p>
              </div>

              <div class="profile mt-2">
                <img
                  src="../assets/main/instructor.png"
                  class="rounded-circle"
                  style="width: 20%"
                />

                <p class="m-3 name">Instructor 3</p>
              </div>

              <div class="profile mt-2">
                <img
                  src="../assets/main/instructor.png"
                  class="rounded-circle"
                  style="width: 20%"
                />

                <p class="m-3 name">Instructor 4</p>
              </div>
              <span style="float: right; color: #0776bd">See More... </span>
            </div>
          </div>
          <div class="card mt-4">
            <div class="card-body">
              <span>Top Active Universities</span>
              <hr />
              <div class="profile">
                <img
                  src="../assets/main/university.png"
                  class="rounded-circle"
                  style="width: 20%"
                />

                <p class="m-3 name">University 1</p>
              </div>

              <div class="profile mt-3">
                <img
                  src="../assets/main/university.png"
                  class="rounded-circle"
                  style="width: 20%"
                />

                <p class="m-3 name">University 2</p>
              </div>

              <div class="profile mt-2">
                <img
                  src="../assets/main/university.png"
                  class="rounded-circle"
                  style="width: 20%"
                />

                <p class="m-3 name">University 3</p>
              </div>

              <div class="profile mt-2">
                <img
                  src="../assets/main/university.png"
                  class="rounded-circle"
                  style="width: 20%"
                />

                <p class="m-3 name">University 4</p>
              </div>
              <span style="float: right; color: #0776bd">See More... </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Main",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.profile {
  display: flex;
}
.info-card.card {
  background-color: white;
  border: 1px solid #e1e6f1;
  border-radius: 0px;
}

.info-card .card-header {
  background-color: white;
}

.head {
  display: flex;
}
.name {
  color: #0776bd;
}
.information h5 {
  color: #0776bd;
  font-size: 15px;
}
.value h5 {
  color: #0776bd;
  font-size: 12px;
}
.second h5 {
  color: black;
  font-size: 12px;
}

.second h5 {
  font-size: 12px;
}
.second #uni {
  color: #0776bd;
}
input {
  border: 0px;
}
.btn.post {
  color: #fff !important;
  border: 2px solid #ff9900;
  border-radius: 30px;
  padding: 2px 18px !important;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #ff9900;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  width: 100%;
}

.firstSelect select {
  border-radius: 0px;
  background: transparent;
  border-width: 0 0 0px;
  width: 100%;
  color: #bdbdbd;
}

.firstSelect select:focus {
  box-shadow: none;
  outline: none !important;
}

.firstSelect label {
  color: #bdbdbd;
}

.filter select {
  border-radius: 0px;
  background: transparent;
  border-width: 0 0 1px;
  border-color: #666666;
  width: 100%;
  color: black;
}

.filter select:focus {
  box-shadow: none;
  outline: none !important;
}

.filter label {
  color: #bdbdbd;
}

.clear {
  color: #000 !important;
  border: 2px solid #d6d6d6;
  border-radius: 50px;
  padding: 0px 16px !important;
  display: inline-block;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #d6d6d6;
  font-size: 14px;
  line-height: 1.5;
  outline: none;
  cursor: pointer;
  margin-right: 3%;
}
.filterBtn {
  color: #fff !important;
  border: 2px solid #ff9900;
  border-radius: 50px;
  padding: 0px 16px !important;
  display: inline-block;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #ff9900;
  font-size: 14px;
  line-height: 1.5;
  outline: none;
  cursor: pointer;
}

.post-information h5 {
  color: #0776bd;
  font-size: 18px;
}
.post-information h6 {
  font-size: 15px;
}
.post-data {
  font-size: 12px;
  font-family: Segoe UI;
  color: #707070;
}
.postedBy {
  font-size: 12px;
}
.post-image img {
  border: 1px solid black;
}

.post-image img:hover {
  cursor: pointer;
}
.post-condition {
  font-size: 12px;
  color: #707070;
}
.card-footer .fa {
  font-size: 2em;
  cursor: pointer;
  color: #777777;
}
.true {
  padding-left: 0px;
}
.true:hover {
  color: #21b721;
}

.false {
  padding-left: 15px;
}
.false:hover {
  color: #dc1919;
}
.bulb {
  padding-left: 15px;
}
.bulb:hover {
  color: #ffc210;
}
</style>