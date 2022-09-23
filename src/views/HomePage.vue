<template>
  <div>
    <Navbar />

    <div class="container-fluid mt-2">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-2 info-card">
          <div class="card">
            <div class="card-header">
              <div class="profile">
                <img src="../assets/main/user.png" class="rounded-circle" />

                <p class="name">{{ userName }}</p>
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
              <h5 id="uni">{{ universityName }}</h5>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2 info-card">
          <form @submit.prevent="submit">
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
                    v-model="form.notes"
                  />
                </div>

                <div class="customm-file" align="right">
                  <input
                    class="customm-file-input"
                    id="postf"
                    name="postf"
                    type="file"
                    @change="file($event)"
                  />
                  <label class="customm-file-label" for="custommFile"
                    ><img src="../assets/file.png" class="mr-3" />Upload
                    Attachment</label
                  >
                </div>
              </div>

              <div class="card-body">
                <div class="row firstSelect">
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3 mt-2">
                    <label class="lablefirst">Select Course</label>
                    <select
                      class="mt-2"
                      v-model="form.course"
                      id="course"
                      name="course"
                    >
                      <option value="one">One</option>
                      <option value="two">two</option>
                    </select>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3 mt-2">
                    <label class="lablefirst">Select Type</label>
                    <select class="mt-2" v-model="form.type">
                      <option value="Lecture">Lecture</option>
                      <option value="Exam">Exam</option>
                      <option value="Reference">Reference</option>
                      <option value="Home Work">Home Work</option>
                      <option value="Books">Books</option>
                      <option value="Notes">Notes</option>
                    </select>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3 mt-2">
                    <label class="lablefirst">Who Can See?</label>
                    <select class="mt-2" v-model="form.privacy">
                      <option value="Everyone">Everyone</option>
                      <option value="My Major">My Major</option>
                      <option value="Friends">Friends</option>
                      <option value="Colleagues">Colleagues</option>
                    </select>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 mt-4">
                    <button class="btn post">POST</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
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

              <div class="mt-4 buttons" align="right">
                <button class="btn clear">Clear</button>
                <button class="btn filterBtn">Filter</button>
              </div>
            </div>
          </div>

          <div
            class="card mt-4"
            style="background: #f9f9f9"
            v-for="item in items"
            :key="item.id"
          >
            <div class="container-fluid">
              <div class="row mt-2">
                <div align="right">
                  <i
                    class="fa fa-times"
                    style="color: red"
                    @click="remove()"
                  ></i>
                  <br />
                  <span class="date"> {{ item.date }} </span>
                </div>
              </div>
              <div class="card-header" style="background: #f9f9f9">
                <div class="row">
                  <div class="col-3">
                    <img
                      :src="item.img"
                      class="rounded-circle"
                      style="width: 100%"
                    />
                  </div>

                  <div class="col-9">
                    <div class="post-information mt-1">
                      <h5>{{ item.Name }}</h5>
                      <h6>
                        {{ item.profession }}
                        <span style="color: #0776bd"
                          >- {{ item.university }} -</span
                        >
                        {{ item.place }}
                      </h6>
                      <span class="notes">{{ item.dataType }} </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-body">
                <p class="postedBy">
                  <b>posted by:</b>
                  <span style="color: #0776bd"> {{ item.postName }}</span>
                </p>

                <div class="post-data">
                  <p>
                    {{ item.postData }}
                  </p>
                </div>

                <div class="post-media">
                  <div class="entry">
                    <img
                      :src="item.image"
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
                    <span style="color: #05d134" true-value="1" false-value="0">
                      {{ special }}
                    </span>
                    TRUE
                  </p>
                  <p class="p-1">
                    <span style="color: #f75555" true-value="1" false-value="0"
                      >{{ special1 }}
                    </span>
                    FALSE
                  </p>
                  <p class="p-1">
                    <span style="color: #ffcc00" true-value="1" false-value="0">
                      {{ special2 }}</span
                    >
                    HIGHLIGHT
                  </p>
                </div>
              </div>

              <div class="card-footer" style="background: #f9f9f9">
                <div class="d-flex mt-2 mb-2" style="float: left">
                  <i
                    class="fa fa-check true"
                    @click="trueValue()"
                    id="green"
                  ></i>
                  <i
                    class="fa fa-times false"
                    @click="falseValue()"
                    id="red"
                  ></i>
                  <i
                    class="fa fa-lightbulb bulb"
                    @click="highValue()"
                    id="yellow"
                  ></i>
                </div>

                <div class="d-flex mb-2 mt-2" style="float: right">
                  <span class="last">
                    <img src="../assets/main/restore.png" />
                    Reply 0
                  </span>
                  <span class="last" style="margin-left: 10px">
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
              <span class="active"> Top Active Students</span>
              <hr />

              <div
                class="profile mt-2"
                v-for="item in studentItems"
                :key="item.id"
              >
                <img :src="item.img" class="rounded-circle" />

                <p class="name">{{ item.student }}</p>
              </div>

              <span class="seeMore">See More... </span>
            </div>
          </div>
          <div class="card mt-4">
            <div class="card-body">
              <span class="active">Top Active Instructors</span>
              <hr />
              <div
                class="profile mt-2"
                v-for="item in instructorItems"
                :key="item.id"
              >
                <img :src="item.img" class="rounded-circle" />

                <p class="name">{{ item.instructor }}</p>
              </div>

              <span class="seeMore">See More... </span>
            </div>
          </div>
          <div class="card mt-4">
            <div class="card-body">
              <span class="active">Top Active Universities</span>
              <hr />
              <div class="profile">
                <img
                  src="../assets/main/university.png"
                  class="rounded-circle"
                />

                <p class="name">University 1</p>
              </div>

              <div class="profile mt-3">
                <img
                  src="../assets/main/university.png"
                  class="rounded-circle"
                />

                <p class="name">University 2</p>
              </div>

              <div class="profile mt-2">
                <img
                  src="../assets/main/university.png"
                  class="rounded-circle"
                />

                <p class="name">University 3</p>
              </div>

              <div class="profile mt-2">
                <img
                  src="../assets/main/university.png"
                  class="rounded-circle"
                />

                <p class="name">University 4</p>
              </div>
              <span class="seeMore">See More... </span>
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
import image from "../assets/main/user.png";
import PostImage from "../assets/main/post.png";
import studentImage from "../assets/main/user.png";
import instructorImage from "../assets/main/instructor.png";
export default {
  name: "HomePage",
  components: {
    Navbar,
    BackToTop,
  },
  data() {
    return {
      // user Name
      userName: "Name Here",
      //
      // University Name
      universityName: "University Name Here",
      //

      special: 0,
      special1: 0,
      special2: 0,

      items: [
        {
          date: "05-02-1998",
          img: image,
          name: "Name",
          profession: "Professor",
          university: "University Name",
          place: "Jordan",
          dataType: "Notes",
          postName: " Name  Here",
          postData:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque eros in feugiat feugiat. Curabitur sollicitudin rutrum sollicitudin. Fusce tincidunt semper mauris sed ultrices. Vivamus consectetur velit tincidunt orci rutrum, sed faucibus quam elementum. Sed venenatis tortor tortor, at viverra lorem gravida in. Vivamus rutrum, ex ut congue ultricies, arcu justo auctor est, vitae auctor nulla urna quis dui. Aenean faucibus, turpis eget eleifend rhoncus, quam nisl ornare nulla, consectetur malesuada massa erat eget lectus. Nulla pharetra ultrices velit, ut tempor ligula suscipit non. Praesent eleifend est nunc, in dictum orci bibendum eget. Nulla quis mauris quis eros gravida finibus eget a mauris. Ut auctor suscipit dui non sodales. Phasellus luctus dolor sit amet fringilla venenatis. Vestibulum euismod risus eget lorem semper gravida. Mauris nunc nulla, pellentesque vitae condimentum rhoncus, euismod vel enim.",
          image: PostImage,
          // true: "1",
          // false: "1",
          // highlight: "0",
        },
      ],

      form: {
        notes: "",
        attachments: "",
        course: "Choose One",
        type: "Choose One",
        privacy: "Choose One",
      },

      // Top Active Students
      studentItems: [
        {
          img: studentImage,
          student: "Student1",
        },
        {
          img: studentImage,
          student: "Student2",
        },
        {
          img: studentImage,
          student: "Student3",
        },
        {
          img: studentImage,
          student: "Student4",
        },
      ],
      //

      // Top Active Instructors
      instructorItems: [
        {
          img: instructorImage,
          instructor: "Instructor1",
        },
        {
          img: instructorImage,
          instructor: "Instructor2",
        },
        {
          img: instructorImage,
          instructor: "Instructor3",
        },
        {
          img: instructorImage,
          instructor: "Instructor4",
        },
      ],

      universityItems: [{}],

      //
    };
  },
  methods: {
    submit() {
      if (this.form.notes == "") {
        this.$toasted.error("Please Share Something");
        return;
      }
      if (this.form.attachments == "") {
        this.$toasted.error("Please Select File");
        return;
      }
      if (this.form.course == "") {
        this.$toasted.error("Please Select course");
        return;
      }
      if (this.form.type == "") {
        this.$toasted.error("Please Select One Type");
        return;
      }
      if (this.form.privacy == "") {
        this.$toasted.error("Please Select One Type");
        return;
      } else {
        console.log(this.form);
        this.$toasted.success("Your Post is Shared");
      }
    },
    file(event) {
      this.form.attachments = event.target.files;
      console.log(this.form.attachments);
    },

    remove() {
      this.$swal({
        icon: "warning",
        title: "Are You Sure you want to delete?",
        showConfirmButton: true,
      });
    },
    trueValue() {
      if (this.special == 0) {
        this.special = 1;
        document.getElementById("green").style.color = "#21b721";
        this.$toasted.success("Marked As True");
      } else if (this.special == 1) {
        this.special = 0;
        document.getElementById("green").style.color = "#777777";
        this.$toasted.error("Un Marked As True");
      }
    },
    falseValue() {
      if (this.special1 == 0) {
        this.special1 = 1;
        document.getElementById("red").style.color = "#dc1919";
        this.$toasted.success("Marked As False");
      } else if (this.special1 == 1) {
        this.special1 = 0;
        document.getElementById("red").style.color = "#777777";
        this.$toasted.error("Un Marked As False");
      }
    },
    highValue() {
      if (this.special2 == 0) {
        this.special2 = 1;
        document.getElementById("yellow").style.color = "#ffc210";
        this.$toasted.success("Marked As Highlight");
      } else if (this.special2 == 1) {
        this.special2 = 0;
        document.getElementById("yellow").style.color = "#777777";
        this.$toasted.error("Un Marked As Highlight");
      }
    },
  },
};
</script>

<style scoped>
.customm-file-input {
  z-index: 2;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin: 0;
  opacity: 0;
}

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
}
.value h5 {
  color: #0776bd;
}
.second h5 {
  color: black;
}
.second #uni {
  color: #0776bd;
}
.seeMore {
  float: right;
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
  outline: none;
  cursor: pointer;
  width: 100%;
}
.firstSelect select {
  border-radius: 0px;
  background: transparent;
  border-width: 0 0 0px;
  width: 100%;
  /* color: #bdbdbd; */
  color: black;
}
.firstSelect select:focus {
  box-shadow: none;
  outline: none !important;
}
.date {
  color: #707070;
}
.firstSelect label {
  /* color: #bdbdbd; */
  color: black;
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

  line-height: 1.5;
  outline: none;
  cursor: pointer;
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
.fa {
  cursor: pointer;
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
    width: 20%;
  }
  .date {
    font-size: 15px;
  }
  .name {
    font-size: 15px;
    margin: 15px 0px 0px 10px;
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