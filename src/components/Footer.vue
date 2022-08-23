<template>
  <div class="container-fluid" style="background-color: #365160">
    <div class="row p-4">
      <div class="col-md-6 col-12 color">
        <h4 class="head">About PassDone</h4>
        <p class="para">
          PassDone.com is the world’s First integral and interactive educational
          platform designed to give the cultural and educational exchange
          another dimension...
        </p>
        <button class="btn btn-primary" @click="$refs.modalName1.openModal()">
          Read More
        </button>
      </div>
      <div class="col-md-6 col-12 color">
        <h4 class="head">Connect with us</h4>
        <p class="para">
          Reach us at <a href="hello@passdone.org"> hello@passdone.org</a> or
          through our online contact form.
        </p>
        <button class="btn btn-primary mt-4">Contact Us</button>
      </div>

      <modal ref="modalName1">
        <template v-slot:header>
          <h3 class="about">About PassDone</h3>
        </template>
        
        <template v-slot:body>
          <div class="main" style="border-top:1px solid grey">
            <p class="mt-3">
              PassDone.com is the world’s First integral and interactive
              educational platform designed to give the cultural and educational
              exchange another dimension.
            </p>
            <p class="mt-3">
              It’s a combination between social media and E-learning serves the
              educational process by gathering all its elements such as
              students, Instructors, educational institutes and educational
              material from different universities and sources worldwide in one
              place in order to exchange and share the latest updated knowledge
              which will have a great impact inside the classroom with more
              quality and variety.
            </p>
            <p class="mt-3">
              PassDone Saves the students’ time while writing and searching for
              their daily notes, references and other needed educational
              material by inserting them all in their smart phones. As well as
              it links them with their Instructors and link instructors with
              their colleagues inside and outside their educational institutes.
              It’s also encouraging the positivity of Knowledge Sharing by
              giving B+ points (positivity indicator) against members positive
              actions such like sharing useful content and those points can be
              exchange with gifts and surprises later on.
            </p>

            <p class="mt-3">
              Finally we wish to deliver the knowledge to everyone who need it
              in easiest and shortest way and “One World, One Word” in not only
              out slogan, but it’s also our target!
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

export default {
  name: "Footer",
  components: {
    Modal,
  },
};
</script>

<style scoped>
.head {
  color: white;
  font-size: 28px;
}

.para {
  color: white;
}
.about {
  font-size: 1.5rem;
  text-align: left;
  
}
.regards{
  text-align: left;
}
</style>