<template>
    <div class="interest">
        <div class="header">
            <div class="headerLabel">INTEREST</div>
        </div>

        <div class="background">
            <md-list style="background-color: #f8f8f9">
                <md-list-item class="listbackground">
                    <span class="md-list-item-text listItemText">Arts & Entertaiment</span>
                    <md-checkbox v-model="tag" value="Arts & Entertaiment" />
                </md-list-item>

                <md-list-item class="listbackground">
                    <span class="md-list-item-text listItemText">Computer & Electronics</span>
                    <md-checkbox v-model="tag" value="Computer & Electronics" />
                </md-list-item>

                <md-list-item class="listbackground">
                    <span class="md-list-item-text listItemText">Food & Drinks</span>
                    <md-checkbox v-model="tag" value="Food & Drinks" />
                </md-list-item>

                <md-list-item class="listbackground">
                    <span class="md-list-item-text listItemText">games</span>
                    <md-checkbox v-model="tag" value="games" />
                </md-list-item>
            </md-list>

            <div class="buttoncenter">
                <md-button v-on:click="finish()" class="buttonBlue">FINISH</md-button>
            </div>
        </div>
       
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'interest',
        components: {},
        methods: {
            finish: function () {
                this.$router.push('/app/event');
            }
        },
        data() {
            return {

            tag: ['Arts & Entertaiment', 'Computer & Electronics','Food & Drinks','games']
            }
    },
        
    }
</script>

<style scoped lang="scss">

.header{
    width: auto;
    height: 150px;
    background-color: #70c6be;
}
.headerLabel {
    position: relative;
    bottom: -50%;
    left: 20px;
    align-items: center;
    font-size: 50px;
}
.buttoncenter{
    align-content: center;
    left: 10%;
    position: relative;
}
.listbackground{
    background-color: #f8f8f9;
    align-content: center;
}
.listItemText{
    color: #000000;
}
.background{
    background-color: #f8f8f9;
    height: 500px;
}
</style>
