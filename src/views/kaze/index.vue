<template>
  <div class="background" ref="background"></div>
  <div class="main-area">
    <img class="main-area-img" :src="pcMainImage" ref="pageOneImage">
  </div>
  <div class="page-one" ref="pageOne">
    <img class="page-one-title-img" :src="titleImage">
    <div class="page-one-text">用于实时获取兔兔发的动态</div>
    <div style="height: 2000px"></div>
  </div>
</template>

<script setup name="index">
import anime from "animejs";

import {onMounted, reactive, ref} from "vue";

let pcMainImage = new URL("../../assets/image/pc/test.png", import.meta.url).href;
let titleImage = new URL("../../assets/image/all/title-white.png", import.meta.url).href;

const pageOne = ref(null);
const pageOneImage = ref(null);
const handleMainImage = reactive({
  mouseOverContainer: null,
  element: null,
  init() {
    handleMainImage.mouseOverContainer = document.querySelector('.main-area');
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
  background-image: radial-gradient(circle, rgb(255, 187, 78) 0%, rgb(255, 132, 72) 50%);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  background-size: 100% 200%;
  background-attachment: fixed;
}

.main-area {
  position: fixed;
  width: 100%;
  height: 100vh;
  transform-style: preserve-3d;
  perspective: 500px;
  z-index: 999;

  &-img {
    width: 1280px;
    position: absolute;
    top: 250px;
    left: calc(50% - 640px);
    box-shadow: 0 0 100px 20px rgba(0, 0, 0, 0.4);
    transition: all 0.1s;
    transform-style: preserve-3d;
  }
}


.page-one {
  margin: auto;
  height: 100vh;
  width: 1280px;
  position: relative;

  &-title-img {
    width: 400px;
    position: absolute;
    top: 80px;
    left: 0;
    font-size: 80px;
    text-align: center;
    color: #ffffff;
    fliter: drop-shadow(0 0 20px rgb(0 0 0 / 40%));
    -webkit-filter: drop-shadow(0 0 20px rgb(0 0 0 / 40%));
  }

  &-text {
    position: absolute;
    left: 0;
    top: 170px;
    color: #ffd28a;
    font-size: 38px;
    z-index: 1;
  }
}
</style>