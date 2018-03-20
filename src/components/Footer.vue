<template>
  <div class="box">
      <div class="box1">
      <div class="mes">
          <a>我的简历</a>[<a class="cl"  @click="outerVisible = true">预览</a>][<a class="cl">下载</a>]
      </div>
       <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
        
       </el-dialog>
      <div class="social">
          <div class="bt">
            <el-tooltip placement="top" effect="light">
              <div class="weixin" slot="content"><img src="../assets/weixin.png"></div>
              <el-button></el-button>
            </el-tooltip>
          </div>
          <div class="bt">
            <el-tooltip placement="top" effect="light">
              <div class="weixin" slot="content"><img src="../assets/qq.png"></div>
              <el-button></el-button>
            </el-tooltip>
          </div>
          <div class="bt">
            <el-tooltip placement="top" effect="light">
              <div class="weixin" slot="content"><img src="../assets/weixin.png"></div>
              <el-button></el-button>
            </el-tooltip>
          </div>
      </div>
      </div>
      <div class="box2">
          <div class="cp">© 2018 Copyright.  it is designed by hailong zhang ♥</div>
      </div>
  </div>
</template>
<script>
export default {
    data(){
       return {
           outerVisible: false,
       }
    },
    methods: {
      open5() {
        this.$alert('<div class="jianli"></div>', {
          dangerouslyUseHTMLString: true,
          lockScroll:false
        });
      }
    }
}
</script>

<style scoped>
i{
    list-style: none;
}
.box1{
    padding:60px 0;
    width:100%;
    background-color:#24242a;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.box2{
    background: #111;
    height: 50px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
.mes{
    width: 50%;
    color:#fff;
}
.social{
    width: 50%;
    color: #fff;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
}
.cl{
    color:#db6f6a;
    font-size: 80%;
    cursor: pointer;
}
.bt{
    margin-left: 10px;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.bt:first-child{
    margin-left: 0;
}
.el-button{
    width: 100%;
    height:100%;
    border: none;
}
.bt:nth-child(1) .el-button{
    background:url("../assets/weixinlogo.png") no-repeat;
    background-size: contain;
} 
.bt:nth-child(2) .el-button{
    background:url("../assets/qqlogo.png") no-repeat;
    background-size: contain;
} 
.bt:nth-child(3) .el-button{
    background:url("../assets/weibologo.png") no-repeat;
    background-size: contain;
} 
.weixin{
    width: 150px;
    height: 150px;
}
.weixin img{
    width: 100%;
    height:100%;
}
.jianli{
    width: 500px;
    height: 800px;
    background: url("../assets/jianli.png")
}
@media all and (max-width:800px){
    .box1{
        flex-direction: column;
        align-items: center;
    }
    .box1 .social{
        margin-top: 20px;
    }
    .box2{
        font-size: 12px;
    }
    
}
</style>
