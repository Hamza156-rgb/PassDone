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
        <h4>Register as a <span style="color: #0099e9">Student</span></h4>
      </div>
      <div class="heading-text">
        <p>Working with Student from a different culture motivates Student.</p>
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
        <form v-on:submit.prevent="submit">
          <div class="tab-pane active mt-3" v-if="one">
            <section
              class="Material-contact-section section-padding section-dark"
            >
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstname"
                    class="form-control"
                    v-model="form.FirstName"
                    :class="{
                      'is-invalid': submitted && $v.form.FirstName.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.form.FirstName.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.FirstName.required">
                      First Name is Required
                    </span>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                  <label>Father Name</label>
                  <input
                    type="text"
                    name="secondname"
                    id="secondname"
                    class="form-control"
                    v-model="form.FatherName"
                    :class="{
                      'is-invalid': submitted && $v.form.FatherName.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.form.FatherName.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.FatherName.required">
                      Father Name is Required
                    </span>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                  <label>Last Name*</label>
                  <input
                    type="text"
                    name="familyname"
                    id="familyname"
                    class="form-control"
                    v-model="form.LastName"
                    :class="{
                      'is-invalid': submitted && $v.form.LastName.$error,
                    }"
                  />

                  <div
                    v-if="submitted && $v.form.LastName.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.LastName.required">
                      Last Name is Required
                    </span>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                  <label>Birth Day (M/D/Y) *</label>
                  <input
                    type="date"
                    name="dateofbirth"
                    id="dateofbirth"
                    class="form-control"
                    v-model="form.date"
                    :class="{
                      'is-invalid': submitted && $v.form.date.$error,
                    }"
                  />

                  <div
                    v-if="submitted && $v.form.FirstName.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.FirstName.required">
                      Date of Birth is Required
                    </span>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                  <label class="mt-1">Gender *</label>
                  <select
                    class="mt-2"
                    name="gender"
                    v-model="form.gender"
                    :class="{
                      'is-invalid': submitted && $v.form.gender.$error,
                    }"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <div
                    v-if="submitted && $v.form.gender.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.gender.required">
                      Gender is required
                    </span>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                  <label>Mobile</label>
                  <input
                    type="number"
                    name="mobile"
                    id="mobile"
                    class="form-control"
                    v-model="form.phone"
                    :class="{
                      'is-invalid': submitted && $v.form.phone.$error,
                    }"
                  />

                  <div
                    v-if="submitted && $v.form.phone.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.phone.required">
                      Phone is Required
                    </span>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                  <label>Hometown *</label>
                  <multiselect
                    :options="options"
                    label="name"
                    track-by="name"
                    v-model="form.homeTown"
                    :class="{
                      'is-invalid': submitted && $v.form.homeTown.$error,
                    }"
                  >
                  </multiselect>
                  <div
                    v-if="submitted && $v.form.homeTown.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.homeTown.required">
                      Home Town is required
                    </span>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                  <label>Lives In *</label>
                  <multiselect
                    :options="optionss"
                    label="name"
                    track-by="name"
                    v-model="form.livesIn"
                    :class="{
                      'is-invalid': submitted && $v.form.livesIn.$error,
                    }"
                  >
                  </multiselect>
                  <div
                    v-if="submitted && $v.form.livesIn.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.livesIn.required">
                      LivesIn is required
                    </span>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-2">
                  <label>City / State</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    class="form-control mt-1"
                    v-model="form.city"
                    :class="{
                      'is-invalid': submitted && $v.form.city.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.form.city.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.city.required">
                      City is Required
                    </span>
                  </div>
                </div>
                <div class="row mb-4">
                  <div align="right">
                    <button class="btn btn-lg btn-primary mt-3" id="ksetp1">
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

                  <select
                    class="mt-2"
                    v-model="form.university"
                    :class="{
                      'is-invalid': submitted && $v.form.university.$error,
                    }"
                  >
                    <option value="1">First</option>
                    <option value="2">second</option>
                  </select>
                  <div
                    v-if="submitted && $v.form.university.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.university.required">
                      University is required
                    </span>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                  <label>Major *</label>

                  <select
                    class="mt-2"
                    v-model="form.majors"
                    :class="{
                      'is-invalid': submitted && $v.form.majors.$error,
                    }"
                  >
                    <option value="1">choose One</option>
                    <option value="2">choose One</option>
                    <option value="3">choose One</option>
                  </select>
                  <div
                    v-if="submitted && $v.form.majors.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.majors.required">
                      Majors Degree is required
                    </span>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                  <label>Double Majors</label>

                  <input
                    type="text"
                    name="firstname"
                    class="form-control"
                    v-model="form.doubleMajors"
                    :class="{
                      'is-invalid': submitted && $v.form.doubleMajors.$error,
                    }"
                  />

                  <div
                    v-if="submitted && $v.form.doubleMajors.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.doubleMajors.required">
                      Double Majors is required
                    </span>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-3">
                  <label>Academic Degree *</label>

                  <select
                    class="mt-2"
                    v-model="form.degree"
                    :class="{
                      'is-invalid': submitted && $v.form.degree.$error,
                    }"
                  >
                    <option value="1">choose One</option>
                    <option value="2">choose One</option>
                  </select>
                  <div
                    v-if="submitted && $v.form.degree.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.degree.required">
                      Degree is required
                    </span>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                  <label>Period</label>

                  <select
                    class="mt-2"
                    v-model="form.period"
                    :class="{
                      'is-invalid': submitted && $v.form.period.$error,
                    }"
                  >
                    <option value="1">choose One</option>
                    <option value="2">choose One</option>
                  </select>
                  <div
                    v-if="submitted && $v.form.period.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.period.required">
                      Time Period is required
                    </span>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                  <label>Academic Degre</label>

                  <select
                    class="mt-2"
                    v-model="form.tillNow"
                    :class="{
                      'is-invalid': submitted && $v.form.tillNow.$error,
                    }"
                  >
                    <option value="1">choose One</option>
                    <option value="2">choose One</option>
                  </select>
                  <div
                    v-if="submitted && $v.form.tillNow.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.tillNow.required">
                      Till Now Date is required
                    </span>
                  </div>
                </div>

                <div class="row mb-4">
                  <div align="right">
                    <button
                      class="btn btn-lg btn-primary mt-3"
                      style="margin-right: 15px"
                    >
                      Continue
                    </button>
                    <button
                      class="btn btn-lg btn-primary mt-3"
                      type="button"
                      @click="div1()"
                    >
                      Back
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
                        Confirm Your Password
                      </span>
                    </div>
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
                      type="button"
                      @click="div2()"
                    >
                      Back
                    </button>
                  </div>
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
import { required,email } from "vuelidate/lib/validators";

