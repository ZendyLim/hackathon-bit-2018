<template>
    <div>
        <md-list class="md-double-line">
            <md-subheader>Recommended</md-subheader>

            <md-list-item v-for="rEvent in recommended" :key="rEvent.id">
                <div>
                    <img src="https://via.placeholder.com/100x60"/>
                </div>

                <div class="md-list-item-text">
                    <span>{{rEvent.name}}</span>
                    <span>Mobile</span>
                    <span>Mobileasdasdsadsadsadasds</span>
                </div>
            </md-list-item>

            <md-divider></md-divider>
            <md-subheader>Popular</md-subheader>

            <md-list-item v-for="pEvent in popular" :key="pEvent.id">
                <div>
                    <img src="https://via.placeholder.com/100x60"/>
                </div>

                <div class="md-list-item-text">
                    <span>{{pEvent.name}}</span>
                    <span>Mobile</span>
                    <span>Mobileasdasdsadsadsadasds</span>
                </div>
            </md-list-item>

            <md-divider></md-divider>
            <md-subheader>Category</md-subheader>

            <md-list-item v-for="cat in category" :key="cat.id">
                <div>
                    <img src="https://via.placeholder.com/100x60"/>
                </div>

                <div class="md-list-item-text">
                    <span>{{cat.name}}</span>
                </div>
            </md-list-item>
        </md-list>
    </div>
</template>

<script>
    export default {
        name: "ChatHome",
        data: function () {
            return {
                recommended: [],
                popular: [],
                category: []
            }
        },
        mounted: function () {
            const events = JSON.parse(localStorage.getItem('events'));
            this.recommended = events.recommended;
            this.popular = events.popular;
            this.category = events.category;
        }
    }
</script>

<style scoped>

</style>