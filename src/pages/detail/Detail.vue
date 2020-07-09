<template>
    <div>
        <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"
        ></detail-banner>
        <detial-header></detial-header>
        <div class="content">
            <detil-list :list="list"></detil-list>
        </div>
    </div>

</template>

<script>
    import DetailBanner from './components/Banner';
    import DetialHeader from "./components/Header";
    import DetilList from "./components/List";
    import axios from 'axios'
    export default {
        name: "Detail",
        components: {DetilList, DetialHeader, DetailBanner},
        data(){
            return{
                sightName:'',
                bannerImg:'',
                gallaryImgs:[],
                list:[]
            }
        },
        methods:{
            getDetailInfo(){
                axios.get('/api/detail.json?id=',{
                    params:{
                        id: this.$route.params.id
                    }
                }).then(this.handleGetDetailSucc)
            },
            handleGetDetailSucc(res){
                res=res.data
                if (res.ret&&res.data) {
                    const data =res.data
                    this.sightName=res.sightName
                    this.bannerImg=data.bannerImg
                    this.gallaryImgs=data.gallaryImgs
                    this.list=data.categoryList
                }
            }
        },
        mounted() {
            this.getDetailInfo()
        },

    }
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
</style>