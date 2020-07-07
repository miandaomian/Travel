<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <recommend></recommend>
    <weekend></weekend>
  </div>
</template>

<script>
  import HomeHeader from "./components/Header";
  import HomeSwiper from "./components/Swiper";
  import HomeIcons from "./components/Icons";
  import Recommend from "./components/Recommend";
  import Weekend from "./components/Weekend";
export default {
  name: 'Home',
  components: {
    Weekend,
    Recommend,
    HomeIcons,
    HomeSwiper,
    HomeHeader
  }
}
</script>
<style lang="stylus">
</style>