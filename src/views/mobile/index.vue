<template> 
  <h1 style="display: none;">小刻食堂</h1>
  <banber/>
  <div class="bg">
     <download/>
     <donate/> 

  </div>
  
</template>

<script lang="ts" setup>
import download from './download.vue';
import donate from './donate.vue';
import banber from './banber.vue';
</script>

<style lang="scss" scoped>
.bg:before{
  width: 100%;
  height: 100%;
  background-image: url(@/assets/image/detailsContent/page-bg.png);
  background-size: 100%;
  background-attachment: fixed;      /*将图片固定*/
  position: absolute;                 /*图片定位*/
  top: 0;
  left: 0;
  content: "";
  z-index: -1;                    /*设置该标签等级，让其始终位于最上层*/
  filter: opacity(70%);
}

$colors:(
  "yellow":#FEBB52,
  "oringe":#FD794F,
  "bule":#33A9F2,
  "fff":#fff,

);

@each $colorKey, $color in $colors {
  .text-#{$colorKey} {
    color: $color;
  }
  .bg-#{$colorKey} {
    background-color: $color;
  }
}
</style>