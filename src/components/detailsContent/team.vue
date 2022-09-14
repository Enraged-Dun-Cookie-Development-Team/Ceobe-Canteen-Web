<template>
  <div class="team position-relative">
    <div class="team-cover rounded-circle position-absolute overflow-hidden flex flex-center-center">
      <img class="w-100" :src="require('@/assets/image/detailsContent/team/'+info.coverImg)">
    </div>
    <div class="team-link position-absolute">
      <div v-for="link in info.link" :style="{left: link.x+'px', top: link.y+'px'}"
           class="rounded-circle position-absolute">
        <a :href="link.value"><i :class="link.iconName"></i></a>
      </div>
    </div>
    <div class="team-background w-100 h-100 position-absolute">
      <div class="team-name pr-3 position-absolute rounded-lg">{{ info.name }}</div>
      <div class="team-job position-absolute flex flex-column flex-around-center flex-align-start">
        <div v-for="jobs in info.jobs" class="team-job-text text-left ml-3">
          <i :class="jobs.iconName"></i>
          <span class="ml-2">{{ jobs.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, defineProps, ref} from "vue";
import {JOBS_ICON} from "@/assets/constant/team"

let props = defineProps({
  teamInfo: {type: Object}
});
let jobsIcon = JOBS_ICON;

let info = computed(() => {

  let teamInfo = {
    ...props.teamInfo,
    jobs: props.teamInfo && props.teamInfo.jobs.map((item: { type: string; }) => {
      return {...item, iconName: jobsIcon.find((y: { type: string; }) => y.type == item.type).iconName};
    }),
    link: props.teamInfo && props.teamInfo.link.map((item: { type: string; }, index: number) => {
      let circlePosition: any = getCirclePosition(110, props.teamInfo?.link.length, index);
      return {
        ...item,
        iconName: jobsIcon.find((y: { type: string; }) => y.type == item.type).iconName,
        ...circlePosition
      };
    }),
  }
  return teamInfo
})

/* r 半径 num 数组长度 index 第几个*/
function getCirclePosition(r: number, num: number, index: number) {
  let angle = 90 / (num + 1) * (index + 1) * Math.PI / 180;
  let x = Math.cos(angle) * r;
  let y = Math.sin(angle) * r;
  return {x, y};
}

</script>

<style lang="scss">
$ceobe_color: #ffba4b;
.team {
  width: 340px;
  height: 280px;

  .team-cover {
    border: 1px solid #ffffff;
    top: -20px;
    left: 10px;
    width: 100px;
    height: 100px;
    z-index: 2;
  }

  .team-link {
    font-size: 26px;
    left: 40px;
    top: 10px;
    z-index: 2;

    & > div {
      width: 40px;
      height: 40px;
      background: #ffffff;
      transform: translate(-50%, -50%);
    }
  }

  .team-background {
    background: $ceobe_color;
    clip-path: polygon(35% 5%, 100% 0, 70% 100%, 0 100%, 0 20%);

    .team-name {
      height: 40px;
      line-height: 40px;
      width: 170px;
      background: #ffffff;
      top: 30px;
      right: 0px;
      color: $ceobe_color;
      font-weight: bold;
    }

    .team-job {
      width: 175px;
      height: 150px;
      text-align: center;
      transform: skew(340deg);
      bottom: 20px;
      left: 100px;
      background: #ffffff;
      font-size: 20px;

      .team-job-text {
        transform: skew(20deg);
        color: $ceobe_color;
        font-weight: bold;
      }
    }
  }

}
</style>