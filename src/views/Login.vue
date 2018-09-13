<template>
    <div class="login">
        <div class="container_center">
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
        
            <a>Forgot password?</a>
            <md-button v-on:click="login()" class="buttonBlue">Login</md-button>
            <br />
            <label>Don't have an account?  <a v-on:click="signup()">SIGN UP</a></label>
            
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'login',
        components: {},
        methods: {
            login: function () {
                //TODO create login  fucntion
                localStorage.setItem('loggedIn', 'true');
                this.$router.push('/');
            },

            signup: function () {
                this.$router.push('/signup');
            }
        }
    }
</script>

<style scoped lang="scss">
    a.labelcenter{
        text-decoration: underline; 
        color: #ffffff;
    }

</style>
