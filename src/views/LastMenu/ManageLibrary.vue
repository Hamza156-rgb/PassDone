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
              <div class="col-6"><h4 class="library">Library Manage</h4></div>
              <div class="col-6">
                <div class="card-options crd" style="cursor: pointer">
                  <a @click="$refs.modalName1.openModal()">
                    <i
                      class="fa-sharp fa-solid fa-circle-plus"
                      style="margin-right: 5px; color: #0776bd"
                    ></i>
                  </a>

                  <h4 class="manage-semester">Add New Book</h4>
                </div>
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

            <div class="card mt-4" v-for="item in myBook" :key="item.id">
              <div class="Following-data p-3">
                <div class="row">
                  <div class="col-2">
                    <img
                      src="../../assets/main/user.png"
                      class="rounded-circle"
                      style="width: 100%"
                    />
                  </div>
                  <div class="col-10 mt-lg-4">
                    <div class="row">
                      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-6">
                        <h5 class="name">
                          {{ item.name }} -{{ item.created_at }}
                        </h5>
                        <h6 class="uni">
                          <span style="color: #0776bd">{{ item.subject }}</span>
                          |
                          <span
                            style="color: #0776bd"
                            v-if="item.instructor.user_type == 1"
                          >
                            <b style="color: black">By</b>
                            {{ item.instructor.first_name }}
                          </span>
                          <span
                            style="color: #0776bd"
                            v-if="item.instructor.user_type == 2"
                          >
                            <b style="color: black">By</b>
                            {{ item.instructor.first_name }}
                          </span>

                          <span
                            style="color: #0776bd"
                            v-if="item.instructor.user_type == 3"
                          >
                            <b style="color: black">By</b>
                            {{ item.instructor.name }}
                          </span>

                          |
                          <span style="color: #0776bd"
                            ><a v-bind:href="item.file" target="blank">File</a>
                          </span>
                        </h6>
                      </div>

                      <div
                        class="col-xs-12 col-sm-12 col-md-5 col-lg-6"
                        align="right"
                      >
                        <button
                          class="btn btn-dangers info-buttons mt-2"
                          @click="deleteBook(item.id)"
                        >
                          Delete
                        </button>
                        <button class="btn btn-warnings info-buttons mt-2">
                          Edit
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

    <form @submit.prevent="submit">
      <modal ref="modalName1">
        <template v-slot:header>
          <h5 style="color: #3390ff">Add New Book</h5>
          <div class="row mt-4">
            <div class="col-12">
              <label><b>Book Name </b> </label>
              <input
                class="form-control form-control-lg mt-2"
                type="text"
                v-model="form.book"
                placeholder="Enter the Book Name"
              />
            </div>
            <div class="col-12 mt-3">
              <label><b>Subject </b> </label>
              <input
                class="form-control form-control-lg mt-2"
                type="text"
                v-model="form.subject"
                placeholder="Enter the Suject"
              />
            </div>
            <div class="col-12 mt-3">
              <label><b>Course Name </b> </label>
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
                placeholder="Select/Search for Course Name"
              >
              </multiselect>
            </div>
            <div class="col-12 mt-3">
              <label> <b> Detail </b> </label>
              <textarea
                class="form-control mt-2"
                style="border: 1px solid #dddddd"
                id="exampleFormControlTextarea1"
                v-model="form.detail"
                rows="4"
              ></textarea>
            </div>

            <div class="col-12 mt-3">
              <input
                class="form-control form-control-lg mt-2"
                id="formFileLg"
                type="file"
                accept=".doc, .docx,.pdf"
                style="border-left: 0px white"
                @change="file($event)"
              />
            </div>

            <div class="col-12 mt-4">
              <div align="right">
                <button
                  class="btn btn-about m-2"
                  @click="$refs.modalName1.closeModal()"
                >
                  close
                </button>
                <button class="btn btn-about m-2">Save Changes</button>
              </div>
            </div>
          </div>
        </template>
      </modal>
    </form>

    <BackToTop />
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import BackToTop from "../../components/BackToTop.vue";
import Modal from "../../components/Modal.vue";
import ContentDataService from "../../services/ContentDataService";

