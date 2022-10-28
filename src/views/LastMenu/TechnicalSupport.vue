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
            <h3 class="setting">Technical Support</h3>
            <hr />

            <div class="technical">
              <p>Support Type</p>
              <select class="form-select" aria-label="Default select example">
                <option selected>Report a technical issue</option>
                <option value="1">Report Some One</option>
                <option value="2">Create New Course in PassDone</option>
                   <option value="2">Create Major Course in PassDone</option>
                         <option value="2">Others</option>
              </select>
              <p class="mt-4">Message</p>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
                placeholder="Explain Your Problem here"
              ></textarea>
              <div class="buttons mt-lg-5 mt-md-4 mt-3" align="right">
                <button class="btn btn-cancel">Cancel</button>
                <button class="btn btn-submit">Submit</button>
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
  name: "TechnicalSupport",
  components: {
    Navbar,
      BackToTop,
  },
};
</script>

<style scoped>
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
.btn-cancel {
  color: #5e5e5e !important;
  border: 2px solid #d3d3d3;
  border-radius: 30px;
  padding: 6px 24px !important;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #fff;
  font-size: 15px;
  line-height: 1.5;
  outline: none;

  cursor: pointer;
}
.btn-cancel:hover {
  background-color: #d3d3d3;
  border-color: #d3d3d3;
  color: white;
}

.btn-submit {
  color: #fff !important;
  border: 2px solid #0776bd;
  border-radius: 30px;
  padding: 6px 24px !important;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #0776bd;
  font-size: 15px;
  line-height: 1.5;
  outline: none;
  font-family: Segoe UI;
  cursor: pointer;
}
.btn-submit:hover {
  background-color: #ff3434;
  border-color: #ff3434;
}

@media only screen and (max-width: 600px) {
  .btn-submit {
    width: 45%;
  }
  .btn-cancel {
    width: 45%;
    margin-right: 10%;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .btn-submit {
    width: 45%;
  }
  .btn-cancel {
    width: 45%;
    margin-right: 10%;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
     .btn-submit {
    width: 20%;
  }
  .btn-cancel {
        width: 20%;
    margin-right: 1%;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
     .btn-submit {
    width: 20%;
  }
  .btn-cancel {
        width: 20%;
    margin-right: 1%;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
   .btn-submit {
    width: 20%;
  }
  .btn-cancel {
        width: 20%;
    margin-right: 1%;
  }
}
</style>