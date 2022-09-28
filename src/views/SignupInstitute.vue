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
        <h4>
          Register as a
          <span style="color: #0099e9">Educational Institute</span>
        </h4>
      </div>
      <div class="heading-text">
        <p>
          Working with Educational Institute from a different culture motivates
          Educational Institute.
        </p>
      </div>

      <div class="wizard">
        <ul class="nav nav-tabs nav-justified">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <li class="nav-item">
              <button
                class="nav-link active"
                data-toggle="tab"
                id="step1"
                @click="div1()"
              >
                <span class="badge badge-light">1</span> General Information
              </button>
            </li>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <li class="nav-item">
              <button
                class="nav-link"
                data-toggle="tab"
                id="step2"
                @click="div2()"
              >
                <span class="badge badge-light">2</span> Login Information
              </button>
            </li>
          </div>
        </ul>
        <form v-on:submit.prevent="submit">
          <div class="tab-pane active mt-3" v-if="one">
            <section
              class="Material-contact-section section-padding section-dark"
            >
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                  <label>Country *</label>
                  <multiselect
                    :options="country.map((user) => user.id)"
                    :custom-label="
                      (opt) => country.find((x) => x.id == opt).name
                    "
                    label="name"
                    track-by="name"
                    placeholder="Choose One"
                    v-model="form.country"
                    :class="{
                      'is-invalid': submitted && $v.form.country.$error,
                    }"
                  >
                  </multiselect>
                  <div
                    v-if="submitted && $v.form.country.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.country.required">
                      Country is Required
                    </span>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                  <label>Established Year*</label>
                  <select
                    class="mt-lg-3 mt-md-3"
                    v-model="form.year"
                    :class="{
                      'is-invalid': submitted && $v.form.year.$error,
                    }"
                  >
                    <option value="1940">1940</option>
                    <option value="1941">1941</option>
                    <option value="1942">1942</option>
                    <option value="1943">1943</option>
                    <option value="1944">1944</option>
                    <option value="1945">1945</option>
                    <option value="1946">1946</option>
                    <option value="1947">1947</option>
                    <option value="1948">1948</option>
                    <option value="1949">1949</option>
                    <option value="1950">1950</option>
                    <option value="1951">1951</option>
                    <option value="1952">1952</option>
                    <option value="1953">1953</option>
                    <option value="1954">1954</option>
                    <option value="1955">1955</option>
                    <option value="1956">1956</option>
                    <option value="1957">1957</option>
                    <option value="1958">1958</option>
                    <option value="1959">1959</option>
                    <option value="1960">1960</option>
                    <option value="1961">1961</option>
                    <option value="1962">1962</option>
                    <option value="1963">1963</option>
                    <option value="1964">1964</option>
                    <option value="1965">1965</option>
                    <option value="1966">1966</option>
                    <option value="1967">1967</option>
                    <option value="1968">1968</option>
                    <option value="1969">1969</option>
                    <option value="1970">1970</option>
                    <option value="1971">1971</option>
                    <option value="1972">1972</option>
                    <option value="1973">1973</option>
                    <option value="1974">1974</option>
                    <option value="1975">1975</option>
                    <option value="1976">1976</option>
                    <option value="1977">1977</option>
                    <option value="1978">1978</option>
                    <option value="1979">1979</option>
                    <option value="1980">1980</option>
                    <option value="1981">1981</option>
                    <option value="1982">1982</option>
                    <option value="1983">1983</option>
                    <option value="1984">1984</option>
                    <option value="1985">1985</option>
                    <option value="1986">1986</option>
                    <option value="1987">1987</option>
                    <option value="1988">1988</option>
                    <option value="1989">1989</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                  </select>

                  <div
                    v-if="submitted && $v.form.year.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.year.required">
                      Year is Required
                    </span>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                  <label> Name Of Educational Institute*</label>
                  <input
                    class="form-control"
                    v-model="form.Name"
                    :class="{
                      'is-invalid': submitted && $v.form.Name.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.form.Name.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.Name.required">
                      Name of Institute is Required
                    </span>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <label class="pt-1">Type Of Institute*</label>
                  <multiselect
                    :options="institute.map((user) => user.id)"
                    :custom-label="
                      (opt) => institute.find((x) => x.id == opt).name
                    "
                    label="name"
                    track-by="name"
                    placeholder="Choose One"
                    v-model="form.type"
                    :class="{
                      'is-invalid': submitted && $v.form.type.$error,
                    }"
                  >
                  </multiselect>
                  <div
                    v-if="submitted && $v.form.type.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.type.required">
                      Institute Type is Required
                    </span>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                  <label>Majors Use 'comma' or 'tab' to add new </label>
                  <multiselect
                    v-model="form.subjectMajor"
                    :class="{
                      'is-invalid': submitted && $v.form.subjectMajor.$error,
                    }"
                    :options="double.map((user) => user.id)"
                    :custom-label="
                      (opt) => double.find((x) => x.id == opt).name
                    "
                    :multiple="true"
                    :clear-on-select="false"
                    :preserve-search="false"
                    :preselect-first="true"
                  >
                  </multiselect>
                  <div
                    v-if="submitted && $v.form.subjectMajor.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.subjectMajor.required">
                      Select Major Subject
                    </span>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                  <label>
                    Training Course Use 'comma' or 'tab' to add new
                  </label>
                  <multiselect
                    v-model="form.course"
                    :options="training.map((user) => user.id)"
                    :custom-label="
                      (opt) => training.find((x) => x.id == opt).name
                    "
                    :multiple="true"
                    :clear-on-select="false"
                    :preserve-search="false"
                    :preselect-first="true"
                    :class="{
                      'is-invalid': submitted && $v.form.course.$error,
                    }"
                  >
                  </multiselect>
                  <div
                    v-if="submitted && $v.form.course.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.course.required">
                      Select Training Course
                    </span>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-2">
                  <label class="mt-1"> About Institute * </label>

                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    v-model="form.about"
                    :class="{
                      'is-invalid': submitted && $v.form.about.$error,
                    }"
                  ></textarea>

                  <div
                    v-if="submitted && $v.form.about.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.about.required">
                      This Field is Required
                    </span>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                  <label class="mt-1"> Address * </label>

                  <textarea
                    class="form-control"
                    v-model="form.address"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    :class="{
                      'is-invalid': submitted && $v.form.address.$error,
                    }"
                  ></textarea>
                  <div
                    v-if="submitted && $v.form.address.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.address.required">
                      Address is Required
                    </span>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                  <label class="mt-1"> Contact Information * </label>

                  <textarea
                    v-model="form.contact"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    :class="{
                      'is-invalid': submitted && $v.form.contact.$error,
                    }"
                  ></textarea>
                  <div
                    v-if="submitted && $v.form.contact.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.contact.required">
                      Contact Information is Required
                    </span>
                  </div>
                </div>

                <div class="mb-2" align="right">
                  <button class="btn btn-primary mt-3" id="ksetp1">
                    Continue
                  </button>
                </div>
              </div>
            </section>
          </div>

          <div class="tab-pane active mt-3" v-if="two">
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
                    v-model="form.email"
                    :class="{
                      'is-invalid': submitted && $v.form.email.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.form.email.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.email.required">
                      Email is required
                    </span>
                  </div>
                </div>
                <div class="col-xs- 12 col-sm-12 col-md-6 col-lg-6 mt-2">
                  <label>Confirm Email Address *</label>
                  <input
                    type="email"
                    name="email2"
                    id="email2"
                    class="form-control"
                    v-model="form.confirmEmail"
                    onblur="confirmEmail()"
                    :class="{
                      'is-invalid': submitted && $v.form.confirmEmail.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.form.confirmEmail.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.confirmEmail.required">
                      Confirm Your Email
                    </span>
                  </div>
                </div>
                <div class="col-xs- 12 col-sm-12 col-md-6 col-lg-6 mt-2">
                  <label>Password *</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="form-control"
                    v-model="form.password"
                    :class="{
                      'is-invalid': submitted && $v.form.password.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.form.password.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.password.required">
                      Password is required
                    </span>
                  </div>
                </div>
                <div class="col-xs- 12 col-sm-12 col-md-6 col-lg-6 mt-2">
                  <label>Confirm Password *</label>
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    class="form-control"
                    v-model="form.confirmPassword"
                    :class="{
                      'is-invalid': submitted && $v.form.confirmPassword.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.form.confirmPassword.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.confirmPassword.required">
                      Confirm Password is required
                    </span>
                    <span
                      v-if="
                        form.confirmPassword &&
                        !$v.form.confirmPassword.sameAsPassword
                      "
                      >Password and Confirm Password should match</span
                    >
                  </div>
                </div>

                <div class="mb-2 mt-2" align="right">
                  <button
                    type="submit"
                    class="btn btn-primary mt-3 m-lg-2 m-md-2"
                    id="continue"
                  >
                    Register
                  </button>
                  <button
                    class="btn btn-primary mt-3 m-lg-2 m-md-2"
                    id="back"
                    @click="div2()"
                  >
                    Back
                  </button>
                </div>
              </div>
            </section>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, sameAs } from "vuelidate/lib/validators";
