<template>
  <div class="flex page-two" :style="{height:state.twoHeight+'px'}">
    <div class="h100 menu ta-c pt-5">
      <div class="title">首页</div>
      <div class="pl-16">
        <div v-for="item in state.menu" class="flex flex-start-center menu-item">
          <span class="iconfont icon-xiangmu"></span>
          <span class="ml-3">{{ item[1] }}</span>
        </div>
      </div>
      <img class="qr-code" src="@/assets/image/pageTwo/menuIcon/qrCode.png">
      <div class="down-btn ta-c">
        <img src="@/assets/image/pageTwo/menuIcon/appleDown.png">
        <img src="@/assets/image/pageTwo/menuIcon/androidDown.png">
        <img src="@/assets/image/pageTwo/menuIcon/cjDown.png">
      </div>
    </div>
    <div class="flex9 content">
      <div class="back w-100 position-absolute">
        <img class="w-100" src="@/assets/image/pageTwo/page-bg.png">
      </div>
      <div class="info flex">
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
          <img src="@/assets/image/pageTwo/interface/1.jpg">
        </div>
      </div>
      <div class="info flex">
        <div class="flex1">
          <img src="@/assets/image/pageTwo/interface/2.jpg">
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
      <div class="install pa-8">
        <box-title icon="icon-xiaoke-a-lianhe1" title="插件端安装指南"></box-title>
        <div class="install-content pa-8 flex flex-around-center">
          <install-browser v-for="install in state.installInfo"
                           :key="install.name"
                           :browser="install"></install-browser>
        </div>
      </div>

      <div class="donate pa-8">
        <box-title icon="icon-xiaoke-a-lianhe2" title="支持食堂"></box-title>
        <div class="mt-7">
          <h3>感谢大家对小刻食堂的支持</h3>
          <h4>由于捐助列表是程序自动生成，捐助的备注一定要以<span style="color: #D07D00">刻</span>字开头哦！</h4>
          未成年刀客塔请勿捐款，三连我们的账号就可以啦。<br/>
          如果在收支一览表内没有发现自己的捐助，那就是我们理智涣散，来群里面找我们添加！
        </div>
        <div class="flex flex-around-center mt-7">
          <div class="donate-box" v-for="donate in state.donateList">
            <v-card>
              <img class="w100" :src="require('@/assets/image/pageTwo/donate/'+donate.img)">
              <v-card-actions v-if="donate.link">
                <v-btn block
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
          <v-btn @click="toLink('')" class="color-fff" color="#D07D00">收支一览表</v-btn>
        </div>
      </div>

      <div class="us pa-8">
        <box-title icon="icon-xiaoke-a-lianhe3" title="关于我们"></box-title>
        <div class="flex flex-row flex-wrap flex-between-center">
          <team class="mt-10" :team-info="team" v-for="team in state.teamList"></team>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {computed, onMounted, reactive, ref} from "vue";
import InstallBrowser from "@/components/installBrowser";
import {PC_INSTALL_HELP_LIST} from "@/assets/constant/install"
import {DONATE_LIST} from "@/assets/constant/donate"
import {TEAM_LIST} from "@/assets/constant/team"
import BoxTitle from "@/components/boxTitle.vue";
import Team from "@/components/team.vue";

interface state {
  menu: Array<[string, string]>,
  installInfo: Array<{
    icon: string,
    name: string,
    help: object
  }>,
  twoHeight: number,
  donateList: Array<any>,
  teamList: Array<any>,
}

let state = reactive<state>({
  menu: [['xk.png', '蹲饼'], ['cygj.png', '常用工具'], ['cygj.png', '博士的终端'], ['cygj.png', '支持我们'], ['cygj.png', '关于我们']],
  installInfo: PC_INSTALL_HELP_LIST,
  twoHeight: 0,
  donateList: DONATE_LIST,
  teamList: TEAM_LIST
})

onMounted(() => {
  state.twoHeight = window.innerHeight
})

let toLink = (url: string) => {
  window.open(url, "_black")
}

</script>

<style lang="scss">
.page-two {
  overflow: hidden;

  .menu {
    background: #FEB850;
    width: 250px;
    color: #ffffff;

    .title {
      font-size: 22px;
    }

    .menu-item {
      margin-top: 20px;

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


  .content {
    position: relative;
    overflow: auto;

    .back {
      z-index: -1;
      opacity: 0.3;
      //background: no-repeat top /cover scroll;
      //background-image: -webkit-cross-fade(
      //        url("@/assets/image/transparent.png"),
      //        url("@/assets/image/pageTwo/page-bg.png"),
      //        30%);
      //background-image: cross-fade(
      //        url("@/assets/image/transparent.png"),
      //        url("@/assets/image/pageTwo/page-bg.png"),
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


}
</style>