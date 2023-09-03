<template>
  <div class="modal-main" :class="{open: open}" ref="modalMainEl">
    <div class="modal" ref="modalEl" :style="{height: height, width: width}">
      <div class="modal-title">{{ title }}</div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, defineEmits, onMounted, onBeforeUnmount } from "vue";

const props  = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  title: {
    type: String
  },
  height: {
    type: String,
    default: '200px'
  },
  width: {
    type: String,
    default: '85%'
  }
})

const emits = defineEmits(['close']) 

const modalEl = ref()
const modalMainEl = ref()

onMounted(() => {
  modalMainEl.value.addEventListener("click", closeModal);
})

onBeforeUnmount(() => {
  modalMainEl.value.removeEventListener("click", closeModal);
});

const closeModal = (event: any) => {
  const e = event || window.event;
  if (
    !modalEl.value?.contains(e.target) &&
    !modalEl.value?.contains(e.target)
  ) {
    emits('close')
  }
};
</script>

<style lang="scss" scoped>
.modal-main {
  height: 100vh;
  width: 100%;
  background: #00000025;
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  .modal {
    background: #fff;
    border-radius: 8px;
    position: relative;
    .modal-title {
      height: 30px;
      color: #000;
      width: 100%;
      font-size: 16px;
      line-height: 30px;
    }
    .modal-content {
      height: calc(100% - 30px);
      width: 100%;
      position: relative;
    }
  }
}
.open {
  display: flex;
}
</style>