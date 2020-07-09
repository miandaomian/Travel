<template>
    <div>
        <div class="header-abs"></div>
        <div class="hearder-fixed"></div>
    </div>
</template>

<script>
    export default {
        name: "DetialHeader"
    }
</script>

<style lang="stylus" scoped>
    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        border-radius .4rem
        line-height .8rem
        text-align center
        background rgba(0,0,0,.8)
</style>