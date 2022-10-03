<template>
  <div>
    <Navbar />

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <div class="card ad-card mt-2">
            <div class="card">
              <div class="card-body">
                <div class="card-text">
                  <p>Filter & Search</p>
                </div>
                <div class="filters">
                  <select class="form-select shadow-none">
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Åland Islands">Åland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">
                      British Indian Ocean Territory
                    </option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos (Keeling) Islands">
                      Cocos (Keeling) Islands
                    </option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo, The Democratic Republic of The">
                      Congo, The Democratic Republic of The
                    </option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote D'ivoire">Cote D'ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands (Malvinas)">
                      Falkland Islands (Malvinas)
                    </option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">
                      French Southern Territories
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernsey">Guernsey</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-bissau">Guinea-bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island and Mcdonald Islands">
                      Heard Island and Mcdonald Islands
                    </option>
                    <option value="Holy See (Vatican City State)">
                      Holy See (Vatican City State)
                    </option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran, Islamic Republic of">
                      Iran, Islamic Republic of
                    </option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, Democratic People's Republic of">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="Korea, Republic of">
                      Korea, Republic of
                    </option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao People's Democratic Republic">
                      Lao People's Democratic Republic
                    </option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">
                      Libyan Arab Jamahiriya
                    </option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macao">Macao</option>
                    <option value="Macedonia, The Former Yugoslav Republic of">
                      Macedonia, The Former Yugoslav Republic of
                    </option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia, Federated States of">
                      Micronesia, Federated States of
                    </option>
                    <option value="Moldova, Republic of">
                      Moldova, Republic of
                    </option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">
                      Netherlands Antilles
                    </option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Northern Mariana Islands">
                      Northern Mariana Islands
                    </option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestinian Territory, Occupied">
                      Palestinian Territory, Occupied
                    </option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">
                      Russian Federation
                    </option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Helena">Saint Helena</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Pierre and Miquelon">
                      Saint Pierre and Miquelon
                    </option>
                    <option value="Saint Vincent and The Grenadines">
                      Saint Vincent and The Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option
                      value="South Georgia and The South Sandwich Islands"
                    >
                      South Georgia and The South Sandwich Islands
                    </option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard and Jan Mayen">
                      Svalbard and Jan Mayen
                    </option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syrian Arab Republic">
                      Syrian Arab Republic
                    </option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania, United Republic of">
                      Tanzania, United Republic of
                    </option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-leste">Timor-leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos Islands">
                      Turks and Caicos Islands
                    </option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="United States Minor Outlying Islands">
                      United States Minor Outlying Islands
                    </option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Virgin Islands, British">
                      Virgin Islands, British
                    </option>
                    <option value="Virgin Islands, U.S.">
                      Virgin Islands, U.S.
                    </option>
                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>

                  <select class="form-select shadow-none mt-2">
                    <option>Uni Name</option>
                    <option>Uni Name</option>
                  </select>

                  <select class="form-select shadow-none mt-2">
                    <option>All</option>
                    <option>College</option>
                    <option>other</option>
                    <option>School</option>
                    <option>Training Center</option>
                    <option>University</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="card ad-card mt-2">
            <img src="../assets/Library/sponser.png" />
          </div>

          <div class="card ad-card">
            <img src="../assets/Library/ielts.png" />
          </div>

          <div class="card ad-card">
            <img src="../assets/Library/google.png" />
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 mt-2">
          <div class="custom-card p-3">
            <div class="row">
              <div class="col-6"><h4 class="library">Library Manage</h4></div>
              <div class="col-6">
                <router-link to="/my-library">
                <div class="card-options crd">
                  <a >
                    <i
                      class="fa-sharp fa-solid fa-circle-plus"
                      style="margin-right: 5px;color:#0776BD"
                    ></i>
                  </a>

                  <h4 class="manage-semester">Add New Book</h4>
                </div>
                </router-link>
              </div>
            </div>

            <hr />
          </div>
        </div>
      </div>
    </div>

    <!-- <form v-on:submit.prevent="submit">
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
              <label> <b> Attach Book</b> </label>
              <input
                class="form-control form-control-lg mt-2"
                id="formFileLg"
                type="file"
                style="border: 1px solid #dddddd"
                @change="file($event)"
              />
            </div>

            <div class="col-12 mt-3">
              <div align="right">
                <button class="btn btn-primary m-2">close</button>
                <button class="btn btn-primary m-2">Save Changes</button>
              </div>
            </div>
          </div>
        </template>
      </modal>
    </form> -->

    <BackToTop />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import BackToTop from "../components/BackToTop.vue";
// import Modal from "../components/Modal.vue";
// import ContentDataService from "../services/ContentDataService";

export default {
  name: "Library",
  components: {
    Navbar,
    BackToTop,
    // Modal,
  },
  // data() {
  //   return {
  //     degree: [],
  //     form: {
  //       book: "",
  //       subject: "",
  //       course: [],
  //       detail: "",
  //       attachments: "",
  //     },
  //   };
  // },

  // created() {
  //   this.getMajors();
  // },

  // methods: {
  //   submit() {
  //     if (this.form.book == "") {
  //       this.$toasted.error("Please Enter Book Name");
  //       return;
  //     }
  //     if (this.form.subject == "") {
  //       this.$toasted.error("Please Enter Subject");
  //       return;
  //     }
  //     if (this.form.course == "") {
  //       this.$toasted.error("Please Select Course");
  //       return;
  //     }
  //     if (this.form.detail == "") {
  //       this.$toasted.error("Please Write Detail");
  //       return;
  //     }
  //     if (this.form.attachments == "") {
  //       this.$toasted.error("Please Attach File");
  //       return;
  //     } else {
  //       ContentDataService.addBook(this.form).then((response) => {
  //         console.log(response.data);
  //         this.$toasted.success(" Addedd Successfully");
  //       });
  //     }

  //     console.log(this.form);
  //   },
  //   file(event) {
  //     this.form.attachments = event.target.files[0];
  //   },
  //   getMajors() {
  //     var id = localStorage.getItem("user_id");
  //     ContentDataService.getMajor(id).then((response) => {
  //       this.degree = response.data.data;
  //     });
  //   },
  // },
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
  border-left: 5px solid #f95858;
  box-shadow: none;
}
select {
  background-color: #fff;
  border: 0px;
  border-bottom: 1px solid #ececec;
  border-radius: 0px;
  outline: 0;
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
  border: 2px solid #0776bd;
  border-radius: 30px;
  padding: 1px 8px !important;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #0776bd;
  font-size: 14px;
  line-height: 1.5;
  outline: none;
  font-family: Segoe UI;
  cursor: pointer;
}

.btn-dangers:hover {
  background-color: #08619a;
  border-color: #08619a;
}

@media only screen and (max-width: 600px) {
  .library {
    font-size: 14px;
  }

  .fa-sharp {
    font-size: 18px;
  }

  .manage-semester {
    font-size: 14px;
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
    font-size: 16px;
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

