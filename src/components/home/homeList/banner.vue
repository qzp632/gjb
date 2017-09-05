<template>
  <div class="banner">
    <ul class="banner_ul" ref="banner_ul" v-if="dataList.length">
      <li v-for="(item, index) in dataList" :key="index" :style="{backgroundImage: 'url(' + item.name + ')'}">
      </li>
    </ul>
    <dots :dotsData="dataList" 
    :itemIndex="bannerIndex" 
    @sotpTime="sotpTime" 
    @setItemDots="setItemDots" 
    @startTime="startTime"></dots>
  </div>
</template>

<script>
import axios from 'axios'
import dots from './dots'
export default{
  data() {
    return {
      seed: 3000,
      bannerIndex: 0,
      dataList: []
    }
  },
  created() {
    this.getData()
  },
  mounted() {
      setTimeout( () => {
        this.getBanner()
      },20)
  },
  methods: {
    getData() {
      axios.get('api/banner')
      .then( (res) => {
        this.dataList = res.data.dataList
      }).catch( (err) => {
        console.log(err)
      })
    },
    getBanner() {
      const banner_ul = this.$refs.banner_ul;
      const li_one = banner_ul.getElementsByTagName("li")
      let bannerCount = li_one.length;
      li_one[this.bannerIndex].style.opacity = 1.0;

        this.sTime = setInterval( () => {
        this.bannerIndex++;
        if ( this.bannerIndex > bannerCount - 1 ) {
          this.bannerIndex = 0
        }
        this.setBanner(li_one)     
      },this.seed)    
    },
    sotpTime() {
      clearInterval(this.sTime)
    },
    setItemDots(index) {
      this.bannerIndex = index
      const banner_ul = this.$refs.banner_ul;
      const li_one = banner_ul.getElementsByTagName("li") 
      this.setBanner(li_one)
    },
    startTime() {
      this.getBanner();
    },
    setBanner(li_one) {
      for(var i = 0; i < li_one.length; i++) {
          if( this.bannerIndex === i ) {
            li_one[i].style.opacity = 1.0;
          }else{
            li_one[i].style.opacity = 0;
          }
      } 
    }
  },
  components: {
    dots
  }
}
</script>

<style scoped lang="less">
@widths: 100%;
@heights: 100%;
@bg888: #888;
@bgccc: #ccc;
@colors: red;

.banner {
  width: @widths;
  height: 446px;
  background: @bgccc;
  position: relative;
  .banner_ul {
    width: @widths;
    height: @heights;
    position: absolute;
    li {
      width: @widths;
      height: @heights;
      color: @colors;
      background: @bg888;
      text-align: center;
      font-size: 36px;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition:all .5s;
    }
  }
}
</style>
