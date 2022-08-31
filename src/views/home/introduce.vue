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
    </div>
  </div>
</template>


<script lang="ts" setup>
import FunctionMessageBox from "@/components/introduce/functionMessageBox.vue";
import MessageMessageBox from "@/components/introduce/messageMessageBox.vue";
import BrainBackground from "@/components/introduce/brainBackground.vue";
import Support from "@/components/introduce/support.vue";

name: "pageTop";
</script>

<style lang="scss">

.introduce {
  background-image: linear-gradient(to right, #ffbb4e, #ff8448);
  height: 100vh;
  min-width: 1200px;
  min-height: 700px;
  max-width: 1920px;
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


</style>
