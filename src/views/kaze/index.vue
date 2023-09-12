<template>
  <div class="background"></div>
  <div class="page-one" ref="pageOne">
    <img :src="pcMain" ref="pageOneImage">
  </div>
</template>

<script setup name="index">
import anime from "animejs";

import {onMounted, reactive, ref} from "vue";

let pcMain = new URL("../../assets/image/pc/test.png", import.meta.url).href;
const pageOne = ref(null);
const pageOneImage = ref(null);
const handleMainImage = reactive({
  mouseOverContainer: null,
  element: null,
  init() {
    handleMainImage.mouseOverContainer = pageOne.value;
    handleMainImage.element = pageOneImage.value;
    handleMainImage.mouseOverContainer.addEventListener('mousemove', (e) => {
      window.requestAnimationFrame(function () {
        handleMainImage.transformElement(e.clientX, e.clientY);
      });
    });

    handleMainImage.mouseOverContainer.addEventListener('mouseleave', (e) => {
      window.requestAnimationFrame(function () {
        handleMainImage.element.style.transform = "rotateX(0) rotateY(0)";
      });
    });
  },
  transformElement(x, y) {
    let box = handleMainImage.element.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / 300;
    let calcY = (x - box.x - (box.width / 2)) / 300;
    handleMainImage.element.style.transform = `rotateX(${calcX}deg) rotateY(${calcY}deg)`;
  }
})

onMounted(() => {
  handleMainImage.init();
})
</script>

<style rel="stylesheet/scss" lang="scss">
.background {
  user-select: none;
  background-image: linear-gradient(90deg, #ffbb4e, #ff8448);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -1;
}

.page-one {
  position: relative;
  height: 100vh;
  width: 100vw;
  transform-style: preserve-3d;
  perspective: 500px;

  img {
    width: 1100px;
    position: absolute;
    top: 200px;
    left: calc(50vw - 550px);
    box-shadow: 0 0 100px 20px #0000003b;
    transition: all .1s;
    transform-style: preserve-3d;
  }
}
</style>