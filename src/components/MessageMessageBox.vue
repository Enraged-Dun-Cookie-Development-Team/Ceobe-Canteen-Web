<template>
  <div
    :style="{
      height: to_px(area_size.height),
      width: to_px(area_size.width),
    }"
  >
    <div
      class="mask"
      :style="{
        height: to_px(args.mask_h),
        width: to_px(args.mask_w),
        marginTop: to_px(args.mask_y),
        marginLeft: to_px(args.mask_x),
        backgroundColor: 'rgba(255, 255, 255, ' + args.transparent + ')',
      }"
    ></div>
    <div
      class="block"
      :style="{
        height: to_px(args.block_h),
        width: to_px(args.block_w),
        marginTop: to_px(args.block_y),
        marginLeft: to_px(args.block_x),
      }"
    ></div>
    <div
      class="text-area"
      :style="{
        height: to_px(area_size.height),
        width: to_px(area_size.width),
      }"
    >
      <ul class="msg-list">
        <li class="msg-elem">
          {{ args.line1 }}
        </li>
        <li class="msg-elem">
          {{ args.line2 }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

export interface Args {
  line1: String;
  line2: String;
  mask_x?: number;
  mask_y?: number;
  mask_w?: number;
  mask_h?: number;
  block_x?: number;
  block_y?: number;
  block_w?: number;
  block_h?: number;
  transparent?: number;
}

const args = withDefaults(defineProps<Args>(), {
  mask_x: 0,
  mask_y: 25,
  mask_w: 128,
  mask_h: 128,
  // block
  block_x: 25,
  block_y: 0,
  block_w: 128,
  block_h: 128,
  transparent: 0.1,
});

interface AreaSize {
  height: number;
  width: number;
}

function to_px(px: number): string {
  return px + "px";
}

function max(left: number, right: number): number {
  return left > right ? left : right;
}

const area_size = computed<AreaSize>(() => {
  return {
    height: max(args.mask_h + args.mask_y, args.block_h + args.block_y),
    width: max(args.mask_w + args.mask_x, args.block_w + args.block_x),
  };
});
</script>

<style>
.mask {
  position: relative;
  float: left;
  z-index: 2;
}
.block {
  background-color: brown;
  position: relative;
  z-index: 1;
}
.text-area {
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 0px;
  z-index: 3;
}

.msg-list {
  height: fit-content;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.msg-elem {
  list-style: none;
  font-weight: 800;
}
</style>