<template>
    <div class="wrapper">
        <swiper :options="swiperOptions" v-if="showSwiper">
            <swiper-slide v-for="item in list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props:{
            list: Array
        },
        data (){
            return{
                swiperOptions:{
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop:true
                }
            }
        },
        computed:{
            showSwiper(){
                return this.list.length
            }
        }

    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    .wrapper >>> .swiper-pagination-bullet-active
        background red !important
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 30%
        .swiper-img
            width 100%
</style>