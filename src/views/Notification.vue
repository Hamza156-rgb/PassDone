<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
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
          
              <h4 class="library">Notifications</h4>
          

            <hr />

            
          </div>
        </div>
      </div>
    </div>
     <BackToTop />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import BackToTop from "../components/BackToTop.vue";
export default {
  name: "Notification",
  components: {
    Navbar,
     BackToTop,
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
}

</style>