// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI)

const store=new Vuex.Store({
  state:{
    nav:0,
    Dom:{}
  },
  mutations:{
    changeNav(state,flag){
        state.nav=flag;
    },
    findDom(state,doms){
        state.Dom[doms.name]=doms.dom;
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
