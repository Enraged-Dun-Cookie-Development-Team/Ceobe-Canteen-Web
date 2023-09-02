<template>
  <div class="headers flex flex-between-center pa-2 position-fixed w-100">
    <div class="h-100 flex1 flex flex-start-center">
      <img src="@/assets/image/all/icon.png" class="h-100">
      <img src="@/assets/image/all/title-white.png" class="h-100">
    </div>
    <!-- h1标签为了SEO优化 -->
    <div class="flex1"><h1 style="display: inline; font-size: 16px; font-weight: 500;">小刻食堂</h1>正常运行中</div>
    <div class="flex flex1 flex-end-center">
      <template v-for="(item,index) in menuList">
        <span v-if="index>0" class="mx-3 user-select-none">/</span>
        <div class="flex flex-start-center menu-item h-100 overflow-hidden pointer" @click="toContent(item.id)">
          <span v-if="item.icon" class="xiaoke" :class="item.icon"></span>
          <span class="ml-1 title transition-all-halfS" @click="scrollIntoView('#'+item.link)">{{ item.text }}</span>
        </div>
      </template>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {MENU_LIST} from "@/assets/constant/menu"

let menuList = MENU_LIST
const toContent = (id: string) => {

}

const scrollIntoView = (traget: string) => {
      const tragetElem:Element | null = document.querySelector(traget);
      const tragetElemPostition = tragetElem.offsetTop;

      // 判断是否支持新特性
      if (
        typeof window.getComputedStyle(document.body).scrollBehavior ==
        "undefined"
      ) {
        // 当前滚动高度
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        // 滚动step方法
        const step = function() {
          // 距离目标滚动距离
          let distance = tragetElemPostition - scrollTop;
          
          // 目标需要滚动的距离，也就是只走全部距离的五分之一
          scrollTop = scrollTop + distance / 5;
          if (Math.abs(distance) < 1) {
            window.scrollTo(0, tragetElemPostition);
          } else {
            window.scrollTo(0, scrollTop);
            setTimeout(step, 20);
          }
        };
        step();
      } else {
        tragetElem.scrollIntoView({
          behavior: "smooth",
          inline: "nearest"
        });
      }
    }
</script>

<style lang="scss" scoped>
.headers {
  height: 60px;
  background: linear-gradient(to right, #ffbb4e, #ff8448);
  color: #ffffff;
  z-index: 999;
  top: 0;

  .menu-item {

    .xiaoke {
      font-size: 20px;
    }

    .title {
      font-size: 20px;
      max-width: 0;
      width: auto;
      white-space: nowrap;
    }

    &:hover, &.active {
      .title {
        max-width: 200px;
      }
    }

  }


  .qr-code {
    height: 120px;
    width: 120px;
    margin-top: 50px;
  }

  .down-btn {
    margin-top: 50px;

    img {
      width: 70%;
    }
  }
}
</style>