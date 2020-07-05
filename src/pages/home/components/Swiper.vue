<template>
    <div class="wrapper">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data (){
            return{
                swiperOptions:{
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop:true
                },
                swiperList:[
                    {
                        id:'001',
                        imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg'
                    },{
                        id:'002',
                        imgUrl: 'https://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg'
                    }
                ]
            }
        }

    }
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background red !important
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 31.25%
        .swiper-img
            width 100%
</style>