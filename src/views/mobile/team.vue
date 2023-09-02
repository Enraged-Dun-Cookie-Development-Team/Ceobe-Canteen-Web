<template>
  <box-title icon="icon-xiaoke-a-lianhe3" title="关于我们"></box-title>
  <div class="team-bar">
    <div class="member" v-for="(member, index) in teamData" :key="index">
      <div class="head">
        <img :src="require('@/assets/image/detailsContent/team/'+member.coverImg)" alt="">
      </div>
      <span>{{ member.name }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BoxTitle from "@/components/detailsContent/boxTitle.vue";
import { TEAM_LIST } from "@/assets/constant/team"
import { ref } from "vue";
const teamData = ref<Array<any>>(TEAM_LIST)

</script>

<style scoped lang="scss">
.team-bar {
  width: 80%;
  margin: 0 10% 40px 10%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
  grid-column-gap: 12px;
  grid-row-gap: 20px;
  .member {
    .head {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 8px;
      img {
        height: inherit;
        width: inherit;
        object-fit: contain;
      }
    }
    span {
      display: block;
      color: #000;
      overflow: hidden;
      font-size: 12px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>