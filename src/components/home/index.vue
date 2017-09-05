<template>
    <div>
        <headertop></headertop>
        <headers></headers>
        <banners></banners>
    </div>
</template>

<script>
import headertop from './homeList/headerTop'
import headers from './homeList/header'
import banners from './homeList/banner'
export default {
    components: {
        headertop,
        headers,
        banners
    }
}
</script>

<style scoped lang="less">

</style>
