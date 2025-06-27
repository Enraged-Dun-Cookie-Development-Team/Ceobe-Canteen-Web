<template>
  <headers />
  <div class="slide-container" id="home-container">
    <div class="slide-page page1" ref="page1El">
      <div class="container">
        <div class="introduce w-100">
          <div class="header-body">
            <function-message-box class="function-message-box" label="博士终端" />
            <function-message-box class="function-message-box" label="蹲饼！" />
            <function-message-box class="function-message-box" label="常用工具" />
            <message-message-box class="message-message-box" line1="饼源消息" line2="即刻推送" :mask_x="80" :mask_y="0"
              :block_x="0" :block_y="13" :txt_x="89" :txt_y="29" :txt_z="5" />
            <message-message-box class="message-message-box" line1="多类工具" line2="即刻体验" :block_x="0" :block_y="0"
              :mask_x="50" :mask_y="15" :txt_x="71" :txt_y="30" :txt_z="5" />
            <message-message-box class="message-message-box" line1="博士，理智" line2="又满了哦" :block_x="0" :block_y="0"
              :mask_w="170" :mask_x="22" :mask_y="10" :txt_x="56" :txt_y="31" :txt_z="5" />
            <div class="brain-parent position-absolute">
              <div class="brain-background w-100 h-100" :style="{ transform: brainBgTransform }"></div>
              <div class="brain-mask w-100 h-100 flex flex-column flex-center-center" :style="{ transform: brainMaskTransform }">
                <div class="flex flex-center-center position-relative w-100">
                  <img class="brain-logo" src="@/assets/image/all/icon.png" />
                  <img class="brain-title" src="@/assets/image/all/title-yellow.png" />
                  <img class="brain-popup position-absolute" src="@/assets/image/introduce/bubble-find.png" />
                </div>

                <span class="brain-sep"></span>
                <h1 class="brain-speck">用于实时获取兔兔发的动态</h1>
              </div>
            </div>
            <div class="download">
              <button v-for="item in downloadOptions" :style="{ background: item.background }" @click="download(item)">
                <span class="xiaoke" :class="item.icon"></span>
                <span>{{ item.text }}</span>
                <div class="link" v-if="item.popup">
                  <img :src="item.popup.img" alt="">
                  <span>请扫码下载</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="slide-page page2">
      <div class="container details-content info-layout">
        <div class="back w-100 position-absolute">
          <img class="w-100" src="@/assets/image/detailsContent/page-bg.png">
        </div>
        <transition name="info1">
          <div id="introduction" class="info flex pt-16 menu-js" v-if="isInfo">
            <div class="flex flex1 flex-column flex-center-center flex-align-end">
              <div class="speak flex flex-column flex-center-center">
                <div class="line-1">24小时<span class="color-yellow">蹲饼</span></div>
                <div class="line-2">活动资源提示</div>
                <div class="line-3">合理规划<span class="color-red">理智</span></div>
              </div>
              <div class="devil-speaking color-blue line-4 flex flex-column flex-center-center flex-align-end">
                <div>博士，理智还没有耗完</div>
                <div>现在还不可以休息哦</div>
              </div>
            </div>
            <div class="flex1">
              <img src="@/assets/image/detailsContent/interface/1.png">
            </div>
          </div>
        </transition>
        <transition name="info2">
          <div class="info flex pt-16" v-if="!isInfo">
            <div class="flex1">
              <img src="@/assets/image/detailsContent/interface/2.png">
            </div>
            <div class="flex1 flex flex-column flex-center-center flex-align-start">
              <div class=" speak flex flex-column flex-center-center">
                <div class="line-1">各类<span class="color-yellow">常用工具</span></div>
                <div class="line-2">便捷使用，提高养成效率</div>
                <div class="line-3"><span class="color-red">活动攻略</span>在线推送</div>
              </div>
              <div class="devil-speaking color-blue line-4">
                再也不用担心打不过杰斯顿了
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="slide-page page3">
      <div class="container details-content">
        <div id="install" class="install pa-8 pt-16 menu-azzn">
          <box-title icon="icon-xiaoke-a-lianhe1" title="插件端安装指南"></box-title>
          <div class="install-content pa-8 flex flex-around-center">
            <install-browser v-for="install in state.installInfo" :key="install.name"
              :browser="install"></install-browser>
          </div>
        </div>
        <div id="install-desktop" class="install pa-8 pt-16 menu-azzn">
          <box-title icon="icon-xiaoke-a-lianhe1" title="桌面端安装指南"></box-title>
          <div class="install-content pa-8 flex flex-around-center">
            <install-browser v-for="install in state.installDesktopInfo" :key="install.name" :browser="install"
              @open="openInstallDesktop"></install-browser>
          </div>
        </div>
        <div id="install-app" class="install pa-8 pt-16 menu-azzn">
          <box-title icon="icon-xiaoke-a-lianhe1" title="App端安装指南"></box-title>
          <div class="install-content pa-8 flex flex-around-center">
            <install-browser v-for="install in state.installAppInfo" :key="install.name" :browser="install"
              @open="openInstallApp"></install-browser>
          </div>
        </div>
      </div>
    </div>
    <div class="slide-page page4">
      <div class="container details-content">
        <div id="sponsor" class="donate pa-8 pt-16 menu-zcst">
          <box-title icon="icon-xiaoke-a-lianhe2" title="支持食堂"></box-title>
          <div class="mt-7">
            <h3>感谢大家对小刻食堂的支持</h3>
            未成年刀客塔请勿捐款，三连我们的账号就可以啦。<br />
            如果在收支一览表内没有发现自己的捐助，那就是我们理智涣散，来群里面找我们添加！
            <h4>由于捐助列表是程序自动生成，捐助的备注一定要以<span style="color: #D07D00; font-size: 30px;">刻</span>字开头哦！</h4>
          </div>
          <div class="flex flex-around-center mt-7">
            <div class="donate-box" v-for="donate in state.donateList">
              <v-card>
                <img class="w-100" :src="require('@/assets/image/detailsContent/donate/' + donate.img)">
                <v-card-actions v-if="donate.link">
                  <v-btn style="width:100%" variant="outlined" color="#D07D00" @click="toLink(donate.link)">{{
                    donate.text }}
                  </v-btn>
                </v-card-actions>
                <v-card-text v-else>{{ donate.text }}</v-card-text>
              </v-card>
            </div>
          </div>
          <div class="mt-7">
            <v-btn @click="toLink('https://docs.qq.com/sheet/DZXZObGZuZmtRaXlv?tab=nzfrjv')" class="color-fff"
              color="#D07D00">收支一览表</v-btn>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-page page5">
      <div class="container details-content">
        <div id="about-us" class="us pa-8 pt-16 menu-gywm">
          <box-title icon="icon-xiaoke-a-lianhe3" title="关于我们"></box-title>
          <div class="flex flex-row flex-wrap flex-evenly-center">
            <team class="mt-10" :team-info="team" v-for="team in state.teamList"></team>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FunctionMessageBox from "@/components/introduce/functionMessageBox.vue";
