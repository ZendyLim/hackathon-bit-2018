<template>
    <div>
        <md-list class="md-double-line white">
            <md-subheader>Recommended</md-subheader>

            <router-link :to="`/app/event/detail/${rEvent.id}`" v-for="rEvent in recommended" :key="rEvent.id">
                <md-list-item>
                    <div>
                        <img src="https://via.placeholder.com/100x60"/>
                    </div>

                    <div class="md-list-item-text padd" >
                        <span>{{rEvent.name}}</span>
                        <span>Okutama</span>
                    <span>A event description</span>
                    </div>
                </md-list-item>
            </router-link>

            <md-divider></md-divider>
            <md-subheader>Popular</md-subheader>

            <md-list-item v-for="pEvent in popular" :key="pEvent.id">
                <div>
                    <img src="https://via.placeholder.com/100x60"/>
                </div>

                <div class="md-list-item-text padd">
                    <span>{{pEvent.name}}</span>
                    <span>Okutama</span>
                    <span>A event description</span>
                </div>
            </md-list-item>

            <md-divider></md-divider>
            <md-subheader>Category</md-subheader>

            <md-list-item v-for="cat in category" :key="cat.id">
                <div>
                    <img src="https://via.placeholder.com/100x60"/>
                </div>

                <div class="md-list-item-text padd">
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

            const data = events.data;

            events.recommended.forEach((x) => {
                data.forEach((y) => {
                    if(x === y.id){
                        this.recommended.push(y);
                    }
                })
            });

            events.popular.forEach((x) => {
                data.forEach((y) => {
                    if(x === y.id){
                        this.popular.push(y);
                    }
                })
            });

            this.category = events.category;
        },
        method: {}
    }
</script>

<style scoped>
.whitebackground{
    background-color: #f8f8f9 !important;
    height: 500px;
    color: #000000;
    position: absolute;

}
.padd{
    padding-left: 10px;
}

</style>