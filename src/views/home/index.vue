<template>
  <div id="full-page" class="pc">
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
  <div class="mobile">
    <mobile :type="type"></mobile>
  </div>
  
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue'
import {Mousewheel} from 'swiper';
import "swiper/scss";
import store from '@/store';
import mobile from '@/views/mobile/index.vue'


import {onMounted, ref, defineProps, provide} from "vue";
import DetailsContent from "./detailsContent.vue";
import Introduce from './introduce.vue';
import Headers from "@/views/home/headers.vue";

const props = defineProps(['type', 'position'])

provide('type', props.type)

const urlData = computed<{
  pathItem: Array<string>,
  anchor: string | any
}>(() => {
  // 参考格式：/index#sponsor
  const fullPath = store.getters.getFullpath
  const pathItem = fullPath.split(/\/(\S*)\#/)
  const anchor = fullPath.split('#')[1]
  // 考虑到移动端的url对符号比较敏感可能识别不到#号的情况，需做特殊化
  const moAnchor = props.position
  return {
    pathItem,
    anchor: anchor || moAnchor
  }
})


onMounted(() => {
  goAnchor(urlData.value.anchor)
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

const goAnchor = (anchor: string) => {
  // 页面缓冲给个延迟时间
  setTimeout(() => {
    window.scrollTo({
      top: document.getElementById(anchor || '')?.offsetTop,
      behavior: "smooth"
    })
  }, 1200);
  
}
</script>

<style lang="scss" scoped>
.main-swiper {
  height: 100vh;

  .swiper-slide-page {
  }
}
.mobile {
  display: none;
}
@media screen and (max-width:800px) {
  .pc {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>