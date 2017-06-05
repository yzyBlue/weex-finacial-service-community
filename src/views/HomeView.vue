<template>
  <div class="home-view">
    <app-tabbar></app-tabbar>
    <div class="app-text">
      <text>{{title}}</text>
    </div>
  </div>
</template>

<script>
import AppTabbar from '../components/app-tabbar.vue'
  export default {
    components: { AppTabbar },
    data() {
      return {
        title:"this is Home View"
      }
    }
  }
</script>
<style>
.home-view {
    background-color: #F5F5F5;
}
.app-text {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0.6rem;
}
</style>
