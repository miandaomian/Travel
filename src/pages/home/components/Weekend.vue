<template>
    <div>
        <div class="recommend-title">周末游玩</div>
        <ul>
            <li class="item border-bottom"
                v-for="item of recommendList"
                :key="item.id"
            >
                <div class="iteam-img-wrapper">
                    <img class="item-img" :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Weekend",
        data(){
            return {
                recommendList:[{
                    id:'001',
                    imgUrl:'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
                    title:'北京野生动物园',
                    desc:'北京野生动物园(AAAA景区)'
                },{
                    id:'002',
                    imgUrl:'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
                    title:'北京野生动物园',
                    desc:'北京野生动物园(AAAA景区)'
                },{
                    id:'003',
                    imgUrl:'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
                    title:'北京野生动物园',
                    desc:'北京野生动物园(AAAA景区)'
                },{
                    id:'004',
                    imgUrl:'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
                    title:'北京野生动物园',
                    desc:'北京野生动物园(AAAA景区)'
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/mixins.styl"
    .recommend-title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem
    .iteam-img-wrapper
        overflow hidden
        .item-img
            width 100%
    .item-info
        padding .1rem
        .item-title
            line-height .54rem
            font-size  .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()

</style>