import ContentDataService from "../services/ContentDataService";

export default {
  name: "SignupInstitute",
  data() {
    return {
      submitted: false,
      one: true,
      two: false,

      form: {
        country: "",
        year: "",
        Name: "",
        type: "",
        subjectMajor: "",
        course: "",
        about: "",
        address: "",
        contact: "",

        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
      },
      country: [],
      double: [],
      training: [],
      institute: [],
    };
  },

  validations: {
    form: {
      country: { required },
      year: { required },
      Name: { required },
      type: { required },
      subjectMajor: { required },
      course: { required },
      about: { required },
      address: { required },
      contact: { required },

      email: { required, email },
      confirmEmail: { required, email },
      password: { required },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },

  created() {
    this.Country();
    this.Institute();
    this.DoubleMajor();
    this.DoubleTraning();
  },

  methods: {
    Country() {
      ContentDataService.getCountry().then((response) => {
        this.country = response.data.data;
      });
    },
    Institute() {
      ContentDataService.Institute().then((response) => {
        this.institute = response.data.data;
      });
    },
    DoubleMajor() {
      ContentDataService.getMajorInstitute().then((response) => {
        this.double = response.data.data;
      });
    },

    DoubleTraning() {
      ContentDataService.getTraningInstitute().then((response) => {
        this.training = response.data.data;
      });
    },

    submit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        ContentDataService.postInstitute(this.form)
          .then((response) => {
            localStorage.setItem("user_id", response.data.data.user_id);
            localStorage.setItem("name", response.data.data.name);
            localStorage.setItem("token", response.data.token);

            this.$toasted.success(" Registered Successfully");
            this.$router.push("/home");
          })
          .catch((e) => {
            if (e) {
              this.$toasted.error("Something Went Wrong");
            }
          });
      }
    },

    div1() {
      this.one = true;
      this.two = false;

      document.getElementById("step1").style.backgroundColor = "#0099e9";
      document.getElementById("step2").style.backgroundColor = "#f4f4f4";
    },

    div2() {
      this.one = false;
      this.two = true;

      document.getElementById("step1").style.backgroundColor = "#f4f4f4";
      document.getElementById("step2").style.backgroundColor = "#0099e9";
    },
  },
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.form-control.is-invalid,
.was-validated .form-control:invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

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
    width: 90%;
  }
  #continue {
    width: 100%;
  }
  #back {
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
  #continue {
    width: 100%;
  }
  #back {
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
    width: 30%;
  }
  #continue {
    width: 30%;
  }
  #back {
    width: 30%;
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
  #continue {
    width: 20%;
  }
  #back {
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
  #continue {
    width: 10%;
  }
  #back {
    width: 10%;
  }
}
</style>