import MessageMessageBox from "@/components/introduce/messageMessageBox.vue";
import BoxTitle from "@/components/detailsContent/boxTitle.vue";
import InstallBrowser from "@/components/detailsContent/installBrowser.vue";
import Team from "@/components/detailsContent/team.vue";
import Headers from "@/views/home/headers.vue";

import { PC_INSTALL_HELP_LIST, DESKTOP_INSTALL_HELP_LIST, APP_INSTALL_HELP_LIST, DESKTOP_STRUCTURE, APP_STRUCTURE } from "@/assets/constant/install"
import { DONATE_LIST } from "@/assets/constant/donate"
import { TEAM_LIST } from "@/assets/constant/team"
import { version_desktop, version_app } from '@/request/api'

import { ref, onMounted, reactive, onBeforeUnmount, computed, watch } from 'vue'
import slidePage from 'slidePage'
import { useRouter } from "vue-router";
const router = useRouter()

interface Download {
  key: string
  icon: string
  text: string
  background: string
  link: string
  popup?: any
  isSlide?: boolean
}

const state = reactive({
  slidepage: null as any,
  installInfo: PC_INSTALL_HELP_LIST as Array<any>,
  installDesktopInfo: JSON.parse(JSON.stringify(DESKTOP_INSTALL_HELP_LIST)) as Array<any>,
  installAppInfo: APP_INSTALL_HELP_LIST as Array<any>,
  twoHeight: 0,
  donateList: DONATE_LIST as Array<any>,
  teamList: TEAM_LIST,
  desktopStructure: DESKTOP_STRUCTURE,
  appStructure: APP_STRUCTURE

})

