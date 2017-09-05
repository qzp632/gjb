<template>
    <div class="dots">
        <ol class="dots_ol">
            <li v-for="(item,index) in dotsData" 
            :key="index" 
            :class="{active:itemIndex==index}" 
            @mouseover="clearTime"
            @click="itemDots(item,index)"
            @mouseout="startTime"></li>            
        </ol>
    </div>
</template>

<script>
export default {
    props: {
        dotsData: {
            default:[],
            type: Array
        },
        itemIndex: {
            default: 0,
            type:Number
        }
    },
    methods: {
        clearTime() {
            this.$emit('sotpTime')
        },
        itemDots(item,index) {
            this.$emit('setItemDots',index)
        },
        startTime() {
            this.$emit('startTime')
        }
    }
}
</script>

<style scoped lang="less">
@heights: 100%;
.dots {
    width: 100%;
    height: 6px;
    position: absolute;
    bottom: 16px;
    .dots_ol {
        width: 400px;
        height: @heights;
        position: absolute;
        left: 50%;
        top:0;
        transform: translateX(-50%);
        li {
            width:23%;
            height: @heights;
            margin:0 1%; 
            border-radius: 3px;
            float: left;
            background: #ccc;
            cursor: pointer;
        }
        .active {
            background: red;
        }
    }
}
</style>
