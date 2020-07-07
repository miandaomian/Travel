<template>
  <div class="home">
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <recommend :list="recommendList"></recommend>
    <weekend :list="weekendList"></weekend>
  </div>
</template>

<script>
  import HomeHeader from "./components/Header";
  import HomeSwiper from "./components/Swiper";
  import HomeIcons from "./components/Icons";
  import Recommend from "./components/Recommend";
  import Weekend from "./components/Weekend";
  import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Weekend,
    Recommend,
    HomeIcons,
    HomeSwiper,
    HomeHeader
  },
  data(){
      return{
        city:'',
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[]
      }
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json')
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res=res.data
      if(res.ret && res.data){
        const data=res.data
        this.city=data.city
        this.swiperList=data.swiperList
        this.iconList=data.iconList
        this.recommendList=data.recommendList
        this.weekendList=data.weekendList
      }
    }
  },
  mounted() {
    this.getHomeInfo()
  }
}
</script>
<style lang="stylus">
</style>