export default {
  name: "ManageLibrary",
  components: {
    Navbar,
    BackToTop,
    Modal,
  },

  data() {
    return {
      degree: [],
      form: {
        book: "",
        subject: "",
        course: [],
        detail: "",
        attachments: "",
      },
      myBook: [],
    };
  },
  created() {
    this.getMajors();
    this.getBook();
  },

  methods: {
    addClass() {
      var con = document.getElementById("main-container");
      con.classList.add("is-blurred");
    },
    file(event) {
      var sizeAllowed = 25000;
      var filesSize = 0;
      this.form.attachments = "";

      if (event.target.files.length > 1) {
        this.$toasted.error("More than 2 files cannot be uploaded");
        return;
      }
      for (let i = 0; i <= event.target.files.length - 1; i++) {
        console.log(event.target.files.item(i).type);
        if (
          event.target.files.item(i).type == "application/pdf" ||
          event.target.files.item(i).type ==
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) {
          const fsize = event.target.files.item(i).size;
          const file = Math.round(fsize / 1024);
          filesSize += file;
          if (filesSize >= sizeAllowed) {
            this.$toasted.error(
              "Maximum file size exceeded, please select a files less than 25mb"
            );
          } else {
            if (i == 0) {
              this.form.attachments = event.target.files[i];
            }
          }
        } else {
          this.$toasted.error("One of the files are not of required file type");
          return;
        }
      }

      // this.form.attachments = event.target.files[0];
    },
    getMajors() {
      var id = "";
      var userType = localStorage.getItem("user_type");
      if (userType == 1) {
        id = localStorage.getItem("university_id");
      } else if (userType == 2) {
        id = localStorage.getItem("university_id");
      } else {
        id = localStorage.getItem("user_id");
      }

      ContentDataService.getMajor(id).then((response) => {
        this.degree = response.data.data;
      });
    },
    submit() {
      if (this.form.book == "") {
        this.$toasted.error("Please Enter Book Name");
        return;
      }
      if (this.form.subject == "") {
        this.$toasted.error("Please Enter Subject");
        return;
      }
      if (this.form.course == "") {
        this.$toasted.error("Please Select Course");
        return;
      }
      if (this.form.detail == "") {
        this.$toasted.error("Please Write Detail");
        return;
      }
      if (this.form.attachments == "") {
        this.$toasted.error("Please Attach File");
        return;
      } else {
        ContentDataService.addBook(this.form).then((response) => {
          console.log(response.data);
          this.$toasted.success(" Addedd Successfully");
          this.$refs.modalName1.closeModal();
          this.getBook();
        });
      }

      console.log(this.form);
    },
    getBook() {
      ContentDataService.getmyBook().then((response) => {
        console.log(response.data.data);
        this.myBook = response.data.data;
        if (this.myBook == "No Data Found") {
          this.myBook = [];
        }

        for (let i = 0; i < this.myBook.length; i++) {
          this.myBook[i].file =
            "http://passdoneapi.codetreck.com/public/" + this.myBook[i].file;
        }
      });
    },
    deleteBook(id) {
      ContentDataService.deletemyBook(id).then((response) => {
        console.log(response.data);
        this.$toasted.success(" Deleted Successfully");
        this.getBook();
      });
    },
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

.btn-dangers {
  color: #fff !important;
  border: 2px solid #f75555;
  border-radius: 30px;
  padding: 1px 12px !important;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #f75555;
  line-height: 1.5;
  outline: none;
  cursor: pointer;
}

.btn-dangers:hover {
  background-color: #ff3434;
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

  .btn-dangers {
    font-size: 12px;
    width: 50%;
  }
  .btn-warnings {
    font-size: 12px;
    width: 50%;
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

  .btn-dangers {
    font-size: 12px;
    width: 50%;
  }
  .btn-warnings {
    font-size: 12px;
    width: 50%;
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

  .btn-dangers {
    font-size: 10px;
    margin-right: 1px;
  }
  .btn-warnings {
    font-size: 10px;
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

  .btn-dangers {
    font-size: 12px;
    width: 30%;
    margin-right: 5px;
  }
  .btn-warnings {
    font-size: 12px;
    width: 30%;
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
  .btn-dangers {
    font-size: 12px;
    width: 30%;
    margin-right: 5px;
  }
  .btn-warnings {
    font-size: 12px;
    width: 30%;
  }
}
</style>

