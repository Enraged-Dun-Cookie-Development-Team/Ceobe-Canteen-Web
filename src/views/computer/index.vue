<template>
  <div id="full-page">
    <swiper
        @slideChange="onSlideChange"
        @swiper="onSwiper"
        :modules="modules"
        direction="vertical"
        :mousewheel="true"
        class="main-swiper"
        :noSwiping="true"
    >
      <swiper-slide class="swiper-slide-page page1">
        <page-one/>
      </swiper-slide>
      <swiper-slide class="swiper-slide-page page2">
        <page-two @heightToZero="heightToZero"/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue'
import {Mousewheel} from 'swiper';
import "swiper/scss";


import {onMounted, ref,} from "vue";
import PageTwo from "@/views/computer/pageTwo.vue";
import PageOne from './pageOne.vue';

onMounted(() => {
})

let swiperData: any = null;
const onSwiper = (data: any) => {
  swiperData = data;
}
const onSlideChange = (data: any) => {
  if (data.activeIndex == 1) {
    swiperData.mousewheel.disable();
  }
};
const heightToZero = () => {
  swiperData.mousewheel.enable();
}
const modules = [Mousewheel]
</script>

<style lang="scss">
.main-swiper {
  height: 100vh;

  .swiper-slide-page {
    //&.page1 {
    //  background: #5892e0;
    //}
    //
    //&.page2 {
    //  background: #65b587;
    //}
  }
}
</style>