<template>
  <div class="header">
    <div class="nav_height">
      <div class="logo"></div>
      <div class="nav">
        <ul>
          <li v-for="(item,index) in navData" :key="index">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navData: [
        {
          name: "我要投资"
        },
        {
          name: "新手指引"
        },
        {
          name: "信息披露"
        },
        {
          name: "我的账户"
        },
        {
          name: "关于我们"
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  .header {
    width: 100%;
    overflow: hidden;
    .nav_height {
      width: 1170px;
      margin: 0 auto;
    }
    .logo {
      width: 373px;
      height: 52px;
      float: left;
      background: url("../../../assets/imgicon.png") no-repeat;
      background-position: 0 -163px;
      margin: 16px 0 16px 25px;
    }
    .nav {
      height: 52px;
      float: right;
      margin-top: 16px;
      ul {
        margin-top: 8px;
        li {
          height: 36px;
          width: 102px;
          line-height: 36px;
          text-align: center;
          font-size:16px;
          border-radius: 5px;
          margin-left: 34px;
          float: left;
        }
        li:hover {
           background: red;
           cursor: pointer;
        }
      }
    }
  }
</style>
