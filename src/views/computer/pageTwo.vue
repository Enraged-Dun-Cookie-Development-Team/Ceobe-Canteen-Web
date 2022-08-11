<template>
  <div class="flex">
    <div class="h100 menu ta-c" :style="{height:menuHeight+'px'}">
      <div class="title">首页</div>
      <div style="padding-left: 70px">
        <div v-for="item in menu" class="flex flex-start-center menu-item">
          <img :src="require('@/assets/image/menuIcon/'+item[0])">
          <span class="ml10">{{ item[1] }}</span>
        </div>
      </div>
      <div class="qr-code">这是二维码</div>
      <div class="down-btn ta-c">
        <img src="@/assets/image/menuIcon/appleDown.png">
        <img src="@/assets/image/menuIcon/androidDown.png">
        <img src="@/assets/image/menuIcon/cjDown.png">
      </div>
    </div>
    <div class="flex9">?</div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";

let menu = [['xk.png', '蹲饼'], ['cygj.png', '常用工具'], ['cygj.png', '博士的终端'], ['cygj.png', '支持我们'], ['cygj.png', '关于我们']]
let menuHeight = ref(0);
onMounted(() => {
  menuHeight.value = window.innerHeight
})
</script>

<style lang="scss">
.menu {
  background: #FEB850;
  width: 300px;
  color: #ffffff;
  padding-top: 20px;

  .title {
    font-size: 22px;
  }

  .menu-item {
    margin-top: 20px;

  }

  .qr-code {
    height: 100px;
    width: 100px;
    margin: auto;
    line-height: 100px;
  }

  .down-btn {
    margin-top: 50px;

    img {
      width: 70%;
    }
  }
}
</style>