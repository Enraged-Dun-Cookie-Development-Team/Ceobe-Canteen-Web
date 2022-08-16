<template>
  <div class="install-browser">
    <div class="box" :class="windowIsOpen?'active':''">
      <div class="box-name">Google浏览器</div>
      <div class="box-go pointer" @click="open"><i class="xiaoke icon-xiaoke-xiayibu"></i></div>
      <div class="box-close pointer" @click="close"><i class="xiaoke icon-xiaoke-fanhui"></i></div>
      <img class="box-icon" src="@/assets/image/pageTwo/logo/chrome.png"/>
      <div class="box-content">
        内容
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

let windowIsOpen = ref(false);
let open = () => {
  windowIsOpen.value = true;
}
let close = () => {
  windowIsOpen.value = false;
}
</script>

<style lang="scss">
.install-browser {
  position: relative;

  .box {
    border: 1px solid #39A0F7;
    width: 200px;
    height: 200px;
    overflow: hidden;
    position: relative;
    transition: 1s all;

    .box-name {
      position: absolute;
      top: 20px;
      left: 20px;
      font-size: 26px;
      transition: 1s all;
    }

    .box-icon {
      transition: 1s all;
      position: absolute;
      left: -30px;
      bottom: -30px;
      width: 130px;
      height: 130px;
      opacity: 0.5;
      z-index: -1;
      transform: rotate(-30deg);
    }

    .box-go, .box-close {
      transition: 1s all;
      position: absolute;
      font-size: 26px;
      background: #39A0F7;
      color: #ffffff;
      border-radius: 50%;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }

    .box-close {
      top: 20px;
      opacity: 0;
      pointer-events: none;
      transition: 1s all;
    }

    &.active {
      width: 100%;
      height: 500px;

      .box-icon {
        transform: rotate(0);
        left: 10px;
        bottom: 10px;
        opacity: 1;
      }

      .box-go {
        opacity: 0;
        pointer-events: none;
      }

      .box-close {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
}

</style>