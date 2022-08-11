<template>
  <div id="full-page">
<!--    <div class="section">Some section</div>-->
    <div class="section">
      <page-two></page-two>
    </div>
  </div>
</template>

<script lang="ts" setup>
import page from '/dist'
import {onMounted} from "vue";
import PageTwo from "@/views/computer/pageTwo.vue";
onMounted(() => {
})


</script>

<style lang="scss">

</style>