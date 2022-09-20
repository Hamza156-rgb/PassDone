<template>
  <div>
    <Navbar />
    <header>
    <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
    <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="white" stroke-width="120" stroke-linecap="round"/>
  </svg>
    <div class="container">
      <div class="row ">
        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 ">
          <div class="profile-image">
            <img src="../../assets/main/user.png" class="rounded-circle" />
          </div>
          <div class="update mt-3">
            <button class="btn btn-primary">Update</button>
          </div>
        </div>
        <div class="col-lg-1 col-md-1"></div>
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 ">
          <div class="information">
            <h5>Student Name</h5>
            <h6>Professor - Al Al-Bayt University - Jordan</h6>
          </div>
          <div class="data">
            <div class="row mt-4">
              <div class="col-3">
                <p class="mb-0" id="one">3</p>
                <p id="names">Posts</p>
              </div>

              <div class="col-3 border-color">
                <p class="mb-0" id="two">3</p>
                <p id="names">Followers</p>
              </div>

              <div class="col-3 border-color">
                <p class="mb-0" id="three">3</p>
                <p id="names">Courses</p>
              </div>

              <div class="col-3 border-color">
                <p class="mb-0" id="four">3</p>
                <p id="names">Friends</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 ">
          <div class="grades">
            <h5>10000</h5>
            <p>B +points</p>
          </div>
        </div>
      </div>
    </div>
    </header>

    <div class="container mt-5">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <div class="sideNav">
            <button
              class="btn btn-warnings active shadow-none"
              style="width: 100%"
              id="step1"
              @click="div1()"
            >
              Feed
            </button>
            <button
              class="btn btn-warnings mt-4 shadow-none"
              style="width: 100%"
              id="step2"
              @click="div2()"
            >
              My Course
            </button>
            <button
              class="btn btn-warnings mt-4 shadow-none"
              style="width: 100%"
              id="step3"
              @click="div3()"
            >
              Friends
            </button>
            <button
              class="btn btn-warnings mt-4 shadow-none"
              style="width: 100%"
              id="step4"
              @click="div4()"
            >
              Office Hours
            </button>
            <button
              class="btn btn-warnings mt-4 shadow-none"
              style="width: 100%"
              id="step5"
              @click="div5()"
            >
              Gallery
            </button>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
          <div class="custom-card p-3" v-if="one">
            <h3>FEED</h3>
            <hr />
            <div class="card" style="background: #f9f9f9">
              <div class="container-fluid">
                <div class="row mt-2">
                  <div align="right">
                    <i class="fa fa-times" style="color: red"></i>
                    <br />
                    <span class="date"> 31-01-2020</span>
                  </div>
                </div>
                <div class="card-header" style="background: #f9f9f9">
                  <div class="row">
                    <div class="col-3">
                      <img
                        src="../../assets/main/user.png"
                        class="rounded-circle"
                        style="width: 100%"
                      />
                    </div>

                    <div class="col-9">
                      <div class="post-information mt-1">
                        <h5>Name Here</h5>
                        <h6>
                          Professor
                          <span style="color: #0776bd"
                            >- Al Al-Bayt University -</span
                          >
                          Jordan
                        </h6>
                        <span class="notes">Notes- </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-body">
                  <p class="postedBy">
                    <b>posted by:</b>
                    <span style="color: #0776bd"> Name Here</span>
                  </p>

                  <div class="post-data">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur scelerisque eros in feugiat feugiat. Curabitur
                      sollicitudin rutrum sollicitudin. Fusce tincidunt semper
                      mauris sed ultrices. Vivamus consectetur velit tincidunt
                      orci rutrum, sed faucibus quam elementum. Sed venenatis
                      tortor tortor, at viverra lorem gravida in. Vivamus
                      rutrum, ex ut congue ultricies, arcu justo auctor est,
                      vitae auctor nulla urna quis dui. Aenean faucibus, turpis
                      eget eleifend rhoncus, quam nisl ornare nulla, consectetur
                      malesuada massa erat eget lectus. Nulla pharetra ultrices
                      velit, ut tempor ligula suscipit non. Praesent eleifend
                      est nunc, in dictum orci bibendum eget. Nulla quis mauris
                      quis eros gravida finibus eget a mauris. Ut auctor
                      suscipit dui non sodales. Phasellus luctus dolor sit amet
                      fringilla venenatis. Vestibulum euismod risus eget lorem
                      semper gravida. Mauris nunc nulla, pellentesque vitae
                      condimentum rhoncus, euismod vel enim.
                    </p>
                  </div>

                  <div class="post-media">
                    <div class="entry">
                      <img
                        src="../../assets/main/post.png"
                        class="img-fluid"
                        alt="Responsive image"
                      />
                      <div class="magnifier">
                        <div class="magni-desc">
                          <a
                            class="secondicon example-image-link"
                            data-lightbox="example-set"
                          >
                            <span
                              class="fa fa-search-plus"
                              data-glyph="zoom-in"
                              title="Read More"
                              aria-hidden="false"
                              id="search-plus"
                            ></span
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>

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

                <div class="card-footer" style="background: #f9f9f9">
                  <div class="d-flex mb-3" style="float: left">
                    <i class="fa fa-check true"></i>
                    <i class="fa fa-times false"></i>
                    <i class="fa fa-lightbulb bulb"></i>
                  </div>

                  <div class="d-flex" style="float: right">
                    <span class="last">
                      <img src="../../assets/main/restore.png" />
                      Reply 0
                    </span>
                    <span class="last" style="margin-left: 10px">
                      <img src="../../assets/main/share.png" />
                      Share
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="custom-card p-3" v-if="two">
            Courses
            <hr />
            <div class="card" style="border-color: transparent">
              <div class="card-body">
                <div class="row">
                  <div class="col-xs-6 col-sm-6 col-md-4 col-lg-6 mt-3">
                    <div class="card">
                      <div class="card-body course">
                        <h3>Course Name</h3>
                        <h4 class="mt-2">Addedd | 15 Sep 2022</h4>
                        <button class="btn mt-2">Active</button>
                      </div>
                      <div class="card-footer course-footer">
                        <div class="row mb-2">
                          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <button class="btn btn-outline-primary mt-2">
                              Colleagues
                            </button>
                          </div>
                          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <button class="btn btn-outline-success mt-2">
                              All Students
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xs-6 col-sm-6 col-md-4 col-lg-6 mt-3">
                    <div class="card">
                      <div class="card-body course">
                        <h3>Course Name</h3>
                        <h4 class="mt-2">Addedd | 15 Sep 2022</h4>
                        <button class="btn mt-2">Active</button>
                      </div>
                      <div class="card-footer course-footer">
                        <div class="row mb-2">
                          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <button class="btn btn-outline-primary mt-2">
                              Colleagues
                            </button>
                          </div>
                          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <button class="btn btn-outline-success mt-2">
                              All Students
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xs-6 col-sm-6 col-md-4 col-lg-6 mt-3">
                    <div class="card">
                      <div class="card-body course">
                        <h3>Course Name</h3>
                        <h4 class="mt-2">Addedd | 15 Sep 2022</h4>
                        <button class="btn mt-2">Active</button>
                      </div>
                      <div class="card-footer course-footer">
                        <div class="row mb-2">
                          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <button class="btn btn-outline-primary mt-2">
                              Colleagues
                            </button>
                          </div>
                          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <button class="btn btn-outline-success mt-2">
                              All Students
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

          <div class="custom-card p-3" v-if="three">
            <div class="row">
              <div class="col-6">
                <p class="friends">Friends</p>
              </div>
              <div class="col-6" align="right">
                <span style="color: #0776bd">
                  Search For Others
                  <img
                    src="../../assets/classroom/record.png"
                    style="width: 10%"
                  />
                </span>
              </div>
            </div>

            <div class="card" style="border-color: transparent">
              <div class="card-body">
                <div class="row">
                  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-2">
                    <button
                      class="btn nav-link actives"
                      id="Friend1"
                      @click="First()"
                    >
                      All Friends
                    </button>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-2">
                    <button class="btn nav-link" id="Friend2" @click="Second()">
                      Colleagues
                    </button>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-2">
                    <button class="btn nav-link" id="Friend3" @click="Third()">
                      Following
                    </button>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-3 mt-2">
                    <button class="btn nav-link" id="Friend4" @click="Four()">
                      Followers
                    </button>
                  </div>
                </div>
              </div>

              <div
                class="card"
                v-if="Friends"
                style="border-color: transparent"
              >
                <div class="card-body">1</div>
              </div>

              <div
                class="card"
                v-if="Collegaues"
                style="border-color: transparent"
              >
                <div class="card-body">2</div>
              </div>

              <div
                class="card"
                v-if="Following"
                style="border-color: transparent"
              >
                <div class="card-body">
                  <div class="Following-data">
                    <div class="row p-3">
                      <div class="col-6">
                        <div class="row">
                          <div class="col-4">
                            <img
                              src="../../assets/main/university.png"
                              class="rounded-circle"
                              style="width: 100%"
                            />
                          </div>
                          <div class="col-8 mt-lg-4">
                            <span style="color: #0776bd"
                              >-University Name
                            </span>
                            <span class="text-muted">Jordan</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-6" align="right">
                        <button class="btn viewprofile mt-lg-5">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="Following-data mt-3">
                    <div class="row p-3">
                      <div class="col-6">
                        <div class="row">
                          <div class="col-4">
                            <img
                              src="../../assets/main/university.png"
                              class="rounded-circle"
                              style="width: 100%"
                            />
                          </div>
                          <div class="col-8 mt-lg-4">
                            <span style="color: #0776bd"
                              >-University Name
                            </span>
                            <span class="tetx-muted">Jordan</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-6" align="right">
                        <button class="btn viewprofile mt-lg-5">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="card"
                v-if="Followers"
                style="border-color: transparent"
              >
                <div class="card-body">4</div>
              </div>
            </div>
          </div>

          <div class="card" style="background: #f9f9f9" v-if="four">four</div>

          <div class="custom-card p-3" v-if="five">
            Gallery
            <hr />
            <div class="card mt-2" style="border: none">
              <div class="row">
                <div class="col-sm-12 col-xs-12 col-md-4 col-lg-4 mt-3">
                  <img
                    src="../../assets/main/post.png"
                    class="img-fluid"
                    style="width: 100"
                  />
                </div>

                <div class="col-sm-12 col-xs-12 col-md-4 col-lg-4 mt-3">
                  <img
                    src="../../assets/main/post.png"
                    class="img-fluid"
                    style="width: 100"
                  />
                </div>

                <div class="col-sm-12 col-xs-12 col-md-4 col-lg-4 mt-3">
                  <img
                    src="../../assets/main/post.png"
                    class="img-fluid"
                    style="width: 100"
                  />
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
  name: "My Desk",
  components: {
    Navbar,
    
  BackToTop,
  },
  data() {
    return {
      one: true,
      two: false,
      three: false,
      four: false,
      five: false,
      Friends: true,
      Collegaues: false,
      Following: false,
      Followers: false,
    };
  },
  methods: {
    div1() {
      this.one = true;
      this.two = false;
      this.three = false;
      this.four = false;
      this.five = false;
      var one = document.getElementById("step1");
      one.classList.add("active");
      var two = document.getElementById("step2");
      two.classList.remove("active");
      var three = document.getElementById("step3");
      three.classList.remove("active");
      var four = document.getElementById("step4");
      four.classList.remove("active");
      var five = document.getElementById("step5");
      five.classList.remove("active");
    },
    div2() {
      this.one = false;
      this.two = true;
      this.three = false;
      this.four = false;
      this.five = false;
      var one = document.getElementById("step1");
      one.classList.remove("active");
      var two = document.getElementById("step2");
      two.classList.add("active");
      var three = document.getElementById("step3");
      three.classList.remove("active");
      var four = document.getElementById("step4");
      four.classList.remove("active");
      var five = document.getElementById("step5");
      five.classList.remove("active");
    },
    div3() {
      this.one = false;
      this.two = false;
      this.three = true;
      this.four = false;
      this.five = false;
      var one = document.getElementById("step1");
      one.classList.remove("active");
      var two = document.getElementById("step2");
      two.classList.remove("active");
      var three = document.getElementById("step3");
      three.classList.add("active");
      var four = document.getElementById("step4");
      four.classList.remove("active");
      var five = document.getElementById("step5");
      five.classList.remove("active");
    },
    div4() {
      this.one = false;
      this.two = false;
      this.three = false;
      this.four = true;
      this.five = false;
      var one = document.getElementById("step1");
      one.classList.remove("active");
      var two = document.getElementById("step2");
      two.classList.remove("active");
      var three = document.getElementById("step3");
      three.classList.remove("active");
      var four = document.getElementById("step4");
      four.classList.add("active");
      var five = document.getElementById("step5");
      five.classList.remove("active");
    },
    div5() {
      this.one = false;
      this.two = false;
      this.three = false;
      this.four = false;
      this.five = true;
      var one = document.getElementById("step1");
      one.classList.remove("active");
      var two = document.getElementById("step2");
      two.classList.remove("active");
      var three = document.getElementById("step3");
      three.classList.remove("active");
      var four = document.getElementById("step4");
      four.classList.remove("active");
      var five = document.getElementById("step5");
      five.classList.add("active");
    },

    First() {
      this.Friends = true;
      this.Collegaues = false;
      this.Following = false;
      this.Followers = false;

      var one = document.getElementById("Friend1");
      one.classList.add("actives");
      var two = document.getElementById("Friend2");
      two.classList.remove("actives");
      var three = document.getElementById("Friend3");
      three.classList.remove("actives");
      var four = document.getElementById("Friend4");
      four.classList.remove("actives");
    },
    Second() {
      this.Friends = false;
      this.Collegaues = true;
      this.Following = false;
      this.Followers = false;
      var one = document.getElementById("Friend1");
      one.classList.remove("actives");
      var two = document.getElementById("Friend2");
      two.classList.add("actives ");
      var three = document.getElementById("Friend3");
      three.classList.remove("actives");
      var four = document.getElementById("Friend4");
      four.classList.remove("actives");
    },
    Third() {
      this.Friends = false;
      this.Collegaues = false;
      this.Following = true;
      this.Followers = false;

      var one = document.getElementById("Friend1");
      one.classList.remove("actives ");
      var two = document.getElementById("Friend2");
      two.classList.remove("actives ");
      var three = document.getElementById("Friend3");
      three.classList.add("actives ");
      var four = document.getElementById("actives");
      four.classList.remove("actives ");
    },
    Four() {
      this.Friends = false;
      this.Collegaues = false;
      this.Following = false;
      this.Followers = true;

      var one = document.getElementById("Friend1");
      one.classList.remove("actives ");
      var two = document.getElementById("Friend2");
      two.classList.remove("actives ");
      var three = document.getElementById("Friend3");
      three.classList.remove("actives ");
      var four = document.getElementById("Friend4");
      four.classList.add("actives ");
    },
  },
};
</script>

