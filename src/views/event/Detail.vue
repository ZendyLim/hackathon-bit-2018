<template>
    <div>
        <div class="header">
            <div>
                <label v-on:click="back()" class="back" ><</label>
                <md-icon class="notif">notifications</md-icon>
            </div>
             <img src="./DSC07395.jpg" class="eventimage">
            <!-- <div class="eventimage"></div> -->
           <!--  <img src="https://via.placeholder.com/350x150"  class="eventimage"> -->
        </div>
        <div class="whitebackground">
            <div class="container">
                <div class="eventtitle">
                    {{detail.name}}
                </div>
                <div class="eventdate">14:00 {{detail.date}}, Okutama</div>
                <p align="justify">
                    An #IOT Pizza Party! IOT Geeks met with pizza lovers during the event and made both their own versions of  pizza, coded and built their  own DIY # RaspberryPI controlled
                </p>

                <div style="float: left">
                    <img src="https://3ek9gx368g2n28ygtw3vknmg-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2015/10/placeholder-circle-1.png" class="joinmember">
                    <img src="https://3ek9gx368g2n28ygtw3vknmg-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2015/10/placeholder-circle-1.png" class="joinmember">
                    <img src="https://3ek9gx368g2n28ygtw3vknmg-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2015/10/placeholder-circle-1.png" class="joinmember">
                </div>  
                
                <label class="moremember">{{detail.participant}} more people ></label>  
                <md-button v-on:click="join()" class="joinbutton">Join</md-button>
            </div>
        </div>
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
        },
        methods: {
            back: function () {
                this.$router.push('/app/event');
            },
            join: function(){
                this.$router.push('/app/chat');
            }
        }
    }
</script>

<style scoped lang="scss">
.header{
    width: auto;
    height: 150px;
    background-color: #13bdbf;
    margin-bottom: 20px;
}
.whitebackground{
    background-color: #f8f8f9;
    height: 500px;
    color: #000000;
}
.container{
    margin: auto;
    width: 90%;
    padding: 10px;
    align-content: center;
    text-align: center;
}
.eventtitle{
    font-size: 20px;
    text-align: left;
    padding-top: 80px;
}
.eventdate{
     font-size: 13px;
    text-align: left;
    padding-top: 10px;
    color:#13bdbf;
}
.back{
    font-size: 30px;
    color: #ffffff;
    float: left;
    padding-left: 5px;
    padding-top: 5px;
}
.notif{
    float: right;
    padding-top: 5px;
    padding-right: 5px;
}
.eventimage{
    width: 100%;
    margin-top: 20px;

}
.joinbutton{
    width: 100%;
    background-color: #13bdbf;
    margin: auto;
    border-radius: 10px;
    margin-top: 10px;
}
.joinmember{
 width: 50px;
 height: 50px;
}
.moremember{
    font-size: 13px;
    float: right;
    padding-top: 10px;
    color:#13bdbf;
}
div.eventimage{
    background-image: url('./DSC07395.jpg');
    background-color:#ffffff;
    position: absolute;
    width: auto;
    height:150px;
}
</style>