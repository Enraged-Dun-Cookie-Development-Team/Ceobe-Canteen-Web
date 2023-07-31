<template>
  <div id="full-page">
    <headers/>
    <introduce/>
    <details-content/>
    <!--    <swiper-->
    <!--        @slideChange="onSlideChange"-->
    <!--        @swiper="onSwiper"-->
    <!--        :modules="modules"-->
    <!--        direction="vertical"-->
    <!--        :mousewheel="true"-->
    <!--        class="main-swiper"-->
    <!--        :noSwiping="true"-->
    <!--    >-->
    <!--      <swiper-slide class="swiper-slide-page page1">-->
    <!--        -->
    <!--      </swiper-slide>-->
    <!--      <swiper-slide class="swiper-slide-page page2">-->
    <!--       -->
    <!--      </swiper-slide>-->
    <!--    </swiper>-->
  </div>
</template>

<script lang="ts" setup>
import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue'
import {Mousewheel} from 'swiper';
import "swiper/scss";


import {onMounted, ref} from "vue";
import DetailsContent from "./detailsContent.vue";
import Introduce from './introduce.vue';
import Headers from "@/views/home/headers.vue";

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
  }
}
</style>