const page1El = ref()
const downloadOptions = ref<Array<Download>>([
  // 会考虑直接显示二维码再下拉跳转的情况
  // { key: 'app', icon: 'icon-xiaoke-download', text: 'APP下载', background: '#A52625', link: '', popup: {
  //   img: require('../../assets/image/detailsContent/donate/bilibili.png'),
  //   link: []
  // }},
  { key: 'app', icon: 'icon-xiaoke-download', text: 'APP下载', background: '#A52625', link: 'install-app', isSlide: true },
  { key: 'desktop', icon: 'icon-xiaoke-download', text: '桌面端下载', background: '#4879ff', link: 'install-desktop', isSlide: true },
  { key: 'extension', icon: 'icon-xiaoke-download', text: '插件端下载', background: 'linear-gradient(to right, #ffbb4e, #ff8448)', link: 'install', isSlide: true },
  { key: 'support', icon: 'icon-xiaoke-donate', text: '支持食堂', background: 'linear-gradient(to right, #5f5f5f, #333333)', link: 'sponsor', isSlide: true },
])
const isInfo = ref(true)
const prevTime = ref()
const brainBgTransform = ref()
const brainMaskTransform = ref()

onMounted(() => {
  state.slidepage = new slidePage({
    slidePages: '.slide-page',
    slideContainer: '#home-container',
    useAnimation: true,
    refresh: true,
    before: slidePageEventBefore
  })
  page1El.value.addEventListener('mousemove', transformMove)
})

onBeforeUnmount(() => {
  state.slidepage.destroy()
})

const slidePageEventBefore = (origin: string, direction: string, target: string) => {
  if (target == '2') {
    prevTime.value = new Date().getTime();
    document.removeEventListener('mousewheel', state.slidepage.eventHandler.wheelFunc);
    document.addEventListener('mousewheel', page2mousewheel);
  }
}

const page2mousewheel = (e: any) => {
  let curTime = new Date().getTime();
  let timeDiff = curTime - prevTime.value;
  prevTime.value = curTime;
  if (timeDiff <= 200) {
    return;
  }
  // 判断是向下滑动还是向上滑动
  // 向下滑动
  if (e.wheelDeltaY < 0 || e.wheelDelta < 0 || e.detail > 0) {
    if (!isInfo.value) {
      state.slidepage.slideNext()
      document.addEventListener('mousewheel', state.slidepage.eventHandler.wheelFunc, { passive: true });
      document.removeEventListener('mousewheel', page2mousewheel);
    }
    isInfo.value = false
  }
  // 向上滑动
  else if (e.wheelDeltaY > 0 || e.wheelDelta > 0 || e.detail < 0) {
    if (isInfo.value) {
      state.slidepage.slidePrev()
      document.addEventListener('mousewheel', state.slidepage.eventHandler.wheelFunc, { passive: true });
      document.removeEventListener('mousewheel', page2mousewheel);
    }
    isInfo.value = true
  }
}

const transformMove = (e: any) => {
  const brainMoveX = (window.innerWidth/2 - e.clientX) / 10
  const brainMoveY = (window.innerHeight/2 - e.clientY) / 10
  brainBgTransform.value = `translateX(${-brainMoveX}px) translateY(${-brainMoveY}px)`
  const brainMaskMoveX = (window.innerWidth/2 - e.clientX) / 5
  const brainMaskMoveY = (window.innerHeight/2 - e.clientY) / 5
  brainMaskTransform.value = `translateX(${-brainMaskMoveX}px) translateY(${-brainMaskMoveY}px)`
}

const download = (option: Download) => {
  if (option.isSlide)
    window.scrollTo({
      top: document.getElementById(option.link || '')?.offsetTop,
      behavior: "smooth"
    })
  // 如果不是的话跳转到指定的的下载页面

}

const getVersionApp = (params?: any) => {
  version_app(params).then((res: any) => {
    const data = res.data
    const baiduCryp = data.baidu_text.match(/ (.*?)）/)[1]
    const downloadLinks = state.appStructure.map(p => {
      if (p.key === 'baidu')
        return { text: p.text, link: `${data[p.key]}?pwd=${baiduCryp}` }
      return { text: p.text, link: data[p.key] }
    })

    state.installAppInfo.forEach((p, index) => {
      if (index > 0) return false;
      p.help.unshift({ image: '', btn: downloadLinks })
    })
  }).catch((err) => {
    console.log(err)
  })
}

