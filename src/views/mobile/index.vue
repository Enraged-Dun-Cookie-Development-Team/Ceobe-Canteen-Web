<template>
  <h1 style="display: none">小刻食堂</h1>
  <nav>
    <div class="headers">
      <div class="head-logo">
        <img
          src="@/assets/image/all/title-white.png"
          alt="logo-xiaoke"
          style="height: 100%"
        />
      </div>
      <ul>
        <li><a @click="linkTo('mo-install')">下载</a></li>
      </ul>
    </div>
  </nav>
  <div class="download">
    <div class="mask">
      <div class="box">
        <img src="@/assets/logo.png" class="logo" />
        <img src="@/assets/image/all/title-white.png" class="title" />
      </div>
      <div class="splitLine1"></div>
      <div class="splitLine2"></div>
      <span>哒哒哒，博士<br />小刻将藏起来的饼都找出来了噢</span>
      <div class="info">
        <div class="line-1">24小时<span>蹲饼</span></div>
        <div class="line-2">活动资源提示</div>
        <div class="line-3">合理规划<span>理智</span></div>
        <div class="line-4 info-tips" style="transform: translateX(20%)">
          博士，理智还没有耗完<br />现在还不可以休息哦
        </div>
      </div>
      <div class="info">
        <div class="line-1">各类<span>常用工具</span></div>
        <div class="line-2">便捷使用，提高养成效率</div>
        <div class="line-3"><span>活动攻略</span>在线推送</div>
        <div class="line-4 info-tips" style="transform: translateX(-20%)">
          再也不用担心打不过杰斯顿了
        </div>
      </div>
      <div class="show" id="mo-install">
        <img
          src="@/assets/image/detailsContent/interface/app-1.jpg"
          alt="chajianduan"
          style="width: 40%; margin: 0 5% 0 5%"
        />
        <img
          src="@/assets/image/detailsContent/interface/app-2.jpg"
          alt="chajinduan"
          style="width: 40%; margin: 0 5% 0 5%"
        />
      </div>
      <div class="download-button">
        <button @click="showDownload">
          <img
            src="@/assets/image/detailsContent/menuIcon/androidDown.png"
            alt="安卓"
          />
        </button>
        <button @click="toLink('https://apps.apple.com/cn/app/id1629917304')">
          <img src="@/assets/image/detailsContent/menuIcon/appleDown.png" alt="苹果">
        </button>
      </div>
      <span>插件端与桌面端打开电脑官网进行下载</span>
    </div>
  </div>
  <div class="donate">
    <div class="thanks">
      <div class="thanks-box">
        <div class="splitline"></div>
        <span class="word" id="mo-sponsor">
          感谢大家对小刻食堂的支持<br/> 
          未成年刀客塔请勿捐款，三连我们的账号就可以啦。<br/> 
          如果在收支一览表内没有发现自己的捐助，那就是我们理智涣散，来群里面找我们添加!<br/> 
          由于捐助列表是程序自动生成，捐助的备注一定要以<span style="color: #c2ffc1; font-size: 20px;">刻</span>字开头哦！</span>
      </div>
    </div>
    <div class="p-box">
      <div class="donate-box" v-for="donate in donateList">
        <v-card>
          <img class="w-100" :src="require('@/assets/image/detailsContent/donate/'+donate.img)">
          <v-card-actions v-if="donate.link">
            <v-btn style="width:100%"
              variant="outlined"
              color="#D07D00"
              @click="toLink(donate.link)">{{ donate.text }}
            </v-btn>
          </v-card-actions>
          <v-card-text v-else>{{ donate.text }}</v-card-text>
        </v-card>
      </div>
      
    </div>
    <v-btn @click="toLink('https://shimo.im/sheets/NJkbEgRmQRtpQ7qR/MODOC')" class="color-fff" color="#D07D00">收支一览表</v-btn>
  </div>
  <box-title icon="icon-xiaoke-a-lianhe3" title="关于我们" ></box-title>
  <div class="team-bar" id="mo-about-us">
    <div class="member" v-for="(member, index) in teamData" :key="index">
      <div class="head" @click="toLink(member.link.length>0?member.link[0].value:'')">
        <img :src="require('@/assets/image/detailsContent/team/'+member.coverImg)" alt="">
      </div>
      <span>{{ member.name }}</span>
    </div>
  </div>
  <mo-modal :open="showModal" @close="showModal = false" :title="'下载链接'">
    <div class="install-bar">
      <v-btn
        color="#FCDDAB"
        style="color: #d07d00"
        class="mt-2"
        @click="toLink(btn.link)"
        v-for="btn in state.installAppInfo"
        >{{ btn.text }}
      </v-btn>
    </div>
  </mo-modal>
  <footers />
  <div class="bg"></div>
</template>

<script lang="ts" setup>
import footers from './footers.vue'
import { ref, reactive, inject, onMounted } from 'vue'
import axios from 'axios'
import MoModal from '@/components/mobile/modal.vue'
import { version_app } from '@/request/api'
import { APP_STRUCTURE } from '@/assets/constant/install'
import {DONATE_LIST, FOLLOW_LIST} from "@/assets/constant/donate";
import BoxTitle from "@/components/detailsContent/boxTitle.vue";
import { TEAM_LIST } from "@/assets/constant/team"

const type =  inject('type')

const state = reactive({
  appStructure: APP_STRUCTURE,
  installAppInfo: [] as any,
})

