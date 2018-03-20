<template>
  <div class="hello">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" text-color="#ffffff" active-text-color="#cccccc" background-color="#24242a" @select="handleSelect" menu-trigger="click">
  <i></i>
   <el-submenu index="5">
    <template slot="title"> <el-button plain></el-button></template>
    <el-menu-item index="1">HOME</el-menu-item>
    <el-menu-item index="2">WORKS</el-menu-item>
    <el-menu-item index="3">ABOUT</el-menu-item>
    <el-menu-item index="4">CONTACT</el-menu-item>
  </el-submenu>
  <el-menu-item index="1">HOME</el-menu-item>
  <el-menu-item index="2">WORKS</el-menu-item>
  <el-menu-item index="3">ABOUT</el-menu-item>
  <el-menu-item index="4">CONTACT</el-menu-item>
  </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed:{
     Nav(){
       return this.$store.state.nav;
     }
  },
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
  methods: {
      handleSelect(key, keyPath) {
        this.$store.commit('changeNav',key);
      }
    }
}
</script>
<style scoped>
.hello{
position:fixed;
top:30px;
left:0;
width:100%;
z-index: 100;
}
.el-menu{
    border-radius: 0;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
}
.el-menu i{
  height: 60px;
  width: 60px;
  position: absolute;
  left: 100px;
  background: url("../assets/logo.png") no-repeat;
  background-size: contain;
}
.el-submenu{
  display: none;
}
.el-menu-item{
  height: 80px;
  line-height: 80px;
}
@media screen and (max-width:800px){
.el-menu{
    justify-content: flex-start;
  }
  .el-menu-demo>.el-menu-item:nth-of-type(n){
    display: none;
  }
  .el-menu i{
    display: none;
  }
  .el-menu .el-button{
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    margin: 10px 20px;
    background: url("../assets/caidan.png") no-repeat;
    background-size: contain;
  }
  .el-submenu{
    display: block;
  }
  .el-submenu-title{
    border: none;
  }
}
</style>
