<template>
  <div class="page-one">
    <div>
      <function-message-box class="doc-terminal" label="博士终端" />
      <function-message-box class="for-cookie" label="蹲饼！" />
      <function-message-box class="utils" label="常用工具" />
    </div>

    <div>
      <brain-background></brain-background>
      <img src="@/assets/image/icon.png" alt="" width="128" height="128" />
      <img src="@/assets/image/pageOne/load-success.png" alt="" height="128" />
      <img src="@/assets/image/pageOne/bubble-find.png" alt="" height="64" />

      <hr />

      <p>用于实时抓取兔兔发的动态</p>
    </div>
    <div>
      <div>
        <p>饼源消息</p>
        <p>即刻推送</p>
      </div>
      <div>
        <p>多类工具</p>
        <p>即刻体验</p>
      </div>
      <div>
        <p>博士，理智</p>
        <p>又满了哦</p>
      </div>

      <div>
        <a href="http://">支持我们</a>
        <a href="http://">关于我们</a>
      </div>
    </div>

    <div>
      <p>双端蹲饼，一个饼也不错过</p>
    </div>
  </div>
</template>



<script lang="ts" setup>
import HeaderBtn from "@/components/headerBtn.vue";
import FunctionMessageBox from "@/components/FunctionMessageBox.vue";

name: "pageTop";
</script>

<style lang="css">
.page-one {
  height: 1024px;
}
.doc-terminal {
  position: absolute;
  top: 20%;
  left: 20%;
}
.for-cookie {
  position: absolute;
  top: 45%;
  left: 18%;
}

.utils {
  position: absolute;
  top: 71%;
  left: 18%;
}
</style>