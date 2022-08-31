<template>
  <v-card width="180" height="180">
    <div class="install-browser">
      <div class="install-browser-content flex">
        <div class="install-name">{{ props.browser.name }}</div>
        <v-btn
            class="install-go pointer color-fff"
            color="#D07D00"
            icon="mdi-chevron-right"
            @click="open"
        ></v-btn>
        <img class="install-icon" :src="require('@/assets/image/detailsContent/logo/'+props.browser.icon)"/>
      </div>
    </div>
  </v-card>

  <v-dialog
      transition="dialog-bottom-transition"
      v-model="state.windowIsOpen"
      scrollable
  >
    <div class="install-browser-dialog">
      <v-card>
        <v-carousel
            progress="#D07D00"
            hide-delimiters
            v-model="carouselData.carouselIndex">
          <v-carousel-item
              v-for="(data, i) in carouselData.data"
              :key="i"
          >
            <div class="flex flex-center-center flex-column h-100 px-10 mx-15 relative">
              <div class="flex carousel-content" :class="data.flex">
                <div class="flex flex-start-center flex-column">
                  <h3 v-html="data.html"></h3>
                  <div v-if="data.btn" class="mt-5 flex flex-column">
                    <v-btn color="#FCDDAB" style="color: #D07D00" class="mt-2" @click="toLink(btn.link)"
                           v-for="btn in data.btn">{{
                        btn.text
                      }}
                    </v-btn>
                  </div>
                </div>
                <img :class="data.imageWidth||'w-100'" class="mt-5" v-if="data.image"
                     :src="require('@/assets/image/detailsContent/install/'+data.image)">
                <v-chip class="mt-5" v-if="data.tag">{{ data.tag }}</v-chip>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </div>
  </v-dialog>
</template>

<script lang="ts" setup>
import {defineProps, reactive, ref} from "vue";

const props = defineProps({browser: {type: Object}});

let state = reactive({
  windowIsOpen: false,

})

let carouselData = reactive({
  carouselIndex: 0,
  data: props.browser?.help
})

let open = () => {
  state.windowIsOpen = true;
  carouselData.carouselIndex = 0;
}

let toLink = (url: string) => {
  window.open(url, "_black")
}

</script>

<style lang="scss">
.install-browser {
  position: relative;

  .install-browser-content {
    width: 180px;
    height: 180px;
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

.install-browser-dialog {
  width: 1000px;
  height: 500px;

  .carousel-title {
    top: 30px;
    left: 30px;
    font-size: 20px;
  }

  .carousel-content {
    h3 {
      span {
        color: #FEC568;
      }
    }
  }
}
</style>