const showModal = ref(false)
const teamData = ref<Array<any>>(TEAM_LIST)
const donateList = ref<Array<any>>(DONATE_LIST)

onMounted(() => {
  if (type) {
    donateList.value = []
    axios({
        method: 'get',
        url: `https://unpkg.com/ceobe-canteen-static/version.json`
    }).then((res: any) => {
      const version = res.data.version
      donateList.value = type === version ? FOLLOW_LIST : DONATE_LIST as Array<any>
    })
  }
})

const getVersionApp = (params?: any) => {
  version_app(params)
    .then((res: any) => {
      const data = res.data
      const baiduCryp = data.baidu_text.match(/ (.*?)）/)[1]
      const downloadLinks = state.appStructure.map((p) => {
        if (p.key === 'baidu')
          return { text: p.text, link: `${data[p.key]}?pwd=${baiduCryp}` }
        return { text: p.text, link: data[p.key] }
      })
      state.installAppInfo = downloadLinks
    })
    .catch((err) => {
      console.log(err)
    })
}

let toLink = (url: string) => {
  window.open(url, '_black')
}

const showDownload = () => {
  showModal.value = true
  getVersionApp()
}

const linkTo = (el: string) => {
  window.scrollTo({
    top: document.getElementById(el || '')?.offsetTop,
    behavior: 'smooth',
  })
}
</script>

<style lang="scss" scoped>
.headers {
  height: 60px;
  background: #ffbb4e;
  display: flex;
  position: fixed;
  flex: 1;
  padding: 8px !important;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  z-index: 999;
  top: 0;
  width: 100%;
  .head-logo {
    height: 40px;
    width: 100px;
  }
  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    list-style-type: none;
    li {
      float: right;
      width: auto;
      a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        &:hover {
          background-color: #febb52;
        }
      }
    }
  }
}
.download {
  background-image: linear-gradient(90deg, #ffbb4e, #ff8448);
  margin: 60px 10% 0 10%;
  z-index: 1;
  position: relative;
  .mask {
    left: 0;
    margin: 10% 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    .box {
      position: relative !important;
      justify-content: center;
      align-items: center;
      width: 100% !important;
      display: flex;
      .logo {
        width: 20vw;
      }
      .title {
        width: 50vw;
      }
    }
    .splitLine1 {
      height: 5px;
      background-color: #fefefe;
      width: 95%;
      margin-top: 5px;
    }
    .splitLine2 {
      height: 7px;
      background-color: #fefefe;
      width: 70%;
      margin-top: 5px;
      border-radius: 0 0 4px 0;
    }
    .info {
      font-family: 'sucai';
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .line-1,
      .line-3 {
        font-size: 28px;
        font-weight: bold;
        letter-spacing: 3px;
      }
      .line-2 {
        font-size: 18px;
        font-weight: bold;
        margin: 2px 0;
        letter-spacing: 3px;
      }
      .line-4 {
        font-size: 14px;
        font-weight: bold;
        letter-spacing: normal;
        margin: 5px 0;
      }
      span {
        font-size: 32px;
      }
      .info-tips {
        color: #c2ffc1;
        text-align: right;
      }
      img {
        width: 80%;
      }
    }
    .show {
      margin-top: 24px;
    }

    .download-button {
      align-content: center;
      justify-items: center;
      width: calc(100% - 20px);
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 20px;
      position: relative;
      margin: 30px 8px 0 12px;
      button {
        position: relative;
        img {
          width: 100%;
          // width: 60%;
        }
      }
    }
  }
}
.donate {
  position: relative;
  margin-bottom: 20px;
  .thanks {
    background-image: linear-gradient(90deg, #ffbb4e, #ff8448);
    opacity: 0.8;
    text-align: left;
    margin-left: 10%;
    margin-right: 10%;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .thanks-box {
      padding-top: 10%;
      padding-bottom: 10%;
      margin-left: 10%;
      margin-right: 10%;
      box-sizing: border-box;
      .splitline {
        display: block;
      }
      .word {
        color: white;
        font-size: 12px;
        font-weight: 400;
        width: fit-content;
      }
    }
  }
  .p-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10% 24px 10%;
    flex-wrap: wrap;
    .donate-box {
      width: 40%;
      margin-top: 28px;
    }
  }
}
.team-bar {
  width: 80%;
  margin: 0 10% 40px 10%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
  grid-column-gap: 8px;
  grid-row-gap: 20px;
  .member {
    .head {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 8px;
      img {
        height: inherit;
        width: inherit;
        object-fit: contain;
      }
    }
    span {
      display: block;
      color: #000;
      overflow: hidden;
      font-size: 12px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
span {
  color: #fefefe;
  font-size: 14px;
  font-weight: 400;
  width: fit-content;
  line-height: 22px;
  width: 100%;
}
.install-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.bg:before {
  width: 100%;
  height: 100%;
  background-image: url(@/assets/image/detailsContent/page-bg.png);
  background-size: 100%;
  background-attachment: fixed; /*将图片固定*/
  position: absolute; /*图片定位*/
  top: 0;
  left: 0;
  content: '';
  z-index: -1; /*设置该标签等级，让其始终位于最上层*/
  filter: opacity(70%);
}

$colors: (
  'yellow': #febb52,
  'oringe': #fd794f,
  'bule': #33a9f2,
  'fff': #fff,
);

@each $colorKey, $color in $colors {
  .text-#{$colorKey} {
    color: $color;
  }
  .bg-#{$colorKey} {
    background-color: $color;
  }
}
</style>
