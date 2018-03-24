<template>
  <div class="aboutme" ref="box3">
      <div class="title">
          ABOUT ME
      </div>
      <hr>
      <p>Practice makes perfect</p>
      <div class="about">
          <ul>
              <li class="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s"><div class="item"><img src="../assets/age.png"></div><p>年龄/21</p></li>
              <li class="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s"><div class="item"><img src="../assets/study.png"></div><p>学历/本科</p></li>
              <li class="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s"><div class="item"><img src="../assets/local.png"></div><p>坐标/成都</p></li>
              <li class="wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s"><div class="item"><img src="../assets/now.png"></div><p>状态/找工作ing</p></li>
          </ul>
      </div>
      <div class="famous">
          <div class="container">
              <h1>WITH YOU</h1>
              <hr>
              <p>famous sayings of famous persons</p>
              <div class="carous">
                  <transition name="word">
                     <div class="carous-item" v-for="(item,index) in words" v-if="num==index" :key="index"><h5>{{item}}</h5></div>
                  </transition>
              </div>
              <div class="carous-btn">
                  <ul>
                      <li @mouseover="stop()" @mouseout="play()" @click="change(index)" v-for="(item,index) in words" :class="{active:index==num}"></li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>
<<script>
export default {
    data(){
      return {
          words:["1 It was the best of times, it was the worst of times; it was the age of wisdom, it was the age of foolishness;",
          "2 It was the best of times, it was the worst of times; it was the age of wisdom, it was the age of foolishness;",
          "3 It was the best of times, it was the worst of times; it was the age of wisdom, it was the age of foolishness;"],
          num:0,
          interval:{}
      }
    },
    mounted(){
      this.$store.commit('findDom',{name:'about',dom:this.$refs.box3});
      this.play();
    },
    methods:{
        play(){
            this.interval=setInterval(()=>{
                if(this.num==this.words.length-1){
                    this.num=0;
                }else{
                    this.num++;
                }
            },2000)
        },
        change(index){
               this.num=index;
        },
        stop(){
               clearInterval(this.interval);
        },
    }
}
</script>

<style scoped>
.word-enter-active{
             animation: enter 1s linear;
}
.word-leave-active {
    position: absolute;
              animation: leave .5s linear;
}
.word-enter{
            opacity: 0; 
}
.word-leave-to{
             opacity: 1; 
}
@keyframes leave{
    0%{
        transform: translate3d(0,0,-150px)
    }
    25%{
        transform: translate3d(0,0,-300px)
    }
    50%{
        transform: translate3d(0,0,-300px)
    }
    75%{
         transform: translate3d(-600px,0,-300px)
    }
    100%{
         transform: translate3d(-900px,0,-300px)
    }
}
@keyframes enter {
    0%{
        /* position: absolute; */
        transform: translate3d(1800px,0,-300px);
    }
    25%{
        transform: translate3d(1800px,0,-300px);
    }
    50%{
        transform: translate3d(900px,0,-300px)
    }
    75%{
         transform: translate3d(0px,0,-300px)
    }
    100%{
         transform: translate3d(0px,0,0px)
    }
}
ul li{
    list-style: none;
}
.aboutme{
    width:100%;
    background-color:white;
}
.title{
    color:#000;
    font-weight:400;
    letter-spacing:0.05em;
    font-family:"微软雅黑";
    font-size:36px;
    margin-top:50px;
}
hr{
    max-width:80px;
    border:2px solid #000;
    margin-top:40px;
    margin-bottom:40px;
}
p{
    margin-bottom:40px;
    font-size:16px;
    font-weight:400;
    font-family:"微软雅黑";
    color:#000;
}
.about{
    display: block;
}
.about ul{
    max-width:800px;
    margin:0 auto;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.item{
    width:80px;
    height:80px;
    margin: 0 auto;
    border: 2px solid #000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content:center;
}
.item img{
    width: 50%;
    height: 50%;
}
.famous{
    position: relative;
    background:url("http://demo.cssmoban.com/cssthemes4/sbtp_57_rise/img/testimonials/Testimonials.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding: 20px 80px 20px 80px;
}
.container,.container p{
    color:#fff;
}
.container hr{
    position: relative;
    border-color: #fff;
}
.carous{
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    /* max-height: 150px; */
    width: 100%;
    overflow: hidden;
    perspective: 1000px;
}
.carous-item{
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    width: 100%;
    justify-content: center;
    font-size: 16px;
    /* font-weight: 400; */
    /* word-wrap:break-word; */
    text-indent: 2em;
    font-family: 'Open Sans', sans-serif;
}
.carous-item h5{
    line-height: 36px;
    font-size: 22px;
}
.carous-btn{
    width: 100%;
    display: flex;
    justify-content: center;
}
.carous-btn ul{
    padding: 0;
}
.carous-btn ul li{
    cursor: pointer;
    width: 10px;
    height:10px;
    float: left;
    margin-right: 10px;
    border: 2px solid #fff;
    border-radius: 50%;
}
.active{
    background: #fff;
}
@media screen and (max-width:600px){
    .carous-item h5{
        font-size: 18px;
    }
    .famous{
        padding: 20px 20px 20px 20px;
    }
}
</style>