const getVersionDesktop = (params?: any) => {
  version_desktop(params).then((res: any) => {
    const data = res.data
    const baiduCryp = data.baidu_text.match(/ (.*?)）/)[1]
    const downloadLinks = state.desktopStructure.map(p => {
      if (p.key === 'baidu')
        return { text: p.text, link: `${data[p.key]}?pwd=${baiduCryp}` }
      return { text: p.text, link: data[p.key] }
    })
    state.installDesktopInfo.forEach(p => {
      p.help.unshift({ image: '', btn: downloadLinks })
    })
  }).catch((err) => {
    console.log(err)
  })
}


const openInstallDesktop = () => {
  state.installDesktopInfo.forEach(p => {
    if (p.help.length > 1)
      p.help.shift()
  })
  getVersionDesktop()
}

const openInstallApp = () => {
  state.installAppInfo.forEach((p, index) => {
    if (index > 0) return false;
    if (p.help.length > 1)
      p.help.shift()
  })
  getVersionApp()
}

let toLink = (url: string) => {
  window.open(url, "_black")
}

</script>

<style lang="scss" scoped>
.slide-container {}

.slide-page {
  .container {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    position: relative;
  }
}

.page1 {
  background-color: #000000;
}

.page2 {
  .container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.page3 {
  .container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

}

.brain-parent {
  width: 65vw;
  height: 80vh;
  min-width: 650px;
  min-height: 650px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 1920px;

  .brain-background {
    position: absolute;
    clip-path: polygon(50% 0, 86% 18%, 100% 46%, 89% 65%, 55% 64%, 9% 100%, 21% 71%, 0 68%, 9% 55%, 5% 39%, 8% 20%, 20% 8%);
    background: #ffffff;
  }

  .brain-mask {
    position: absolute;
    left: 0;
    top: 0;
    padding-bottom: 100px;

    .brain-logo {
      width: 100px
    }

    .brain-title {
      width: 500px;
    }

    .brain-popup {
      top: -60px;
      right: calc(50% - 300px);
      width: 150px;
    }

    .brain-sep {
      margin-left: 6%;
      width: 94%;
      background: linear-gradient(to right, #ffbb4e, #ff8448);
      ;
      height: 2px;
    }

    .brain-speck {
      color: #ffd28a;
      font-size: 50px;
      font-weight: 400;
      width: fit-content;
    }

    .brain-ads {
      font-size: 67px;
      color: white;
    }
  }
}


.introduce {
  background-image: linear-gradient(to right, #ffbb4e, #ff8448);
  height: 100vh;
  min-width: 1200px;
  min-height: 700px;
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
  bottom: 130px;
  right: 100px;

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
    box-shadow: 2px 2px 5px #0000006b;

    &:focus {
      overflow: initial;

      .link {
        top: -230px;
        opacity: 1;
      }
    }

    &>span {
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
      box-shadow: 0 0 5px #0000006b;
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

// .info-layout {
//   display: flex;
//   align-items: center;
// }

.details-content {
  min-width: 1200px;
  min-height: 700px;

  .back {
    z-index: -1;
    opacity: 0.3;
  }

  .info {
    font-family: 'sucai';
    margin-top: 50px;
    position: absolute;

    .speak {
      font-size: 50px;
      font-weight: bold;
      letter-spacing: 5px;

      .line-2 {
        font-size: 30px;
        margin: 5px 0;
      }

      .line-4 {
        font-size: 16px;
        letter-spacing: normal;
        margin: 5px 0;
      }
    }

    img {
      width: 80%;
    }
  }

  .donate {
    .donate-box {
      width: 200px;
    }
  }

}

.back {
  z-index: -1;
  opacity: 0.3;
}

.info1-enter-active {
  animation: info-anim .6s .6s backwards;
}

.info1-leave-active {
  animation: info-anim .6s reverse;
}

.info2-enter-active {
  animation: info-anim .6s .6s backwards;
}

.info2-leave-active {
  animation: info-anim .6s reverse;
}

@keyframes info-anim {
  from {
    opacity: 0;
  }
}
</style>