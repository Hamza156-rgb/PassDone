<template>
  <div class="container-fluid" style="background-color: black">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <router-link to="/"
          ><img src="../assets/logo.png" class="main-logo"
        /></router-link>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <router-link to="/" class="btn btn-link mt-3"
          >Already have an account | Login
        </router-link>
      </div>
    </div>

    <div class="container-fluid" id="container2">
      <div class="heading pt-5">
        <h4>Register as a <span style="color: #0099e9">Instructor</span></h4>
      </div>
      <div class="heading-text">
        <p>
          Working with Instructor from a different culture motivates Instructor.
        </p>
      </div>

      <div class="wizard">
        <ul class="nav nav-tabs nav-justified">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <li class="nav-item">
              <button
                class="nav-link active"
                data-toggle="tab"
                id="step1"
                @click="div1()"
              >
                <span class="badge badge-light">1</span> Personal Information
              </button>
            </li>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <li class="nav-item">
              <button
                class="nav-link"
                data-toggle="tab"
                id="step2"
                @click="div2()"
              >
                <span class="badge badge-light">2</span> Current Work
              </button>
            </li>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <li class="nav-item">
              <button
                class="nav-link"
                data-toggle="tab"
                id="step3"
                @click="div3()"
              >
                <span class="badge badge-light">3</span> Login Information
              </button>
            </li>
          </div>
        </ul>

        <div class="tab-pane active mt-3" v-if="one">
          <section
            class="Material-contact-section section-padding section-dark"
          >
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                <label>First Name *</label>
                <input type="text" name="firstname" class="form-control" />
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                <label>Father Name</label>
                <input
                  type="text"
                  name="secondname"
                  id="secondname"
                  class="form-control"
                />
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                <label>Last Name*</label>
                <input
                  type="text"
                  name="familyname"
                  id="familyname"
                  class="form-control"
                />
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                <label>Birth Day (M/D/Y) *</label>
                <input
                  type="date"
                  name="dateofbirth"
                  id="dateofbirth"
                  class="form-control"
                />
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                <label>Gender *</label>
                <select class="form-control" name="gender">
                  <option value="m">Male</option>
                  <option value="f">Female</option>
                </select>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                <label>Mobile</label>
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  class="form-control"
                />
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                <label>Hometown *</label>
                <select
                  class="form-control select2"
                  name="hcountry"
                  id="hcountry"
                >
                  <option value="">Please Select Country</option>
                </select>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                <label>Lives In *</label>
                <select
                  class="form-control select2"
                  name="country"
                  id="country"
                  onchange="selectuniversities(this.value)"
                >
                  <option value="">Please Select Country</option>
                </select>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                <label>City / State</label>
                <input type="text" name="city" id="city" class="form-control" />
              </div>

              <div class="row mb-4">
                <div align="right">
                  <button
                    class="btn btn-lg btn-primary mt-3"
                    id="ksetp1"
                    type="button"
                      @click="div2()"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="tab-pane active mt-3" v-if="two">
          <section
            class="Material-contact-section section-padding section-dark"
          >
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label>University/School *</label>

                <select class="mt-2">
                  <option value="">Please Select Country First</option>
                </select>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label>Major *</label>

                <select class="mt-2">
                  <option value="">choose One</option>
                </select>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label>Major you teach *</label>

                <select class="mt-2">
                  <option value="">choose One</option>
                </select>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label>Select Majors You Are Intrested In *</label>

                <select class="mt-2">
                  <option value="">choose One</option>
                </select>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label>Period</label>

                <select class="mt-2">
                  <option value="">choose One</option>
                </select>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label>Till Now</label>

                <select class="mt-2">
                  <option value="">choose One</option>
                </select>
              </div>

              <div class="row mb-4">
                <div align="right">
                  <button class="btn btn-lg btn-primary mt-3" type="button"   @click="div1()">
                    Back
                  </button>

                  <button
                    class="btn btn-lg btn-primary mt-3"
                    type="button"
                    style="margin-left: 15px"
                      @click="div3()"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="tab-pane active mt-3" v-if="three">
          <section
            class="Material-contact-section section-padding section-dark"
          >
            <div class="row">
              <div class="col-xs- 12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="form-control"
                />
              </div>
              <div class="col-xs- 12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label>Confirm Email Address *</label>
                <input
                  type="email"
                  name="email2"
                  id="email2"
                  class="form-control"
                />
              </div>
              <div class="col-xs- 12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label>Password *</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="form-control"
                />
              </div>
              <div class="col-xs- 12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label>Confirm Password *</label>
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  class="form-control"
                />
              </div>
              <div class="row mb-4">
                <div align="right">
                  <button
                    type="submit"
                    class="btn btn-lg btn-primary mt-3"
                    style="margin-right: 10px"
                  >
                    Register
                  </button>
                  <button
                    class="btn btn-lg btn-primary mr-1 mt-3"
                    type="button" @click="div2()"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupInstructor",
  data() {
    return {
      one: true,
      two: false,
      three: false,
    };
  },
  methods: {
    div1() {
      this.one = true;
      this.two = false;
      this.three = false;
      document.getElementById("step1").style.backgroundColor = "#0099e9";
      document.getElementById("step2").style.backgroundColor = "#f4f4f4";
      document.getElementById("step3").style.backgroundColor = "#f4f4f4";
    },

    div2() {
      this.one = false;
      this.two = true;
      this.three = false;
      document.getElementById("step1").style.backgroundColor = "#f4f4f4";
      document.getElementById("step2").style.backgroundColor = "#0099e9";
      document.getElementById("step3").style.backgroundColor = "#f4f4f4";
    },

    div3() {
      this.one = false;
      this.two = false;
      this.three = true;
      document.getElementById("step1").style.backgroundColor = "#f4f4f4";
      document.getElementById("step2").style.backgroundColor = "#f4f4f4";
      document.getElementById("step3").style.backgroundColor = "#0099e9";
    },
  },
};
</script>

