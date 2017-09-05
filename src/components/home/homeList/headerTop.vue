<template>
  <div class="headerTop">
      <div class="left commWH">
        <div class="useLeft">
          <div class="ion-home homeIcon commstyle"></div>
          <div class="font-home commstyle">首页</div>
          <div class="orIcon commstyle">|</div>
          <div class="ion-android-call teIcon commstyle"></div>
          <div class="font-phone commstyle">400-622-3030（9:00-21:00）</div>
        </div>
      </div>
      <div class="right commWH">
        <div class="useRight">
          <div class="font-home commstyle">你好，请登录，免费注册</div>
          <div class="orIcon commstyle">|</div>
          <div class="font-phone commstyle">帮助中心</div>
          <div class="orIcon commstyle">|</div>
          <div class="ion-chatbubbles teIcon commstyle"></div>
          <div class="ion-android-call teIcon commstyle"></div>
          <div class="font-phone commstyle">移动端下载</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
  @heightTop : 30px;
  @heights : 100%;
  @colors : #999;
  @marginLeft : 11px;
  @font12 : 12px;
  @font18 : 18px;
  .headerTop {
    width: 100%;
    height: @heightTop;
    background: #4c4c4c;
    overflow: hidden;
    .commWH {
      width: 50%;
      height: @heights;
    }
    .left {
      float: left;
      .useLeft {
        overflow: hidden;
        display: flex;
        justify-content: center;
      .commstyle {
          float: left;
          color: @colors;
          height: @heights;
          line-height: @heightTop;
        }
        .homeIcon {
          font-size: @font18;
          margin-left: 5px; 
        }
        .font-home {
          font-size: @font12;
          margin-left: 8px;
        }
        .orIcon {
          font-size: @font12;
          margin-left: @marginLeft;
        }
        .teIcon {
          font-size: @font18;
          margin-left: @marginLeft;        
        }
        .font-phone {
          font-size: @font12;
          margin-left: @marginLeft;        
        }
      }
    }
    .right {
      float: right;
      .useRight {
        overflow: hidden;
        display: flex;
        justify-content: center; 
        .commstyle {
          float: left;
          color: @colors;
          height: @heights;
          line-height: @heightTop;
        }
        .homeIcon {
          font-size: @font18;
          margin-left: 5px; 
        }
        .font-home {
          font-size: @font12;
          margin-left: 8px;
        }
        .orIcon {
          font-size: @font12;
          margin-left: @marginLeft;
        }
        .teIcon {
          font-size: @font18;
          margin-left: @marginLeft;        
        }
        .font-phone {
          font-size: @font12;
          margin-left: @marginLeft;        
        }      
      }
    }
  }
</style>
