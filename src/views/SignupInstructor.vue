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
                    <option value="Male" selected>Male</option>
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
                    :options="homeTownCountry.map((user) => user.id)"
                    :custom-label="
                      (opt) => homeTownCountry.find((x) => x.id == opt).name
                    "
                    v-on:change="homeTown"
                    label="name"
                    track-by="name"
                    placeholder="Choose One"
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
                    :options="livesIn.map((user) => user.id)"
                    :custom-label="
                      (opt) => livesIn.find((x) => x.id == opt).name
                    "
                    @select="getUniversities($event)"
                    label="name"
                    track-by="name"
                    v-model="form.livesIn"
                    placeholder="Choose One"
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
                    <button
                      class="btn btn-lg btn-primary mt-3"
                      id="ksetp1"
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

                  <multiselect
                    :options="universities.map((user) => user.user_id)"
                    :custom-label="
                      (opt) => universities.find((x) => x.user_id == opt).name
                    "
                    @select="getMajors($event)"
                    label="name"
                    track-by="name"
                    placeholder="Choose One"
                    v-model="form.university"
                    :class="{
                      'is-invalid': submitted && $v.form.university.$error,
                    }"
                  >
                  </multiselect>
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
                  <label>Job Title/Academic Rank*</label>

                  <multiselect
                    :options="jobTitles.map((user) => user.id)"
                    :custom-label="
                      (opt) => jobTitles.find((x) => x.id == opt).name
                    "
                    label="name"
                    track-by="name"
                    v-model="form.jobtitle"
                    placeholder="Choose One"
                    :class="{
                      'is-invalid': submitted && $v.form.jobtitle.$error,
                    }"
                  >
                  </multiselect>
                  <div
                    v-if="submitted && $v.form.jobtitle.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.jobtitle.required">
                      Job Title is required
                    </span>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                  <label>Majors you Teach</label>

                  <multiselect
                    v-model="form.doubleMajors"
                    :options="majors.map((user) => user.id)"
                    :custom-label="
                      (opt) => majors.find((x) => x.id == opt).name
                    "
                    :multiple="true"
                    :clear-on-select="false"
                    :preserve-search="false"
                    :class="{
                      'is-invalid': submitted && $v.form.doubleMajors.$error,
                    }"
                  >
                  </multiselect>

                  <div
                    v-if="submitted && $v.form.doubleMajors.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.form.doubleMajors.required">
                       Majors you Teach is required
                    </span>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                  <label>Select Major You Are Intrested In *</label>

                  <multiselect
                    :options="majors.map((user) => user.id)"
                    :custom-label="
                      (opt) => majors.find((x) => x.id == opt).name
                    "
                    :multiple="true"
                    :clear-on-select="false"
                    :preserve-search="false"
                    v-model="form.majors"
                    placeholder="Choose One"
                    :class="{
                      'is-invalid': submitted && $v.form.majors.$error,
                    }"
                  >
                  </multiselect>
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
                  <label>Period</label>

                  <!-- <multiselect
                    :options="year"
                    label="name"
                    track-by="name"
                    v-model="form.period"
                    placeholder="Choose One"
                    :class="{
                      'is-invalid': submitted && $v.form.period.$error,
                    }"
                  >
                  </multiselect> -->

                  <select
                    id="year"
                    name="year"
                    v-model="form.period"
                    :class="{
                      'is-invalid': submitted && $v.form.period.$error,
                    }"
                  >
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
                  <label>Till Now</label>
                  <!-- <multiselect
                    :options="TillNow"
                    label="name"
                    track-by="name"
                    v-model="form.tillNow"
                    placeholder="Till Now"
                    :class="{
                      'is-invalid': submitted && $v.form.tillNow.$error,
                    }"
                  >
                
                  </multiselect> -->
                  <select
                    id="year"
                    name="year"
                    v-model="form.tillNow"
                    :class="{
                      'is-invalid': submitted && $v.form.tillNow.$error,
                    }"
                  >
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
                      @click="div3()"
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
import { required, email, sameAs } from "vuelidate/lib/validators";
import ContentDataService from "../services/ContentDataService";

export default {
  name: "SignupInstructor",
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
        majors: [],
        jobtitle: "",
        doubleMajors: [],
      
        period: "",
        tillNow: "",
        // login information
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
      },

      homeTownCountry: [],
      livesIn: [],
      universities: [],
      majors: [],
    
      jobTitles: [],

      year: [
        { name: "2022" },
        { name: "2021" },
        { name: "2020" },
        { name: "2019" },
        { name: "2018" },
        { name: "2017" },
        { name: "2016" },
        { name: "2015" },
        { name: "2014" },
        { name: "2013" },
        { name: "2012" },
        { name: "2011" },
        { name: "2010" },
        { name: "2009" },
        { name: "2008" },
        { name: "2007" },
        { name: "2006" },
        { name: "2005" },
        { name: "2004" },
        { name: "2003" },
        { name: "2002" },
        { name: "2001" },
        { name: "2000" },
        { name: "1999" },
        { name: "1998" },
        { name: "1997" },
      ],

      TillNow: [
        { name: "TillNow" },
        { name: "2022" },
        { name: "2021" },
        { name: "2020" },
        { name: "2019" },
        { name: "2018" },
        { name: "2017" },
        { name: "2016" },
        { name: "2015" },
        { name: "2014" },
        { name: "2013" },
        { name: "2012" },
        { name: "2011" },
        { name: "2010" },
        { name: "2009" },
        { name: "2008" },
        { name: "2007" },
        { name: "2006" },
        { name: "2005" },
        { name: "2004" },
        { name: "2003" },
        { name: "2002" },
        { name: "2001" },
        { name: "2000" },
        { name: "1999" },
        { name: "1998" },
        { name: "1997" },
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
      jobtitle: { required },
      period: { required },
      tillNow: { required },
      email: { required, email },
      confirmEmail: { required, email },
      password: { required },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
    },
  },

  created() {
    this.homeTown();
    this.LivesIn();
    this.getJobs();
  },

  methods: {
    homeTown() {
      ContentDataService.getCountry().then((response) => {
        this.homeTownCountry = response.data.data;
      });
    },
    LivesIn() {
      ContentDataService.getCountry().then((response) => {
        this.livesIn = response.data.data;
      });
    },

    getUniversities(event) {
      console.log(event);
      ContentDataService.getUniversity(event).then((response) => {
        this.universities = response.data.data;
        console.log(this.universities);
      });
    },

    getMajors(event) {
      ContentDataService.getMajor(event).then((response) => {
        console.log(response.data.data);
        this.majors = response.data.data;
      });

      ContentDataService.getJobs(event).then((response) => {
        console.log(response.data.data);
        this.degree = response.data.data;
      });
    },

    getJobs() {
      ContentDataService.jobTitle().then((response) => {
        this.jobTitles = response.data.data;
        console.log(response.data);
        console.log(this.jobTitles);
      });
    },

    submit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
       
 else {
        console.log(this.form);

        ContentDataService.postInstructor(this.form)
          .then((response) => {
            console.log(response.data);
            this.$toasted.success(" Registered Successfully");
            // this.$router.push("/home");
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