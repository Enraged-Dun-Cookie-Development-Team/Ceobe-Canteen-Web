<template>
  <div class="function" :style="{
    width: props.width + 'px',
        height: props.height + 'px'
  }">
    <div
        class="label fix-size position-relative color-fff w-100 h-100 flex flex-center-center font-weight-bold"
    >
      {{ props.label }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";

export interface Args {
  label: String;
  height?: number;
  width?: number;
}

const props = withDefaults(defineProps<Args>(), {
  height: 77,
  width: 260,
});
</script>


<style lang="scss">
$shadown: 5px 5px 10px 1px rgba(78, 78, 78, 0.52);
.function {
  height: max-content;
  width: max-content;

  .label {
    background-color: #5e5e5e;
    font-size: 40px;
    z-index: 1;
    box-shadow: $shadown;
  }

  &::after {
    content: ' ';
    position: absolute;
    left: -60px;
    top: 40px;
    background-color: #8f8d8d;
    width: 100%;
    height: 100%;
    box-shadow: $shadown;
  }
}


</style>
