<template>
  <div class="install-browser">
    <div class="box">
      <div class="box-name">Google浏览器</div>
      <img class="box-icon" src="@/assets/image/pageTwo/logo/chrome.png"/>
    </div>
    <div class="box-card">
      <div class="flipper">
        <div class="front">
          哈哈哈
          <div class="box-content-once-go"><i class="iconfont icon-tiaozhuan"></i></div>
        </div>
        <div class="back">
          方法
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "installBrowser"
}
</script>

<style lang="scss">
.install-browser {
  position: relative;

  .box {
    border: 1px solid #39A0F7;
    width: 200px;
    height: 200px;
    overflow: hidden;
    position: relative;

    .box-name {
      position: absolute;
      top: 20px;
      left: 20px;
      font-size: 26px;
    }

    .box-icon {
      position: absolute;
      left: -30px;
      bottom: -30px;
      width: 130px;
      height: 130px;
      opacity: 0.5;
      z-index: -1;
    }
  }

  .box-card {
    perspective: 1000px;
    width: 200px;
    height: 200px;

    &:hover .flipper {
      transform: rotateY(180deg);
    }

    .flipper {
      transition: 0.6s;
      transition-timing-function:ease-out;
      transform-style: preserve-3d;
      position: relative;

      .front, .back {
        width: 200px;
        height: 200px;
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
      }

      .front {
        z-index: 2;
        background: red;

        .box-go {
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
      }

      .back {
        background: blue;
        transform: rotateY(180deg);
      }
    }
  }
}

</style>