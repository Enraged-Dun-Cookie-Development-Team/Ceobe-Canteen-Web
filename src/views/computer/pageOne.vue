<template>
  <div class="page-one">
    <div class="header"></div>
    <div class="header-body">
      <div>
        <function-message-box class="doc-terminal" label="博士终端" />
        <function-message-box class="for-cookie" label="蹲饼！" />
        <function-message-box class="utils" label="常用工具" />
      </div>
      <div>
        <brain-background class="brain" />
      </div>
      <div>
        <message-message-box
          class="cookie-src"
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
          class="multi-tools"
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
          class="doc-emo"
          line1="博士，理智"
          line2="又满了哦"
          :block_x="0"
          :block_y="0"
          :mask_x="22"
          :mask_y="10"
          :txt_x="46"
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
      </div>
    </div>
  </div>
</template>



<script lang="ts" setup>
import HeaderBtn from "@/components/headerBtn.vue";
import FunctionMessageBox from "@/components/FunctionMessageBox.vue";
import MessageMessageBox from "@/components/MessageMessageBox.vue";
import BrainBackground from "@/components/BrainBackground.vue";
import Support from "@/components/support.vue";
name: "pageTop";
</script>

<style lang="css">
.brain {
  position: absolute;
  left: 414px;
  top: 60px;
}

.header-body {
  height: 1099px;
}
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 126px;
  background-color: #353535;
}
.page-one {
  background-image: linear-gradient(to right, #ffbb4e, #ff8448);
  height: fit-content;
}
.doc-terminal {
  position: absolute;
  top: 312px;
  left: 137px;
}
.for-cookie {
  position: absolute;
  top: 481px;
  left: 195px;
}

.utils {
  position: absolute;
  top: 656px;
  left: 137px;
}
.cookie-src {
  position: absolute;
  top: 166px;
  right: 301px;
}
.multi-tools {
  position: absolute;
  top: 317px;
  right: 171px;
}
.doc-emo {
  position: absolute;
  top: 482px;
  right: 233px;
}
.support-u {
  position: absolute;
  top: 753px;
  left: 1473px;
}
</style>