<template>
    <footer class="footer">
        <div><a href="https://beian.miit.gov.cn">闽ICP备2021013932号-1</a></div> 
        <div>Power By: <a href="https://github.com/Enraged-Dun-Cookie-Development-Team">Ceobe Canteen</a></div>
    </footer>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.footer {
    color: #fff;
    width: 100%;
    height: 80px;
    background: linear-gradient(to right, #ffbb4e, #ff8448);
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: center;
    a {
        font-weight: 300;
        text-decoration: none;
        color: #fff;
        &:hover {
            color: #fff;
        }
        &:active {
            color: #fff;
        }
    }
}
</style>