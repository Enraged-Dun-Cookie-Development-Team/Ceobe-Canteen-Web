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
        zIndex: args.mask_z,
      }"
    ></div>
    <div
      class="block"
      :style="{
        height: to_px(args.block_h),
        width: to_px(args.block_w),
        marginTop: to_px(args.block_y),
        marginLeft: to_px(args.block_x),
        zIndex: args.block_z,
      }"
    ></div>
    <div
      class="text-area"
      :style="{
        height: to_px(area_size.height),
        width: to_px(area_size.width),
      }"
    >
      <ul
        class="msg-list"
        :style="{
          left:to_px( args.txt_x),
          top: to_px(args.txt_y),
          zIndex: args.txt_z,
        }"
      >
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

  txt_x?: number;
  txt_y?: number;

  block_z?: number;
  mask_z?: number;
  txt_z?: number;
}

const args = withDefaults(defineProps<Args>(), {
  mask_x: 0,
  mask_y: 25,
  mask_w: 140,
  mask_h: 110,
  // block
  block_x: 25,
  block_y: 0,
  block_w: 198,
  block_h: 115,
  transparent: 0.1,

  txt_x: 50,
  txt_y: 50,

  block_z: 3,
  mask_z: 4,
  txt_z: 5,
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
}
.block {
  background-color: #DE5F18;
  position: relative;
  box-shadow: 0px 3px 6px 1px #683A19;
}
.text-area {
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 0px;
}

.msg-list {
  height: fit-content;
  position: absolute;
}
.msg-elem {
  list-style: none;
  font-weight: 800;
  font-size: 26px;
  color: white;
}
</style>