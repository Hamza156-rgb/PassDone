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
            <h3 class="setting">Personal Information</h3>
            <hr />
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <div class="form-group">
                  <label>First Name</label>
                  <input type="text" class="form-control mt-1" />
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <div class="form-group">
                  <label>Second Name </label>
                  <input type="text" class="form-control mt-1" />
                </div>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <div class="form-group">
                  <label>Last Name </label>
                  <input type="text" class="form-control mt-1" />
                </div>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <div class="form-group">
                  <label>Nick Name </label>
                  <input type="text" class="form-control mt-1" />
                </div>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label>Birth Day (M/D/Y) *</label>
                <input
                  type="date"
                  name="dateofbirth"
                  id="dateofbirth"
                  class="form-control mt-1"
                />
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label>Gender</label>
                <select class="form-select mt-1">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <div class="form-group">
                  <label>Mobile</label>
                  <input type="text" class="form-control mt-1" />
                </div>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label>Hometown</label>
                <select
                  class="form-select mt-1"
                  aria-label="Default select example"
                >
                  <option>City</option>
                  <option>City</option>
                </select>
              </div>

              <h3 class="setting mt-3">Profile Identity</h3>
              <hr />

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label>Profile Picture</label>
                <input type="file" class="form-control mt-1" />
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label>Cover Picture</label>
                <input type="file" class="form-control mt-1" />
              </div>

              <h3 class="setting mt-3">Current Work</h3>
              <hr />

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label for="exampleFormControlSelect2">Lives In</label>
                <select
                  class="form-select selectpicker mt-1"
                  id="select-country"
                  data-live-search="true"
                >
                  <option data-tokens="china">China</option>
                  <option data-tokens="malayasia">Malayasia</option>
                  <option data-tokens="singapore">Singapore</option>
                </select>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label for="inputCity">City</label>
                <input type="text" class="form-control mt-1" id="inputCity" />
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label for="exampleFormControlSelect2">University/School</label>
                <select class="form-select mt-1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label for="exampleFormControlSelect2"
                  >Job Title / Academic Rank *</label
                >
                <select class="form-select mt-1">
                  <option>Emeritius Professor</option>
                  <option>Professor</option>
                  <option>Associate Professor</option>
                  <option>Assisstant Professor</option>
                </select>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <label for="exampleFormControlSelect2">Major you teach</label>
                <select class="form-select mt-1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2"></div>
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-3 mb-2">
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
                <label>Period</label>
                <select class="form-select mt-1">
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
                <label></label>
                <select class="form-select mt-1">
                  <option>Till Now</option>
                </select>
              </div>

              <h3 class="setting mt-3">Login Information</h3>
              <hr />

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control mt-1"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-check mt-2">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >Show Email To Publick</label
                  >
                </div>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-2">
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control mt-1"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div class="form-check mt-2">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >Show Email To Publick</label
                  >
                </div>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3 mt-3">
                <button class="btn btn-primarys">Update Profile</button>
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
  data() {
    return {
      value: [],
      options: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Adonis", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP" },
        { name: "Phoenix", language: "Elixir" },
      ],
    };
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

.btn {
  border-width: 0;
  line-height: 1.538;
  padding: 9px 20px;
  border-radius: 0;
  transition: none;
  min-height: 38px;
  width: 100%;
}

.btn-primarys {
  color: #fff;
  background-color: #8760fb;
  border-color: #8760fb;
}

.btn-primarys:hover {
  background-color: #7c59e6;
  border-color: #7c59e6;
}
</style>