<template>
  <div class="box" ref="box3">
      <div class="title">
          ABOUT ME
      </div>
      <hr>
      <p>Practice makes perfect</p>
      <div class="about">
          <ul>
              <li><div class="item"><img src="../assets/local.png"></div><p>年龄/21</p></li>
              <li><div class="item"></div><p>学历/本科</p></li>
              <li><div class="item"><img src="../assets/local.png"></div><p>坐标/成都</p></li>
              <li><div class="item"></div><p>状态/找工作ing</p></li>
          </ul>
      </div>
  </div>
</template>
<<script>
export default {
    mounted(){
      this.$store.commit('findDom',{name:'about',dom:this.$refs.box3})
    }
}
</script>

<style scoped>
ul li{
    list-style: none;
}
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
</style>