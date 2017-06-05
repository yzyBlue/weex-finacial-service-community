<template>
    <div class="wrapper">
        <div class="container" @click="jump('/home')">
            <image class="top-line" src=""></image>
            <image class="tab-icon" src="http://localhost:8081/images/home.png"></image>
            <text class="tab-text">首页</text>
        </div>
        <div class="container" @click="jump('/news')">
            <image class="top-line" src=""></image>
            <image class="tab-icon" src="http://localhost:8081/images/internet_news.png"></image>
            <text class="tab-text">动态</text>
        </div>
        <div class="container" @click="jump('/info')">
            <image class="top-line" src=""></image>
            <image class="tab-icon" src="http://localhost:8081/images/my_info.png"></image>
            <text class="tab-text">我的</text>
        </div>
    </div>
</template>

<style scoped>
.wrapper{
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height: 0.6rem;
    background: #ffffff;
    border-top: 0.01rem solid #e4e4e4;
}
.container{
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.top-line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0.02rem;
  }

  .tab-icon {
    margin-top: 0.05rem;
    width: 0.30rem;
    height: 0.28rem;
  }

  .tab-text {
    margin-top: 0.02rem;
    text-align: center;
    font-size: 0.14rem;
  }
</style>
