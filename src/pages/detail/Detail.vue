<template>
    <div>
        <detail-banner></detail-banner>
        <detial-header></detial-header>
        <div class="content"></div>
    </div>

</template>

<script>
    import DetailBanner from './components/Banner';
    import DetialHeader from "./components/Header";
    export default {
        name: "Detail",
        components: {DetialHeader, DetailBanner}
    }
</script>

<style lang="stylus" scoped>
    .content
        height 50rem
</style>