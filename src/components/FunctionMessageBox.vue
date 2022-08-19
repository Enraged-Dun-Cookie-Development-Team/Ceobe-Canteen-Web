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
  v_offset: 25,
  h_offset: 25,
  height: 36,
  width: 100,
});
</script>


<style lang="scss">
.function {
  height: max-content;
  width: max-content;
}
.behind {
  background-color: aqua;
  position: relative;
  z-index: 1;
}
.label {
  background-color: cadetblue;
  position: relative;
  float: right;
  z-index: 2;

  text-align: center;
  font-weight: 800;
}
.shadow-with {
  box-shadow: 0px 0px 10px 3px rgb(77, 77, 77);
}
</style>