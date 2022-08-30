<template>
  <div class="page-one">
    <div class="header"></div>
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
      <div>
        <support
            class="support-u"
            about-us-uri="/acc"
            support-us-uri="/support"
        />
      </div>
      <brain-background class="brain"/>
    </div>
  </div>
</template>


<script lang="ts" setup>
import HeaderBtn from "@/components/headerBtn.vue";
import FunctionMessageBox from "@/components/functionMessageBox.vue";
import MessageMessageBox from "@/components/messageMessageBox.vue";
import BrainBackground from "@/components/brainBackground.vue";
import Support from "@/components/support.vue";

name: "pageTop";
</script>

<style lang="scss">

.page-one {
  background-image: linear-gradient(to right, #ffbb4e, #ff8448);
  height: 100vh;
  min-height: 700px;

  .header {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 126px;
    background-color: #353535;
  }

  .header-body {
    width: calc(100% - 100px);
    max-width: 1920px;
    height: 100%;
    margin: 0 50px;
    position: relative;

    .function-message-box {
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


    .brain {
    }


    .support-u {
      position: absolute;
      top: 753px;
      left: 1473px;
    }

  }
}


</style>
