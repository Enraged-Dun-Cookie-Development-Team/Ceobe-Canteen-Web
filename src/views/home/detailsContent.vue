<template>
  <div class="flex flex-column details-content" :style="{height:state.twoHeight+'px'}">
    <div class="back w-100 position-absolute">
      <img class="w-100" src="@/assets/image/detailsContent/page-bg.png">
    </div>
    <div id="introduction" class="info flex pt-16 menu-js">
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
        <img src="@/assets/image/detailsContent/interface/1.jpg">
      </div>
    </div>
    <div class="info flex">
      <div class="flex1">
        <img src="@/assets/image/detailsContent/interface/2.jpg">
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
    <div id="install" class="install pa-8 pt-16 menu-azzn">
      <box-title icon="icon-xiaoke-a-lianhe1" title="插件端安装指南"></box-title>
      <div class="install-content pa-8 flex flex-around-center">
        <install-browser v-for="install in state.installInfo"
                         :key="install.name"
                         :browser="install"></install-browser>
      </div>
    </div>
    <div id="sponsor" class="donate pa-8 pt-16 menu-zcst">
      <box-title icon="icon-xiaoke-a-lianhe2" title="支持食堂"></box-title>
      <div class="mt-7">
        <h3>感谢大家对小刻食堂的支持</h3>
        未成年刀客塔请勿捐款，三连我们的账号就可以啦。<br/>
        如果在收支一览表内没有发现自己的捐助，那就是我们理智涣散，来群里面找我们添加！ 
        <h4>由于捐助列表是程序自动生成，捐助的备注一定要以<span style="color: #D07D00; font-size: 30px;">刻</span>字开头哦！</h4>
      </div>
      <div class="flex flex-around-center mt-7">
        <div class="donate-box" v-for="donate in state.donateList">
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
      <div class="mt-7">
        <v-btn @click="toLink('https://shimo.im/sheets/NJkbEgRmQRtpQ7qR/MODOC')" class="color-fff" color="#D07D00">收支一览表</v-btn>
      </div>
    </div>
    <div id="about-us" class="us pa-8 pt-16 menu-gywm">
      <box-title icon="icon-xiaoke-a-lianhe3" title="关于我们"></box-title>
      <div class="flex flex-row flex-wrap">
        <team class="mt-10" :team-info="team" v-for="team in state.teamList"></team>
      </div>
    </div>
    <div id="footers" class="">
      <footers/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref, watch} from "vue";
import InstallBrowser from "@/components/detailsContent/installBrowser.vue";

import {PC_INSTALL_HELP_LIST} from "@/assets/constant/install"
import {DONATE_LIST} from "@/assets/constant/donate"
import {TEAM_LIST} from "@/assets/constant/team"

import BoxTitle from "@/components/detailsContent/boxTitle.vue";
import Team from "@/components/detailsContent/team.vue";

import Footers from "@/views/home/footers.vue";

interface state {
  installInfo: Array<any>,
  twoHeight: number,
  donateList: Array<any>,
  teamList: Array<any>,
}

let state = reactive<state>({
  installInfo: PC_INSTALL_HELP_LIST,
  twoHeight: 0,
  donateList: DONATE_LIST,
  teamList: TEAM_LIST
})

const emit = defineEmits(['heightToZero'])

let contentDom: any = ref(null);
let pageHeight = ref(0)

onMounted(() => {
  state.twoHeight = window.innerHeight;
  // contentDom.value.addEventListener('scroll', () => {
  //   pageHeight.value = contentDom.value.scrollTop
  // })
})

watch(pageHeight, (data: number, oldData: number) => {
  if (data == 0) {
    emit('heightToZero');
  }
});

let toLink = (url: string) => {
  window.open(url, "_black")
}
let toContent = (className: string) => {
  let dom = contentDom.value.querySelector('.' + className);
  dom.scrollIntoView({
    behavior: "smooth",  // 平滑过渡
    block: "start"  // 上边框与视窗顶部平齐。默认值
  });

}

</script>

<style lang="scss">
.details-content {

  .back {
    z-index: -1;
    opacity: 0.3;
    //background: no-repeat top /cover scroll;
    //background-image: -webkit-cross-fade(
    //        url("@/assets/image/transparent.png"),
    //        url("@/assets/image/detailsContent/page-bg.png"),
    //        30%);
    //background-image: cross-fade(
    //        url("@/assets/image/transparent.png"),
    //        url("@/assets/image/detailsContent/page-bg.png"),
    //        30%);
  }

  .info {
    font-family: 'sucai';
    margin-top: 50px;


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
</style>
