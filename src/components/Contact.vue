<template>
  <div class="box" ref="box4">
      <div class="title">
         CONTACT ME
      </div>
      <hr>
      <p>get in touch</p>
      <form action="#" method="get">
          <div class="form">
          <input type="text" placeholder="Name">
          <input type="text" placeholder="Email">
          <textarea placeholder="Message" v-model="textarea1" rows="3"></textarea>
          <input class="send" type="submit" value="Send">
          </div>
      </form>
  </div>
</template>
<<script>
export default {
    data(){
       return {
           input1:'',
           input2:'',
           textarea1:''
       }
    },
    mounted(){
      this.$store.commit('findDom',{name:'contact',dom:this.$refs.box4})
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
.form{
    margin:auto;
    max-width:500px;
    padding:0px 20px;
}
.form input[type='text'],textarea{
    border:2px solid #000;
    min-height:45px;
    box-sizing:border-box;
    width:100%;
    padding:6px 12px;
    font-size:14px;
    margin-bottom:20px;
    color:#0d0d0d;
}
.form textarea{
    height:140px;
    resize:none;
    font-family:inherit;
}
.send{
    margin-bottom:20px;
    background-color:#000;
    color:#fff;
    border:none;
    width:100%;
    min-height:60px;
    cursor:pointer;
    width:100%;
    transition:all .2s linear;
    font-size:20px;
}
.send:hover{
     background-color:#fff;
     border:2px solid #000;
    color:#000;
}
</style>
