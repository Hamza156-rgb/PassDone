<template>
  <div>
 <a id="back-to-top" style="display: inline" @click="scroll()"
      ><i class="fa fa-chevron-up" ></i
    ></a>
  </div>
</template>

<script>
export default {
name:"BackToTop",
 methods: {
    scroll() {
      window.scroll(0, 0);
    },
  },
}
</script>

<style scoped>

#back-to-top {
  color: #fff;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  display: none;
  text-align: center;
  z-index: 10000;
  height: 30px;
  width: 30px;
  background-repeat: no-repeat;
  border: 2px solid transparent;
  background: #0776bd;
  background-position: center;
  transition: background-color 0.1s linear;
  -moz-transition: background-color 0.1s linear;
  -webkit-transition: background-color 0.1s linear;
  -o-transition: background-color 0.1s linear;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.8rem;
}

#back-to-top:hover {
  color: #0776bd !important;
  border: 2px solid #0776bd;
  background: #fff !important;
}

</style>