<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <navbar></navbar>
    <carous></carous>
    <works></works>
    <about></about>
  </div>
</template>

<script>
import navbar from './components/NavBar.vue'
import carous from './components/Carous.vue'
import works from './components/Works.vue'
import about from './components/About.vue'
export default {
  name: 'app',
  data(){
    return{
      worksHeight:0,
    }
  },
  mounted(){
      // this.worksHeight=this.$refs.box.clientHeight;
      window.addEventListener('scroll',()=>{
        this.$store.commit('changeNav',999);
      })
  },
  computed:{
     Nav(){
       return this.$store.state.nav;
     },
     DOM(){
       return this.$store.state.Dom;
     }
  },
  watch:{
     Nav:{
       handler(val,oldval){
         
         this.move(val);
       }
     }
  },
  components: {
    navbar,
    carous,
    works,
    about
  },
  methods:{
    move(key){
      // var works=document.getElementsByTagName("works")[0];
      if(key==1){
        this.scrollAnimate(this.DOM.carous,0.05)
      }else if(key==2){
        // var all=this.DOM.works.offsetTop;
        this.scrollAnimate(this.DOM.works,0.05);
      }
    },
    scrollAnimate(scrollto,sp){
        var fn=setInterval(()=>{
          var all=scrollto.offsetTop;
          var flag=true;
          if(document.body.scrollTop!=all){
            flag=false;
          }
          var speed=(all-document.body.scrollTop)*sp;
          speed = speed > 0 ? Math.ceil(speed): Math.floor(speed);
              document.body.scrollTop+=speed;
              // console.log(document.body.scrollTop);
              if(flag){
                clearInterval(fn);
              }
          },1)
    }
  }
}
</script>

<style>
body,html{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
