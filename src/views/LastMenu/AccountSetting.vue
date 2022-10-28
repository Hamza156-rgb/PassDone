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
              <h3 class="settings">Privacy Setting</h3>
              <hr />
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" align="left">
                <div class="questions">
                  <p>Who can see my friend lists?</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" align="right">
                <div class="answer">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Only Friends</option>
                    <option value="1">Every One</option>
                    <option value="2">Only Me</option>
                  </select>
                </div>
              </div>
              <hr class="mt-4" />
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" align="left">
                <div class="questions">
                  <p>Who can see my courses?</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" align="right">
                <div class="answer">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Friends & Colleagues</option>
                    <option value="1">Every One</option>
                    <option value="2">Only Me</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              <h3 class="setting mt-4">Account Setting</h3>
              <hr />
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" align="left">
                <div class="questions">
                  <p>Verify My Account</p>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" align="right">
                <div class="answers">
                  <p style="color: #ff473d !important; text-align: left">
                    Your request has been send to admin. Team will contact you
                    soon.
                  </p>
                </div>
              </div>
              <hr class="mt-4" />

              <div class="col-6" align="left">
                <div class="questions">
                  <p>Deactivate My Account</p>
                </div>
              </div>
              <div class="col-6" align="right">
                <div class="answer">
                  <button class="btn btn-accept">Deactivate</button>
                </div>
              </div>
              <hr class="mt-4" />
              <div class="col-6" align="left">
                <div class="questions">
                  <p>Delete My Account</p>
                </div>
              </div>
              <div class="col-6" align="right">
                <div class="answer">
                  <button class="btn btn-decline">Delete</button>
                </div>
              </div>

              <h3 class="settings">Language</h3>
              <hr />
              <select class="form-select" aria-label="Default select example">
                <option selected>English</option>
                <option value="1">Arabic</option>
              </select>
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
  name: "AccountSetting",
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

.questions {
  color: #0776bd;
  font-size: 16px;
}

.btn-accept {
  color: #fff !important;
  border: 2px solid #ff9900;
  border-radius: 30px;
  padding: 0px 18px !important;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #ff9900;
  font-size: 14px;
  line-height: 1.5;
  outline: none;
  font-family: Segoe UI;
  cursor: pointer;
}

.btn-accept:hover {
  color: #fff !important;
  background-color: #fab002;
  border-color: #fab002;
}

.btn-decline {
  color: #fff !important;
  border: 2px solid #f75555;
  border-radius: 30px;
  padding: 0px 18px !important;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #f75555;
  font-size: 14px;
  line-height: 1.5;
  outline: none;
  font-family: Segoe UI;
  cursor: pointer;
}

.btn-decline:hover {
  background-color: #ff3434;
  color: #fff !important;
  border-color: #ff3434;
}

@media only screen and (max-width: 600px) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>