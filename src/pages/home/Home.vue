<template>
  <div class="home">
    <home-header ></home-header>
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
  import {mapState} from 'vuex'
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
        lastCity:'',
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[]
      }
  },
  computed:{
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json?city='+ this.city)
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res=res.data
      if(res.ret && res.data){
        const data=res.data
        this.swiperList=data.swiperList
        this.iconList=data.iconList
        this.recommendList=data.recommendList
        this.weekendList=data.weekendList
      }
    }
  },
  mounted() {
    this.lastcity=this.city
    this.getHomeInfo()
  },
  activated() {
    if(this.lastCity!== this.city){
      this.lastcity=this.city
      this.getHomeInfo()
    }
  }
}
</script>
<style lang="stylus">
</style>