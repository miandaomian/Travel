<template>
    <div>
        <div class="recommend-title">周末游玩</div>
        <ul>
            <li class="item border-bottom"
                v-for="item of list"
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
        props:{
            list:Array
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/mixins.styl"
    .recommend-title
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