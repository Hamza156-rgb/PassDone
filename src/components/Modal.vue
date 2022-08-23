<script>
export default {
  name: "Modal",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
      var con = document.getElementById("main-container");
      con.classList.remove("is-blurred");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
  },
};
</script>

<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()" />

      <div class="modal__dialog">
        <div class="modal__header">
          <div class="closesign">
            <!-- <img src="@/assets/home/close.png" @click="closeModal()" style="background-color:black"/> -->
            <i class="fa fa-times" @click="closeModal()"></i>
          </div>

          <div class="text">
            <slot name="header" />
          </div>
        </div>

        <div class="modal__body">
          <slot name="body" />
        </div>

        <div class="modal__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal {
  background: transparent;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    background-color: white;
    position: relative;
    width: 700px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    width: 30px;
    height: 30px;
  }
  &__header {
    padding: 20px 20px 10px;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__footer {
    padding: 10px 20px 10px;
  }
}
.fa-times {
  float: right;
  color: grey;
  cursor: pointer;
}
.fa-times:hover {
  color: black;
}

@media only screen and (max-width: 600px) {
  .fa-times {
    font-size: 25px;
  }
}
</style>