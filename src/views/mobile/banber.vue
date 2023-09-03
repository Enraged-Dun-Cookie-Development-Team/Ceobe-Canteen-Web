<template>
      <nav>
      <div class="headers">
        <div class="head-logo">
          <img src="@/assets/image/all/title-white.png" alt="logo-xiaoke"  style="height: 100%;">
        </div>         
         <ul>
          <li><a @click="linkTo('install')">下载</a></li>
         </ul>
      </div>
  </nav>
</template>

<script lang="ts" setup>
  const linkTo = (el: string) => {
    window.scrollTo({
        top: document.getElementById(el || '')?.offsetTop,
        behavior: "smooth"
    })
  }
</script>

<style lang="scss" scoped>
.headers{
    height: 60px;
    background: #ffbb4e;
    display: flex!important;
    position: fixed;
    flex: 1;
    padding: 8px!important;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    z-index: 999;
    top: 0;
    width: 100%;
  }
  .head-logo{
    height: 40px;
    width: 100px;
    display:flex;
  }
  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    list-style-type: none;
    width: 100%;
  }
   
  li {
    float: right;
    width: auto;
  }
   
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
      background-color: #FEBB52,;
  }
  
  .active {
      background-color: #4CAF50;
  }
</style>