<style scoped>
.main-logo {
  max-width: 220px;
}
#container2 {
  background-color: rgba(255, 255, 255, 0.87);
}
.btn-link {
  color: white;
}

.nav-link:focus,
.nav-link:active:hover {
  color: #fff;
  background-color: #0099e9;
  border-color: #0099e9;
  outline: none;
  box-shadow: none;
}

.nav-link {
  background-color: #f4f4f4;
  color: #666;
  border: 0px;
  border-radius: 0px;
}

.wizard .nav-link.active {
  background-color: #0099e9;
}

.wizard .nav-link {
  position: relative;
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

select {
  border-radius: 0px;
  background: transparent;
  outline: 0;
  border-width: 0 0 1px;
  border-color: #bdbdbd;
  color: black;
  box-shadow: none;
  width: 100%;
}

.wizard .form-control::-moz-placeholder,
.wizard .form-group .wizard .form-control::-moz-placeholder {
  color: #bdbdbd;
  font-weight: 400;
}
.wizard .form-control:-ms-input-placeholder,
.wizard .form-group .wizard .form-control:-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 400;
}
.wizard .form-control::-webkit-input-placeholder,
.wizard .form-group .wizard .form-control::-webkit-input-placeholder {
  color: #bdbdbd;
  font-weight: 400;
}

@media only screen and (max-width: 600px) {
  .btn-link {
    display: flex;
    justify-content: center;
  }

  .nav {
    display: table;
    width: 100%;
  }
  .nav-item {
    margin-top: 10px;
  }

  .wizard .nav-link .badge {
    font-size: 12px;
    top: 10px;
    float: left;
  }
  #ksetp1 {
    width: 100%;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .btn-link {
    display: flex;
    justify-content: center;
  }

  .wizard .nav-link .badge {
    font-size: 13px;
    float: left;
    top: 10px;
  }
  .nav-item {
    margin-top: 10px;
  }
  #ksetp1 {
    width: 100%;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .btn-link {
    float: right;
  }
  .wizard .nav-link .badge {
    font-size: 20px;
    border-radius: 50%;
    position: absolute;
    left: 15px;
    top: 4px;
    color: black;
  }
  #ksetp1 {
    width: 100%;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .btn-link {
    float: right;
  }
  .wizard .nav-link .badge {
    font-size: 20px;
    border-radius: 50%;
    position: absolute;
    left: 15px;
    top: 4px;
    color: black;
  }

  #ksetp1 {
    width: 20%;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .btn-link {
    float: right;
  }
  .wizard .nav-link .badge {
    font-size: 20px;
    border-radius: 50%;
    position: absolute;
    left: 15px;
    top: 4px;
    color: black;
  }

  #ksetp1 {
    width: 20%;
  }
}
</style>