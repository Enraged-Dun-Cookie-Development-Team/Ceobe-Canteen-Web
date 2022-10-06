<template>
  <div class="support-root">
    <a class="support-uri support-link" :href="args.supportUsUri">支持我们</a>
    <a class="about-url support-link" :href="args.aboutUsUri">关于我们</a>
  </div>
</template>

<script lang="ts" setup>
interface Args {
  supportUsUri: string;
  aboutUsUri: string;
}

const args = defineProps<Args>();
</script>

<style>
.support-root {
  display: table;
}
.support-link {
  color: white;
  font-size: 40px;
  font-weight: 400;
  display: block;
}

.about-url {
  margin-top: 41px;
}
</style>

