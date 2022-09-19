<template>
  <div>
    <LoginNav />
    <carousel
      ref="myCarousel"
      :per-page="1"
      :paginationEnabled="false"
      :autoplay="true"
      :autoplayTimeout="5000"
      :loop="true"
    >
      <slide>
        <img src="@/assets/home/1.png" class="relative" style="width: 100%" />

        <div class="centered">
          <svg id="more-arrows" @click="goto('div1')">
            <polygon
              class="arrow-top"
              points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
            ></polygon>
            <polygon
              class="arrow-middle"
              points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
            ></polygon>
            <polygon
              class="arrow-bottom"
              points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
            ></polygon>
          </svg>
        </div>

        <div class="first">
          <div class="main">
            <div class="heading">
              <h3>
                World's first integral and interactive educational platform
              </h3>
              <h4>
                which combines social media and e-learning designed to simulate
                the educational process and support their elements.
              </h4>
            </div>

            <div class="information">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <div class="student">
                    <h1>Student?</h1>
                    <p>
                      Find your needed educational material, meet your friends
                      and colleagues and keep in touch with your instructors.
                    </p>
                    <button class="btn btn-outline border-color1">
                      Join Colleagues
                    </button>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <div class="Instructor">
                    <h1>Instructor?</h1>
                    <p>
                      Exchange latest knowledge with instructors from different
                      educational institutes and countries and keep in touch
                      with your students.
                    </p>
                    <button class="btn btn-outline border-color2">
                      Explore Our Society
                    </button>
                  </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <div class="Institutes">
                    <h1>Institutes?</h1>
                    <p>
                      Introduce your institute worldwide, share your
                      announcements and meet your students and instructors.
                    </p>
                    <button class="btn btn-outline border-color3">
                      Resgister Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>

      <slide>
        <div class="relative">
          <img src="@/assets/home/2.jpg" style="width: 100%" />
          <div class="centered">
            <svg id="more-arrows" @click="goto('div1')">
              <polygon
                class="arrow-top"
                points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
              ></polygon>
              <polygon
                class="arrow-middle"
                points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
              ></polygon>
              <polygon
                class="arrow-bottom"
                points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
              ></polygon>
            </svg>
          </div>
        </div>

        <div class="first">
          <div class="main">
            <div class="heading">
              <h3>
                World's first integral and interactive educational platform
              </h3>
              <h4>
                which combines social media and e-learning designed to simulate
                the educational process and support their elements.
              </h4>
            </div>

            <div class="information">
              <div class="row">
                <div class="col-md-4 col-xs-12">
                  <div class="student">
                    <h1>Student?</h1>
                    <p>
                      Find your needed educational material, meet your friends
                      and colleagues and keep in touch with your instructors.
                    </p>
                    <button class="btn btn-outline border-color1">
                      Join Colleagues
                    </button>
                  </div>
                </div>

                <div class="col-md-4 col-xs-12">
                  <div class="Instructor">
                    <h1>Instructor?</h1>
                    <p>
                      Exchange latest knowledge with instructors from different
                      educational institutes and countries and keep in touch
                      with your students.
                    </p>
                    <button class="btn btn-outline border-color2">
                      Explore Our Society
                    </button>
                  </div>
                </div>

                <div class="col-md-4 col-xs-12">
                  <div class="Institutes">
                    <h1>Institutes?</h1>
                    <p>
                      Introduce your institute worldwide, share your
                      announcements and meet your students and instructors.
                    </p>
                    <button class="btn btn-outline border-color3">
                      Resgister Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>

    <div class="container-fluid mb-5">
      <div class="row mt-4">
        <h2 class="txt-blue text-center mb-4">
          Here is a look into what we do
        </h2>

        <div class="col-sm-12 col-xs-12 col-md-6 col-lg-6">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/2u5ei4o4tHY?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-sm-12 col-xs-12 col-md-6 col-lg-6" id="section2">
          <p>
            World's first integral and interactive educational platform which
            combines social media and e-learning designed to simulate the
            educational process and support their elements.
          </p>
          <p>
            It’s a combination between social media and E-learning serves the
            educational process by gathering all its elements such as students,
            Instructors, educational institutes and educational material from
            different universities and sources worldwide in one place in order
            to exchange and share the latest updated knowledge which will have a
            great impact inside the classroom with more quality and variety.
          </p>

          <div class="text-center">
            <button class="btn btn-lg btn-primary mt-lg-5 mt-md-4">
              Start now — Join our community
            </button>
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-3 txt-color1">
          <h4>10</h4>
          <h5>Students</h5>
        </div>
        <div class="col-md-3 txt-color2">
          <h4>6</h4>
          <h5>Instructor</h5>
        </div>
        <div class="col-md-3 txt-color3">
          <h4>163</h4>
          <h5>Institutes</h5>
        </div>
        <div class="col-md-3 txt-color4">
          <h4>78</h4>
          <h5>Materials</h5>
        </div>
      </div>

      <div class="section3 mt-4" ref="div1">
        <div style="background-color: #f6f6f6">
          <h2 class="txt-blue text-center pt-4">Explore latest Materials</h2>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 p-4">
              <div class="card">
                <div class="card-header">
                  <h5 class="heading">Graphic Designing</h5>

                  <h6 class="description">
                    Book-Graphic Designing |<span class="date">
                      posted date:24-02-2022</span
                    >
                  </h6>
                </div>
                <div class="card-body">
                  <img src="@/assets/home/noimg.png" style="width: 100%" />
                </div>
                <div class="card-footer p-4">
                  <p>
                    Maybe you've been eyeing a sweet Udemy course about photo
                    retouching, or perhaps digital painting, NOTHING about
                    Phtoshop....
                  </p>

                  <button class="btn btn-primary" style="width: 100%">
                    Sign in & Learn More
                  </button>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 p-4">
              <div class="card">
                <div class="card-header">
                  <h5 class="heading">Graphic Designing</h5>

                  <h6 class="description">
                    Book-Graphic Designing |<span class="date">
                      posted date:24-02-2022</span
                    >
                  </h6>
                </div>
                <div class="card-body">
                  <img src="@/assets/home/noimg.png" style="width: 100%" />
                </div>
                <div class="card-footer p-4">
                  <p>
                    Maybe you've been eyeing a sweet Udemy course about photo
                    retouching, or perhaps digital painting, NOTHING about
                    Phtoshop....
                  </p>

                  <button class="btn btn-primary" style="width: 100%">
                    Sign in & Learn More
                  </button>
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 p-4">
              <div class="card">
                <div class="card-header">
                  <h5 class="heading">Graphic Designing</h5>

                  <h6 class="description">
                    Book-Graphic Designing |<span class="date">
                      posted date:24-02-2022</span
                    >
                  </h6>
                </div>
                <div class="card-body">
                  <img src="@/assets/home/noimg.png" style="width: 100%" />
                </div>
                <div class="card-footer p-4">
                  <p>
                    Maybe you've been eyeing a sweet Udemy course about photo
                    retouching, or perhaps digital painting, NOTHING about
                    Phtoshop....
                  </p>

                  <button class="btn btn-primary" style="width: 100%">
                    Sign in & Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section4 mt-5">
        <div class="row p-5">
          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-3">
            <img src="@/assets/home/icon-01.png" />
            <h4>Virtual Study Rooms</h4>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-3">
            <img src="@/assets/home/icon-02.png" />
            <h4>Distance Learning</h4>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-3">
            <img src="@/assets/home/icon-03.png" />
            <h4>Interactive platform</h4>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 mt-3">
            <img src="@/assets/home/icon-04.png" />
            <h4>Interactive platform</h4>
          </div>
        </div>
      </div>

      <div class="section5 mt-5">
        <div class="row">
          <h2 class="txt-blue text-center mb-5 mt-4">World Wide Institutes</h2>

          <div class="image">
            <div class="row mb-4">
              <div class="col-md-1"></div>
              <div class="col-md-1"></div>
              <div class="col-md-1 col-4">
                <img src="@/assets/home/noimg.png" />
              </div>
              <div class="col-md-1 col-4">
                <img src="@/assets/home/noimg.png" />
              </div>
              <div class="col-md-1 col-4">
                <img src="@/assets/home/partner1.png" />
              </div>
              <div class="col-md-1 col-4">
                <img src="@/assets/home/partner2.png" />
              </div>
              <div class="col-md-1 col-4">
                <img src="@/assets/home/partner3.jpg" />
              </div>
              <div class="col-md-1 col-4">
                <img src="@/assets/home/partner4.jpg" />
              </div>
              <div class="col-md-1 col-4">
                <img src="@/assets/home/partner5.png" />
              </div>
              <div class="col-md-1 col-4">
                <img src="@/assets/home/partner6.jpg" />
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import LoginNav from "../components/LoginNav.vue";
import Footer from "../components/Footer.vue";