<style scoped>

header {
  position: relative;
  height: 400px;
  background: rgba(245, 245, 245,0.5);
  /* background-image: linear-gradient( rgba(245, 245, 245,0.5)); */
}



svg {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
}



.information h5 {
  color: black;
}
.information h6 {
  color: #777777;
}
.grades h5 {
  color: #004bb0;
  font-family: Arial;
  font-weight: 600;
  font-size: 40px;
}
#one {
  color: #004077;
  font-family: Arial;
  font-weight: 600;
}
#two {
  font-family: Arial;
  font-weight: 600;
  color: #f29934;
}
#three {
  font-family: Arial;
  font-weight: 600;
  color: #08c04d;
}
#four {
  font-family: Arial;
  font-weight: 600;
  color: #0c8df0;
}

.custom-card {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border: 0;
  border-radius: 18px;
  box-shadow: 0 8px 16px 0 rgb(162 169 204 / 24%);
  background-color: white;
}


/* Side Nav  */
.active {
  background-color: #ff9900;
  color: black !important;
  padding: 5px 8px !important;
  border-radius: 20px;
  border-color: transparent;
  outline: none;
  box-shadow: none;
}

.btn-warnings {
  color: black !important;
  outline: none;
  box-shadow: none;
}

.btn-warnings:focus {
  color: #fff;
  background-color: #ff9900;
  outline: none;
  box-shadow: none;
  padding: 5px 8px !important;
  border-radius: 20px;
  border-color: transparent;
}
.btn-warnings:hover {
  color: #fff;
  background-color: #ff9900;
  outline: none;
  box-shadow: none;
  padding: 5px 8px !important;
  border-radius: 20px;
  border-color: transparent;
}

