// import Vue from 'vue'
import Router from 'vue-router'
import HomeView from './views/HomeView.vue'
import NewsView from './views/NewsView.vue'
import InfoView from './views/InfoView.vue'

Vue.use(Router)

// Story view factory
function createStoriesView (type) {
  return {
    name: `${type}-stories-view`,
    render (createElement) {
      return createElement(StoriesView, { props: { type }})
    }
  }
}

let router =  new Router({
  // mode: 'abstract',
  saveScrollPosition: true,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    { path: '/home', component: HomeView },
    { path: '/news', component: NewsView },
    { path: '/info', component: InfoView },
    { path: '/', redirect: '/home' }
  ]
})
Vue.$router = router
export default router