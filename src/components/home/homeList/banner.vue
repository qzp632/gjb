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
      country: '',
      cityList: '',
      provinces: [],
      citys: [],
      ciList: [],
      dataList: []
    }
  },
  created() {
    this.getData()
  },
  mounted() {
      setTimeout( () => {
        this.getBanner()
        this.getCity()
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
    getCity() {
      axios.get('https://way.jd.com/AladdinBigData/analyse_util_area?appkey=23740912888eb582b49ed8aae822da56&is_child=0')
      .then( (res) => {
        this.cityList = res.data.result.data[2];

        this.country = this.cityList.text

        for (let i in this.cityList.children) {

          this.citys.push(this.cityList.children[i].children)

          var provincesObj = {

            province:this.cityList.children[i].text

          }

          this.provinces.push(provincesObj)
        }    

        for (let i = 0; i < this.provinces.length; i++) {

          this.provinces[i].citys = this.abs(i)

        }

        var countryList = {

          country: this.country,

          provinces: this.provinces

        }

        localStorage.lastname = JSON.stringify(countryList)
        console.log(JSON.parse(localStorage.lastname))

        console.log(countryList)

      }).catch( (err) => {
        console.log(err)
      })
    },
    abs(n) {
      this.ciList = []
      for(var i in this.citys[n]) {
       this.ciList.push(this.citys[n][i].text)

      }
      return this.ciList
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
