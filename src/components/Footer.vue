<template>
  <div class="container-fluid" style="background-color: #365160">
    <div class="row p-4">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 color mt-2">
        <h4 class="head">{{ footerTitle }}</h4>
        <p class="para">{{ footerDescription.slice(0, 152) }}...</p>
        <button class="btn btn-primary" @click="$refs.modalName1.openModal()">
          Read More
        </button>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 color mt-2">
        <h4 class="head">Connect with us</h4>
        <p class="para">
          Reach us at <a :href="email"> hello@passdone.org</a> or through our
          online contact form.
        </p>
        <button class="btn btn-primary mt-lg-4 mt-md-4">Contact Us</button>
      </div>

      <modal ref="modalName1">
        <template v-slot:header>
          <h3 class="about">{{ footerTitle }}</h3>
        </template>

        <template v-slot:body>
          <div class="main" style="border-top: 1px solid grey">
            <p class="mt-3">
              {{ footerDescription }}
            </p>
          </div>
        </template>

        <template v-slot:footer>
          <h6 class="regards">Best Regards,</h6>
        </template>
      </modal>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
import ContentDataService from "../services/ContentDataService";

export default {
  name: "Footer",
  components: {
    Modal,
  },
  data() {
    return {
      footerTitle: "",
      footerDescription: "",
      email: "",
    };
  },

  created() {
    this.getFooter();
    this.getMail();
  },

  methods: {
    getFooter() {
      ContentDataService.getHomeFooter().then((response) => {
        console.log(response.data);
        this.footerDescription = response.data.data[0].description;
        this.footerTitle = response.data.data[0].title;
      });
    },
    getMail() {
      ContentDataService.getEmail().then((response) => {
        console.log(response.data);
        this.email = response.data.data[0].email;
      });
    },
  },
};
</script>

<style scoped>
.head {
  color: white;
}

.para {
  color: white;
}
.about {
  text-align: left;
}
.regards {
  text-align: left;
}

@media only screen and (max-width: 600px) {
  .head {
    font-size: 12px;
  }

  .para {
    font-size: 10px;
  }
  button {
    font-size: 10px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .head {
    font-size: 14px;
  }

  .para {
    font-size: 10px;
  }
  button {
    font-size: 10px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .head {
    font-size: 16px;
  }

  .para {
    font-size: 12px;
  }
  button {
    font-size: 14px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .head {
    font-size: 18px;
  }

  .para {
    font-size: 14px;
  }
  button {
    font-size: 16px;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .head {
    font-size: 20px;
  }

  .para {
    font-size: 16px;
  }
  button {
    font-size: 18px;
  }
}
</style>