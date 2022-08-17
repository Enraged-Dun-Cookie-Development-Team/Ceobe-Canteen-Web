<template>
  <div class="team position-relative">
    <div class="team-cover position-absolute overflow-hidden">
      <!--      <img class="w-100" :src="require('@/assets/image/pageTwo/team/'+info.coverImg)">-->
    </div>
    <div class="team-link position-absolute">
      <div v-for="link in info.link"><i :class="link.iconName"></i></div>
    </div>
    <div class="team-name position-absolute">{{ info.name }}</div>

    <div class="team-job position-absolute"></div>
    <div class="team-background w-100 h-100 position-absolute"></div>
  </div>
</template>

<script lang="ts" setup>
import {computed, defineProps} from "vue";
import {JOBS_ICON} from "@/assets/constant/team"

let props = defineProps({
  teamInfo: {type: Object}
});
let jobsIcon = JOBS_ICON;
let info = computed(() => {
  let teamInfo = {...props.teamInfo};
  teamInfo.jobs.forEach((x: { iconName: string; type: string; }) => {
    x.iconName = jobsIcon.find((y: { type: string; }) => y.type == x.type).iconName
  })

  teamInfo.link.forEach((x: { iconName: string; type: string; }) => {
    x.iconName = jobsIcon.find((y: { type: string; }) => y.type == x.type).iconName
  })
  console.log(teamInfo)
  return teamInfo
})

</script>

<style lang="scss">
$ceobe_color: #ffba4b;
.team {
  width: 340px;
  height: 280px;

  .team-cover {
    border: 1px solid #ffffff;
    border-radius: 50%;
    top: -20px;
    left: 10px;
    width: 100px;
  }

  .team-background {
    z-index: -1;
    background: $ceobe_color;
    clip-path: polygon(35% 5%, 100% 0, 70% 100%, 0 100%, 0 20%);
  }
}
</style>