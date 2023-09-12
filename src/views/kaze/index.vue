<template>
  <div class="background" ref="background"></div>
  <div class="main-area" :class="eventListener.scrollClass">
    <img class="main-area-img" :src="pcMainImage" ref="pageOneImage">
    <img class="main-area-img-list" :src="pcListImage">
  </div>
  <div class="page-one" ref="pageOne">
    <img class="page-one-title-img" :src="titleImage">
    <div class="page-one-text">用于实时获取兔兔发的动态</div>
  </div>
  <div class="page-two" ref="pageOne">
    <function-message-box class="function-message-box" label="博士终端"/>
    <function-message-box class="function-message-box" label="蹲饼！"/>
    <function-message-box class="function-message-box" label="常用工具"/>
    <message-message-box
        class="message-message-box"
        line1="饼源消息"
        line2="即刻推送"
        :mask_x="80"
        :mask_y="0"
        :block_x="0"
        :block_y="13"
        :txt_x="89"
        :txt_y="29"
        :txt_z="5"
    />
    <message-message-box
        class="message-message-box"
        line1="多类工具"
        line2="即刻体验"
        :block_x="0"
        :block_y="0"
        :mask_x="50"
        :mask_y="15"
        :txt_x="71"
        :txt_y="30"
        :txt_z="5"
    />
    <message-message-box
        class="message-message-box"
        line1="博士，理智"
        line2="又满了哦"
        :block_x="0"
        :block_y="0"
        :mask_w="170"
        :mask_x="22"
        :mask_y="10"
        :txt_x="56"
        :txt_y="31"
        :txt_z="5"
    />
  </div>
  <div style="height: 2000px"></div>
</template>

<script setup name="index">
import anime from "animejs";

import {onMounted, reactive, ref, watch} from "vue";
import FunctionMessageBox from "@/components/introduce/functionMessageBox.vue";
import MessageMessageBox from "@/components/introduce/messageMessageBox.vue";


let pcMainImage = new URL("../../assets/image/pc/main.jpg", import.meta.url).href;
let pcListImage = new URL("../../assets/image/pc/list.jpg", import.meta.url).href;
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
      if (eventListener.scroll == 0) {
        handleMainImage.element.style.transition = "all .3s"
        window.requestAnimationFrame(function () {
          handleMainImage.transformElement(e.clientX, e.clientY);
        });
      }
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
const eventListener = reactive({
  scroll: 0,
  scrollClass: "",// 根据页面滚动改变class
  init() {
    window.addEventListener('scroll', () => {
      eventListener.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(eventListener.scroll)
      if (eventListener.scroll <= 100) {
        eventListener.scrollClass = null;
      } else if (eventListener.scroll > 100 && eventListener.scroll <= 1380) {
        console.log(eventListener.scrollClass)
        eventListener.scrollClass = "two"
      } else if (eventListener.scroll > 1380) {
        console.log(eventListener.scrollClass)
        eventListener.scrollClass = "three"
      }
    }, true)
  }
})
onMounted(() => {
  handleMainImage.init();
  eventListener.init();
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
  z-index: 3;

  &-img {
    width: 1280px;
    position: absolute;
    top: 250px;
    left: calc(50% - 640px);
    box-shadow: 0 0 100px 20px rgba(0, 0, 0, 0.4);
    transition: all 0.1s;
    transform-style: preserve-3d;
    animation-name: move;
    animation-duration: 3s;
  }

  &-img-list {
    opacity: 0;
    width: 674px;
    position: absolute;
    top: 170px;
    left: calc(50% - 337px);
    transition: all 0.3s
  }

  &.two {
    .main-area-img {
      transition: all 0.3s !important;
      transform: scale(0.7) !important;
    }
  }

  &.three {
    .main-area-img {
      transition: all 0.3s !important;
      transform: scale(0.935) translateX(-257px) translateY(-175px) !important;
      opacity: 0;
    }

    .main-area-img-list {
      opacity: 1;
      z-index: 6;
    }
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

.page-two {
  margin: auto;
  height: 100vh;
  width: 1280px;
  position: relative;
  z-index: 4;

  .function-message-box {
    transform: scale(0.7);

    &:nth-child(1) {
      position: absolute;
      top: 100px;
      left: 60px;
    }

    &:nth-child(2) {
      position: absolute;
      top: 300px;
      left: 100px;
    }

    &:nth-child(3) {
      position: absolute;
      top: 500px;
      left: 80px;
    }
  }

  .message-message-box {
    transform: scale(0.7);

    &:nth-child(4) {
      position: absolute;
      top: 30px;
      right: 60px;
    }

    &:nth-child(5) {
      position: absolute;
      top: 230px;
      right: 0px;
    }

    &:nth-child(6) {
      position: absolute;
      top: 390px;
      right: 50px;
    }
  }

}
</style>
