<template>
  <div class="hello">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" text-color="#ffffff" active-text-color="#cccccc" background-color="#24242a" @select="handleSelect">
  <el-menu-item index="1">HOME</el-menu-item>
  <el-menu-item index="2">WORKS</el-menu-item>
  <el-menu-item index="3">ABOUT</el-menu-item>
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
}
</style>
