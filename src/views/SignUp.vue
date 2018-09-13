<template>
    <div class="login container_center" style="padding-top: 100px">
        <h1>SIGN UP</h1>
        <md-field>
            <md-icon>person</md-icon>
            <label>Name</label>
            <md-input></md-input>
        </md-field>
        <md-field>
            <md-icon>mail</md-icon>
            <label>Email</label>
            <md-input></md-input>
        </md-field>
        <md-field>
            <md-icon>lock</md-icon>
            <label>Password</label>
            <md-input></md-input>
        </md-field>
        <md-field>
            <md-icon>lock</md-icon>
            <label>Confirm Password</label>
            <md-input></md-input>
        </md-field>
        <md-datepicker v-model="birthdate">
            <label>Birthdate</label>
        </md-datepicker>
        <md-button v-on:click="login()" class="buttonBlue">Sign up</md-button>
        <br />
        <label>Already have an account?  <a v-on:click="signin()">SIGN IN</a></label>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'sign-up',
        components: {},
        methods: {
            login: function () {
                //TODO create login  fucntion
                localStorage.setItem('loggedIn', 'true');
                this.$router.push('/interest');
            },
            signin: function () {
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped lang="scss">
   

</style>