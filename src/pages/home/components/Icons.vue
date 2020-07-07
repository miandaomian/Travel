<template>
<div class="icons">
    <swiper >
        <swiper-slide v-for="(page,index) of pages" :key="index">
            <div class="icon"
                 v-for="item of page"
                 :key="item.id"
            >
                <div class="icon-img">
                    <img class="icon-img-content" :src="item.imgUrl" >
                    <p class="icon-desc"> {{item.dexc}}</p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</div>
</template>


<script>
export default {
    name:'HomeIcons',
    data() {
        return {
            iconsList: [{
                id: '001',
                imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                dexc: '景点门票'
            }, {
                id: '002',
                imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                dexc: '一日游'
            },{
                id: '003',
                imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/4c/eac47dd8def8de02.png',
                dexc: '北京圆博园北京圆博园北京圆博园'
            },{
                id: '004',
                imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                dexc: '故宫'
            },{
                id: '005',
                imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                dexc: '圆明园'
            }, {
                id: '006',
                imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
                dexc: '古北水镇'
            },{
                id: '007',
                imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
                dexc: '香山公园'
            },{
                id: '008',
                imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
                dexc: '凤凰岭'
            },{
                id: '009',
                imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
                dexc: '踏青赏花'
            }]
        }
    },
    computed: {
        pages (){
            const pages= []
            this.iconsList.forEach((item,index)=>{
                const page=Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>


<style lang="stylus" scoped>
    @import "~@/assets/styles/varibles.styl"
    @import "~@/assets/styles/mixins.styl"
    .icons >>>.swiper-container
        height 0
        padding-bottom 50%
    .icon
        position relative
        overflow hidden
        float left
        width 25%
        height 0
        padding-bottom 25%
        .icon-img
            text-align center
            position absolute
            top 0
            left 0
            right 0
            bottom .44rem
            .icon-img-content
                height 100%
        .icon-desc
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            color $darkTextColor
            ellipsis()
</style>