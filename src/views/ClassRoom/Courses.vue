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
                  <div class="col-3 ">
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
                    src="../../assets/main/post.png"
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
                <div class="d-flex mt-2 mb-2" style="float: left">
                  <i class="fa fa-check true"></i>
                  <i class="fa fa-times false"></i>
                  <i class="fa fa-lightbulb bulb"></i>
                </div>

                <div class="d-flex mb-2 mt-2" style="float: right">
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
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";

export default {
  name: "Courses",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.course-card {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border: 0;
  border-radius: 18px;
  box-shadow: 0 8px 16px 0 rgb(162 169 204 / 24%);
}
.card-text p {
  font-size: 18px;
  font-family: Segoe UI;
  color: #707070;
  padding: 18px 0px 0px 24px;
}

select {
  background-color: #fff;
  border: 0px;
  border-bottom: 1px solid #ececec;
  border-radius: 0px;
  outline: 0;
}









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








@media only screen and (max-width: 600px) {
  .profile img {
    width: 12%;
  }
  .date {
    font-size: 10px;
  }
  .name {
    font-size: 12px;
    margin: 12px 0px 0px 5px;
  }

  .information h5 {
    font-size: 10px;
  }
  .value h5 {
    font-size: 10px;
  }
  .second h5 {
    font-size: 10px;
  }
  .active {
    font-size: 10px;
  }
  .seeMore {
    font-size: 10px;
  }

  .lablefirst {
    font-size: 10px;
  }
  .firstSelect select {
    font-size: 10px;
  }
  .filter select {
    font-size: 10px;
  }
  .filter label {
    font-size: 10px;
  }
  .buttons button {
    font-size: 10px;
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
  .profile img {
    width: 10%;
  }
  .date {
    font-size: 10px;
  }
  .name {
    font-size: 13px;

    margin: 25px 0px 0px 5px;
  }
  .information h5 {
    font-size: 10px;
  }
  .value h5 {
    font-size: 10px;
  }
  .second h5 {
    font-size: 10px;
  }
  .active {
    font-size: 10px;
  }
  .seeMore {
    font-size: 10px;
  }
  .lablefirst {
    font-size: 10px;
  }
  .firstSelect select {
    font-size: 10px;
  }
  .filter select {
    font-size: 10px;
  }
  .filter label {
    font-size: 10px;
  }
  .buttons button {
    font-size: 10px;
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
    top: 120px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .profile img {
    width: 30%;
  }
  .date {
    font-size: 10px;
  }
  .name {
    font-size: 12px;
    margin: 13px 0px 0px 5px;
  }

  .information h5 {
    font-size: 10px;
  }
  .value h5 {
    font-size: 10px;
  }
  .second h5 {
    font-size: 10px;
  }
  .active {
    font-size: 10px;
  }
  .seeMore {
    font-size: 10px;
  }
  .lablefirst {
    font-size: 10px;
  }
  .firstSelect select {
    font-size: 10px;
  }
  .filter select {
    font-size: 10px;
  }
  .filter label {
    font-size: 10px;
  }
  .buttons button {
    font-size: 10px;
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

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .profile img {
    width: 30%;
  }
  .date {
    font-size: 13px;
  }
  .name {
    font-size: 13px;
    margin: 20px 0px 0px 7px;
  }

  .information h5 {
    font-size: 13px;
  }
  .value h5 {
    font-size: 13px;
  }
  .second h5 {
    font-size: 13px;
  }
  .active {
    font-size: 13px;
  }
  .seeMore {
    font-size: 13px;
  }
  .lablefirst {
    font-size: 13px;
  }
  .firstSelect select {
    font-size: 13px;
  }

  .filter select {
    font-size: 13px;
  }
  .filter label {
    font-size: 13px;
  }
  .buttons button {
    font-size: 13px;
  }
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
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .profile img {
    width: 30%;
  }
  .date {
    font-size: 15px;
  }
  .name {
    font-size: 15px;
    margin: 30px 0px 0px 10px;
  }
  .information h5 {
    font-size: 15px;
  }
  .value h5 {
    font-size: 15px;
  }
  .second h5 {
    font-size: 15px;
  }
  .active {
    font-size: 15px;
  }
  .seeMore {
    font-size: 15px;
  }
  .lablefirst {
    font-size: 15px;
  }
  .firstSelect select {
    font-size: 15px;
  }
  .filter select {
    font-size: 15px;
  }
  .filter label {
    font-size: 15px;
  }
  .buttons button {
    font-size: 15px;
  }
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
    top: 140px;
  }
}
</style>