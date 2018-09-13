<template>
    <div id="bottomBar">
        <md-bottom-bar md-sync-route>

            <md-bottom-bar-item to="/app/profile" md-label="Channel" md-icon="event"></md-bottom-bar-item>
            <md-bottom-bar-item to="/app/event" md-label="Event" md-icon="star"></md-bottom-bar-item>
             <md-bottom-bar-item to="/app/chat" md-label="Chat" md-icon="chat"></md-bottom-bar-item>
            

           <!--  <md-bottom-bar-item to="/app/chat" md-label="Chat" md-icon="chat"></md-bottom-bar-item>
            <md-bottom-bar-item to="/app/event" md-label="Event" md-icon="event"></md-bottom-bar-item>
            <md-bottom-bar-item to="/app/profile" md-label="Profile" md-icon="person"></md-bottom-bar-item> -->
        </md-bottom-bar>
    </div>
</template>

<script>
    export default {
        name: "BottomBar"
    }
</script>

<style scoped lang="scss">
    #bottomBar {
        bottom: 0;
        position: fixed;
        width: 100%;
        z-index: 999999;
    }
</style>