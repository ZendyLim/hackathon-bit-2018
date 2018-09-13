<template>
    <div class="login">
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
        <md-button v-on:click="login()">Login</md-button>
        <md-button v-on:click="signup()">signUp</md-button>
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
