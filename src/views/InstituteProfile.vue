<template>
  <div>
    <Navbar />

    <div id="containers">
      <img :src="cover_img" class="backImg" />
      <div class="top-left">
        <img :src="profile_img" class="rounded-circle" />
        <br />
        <button class="btn btn-follow mt-2">Follow</button>
      </div>
    </div>
    <div class="container" id="second">
      <div class="card ad-card institiute-margin">
        <div class="row p-lg-4 p-md-3">
          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
            <div class="information">
              <h5>University Name Here</h5>
              <h6>University Address</h6>
              <p>Date</p>
            </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-9 col-lg-8">
            <div class="row card-data pb-4">
              <div class="col-2">
                <div class="value">
                  <h3 class="mb-0">0</h3>
                </div>
                <div class="names">Feed</div>
              </div>
              <div class="col-2" id="border">
                <div class="value1">
                  <h3 class="mb-0">0</h3>
                </div>
                <div class="names">Major</div>
              </div>
              <div class="col-2" id="border">
                <div class="value2">
                  <h3 class="mb-0">0</h3>
                </div>
                <div class="names">Courses</div>
              </div>
              <div class="col-2" id="border">
                <div class="value3">
                  <h3 class="mb-0">0</h3>
                </div>
                <div class="names">Instructors</div>
              </div>
              <div class="col-2" id="border">
                <div class="value4">
                  <h3 class="mb-0">0</h3>
                </div>
                <div class="names">Students</div>
              </div>
              <div class="col-2" id="border">
                <div class="value5">
                  <h3 class="mb-0">0</h3>
                </div>
                <div class="names">Followers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="card second-card p-lg-3">
          <div class="card-body">
            <h5>About</h5>
            <div class="inf-text">
              <h6>Vision</h6>
              <p>
                A pioneering university in constructing knowledge, promoting
                scientific research and providing distinguished community
                services striving to compete with leading universities.
              </p>
            </div>
            <div class="inf-text">
              <h6>Vision</h6>
              <p>
                Providing high quality academic programs to prepare well –
                qualified individuals to fulfill the future demands of
                employment, conduct scientific research that contributes to
                solving social problems and ensure the availability of an
                attractive university environment .
              </p>
            </div>
            <div class="inf-text">
              <h6>Contact</h6>
              <p>Tel:Number</p>
              <p>Fax:Number</p>
              <p>email:email</p>
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
import ContentDataService from "../services/ContentDataService";

export default {
  name: "InstituteProfile",
  components: {
    Navbar,
    BackToTop,
  },

  data() {
    return {
      profile_img: "",
      cover_img: "",
    };
  },

  created() {
    this.getProfile();
  },

  methods: {
    getProfile() {
      ContentDataService.getInstituteProfile().then((response) => {
        console.log(response.data.data);
        var a = response.data.data;
        var b = Object.values(a);
        this.ActiveInstitutes = b[0];
        this.profile_img =
          "http://passdoneapi.codetreck.com/public/" +
          response.data.data.profile_pic;

        this.cover_img =
          "http://passdoneapi.codetreck.com/public/" +
          response.data.data.cover_picture;
      });
    },
  },
};
</script>

<style scoped>
#containers {
  position: relative;
  text-align: center;
  color: white;
}
#second {
  position: absolute;

  left: 50%;
  transform: translate(-50%, -50%);
}
.top-left {
  position: absolute;
  top: 20px;
  left: 100px;
}

.backImg {
  width: 100%;
  height: 400px;
}

.ad-card {
  margin-bottom: 15px;
  padding: 3px;
  border: 0;
  border-radius: 12px;
  box-shadow: 0 8px 16px 0 rgb(162 169 204 / 24%);
}

.second-card {
  padding: 3px;
  border: 0;
  border-radius: 12px;
  box-shadow: 0 8px 16px 0 rgb(162 169 204 / 24%);
}

.rounded-circle {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: #fff;
  padding: 5px;
  border: 3px solid #957bff;
}

.information h5 {
  font-weight: 500;
  color: #4b4b4b;
}
.information h6 {
  font-weight: 500;
  color: #707070;
}

.information p {
  color: #707070;
  font-weight: 500;
}

.value {
  color: #f97c7c;
}
.value1 {
  color: #b0009e;
}
.value2 {
  color: #004077;
}
.value3 {
  color: #1ac55a;
}
.value4 {
  color: #0c8df0;
}
.value5 {
  color: #f29934;
}

.btn-follow {
  color: #fff !important;
  border: 2px solid #08c04d;
  border-radius: 30px;
  padding: 1px 20px !important;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #08c04d;
  font-size: 14px;
  line-height: 1.5;
  outline: none;

  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .information {
    text-align: center;
  }
  #second {
    top: 55%;
  }
  .information h5 {
    font-size: 13px;
  }
  .information h6 {
    font-size: 12px;
  }

  .information p {
    font-size: 11px;
  }
  .card-data h3 {
    font-size: 18px;
  }
  .names {
    font-size: 8px;
  }
  .second-card {
    margin-top: 60px;
  }
  .inf-text h6 {
    font-size: 14px;
  }
  .inf-text p {
    font-size: 12px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .information {
    text-align: center;
  }
  #second {
    top: 70%;
  }
  .information h5 {
    font-size: 14px;
  }
  .information h6 {
    font-size: 13px;
  }

  .information p {
    font-size: 12px;
  }
  .card-data h3 {
    font-size: 22px;
  }
  .names {
    font-size: 12px;
  }
  .second-card {
    margin-top: 60px;
  }
  .inf-text h6 {
    font-size: 15px;
  }
  .inf-text p {
    font-size: 13px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .information {
    text-align: left;
  }
  #second {
    top: 65%;
  }
  .information h5 {
    font-size: 15px;
  }
  .information h6 {
    font-size: 14px;
  }

  .information p {
    font-size: 13px;
  }

  .card-data h3 {
    font-size: 25px;
  }
  .names {
    font-size: 12px;
  }
  #border {
    border-left: 2px solid #aea6a677;
  }
  .second-card {
    margin-top: 80px;
  }
  .inf-text h6 {
    font-size: 16px;
  }
  .inf-text p {
    font-size: 14px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .information {
    text-align: left;
  }
  #second {
    top: 70%;
  }
  .information h5 {
    font-size: 17px;
  }
  .information h6 {
    font-size: 16px;
  }

  .information p {
    font-size: 15px;
  }

  .card-data h3 {
    font-size: 26px;
  }
  .names {
    font-size: 15px;
  }
  #border {
    border-left: 2px solid #aea6a677;
  }
  .second-card {
    margin-top: 90px;
  }
  .inf-text h6 {
    font-size: 17px;
  }
  .inf-text p {
    font-size: 15px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .top-left {
    top: 20px;
    left: 100px;
  }
  #second {
    top: 75%;
  }

  .information {
    text-align: left;
  }
  .information h5 {
    font-size: 18px;
  }
  .information h6 {
    font-size: 17px;
  }

  .information p {
    font-size: 16px;
  }

  .card-data h3 {
    font-size: 30px;
  }

  .names {
    font-size: 20px;
  }
  #border {
    border-left: 2px solid #aea6a677;
  }

  .second-card {
    margin-top: 100px;
  }
  .inf-text h6 {
    font-size: 18px;
  }
  .inf-text p {
    font-size: 16px;
  }
}
</style>