export default {
  name: "SignupStudent",
  data() {
    return {
      submitted: false,

      one: true,
      two: false,
      three: false,

      form: {
        FirstName: "",
        FatherName: "",
        LastName: "",
        date: "",
        gender: "",
        phone: "",
        homeTown: "",
        livesIn: "",
        city: "",
        // current Education
        university: "",
        majors: "",
        doubleMajors: "",
        degree: "",
        period: "",
        tillNow: "",
        // login information
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
      },

      options: [
        { name: "Albania" },
        { name: "Åland Islands" },
        { name: "Algeria" },
        { name: "American Samoa" },
        { name: "Andorra" },
        { name: "Angola" },
        { name: "Anguilla" },
        { name: "Antarctica" },
        { name: "Antigua and Barbuda" },
        { name: "Argentina" },
        { name: "Armenia" },
        { name: "Aruba" },
        { name: "Australia" },
        { name: "Austria" },
        { name: "Azerbaijan" },
        { name: "Bahamas (the)" },
        { name: "Bahrain" },
        { name: "Bangladesh" },
        { name: "Barbados" },
        { name: "Belarus" },
        { name: "Belgium" },
        { name: "Belize" },
        { name: "Benin" },
        { name: "Bermuda" },
        { name: "Bhutan" },
        { name: "Bolivia (Plurinational State of)" },
        { name: "Bonaire, Sint Eustatius and Saba" },
        { name: "Bosnia and Herzegovina" },
        { name: "Botswana" },
        { name: "Bouvet Island" },
        { name: "Brazil" },
        { name: "British Indian Ocean Territory (the)" },
        { name: "Brunei Darussalam" },
        { name: "Bulgaria" },
        { name: "Burkina Faso" },
        { name: "Burundi" },
        { name: "Cabo Verde" },
        { name: "Cambodia" },
        { name: "Cameroon" },
        { name: "Canada" },
        { name: "Cayman Islands (the)" },
        { name: "Central African Republic (the)" },
        { name: "Chad" },
        { name: "Chile" },
        { name: "China" },
        { name: "Christmas Island" },
        { name: "Cocos (Keeling) Islands (the)" },
        { name: "Colombia" },
        { name: "Comoros (the)" },
        { name: "Congo (the Democratic Republic of the)" },
        { name: "Congo (the)" },
        { name: "Cook Islands (the)" },
        { name: "Costa Rica" },
        { name: "Croatia" },
        { name: "Cuba" },
        { name: "Curaçao" },
        { name: "Cyprus" },
        { name: "Czechia" },
        { name: "Côte d'Ivoire" },
        { name: "Denmark" },
        { name: "Djibouti" },
        { name: "Dominica" },
        { name: "Dominican Republic (the)" },
        { name: "Ecuador" },
        { name: "Egypt" },
        { name: "El Salvador" },
        { name: "Equatorial Guinea" },
        { name: "Eritrea" },
        { name: "Estonia" },
        { name: "Eswatini" },
        { name: "Ethiopia" },
        { name: "Falkland Islands (the) [Malvinas]" },
        { name: "Faroe Islands (the)" },
        { name: "Fiji" },
        { name: "Finland" },
        { name: "France" },
        { name: "French Guiana" },
        { name: "French Polynesia" },
        { name: "French Southern Territories (the)" },
        { name: "Gabon" },
        { name: "Gambia (the)" },
        { name: "Georgia" },
        { name: "Germany" },
        { name: "Ghana" },
        { name: "Gibraltar" },
        { name: "Greece" },
        { name: "Greenland" },
        { name: "Grenada" },
        { name: "Guadeloupe" },
        { name: "Guam" },
        { name: "Guatemala" },
        { name: "Guernsey" },
        { name: "Guinea" },
        { name: "Guinea-Bissau" },
        { name: "Guyana" },
        { name: "Haiti" },
        { name: "Heard Island and McDonald Islands" },
        { name: "Holy See (the)" },
        { name: "Honduras" },
        { name: "Hong Kong" },
        { name: "Hungary" },
        { name: "Iceland" },
        { name: "India" },
        { name: "Indonesia" },
        { name: "Iran (Islamic Republic of)" },
        { name: "Iraq" },
        { name: "Ireland" },
        { name: "Isle of Man" },
        { name: "Israel" },
        { name: "Italy" },
        { name: "Jamaica" },
        { name: "Japan" },
        { name: "Jersey" },
        { name: "Jordan" },
        { name: "Kazakhstan" },
        { name: "Kenya" },
        { name: "Kiribati" },
        { name: "Korea (the Democratic People's Republic of)" },
        { name: "Korea (the Republic of)" },
        { name: "Kuwait" },
        { name: "Kyrgyzstan" },
        { name: "Lao People's Democratic Republic (the)" },
        { name: "Latvia" },
        { name: "Lebanon" },
        { name: "Lesotho" },
        { name: "Liberia" },
        { name: "Libya" },
        { name: "Liechtenstein" },
        { name: "Lithuania" },
        { name: "Luxembourg" },
        { name: "Macao" },
        { name: "Madagascar" },
        { name: "Malawi" },
        { name: "Malaysia" },
        { name: "Maldives" },
        { name: "Mali" },
        { name: "Malta" },
        { name: "Marshall Islands (the)" },
        { name: "Martinique" },
        { name: "Mauritania" },
        { name: "Mauritius" },
        { name: "Mayotte" },
        { name: "Mexico" },
        { name: "Micronesia (Federated States of)" },
        { name: "Moldova (the Republic of)" },
        { name: "Monaco" },
        { name: "Mongolia" },
        { name: "Montenegro" },
        { name: "Montserrat" },
        { name: "Morocco" },
        { name: "Mozambique" },
        { name: "Myanmar" },
        { name: "Namibia" },
        { name: "Nauru" },
        { name: "Nepal" },
        { name: "Netherlands (the)" },
        { name: "New Caledonia" },
        { name: "New Zealand" },
        { name: "Nicaragua" },
        { name: "Niger (the)" },
        { name: "Nigeria" },
        { name: "Niue" },
        { name: "Norfolk Island" },
        { name: "Northern Mariana Islands (the)" },
        { name: "Norway" },
        { name: "Oman" },
        { name: "Pakistan" },
        { name: "Palau" },
        { name: "Palestine, State of" },
        { name: "Panama" },
        { name: "Papua New Guinea" },
        { name: "Paraguay" },
        { name: "Peru" },
        { name: "Philippines (the)" },
        { name: "Pitcairn" },
        { name: "Poland" },
        { name: "Portugal" },
        { name: "Puerto Rico" },
        { name: "Qatar" },
        { name: "Republic of North Macedonia" },
        { name: "Romania", code: "RO" },
        { name: "Russian Federation (the)" },
        { name: "Rwanda" },
        { name: "Réunion" },
        { name: "Saint Barthélemy" },
        { name: "Saint Helena, Ascension and Tristan da Cunha" },
        { name: "Saint Kitts and Nevis" },
        { name: "Saint Lucia" },
        { name: "Saint Martin (French part)" },
        { name: "Saint Pierre and Miquelon" },
        { name: "Saint Vincent and the Grenadines" },
        { name: "Samoa" },
        { name: "San Marino" },
        { name: "Sao Tome and Principe" },
        { name: "Saudi Arabia" },
        { name: "Senegal" },
        { name: "Serbia" },
        { name: "Seychelles" },
        { name: "Sierra Leone" },
        { name: "Singapore" },
        { name: "Sint Maarten (Dutch part)" },
        { name: "Slovakia" },
        { name: "Slovenia" },
        { name: "Solomon Islands" },
        { name: "Somalia" },
        { name: "South Africa" },
        { name: "South Georgia and the South Sandwich Islands" },
        { name: "South Sudan" },
        { name: "Spain" },
        { name: "Sri Lanka" },
        { name: "Sudan (the)" },
        { name: "Suriname" },
        { name: "Svalbard and Jan Mayen" },
        { name: "Sweden" },
        { name: "Switzerland" },
        { name: "Syrian Arab Republic" },
        { name: "Taiwan (Province of China)" },
        { name: "Tajikistan" },
        { name: "Tanzania, United Republic of" },
        { name: "Thailand" },
        { name: "Timor-Leste" },
        { name: "Togo" },
        { name: "Tokelau" },
        { name: "Tonga" },
        { name: "Trinidad and Tobago" },
        { name: "Tunisia" },
        { name: "Turkey" },
        { name: "Turkmenistan" },
        { name: "Turks and Caicos Islands (the)" },
        { name: "Tuvalu" },
        { name: "Uganda" },
        { name: "Ukraine" },
        { name: "United Arab Emirates (the)" },
        {
          name: "United Kingdom of Great Britain and Northern Ireland (the)",
        },
        { name: "United States Minor Outlying Islands (the)" },
        { name: "United States of America (the)" },
        { name: "Uruguay" },
        { name: "Uzbekistan" },
        { name: "Vanuatu" },
        { name: "Venezuela (Bolivarian Republic of)" },
        { name: "Viet Nam" },
        { name: "Virgin Islands (British)" },
        { name: "Virgin Islands (U.S.)" },
        { name: "Wallis and Futuna" },
        { name: "Western Sahara" },
        { name: "Yemen" },
        { name: "Zambia" },
        { name: "Zimbabwe" },
      ],

      optionss: [
        { name: "Albania" },
        { name: "Åland Islands" },
        { name: "Algeria" },
        { name: "American Samoa" },
        { name: "Andorra" },
        { name: "Angola" },
        { name: "Anguilla" },
        { name: "Antarctica" },
        { name: "Antigua and Barbuda" },
        { name: "Argentina" },
        { name: "Armenia" },
        { name: "Aruba" },
        { name: "Australia" },
        { name: "Austria" },
        { name: "Azerbaijan" },
        { name: "Bahamas (the)" },
        { name: "Bahrain" },
        { name: "Bangladesh" },
        { name: "Barbados" },
        { name: "Belarus" },
        { name: "Belgium" },
        { name: "Belize" },
        { name: "Benin" },
        { name: "Bermuda" },
        { name: "Bhutan" },
        { name: "Bolivia (Plurinational State of)" },
        { name: "Bonaire, Sint Eustatius and Saba" },
        { name: "Bosnia and Herzegovina" },
        { name: "Botswana" },
        { name: "Bouvet Island" },
        { name: "Brazil" },
        { name: "British Indian Ocean Territory (the)" },
        { name: "Brunei Darussalam" },
        { name: "Bulgaria" },
        { name: "Burkina Faso" },
        { name: "Burundi" },
        { name: "Cabo Verde" },
        { name: "Cambodia" },
        { name: "Cameroon" },
        { name: "Canada" },
        { name: "Cayman Islands (the)" },
        { name: "Central African Republic (the)" },
        { name: "Chad" },
        { name: "Chile" },
        { name: "China" },
        { name: "Christmas Island" },
        { name: "Cocos (Keeling) Islands (the)" },
        { name: "Colombia" },
        { name: "Comoros (the)" },
        { name: "Congo (the Democratic Republic of the)" },
        { name: "Congo (the)" },
        { name: "Cook Islands (the)" },
        { name: "Costa Rica" },
        { name: "Croatia" },
        { name: "Cuba" },
        { name: "Curaçao" },
        { name: "Cyprus" },
        { name: "Czechia" },
        { name: "Côte d'Ivoire" },
        { name: "Denmark" },
        { name: "Djibouti" },
        { name: "Dominica" },
        { name: "Dominican Republic (the)" },
        { name: "Ecuador" },
        { name: "Egypt" },
        { name: "El Salvador" },
        { name: "Equatorial Guinea" },
        { name: "Eritrea" },
        { name: "Estonia" },
        { name: "Eswatini" },
        { name: "Ethiopia" },
        { name: "Falkland Islands (the) [Malvinas]" },
        { name: "Faroe Islands (the)" },
        { name: "Fiji" },
        { name: "Finland" },
        { name: "France" },
        { name: "French Guiana" },
        { name: "French Polynesia" },
        { name: "French Southern Territories (the)" },
        { name: "Gabon" },
        { name: "Gambia (the)" },
        { name: "Georgia" },
        { name: "Germany" },
        { name: "Ghana" },
        { name: "Gibraltar" },
        { name: "Greece" },
        { name: "Greenland" },
        { name: "Grenada" },
        { name: "Guadeloupe" },
        { name: "Guam" },
        { name: "Guatemala" },
        { name: "Guernsey" },
        { name: "Guinea" },
        { name: "Guinea-Bissau" },
        { name: "Guyana" },
        { name: "Haiti" },
        { name: "Heard Island and McDonald Islands" },
        { name: "Holy See (the)" },
        { name: "Honduras" },
        { name: "Hong Kong" },
        { name: "Hungary" },
        { name: "Iceland" },
        { name: "India" },
        { name: "Indonesia" },
        { name: "Iran (Islamic Republic of)" },
        { name: "Iraq" },
        { name: "Ireland" },
        { name: "Isle of Man" },
        { name: "Israel" },
        { name: "Italy" },
        { name: "Jamaica" },
        { name: "Japan" },
        { name: "Jersey" },
        { name: "Jordan" },
        { name: "Kazakhstan" },
        { name: "Kenya" },
        { name: "Kiribati" },
        { name: "Korea (the Democratic People's Republic of)" },
        { name: "Korea (the Republic of)" },
        { name: "Kuwait" },
        { name: "Kyrgyzstan" },
        { name: "Lao People's Democratic Republic (the)" },
        { name: "Latvia" },
        { name: "Lebanon" },
        { name: "Lesotho" },
        { name: "Liberia" },
        { name: "Libya" },
        { name: "Liechtenstein" },
        { name: "Lithuania" },
        { name: "Luxembourg" },
        { name: "Macao" },
        { name: "Madagascar" },
        { name: "Malawi" },
        { name: "Malaysia" },
        { name: "Maldives" },
        { name: "Mali" },
        { name: "Malta" },
        { name: "Marshall Islands (the)" },
        { name: "Martinique" },
        { name: "Mauritania" },
        { name: "Mauritius" },
        { name: "Mayotte" },
        { name: "Mexico" },
        { name: "Micronesia (Federated States of)" },
        { name: "Moldova (the Republic of)" },
        { name: "Monaco" },
        { name: "Mongolia" },
        { name: "Montenegro" },
        { name: "Montserrat" },
        { name: "Morocco" },
        { name: "Mozambique" },
        { name: "Myanmar" },
        { name: "Namibia" },
        { name: "Nauru" },
        { name: "Nepal" },
        { name: "Netherlands (the)" },
        { name: "New Caledonia" },
        { name: "New Zealand" },
        { name: "Nicaragua" },
        { name: "Niger (the)" },
        { name: "Nigeria" },
        { name: "Niue" },
        { name: "Norfolk Island" },
        { name: "Northern Mariana Islands (the)" },
        { name: "Norway" },
        { name: "Oman" },
        { name: "Pakistan" },
        { name: "Palau" },
        { name: "Palestine, State of" },
        { name: "Panama" },
        { name: "Papua New Guinea" },
        { name: "Paraguay" },
        { name: "Peru" },
        { name: "Philippines (the)" },
        { name: "Pitcairn" },
        { name: "Poland" },
        { name: "Portugal" },
        { name: "Puerto Rico" },
        { name: "Qatar" },
        { name: "Republic of North Macedonia" },
        { name: "Romania", code: "RO" },
        { name: "Russian Federation (the)" },
        { name: "Rwanda" },
        { name: "Réunion" },
        { name: "Saint Barthélemy" },
        { name: "Saint Helena, Ascension and Tristan da Cunha" },
        { name: "Saint Kitts and Nevis" },
        { name: "Saint Lucia" },
        { name: "Saint Martin (French part)" },
        { name: "Saint Pierre and Miquelon" },
        { name: "Saint Vincent and the Grenadines" },
        { name: "Samoa" },
        { name: "San Marino" },
        { name: "Sao Tome and Principe" },
        { name: "Saudi Arabia" },
        { name: "Senegal" },
        { name: "Serbia" },
        { name: "Seychelles" },
        { name: "Sierra Leone" },
        { name: "Singapore" },
        { name: "Sint Maarten (Dutch part)" },
        { name: "Slovakia" },
        { name: "Slovenia" },
        { name: "Solomon Islands" },
        { name: "Somalia" },
        { name: "South Africa" },
        { name: "South Georgia and the South Sandwich Islands" },
        { name: "South Sudan" },
        { name: "Spain" },
        { name: "Sri Lanka" },
        { name: "Sudan (the)" },
        { name: "Suriname" },
        { name: "Svalbard and Jan Mayen" },
        { name: "Sweden" },
        { name: "Switzerland" },
        { name: "Syrian Arab Republic" },
        { name: "Taiwan (Province of China)" },
        { name: "Tajikistan" },
        { name: "Tanzania, United Republic of" },
        { name: "Thailand" },
        { name: "Timor-Leste" },
        { name: "Togo" },
        { name: "Tokelau" },
        { name: "Tonga" },
        { name: "Trinidad and Tobago" },
        { name: "Tunisia" },
        { name: "Turkey" },
        { name: "Turkmenistan" },
        { name: "Turks and Caicos Islands (the)" },
        { name: "Tuvalu" },
        { name: "Uganda" },
        { name: "Ukraine" },
        { name: "United Arab Emirates (the)" },
        {
          name: "United Kingdom of Great Britain and Northern Ireland (the)",
        },
        { name: "United States Minor Outlying Islands (the)" },
        { name: "United States of America (the)" },
        { name: "Uruguay" },
        { name: "Uzbekistan" },
        { name: "Vanuatu" },
        { name: "Venezuela (Bolivarian Republic of)" },
        { name: "Viet Nam" },
        { name: "Virgin Islands (British)" },
        { name: "Virgin Islands (U.S.)" },
        { name: "Wallis and Futuna" },
        { name: "Western Sahara" },
        { name: "Yemen" },
        { name: "Zambia" },
        { name: "Zimbabwe" },
      ],
    };
  },
  validations: {
    form: {
      FirstName: {
        required,
      },
      FatherName: {
        required,
      },
      LastName: {
        required,
      },
      date: {
        required,
      },
      gender: {
        required,
      },
      phone: {
        required,
      },
      homeTown: {
        required,
      },
      livesIn: {
        required,
      },
      city: {
        required,
      },

      university: { required },
      majors: { required },
      doubleMajors: {
        required,
      },
      degree: { required },
      period: { required },
      tillNow: { required },
      email:{required,email},
      confirmEmail:{required,email},
      password:{required},
      confirmPassword:{required}
    },
  },
  methods: {
    submit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } else {
        console.log(this.form);
      }
    },

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
<style>
.multiselect__tags {
  border-radius: 0px;
  background: transparent;
  outline: 0;
  border-width: 0 0 1px;
  border-color: #bdbdbd;
  color: black;
  box-shadow: none;
  width: 100%;
}

.multiselect__single {
  border-radius: 0px;
  background: transparent;
  outline: 0;
  border-width: 0 0 1px;
  border-color: #bdbdbd;
  color: black;
  box-shadow: none;
  width: 100%;
}
</style>