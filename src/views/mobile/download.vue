<template>
    <div class="download">
        <div class="mask">
            <div class="box">
                <img src="@/assets/logo.png" class="logo"/>
                <img src="@/assets/image/all/title-white.png" class="title"/>
            </div>
            <div class="splitLine1"></div>
            <div class="splitLine2"></div>
            <span>哒哒哒，博士<br/>小刻将藏起来的饼都找出来了噢</span>
            <div class="info">
                <div class="line-1">24小时<span>蹲饼</span></div>
                <div class="line-2">活动资源提示</div>
                <div class="line-3">合理规划<span>理智</span></div>
                <div class="line-4 info-tips" style="transform: translateX(20%);">
                    博士，理智还没有耗完<br/>现在还不可以休息哦
                </div>
            </div>
            <div class="info">
                <div class="line-1">各类<span>常用工具</span></div>
                <div class="line-2">便捷使用，提高养成效率</div>
                <div class="line-3"><span>活动攻略</span>在线推送</div>
                <div class="line-4 info-tips" style="transform: translateX(-20%);">
                    再也不用担心打不过杰斯顿了
                </div>
            </div>
            <!-- <div class="app-title">APP局内展示</div> -->
            <div class="show" id="mo-install">
                <img src="@/assets/image/detailsContent/interface/app-1.jpg" alt="chajianduan" style="width: 40%;margin: 0 5% 0 5%;">
                <img src="@/assets/image/detailsContent/interface/app-2.jpg" alt="chajinduan" style="width: 40%;margin: 0 5% 0 5%;"> 
            </div>
            <!-- <div class="app-title">APP下载</div> -->
            <div class="button">
                <button @click="showModal = true"><img src="@/assets/image/detailsContent/menuIcon/androidDown.png" alt="安卓"></button>
                <!-- <button><img src="@/assets/image/detailsContent/menuIcon/appleDown.png" alt="苹果"></button> -->
            </div>
            <span>插件端与桌面端打开电脑官网进行下载</span>
        </div>
    </div>
    <mo-modal :open="showModal" @close="showModal = false" :title="'下载链接'">
        <div class="install-bar">
            <v-btn color="#FCDDAB" style="color: #D07D00" class="mt-2" @click="toLink(btn.link)"
                   v-for="btn in state.installAppInfo">{{
                btn.text
              }}
            </v-btn>
        </div>
    </mo-modal>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue"
import MoModal from '@/components/mobile/modal.vue'
import { version_app } from '@/request/api'
import { APP_STRUCTURE } from "@/assets/constant/install"

const state = reactive({
    appStructure: APP_STRUCTURE,
    installAppInfo: [] as any
})

const showModal = ref(false)

onMounted(() => {
    getVersionApp()
})

const getVersionApp = (params?: any) => {
  version_app(params).then((res) => {
    const data = res?.data
    const baiduCryp = data.baidu_text.match(/（(.*?)）/)[1]
    const downloadLinks = state.appStructure.map(p => {
      if (p.key === 'baidu')
        return { text: `${p.text} ${baiduCryp}`, link: data[p.key] }
      return { text: p.text, link: data[p.key] }
    })
    state.installAppInfo = downloadLinks
  }).catch((err) => {
    console.log(err)
  })
}

let toLink = (url: string) => {
  window.open(url, "_black")
}

</script>

<style lang="scss" scoped>
.download{
    background-image: linear-gradient(90deg,#ffbb4e,#ff8448);
    margin: 60px 10% 0 10%;
    z-index: 1;
    position: relative;
}
.brain{
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
}
.mask{
    left: 0;
    margin: 10% 0;
    display: flex;
    flex-direction: column;
    width: 100%;
}
.box{
    position: relative!important;
    justify-content: center;
    align-items: center;
    width: 100%!important;
    display: flex;
    .logo{
        width: 20vw;
    }
    .title{
        width: 50vw;
    }
}

.splitLine1{
    height: 5px;
    background-color: #fefefe;
    width: 95%;
    margin-top: 5px;
}
.splitLine2{
    height: 7px;
    background-color: #fefefe;
    width: 70%;
    margin-top: 5px;
    border-radius: 0 0 4px 0 ;
}
span{
    color: #fefefe;
    font-size: 14px;
    font-weight: 400;
    width: fit-content;
    line-height: 22px;
    width: 100%;
}
.show{
    margin-top: 24px;
}

.button{
    align-content: center;
    justify-items: center;
    width: calc(100% - 20px);
    display: grid;
    // grid-template-columns: 1fr 1fr;
    // grid-column-gap: 20px;
    // position: relative;
    margin: 30px 8px 0 12px;
}

button{
    position: relative;
    img {
        // width: 100%;
        width: 60%;
    }
}
.info {
    font-family: 'sucai';
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .line-1, .line-3 {
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
.install-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>

