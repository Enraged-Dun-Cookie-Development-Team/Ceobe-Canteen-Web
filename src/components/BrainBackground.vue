<template>
  <div>
    <div class="brain-parent">
      <div class="brain-background"></div>
      <div class="brain-mask">
        <img
          class="brain-logo"
          src="@/assets/image/icon.png"
          width="150"
          height="150"
        />
        <img
          class="brain-title"
          src="@/assets/image/pageOne/load-success.png"
          width="500"
        />
        <img
          class="brain-popup"
          src="@/assets/image/pageOne/bubble-find.png"
          width="149"
        />
        <hr class="brain-sep" />

        <p class="brain-speck">用于实时抓取兔兔发的动态</p>
        <p class="brain-ads">双端蹲饼，一个饼也不错过</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
$ceobe_color: #ffffff;

.brain-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: max-content;
}

.brain-parent {
  width: 1091px;
  height: 1107px;
}

.brain-background {
  z-index: -1;
  background: $ceobe_color;
  clip-path: polygon(
    57.77% 28px,
    88.13% 23.07%,
    97.62% 52.47%,
    89.24% 68.06%,
    62% 64.73%,
    9.52% 92.58%,
    18.82% 71.49%,
    5.72% 67.52%,
    13.68% 55.49%,
    11.51% 41.82%,
    19.59% 28.17%,
    32.03% 136px
  );

  background: #ffffff;

  width: 1023px;
  height: 888px;

  margin-top: 70px;
  align-content: center;
}
.brain-logo {
  position: absolute;
  left: 206px;
  top: 314px;
}

.brain-title {
  position: absolute;
  left: 392px;
  top: 331px;
}
.brain-popup {
  position: absolute;
  left: 669px;
  top: 236px;
}

.brain-sep {
  position: absolute;
  top: 494px;
  left: 124px;
  width: 860px;
  color: #ffbb4e;
}

.brain-speck {
  position: relative;
  left: 202px;
  top: 530px;
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
</style>