<template>
  <div>
    <Navbar />
    <div class="background">
      <div class="back-image">
        <img
          src="../assets/main/ground.jpg"
          class="img-fluid"
          style="width: 100%; height: 400px"
        />
      </div>
      <div class="profile-img">
        <img v-if="profile_img" :src="profile_img" class="rounded-circle" />
        <img v-else src="../assets/main/user.png" class="rounded-circle" />
      </div>
      <div class="profile-button">
        <button class="btn btn-follow mt-3">Follow</button>
      </div>
    </div>
    <div class="card ad-card p-4 mb-4">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
          <div class="information">
            <h5>{{ uniName }}</h5>
            <h6>{{ uniAddress }}</h6>
            <p>{{ datetime }}</p>
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
          <div class="row card-data">
            <div class="col-2">
              <div class="value">
                <h3 class="mb-0">{{ Feed }}</h3>
              </div>
              <div class="names">Feed</div>
            </div>
            <div class="col-2" id="border">
              <div class="value1">
                <h3 class="mb-0">{{ Major }}</h3>
              </div>
              <div class="names">Major</div>
            </div>
            <div class="col-2" id="border">
              <div class="value2">
                <h3 class="mb-0">{{ Course }}</h3>
              </div>
              <div class="names">Courses</div>
            </div>
            <div class="col-2" id="border">
              <div class="value3">
                <h3 class="mb-0">{{ Instructor }}</h3>
              </div>
              <div class="names">Instructors</div>
            </div>
            <div class="col-2" id="border">
              <div class="value4">
                <h3 class="mb-0">{{ Students }}</h3>
              </div>
              <div class="names">Students</div>
            </div>
            <div class="col-2" id="border">
              <div class="value5">
                <h3 class="mb-0">{{ Followers }}</h3>
              </div>
              <div class="names">Followers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="mt-5">
      <div class="card second-card">
        <div class="card-body">
          <h5>About</h5>
          <div class="inf-text">
            <p>
              {{ About }}
            </p>
          </div>

          <div class="inf-text">
            <h6>
              Contact: <b style="color: red">{{ contact }} </b>
            </h6>
            <p>Tel:Number : {{ contact }}</p>

            <p>email: {{ email }}</p>
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
// import img from "../assets/main/user.png";

export default {
  name: "InstituteProfile",
  components: {
    Navbar,
    BackToTop,
  },

  data() {
    return {
      pageName: "",
      uniName: "",
      uniAddress: "",
      datetime: "",

      About: "",
      contact: "",
      email: "",
      profile_img: "",
      cover_img: "",

      Feed: "",
      Major: "",
      Course: "",
      Instructor: "",
      Students: "",
      Followers: "",
    };
  },

  created() {
    this.getFeed();
    this.getMajor();
    this.getCourse();
    this.getInstructor();
    this.getStudents();
    this.getFollowers();
  },

  beforeCreate() {
    (this.pageName = this.$route.params.id),
      ContentDataService.getInstituteProfileTwo(this.pageName).then(
        (response) => {
          console.log(response.data.data);
          this.uniName = response.data.data.name;
          this.uniAddress = response.data.data.address;
          this.datetime = response.data.data.created_at;

          this.About = response.data.data.about;
          this.contact = response.data.data.contact_imformation;
          this.email = response.data.data.email;
        }
      );
  },

  methods: {
    getFeed() {
      ContentDataService.getInstituteFeedId().then((response) => {
        this.Feed = response.data.data;
      });
    },

    getMajor() {
      ContentDataService.getInstituteMajorId().then((response) => {
        this.Major = response.data.data;
      });
    },
    getCourse() {
      ContentDataService.getInstituteCourseId().then((response) => {
        this.Course = response.data.data;
      });
    },
    getInstructor() {
      ContentDataService.getInstituteInstructorId().then((response) => {
        this.Instructor = response.data.data;
      });
    },
    getStudents() {
      ContentDataService.getInstituteStudentsId().then((response) => {
        this.Students = response.data.data;
      });
    },
    getFollowers() {
      ContentDataService.getInstituteFollowersId().then((response) => {
        this.Followers = response.data.data;
      });
    },
  },
};
</script>

<style scoped>
.back-image {
  position: relative;
}
.profile-img {
  position: absolute;
  
}
.profile-button {
  position: absolute;
 
}

.background {
  position: relative;
}

.ad-card {
  border: 0;
  border-radius: 12px;
  box-shadow: 0 8px 16px 0 rgb(162 169 204 / 24%);
  width: 100%;
  position: absolute;
 
}

.second-card {
  padding: 3px;
  border: 0;
  border-radius: 12px;
  box-shadow: 0 8px 16px 0 rgb(162 169 204 / 24%);
}

.rounded-circle {
  
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

  .profile-img {
    top: 2%;
    left: 35%;
  }
  .profile-button {
    top: 30%;
    left: 35%;
  }

  .ad-card {
    top: 40%;
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

  .inf-text h6 {
    font-size: 14px;
  }
  .inf-text p {
    font-size: 12px;
  }



.rounded-circle {
  width: 110px;
  height: 110px;
 
}





}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .information {
    text-align: center;
  }

  .profile-img {
    top: 5%;
    left: 45%;
  }
  .profile-button {
    top: 35%;
    left: 47%;
  }

  .ad-card {
    top: 50%;
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

  .inf-text h6 {
    font-size: 15px;
  }
  .inf-text p {
    font-size: 13px;
  }



.rounded-circle {
  width: 120px;
  height: 120px;
 
}




}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .information {
    text-align: left;
  }

  .profile-img {
    top: 8%;
    left: 5%;
  }
  .profile-button {
    top: 40%;
    left: 7%;
  }

  .ad-card {
    top: 50%;
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

  .inf-text h6 {
    font-size: 16px;
  }
  .inf-text p {
    font-size: 14px;
  }



.rounded-circle {
  width: 130px;
  height: 130px;
 
}


}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .information {
    text-align: left;
  }

  .profile-img {
    top: 10%;
    left: 5%;
  }
  .profile-button {
    top: 45%;
    left: 8%;

  }

  .ad-card {
    top: 60%;
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

  .inf-text h6 {
    font-size: 17px;
  }
  .inf-text p {
    font-size: 15px;
  }


.rounded-circle {
  width: 150px;
  height: 150px;
 
}

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .profile-img {
    top: 10%;
    left: 16px;
  }
  .profile-button {
    top: 50%;
    left: 4%;
  }

  .background {
    position: relative;
  }

  .ad-card {
    top: 60%;
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

  .inf-text h6 {
    font-size: 18px;
  }
  .inf-text p {
    font-size: 16px;
  }



.rounded-circle {
  width: 170px;
  height: 170px;
 
}



}
</style>