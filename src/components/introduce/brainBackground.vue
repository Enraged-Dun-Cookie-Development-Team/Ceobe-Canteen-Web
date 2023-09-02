<template>
  <div class="brain-parent position-absolute">
    <div class="brain-background w-100 h-100"></div>
    <div class="brain-mask w-100 h-100 flex flex-column flex-center-center">
      <div class="flex flex-center-center position-relative w-100">
        <img class="brain-logo" src="@/assets/image/all/icon.png" />
        <img class="brain-title" src="@/assets/image/all/title-yellow.png" />
        <img class="brain-popup position-absolute" src="@/assets/image/introduce/bubble-find.png" />
      </div>

      <span class="brain-sep"></span>
      <h1 class="brain-speck">用于实时获取兔兔发的动态</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
$ceobe_color: #ffffff;

.brain-parent {
  width: 65vw;
  height: 80vh;
  min-width: 650px;
  min-height: 650px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 1920px;

  .brain-background {
    position: absolute;
    z-index: -1;
    background: $ceobe_color;
    clip-path: polygon(50% 0, 86% 18%, 100% 46%, 89% 65%, 55% 64%, 9% 100%, 21% 71%, 0 68%, 9% 55%, 5% 39%, 8% 20%, 20% 8%);
    background: #ffffff;
  }

  .brain-mask {
    position: absolute;
    left: 0;
    top: 0;
    padding-bottom: 100px;

    .brain-logo {
      width: 100px
    }

    .brain-title {
      width: 500px;
    }

    .brain-popup {
      top: -60px;
      right: calc(50% - 300px);
      width: 150px;
    }

    .brain-sep {
      margin-left: 6%;
      width: 94%;
      background: linear-gradient(to right, #ffbb4e, #ff8448);
      ;
      height: 2px;
    }

    .brain-speck {
      color: #ffd28a;
      font-size: 50px;
      font-weight: 400;
      width: fit-content;
    }

    .brain-ads {
      font-size: 67px;
      color: white;
    }
  }
}
</style>