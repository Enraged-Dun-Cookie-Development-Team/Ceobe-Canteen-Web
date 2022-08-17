<template>
  <div class="box-title ta-l pl-1 color-yellow mb-7">
    <span class="xiaoke" :class="props.icon"></span>
    <span class="title ml-3">{{props.title}}</span>
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";

let props = defineProps({
  icon: {},
  title: {}
})
</script>

<style lang="scss">
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
</style>