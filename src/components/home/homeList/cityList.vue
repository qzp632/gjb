<template>
    <div>
        <div>{{cityData.country}}</div>
        <ul>
            <li v-for="item in cityData.provinces">
                <h2 style="margin-top: 10px;">{{item.province}}</h2>
                <ul style="overflow: hidden;">
                    <li v-for="cis in item.citys" style="float: left;margin-left: 10px;font-weight: bold;font-size: 20px;">
                        {{cis}}  
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cityData:''
        }
    },
    mounted() {
        this.cityData = JSON.parse(localStorage.lastname)
        console.log(this.cityData)
    }
}
</script>

<style scoped lang="less">

</style>
