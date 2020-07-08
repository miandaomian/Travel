<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <i class="iconfont iconsousuo"></i>输入游玩城市
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <i class="iconfont iconjiantouxia"></i>
            </div>
        </router-link>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'HomeHeader',
        computed:{
            ...mapState(['city'])
        }
    }
</script>
<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    .header
        display flex
        line-height $headerHeight
        background $bgColor
        color #fff
        .header-left
            width .64rem
            float left
        .back-icon
            text-align center
            font-size .4rem
        .header-input
            flex 1
            height .64rem
            line-height  .64rem
            margin-top .12rem
            margin-left .2rem
            padding-left .2em
            background #fff
            border-radius .1rem
            color #ccc
        .header-right
            min-width 1.04rem
            padding 0.1rem
            float right
            text-align center
            color #fff
            .iconjiantouxia
                margin-left -.04em
                font-size .24em

</style>