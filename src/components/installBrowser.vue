<template>
  <v-card width="200" height="200">
    <div class="install-browser">
      <div class="install-browser-content flex">
        <div class="install-name">Google浏览器</div>
        <v-btn
            class="install-go pointer"
            icon="mdi-chevron-right"
            @click="open"
        ></v-btn>
        <img class="install-icon" src="@/assets/image/pageTwo/logo/chrome.png"/>
      </div>
    </div>
  </v-card>

  <v-dialog
      transition="dialog-bottom-transition"
      v-model="state.windowIsOpen"
      scrollable
  >
    <div style="width: 1000px;height: 500px;">
      <v-card>
        <v-carousel
            progress="primary"
            hide-delimiters
            v-model="carouselData.carouselIndex">
          <v-carousel-item
              v-for="(color, i) in carouselData.colors"
              :key="color"
          >
            <v-sheet
                :color="color"
                height="100%"
                tile
            >
              <div class="flex flex-center-center">
                第 {{ i + 1 }} 步
              </div>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </div>
  </v-dialog>
</template>

<script lang="ts" setup>
import {reactive, ref} from "vue";

let state = reactive({
  windowIsOpen: false,

})

let carouselData = reactive({
  carouselIndex: 0,
  colors: [
    'primary',
    'secondary',
    'yellow darken-2',
    'red',
    'orange',
  ]
})

let open = () => {
  state.windowIsOpen = true;
  carouselData.carouselIndex = 0;
}

</script>

<style lang="scss">
.install-browser {
  position: relative;

  .install-browser-content {
    width: 200px;
    height: 200px;
    overflow: hidden;
    position: relative;
    transition: 1s all;

    .install-name {
      position: absolute;
      top: 20px;
      left: 20px;
      font-size: 26px;
      transition: 1s all;
    }

    .install-icon {
      transition: 1s all;
      position: absolute;
      left: -30px;
      bottom: -30px;
      width: 130px;
      height: 130px;
      opacity: 0.5;
      z-index: -1;
      transform: rotate(-30deg);
    }

    .install-go {
      transition: 1s all;
      position: absolute;
      font-size: 26px;
      background: #39A0F7;
      color: #ffffff;
      border-radius: 50%;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }

    .install-right {
      transition: 1s all;
      opacity: 0;
      pointer-events: none;
    }
  }
}

</style>