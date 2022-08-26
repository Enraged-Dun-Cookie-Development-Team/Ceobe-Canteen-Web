<template>
  <div id="full-page">
    <page-one/>
<!--    <div class="section">Some section</div>-->
    <page-two></page-two>
  </div>
</template>

<script lang="ts" setup>
import page from '/dist'
import {onMounted} from "vue";
import PageTwo from "@/views/computer/pageTwo.vue";
import PageOne from './pageOne.vue';
onMounted(() => {
})


</script>

<style lang="scss">

</style>