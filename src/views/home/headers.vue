<template>
  <div class="headers flex flex-between-center pa-2 position-fixed w-100">
    <div class="h-100 flex1 flex flex-start-center">
      <img src="@/assets/image/all/icon.png" class="h-100">
      <img src="@/assets/image/all/title-white.png" class="h-100">
    </div>
    <div class="flex1">小刻食堂正常运行中</div>
    <div class="flex flex1 flex-end-center">
      <template v-for="(item,index) in menuList">
        <span v-if="index>0" class="mx-3 user-select-none">/</span>
        <div class="flex flex-start-center menu-item h-100 overflow-hidden pointer" @click="toContent(item.id)">
          <span v-if="item.icon" class="xiaoke" :class="item.icon"></span>
          <span class="ml-1 title transition-all-halfS">{{ item.text }}</span>
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
</script>

<style lang="scss">
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