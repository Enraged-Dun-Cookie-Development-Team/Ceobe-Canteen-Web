<template>
    <div class="download">
        <div class="brain">
            <div class="mask">
                <div class="box">
                    <img src="@/assets/logo.png" class="logo"/>
                    <img src="@/assets/image/all/title-white.png" class="title"/>
                </div>
                <div class="splitLine1"></div>
                <div class="splitLine2"></div>
                <span>哒哒哒，博士，小刻将藏起来的饼都找出来了噢</span>
                <div class=""><span>24小时蹲饼</span><span>活动资源提示</span><span>合理规划理智</span><span>各类常用工具</span><span>便捷使用，提高养成效率</span><span>活动攻略在线推</span></div>
                <div class="show">
                    <img src="@/assets/image/detailsContent/interface/1.jpg" alt="chajianduan" style="width: 40%;margin: 5%;">
                    <img src="@/assets/image/detailsContent/interface/2.jpg" alt="chajinduan" style="width: 40%;margin: 5%;"> 
                </div>
                <div class="button">
                    <a href="www.baidu.com"><button><img src="@/assets/image/detailsContent/menuIcon/androidDown.png" alt="安卓" style="width: 100%;"></button></a>
                    <a href="www.baidu.com"><button><img src="@/assets/image/detailsContent/menuIcon/appleDown.png" alt="苹果" style="width: 100%;"></button></a>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.download{
    background-image: linear-gradient(90deg,#ffbb4e,#ff8448);
    height: 80vh;
    margin: 60px 10% 0 10%;
    z-index: 1;
    position: relative;
}
.brain{
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
}
.mask{
    position: absolute;
    left: 0;
    margin: 10% 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.box{
    position: relative!important;
    justify-content: center;
    align-items: center;
    width: 100%!important;
    display: flex;
    .logo{
        width: 20vw;
    }
    .title{
        width: 50vw;
    }
}

.splitLine1{
    height: 5px;
    background-color: #fefefe;
    width: 95%;
    margin-top: 5px;
}
.splitLine2{
    height: 7px;
    background-color: #fefefe;
    width: 70%;
    margin-top: 5px;
    border-radius: 0 0 4px 0 ;
}
span{
    color: #fefefe;
    font-size: 10px;
    font-weight: 400;
    width: fit-content;
    line-height: 2rem;
    width: 100%;
}
.show{
    margin-top: 10%;
}

.button{
    margin-top: 10%;
    justify-content: center;
    align-items:center;
    width: 100%;
    display: flex;
    flex-direction: row;
}

button{
    position: relative;
    width: 90%;
}
</style>

