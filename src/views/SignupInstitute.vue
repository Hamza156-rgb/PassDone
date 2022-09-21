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

        <div class="tab-pane active mt-3" v-if="one">
          <section
            class="Material-contact-section section-padding section-dark"
          >
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label>Country *</label>
                <select>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antartica">Antarctica</option>
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
                  <option value="Bosnia and Herzegowina">
                    Bosnia and Herzegowina
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
                  <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Congo">
                    Congo, the Democratic Republic of the
                  </option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                  <option value="Croatia">Croatia (Hrvatska)</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands">
                    Falkland Islands (Malvinas)
                  </option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="France Metropolitan">
                    France, Metropolitan
                  </option>
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
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Heard and McDonald Islands">
                    Heard and Mc Donald Islands
                  </option>
                  <option value="Holy See">
                    Holy See (Vatican City State)
                  </option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran (Islamic Republic of)</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Democratic People's Republic of Korea">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="Korea">Korea, Republic of</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Lao">Lao People's Democratic Republic</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon" selected>Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libyan Arab Jamahiriya">
                    Libyan Arab Jamahiriya
                  </option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macau">Macau</option>
                  <option value="Macedonia">
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
                  <option value="Micronesia">
                    Micronesia, Federated States of
                  </option>
                  <option value="Moldova">Moldova, Republic of</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
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
                  <option value="Russia">Russian Federation</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Kitts and Nevis">
                    Saint Kitts and Nevis
                  </option>
                  <option value="Saint LUCIA">Saint LUCIA</option>
                  <option value="Saint Vincent">
                    Saint Vincent and the Grenadines
                  </option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">
                    Sao Tome and Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia (Slovak Republic)</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Georgia">
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option value="Span">Spain</option>
                  <option value="SriLanka">Sri Lanka</option>
                  <option value="St. Helena">St. Helena</option>
                  <option value="St. Pierre and Miguelon">
                    St. Pierre and Miquelon
                  </option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Svalbard">
                    Svalbard and Jan Mayen Islands
                  </option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syrian Arab Republic</option>
                  <option value="Taiwan">Taiwan, Province of China</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania, United Republic of</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">
                    Trinidad and Tobago
                  </option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks and Caicos">
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
                  <option value="Vietnam">Viet Nam</option>
                  <option value="Virgin Islands (British)">
                    Virgin Islands (British)
                  </option>
                  <option value="Virgin Islands (U.S)">
                    Virgin Islands (U.S.)
                  </option>
                  <option value="Wallis and Futana Islands">
                    Wallis and Futuna Islands
                  </option>
                  <option value="Western Sahara">Western Sahara</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label>Established Year*</label>
                <select>
                  <option>year</option>
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
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label> Name Of Educational Institute*</label>
                <input class="form-control" />
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label class="pt-lg-1">Type Of Institute*</label>
                <select class="pt-lg-2">
                  <option>College</option>
                  <option>Other</option>
                  <option>School</option>
                  <option>University</option>
                </select>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label class="mt-1"
                  >Majors Use 'comma' or 'tab' to add new
                </label>
                <multiselect
                  v-model="value"
                  :options="options"
                  :multiple="true"
                  :close-on-select="false"
                  :clear-on-select="false"
                  :preserve-search="true"
                  placeholder="Pick some"
                  label="name"
                  track-by="name"
                  :preselect-first="true"
                >
                  <template
                    slot="selection"
                    slot-scope="{ values, search, isOpen }"
                    ><span
                      class="multiselect__single"
                      v-if="values.length &amp;&amp; !isOpen"
                      >{{ values.length }} options selected</span
                    ></template
                  >
                </multiselect>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label class="mt-1">
                  Training Course Use 'comma' or 'tab' to add new
                </label>
                <multiselect
                  v-model="values"
                  :options="optionss"
                  :multiple="true"
                  :close-on-select="false"
                  :clear-on-select="false"
                  :preserve-search="true"
                  placeholder="Pick some"
                  label="name"
                  track-by="name"
                  :preselect-first="true"
                >
                  <template
                    slot="selection"
                    slot-scope="{ values, search, isOpen }"
                    ><span
                      class="multiselect__single"
                      v-if="values.length &amp;&amp; !isOpen"
                      >{{ values.length }} options selected</span
                    ></template
                  >
                </multiselect>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-2">
                <label class="mt-1"> About Institute * </label>

                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="4"
                ></textarea>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label class="mt-1"> Address * </label>

                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="4"
                ></textarea>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label class="mt-1"> Contact Information * </label>

                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="4"
                ></textarea>
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
                    class="btn btn-lg btn-primary mr-1 mt-3"
                    type="button"
                      @click="div1()"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    class="btn btn-lg btn-primary mt-3"
                    style="margin-left: 10px"
                  >
                    Register
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
  name: "SignupInstitute",
  data() {
    return {
      one: true,
      two: false,
      value: [],
      options: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Adonis", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP" },
        { name: "Phoenix", language: "Elixir" },
      ],
      values: [],
      optionss: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Adonis", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP" },
        { name: "Phoenix", language: "Elixir" },
      ],
    };
  },
  methods: {
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



<style >
/* This Tag is used for multi because in scoped its not worked */
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