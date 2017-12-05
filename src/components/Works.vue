<template>
  <div class="box" ref="box2">
      <div class="title">
          MY WORKS
      </div>
      <hr>
      <p>Show All My Works Hope You Like</p>
      <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="8"><div class="item"><img src="http://demo.cssmoban.com/cssthemes4/sbtp_57_rise/img/portfolio/1.jpg">
          <div class="op">
           <p>旋转木马轮播图</p>
          </div></div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8"><div class="item"><img src="http://demo.cssmoban.com/cssthemes4/sbtp_57_rise/img/portfolio/2.jpg"><div class="op"></div></div></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8"><div class="item"><img src="http://demo.cssmoban.com/cssthemes4/sbtp_57_rise/img/portfolio/3.jpg"><div class="op"></div></div></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8"><div class="item"><img src="http://demo.cssmoban.com/cssthemes4/sbtp_57_rise/img/portfolio/4.jpg"><div class="op"></div></div></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8"><div class="item"><img src="http://demo.cssmoban.com/cssthemes4/sbtp_57_rise/img/portfolio/5.jpg"><div class="op"></div></div></el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8"><div class="item"><img src="http://demo.cssmoban.com/cssthemes4/sbtp_57_rise/img/portfolio/6.jpg"><div class="op"></div></div></el-col>
      </el-row>
  </div>
</template>
<<script>
export default {
    mounted(){
      this.$store.commit('findDom',{name:'works',dom:this.$refs.box2})
    }
}
</script>

<<style scoped>
.box{
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
.item{
    cursor:pointer;
    position:relative;
    background-color:#fff;
    border: none;
    max-width:650px;
    overflow:hidden;
}
.item img{
    display:block;
    max-width:100%;
    height:auto;
    border:0;
}
.op{
    position:absolute;
    top:0;
    width:100%;
    height:100%;
    background-color:rgba(1,1,1,0.6);
    -webkit-transition: all .3s  ease-in-out;
    -moz-transition: all .3s  ease-in-out;
    transition: all .3s  ease-in-out;
    opacity:0;
}
.op p{
    position:absolute;
    width:100%;
    font-size:28px;
    top:50%;
    transform:translateY(-50%);
    text-align:center;
    color:#fff;
}
.item:hover .op{
    opacity:1;
}
</style>