import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Home",
  components: {
    LoginNav,
    Footer,
    Carousel,
    Slide,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    goto(div1) {
      var element = this.$refs[div1];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>

<style scoped>
.border-color1 {
  background-color: transparent;
  color: #fff;
  border-style: solid;
  border-width: 1px;
  border-radius: 0px;
}

.border-color1:hover {
  border-color: #2fa7f3;
  background: linear-gradient(to right, transparent 50%, #2fa7f3 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  margin-right: 10px;
  transition: all 0.5s ease;
}

.border-color2 {
  background-color: transparent;
  color: #fff;
  border-style: solid;
  border-width: 1px;
  border-radius: 0px;
}

.border-color2:hover {
  border-color: #1fc222;
  background: linear-gradient(to right, transparent 50%, #1fc222 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  margin-right: 10px;
  transition: all 0.5s ease;
}

.border-color3 {
  background-color: transparent;
  color: #fff;
  border-style: solid;
  border-width: 1px;
  border-radius: 0px;
}

.border-color3:hover {
  border-color: #957bff;
  background: linear-gradient(to right, transparent 50%, #957bff 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  margin-right: 10px;
  transition: all 0.5s ease;
}

.main {
  padding-left: 100px;
}
.heading h3 {
  color: white;
}
.heading h4 {
  color: white;
  font-size: 14px;
}
.relative {
  width: 100%;
  position: relative;
}

.centered {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.centr {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#more-arrows {
  width: 75px;
  height: 65px;
  /* margin-top: 100%; */
}
#more-arrows:hover polygon {
  fill: #fff;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
#more-arrows:hover polygon.arrow-bottom {
  -webkit-transform: translateY(-18px);
  transform: translateY(-18px);
}
#more-arrows:hover polygon.arrow-top {
  -webkit-transform: translateY(18px);
  transform: translateY(18px);
}

polygon {
  fill: #fff;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
polygon.arrow-middle {
  opacity: 0.75;
}
polygon.arrow-top {
  opacity: 0.5;
}

.student h1 {
  color: #2fa7f3;
}
.student p {
  display: block;
  max-width: 80%;
  color: #fff;
  font-size: 14px;
}
.Instructor h1 {
  color: #05d134;
}
.Instructor p {
  display: block;
  max-width: 80%;
  color: #fff;
  font-size: 14px;
}
.Institutes h1 {
  color: #957bff;
}

.Institutes p {
  display: block;
  max-width: 80%;
  color: #fff;
  font-size: 14px;
}

.first {
  position: absolute;
  top: 15%;
  width: 100%;
}

.student button {
  color: white;
  border: 1px solid #2fa7f3;
}
.Instructor button {
  color: white;
  border: 1px solid #05d134;
}

.Institutes button {
  color: white;
  border: 1px solid #957bff;
}
.txt-blue {
  color: #0099e9;
}
.txt-color1 {
  color: #0099e9;
}
.txt-color1 h4 {
  font-size: 60px;
  text-align: center;
}
.txt-color1 h5 {
  text-align: center;
}
.txt-color2 {
  color: #05d134;
}

.txt-color2 h4 {
  font-size: 60px;
  text-align: center;
}
.txt-color2 h5 {
  text-align: center;
}
.txt-color3 {
  color: #957bff;
}
.txt-color3 h4 {
  font-size: 60px;
  text-align: center;
}
.txt-color3 h5 {
  text-align: center;
}
.txt-color4 {
  color: black;
}
.txt-color4 h4 {
  font-size: 60px;
  text-align: center;
}
.txt-color4 h5 {
  text-align: center;
}
.card-header {
  background-color: white;
  border: 0px;
}
.card-footer {
  background-color: white;
  border: 0px;
}
.date {
  color: #bdb7c0;
}
.description {
  color: #2bd7d5;
}
.heading {
  color: #666;
}

.section4 {
  background-color: #4f4f4f;
}
.section4 h4 {
  color: #fff;
  text-align: center;
}
.section4 img {
  display: block;
  margin: 5px auto;
}

.section5 {
  background-color: #f6f6f6;
}
.image img {
  width: 100%;
  padding-left: 20%;
  cursor: pointer;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
  transition: all 0.5s ease-out;
}

.image img:hover {
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}

.relative {
  height: 100vh;
}

.relative img {
  height: 100vh;
}

@media only screen and (max-width: 768px) {
  .main {
    background-color: #365160;
    padding: 15px;
  }
  .first {
    position: relative;
    top: 0%;
  }

  .relative {
    width: 100%;
    position: absolute;
  }
  .heading h3 {
    font-size: 32px;
  }

  .heading h4 {
    font-size: 16px;
  }

  .student h1 {
    font-size: 2rem;
  }
  .student p {
    font-size: 14px;
  }

  .Instructor h1 {
    font-size: 2rem;
  }

  .Instructor p {
    font-size: 14px;
  }

  .Institutes h1 {
    font-size: 2rem;
  }

  .Institutes p {
    font-size: 14px;
  }

  .txt-color1 h4 {
    font-size: 20px;
  }
  .txt-color1 h5 {
    font-size: 18px;
  }

  .txt-color2 h4 {
    font-size: 20px;
  }
  .txt-color2 h5 {
    font-size: 18px;
  }

  .txt-color3 h4 {
    font-size: 20px;
  }
  .txt-color3 h5 {
    font-size: 18px;
  }

  .txt-color4 h4 {
    font-size: 20px;
  }
  .txt-color4 h5 {
    font-size: 18px;
  }

  .txt-blue {
    font-size: 20px;
  }

  #section2 p {
    font-size: 12px;
  }
  #section2 button {
    font-size: 12px;
    width: 90%;
  }

  .heading {
    font-size: 13px;
  }
  .description {
    font-size: 11px;
  }
  .date {
    font-size: 10px;
  }
  .card-footer p {
    font-size: 13px;
  }
  .card-footer button {
    font-size: 13px;
  }

  .section4 h4 {
    font-size: 12px;
  }
  .section4 img {
    width: 100px;
    height: 80px;
  }
}

@media only screen and (min-width: 768px) {
  .heading {
    font-size: 14px;
  }
  .description {
    font-size: 12px;
  }

  .txt-color1 h4 {
    font-size: 30px;
  }
  .txt-color1 h5 {
    font-size: 20px;
  }

  .txt-color2 h4 {
    font-size: 30px;
  }
  .txt-color2 h5 {
    font-size: 20px;
  }

  .txt-color3 h4 {
    font-size: 30px;
  }
  .txt-color3 h5 {
    font-size: 20px;
  }

  .txt-color4 h4 {
    font-size: 30px;
  }
  .txt-color4 h5 {
    font-size: 20px;
  }

  .txt-blue {
    font-size: 23px;
  }
  #section2 p {
    font-size: 14px;
  }
  #section2 button {
    font-size: 14px;
  }

  .date {
    font-size: 11px;
  }
  .card-footer p {
    font-size: 14px;
  }
  .card-footer button {
    font-size: 12px;
  }

  .section4 h4 {
    font-size: 13px;
  }
  .section4 img {
    width: 110px;
    height: 85px;
  }
}

@media only screen and (min-width: 992px) {
  .relative {
    height: 70vh;
  }

  .relative img {
    height: 70vh;
  }

  .txt-color1 h4 {
    font-size: 40px;
  }
  .txt-color1 h5 {
    font-size: 25px;
  }

  .txt-color2 h4 {
    font-size: 40px;
  }
  .txt-color2 h5 {
    font-size: 25px;
  }

  .txt-color3 h4 {
    font-size: 40px;
  }
  .txt-color3 h5 {
    font-size: 25px;
  }

  .txt-color4 h4 {
    font-size: 40px;
  }
  .txt-color4 h5 {
    font-size: 25px;
  }

  .txt-blue {
    font-size: 25px;
  }
  #section2 p {
    font-size: 16px;
  }
  #section2 button {
    font-size: 16px;
  }

  .heading {
    font-size: 15px;
  }
  .description {
    font-size: 13px;
  }
  .date {
    font-size: 12px;
  }
  .card-footer p {
    font-size: 15px;
  }
  .card-footer button {
    font-size: 15px;
  }

  .section4 h4 {
    font-size: 14px;
  }
  .section4 img {
    width: 120px;
    height: 90px;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .relative {
    height: 100vh;
  }

  .relative img {
    height: 100vh;
  }

  .txt-color1 h4 {
    font-size: 50px;
  }
  .txt-color1 h5 {
    font-size: 20px;
  }

  .txt-color2 h4 {
    font-size: 50px;
  }
  .txt-color2 h5 {
    font-size: 20px;
  }

  .txt-color3 h4 {
    font-size: 50px;
  }
  .txt-color3 h5 {
    font-size: 20px;
  }

  .txt-color4 h4 {
    font-size: 50px;
  }
  .txt-color4 h5 {
    font-size: 20px;
  }

  .txt-blue {
    font-size: 27px;
  }
  #section2 p {
    font-size: 18px;
  }

  #section2 button {
    font-size: 18px;
  }

  .heading {
    font-size: 16px;
  }
  .description {
    font-size: 14px;
  }
  .date {
    font-size: 13px;
  }

  .card-footer p {
    font-size: 16px;
  }

  .card-footer button {
    font-size: 16px;
  }

  .section4 h4 {
    font-size: 16px;
  }
  .section4 img {
    width: 137px;
    height: 98px;
  }
}
</style>