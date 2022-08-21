<template>
  <div class="function">
    <div
      class="label fix-size shadow-with"
      v-bind:style="{
        marginLeft: props.v_offset + 'px',
        width: props.width + 'px',
        height: props.height + 'px',
        lineHeight: props.height + 'px',
      }"
    >
      {{ props.label }}
    </div>
    <div
      class="behind fix-size shadow-with"
      v-bind:style="{
        marginTop: props.h_offset + 'px',
        width: props.width + 'px',
        height: props.height + 'px',
      }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
export interface Args {
  label: String;
  v_offset?: number;
  h_offset?: number;
  height?: number;
  width?: number;
}

const props = withDefaults(defineProps<Args>(), {
  v_offset: 58,
  h_offset: 37,
  height: 77,
  width: 260,
});
</script>


<style lang="scss">
.function {
  height: max-content;
  width: max-content;
}
.behind {
  background-color: #8f8d8d;
  position: relative;
  z-index: 1;
}
.label {
  background-color: #5e5e5e;
  position: relative;
  float: right;
  z-index: 2;

  text-align: center;
  font-size: 40px;
  color: white;
  font-weight: 800;
}
.shadow-with {
  box-shadow: 5px 5px 10px 1px rgba(78, 78, 78, 0.52);
}
</style>