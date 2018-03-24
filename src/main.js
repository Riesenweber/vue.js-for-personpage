// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import Vuex from 'vuex'
import $ from 'jquery'
import 'jquery.easing'
// import WOW from '../static/wow.js'
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI)

const store=new Vuex.Store({
  state:{
    nav:0,
    Dom:{},
    scroll:0
  },
  mutations:{
    changeNav(state,flag){
        state.nav=flag;
    },
    findDom(state,doms){
        state.Dom[doms.name]=doms.dom;
    },
    scroll(state,scroll){
      state.scroll=scroll;
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
