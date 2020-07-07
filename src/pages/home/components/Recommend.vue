<template>
    <div>
        <div class="recommend-title">热销</div>
        <ul>
            <li class="item border-bottom"
                v-for="item of recommendList"
                :key="item.id"
            >
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "recommend",
        data(){
            return {
                recommendList:[{
                    id:'001',
                    imgUrl:'https://imgs.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg',
                    title:'北京野生动物园',
                    desc:'北京野生动物园(AAAA景区)'
                },{
                    id:'002',
                    imgUrl:'https://imgs.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg',
                    title:'北京野生动物园',
                    desc:'北京野生动物园(AAAA景区)'
                },{
                    id:'003',
                    imgUrl:'https://imgs.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg',
                    title:'北京野生动物园',
                    desc:'北京野生动物园(AAAA景区)'
                },{
                    id:'004',
                    imgUrl:'https://imgs.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg',
                    title:'北京野生动物园',
                    desc:'北京野生动物园(AAAA景区)'
                },{
                    id:'005',
                    imgUrl:'https://imgs.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg',
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
    .item
        overflow hidden
        display flex
        height 1.9rem
        .item-img
            width 1.7rem
            height  1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size  .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color #ccc
                ellipsis()
            .item-btn
                line-height hight .44rem
                text-align center
                margin-top .16rem
                background #ff9300
                padding .1rem
                border-radius .06rem
                color #fff
</style>