<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <div class="card ad-card mt-2">
            <img src="../../assets/Library/sponser.png" />
          </div>

          <div class="card ad-card">
            <img src="../../assets/Library/ielts.png" />
          </div>

          <div class="card ad-card">
            <img src="../../assets/Library/google.png" />
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 mt-2">
          <div class="custom-card p-3">
            <div class="row">
              <div class="col-6"><h4 class="courses">Manage Courses</h4></div>
              <div class="col-6">
                <div class="card-options crd" style="cursor: pointer">
                  <a @click="$refs.modalName1.openModal()">
                    <i
                      class="fa-sharp fa-solid fa-circle-plus"
                      style="margin-right: 5px"
                    ></i>
                  </a>

                  <h4 class="manage-semester">Add New</h4>
                </div>
              </div>
            </div>
            <hr />

            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-3">
                    <div class="card" style="background: #efefef">
                      <div class="card-body course">
                        <i
                          class="fa fa-times"
                          style="float: right; color: #e71126"
                        ></i>
                        <h3>Course Name</h3>
                        <h4 class="mt-2">Addedd | 15 Sep 2022</h4>
                        <button class="btn mt-2">Active</button>
                      </div>
                    </div>
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-3">
                    <div class="card" style="background: #efefef">
                      <div class="card-body course">
                        <i
                          class="fa fa-times"
                          style="float: right; color: #e71126"
                        ></i>
                        <h3>Course Name</h3>
                        <h4 class="mt-2">Addedd | 15 Sep 2022</h4>
                        <button class="btn mt-2">Active</button>
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

    <modal ref="modalName1">
      <template v-slot:header>
        <h5 style="color: #3390ff">Add New Courses</h5>

        <div class="row mt-4">
          <div class="col-2">
            <img
              src="../../assets/main/user.png"
              class="rounded-circle"
              style="width: 100%"
            />
          </div>
          <div class="col-10">
         <b>   <p class="mt-lg-4 mt-md-4" style="color:#707070">Name</p></b>
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-12">
            <multiselect
              style="
                border: 1px solid #dddddd !important;

                border-left: 5px solid #f95858 !important ;
              "
              class="mt-2"
              :options="degree.map((user) => user.id)"
              :custom-label="(opt) => degree.find((x) => x.id == opt).name"
              label="name"
              track-by="name"
              v-model="form.course"
              placeholder="Choose One"
            >
            </multiselect>
          </div>
          <div class="col-12 mt-4">
            <label> <b>Instructor Name</b> </label>
            <multiselect
              style="
                border: 1px solid #dddddd !important;
                border-left: 5px solid #dddddd !important ;
              "
              class="mt-3"
              :options="degree.map((user) => user.id)"
              :custom-label="(opt) => degree.find((x) => x.id == opt).name"
              label="name"
              track-by="name"
              v-model="form.course"
              placeholder="Select/Search for Course Name"
            >
            </multiselect>
          </div>

          <div class="col-12 mt-4">
            <div align="right">
              <button class="btn btn-addcourse">Save Changes</button>
            </div>
          </div>
        </div>
      </template>
    </modal>

    <BackToTop />
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import BackToTop from "../../components/BackToTop.vue";
import Modal from "../../components/Modal.vue";
import ContentDataService from "../../services/ContentDataService";

export default {
  name: "ManageCourse",
  components: {
    Navbar,
    BackToTop,
    Modal,
  },

  data() {
    return {
      degree: [],
      form: {
        course: [],
      },
    };
  },

  methods: {
    getMajors() {
      var id = localStorage.getItem("user_id");
      ContentDataService.getMajor(id).then((response) => {
        this.degree = response.data.data;
      });
    },
  },
};
</script>

<style scoped>
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
}

.card-options {
  margin-left: auto;
  display: flex;
  -ms-flex-order: 100;
  order: 100;
  margin-right: -0.5rem;
  color: #0776bd;
  float: right;
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
.manage-semester {
  color: #0776bd;
}

.btn-addcourse {
  color: #fff !important;
  border: 2px solid #0776bd;
  border-radius: 50px;
  padding: 4px 36px !important;
  background-color: #0776bd;
  font-size: 15px;
  cursor: pointer;
}
.btn-addcourse:hover {
  background-color: #0e6ca8;
}

@media only screen and (max-width: 600px) {
  .courses {
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

  .btn-dangers {
    font-size: 12px;
    width: 50%;
  }
  .btn-warnings {
    font-size: 12px;
    width: 50%;
  }



.btn-addcourse {
  width:100%;
     font-size: 13px;
}






}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .courses {
    font-size: 16px;
  }

  .fa-sharp {
    font-size: 16px;
  }

  .manage-semester {
    font-size: 18px;
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

  .btn-dangers {
    font-size: 12px;
    width: 50%;
  }
  .btn-warnings {
    font-size: 12px;
    width: 50%;
  }



.btn-addcourse {
  width:100%;
     font-size: 13px;
}







}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .courses {
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

  .btn-dangers {
    font-size: 10px;
    margin-right: 1px;
  }
  .btn-warnings {
    font-size: 10px;
  }
  .manage-semester {
    font-size: 18px;
  }




.btn-addcourse {
  width:30%;
     font-size: 14px;
}







}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .courses {
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

  .btn-dangers {
    font-size: 12px;
    width: 30%;
    margin-right: 5px;
  }
  .btn-warnings {
    font-size: 12px;
    width: 30%;
  }
  .manage-semester {
    font-size: 20px;
  }






.btn-addcourse {
  width:30%;
   
}



}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .courses {
    font-size: 22px;
  }

  .fa-sharp {
    font-size: 30px;
  }

  .manage-semester {
    font-size: 23px;
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
  .btn-dangers {
    font-size: 12px;
    width: 30%;
    margin-right: 5px;
  }
  .btn-warnings {
    font-size: 12px;
    width: 30%;
  }
  .btn-addcourse {
  width:30%;
     
}
}
</style>