/* Side Nav End */


/* Side Nav  Feed Css Starts */

.post-information h5 {
  color: #0776bd;
}

.post-data {
  color: #707070;
}

.post-image img {
  border: 1px solid black;
}

.post-image img:hover {
  cursor: pointer;
}
.post-condition {
  color: #707070;
}
.card-footer .fa {
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
.post-image img {
  margin-bottom: 15px;
  padding: 8px 3px;
  border: 1px solid #d6d6d6;
  border-radius: 8px;
  background: #fff;
  position: relative;
}

.entry {
  position: relative;
}

.magnifier {
  position: absolute;
  top: 0;
  cursor: pointer;
  background-color: rgba(39, 41, 61, 0.8);
  bottom: 0;
  right: 0;
  z-index: 0;
  zoom: 1;
  cursor: crosshair;
  filter: alpha(opacity=0);
  opacity: 0;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.entry:hover .magnifier {
  zoom: 1;
  left: 0 !important;
  filter: alpha(opacity=100);
  opacity: 1;
}

.magnifier .magni-desc {
  position: absolute;
  left: 0;
  top: 50%;
  text-align: center;
  /* bottom: 10px; */
  opacity: 0;
  width: 100%;
  /* margin: -20px auto; */
  display: block;
}

.entry:hover .magnifier .magni-desc {
  zoom: 1;
  filter: alpha(opacity=100);
  opacity: 1;
}

.magnifier .magni-desc h4 a,
.magnifier .magni-desc h4 {
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 400;
  text-decoration: none !important;
  text-transform: uppercase;
}

.magnifier .magni-desc p,
.magnifier .magni-desc a {
  color: #ffffff !important;
  cursor: pointer;
}

.magnifier .magni-desc p {
  letter-spacing: 1px;
  color: #aaa !important;
  font-size: 11px;
}

.magnifier .magni-desc .secondicon,
.magnifier .magni-desc .firsticon {
  position: absolute;
  margin: 0 !important;
  text-align: center;
  font-size: 25px !important;
  width: 35px;
  height: 35px;
  left: 10px;
  bottom: 20px;
  color: #ffffff !important;
  line-height: 35px;
  background-color: #000;
  display: inline-block;
  -webkit-transition: all 0.7s ease-in-out;
  -moz-transition: all 0.7s ease-in-out;
  -ms-transition: all 0.7s ease-in-out;
  -o-transition: all 0.7s ease-in-out;
  transition: all 0.7s ease-in-out;
  border-radius: 5px;
}

.blog-wrapper .magnifier .magni-desc .secondicon {
  left: 0;
  right: 0;
  bottom: 0;
  top: 20% !important;
  margin: -20px auto !important;
}

/*Side Nav Feed Css end here */


/* Side Nav My Courses */
.course {
  background-color: #efefef;
}

.course h3 {
  font-size: 15px;
  color: #0776bd;
}
.course h4 {
  font-size: 13px;
  color: #707070;
}
.course button {
  float: right;
  background: #093;
  color: white;
  font-size: 13px;
}
.course button:hover {
  background-color: #ff3434;
  color: white;
}

.course-footer {
  background-color: white;
}

.course-footer button {
  font-size: 12px;
  width: 100%;
}

/* Side Nav Courses End */


/* Side Nav Friends  */

.actives {
  color: #ffff !important;
  background-color: #ff9900;
  border-radius: 20px;
  padding: 5px 23px;
  /* font-size: 20px; */
  font-weight: 500;
}
.nav-link {
  padding: 5px 23px;
  /* font-size: 20px; */
  font-weight: 500;
  color: #777777;

  position: relative;
}
.nav-link:hover {
  color: #ffff;
  background-color: #ff9900;
  border-radius: 20px;
}

.nav-link:focus {
  color: #ffff;
  background-color: #ff9900;
  border-radius: 20px;
}

/* Side Nav Friends End */


/* Side Nav Friends  Following*/

.btn.viewprofile {
  color: #fff !important;
  border: 2px solid #0776bd;
  border-radius: 30px;
  padding: 1px 8px !important;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #0776bd;
  font-size: 14px;
  line-height: 1.5;
  outline: none;
  cursor: pointer;
}

.Following-data {
  border-radius: 18px;
  border: 1px solid #d6d6d6;
}

/* Side Nav Friends  Following End Here*/



@media only screen and (max-width: 600px) {
  header {
  position: relative;
  height: 550px;
  background: rgba(245, 245, 245,0.5);
  /* background-image: linear-gradient( rgba(245, 245, 245,0.5)); */
}
  .profile-image {
    display: flex;
    justify-content: center;
  }
  .update {
    display: flex;
    justify-content: center;
  }
  .update .btn {
    width: 50%;
  }

  .profile-image {
    width: 100%;
  }
  .information {
    margin-top: 13px;
    text-align: center;
  }
  .information h5 {
    font-size: 20px;
  }
  .information h6 {
    font-size: 15px;
  }
  .grades {
    text-align: center;
  }
  .grades h5 {
    font-size: 21px;
  }
  .grades p {
    font-size: 16px;
  }

  .post-information h5 {
    font-size: 10px;
  }
  .post-information h6 {
    font-size: 10px;
  }
  .notes {
    font-size: 10px;
  }
  .postedBy {
    font-size: 10px;
  }
  .post-data p {
    font-size: 10px;
  }
  .post-condition p {
    font-size: 10px;
  }
  .fa {
    font-size: 15px;
  }
  #search-plus {
    font-size: 20px;
  }
  .card-footer img {
    width: 30%;
  }
  .last {
    font-size: 10px;
  }
  .btn.post {
    font-size: 10px;
  }
  .magnifier .magni-desc .secondicon {
    right: 10px;
    left: auto;
    top: 30px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  header {
  position: relative;
  height: 600px;
  background: rgba(245, 245, 245,0.5);
  /* background-image: linear-gradient( rgba(245, 245, 245,0.5)); */
}
  .profile-image {
    display: flex;
    justify-content: center;
  }
  .profile-image {
    width: 100%;
  }

  .update {
    display: flex;
    justify-content: center;
  }
  .update .btn {
    width: 50%;
  }

  .information {
    margin-top: 10px;
    text-align: center;
  }

  .information h5 {
    font-size: 21px;
  }
  .information h6 {
    font-size: 16px;
  }

  .grades {
    text-align: center;
  }
  .grades h5 {
    font-size: 21px;
  }
  .grades p {
    font-size: 16px;
  }

  .post-information h5 {
    font-size: 10px;
  }
  .post-information h6 {
    font-size: 10px;
  }
  .notes {
    font-size: 10px;
  }
  .postedBy {
    font-size: 10px;
  }
  .post-data p {
    font-size: 10px;
  }
  .post-condition p {
    font-size: 10px;
  }
  .fa {
    font-size: 16px;
  }

  #search-plus {
    font-size: 20px;
  }

  .card-footer img {
    width: 30%;
  }
  .last {
    font-size: 10px;
  }
  .btn.post {
    font-size: 10px;
  }
  .magnifier .magni-desc .secondicon {
    right: 10px;
    left: auto;
    top: 60px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  header {
  position: relative;
  height: 400px;
  background: rgba(245, 245, 245,0.5);
  /* background-image: linear-gradient( rgba(245, 245, 245,0.5)); */
}
  .profile-image {
    width: 100%;
  }
  .update .btn {
    width: 100%;
  }
  .information {
    margin-top: 10px;
    text-align: left;
  }
  .information h5 {
    font-size: 22px;
  }
  .information h6 {
    font-size: 17px;
  }

  #one {
    font-size: 30px;
  }
  .border-color {
    border-left: 2px solid #aea6a677;
    max-height: 70px !important;
  }
  #two {
    font-size: 30px;
  }
  #three {
    font-size: 30px;
  }
  #four {
    font-size: 30px;
  }
  .grades {
    text-align: center;
    margin-top: 10px;
  }

  .grades h5 {
    font-size: 22px;
  }
  .grades p {
    font-size: 17px;
  }

  .post-information h5 {
    font-size: 10px;
  }
  .post-information h6 {
    font-size: 10px;
  }
  .notes {
    font-size: 10px;
  }
  .postedBy {
    font-size: 10px;
  }
  .post-data p {
    font-size: 10px;
  }
  .post-condition p {
    font-size: 10px;
  }

  .fa {
    font-size: 16px;
  }

  #search-plus {
    font-size: 20px;
  }

  .card-footer img {
    width: 30%;
  }
  .last {
    font-size: 10px;
  }
  .btn.post {
    font-size: 10px;
  }
  .magnifier .magni-desc .secondicon {
    right: 10px;
    left: auto;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {

header {
  position: relative;
  height: 500px;
  background: rgba(245, 245, 245,0.5);
  /* background-image: linear-gradient( rgba(245, 245, 245,0.5)); */
}




  .profile-image {
    width: 100%;
  }
  .update .btn {
    width: 100%;
  }
  .information {
    margin-top: 10px;
    text-align: left;
  }
  .information h5 {
    font-size: 23px;
  }
  .information h6 {
    font-size: 18px;
  }

  #one {
    font-size: 30px;
  }
  .border-color {
    border-left: 2px solid #aea6a677;
    max-height: 70px !important;
  }
  #two {
    font-size: 30px;
  }
  #three {
    font-size: 30px;
  }
  #four {
    font-size: 30px;
  }

  .grades {
    margin-top: 40px;
  }
  .grades h5 {
    font-size: 23px;
  }
  .grades p {
    font-size: 18px;
    margin-left: 10px;
  }
  /* Feed Css */
  .post-information h5 {
    font-size: 13px;
  }
  .post-information h6 {
    font-size: 13px;
  }
  .notes {
    font-size: 13px;
  }
  .postedBy {
    font-size: 13px;
  }
  .post-data p {
    font-size: 13px;
  }
  .post-condition p {
    font-size: 13px;
  }
  .fa {
    font-size: 13px;
  }

  #search-plus {
    font-size: 20px;
  }

  .card-footer img {
    width: 30%;
  }
  .last {
    font-size: 13px;
  }
  .btn.post {
    font-size: 13px;
  }
  .magnifier .magni-desc .secondicon {
    right: 10px;
    left: auto;
    top: 100px;
  }
  /* End Feed Css */
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {


header {
  position: relative;
  height: 500px;
  background: rgba(245, 245, 245,0.5);
  /* background-image: linear-gradient( rgba(245, 245, 245,0.5)); */
}







  .profile-image {
    width: 100%;
  }
  .update .btn {
    width: 100%;
  }
  .information {
    margin-top: 40px;
    text-align: left;
  }
  .information h5 {
    font-size: 24px;
  }
  .information h6 {
    font-size: 20px;
  }

  #one {
    font-size: 30px;
  }
  .border-color {
    border-left: 2px solid #aea6a677;
    max-height: 70px !important;
  }
  #two {
    font-size: 30px;
  }
  #three {
    font-size: 30px;
  }
  #four {
    font-size: 30px;
  }

  .grades {
    margin-top: 40px;
  }
  .grades h5 {
    font-size: 40px;
  }
  .grades p {
    font-size: 13px;
    margin-left: 15px;
  }

  /* Feed Css */
  .post-information h5 {
    font-size: 15px;
  }
  .post-information h6 {
    font-size: 15px;
  }
  .notes {
    font-size: 15px;
  }
  .postedBy {
    font-size: 15px;
  }
  .post-data p {
    font-size: 15px;
  }
  .post-condition p {
    font-size: 15px;
  }
  .fa {
    font-size: 25px;
  }

  #search-plus {
    font-size: 25px;
  }

  .card-footer img {
    width: 40%;
  }
  .last {
    font-size: 12px;
  }
  .btn.post {
    font-size: 15px;
  }
  .magnifier .magni-desc .secondicon {
    right: 10px;
    left: auto;
    top: 200px;
  }

  /* End */
}
</style>