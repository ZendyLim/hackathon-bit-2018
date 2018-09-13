<template>
    <div id="container">
        <md-content>
            <router-view></router-view>
        </md-content>
        <bottom-bar></bottom-bar>
    </div>
</template>

<script>
    import BottomBar from '@/components/BottomBar.vue';
    import ToolBar from '@/components/ToolBar.vue';

    export default {
        name: 'dashboard',
        components: {BottomBar, ToolBar},
    }
</script>

<style scoped lang="scss">
    #container {
        padding-bottom: 60px;
    }
</style>


