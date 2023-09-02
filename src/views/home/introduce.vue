<template>
  <div class="introduce w-100">
    <div class="header-body">
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
      <brain-background class="brain"/>
      <div class="download">
        <button 
          v-for="item in downloadOptions" 
          :style="{ background: item.background }" 
          @click="download(item)">
          <span class="xiaoke" :class="item.icon" ></span>
          <span>{{ item.text }}</span>
          <div class="link" v-if="item.popup">
            <img :src="item.popup.img" alt="">
            <span>请扫码下载</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import FunctionMessageBox from "@/components/introduce/functionMessageBox.vue";
import MessageMessageBox from "@/components/introduce/messageMessageBox.vue";
import BrainBackground from "@/components/introduce/brainBackground.vue";
import Support from "@/components/introduce/support.vue";
import { ref, onMounted, computed } from "vue";
import { version_desktop, version_app } from '@/request/api'

name: "pageTop";

interface Download {
  key: string,
  icon: string,
  text: string,
  background: string,
  link: string,
  popup?: any,
  isSlide?: boolean,
}

const downloadOptions = ref<Array<Download>>([
  // 会考虑直接显示二维码再下拉跳转的情况
  // { key: 'app', icon: 'icon-xiaoke-download', text: 'APP下载', background: '#A52625', link: '', popup: {
  //   img: require('../../assets/image/detailsContent/donate/bilibili.png'),
  //   link: []
  // }},
  { key: 'app', icon: 'icon-xiaoke-download', text: 'APP下载', background: '#A52625', link: 'install-app', isSlide: true},
  { key: 'desktop', icon: 'icon-xiaoke-download', text: '桌面端下载', background: '#4879ff', link: 'install-desktop', isSlide: true },
  { key: 'extension', icon: 'icon-xiaoke-download', text: '插件端下载', background: 'linear-gradient(to right, #ffbb4e, #ff8448)', link: 'install', isSlide: true },
  { key: 'support', icon: 'icon-xiaoke-donate', text: '支持食堂', background: 'linear-gradient(to right, #5f5f5f, #333333)', link: 'sponsor', isSlide: true },
])

const download = (option: Download) => {
  if (option.isSlide)
    window.scrollTo({
        top: document.getElementById(option.link || '')?.offsetTop,
        behavior: "smooth"
    })
  // 如果不是的话跳转到指定的的下载页面

}

</script>

<style lang="scss" scoped>

.introduce {
  background-image: linear-gradient(to right, #ffbb4e, #ff8448);
  height: 100vh;
  min-width: 1200px;
  min-height: 700px;
  margin: 60px auto 0 auto;
  z-index: 1;
  position: relative;

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
      top: 150px;
      right: 0px;
    }

    &:nth-child(6) {
      position: absolute;
      top: 260px;
      right: 30px;
    }
  }
}
.download {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 15px;
  position: absolute;
  bottom: 200px;
  right: 200px;
  button {
    outline: none;
    border: none;
    background: none;
    height: 40px;
    width: 200px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    transition: .4s;
    box-shadow: 2px 2px 5px  #0000006b;
    &:focus {
      overflow: initial;
      .link {
        top: -230px;
        opacity: 1;
      }
    }
    & > span {
      color: #fff;
      font-size: 20px;
      line-height: 40px;
      &:nth-child(1) {
        margin-right: 15px;
      }
    }
    .link {
      position: absolute;
      background: #fff;
      height: 220px;
      top: -200px;
      opacity: 0;
      transition: .4s;
      transform-origin: bottom;
      box-sizing: border-box;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 0 5px  #0000006b;
      border-radius: 2px;
      img {
        height: 180px;
      }
      span {
        color: #000;
        font-size: 16px;
        line-height: 20px;
      }
      &::before {
        content: "";
        position: absolute;
        height: 20px;
        width: 20px;
        clip-path: polygon(0 0, 50% 50%, 100% 0);
        background: inherit;
        bottom: -20px;
      }
    }
  }
}

</style>
