<template>
  <div class="brain-parent">
    <div class="brain-background"></div>
    <div class="brain-mask">
      <img
          class="brain-logo"
          src="@/assets/image/icon.png"
          width="150"
      />
      <img
          class="brain-title"
          src="@/assets/image/pageOne/load-success.png"
          width="700"
      />
      <img
          class="brain-popup"
          src="@/assets/image/pageOne/bubble-find.png"
          width="150"
      />
      <span class="brain-sep"></span>

      <p class="brain-speck">用于实时抓取兔兔发的动态</p>
      <p class="brain-ads">双端蹲饼，一个饼也不错过</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
$ceobe_color: #ffffff;


.brain-parent {
  transform: scale(0.7);

  .brain-background {
    position: absolute;
    z-index: -1;
    background: $ceobe_color;
    clip-path: polygon(57.77% 28px, 88.13% 23.07%, 97.62% 52.47%, 89.24% 68.06%, 62% 64.73%, 9.52% 92.58%, 18.82% 71.49%, 12.72% 68.52%, 14.68% 55.49%, 11.51% 41.82%, 19.59% 28.17%, 32.03% 136px);
    background: #ffffff;
    width: 1260px;
    height: 1030px;
  }

  .brain-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 1260px;
    height: 1030px;


    .brain-logo {
      position: absolute;
      left: 280px;
      top: 300px;
    }

    .brain-title {
      position: absolute;
      left: 460px;
      top: 300px;
    }

    .brain-popup {
      position: absolute;
      left: 890px;
      top: 220px;
    }

    .brain-sep {
      position: absolute;
      top: 500px;
      left: 170px;
      width: 1050px;
      background: #ffbb4e;
      height: 2px;
    }

    .brain-speck {
      position: relative;
      left: 360px;
      top: 520px;
      color: #ffd28a;
      font-size: 50px;
      font-weight: 400;
      width: fit-content;
    }

    .brain-ads {
      position: relative;
      top: 813px;
      left: 60px;
      font-size: 67px;
      color: white;
    }
  }
}

</style>