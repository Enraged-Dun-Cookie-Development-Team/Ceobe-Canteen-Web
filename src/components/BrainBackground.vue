<template>
  <div class="brain-background w-1024 h-1024 position-absolute">
    <p>aca</p>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
$ceobe_color: #ffffff;
.brain-background {
  z-index: -1;
  position: absolute 500;
  width: 1024px;
  height: 1024px;
  background: $ceobe_color;
  clip-path: polygon(
    62% 0,
    93% 18%,
    99% 46%,
    92% 71%,
    55% 69%,
    14% 99%,
    20% 70%,
    4% 61%,
    11% 44%,
    7% 29%,
    14% 9%,
    46% 0
  );
}
</style>