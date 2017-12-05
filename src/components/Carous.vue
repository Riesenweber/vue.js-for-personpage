<template>
  <div class="box" ref="box1">
      <transition-group name="slide" tag="div">
        <div @mouseover="show()" @mouseout="display()" class="item" v-for="(item,index) in imgData" v-bind:key="item.url" v-if="NUM==index" :style="{'background-image': 'url(' + item.url + ')'}">
            <p>{{item.insert}}</p>
        </div>
      </transition-group>
      <div class="btn">
          <ul>
              <li @click="btnClick(index)" @mouseover="stop()" @mouseout="play()" v-for="(item,index) in imgData" :class="NUM==index?'active':''"></li>
          </ul>
      </div>
      <transition name="left">
      <div @mouseover="next=true" @click="prevImg()" class="lb" v-show="next"><</div>
      </transition>
      <transition name="right">
      <div @mouseover="next=true" @click="nextImg()" class="rb" v-if="next">></div>
      </transition>
  </div>
</template>
<script>
export default {
  data(){
      return {
          imgArr:[{"url":'http://demo.cssmoban.com/cssthemes4/sbtp_57_rise/img/sliders/Slide.jpg',"insert":"I AM HAILONG ZHANG"},
          {"url":'http://demo.cssmoban.com/cssthemes4/sbtp_57_rise/img/sliders/Slide2.jpg',"insert":"NICE TO"},
          {"url":'http://demo.cssmoban.com/cssthemes4/sbtp_57_rise/img/sliders/Slide3.jpg',"insert":"MEET YOU"}
          ],
          num:0,
          interval:'',
          next:false
      }
  },
  mounted:function(){
      this.play();
      this.$store.commit('findDom',{name:'carous',dom:this.$refs.box1})
  },
  computed:{
      imgData(){
         return this.imgArr
      },
      NUM(){
        return this.num
      }
  },
  methods:{
    play(){
       this.interval=setInterval(()=>{
          if(this.num==this.imgArr.length-1){
              this.num=0;
          }else{
               this.num++;
          }
      },3000)
    },
    btnClick(index){
        this.num=index;
     },
    stop(){
        clearInterval(this.interval);
    },
    show(){
        this.next=true;
    },
    display(){
        this.next=false;
    },
    nextImg(){
         if(this.num==this.imgArr.length-1){
              this.num=0;
          }else{
               this.num++;
          }
          this.stop();
          this.play();
    },
    prevImg(){
          if(this.num==0){
              this.num=this.imgArr.length-1;
          }else{
               this.num--;
          }
          this.stop();
          this.play();
    }
  }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
li{
    height:0;
    list-style: none;
}
.slide-enter-active{
             transition: opacity .2s linear;
}
.slide-leave-active {
             transition: transform .5s linear;
             transform: rotate(400deg) scale(0);
}
.slide-enter,.slide-leave{
             opacity: 0;
}
.left-enter-active{
             transition:transform .5s ease;
}
.left-leave-active {
             transition:transform .5s ease;
             transform: translateX(-50px);
}
.left-enter,.left-leave{
            transform: translateX(-50px);
}
.right-enter-active{
             transition:transform .5s ease;
}
.right-leave-active {
             transition:transform .5s ease;
             transform: translateX(100%);
}
.right-enter,.right-leave{
             transform: translateX(100%);
}
.box{
    position: relative;
    height:100%;
    width:100%;
    transform-style: preserve-3d;
    perspective: 2000px;
    overflow: hidden;
}
.item{
    height:100%;
    width:100%;
    background-repeat: no-repeat;
    background-size:100% 100%;
    position:absolute;
    color: #fff;
    font-family: "微软雅黑";
    font-size: 80px;
    line-height: 100%;
    text-align: center;
}
.item p{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 800px;
    font-family: "微软雅黑";
    font-size: 80px;
    text-align: center;
    word-wrap:break-word;
}
.btn{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;
}
.btn ul li{
    margin-right:10px; 
    float: left;
     border-radius: 50%;
    width: 10px;
    height: 10px;
    border:2px solid #CCC;
    cursor: pointer;
}
.active{
    background-color:#CCC;
}
.lb,.rb{
    height: 50px;
    width:50px;
    position: absolute;
    background-color:#fff;
    color:#AAA;
    font-size: 25px;
    line-height: 50px;
    text-align: center;
    top: 50%;
    margin-top: -25px;
    cursor: pointer;
}
.lb{
   left: 0px;
}
.rb{
    right: 0px;
}
</style>
