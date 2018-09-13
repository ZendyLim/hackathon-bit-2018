<template>
    <div>
        {{detail.name}}
    </div>
</template>

<script>
    export default {
        name: "Detail",
        data: function () {
            return {
                detail: {}
            }
        },
        mounted: function () {
            const events = JSON.parse(localStorage.getItem('events'));

            const data = events.data;

            const id =  this.$route.params.id;
            console.log(id);

            let detail;

            data.forEach(function (y) {
                if (id == y.id) {
                    detail = y;
                }
            });

            this.detail = detail;
        }
    }
</script>

<style scoped>

</style>