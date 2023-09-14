<template>
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
  </div>
</template>

<script lang="ts" setup>
import {onMounted, reactive, ref, watch, inject} from "vue";
import {DONATE_LIST, FOLLOW_LIST} from "@/assets/constant/donate";
// import footer from './footer.vue';

interface state {
  donateList: Array<any>,
}

const type =  inject('type')

let state = reactive<state>({
  donateList: type === 'audit' ? FOLLOW_LIST : DONATE_LIST,
})

let toLink = (url: string) => {
  window.open(url, "_black")
}

</script>

<style lang="scss" scoped>
.donate{
  position: relative;
  .p-box{

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10% 34px 10%;
    flex-wrap: wrap;
    .donate-box {
    width: 40%;
    margin-top: 28px;
    }
  }
  
}

.thanks{
  background-image: linear-gradient(90deg,#ffbb4e,#ff8448);
  opacity: 0.8;
  text-align: left;
  margin-left: 10%;
  margin-right: 10%;
  justify-content: space-between;
  align-items: center; 
  .thanks-box{
    padding-top: 10%;
    padding-bottom: 10%;
    margin-left: 10%;
    margin-right: 10%;
    box-sizing: border-box;
    .splitline{
      display: block;
    }
    .word{
      color: white;
      font-size: 12px;
      font-weight: 400;
      width: fit-content;
    }
  }

  
}

</style>

 


