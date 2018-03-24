<template>
  <div id="app">
    <!-- 导航栏 -->
    <navbar></navbar>
    <!-- 导航栏结束 -->
    <!-- 轮播图 -->
    <carous></carous>
    <!-- 轮播图结束 -->
    <!-- my works -->
    <works></works>
    <!-- my works结束 -->
    <!-- about me -->
    <about></about>
    <!-- about me 结束 -->
    <!-- contact me -->
    <contact></contact>
    <!-- contact me 结束 -->
    <!-- footer -->
    <Tfooter></Tfooter>
    <!-- footer结束 -->
  </div>
</template>

<script>
import navbar from './components/NavBar.vue'
import carous from './components/Carous.vue'
import works from './components/Works.vue'
import about from './components/About.vue'
import contact from './components/Contact.vue'
import Tfooter from './components/Footer.vue'
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
         this.$store.commit('scroll',$(document).scrollTop()+$(window).height());
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
    about,
    contact,
    Tfooter
  },
  methods:{
    move(key){
      // var works=document.getElementsByTagName("works")[0];
      if(key==1){
        // this.scrollAnimate(this.DOM.carous,0.05)
        $('html,body').animate({scrollTop:this.DOM.carous.offsetTop}, 1500,'easeInOutExpo');       
      }else if(key==2){
        // var all=this.DOM.works.offsetTop;
        $('html,body').animate({scrollTop:this.DOM.works.offsetTop}, 1500,'easeInOutExpo'); 
        // this.scrollAnimate(this.DOM.works,0.05);
      }else if(key==3){
         $('html,body').animate({scrollTop:this.DOM.about.offsetTop}, 1500,'easeInOutExpo'); 
      }else if(key==4){
         $('html,body').animate({scrollTop:this.DOM.contact.offsetTop}, 1500,'easeInOutExpo'); 
      }
    },
    // scrollAnimate(scrollto,sp){
    //     var fn=setInterval(()=>{
    //       var all=scrollto.offsetTop;
    //       var flag=true;
    //       if(Math.floor(document.body.scrollTop)!=all){
    //         flag=false;
    //       }
    //       var speed=(all-document.body.scrollTop)*sp;
    //       speed = speed > 0 ? Math.ceil(speed): Math.floor(speed);
    //           document.body.scrollTop=document.body.scrollTop+speed;
    //           console.log(document.body.scrollTop)
    //           if(flag){
    //             clearInterval(fn);
    //           }
    //       },1)
    // }
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
a{
  border:none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color:transparent;
  outline:none;
 }
 li{
   -webkit-tap-highlight-color:rgba(255,0,0,0);
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
