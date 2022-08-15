<template>
  <div class="flex page-two" :style="{height:state.twoHeight+'px'}">
    <div class="h100 menu ta-c" v-if="false">
      <div class="title">首页</div>
      <div style="padding-left: 70px">
        <div v-for="item in state.menu" class="flex flex-start-center menu-item">
          <span class="iconfont icon-xiangmu"></span>
          <span class="ml10">{{ item[1] }}</span>
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
      <div class="back"></div>
      <div v-if="false" class="info flex">
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

      <div v-if="false" class="info flex">
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

      <div class="box install p30">
        <div class="box-title ta-l pl5 color-yellow">
          <span class="iconfont icon-xiangmu"></span>
          <span class="title ml10">插件端安装指南</span>
        </div>
        <div class="box-content p30">
          <div class="box-content-subtitle ta-l pl5">安装教程</div>
          <div class="box-content-once">
            <div class="box-content-once-name">Google浏览器</div>
            <div class="box-content-once-go"><i class="iconfont icon-tiaozhuan"></i></div>
            <img class="box-content-once-icon" src="@/assets/image/pageTwo/logo/chrome.png"/>
          </div>
          <!--          <div v-for="item in state.installInfo">-->
          <!--            <img :src="require('@/assets/image/pageTwo/logo/'+item.icon)">-->
          <!--          </div>-->
        </div>
      </div>


    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";

interface state {
  menu: Array<[string, string]>,
  installInfo: Array<{
    icon: string,
    name: string,
    tutorialURL: string, //教程地址
    storeUrl?: string //应用商店地址
  }>,
  twoHeight: number
}

let state = reactive<state>({
  menu: [['xk.png', '蹲饼'], ['cygj.png', '常用工具'], ['cygj.png', '博士的终端'], ['cygj.png', '支持我们'], ['cygj.png', '关于我们']],
  installInfo: [{
    name: 'Chrome浏览器',
    icon: 'chrome.png',
    tutorialURL: '',
    storeUrl: ''
  },
    {
      name: '360浏览器',
      icon: '360.png',
      tutorialURL: '',
      storeUrl: ''
    },
    {
      name: 'Edge浏览器',
      icon: 'edge.png',
      tutorialURL: '',
      storeUrl: ''
    },
    {
      name: 'QQ浏览器',
      icon: 'qq.png',
      tutorialURL: '',
      storeUrl: ''
    },
    {
      name: '火狐浏览器',
      icon: 'firefox.png',
      tutorialURL: '',
      storeUrl: ''
    }],
  twoHeight: 0,
})

onMounted(() => {
  state.twoHeight = window.innerHeight
})
</script>

<style lang="scss">
.page-two {
  overflow: hidden;

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
    //background: no-repeat center /cover;
    //background-image:cross-fade(url("@/assets/image/pageTwo/page-bg.png"));
    //background-image: -webkit-cross-fade( url("@/assets/image/pageTwo/page-bg.png") 0%, url("@/assets/image/pageTwo/page-bg.png"), 50%);
    //background-image: cross-fade(url("@/assets/image/pageTwo/page-bg.png"), url("@/assets/image/pageTwo/page-bg.png"), 50%);


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

    .box {

      .box-title {
        font-size: 28px;

        .iconfont {
          font-size: 28px;
        }

        .title {
          position: relative;

          &::after, &::before {
            height: 2px;
            content: ' ';
            position: absolute;
            bottom: -5px;
            width: 100%;
            right: 0;
            background: #FE913E;
          }

          &::before {
            bottom: -10px;
            right: 5px;
            width: 60%;
          }

        }
      }

      .box-content {

        .box-content-subtitle {
          position: relative;
          color: #FF784E;
          font-weight: bold;

          &::before {
            position: absolute;
            background: #FF784E;
            content: ' ';
            top: 4px;
            height: 14px;
            width: 3px;
            left: -5px;
          }
        }

        .box-content-once {
          border: 1px solid #39A0F7;
          width: 200px;
          height: 200px;
          overflow: hidden;
          position: relative;

          .box-content-once-name {
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 26px;
          }

          .box-content-once-go {
            position: absolute;
            font-size: 26px;
            background: #39A0F7;
            color: #ffffff;
            border-radius: 50%;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
          }

          .box-content-once-icon {
            position: absolute;
            left: -30px;
            bottom: -30px;
            width: 130px;
            height: 130px;
            opacity: 0.5;
            z-index: -1;
          }
        }
      }

    }
  }
}
</style>